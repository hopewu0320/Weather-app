from django.db import models

# Create your models here.

class Weather(models.Model):
    Loc = models.CharField(max_length=200,null=True)
    NightTemp = models.FloatField(null=True)
    DayTemp = models.FloatField(null=True)
    DayHumidity = models.FloatField(null=True)
    NightHumidity = models.FloatField(null=True)
    WindSpeed = models.FloatField(null=True)
    real_weather = models.IntegerField(null=True)
    guess_weather = models.IntegerField(null=True)
    def __str__(self):
        return "Loc: {} NightTemp: {} DayTemp: {}".format(self.Loc,self.NightTemp,self.DayTemp)