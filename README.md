# Shorts Backend

## Overview

This project is the backend for a "shorts" application, allowing users to manage writers, shorts, and reviews. It uses Express.js for the server, PostgreSQL for the database, and several other dependencies for various functionalities.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/renad-lab/shorts-backend.git
   cd shorts-backend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

### Running the Application

To start the application, run:

```sh
nodemon
```

### Database Setup

1. Initialize the database schema:

   ```sh
   npm run db:init
   ```

2. Seed the database with initial data:

   ```sh
   npm run db:seed
   ```

## API Endpoints

| Entity  | Action            | Method | Endpoint                              | Description                               |
| ------- | ----------------- | ------ | ------------------------------------- | ----------------------------------------- |
| Writers | Get all           | GET    | `/writers`                            | Fetches all writers.                      |
| Writers | Get specific      | GET    | `/writers/:id`                        | Fetches a specific writer by ID.          |
| Writers | Create new        | POST   | `/writers`                            | Creates a new writer.                     |
| Writers | Update            | PUT    | `/writers/:id`                        | Updates a writer by ID.                   |
| Writers | Delete            | DELETE | `/writers/:id`                        | Deletes a writer by ID.                   |
| Shorts  | Get all by writer | GET    | `/writers/:id/shorts`                 | Fetches all shorts for a specific writer. |
| Shorts  | Get specific      | GET    | `/writers/:id/shorts/:id`             | Fetches a specific short by ID.           |
| Shorts  | Create new        | POST   | `/writers/:id/shorts`                 | Creates a new short.                      |
| Shorts  | Update            | PUT    | `/writers/:id/shorts/:id`             | Updates a short by ID.                    |
| Shorts  | Delete            | DELETE | `/writers/:id/shorts/:id`             | Deletes a short by ID.                    |
| Reviews | Get all by short  | GET    | `/writers/:id/shorts/:id/reviews`     | Fetches all reviews for a specific short. |
| Reviews | Get specific      | GET    | `/writers/:id/shorts/:id/reviews/:id` | Fetches a specific review by ID.          |
| Reviews | Create new        | POST   | `/writers/:id/shorts/:id/reviews`     | Creates a new review.                     |
| Reviews | Update            | PUT    | `/writers/:id/shorts/:id/reviews/:id` | Updates a review by ID.                   |
| Reviews | Delete            | DELETE | `/writers/:id/shorts/:id/reviews/:id` | Deletes a review by ID.                   |

## Deployment

- **Backend**: Deployed on Render.(https://shorts-backend.onrender.com/)
- **Frontend**: Deployed on Netlify.(https://melodious-otter-0e352a.netlify.app)

## Technologies Used

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: Web framework for Node.js, designed for building web applications and APIs.
- **PostgreSQL**: Powerful, open-source object-relational database system.
- **Nodemon**: Utility that monitors for any changes in your source and automatically restarts your server.
- **dotenv**: Zero-dependency module that loads environment variables from a `.env` file into `process.env`.
