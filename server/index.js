const express = require("express");
const config = require('./config/config');
const app = express();


app.use(require('./routes')); 


app.listen(config.port, () => {
    console.log(`Running on port ${config.port}`);
});

