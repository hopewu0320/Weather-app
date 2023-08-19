from django.shortcuts import render
from .models import Weather
import requests
import pandas as pd
# Create your views here.
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
    context = {}
    return render(request,'base/index.html',context)