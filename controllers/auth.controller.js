const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/users.model');
module.exports.checkUsername = async (req, res) => {
    let { username } = req.body;
    let user = await User.findOne({ username });
    //console.log(username, user);
    if (user){
        res.json({success: false});
    } else {
        //console.log('true');
        res.json({success: true});
    }
    
}
module.exports.register = async (req, res) => {
    let today = new Date();
    let { name, username, password } = req.body;
    let address = '';
    let phone = '';
    let image = 'https://res.cloudinary.com/dfbongzx0/image/upload/v1587393070/17241-200_sjxojm.png';
    let userData = { name, username, password, address, phone, image, today};
    let hash = await bcrypt.hash(password, 10);
    userData.password = hash;
    let user = await User.create(userData);
    res.json({success: true});
}
module.exports.login = async (req, res) => {
    let { username, password } = req.body;
    let user = await User.findOne({ username });
    if (user) {
        if (bcrypt.compareSync(password, user.password)) {
            // Passwords match
            const payload = {
                _id: user._id,
                username: user.username,       
            };
            let token = jwt.sign(payload, process.env.SECRET_KEY);
            res.json(token);
        } else {
            // Passwords don't match
            res.sendStatus(403);
        }
    } else {
        res.sendStatus(403);
    }
}