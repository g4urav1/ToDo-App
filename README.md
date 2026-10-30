# ToDo App

A full-stack To-Do web application that allows users to create accounts, log in, manage tasks, and recover passwords using email OTP verification. Built with HTML, CSS, JavaScript, Node.js, and Express.

## Features

- User signup
- User login
- Add tasks
- Remove tasks
- View saved tasks
- Password reset using email OTP
- Backend API with Express
- Data stored in `database/users.json`
- Login data saved in browser localStorage
- Brcypt to hash password before saving

## Tech Stack

**Frontend**
- HTML5
- CSS3
- JavaScript
- Vite

**Backend**
- Node.js
- Express.js
- bcrypt
- Nodemailer
- CORS
- JSON file storage

## Project Structure

```text
ToDo-App/
├── Backend/
├── frontend/
└── README.md
```

## Getting Started

### Prerequisites

- Node.js and npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/g4urav1/ToDo-App.git
cd ToDo-App
```

### 2. Configure the backend

```bash
cd Backend
npm install
```

Create a `.env` file in the backend directory and add the required environment variables for your email service and server configuration.

Start the backend using its entry point:

```bash
npm install
node post.js
```

### 3. Configure the frontend

Open a separate terminal:

```bash
cd frontend
npm install
```

Create a frontend `.env` file and configure the API URL to point to your deployed backend.

Start the frontend locally:

```bash
npm run dev
```

The frontend uses Vite to inject `API_LINK` into the browser bundle. For deployment, build it with `npm run build` and serve the generated `dist/` directory.

## Important Notes

This project is made for learning.

User data is stored in a JSON file, so it is not a good choice for a real app.

Email login details should not be written directly inside the code. They should be stored safely using environment variables.

## Future Improvements


- Migrate JSON storage to a database
- Improve error handling and input validation
- Strengthen authentication and authorization

## Author

**Gaurav**

- [GitHub Profile](https://github.com/g4urav1)
- [Repository](https://github.com/g4urav1/ToDo-App)
