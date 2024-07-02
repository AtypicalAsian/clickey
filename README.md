## ⌨️ Table of Contents

1. [Introduction](#ℹ️-Introduction)
2. [Features](#🚀-Features)
3. [Installation and Project Setup](#⬇️-Installation-and-Project-Set-Up)
4. [Usage](#💭-Usage)

## ℹ️ Introduction

Clickey is a full-stack web application created with the MERN stack, designed to facilitate connections and knowledge sharing among keyboard enthusiasts. Clickey supports full CRUD operations and strives to cultivate a welcoming community where college students can share and discuss their favorite keyboards.

## 🚀 Features

1. `User Profiles`: Users can create personal profiles and have posts grouped by their user ID. On the backend, user credentials are housed in a MongoDB database. On the front end, useContext hook is used to maintain information about the current user logged into the application, ensuring that the user state is globally accessible and can be updated across different components. The integration between the front-end and back-end is facilitated by a REST API developed using Express.js.
2. `User Posts`: Users can create, read, update, add content tags, and delete keyboard review posts with the option of attaching pictures to their reviews. Post information is also maintained by a MongoDB database.
3. `User Creation`: Users can create new accounts to post their reviews and manage their profile information. Account creation involves filling out a registration form with required details such as username, email address, and password. Upon submission, user's credentials are securely stored in the MongoDB database.
4. `User Authentication`: Secure user authentication is provisioned using JWT (JSON Web Tokens) for session management and bcrypt for password hashing. The authentication workflow is managed with React.js on the front end and handled by authentication endpoints specified in the backend.
5. `Post Interaction`: Users can interact with reviews by leaving comments, which are tracked and updated in real-time. Each comment is stored as a discrete entity in the MongoDB database, linked to its corresponding review post.
6. `Post Search`: Users can search for reviews based on keywords, categories, or specific content.

## 📚 Tech Stack

- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT (JSON Web Tokens), bcrypt

## ⬇️ Installation and Project Set Up

To set up a working version of the project on your local machine, follow these steps:

**Clone the repository:**

```bash
$ git clone https://github.com/AtypicalAsian/clickey.git
```

**Create and Deploy MongoDB database**

To create and configure your database correctly, follow the instructions outlined in the official <a href="https://www.mongodb.com/docs/atlas/">MongoDB documentation</a>.

**Navigate to project directory**

```bash
$ cd clickey
```

**Install backend dependencies**

```bash
$ cd backend
npm install
```

**Install frontend dependencies**

```bash
$ cd ../frontend
npm install
```

**Set up environment variables**

- Create a .env file similar to .env_example in the backend directory and add your MongoDB URI, JWT secret, and port=5000.

**Start up development server**

Navigate to the backend folder and execute

```bash
$ npm run start-dev
```

Similarly, navigate to the front-end folder and execute

```bash
$ npm run dev
```

## 💭 Usage

Here is how you can get started:

**Account Creation**

First, navigate to the Register button in the upper right corner of the nav bar. You will then be prompted to enter your username, email, and password. Upon successfully logging into the account, the application will redirect you to a login page. Re-enter your credentials to log in.
