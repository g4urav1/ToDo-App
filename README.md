# ToDo App

A full-stack To-Do web application that allows users to create accounts, log in, manage tasks, and recover passwords using email OTP verification. Built with HTML, CSS, JavaScript, Node.js, and Express.

## Features

- User registration and login
- Task management
- Email OTP-based password recovery
- Backend API built with Express.js
- JSON file-based data storage
- Environment-based configuration for frontend and backend
- Separately hosted frontend and backend

## Tech Stack

**Frontend**
- HTML5
- CSS3
- JavaScript
- Vite

**Backend**
- Node.js
- Express.js
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

Open the local URL provided by Vite.

> The commands above assume the project uses `Backend/post.js` and Vite's default development script. Adjust them if your current configuration differs.

## Deployment

The frontend and backend are hosted separately.

- **Frontend:** Connects to the deployed backend through its configured API URL.
- **Backend:** Handles authentication, task operations, and email OTP functionality.

Ensure the backend allows requests from the deployed frontend origin through an appropriate CORS configuration.

## Environment Variables

Both the frontend and backend use environment variables for configuration.

- Keep backend secrets, including email credentials, in backend environment variables.
- Configure the frontend API URL using the environment variable expected by the application.
- Never commit `.env` files containing secrets to GitHub.
- Remember that frontend environment variables may be exposed in the browser bundle. Never put private credentials in frontend variables.

## Data Storage

The application uses JSON files for data storage. This is a straightforward approach for a learning project, though a database would be more suitable for larger applications and concurrent operations.

## Security Considerations

- **Password storage:** Passwords are currently stored in plain text. This is not safe for real user accounts. Implement password hashing with a suitable algorithm such as bcrypt or Argon2.
- **Email credentials:** Store credentials in backend environment variables.
- **Input validation:** Validate and sanitize incoming data.
- **Authentication:** Review session or token handling and protect authenticated routes.

## Future Improvements

- Implement secure password hashing
- Migrate JSON storage to a database
- Improve error handling and input validation
- Strengthen authentication and authorization

## Author

**Gaurav**

- [GitHub Profile](https://github.com/g4urav1)
- [Repository](https://github.com/g4urav1/ToDo-App)
