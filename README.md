# Student Yearbook Backend API

A RESTful CRUD API built with **Express.js** and **Prisma ORM** to manage student directory records for a yearbook application.

## 🚀 Features

- Full CRUD operations for student records (`GET`, `POST`, `PUT`, `DELETE`).
- Modern asynchronous database querying using `async/await`.
- Structured and predictable JSON API responses.
- Centralized Prisma error-code handling for edge cases (e.g., `404 Not Found`).

## 🛠️ Tech Stack

- **Runtime Environment:** Node.js
- **Backend Framework:** Express.js
- **Database ORM:** Prisma
- **Database Engine:** PostgreSQL / SQLite (Configured via your `.env`)

## 📡 API Endpoints

All responses follow a consistent envelope structure returning `data` and `message` properties.

| Method     | Endpoint        | Description                                | Success Status   |
| :--------- | :-------------- | :----------------------------------------- | :--------------- |
| **GET**    | `/students`     | Retrieve all student records               | `200 OK`         |
| **GET**    | `/students/:id` | Fetch a single student profile by ID       | `200 OK` / `404` |
| **POST**   | `/students`     | Register a new student record              | `201 Created`    |
| **PUT**    | `/students/:id` | Update an existing student's properties    | `200 OK` / `404` |
| **DELETE** | `/students/:id` | Remove a student record from the directory | `200 OK` / `404` |
