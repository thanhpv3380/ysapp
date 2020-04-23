const bcrypt = require('bcrypt');
const User = require('../models/users.model');
module.exports.update = async (req, res) => {
    const userData = req.obj;
    let name = userData.name;
    let address = userData.address;
    let phone = userData.phone;
    try {
        const rs = await User.update({ _id: userData.data._id}, {name, address, phone});
        res.json({success:true, name, address, phone});
    } catch(error){
        res.sendStatus(403);
    }
}
module.exports.updatePass = async (req, res) => {
    const userData = req.obj;
    let password = userData.newPass;
    let hash = await bcrypt.hash(password, 10);
    try {
        const rs = await User.update({ _id: userData.data._id}, {password: hash});
        res.json({success:true});
    } catch(error){
        res.sendStatus(403);
    }  
}
module.exports.getUserData = async (req, res) => {
    const userData = req.obj;
    try {
        const user = await User.findOne({ _id: userData.data._id});
        res.json(user);
    } catch(error){
        res.sendStatus(403);
    }
}