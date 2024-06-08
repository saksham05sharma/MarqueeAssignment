# YourShelf

YourShelf is a React application that allows users to search for books using the OpenLibrary API and add them to their personal bookshelf stored in the browser's local storage.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)

## Features

- Search for books by title, author, or keyword.
- View search results and book details.
- Add books to a personal bookshelf.
- View and manage books in the bookshelf.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed. You can download them from [nodejs.org](https://nodejs.org/).
- A code editor, such as Visual Studio Code.

## Setup Instructions

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repository-name.git

2. **Navigate to the project directory:**

   cd personal-bookshelf

3. **Install the dependencies:**

   npm install

## Running the Application

To run the application on your local machine, follow these steps:

1. **Start the development server:**

   npm start

2. **Open your browser and navigate to:**

   http://localhost:3000

   The application should now be running, and you can start searching for books and adding them to your bookshelf.
   
## Project Structure

Here's a brief overview of the project structure:

personal-bookshelf/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── BookItem.js
│   │   ├── Bookshelf.js
│   │   ├── Header.js
│   │   └── SearchBar.js
│   ├── pages/
│   │   ├── BookSearchPage.js
│   │   └── BookshelfPage.js
│   ├── styles/
│   │   └── styles.css
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md

1. **public/:** 

   Contains the HTML file.

2. **src/components/:** 

   Contains reusable React components.

3. **src/pages/:** 

   Contains the main pages of the application.

4. **src/styles/:** 

   Contains the CSS styles for the application.

5. **App.js:** 

   The root component.

6. **index.js:** 

The entry point of the application.