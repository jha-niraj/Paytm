// backend/index.js
const express = require("express");
// You can either use bodyParser form NPM Library or use simply express.json();
const cors = require("cors");
const mainRouter = require("./routes/index");

const app = express();
app.use(express.json());
app.use(cors());
const port = 5000;

app.use("/api/v1", mainRouter);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
})
