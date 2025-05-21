const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/title', (req, res) => {
    res.json({ title: "Group One is the Best!" });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});