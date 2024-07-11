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

const db = admin.firestore();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to add user data
app.post('/addUser', async (req, res) => {
  try {
    const { username, email, serversOwned, friendsEmails } = req.body;
    const userRef = db.collection('users').doc(email);

    await userRef.set({
      username,
      email,
      serversOwned,
      friendsEmails
    });

    logger.info(`User data added successfully for email: ${email}`);
    res.status(200).send('User data added successfully');
  } catch (error) {
    logger.error(`Error adding user data: ${error}`);
    console.error('Error adding user data: ', error);
    res.status(500).send('Internal Server Error');
  }
});

// Endpoint to get user data by email
app.get('/getUser/:email', async (req, res) => {
  try {
    const email = req.params.email;
    const userRef = db.collection('users').doc(email);
    const doc = await userRef.get();

    if (!doc.exists) {
      logger.warn(`No user found for email: ${email}`);
      res.status(404).send('No user found');
    } else {
      logger.info(`User data retrieved successfully for email: ${email}`);
      res.status(200).json(doc.data());
    }
  } catch (error) {
    logger.error(`Error getting user data: ${error}`);
    console.error('Error getting user data: ', error);
    res.status(500).send('Internal Server Error');
  }
});

// HTTPS server configuration with .pem files
const httpsOptions = {
  key: fs.readFileSync('./api/ssl/key.pem'),
  cert: fs.readFileSync('./api/ssl/cert.pem')
};

// Start the HTTPS server
https.createServer(httpsOptions, app).listen(port, () => {
  logger.info(`Server is running on HTTPS port ${port}`);
});
