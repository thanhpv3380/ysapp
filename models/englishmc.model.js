const mongoose = require('mongoose');
const englismcSchema = new mongoose.Schema({
    word: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }

});
const EnglishMc = mongoose.model('englishmcs', englismcSchema);
module.exports = EnglishMc;  