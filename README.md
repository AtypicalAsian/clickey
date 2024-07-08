## Table of Contents

- [Introduction](#-introduction)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation and Project Set Up](#️-installation-and-project-set-up)
- [Usage](#-usage)

## ℹ️ Introduction

Clickey is a full-stack web application designed for keyboard enthusiasts to share reviews, interact through comments, and build connections with others in the keyboard community. Built using the MERN stack, the app supports full CRUD operations and aims to foster knowledge sharing and a sense of community among its users.

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

- Create a .env file similar to [env_example.txt](https://github.com/AtypicalAsian/clickey/blob/main/backend/env_example.txt) file in the backend directory and add your MongoDB URI, JWT secret, and port=5000.

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

### Account Creation/Login

https://github.com/AtypicalAsian/clickey/assets/68703714/acadca51-6792-4197-8930-61d22ab2a621

First, navigate to the Register button in the upper right corner of the nav bar. You will then be prompted to enter your username, email, and password. Upon successfully logging into the account, the application will redirect you to a login page. Re-enter your credentials to log in.

### Post Creation

https://github.com/AtypicalAsian/clickey/assets/68703714/2fcd59a7-5272-4c12-b8d1-e6dbc8f4ca83

To create a new post, click on the "Create Post" button located within your profile dashboard. You will be prompted to enter a title, content, and optionally, tags or categories to categorize your post. After completing the fields, click "Create" to publish your content to the platform.

### Comment and Search Functionality

https://github.com/AtypicalAsian/clickey/assets/68703714/2fef40a2-caef-4f0a-9ee5-172c33aa17fb

Once logged in, navigate to any review posts. Scroll to the bottom of the content to find the comment section. Type your comment in the provided text box and click "Add Comment" to publish your comment. Additionally, you can edit or delete your comment after posting. To search for a specific post, utilize the search bar located at the top of the page to search for specific content, posts, users, or topics of interest. Enter relevant keywords or phrases and press enter or click the search icon. The application will generate a list of results matching your search criteria, organized by date.
