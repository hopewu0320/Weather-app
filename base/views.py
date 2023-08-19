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
    for index,row in result_df.iterrows():
        if not Weather.objects.filter(Loc=row['Loc'],
        NightTemp=row['NightTemp'],
        DayTemp=row['DayTemp']).exists():
            Weather.objects.create(
                Loc = row['Loc'],
                NightTemp = row['NightTemp'],
                DayTemp = row['DayTemp'],
                NightHumidity = row['NightHumidity'],
                DayHumidity = row['DayHumidity'],
                WindSpeed = row['WindSpeed'],
                real_weather = row['Weather'],
                guess_weather = row['Guess'],
            )
    
    json_list = []
    for index,row in result_df.iterrows():
        row2dict = dict(row)
        json_list.append(row2dict)
    
    with open('sample.json', 'w') as f:
        json.dump(json_list, f)

    context = {}
    
    return JsonResponse(json_list,safe=False)  #should be dictionary or list or dictionary of list
