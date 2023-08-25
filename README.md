# Quick start
>Prequisite  
>>Django  4.1.2  
>>React  
>>Scikit learn  
>> pandas  
>> numpy  

---
Add following code in package.json.  
If you turn "http://127.0.0.1:8000" to "http://localhost:8000",then mistake occurs  
See https://bobbyhadz.com/blog/react-could-not-proxy-request-to-localhost
```
"proxy": "http://127.0.0.1:8000"
```
## Run code
Decomment Tain Model to get Weather Model and
```
cd WeatherApp\Model\side_weather_app\script\activate
```
```
run Adaboost_MultiModel.ipynb
```
Get result_df
```
python preprocess.py
```

# Note
put the data in the from of   
{data:[
    ......
]
}
```python
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

    json_dict['data'] = json_list
    
    return JsonResponse(json_dict,safe=False)  #should be dictionary or list or dictionary of list

```