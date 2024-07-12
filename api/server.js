const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./logger');
const dotenv = require('dotenv');
const https = require('https');
const fs = require('fs');

const app = express();

// Load environment variables from .env file
dotenv.config();

// Access the API_PORT environment variable
const port = process.env.API_PORT || 3000;

const serviceAccount = require('./firebase/serviceaccountkey.json');
logger.info(`Server initialised successfully!`);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Import routes
const addUserRoute = require('./routes/addUser');
const getUserRoute = require('./routes/getUser');
const createPteroUserRoute = require('./routes/ptero/user/create');

// Use routes
app.use(addUserRoute);
app.use(getUserRoute);
app.use(createPteroUserRoute);

// HTTPS server configuration with .pem files
const httpsOptions = {
  key: fs.readFileSync('./api/ssl/key.pem'),
  cert: fs.readFileSync('./api/ssl/cert.pem')
};

// Start the HTTPS server
https.createServer(httpsOptions, app).listen(port, () => {
  logger.info(`Server is running on HTTPS port ${port}`);
});
