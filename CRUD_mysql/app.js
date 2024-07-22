const express = require('express');
const { initConfiguration } = require('./configs/config.global');
const app = express();

// middlewares
app.use(express.json());

// routes
app.get('/',(req,res)=>{
    res.send('Hello World');
})

initConfiguration();

require('./modules/first/routes')(app);
app.listen(global?.config?.PORT,()=>{
    console.log('APP is running on localhost:',global?.config?.PORT)
})