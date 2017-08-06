var express = require('express');

var app = express();
var port = process.env.port || 5000;

app.use(express.static('public'));
//app.use(express.static('src/views'));//commenting
app.set('views','src/views');
app.set('view engine','ejs');

app.listen(port,function(err){
        console.log('Running server on port ' + port);
    });
app.get('/',function(req,res) {
    res.render('index',{
        title:'hello from render',
        nav:[{
            Link:'/Books',
            Text:'Books'
        },{
            Link:'/Authors',
            Text:'Authors'
        }]
    });
});

app.get('/root',function(req,res) {
    res.send('I am Root of file');
});
