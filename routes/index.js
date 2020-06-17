const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
    filename = path.join(__dirname, '..', 'view', 'home.html');
    res.status(200).sendFile(filename);
});

router.get('/users', (req, res) => {
    filename = path.join(__dirname, '..', 'view', 'users.html');
    res.status(200).sendFile(filename);
});

router.use((req, res) =>{
    res.status(404).send('<h1>Not Found</h1>');
})

module.exports = router;