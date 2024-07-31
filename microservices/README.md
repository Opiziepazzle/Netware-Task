# Microservices Application

This repository contains a simple microservice-based application using TypeScript, Express, and MongoDB with MVC architecture.

## Services

1. **User Service**: Manages user data.
2. **Auth Service**: Manages basic authentication.
3. **Product Service**: Manages product data.

## Setup

1. **Install Dependencies**

   Navigate to each service directory and install dependencies:

   ```bash
   cd user-service
   npm install
   cd ../auth-service
   npm install
   cd ../product-service
   npm install


2. Start Services

In separate terminals, start each service:

cd user-service
npm start

cd auth-service
npm start

cd product-service
npm start



### Architecture
MVC Architecture:


Model: Defines data schema and interactions with MongoDB.
View: Not implemented (returns JSON responses).
Controller: Handles business logic and requests.
TypeScript Benefits: Provides type safety, better error detection, and improved development experience.

Microservices: Each service is independently deployable and communicates over HTTP.

Caching: Redis client is set up for caching (to be implemented based on specific needs).


### API Endpoints

User Service
GET /users: Retrieve all users.
GET /users/:id: Retrieve a user by ID.
POST /users: Create a new user.



Auth Service
POST /login: Authenticate a user.


Product Service
GET /products: Retrieve all products.
GET /products/:id: Retrieve a product by ID.
POST /products: Create a new product.



### Explanation

- **MVC Pattern**: Separation of concerns is achieved by having models manage data, controllers handle business logic, and routes define endpoints. Views are omitted, focusing on JSON responses.
- **TypeScript**: Enhances code safety and readability with static typing, making the codebase more maintainable.
- **Microservices**: Each service runs independently, allowing for scalability and isolation of concerns.
- **Caching**: Redis setup is included but requires implementation based on the needs of each service for performance optimization.

Feel free to adjust this basic structure and code as needed for your specific requirements or to add additional features.
