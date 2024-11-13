# Math Operations API

This is a simple Express-based API for performing basic math operations such as addition, subtraction, multiplication, and division. The app provides endpoints for performing operations and exposes a Swagger-based API documentation.

## Features

- Perform basic math operations: addition, subtraction, multiplication, and division.
- Swagger UI for automated API documentation.
- Built with TypeScript and Express.

## API Endpoints

To test the math operations, you can use an API client like Postman or make GET requests to [v1/math](http://localhost:3000/v1/math).

### GET /v1/math

Performs a math operation on two numbers. Send the following request to: http://localhost:3000/v1/math/?num1=10&num2=2&operation=\*

**Response:**

```bash
{
  "result": 20
}
```

**Operations:**

- **_add:_** Addition of num1 and num2.
- **_subtract:_** Subtraction of num1 and num2.
- **_multiply:_** Multiplication of num1 and num2.
- **_divide:_** Division of num1 and num2.

### GET /v1/health

Check the health status of the API. Returns 200 OK if the API is running.

### Swagger Documentation

The app automatically generates and serves the API documentation at:

- Swagger UI: http://localhost:3000/api-docs

## Prerequisites

- `Node.js (>= 14.x)`
- `npm (>= 6.x)`

## Getting Started

Follow these steps to set up and run the app locally.

**Clone the Repository**

```bash
git clone https://github.com/yourusername/node-start.git

cd node-start
```

**Install Dependencies**
Install the required dependencies by running:

```bash
npm install
```

**Build the TypeScript Files**
Compile the TypeScript files into JavaScript:

```bash
npm run build
```

**Start the Application**
Run the app using nodemon for automatic restarts during development:

```bash
npm run start:dev

or

npm run start:prod # for execution from dist JS files
```

The server will start on port `3000` by default.
