const Product = require('../models/productModel');

exports.getAllProducts = (req, res) => {
    Product.find({}, (err, products) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(products);
    });
};

exports.getProductById = (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if (err) return res.status(500).send(err);
        if (!product) return res.status(404).send('Product not found');
        res.status(200).json(product);
    });
};

exports.createProduct = (req, res) => {
    const newProduct = new Product(req.body);
    newProduct.save((err, product) => {
        if (err) return res.status(500).send(err);
        res.status(201).json(product);
    });
};
