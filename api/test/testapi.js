const addUser = async () => {
    const response = await fetch('https://pmdapi.upayan.space/addUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: 'john_doe',
        email: 'john@example.com',
        serversOwned: ['server1', 'server2', 'server3'],
        friendsEmails: ['friend1@example.com', 'friend2@example.co.in']
      })
    });
  
    if (response.ok) {
      console.log('User data added successfully');
    } else {
      console.error('Failed to add user data');
    }
  };
  
  const getUser = async (email) => {
    const response = await fetch(`https://pmdapi.upayan.space/getUser/${email}`);
  
    if (response.ok) {
      const data = await response.json();
      console.log('User data:', data);
    } else {
      console.error('Failed to get user data');
    }
  };
  
  const testApi = async () => {
    await addUser();
    await getUser('john@example.com');
  };
  
  testApi();
  