# Next.js Store

This repository contains a full-stack web application using Next.js for the frontend and Python with Quart for the backend. The project is set up to be easily run using a Makefile.

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [Python](https://www.python.org/)
- [Docker](https://www.docker.com/)

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/your-repository.git
    cd your-repository
    ```

2. Create a virtual environment:

    ```bash
    make virtualenv
    ```

3. Install dependencies:

    ```bash
    make dev-dependencies
    ```

4. Run the database using Docker:

    ```bash
    make run-database
    ```

5. Run the backend server:

    ```bash
    make run-server
    ```

6. Run the Next.js frontend:

    ```bash
    make run-frontend
    ```

Visit [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Makefile Commands

- **virtualenv**: Creates a virtual environment for the Python backend.
- **dev-dependencies**: Installs dependencies for the development environment.
- **run-database**: Starts the database using Docker.
- **run-server**: Runs the backend server.
- **run-frontend**: Runs the Next.js frontend in development mode.

## Project Structure

- **frontend**: Contains the Next.js frontend code.
- **server**: Contains the backend code.
- **docker**: Contains Docker configurations, including the database setup.

## Additional Notes

- Customize the database configuration in `docker/database/docker-compose.yml` as needed.
- Adjust the project structure and code based on your requirements.

Feel free to contribute, report issues, or provide feedback. Happy coding!