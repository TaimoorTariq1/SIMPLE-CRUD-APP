const express = require('express')
const mongoose = require('mongoose');
const Product = require("./models/product.model.js");
const app = express()

app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.send("Hello from Node API Server Updated")
});

app.get('/api/products', async (req, res) => {

    try {
        const products = await Product.find({});
        res.status(200).json(products);

        
    } catch (error) {
        res.status(500).json({message: error.message});
        
    }
});

app.get('/api/products', async (req, res) => {
    try {
        const { id } = req.params;
        await Product.findbyID(id);
        
    } catch (error) {
        res.status(500).json({message: error.message});
        res.status(200).json(product);
        
    }
})


app.post('/api/product/:id', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product)

    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


// update a product

app.put('/api/product/:id', async (req, res)  => {
    try {

        const {id} = req.params;

        

        const product = await Product.findbyIDAndUpdate(id, req.body);

        if(!product) {
            return res.status(404).json({message: "Product not found"});
        }

       const  updatedProduct = await Product.findbyID(id);
       res.status(200).json(updatedProduct);

        
    } catch (error) {
        res.status(500).json({message: error.message});
        
    }


});

// delete a product




mongoose.connect("mongodb+srv://taimoortariq2015:timston5678>@backenddb.lmfkans.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to database");
    
})
.catch(() => {
    console.log("Connection failed!");
});
