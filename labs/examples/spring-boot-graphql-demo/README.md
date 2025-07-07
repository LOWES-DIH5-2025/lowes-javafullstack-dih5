# Project Overview

## What this project is about:
This project is a demonstration of a Spring Boot application integrated with GraphQL. The primary purpose is to showcase how to perform basic CRUD operations (specifically retrieving and adding books) using GraphQL.

## Getting Started

### Key Instructions:
1. **Run the Application:** Start the Spring Boot application.
2. **Access GraphiQL Interface:** Open your web browser and navigate to `http://localhost:9090/graphiql`.
3. **Perform Queries and Mutations:**
   - To retrieve books, use the following query:
     ```graphql
     query MyQuery {
       getBooks {
         author
         id
         title
       }
     }
     ```
   - To add a new book, use the following mutation:
     ```graphql
     mutation MyMutation {
       addBook(title: "Spring in Action", author: "Craig Walls") {
         title,
         author
       }
     }
     ```

## Additional Relevant Sections

### Requirements:
- Ensure that you have Java and Maven installed on your system to build and run the Spring Boot application.
- A web browser is needed to access the GraphiQL interface.

### Installation:
- Clone the repository containing the project.
- Navigate to the project directory in your terminal.
- Build the project using Maven by running `mvn clean install`.
- Run the application using `mvn spring-boot:run`.