var express = require('express');
var app = express();
var port = 3000;

//Folder menaruh bootstrap 4.0 yaitu di folder public
app.use(express.static('public'));

app.listen(port, function(){
  console.log('Server is running on port:', port);
})
app.get('/', function(req, res){
    res.send('Hello Express');
});
