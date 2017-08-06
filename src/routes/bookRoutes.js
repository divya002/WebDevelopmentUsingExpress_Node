var express = require('express');
var bookRouter = express.Router();

var books = [
    {
        title: 'Concept on Physics',
        genre: 'Physics',
        author:'HC verma',
        read: false
    },
     {
        title: 'Concept on Chemistry',
        genre: 'Chemistry',
        author:'HC Merma',
        read: false
    },
     {
        title: 'Concept on Biology',
        genre: 'Boilogy',
        author:'HC Terma',
        read: false
    }
];
bookRouter.route('/')
    .get(function(req,res){
        res.render('books',{
            title:'Books',
            nav:[{
                Link:'/Books',
                Text:'Books'
            },{
                Link:'/Authors',
                Text:'Authors'
            }],
            books:books

        });
    });
bookRouter.route('/single')
    .get(function(req,res) {
        res.send('Hello Single Books');
    });

module.exports = bookRouter;