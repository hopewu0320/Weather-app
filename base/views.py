from django.shortcuts import render
from .models import Weather
import requests
# Create your views here.

def get_data(request):
    
    context = {}
    return render(request,'base/index.html',context)