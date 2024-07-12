const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');
const logger = require('../../logger');

const db = admin.firestore();

router.get('/user/getUser/:email', async (req, res) => {
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

module.exports = router;
