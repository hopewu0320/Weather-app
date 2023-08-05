
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import AdaBoostClassifier
from sklearn.ensemble import RandomForestClassifier, VotingClassifier
from sklearn.svm import SVC
from xgboost import XGBClassifier
from sklearn.neural_network import MLPClassifier
from sklearn.neighbors import KNeighborsClassifier
import joblib
  
import numpy as np

X_train = np.load("X_train.npy")
X_val = np.load("X_val.npy")
y_train = np.load("y_train.npy")
y_val = np.load("y_val.npy")
X_test = np.load("X_test.npy")

#train tree model
clf1 = AdaBoostClassifier(n_estimators=50,
                         learning_rate=1)
clf2 = RandomForestClassifier(n_estimators=50, criterion = 'gini')

clf3 = XGBClassifier(n_estimators=200, learning_rate= 0.3)

clf4 = MLPClassifier(random_state=1, max_iter=400)

clf5 = MLPClassifier(random_state=1, solver='sgd', max_iter=400)


Weather_model = VotingClassifier(estimators=[
        ('lr', clf1), ('rf', clf2), ('gnb', clf3), ('mlp1', clf4), ('mlp2', clf5)], voting='soft')


# Train Adaboost Classifer
Weather_model.fit(X_train, y_train)
#model = DecisionTreeClassifier()
#model.fit(X_train,y_train)

#save model
joblib.dump(Weather_model, 'Weather_model')