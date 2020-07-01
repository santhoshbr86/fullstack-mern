const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tutorialSchema = new Schema(
    {
        name:String,
        url:String
    },
    {timestamp:true}
);

module.exports=mongoose.model('Tutorial', tutorialSchema);