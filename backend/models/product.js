'use strict';

const mongoose  = require('mongoose');

let Schema  = mongoose.Schema;

let ProductSchema = new Schema({
    _id:mongoose.Types.ObjectId,
    title: String,
    description: String,
    manufacturer: String,
    price: Number,
    image: String
    },
{collection: 'products'});

module.exports = mongoose.model('Product', ProductSchema);
