var router = require('express').Router();
var path = require('path');

router.route('/')
    .get((req, res) => {
        var file = path.resolve('./content/hello.html');       //This path is relative to the project's root directory, not the current (routes) directory.
        res.sendFile(file);
    });

module.exports = router;
