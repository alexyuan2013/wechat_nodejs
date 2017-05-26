const wechat = require('wechat');
const request = require('request');
const config = require('./config.js');

const handleMessage = wechat(config, 
  wechat.text( function (message, req, res, next) {
    console.log(message.FromUserName);
    let replyMsg = '';
    switch(message.Content){
      case '0': replyMsg = '你好'; break;
      case '1': replyMsg = 'Hello'; break;
      case '2': replyMsg = '宝宝'; break;
      case '3': replyMsg = '干嘛'; break;
      case '4': replyMsg = '无聊'; break;
      case '5': replyMsg = '点赞'; break;
      case '6': replyMsg = '呵呵'; break;
      case '7': replyMsg = '哈哈'; break;
      case '8': replyMsg = '么么'; break;
      case '9': replyMsg = '爱你'; break;
      default: replyMsg = '输入0-9的数字看看，或者图片、视频啥的'; break;
    }
    res.reply({
      content: replyMsg,
      type: 'text'
    });
  })
  .image(function (message, req, res, next) {
    res.reply({
      content: '照片很美，人更美',
      type: 'text'
    });
  })
  .voice(function (message, req, res, next) {
    res.reply({
      content: '声音很美，人更美',
      type: 'text'
    });
  })
  .video(function (message, req, res, next) {
    res.reply({
      content: '这么棒的视频，有大片的感觉',
      type: 'text'
    });
  })
  .shortvideo(function (message, req, res, next) {
    res.reply({
      content: '短短几秒钟的镜头，让人回味无穷',
      type: 'text'
    });
  })
  .location(function (message, req, res, next) {
    // message为位置内容
    // { ToUserName: 'gh_d3e07d51b513',
    // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
    // CreateTime: '1359125311',
    // MsgType: 'location',
    // Location_X: '30.283950',
    // Location_Y: '120.063139',
    // Scale: '15',
    // Label: {},
    // MsgId: '5837398761910985062' }
    res.reply([
      {
        title: '您的位置',
        url: 'wechat001.applinzi.com/api/location/' + message.Location_X + '/' + message.Location_Y
      }
    ])
  })
  .link(function (message, req, res, next) {
    // message为链接内容
    // { ToUserName: 'gh_d3e07d51b513',
    // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
    // CreateTime: '1359125022',
    // MsgType: 'link',
    // Title: '公众平台官网链接',
    // Description: '公众平台官网链接',
    // Url: 'http://1024.com/',
    // MsgId: '5837397520665436492' }
    res.reply([
      {
        title: '这是要的链接',
        url: message.Url
      }
    ]);
  })
  .event(function (message, req, res, next){
    res.reply({
      content: message.Event,
      type: text
    });
  })
);

const handleAlarm = function(req, res){
  request.get('http://127.0.0.1:5050/api/reqSample', function(error, response, body){
    console.log('error:', error); // Print the error if one occurred 
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
    console.log('body:', body); 
  });
  res.send('OK');
}

exports.handleMessage = handleMessage;
exports.handleAlarm = handleAlarm;