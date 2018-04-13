const express = require("express");
const PORT = 5000;
const app = express();

require("./routes")(app);

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});