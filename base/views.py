from django.shortcuts import render
from .models import Weather
import requests
import pandas as pd
from django.http import JsonResponse
import json
# Create your views here.
#前端重新整理 把df存入資料庫
PATH = './Model/result_df.csv'
def get_data(request):
    result_df = pd.read_csv(PATH) #35156
    #GET 前端的網址
    
    json_list = []
    json_dict = {}
    for index,row in result_df.iterrows():
        row2dict = dict(row)
        json_list.append(row2dict)
    
    with open('sample.json', 'w') as f:
        json.dump(json_list, f)

<<<<<<< HEAD
<<<<<<< HEAD
    json_dict['data'] = json_list
=======
    
>>>>>>> ae3eff55 (New branch)
    
=======
    json_dict['data'] = json_list
    
>>>>>>> 6ae00057 (API connection OK)
    return JsonResponse(json_dict,safe=False)  #should be dictionary or list or dictionary of list
