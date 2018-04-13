const AuthController = require('./controllers/AuthController');
const DataController = require('./controllers/DataController');

const express = require('express');
const router = express.Router({ mergeParams: true });

   router.post('/login',
       AuthController.login )  
    
    router.get('/', (req, res) => {
        res.send({hi: "Hello from server"});
    });

    router.get('/api/fetch',
        DataController.fetch )

    router.get('/api/:id',
        DataController.getId )


module.exports = router;