var express = require('express');
var router = express.Router();
const request = require('request');
const convert = require('xml-js');

const KEY = 'vpj%2F%2BrGIciUML6OE2meywozryP099%2FmbvsVi24Pfn%2BYQxun47ipZphfihnSQP%2Bc%2Fi6vVe6yetkb8AQH7sff2Jw%3D%3D';
const url = `http://apis.data.go.kr/B552657/ErmctInsttInfoInqireService/getParmacyListInfoInqire`;
const queryParams = '?' + encodeURIComponent("ServiceKey") + `=${KEY}`; /* Service Key*/

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/search/', (req,res) => {
  const {Q0, Q1, QT} = req.query;
  console.log(Q0,Q1,QT);
  request({
    url: url+queryParams,
    method:"GET"
  }, 
  (error, response, body) => {
    let xml = convert.xml2json(body,{compact:false,spaces:4});
    xml = JSON.parse(xml);
    console.log(xml);
    res.send(xml);
  });
});

module.exports = router;
