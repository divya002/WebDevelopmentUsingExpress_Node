var express = require('express');
var app = express();
var port = process.env.port || 5000;
app.use(express.static('public'));
//app.use(express.static('src/views'));//commenting
app.set('views','src/views');
app.set('view engine','ejs');
var nav = [{
                Link:'/Books',
                Text:'Books'
            },{
                Link:'/Authors',
                Text:'Authors'
            }];
var bookRouter = require('./src/routes/bookRoutes')(nav);
app.use('/Books',bookRouter);

var adminRouter = require('./src/routes/adminRoutes')(nav);
app.use('/Admin',adminRouter);

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
});
app.get('/root',function(req,res) {
    res.send('I am Root of file');
});
