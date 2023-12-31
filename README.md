# NoSQL: Social Network API

## Description.


The Social Network API is a Node.js API designed for performing CRUD operations on various social networking data models. It utilizes a NoSQL database and allows users to interact with models such as friends, users, thoughts, and reactions. These models can be retrieved either individually by their unique IDs or collectively. By leveraging Node.js and Mongoose, this API offers a flexible and scalable solution for managing social networking data, eliminating the limitations associated with traditional relational databases.

## Table of Contents:
- [Overview](#Overview)
- [The Challenge](#The-Challenge)
- [Usage Information](#Usage-Information)
- [Installation Process](#Installation-Process)
- [Built With](#Built-With)
- [What I Learned](#What-I-Learned)
- [Continued Development](#Continued-Development)
- [License](#License)
- [Author](#Author)


# Overview

## The Challenge:

The objective was to create a RESTful API for a social media startup, enabling them to execute CRUD operations on users, thoughts, and reactions data models. The API was required to be developed using Node.js and Mongoose, ensuring compatibility with a NoSQL database. Additionally, the API needed to include endpoints capable of efficiently handling substantial volumes of unstructured data.

API must allow users to:

- Create and delete user accounts.
- Create, read, update, and delete thoughts.
- Add and remove reactions to thoughts.
- Add and remove friends to a user's friend list.

Test API: use Insomnia or a similar tool to send HTTP requests to the API endpoints and verify that the responses are correct.

## Assigned User Story:
```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria:
```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Usage Instructions:

1. Repository: Open documentation run 'npm i' and update '.env'.
2. Create a .env file in the root directory of the project and add the following variables:
3. Once the server is running, use a tool like Insomnia to test the API endpoints. 
4. Use Insomnia to test http://localhost:3001 with the following route end points API GET, POST, PUT, and DELETE routes for categories, products, and tags, ensuring successful creation, updating, and deletion of data in the database.

#### Available Endpoints:

Each endpoint must include the necessary data in the request body or URL parameters as specified in the acceptance criteria.

1. GET /api/users - get all users
2. GET /api/users/:userId - get a single user by ID
3. POST /api/users - create a new user
4. PUT /api/users/:userId - update a user by ID
5. DELETE /api/users/:userId - delete a user by ID
6. GET /api/thought - get all thought
7. GET /api/thought/:thoughtId - get a single thought by ID
8. POST /api/thought - create a new thought
9. PUT /api/thought/:thoughtId - update a thought by ID
10. DELETE /api/thought/:thoughtId - delete a thought by ID
11. POST /api/thought/:thoughtId/reactions - add a reaction to a thought
12. DELETE /api/thought/:thoughtId/reactions/:reactionId - remove a reaction from a thought
13. POST /api/users/:userId/friends/:friendId - add a friend to a user's friend list
14. DELETE /api/users/:userId/friends/:friendId - remove a friend from a user's friend list


## GitHub Repository:
[GitHub Repository:](https://github.com/AlexNanut/Social-Network-API)


## Installation Process:
1. Clone the Repository from GitHub (or) Download Zip Folder from Repository from GitHub.
2. Open the cloned (or downloaded) repository in any source code editor.
3. Open the integrated terminal of the document and complete the respective installation guides provided in "Built With" to ensure the cloned documentation will operate.

## Built With:

- JSON
- Dynamic JavaScript
- Mongoose
- Express
- Node.js
- Insomnia
- MongoDB
- Visual Studio Code

## What I Learned:
1. Built a RESTful API with Node.js and Mongoose.
2. Used NoSQL database to handle unstructured data.
3. Created endpoints for CRUD operations on users, thoughts, and reactions data models.
4. Implemented endpoints to add and remove friends from a user's friend list.
5. Tested API endpoints using Insomnia.
6. Worked with HTTP requests and JSON formatted data.
7. Utilized environment variables and .env files for sensitive data.


### Continued Development:
1. Implement additional features to enhance the user experience.
2. Improve error handling and response messaging for better user feedback.
3. Optimize database performance to handle large amounts of data efficiently.
4. Explore different types of NoSQL databases and evaluate their suitability for the project requirements.
5. Expand API documentation to assist developers with using the API.

## License & Copyright ©
  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [Open Source Initiative Link](https://opensource.org/licenses/MIT)


## Author

Follow me on Github at [AlexNanut](https://github.com/AlexNanut)
