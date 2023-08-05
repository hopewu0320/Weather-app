#Hint
#1.Encode 非數值的feature
#2.Fill median value to Misiing value
#3.處理Data imbalance問題 eg SMOTE
#4.正規化,feature selection
#處理流程:合併train,test ->Encode non numeric value -> fill Missing value ->(feature selection)-> Normalization -> train_test_split
#https://blog.csdn.net/m0_37725003/article/details/81095555
#https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.VotingClassifier.html
#classification最後 feature selection(講義倒數)
#補缺失值使用 同個class的median(X 不可行) 
#先使用Ensemble方法 不行再用feature selection

import pandas as pd
import numpy as np
from sklearn.preprocessing import LabelEncoder
from sklearn.preprocessing import StandardScaler
from collections import Counter
from sklearn.preprocessing import MinMaxScaler
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.impute import KNNImputer
from imblearn.over_sampling import SMOTE

df_train = pd.read_csv('train.csv') #35156
df_test = pd.read_csv('test.csv') #34844

df_test['Weather'] = np.zeros(len(df_test))
train_end_idx = len(df_train)
df = pd.concat([df_train,df_test],ignore_index=True)



#NightWindDir DayWindDir WindDir Loc Date
#drop Loc,Date
df = df.drop(columns=['Date','Loc','NightWindDir','DayWindDir','WindDir']) 
df0=df[df['Weather']==0]
df1=df[df['Weather']==1]

#針對非數值feature處理
#1.把nan去除後transform 算出median,2.transform整個feature並且把Nan值改成median 3.寫回df
def Non_Numeric_transform(feature):
    le = LabelEncoder()
    le.fit(df[feature])
    feature_Delete_NAN = le.transform(df[feature].dropna()) 
    print(feature_Delete_NAN[:20])
    feature_transform = le.transform(df[feature]) 
    #print("修改前:{}".format(feature_transform[:10]))
    for idx,nan in enumerate(pd.isna(df[feature])): #把nan的idx記錄下來
        if(nan==False):
            feature_transform[idx] = feature_transform[idx]
    #print("修改後:{}".format(feature_transform[:10]))
    df[feature] = feature_transform
    #print('{}有NAN? : {}'.format(feature,df[feature].isnull().values.any()))

Non_numeric_list = ['NightWindDir','DayWindDir','WindDir']
Numeric_list = [c for c in df.columns if c not in Non_numeric_list]




X_train, X_val, y_train, y_val = train_test_split(
    df.drop(columns = ['Weather']).values[:train_end_idx, :],
    df['Weather'].values[:train_end_idx], test_size=0.5,shuffle=True)

X_test = df.drop(columns = ['Weather']).values[train_end_idx:, :]




imputer = KNNImputer(n_neighbors=3)
print("KNNImputer train start")
X_train = imputer.fit_transform(X_train)
print("KNNImputer val start")
X_val = imputer.fit_transform(X_val)
print("KNNImputer test start")
X_test = imputer.fit_transform(X_test)
print("KNNImputer Finish")

sm = SMOTE( random_state=10) #10:0.33
X_train, y_train = sm.fit_resample(X_train, y_train)


scaler = MinMaxScaler().fit(X_train)
X_train = scaler.transform(X_train)
X_val = scaler.transform(X_val)
X_test = scaler.transform(X_test)


np.save('X_train.npy',X_train)
np.save('X_val.npy',X_val)
np.save('y_train.npy',y_train)
np.save('y_val.npy',y_val)
np.save('X_test.npy',X_test)