
import datetime as dt
import os
import pandas as pd
import numpy as np
import keras
import tensorflow as tf
from keras.preprocessing.sequence import TimeseriesGenerator
import yfinance as yf
from keras.models import Sequential
from keras.layers import LSTM, Dense
import plotly.graph_objs as go
from json import loads, dumps

end = dt.datetime.now()
start = dt.datetime(end.year - 5, end.month, end.day)

#stock_data = yf.download("fweffef", start=start, end=end)



'''def loadData(Company):
    try:
    global Ticker
    Ticker = Company
    stock_data = yf.download(Ticker, start=start, end=end)
    stock_data.to_csv("stock_data.csv")
    global df
    df = pd.read_csv("stock_data.csv")
    os.remove('stock_data.csv')
    df['Date'] = pd.to_datetime(df['Date'])
    df.set_axis(df['Date'])
    df.drop(columns=['Open', 'High', 'Low', 'Volume'], inplace=True)
    forecast()
except:
        return("Download Unsucessful")


df = pd.read_csv("stock_data.csv")
os.remove('stock_data.csv')
df['Date'] = pd.to_datetime(df['Date'])
df.set_axis(df['Date'])
df.drop(columns=['Open', 'High', 'Low', 'Volume'], inplace=True)'''






def forecast():
    close_data = df['Close'].values
    close_data = close_data.reshape((-1,1))

    split_percent = 0.80
    split = int(split_percent*len(close_data))
    
  
    close_train = close_data[:split]
    close_test = close_data[split:]

    
    date_train = df['Date'][:split]
    date_test = df['Date'][split:]
 
    look_back = 15

    
    train_generator = TimeseriesGenerator(close_train, close_train, length=look_back, batch_size=20)     
    test_generator = TimeseriesGenerator(close_test, close_test, length=look_back, batch_size=1)

   
    model = Sequential()

    model.add(
        LSTM(10,
        activation='relu',
        input_shape=(look_back,1))
    )
    model.add(Dense(1))
    model.compile(optimizer='adam', loss='mse')

    num_epochs = 30
    model.fit_generator(train_generator, epochs=num_epochs, verbose=1)

    prediction = model.predict_generator(test_generator)

    close_train = close_train.reshape((-1))
    close_test = close_test.reshape((-1))
    prediction = prediction.reshape((-1))

    close_data = close_data.reshape((-1))

    def predict(num_prediction, model):
        prediction_list = close_data[-look_back:]
    
        for _ in range(num_prediction):
            x = prediction_list[-look_back:]
            x = x.reshape((1, look_back, 1))
            out = model.predict(x)[0][0]
            prediction_list = np.append(prediction_list, out)
        prediction_list = prediction_list[look_back-1:]
        
        return prediction_list
    
    def predict_dates(num_prediction):
        last_date = df['Date'].values[-1]
        prediction_dates = pd.date_range(last_date, periods=num_prediction+1).tolist()
        return prediction_dates

    num_prediction = 30
    forecast = predict(num_prediction, model)
    forecast_dates = predict_dates(num_prediction)  

    trace4 = go.Scatter(
        x = df['Date'].values,
        y = df['Close'].values,
        mode = 'lines',
        name = 'Data',
        line=dict(color='blue')
    )
    trace5 = go.Scatter(
        x = forecast_dates,
        y = forecast,
        mode = 'lines',
        name = 'Forecast'
    
    )

    layout = go.Layout(
        title = Ticker,
        xaxis = {'title' : "Date"},
        yaxis = {'title' : "Closing price"}
    )
    fig = go.Figure(data=[trace4, trace5], layout=layout)
    fig.show()
    fig.write_image("frontend/public/Stock.svg")

    
def loadData(Company):
    global Ticker
    Ticker = Company
    stock_data = yf.download(Ticker, start=start, end=end)
    stock_data.to_csv("stock_data.csv")
    global df
    df = pd.read_csv("stock_data.csv")
    os.remove('stock_data.csv')
    tojson = df.tail(1)
    with open('temp.json', 'w') as f:
        f.write(tojson.to_json(orient='records', lines=True))
    df['Date'] = pd.to_datetime(df['Date'])
    df.set_axis(df['Date'])
    df.drop(columns=['Open', 'High', 'Low', 'Volume'], inplace=True)
    forecast()



loadData("TSLA")