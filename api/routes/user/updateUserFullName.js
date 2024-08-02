const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');
const logger = require('../../logger');

const db = admin.firestore();

router.post('/user/updateUserFullName', async (req, res) => {
  try {
    const { email, firstName, lastName, pterodactylPassword } = req.body;
    const userRef = db.collection('users').doc(email);

    // Update user data with new fields
    await userRef.update({
      firstName,
      lastName
    });

    logger.info(`User data updated successfully for email: ${email}`);
    res.status(200).send('User data updated successfully');
  } catch (error) {
    logger.error(`Error updating user data: ${error}`);
    console.error('Error updating user data: ', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
