# MB_BlogPlatform_Backend
Mindbowser Coding Assignment: Blogging Platform Backend

Overview
This repository contains the backend code for a blogging platform website. It is built using Node.js, Express, and MySQL, providing a RESTful API for user authentication and post management.

Table of Contents
    Technologies Used
    Features
    Installation
    API Endpoints
    Environment Variables
    Usage

Technologies Used
    Node.js: JavaScript runtime for building scalable network applications.
    Express: Web framework for Node.js to build APIs easily.
    MySQL: Relational database management system for storing user and post data.
    JWT (JSON Web Tokens): For secure user authentication.

Features
    User Authentication:
        Sign up and login functionality.
        Password hashing for security.
        JWT for session management.

    Post Management:
        Create, read, update, and delete (CRUD) operations for blog posts.
        Association of posts with users for ownership.

    Middleware:
        Authentication middleware to protect routes.
        Error handling for API responses.

Installation
    Clone the repository:
        git clone https://github.com/Ayushchauhan121/MindBowser_Backend.git

   
    Install dependencies:
        npm install

    Set up the MySQL database and configured the .env file with my database credentials.

API Endpoints
    Authentication:
        POST /api/auth/signup: Create a new user.
        POST /api/auth/login: Authenticate a user and return a token.
    
    Posts:
        POST /api/posts: Create a new post (requires authentication).
        GET /api/posts: Retrieve all posts.
        GET /api/posts/:id: Retrieve a specific post by ID.
        PUT /api/posts/:id: Update a post (requires authentication).
        DELETE /api/posts/:id: Delete a post (requires authentication).

Environment Variables
    JWT_SECRET: Secret key for signing JWT tokens.
    DB_HOST: Database host (default: localhost).
    DB_USER: Database username.
    DB_PASSWORD: Database password.
    DB_NAME: Database name.

Usage
    Start the server:
        npm start

The server will run on the specified port (default: 5000).

screen recording link:
https://drive.google.com/drive/folders/1z5SZGE_WRvnoJuHv4O_aTW16UE06y6ra?usp=drive_link