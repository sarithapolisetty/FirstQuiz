const express = require('express');
const router = express.Router();
const knex = require('../db/client');

router.get('/', (req, res) => {
    res.render('clucks');
});

router.post('/', (req, res) => {
    knex
        .insert({
            image_Url: req.body.image_url,
            username: req.cookies.username,
            content: req.body.content
        })
        .into("clucks")
        .returning("*")
        .then(([clucks]) => {
            console.log("clucks insert result:", clucks);
            res.redirect("/sign_in");
        });
});

router.get("/", (req, res) => {
    knex
        .select("*")
        .from("clucks")
        .then(clucks => {
            res.render("clucks", { clucks: clucks });
        });
});

module.exports = router;
