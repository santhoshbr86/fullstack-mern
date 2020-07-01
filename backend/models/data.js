const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema(
    {
        id:Number,
        message:String
    },
    {timestamp:true}
);

module.exports=mongoose.model('Data', dataSchema);