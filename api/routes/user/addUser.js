const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');
const logger = require('../../logger');

const db = admin.firestore();

router.post('/user/addUser', async (req, res) => {
  try {
    let { username, firstName, lastName, email, serversOwned, friendsEmails, pterodactylPassword } = req.body;

    username = username.replace(/[^a-zA-Z0-9]/g, '');

    const userRef = db.collection('users').doc(email);

    const userData = {
      username,
      firstName,
      lastName,
      email,
      serversOwned,
      friendsEmails
    };

    // Check if pterodactylPassword already exists in the document
    const doc = await userRef.get();
    if (doc.exists) {
      const existingData = doc.data();
      // Only update pterodactylPassword if it doesn't already exist
      if (!existingData.pterodactylPassword) {
        userData.pterodactylPassword = pterodactylPassword;
      }
    } else {
      // Document doesn't exist, set pterodactylPassword
      userData.pterodactylPassword = pterodactylPassword;
    }

    await userRef.set(userData, { merge: true });

    logger.info(`User data synced successfully for email: ${email}`);
    res.status(200).send('User data synced successfully');
  } catch (error) {
    logger.error(`Error adding user data: ${error}`);
    console.error('Error adding user data: ', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
