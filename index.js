const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();
//middleWare
app.use(cors());
app.use(express.json())

//mongodb settings

const { MongoClient } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3ndc9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {

    try {
        await client.connect();
        console.log('data is connected')

    } finally {
        await client.close()
    }

} run().catch(console.dir)



app.get('/', (req, res) => {
    res.send("Hello Zobayer Sakib.This is your server")
})

app.listen(port, () => {
    console.log('working this port', port)
})