from rest_framework import serializers
from .models import Weather

class WeatherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Weather
        fields = ('Loc','NightTemp', 'DayTemp', 'NightHumidity', 'DayHumidity','WindSpeed','real_weather' \
        ,'guess_weather')
        # fields = '__all__'   # 所有欄位可以這樣寫