import express from "express";

let Router = new express.Router(),
    UserModel = require("../models/user.model");

Router.get("/users", (req, res) => {
    if (!req.body) {
        return res.status(400).send("Request body is missing");
    }

    let model = new UserModel(req.body);

    model
        .save()
        .then(doc => {
            if (!doc || doc.length === 0) {
                return res.status(500).send(`${doc}json vide`);
            }

            res.status(201).send(doc);
            console.log(`Model is created`);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = Router;