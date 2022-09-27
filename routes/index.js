var express = require('express');
var router = express.Router();
var xml2js = require('xml2js');

// get method
router.get('/', function(req, res) {
  res.render('index');
});

// post method
router.post('/', function(req, res) {
  var _xml_data = req.body.xml_data;
  console.log(_xml_data);

  res.send({ xml_data: _xml_data });

  // parse xml to json

  // xml2js.parseString(data, (err, result) => {
  //   if(err) {
  //     throw err;
  //   }

  //   var json_data = JSON.stringify(result, null, 4);

  //   console.log(json_data);

  //   var json_data_ch = {};
  //   json_data_ch.encrypted = 'false';
  //   json_data_ch.entry = [];
  //   json_data_ch.name = 'metadata01';
  //   console.log(json_data_ch);
  //   console.log(result.WSRRDataCapture.Object);
  //   var json_data_obj = result.WSRRDataCapture.Object;
  //   console.log(JSON.stringify(json_data_obj, null, 4));
  // });

});

module.exports = router;