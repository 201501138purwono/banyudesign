var express = require('express');
var app = express();
var port = 3000;
app.listen(port, function(){
  console.log('Server is running on port:', port);
})
app.get('/', function(req, res){
    res.send('Hello Express');
});
