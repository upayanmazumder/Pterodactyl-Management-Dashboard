const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./logger');
const dotenv = require('dotenv');
const https = require('https');
const fs = require('fs');

const app = express();

dotenv.config();

const port = process.env.API_PORT || 3000;

const serviceAccount = require('./firebase/serviceaccountkey.json');
logger.info(`Server initialised successfully!`);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.use(bodyParser.json());

// Import routes
const userAdd = require('./routes/user/addUser');
const userGet = require('./routes/user/getUser');

// Use routes
app.use(userAdd);
app.use(userGet);

// HTTPS server configuration with .pem files
const httpsOptions = {
  key: fs.readFileSync('./api/ssl/key.pem'),
  cert: fs.readFileSync('./api/ssl/cert.pem')
};

// Start the HTTPS server
https.createServer(httpsOptions, app).listen(port, () => {
  logger.info(`Server is running on HTTPS port ${port}`);
});
