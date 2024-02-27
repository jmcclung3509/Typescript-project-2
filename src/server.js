import {express} from 'express'  
const app = express();
require('dotenv').config(); // Load environment variables from .env file

// Route to serve environment variables
app.get('/api/env', (req, res) => {
  const env = {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    // Add more environment variables as needed
  };
  res.json(env);
});

// Route to serve your index.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Other routes and middleware...

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
