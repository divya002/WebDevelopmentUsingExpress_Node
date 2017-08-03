var express=require('express');

var app=express();
var port=5000;

app.use(express.static('public'));
app.use(express.static('src/views'));
app.listen(port,function(err){
    console.log('Running server on port '+port);
    });
app.get('/',function(req,res){
res.send('I am Root of file');
});
