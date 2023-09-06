# CitiHackOverflow2023
Project for CitiHackOverflow2023, by Team City Hackers

Uses Python 3.11

This is a super simple flask application using Flask API

To run the service, execute `uvicorn src.main:app --host 0.0.0.0 --port 8888` from the project root folder

To run the test, execute `pytest --cov --mypy tests` from the project root folder

To run linting, execute `flake8` from the project root folder

## Creating a virtual environment 
Run ```py -3.11 -m venv env``` from the root folder, this will create a virtual environment with Python 3.11 
(Please download if you have not)

[Windows]
Run ```.\env\Scripts\Activate.bat``` from root, in terminal

[MacOS]
Run ```source env/bin/activate``` from root, in bash shell

Run ```python app.py``` to open the development server

## Swagger documentation
Access the API documentation by entering adding ```/ui``` to the endpoint
