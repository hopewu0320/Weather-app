import joblib
from sklearn.metrics import accuracy_score, f1_score
import numpy as np

X_train = np.load("X_train.npy")
X_val = np.load("X_val.npy")
y_train = np.load("y_train.npy")
y_val = np.load("y_val.npy")
X_test = np.load("X_test.npy")

model = joblib.load('Weather_model')
#predict
y_pred_decision = model.predict(X_val)
print('Accuracy: %f' % accuracy_score(y_val, y_pred_decision))
print('f1-score: %f' % f1_score(y_val, y_pred_decision))
