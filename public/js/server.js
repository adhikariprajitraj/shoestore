const mongoose = require('mongoose');

// Connect to the database
mongoose.connect('mongodb://localhost/shoestore', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Create a product schema
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    image: String
});

// Create a model for the product schema
const Product = mongoose.model('Product', productSchema);

// Create a new product
const newProduct = new Product({
    name: 'Nike Running Shoes',
    price: 120,
    description: 'These shoes are perfect for running and exercising.',
    image: 'https://i.imgur.com/abcdefg.jpg'
});

// Save the new product to the database
newProduct.save((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Product saved to database');
    }
});

// Fetch a list of products from the database
Product.find((error, products) => {
    if (error) {
        console.log(error);
    } else {
        console.log(products);
    }
});

