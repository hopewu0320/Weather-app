from django.contrib import admin
from django.urls import path
from . import views

#把前端初始網址放在path中
urlpatterns = [
    path("", views.get_data,name='get_data'),
]