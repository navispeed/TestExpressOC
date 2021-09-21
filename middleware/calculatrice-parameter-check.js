function validateParams(req, res, next) {
    console.log(req.headers);

    let params = req.body;
    if (params.a !== undefined && params.b !== undefined) {
        console.log("Tout se passe bien, j'appelle le next")
        next()
    } else {
        console.warn("Il y a un soucis, je le fais comprendre à l'émetteur")
        res.status(400).send({"message": "body must contain field 'a' and 'b'", "query": params})
    }
}

module.exports = validateParams