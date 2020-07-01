const Order = require('../models/order');
const logger = require('morgan');
const mongoose = require('mongoose');
const Product = require('../models/product');

var getOrder = function(req,res,next) {
   Order.find()
   .select("productId quantity _id")
   .exec()
   .then(docs => {
       const response = {
           count:docs.length,
           Orders:docs.map(doc =>{
               return {
                   productId:doc.productId,
                   quantity:doc.quantity,
                   _id:doc._id,
                   resquest:{
                       get:'GET',
                       url:'http://localhost:3001/order/' + doc._id
                   }
               }
           })
       }
       res.status(200).json(response);
   })
   .catch(err => {
       console.log(err);
   })
}
var addOrder = function(req, res, next) {
  Product.findById(req.body.productId).then( product => {
      let order = new Order({
     _id:new mongoose.Types.ObjectId(),
     product:req.body.productId,
     quantity:req.body.quantity
   });
    return  order.save();
  })
  .then( result => {
        console.log(result);
        res.status(200).json(result);
  })
 .catch(err => {
      console.log(err);
      res.status(500).json({error:err});
  })
}
var removeOrder = function(req, res, next) {
  let order = new Order();
  const {id} = req.body;
  Order.deleteOne({_id:req.params.id}, function(err){
    if (err) return res.json({ success: false, error: err });
    return res.json({ text:'Deleted Successfully', success: true });
  });
}


module.exports = { getOrder, addOrder, removeOrder };