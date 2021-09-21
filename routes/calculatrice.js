var express = require('express');
var router = express.Router();

function areParamsValid(params) {
    return params.a !== undefined && params.b !== undefined;
}

router.get('/addition', function (req, res, next) {
    let params = req.body;

    res.send({"resultat": params.a + params.b});
});

router.get('/soustraction', function (req, res, next) {
    let params = req.body;

    res.send({"resultat": params.a - params.b});
});

module.exports = router;
