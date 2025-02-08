const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/haha', (req, res) => {
    res.json({ greet: "namaste" });
});

const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
