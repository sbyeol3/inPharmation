var express = require('express');
var router = express.Router();
const request = require('request');
const convert = require('xml-js');

const KEY = 'vpj%2F%2BrGIciUML6OE2meywozryP099%2FmbvsVi24Pfn%2BYQxun47ipZphfihnSQP%2Bc%2Fi6vVe6yetkb8AQH7sff2Jw%3D%3D';
const url = `http://apis.data.go.kr/1741000/DisasterMsg2/getDisasterMsgList`;
var queryParams = '?' + encodeURIComponent("ServiceKey") + `=${KEY}`; /* Service Key*/

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/search/', (req,res) => {
  const {Q0, Q1, QT} = req.query;
  request({
    url: url+queryParams,
    method:"GET",
    qs:{
      type: 'json',
      numOfRows: '10',
      pageNo: '1',
      flag: 'Y',
    }
  }, 
  (error, response, body) => {
    if (error)
      res.send(error);

    const jsonBody = JSON.parse(body);
    const {totalCount} = jsonBody.DisasterMsg[0].head[0]
    const {numOfRows, pageNo} = jsonBody.DisasterMsg[0].head[1];
    const {RESULT:{resultCode, resultMsg}} = jsonBody.DisasterMsg[0].head[2];
    const data = jsonBody.DisasterMsg[1].row;

    if(resultCode==='INFO-0'){
      console.log('API 호출 완료!');
      const returnData = {data:data, totalCount:totalCount, numOfRows:numOfRows, pageNo:pageNo};
      res.send(returnData);
    } else res.send(resultCode);

  });
});

module.exports = router;
