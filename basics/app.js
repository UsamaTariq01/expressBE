const express = require('express');
const app = express();
const {initConfiguration} = require('./configs/config.global');


// Middleware to parse JSON bodies
app.use(express.json());

// Route for GET request
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
initConfiguration();
// Start the server
app.listen(global?.config?.PORT ?? '3070', () => {
  console.log(`Server running at http://localhost:${global?.config?.PORT ?? '3070'}/`);
});
