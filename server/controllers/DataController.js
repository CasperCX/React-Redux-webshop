const fs = require('fs');
const path = require('path');
const jsonPath = path.join(__dirname, '../db/json-db.json');

module.exports = {
    async fetch (req, res) {
        const data = await fs.readFileSync(jsonPath, 'utf8');
        res.status(200).send(data);
    },

    async getId (req, res) {
        try {
            const data = await fs.readFileSync(jsonPath, 'utf8'); 
            const obj = JSON.parse(data);
               if(data.hasOwnProperty(req.params.id)) {
                    res.send(obj[req.params.id]);
               }; 
            } catch (err) {
                res.status(500).send({
                    error: "Could not fetch data"
            })
        }
    }
}