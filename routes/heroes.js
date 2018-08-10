var express = require('express');
var router = express.Router();
var heroService = require('../services/heroes.service');

router.route('/json')
    .get((req, res) => {
        // console.log('Hello');
        var heroes = heroService.getHeroes();
        res.json(heroes);
    });

module.exports = router;