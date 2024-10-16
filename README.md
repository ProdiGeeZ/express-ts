# TodoList API

This is a basic TodoList API built using TypeScript, Express, and Node.js. It was created as a learning project to understand how to use TypeScript with Node.js and Express.

## Features

- Basic CRUD operations for managing a todo list
- No database integration; data is stored in-memory
- Built with TypeScript for type safety and better development experience

## Getting Started

### Prerequisites

- Node.js installed on your machine
- npm (Node Package Manager) installed

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/node-express-typescript.git
    ```
2. Navigate to the project directory:
    ```sh
    cd node-express-typescript
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

### Running the Project

1. Compile TypeScript files in watch mode:
    ```sh
    tsc -w
    ```
2. Start the server:
    ```sh
    npm run start
    ```

### Using the API

**Base Url** - `http://localhost:3000/`

You can use Postman to interact with the API. The following endpoints are available:

- `GET /todos` - Retrieve all todos
- `POST /todos` - Create a new todo
- `PUT /todos/:id` - Update an existing todo
- `DELETE /todos/:id` - Delete a todo

## Learning Outcomes

- Understanding of TypeScript basics and type safety
- Experience with setting up a Node.js and Express project with TypeScript
- Familiarity with building RESTful APIs
