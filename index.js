const express = require('express');
const app = require('./lib/router.js');
const http = require('http').Server(app);

http.listen(process.env.PORT || 5050, function(){
  console.log('listening on *: ' + process.env.PORT || 5050);
});