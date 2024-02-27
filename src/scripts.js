// Fetch environment variables from the server
fetch('/api/env')
  .then(response => response.json())
  .then(env => {
    // Use environment variables
    console.log(env.GOOGLE_API_KEY);
    // You can use other environment variables similarly
  })
  .catch(error => console.error('Error fetching environment variables:', error));