# CitiHackOverflow2023
Project for CitiHackOverflow2023, by Team City Hackers

Uses Python 3.11

This is a simple FastAPI backend

## Creating a virtual environment 
Run ```py -3.11 -m venv env``` from the root folder, this will create a virtual environment with Python 3.11 
(Please download if you have not)

[Windows]
Run ```.\env\Scripts\Activate.bat``` from root, in terminal

[MacOS]
Run ```source env/bin/activate``` from root, in bash shell

Run ```pip install -r requirements.txt``` to install dependencies

Run ```uvicorn src.main:app --host localhost --port 8888``` to open the development server

## Swagger documentation
Access the API documentation by going to ```localhost:8888/docs``` endpoint
