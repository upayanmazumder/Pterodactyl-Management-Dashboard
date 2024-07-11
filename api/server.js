const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Initialize Firebase Admin SDK
const serviceAccount = require('./firebase/serviceaccountkey.json');

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

    res.status(200).send('User data added successfully');
  } catch (error) {
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
      res.status(404).send('No user found');
    } else {
      res.status(200).json(doc.data());
    }
  } catch (error) {
    console.error('Error getting user data: ', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
