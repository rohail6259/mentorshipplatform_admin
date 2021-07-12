const express = require("express");
const app = express();

require("./startup/routes")(app);
require("./startup/db")();

const port = process.env.PORT || 3900;
app.listen(port, () => winston.info(`Listening on port ${port}`));
