const axios = require('axios');

async function createUser(username, email, password) {
  try {
    const response = await axios.post('https://pmdapi.upayan.space/ptero/user/create', {
      username,
      email,
      password
    });

    console.log('User created successfully:', response.data);
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

// Example usage
const username = 'testuser';
const email = 'testuser@example.com';
const password = 'securepassword';

createUser(username, email, password);
