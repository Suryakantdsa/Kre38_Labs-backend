# Kre38_Labs-backend
# Book Database API

This is a simple Node.js and Express.js application that provides API endpoints to manage a Book Database. The database stores information about books, including the book's name and author.

## Features

- **GET /**: Retrieve a list of all books in the database.
- **POST /books**: Add a new book to the database.
- **DELETE /books/:bookId**: Delete a book from the database by its unique identifier.

## Database Schema

The database schema for a book includes the following fields:

- `bookName`: The name of the book.
- `author`: The author of the book.

## How to Run
1. Clone this repository to your local machine:
   git clone https://github.com/Suryakantdsa/Kre38_Labs-backend.git
   cd your-repo
   npm install
2. Create a .env file in the project root and define the MongoDB URI and port:
   MONGODB_URI=your-mongodb-uri
   PORT=5001
3. to start the server 
**npm start**
