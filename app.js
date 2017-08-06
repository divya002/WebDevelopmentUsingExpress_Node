var express = require('express');
var bookRouter = require('./src/routes/bookRoutes');
var app = express();
var port = process.env.port || 5000;

app.use(express.static('public'));
//app.use(express.static('src/views'));//commenting
app.set('views','src/views');
app.set('view engine','ejs');
app.use('/Books',bookRouter);
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
app.listen(port,function(err){
    console.log('Server is Satrting at ' + port);
})
app.get('/root',function(req,res) {
    res.send('I am Root of file');
});
