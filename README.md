
# MangoNode CRUD App

This is a simple CRUD (Create, Read, Update, Delete) application built using Node.js, Express, MongoDB, HTML, and CSS.

## Installation

Ensure that you have Node.js and npm installed on your machine.

1. **Clone this repository:**

   ```bash
   git clone https://github.com/inaveed-git/-MangoNode-CRUD-App.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd -MangoNode-CRUD-App
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the application:**

   ```bash
   npm start
   ```

   The application will be accessible at [http://localhost:8080](http://localhost:8080).

## Usage

- Open your browser and go to [http://localhost:8080](http://localhost:8080) to access the MangoNode CRUD App.

- You can perform CRUD operations on the data, including creating new entries, viewing existing entries, updating entries, and deleting entries.

## MongoDB

Make sure you have MongoDB installed and running. The application is configured to connect to a MongoDB database at `mongodb://127.0.0.1:27017/mangocrude`. Update the connection URL in `index.js` if needed.

## Error Handling

The backend includes an error handling mechanism to handle various errors that may occur during the application's execution. The error handler is implemented in the `app.use` middleware at the end of `index.js`. Any errors thrown during the application's operation will be caught, and an appropriate status code and error message will be sent in the response.

## Dependencies

- **express**: Web framework for Node.js
- **mongoose**: MongoDB object modeling tool
- **ejs**: Embedded JavaScript templating
- **method-override**: Middleware for HTTP method override

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to contribute to the project by submitting issues or pull requests.

## Acknowledgments

- This project was inspired by the need for a simple CRUD application using Node.js and MongoDB.
```

Feel free to customize it further based on your project's specifics!