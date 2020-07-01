var Tutorial = require('../models/tutorial');
var logger = require('morgan');

var getTutorial = function(req,res,next) {
  console.log('ddddd');
  Tutorial.find((err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });

}
var addTutorial = function(req, res, next) {
  console.log('dddddaaaaaaaaaa');
  let tutorial = new Tutorial();
  const { name, url } = req.body;

  if ((!url && url !== 0) || !name) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  tutorial.name = name;
  tutorial.url = url;
  tutorial.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
}
var removeTutorial = function(req, res, next) {

  let tutorial = new Tutorial();
  const {id} = req.body;
  console.log(req.params);
  Tutorial.deleteOne({_id:req.params.id}, function(err){
    if (err) return res.json({ success: false, error: err });
    return res.json({ text:'Deleted Successfully', success: true });
  });
}


module.exports = { getTutorial, addTutorial, removeTutorial };