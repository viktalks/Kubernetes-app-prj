const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const MESSAGE = process.env.MESSAGE || "Hello from the default config!";
const SECRET = process.env.SECRET || "default-secret";

app.get('/', (req, res) => {
    res.send(`<h2>${MESSAGE}</h2><p>Secret: ${SECRET}</p>`);
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
