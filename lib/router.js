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

app.get('/', function(req, res){
  res.sendFile(root + '/index.html')
});

app.use('/api/wx', handler.handleMessage);

module.exports = app;