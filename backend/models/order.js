'use strict';

const mongoose  = require('mongoose');

let Schema  = mongoose.Schema;

let OrderSchema = new Schema({
    _id:mongoose.Types.ObjectId,
    product:{type:mongoose.Schema.Types.ObjectId, ref:'Product', require:true},
    quantity:Number
    },
{collection: 'orders'});

module.exports = mongoose.model('Order', OrderSchema);
