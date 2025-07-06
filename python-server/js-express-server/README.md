# js-express-server

This project is a simple Express server that listens on port 8001. It is set up to use nodemon for automatic code reloading during development.

## Project Structure

```
js-express-server
├── src
│   └── index.js        # Entry point of the application
├── package.json        # NPM configuration file
├── Dockerfile          # Dockerfile to build the application image
├── .dockerignore       # Files to ignore when building the Docker image
├── .gitignore          # Files to ignore in Git
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd js-express-server
   ```

2. Install the dependencies:

   ```
   npm install
   ```

### Running the Server

To start the server with nodemon, use the following command:

```
npm run dev
```

The server will be running at `http://localhost:8001`.

### Building the Docker Image

To build the Docker image, run:

```
docker build -t js-express-server .
```

### Running the Docker Container

To run the Docker container, use:

```
docker run -p 8001:8001 js-express-server
```

The server will be accessible at `http://localhost:8001`.