const fetch = require('node-fetch');

async function updateUser(email, firstName, lastName, pterodactylPassword) {
  const apiUrl = 'https://pmdapi.upayan.space/updateUser';

  const userData = {
    email,
    firstName,
    lastName,
    pterodactylPassword
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      console.log('User data updated successfully');
    } else {
      const errorText = await response.text();
      console.error('Error updating user data:', errorText);
    }
  } catch (error) {
    console.error('Error updating user data:', error);
  }
}

// Replace with the actual user data
const email = 'upayan@upayan.space';
const firstName = 'John';
const lastName = 'Doe';
const pterodactylPassword = 'newpassword';

updateUser(email, firstName, lastName, pterodactylPassword);
