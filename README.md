# ToDo App

A simple ToDo web app made with HTML, CSS, JavaScript, Node.js, and Express.

Users can sign up, log in, add tasks, remove tasks, and reset their password using an email OTP.

The backend stores user data and tasks in a local JSON file.

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

## Tech Stack

### Frontend

- HTML
- CSS
- JavaScript

### Backend

- Node.js
- Express.js
- Nodemailer
- CORS
- JSON file storage

## Folder Structure

```text
ToDo-App/
├── database/
│   └── users.json
├── index.html
├── script.js
├── style.css
├── post.js
├── package.json
├── package-lock.json
├── tailwind.config.js
└── README.md
```

## Backend Routes

The backend runs on:

```text
http://localhost:1111
```

Routes used in this project:

```text
POST /signup
POST /login
POST /forget_password
POST /reset_password
POST /addtask
POST /removetask
POST /alltasks
```

## How to Run

Start the backend from `Backend/`:

```bash
npm install
node post.js
```

Set `API_LINK` in `frontend/.env` to the backend base URL. Then start the frontend from `frontend/`:

```bash
npm install
npm run dev
```

The frontend uses Vite to inject `API_LINK` into the browser bundle. For deployment, build it with `npm run build` and serve the generated `dist/` directory.

## Important Notes

This project is made for learning.

User data is stored in a JSON file, so it is not a good choice for a real app.

Passwords are stored as plain text. In a real project, passwords should be hashed before saving.

Email login details should not be written directly inside the code. They should be stored safely using environment variables.

## Project Status

The basic ToDo features are added. This project can be improved by adding a real database, better security, and better error handling.

## Author

Made by Gaurav.
