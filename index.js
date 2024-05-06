const express = require('express')
const mongoose = require('mongoose');
const app = express()

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.send("Hello from Node API Server Updated")
});

app.post('/api/products', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

mongoose.connect("mongodb+srv://taimoortariq2015:timston5678>@backenddb.lmfkans.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to database");
    
})
.catch(() => {
    console.log("Connection failed!");
});
