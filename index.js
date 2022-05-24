const express = require('express')
const cors = require('cors');
// JWT 
const jwt = require('jsonwebtoken');
// dotenv config
require('dotenv').config();


const app = express()
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('welcome To Pixel Camera Manufacture')
})

app.listen(port, () => {
    console.log(`Pixel listening on port ${port}`)
})