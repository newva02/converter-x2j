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

  // test sending
  // console.log(_xml_data);
  // res.send({ xml_data: _xml_data });

  // parse xml to json
  var parser = new xml2js.Parser();
  parser.parseStringPromise(_xml_data).then(function(result) {
    console.log(JSON.stringify(result, null, 2));

    res.send({
      json_data: result
    });

    console.log('Succeed');
  })
  .catch(function (err) {
    console.log('Failed');
  });

});

module.exports = router;