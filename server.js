const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('login.html'));

app.post('/save-user', (req, res) => {
    const username = req.body.username;
    if (!username) {
        return res.status(400).send('Username is required');
        let users = [];
        if (fs.existsSync('users.json')) {
            users = JSON.parse(fs.readFileSync('users.json'));
        }
        users.push(username);
        fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
        res.send('User saved');
    }
});

app.listen(port, () => 
    console.log(`Server running at http://localhost:${port}`));
