const express = require('express');
const router = express.Router();
const axios = require('axios');
const logger = require('../../../logger');

// Load environment variables from .env file
require('dotenv').config();

router.post('/ptero/user/create', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Define the payload for the Pterodactyl API request
    const pteroPayload = {
      email,
      username,
      first_name: 'FirstName',
      last_name: 'LastName'
    };

    // Make the API request to Pterodactyl
    const response = await axios.post('https://panel.g9aerospace.in/api/application/users', pteroPayload, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.PTERODACTYL_API_KEY}`
      }
    });

    // Log the success and send response
    logger.info(`Pterodactyl user created successfully: ${email}`);
    res.status(200).json({
      message: 'Pterodactyl user created successfully',
      data: response.data
    });
  } catch (error) {
    logger.error(`Error creating Pterodactyl user: ${error}`);
    console.error('Error creating Pterodactyl user: ', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
