const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
module.exports.auth = async (req, res, next) => {
    const bearer = req.headers["authorization"];
    //console.log(bearer);
    if (bearer){
        jwt.verify(bearer, process.env.SECRET_KEY, function(error, data){
            if (error){
                res.sendStatus(403);
            } else {
                let obj = {
                    ...req.body,
                    data
                }
                req.obj = obj;
                next();
            }
        });
    } else {
        res.sendStatus(403);
    }
}
    