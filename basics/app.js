const express = require('express');
const app = express();
const {initConfiguration} = require('./configs/config.global');
const cors = require('cors');

// Middleware to parse JSON bodies
app.use(express.json());

const options = {
  'origin':               '*',
  'methods':              'GET,PUT,POST,DELETE',
  'preflightContinue':    false,
  'optionsSuccessStatus': 206,
  'exposedHeaders':       'Access-Control-Allow-Method,Access-Control-Allow-Origin,Content-Type,Content-Length'

};

app.use(cors(options));

// Route for GET request
app.get('/test', (req, res) => {
  res.send({message:'Hello, World!',status:200});
});
initConfiguration();
// Start the server
app.listen(global?.config?.PORT ?? '3070', () => {
  console.log(`Server running at http://localhost:${global?.config?.PORT ?? '3070'}/`);
});
