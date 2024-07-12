const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');
const logger = require('../logger');

const db = admin.firestore();

router.post('/addUser', async (req, res) => {
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

module.exports = router;
