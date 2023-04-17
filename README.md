# Nodejs with Swagger API

This is a simple Node.js API that uses Swagger to generate API documentation. It provides two routes:

- `/hello`: Returns a greeting message.
- `/value`: Allows you to get and set a value.

## Installation
1. Install dependencies: `npm install`

## Usage
1. Start the server: `npm start`
2. Open a web browser and go to `http://localhost:3000/api-docs` to view the Swagger documentation.
3. Use the `/hello` and `/value` routes to test the API.

## Routes

### `/hello`

Returns a greeting message.

#### Example
```
GET /hello

{
"message": "Hello, world!"
}
```

### `/value`

Allows you to get and set a value.

#### `GET /value`

Returns the current value.

#### Example
```
GET /value/NewValue

{
"message": "Value updated"
}
```
