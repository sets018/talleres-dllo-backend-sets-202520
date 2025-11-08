# backend-api

This project is a backend API that integrates various workshops developed in class. It is built using TypeScript and Express, providing a structured approach to handling authentication, user management, and workshop-related functionalities.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd backend-api
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

To start the server, run:
```bash
npm start
```

The server will be running on `http://localhost:3000`.

## API Endpoints

- **Authentication**
  - `POST /api/auth/login` - Log in a user
  - `POST /api/auth/register` - Register a new user

- **User Management**
  - `GET /api/users` - Retrieve all users
  - `GET /api/users/:id` - Retrieve a user by ID

- **Workshops**
  - `GET /api/workshops` - Retrieve all workshops
  - `POST /api/workshops` - Create a new workshop

## Testing

To run the tests, use:
```bash
npm test
```

## Environment Variables

Create a `.env` file in the root directory and add the necessary environment variables. You can refer to the `.env.example` file for guidance.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.