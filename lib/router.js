const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const handler = require('./controller.js');
const root = require('app-root-path');

//配置路由
const router = express.Router();

//配置访问静态文件
app.use(express.static('public'));
//配置解析json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.sendFile(root + '/index.html')
  //res.render('location', {location: {lat: 22.523491, lng: 113.938065}});
});

app.use('/api/wx', handler.handleMessage);

router.get('/req', handler.handleAlarm);
router.get('/reqSample', function(req, res){
  console.log('reqSample is called');
  res.send('OK');
});
router.get('/location/:lat/:lng',function(req, res){
  res.render('location', {location: {lat: req.params.lat, lng: req.params.lng}})
})
app.use('/api', router);

module.exports = app;