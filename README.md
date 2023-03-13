# Introduction

## Goal
Create an application that provides the user with an overview of sensor readings according to the region of the country.

## Technologies

- .Net Core

- .Net EF

- Angular

- Docker

- MySql

## SPA Pages

-Home
    - Endpoint: localhost:8090/
    - Description: Only a landing page introducing the software
- Readings Table
    - Endpoint: localhost:8090/Readings
    - Description: An automatically updated table that displays all readings from all sensors.
- Dashboard
    - Endpoint: localhost:8090/Dashboard
    - Description: Here we have an unordered list component that displays a totalizer of readings by region as well as by sensor. In addition, we have a graph that displays the last recorded reading of each sensor.

## Routes API

- Reading
    - Endpoint: localhost:8090/Api/Read
        - Methods:
            - Get: Does not receive any parameters and returns the list of readings registered in the system.
            - Post: Receives an instance of ReadingDto and inserts a new reading in the database based on the data entered
                - Body: `{
                    "timeStamp": 59874269871,
                    "tag": 'brasil.sudeste.sensor01',
                    "value": '300'
                }`
    - Endpoint: localhost:8090/Api/Read
        - Methods:
            - Get: It does not receive any parameters and returns a list of the last launch of each sensor that is not in Error status, for graph assembly

# How to install:
## Requirements:

- Windows/Linux
- Docker

## Step by step


1. Open a command line program ex:PowerShell
2. Navigate to the directory where the project download was inserted
3. Run the command `docker-compose up --build`
4. After the command is finished running, just open a browser of your choice and enter the URL: `http://localhost:8090`
5. Enjoy!
