const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./logger');
const dotenv = require('dotenv');
const https = require('https');
const fs = require('fs');
const cors = require('cors');

const app = express();

dotenv.config();

const port = process.env.API_PORT || 3000;

const serviceAccount = require('./firebase/serviceaccountkey.json');
logger.info(`Server initialised successfully!`);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.use(bodyParser.json());

// Set up CORS
const allowedOrigins = ['http://localhost:5173', 'http://localhost:4173', 'https://pmd.upayan.space'];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

// Import routes
const userAdd = require('./routes/user/addUser');
const userGet = require('./routes/user/getUser');
const userUpdate = require('./routes/user/updateUser');

// Use routes
app.use(userAdd);
app.use(userGet);
app.use(userUpdate);

// HTTPS server configuration with .pem files
const httpsOptions = {
  key: fs.readFileSync('./api/ssl/key.pem'),
  cert: fs.readFileSync('./api/ssl/cert.pem')
};

// Start the HTTPS server
https.createServer(httpsOptions, app).listen(port, () => {
  logger.info(`Server is running on HTTPS port ${port}`);
});
