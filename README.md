## Introduction ⌨️

Clickey is a full-stack web application designed to connect keyboard enthusiasts, enabling them to share and review keyboards. Developed using the MERN stack, it supports full CRUD operations and aims to create a community for college students to discover and discuss their favorite keyboards.

## Features
1. `User Profiles`: Users can create personal profiles and have posts grouped by their user ID. On the backend, user credentials are housed in a MongoDB database. On the front end, useContext hook is used to maintain information about the current user logged into the application, ensuring that the user state is globally accessible and can be updated across different components. The integration between the front-end and back-end is facilitated by a REST API developed using Express.js. 
2. `Review Posts`: Users can create, read, update, add content tags, and delete keyboard review posts with the option of attaching pictures to their reviews. Post information is also maintained by a MongoDB database.
3. `User Creation`: Users can create new accounts to post their reviews and manage their profile information. Account creation involves filling out a registration form with required details such as username, email address, and password. Upon submission, user's credentials are securely stored in the MongoDB database.
4. `User Authentication/Creation`: Secure user authentication is provisioned using JWT (JSON Web Tokens) for session management and bcrypt for password hashing. The authentication workflow is managed with React.js on the front end and handled by authentication endpoints specified in the backend.
5. `Post Interaction`: Users can interact with reviews by leaving comments, which are tracked and updated in real-time. Each comment is stored as a discrete entity in the MongoDB database, linked to its corresponding review post.
6. `Post Search`: Users can search for reviews based on keywords, categories, or specific content.

## Tech Stack
- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT (JSON Web Tokens), bcrypt

## Installation
**Clone the repository:**
```bash
$ git clone https://github.com/AtypicalAsian/clickey.git
```

**Navigate to project directory:**
```bash
$ cd clickey
```

**Install backend dependencies:**
```bash
$ cd backend
npm install
```

**Install frontend dependencies:**
```bash
$ cd ../frontend
npm install
```

**Set up environment variables:**

- Create a .env file in the backend directory and add your MongoDB URI, JWT secret, and other necessary configurations.

**Start up development server:**

In the backend, execute
```bash
$ npm run start-dev
```

In the front-end, execute
```bash
$ npm run dev
```


## Usage

