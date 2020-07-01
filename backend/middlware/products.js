const mongoose  = require('mongoose');
const Product = require('../models/product');
const logger = require('morgan');

var getProducts = function(req,res,next) {
   Product.find()
   .select("title price _id")
   .exec()
   .then(docs => {
       const response = {
           count:docs.length,
           products:docs.map(doc => {
               return {
                   title:doc.title,
                   price:doc.price,
                   _id:doc._id,
                   resquest:{
                       get:'GET',
                       url:'http://localhost:3001/product/' + doc._id
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
var addProduct = function(req, res, next) {
 console.log(req.body);
 let product = new Product({
           _id:new mongoose.Types.ObjectId(),
           title:req.body.title,
           description:req.body.description,
           manufacturer:req.body.manufacturer,
           price:req.body.price,
           image:req.body.image
    });

//   const { title, description,  manufacturer, price, image } = req.body;
//   if ((!title && title !== 0) || !description) {
//     return res.json({
//       success: false,
//       error: "INVALID INPUTS"
//     });
//   }
//   product.title = title;
//   product.description = description;
//   product.manufacturer = manufacturer;
//   product.price = price;
//   product.image = image;
//   product.save(err => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true });
//   });
    product.save().then((result) => {
        console.log(result);
         res.status(200).json({ success: true, createdProduct: result});
    })
    .catch((err) =>{
        console.log(err);
            res.status(500).json({ success: false, error: err });
    })
}
var removeProduct = function(req, res, next) {
  let product = new Product();
  const {id} = req.body;
  Product.deleteOne({_id:req.params.id}, function(err){
    if (err) return res.json({ success: false, error: err });
    return res.json({ text:'Deleted Successfully', success: true });
  });
}


module.exports = { getProducts, addProduct, removeProduct };