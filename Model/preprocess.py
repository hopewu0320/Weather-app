import pandas as pd
import numpy as np
from sklearn.preprocessing import LabelEncoder
from sklearn.preprocessing import StandardScaler
from sklearn.impute import KNNImputer
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split
import joblib
from sklearn.metrics import accuracy_score, f1_score

df_train = pd.read_csv('train.csv') #35156
df_test = pd.read_csv('test.csv') #34844

df_test['Weather'] = np.zeros(len(df_test))
train_end_idx = len(df_train) #35156


df = pd.concat([df_train,df_test],ignore_index=True)
df = df.drop(columns=['Date','Loc','NightWindDir','DayWindDir','WindDir']) 
X_train, X_val, y_train, y_val = train_test_split(
    df.drop(columns = ['Weather']).values[:train_end_idx, :],
    df['Weather'].values[:train_end_idx], test_size=0.5,shuffle=True)

#1:1:2
#train:0~17577 #val:17578~35155

X_val = df_train[17578:35156]
X_val = X_val.reset_index()
y_val = X_val[['Weather']]
X_Loc = X_val[['Loc']]
X_val = X_val.drop(columns=['Date','Loc','NightWindDir','DayWindDir','WindDir','Weather','index']) 

imputer = KNNImputer(n_neighbors=3)

X_val = imputer.fit_transform(X_val)

real_data = pd.DataFrame(X_val,columns=["TempLow","TempHigh","Steaming","Sun","WindSpeed","DayWindSpeed","NightWindSpeed","DayHumidity","NightHumidity","DayPressure","NightPressure","DayCloud","NightCloud","DayTemp","NightTemp","RISK_MM"])

print("Transforming")
scaler = MinMaxScaler().fit(X_train)
X_train = scaler.transform(X_train)
X_val = scaler.transform(X_val)
print("Transform finish")
X_val = pd.DataFrame(X_val, columns=["TempLow","TempHigh","Steaming","Sun","WindSpeed","DayWindSpeed","NightWindSpeed","DayHumidity","NightHumidity","DayPressure","NightPressure","DayCloud","NightCloud","DayTemp","NightTemp","RISK_MM"])


X_val['Loc'] = X_Loc
X_val['Weather'] = y_val
X_val = X_val.dropna()
Rainy = X_val[X_val['Weather']==0].sample(40)
Sunny = X_val[X_val['Weather']==1].sample(40)
data = pd.concat([Rainy,Sunny])
sample_Loc = data[['Loc']]
sample_Weather = data[['Weather']]
data = data.drop(columns=['Loc','Weather'])


model = joblib.load('Weather_model')
y_pred_decision = model.predict(data)
y_pred_decision

#real_data把跟data重複的索引取出
result_df = real_data.loc[data.index]



result_df['Loc'] = sample_Loc
result_df['Weather'] = sample_Weather
result_df['Guess'] = y_pred_decision

#predict
y_pred_decision = model.predict(data)

Y_val = result_df['Weather'].to_numpy()
print('Accuracy: %f' % accuracy_score(Y_val, y_pred_decision))
print('f1-score: %f' % f1_score(Y_val, y_pred_decision))

result_df.to_csv('result_df.csv',  index_label = 'Id')