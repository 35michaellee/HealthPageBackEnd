# MongoDB and Mongoose Application

Welcome to our MongoDB and Mongoose application! This application is a simple CRUD (Create, Read, Update, Delete) app
 built using MongoDB as the database and Mongoose as the ODM (Object Data Modeling) library.It is Built with Node and express

## Overview

This application provides basic functionality to perform CRUD operations on a collection in MongoDB. It includes endpoints to:

- Create new items
- Read existing items
- Update existing items
- Delete existing items

## Installation

1. Clone the repository to your local machine:

git clone https://github.com/35michaellee/HealthPageFrontEnd.git


2.  Navigate to the project directory:Esparza_michael_mongodb_capstoneBackend

3. install all dependenceies 

4. create an env file for you own mongo db server with passoword in the url save as MONGO_URI
 
5. start your server

## Usage

Once the server is running, you can access the application in your web browser or using an API client like Postman. The application is hosted on port 3000 by default.
## Grocery Endpoints

- **POST /groceries:** Create a new grocery item
- **GET /groceries:** Retrieve all grocery items
- **GET /groceries/:id:** Retrieve a specific grocery item by its ID
- **PUT /groceries/:id:** Update an existing grocery item by its ID
- **DELETE /groceries/:id:** Delete a grocery item by its ID
- **POST /groceries/reset:** Reset the grocery list (delete all items and insert a standard list)

## Health Tips Endpoints

- **GET /health-tips:** Retrieve all health tips
- **GET /health-tips/:id:** Retrieve a specific health tip by its ID
- **DELETE /health-tips/:id:** Delete a health tip by its ID



