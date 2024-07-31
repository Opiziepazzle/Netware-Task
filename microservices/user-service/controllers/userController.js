const User = require('../models/userModel');

exports.getAllUsers = (req, res) => {
    User.find({}, (err, users) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(users);
    });
};

exports.getUserById = (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) return res.status(500).send(err);
        if (!user) return res.status(404).send('User not found');
        res.status(200).json(user);
    });
};

exports.createUser = (req, res) => {
    const newUser = new User(req.body);
    newUser.save((err, user) => {
        if (err) return res.status(500).send(err);
        res.status(201).json(user);
    });
};
