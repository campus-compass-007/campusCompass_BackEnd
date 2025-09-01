# campusCompass Back End

## Overview

This repository is responsible for all the background operations of the campusCompass application, including user authentication, data management, and integration with external services.

![Express](https://img.shields.io/badge/Express.js-404D59?style=flat&logo=express&logoColor=white)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have a supported version of Node.js installed.
- You have MongoDB installed and running (if using MongoDB).
- Install MongoDB Compass (optional, for GUI management).
- You have a code editor installed (e.g., Visual Studio Code).

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/campus-compass-007/campusCompass_BackEnd.git
   ```

2. Navigate to the project directory:
   ```bash
   cd campusCompass_BackEnd
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add the necessary environment variables. You can use the `.env.example` file as a reference.

5. Start the development server:
   ```bash
   npm run dev
   ```

## Development Scripts

| Command                | Description                           | When to use
|------------------------|---------------------------------------|-------------
| `npm run dev`          | Start the development server         | During development
| `npm run build`       | Build the application for production  | Before deploying
| `npm test`             | Run the test suite                    | Before committing changes

## Project Architecture

The project follows a modular architecture, with separate directories for different concerns:

- **src/**: Contains the main application code.
  - **controllers/**: Defines the request handlers for different routes.
  - **models/**: Contains the data models and database schemas.
  - **routes/**: Defines the API endpoints and their corresponding controllers.
  - **middlewares/**: Contains custom middleware functions for request processing.
  - **config/**: Holds configuration files and environment variable management.
  - **utils/**: Contains utility functions and helpers.


## Tech Stack

The campusCompass Back End is built using the following technologies:

- **Node.js**: JavaScript runtime for building scalable network applications.
- **Express.js**: Web application framework for Node.js, designed for building APIs.
- **MongoDB**: NoSQL database for storing application data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Jest**: JavaScript testing framework for unit and integration tests.
- **Passport**: Authentication middleware for Node.js, supporting various authentication strategies.

## Seeding

To seed the database with initial data, you can use the provided seed script. This script will populate the database with sample users, courses, and other necessary data.

1. Ensure your MongoDB server is running.
2. Run the seed script:
   ```bash
   npm run seed
   ```

