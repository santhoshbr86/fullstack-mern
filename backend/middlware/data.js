var Data = require('../models/data');
var logger = require('morgan');

var getData = function(req,res,next) {
  console.log('ddddd');
  Data.find((err, data) => {
    console.log('jjjjj');
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });

}
var addData = function(req, res, next) {
  console.log('dddddaaaaaaaaaa');
  let data = new Data();
  const { id, message } = req.body;

  if ((!id && id !== 0) || !message) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  data.message = message;
  data.id = id;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
}

module.exports = { getData, addData };