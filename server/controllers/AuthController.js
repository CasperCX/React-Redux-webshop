const config = require('../config/config');

module.exports = {
    login (req, res) {
        res.status(200).send({
            OK: 'All ok'
        })
    }
};