const EnglishMC = require('./../models/englishmc.model');
module.exports.getDataEnglishMC = async (req, res) => {
    const obj  = req.obj;
    try {
        const data = await EnglishMC.find({});
        //console.log(data);
        res.json(data);
    } catch(error){
        res.sendStatus(403);
    }
}