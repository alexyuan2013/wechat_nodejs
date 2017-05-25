const wechat = require('wechat');
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
      default: replyMsg = '输入0——9的数字看看'; break;
    }
    res.reply({
      content: replyMsg,
      type: 'text'
    });
  })
  .event(function (message, req, res, next){
    res.reply({
      content: message.Event,
      type: text
    });
  })
);

exports.handleMessage = handleMessage;
