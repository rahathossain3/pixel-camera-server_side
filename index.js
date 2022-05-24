const express = require('express')
const cors = require('cors');
// JWT 
const jwt = require('jsonwebtoken');
// dotenv config
require('dotenv').config();
//mongodb
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express()
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.of0kn.mongodb.net/?retryWrites=true&w=majority`;

//Client
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
    try {
        await client.connect();
        //products collections
        const productCollection = client.db('pixel_camera').collection('products');

        //get all products
        app.get('/product', async (req, res) => {
            const query = {};
            const cursor = productCollection.find(query);
            const products = await cursor.toArray();

            res.send(products)
        })







    }
    finally {

    }


}

run().catch(console.dir);






app.get('/', (req, res) => {
    res.send('welcome To Pixel Camera Manufacture')
})

app.listen(port, () => {
    console.log(`Pixel listening on port ${port}`)
})