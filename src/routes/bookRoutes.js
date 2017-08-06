var express = require('express');
var bookRouter = express.Router();

var router = function(nav) {
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
            nav:nav,
            books:books

        });
    });
    bookRouter.route('/:id')
    .get(function(req,res) {
        var id = req.params.id;
        res.render('SingleBook',{
            title:'Books',
            nav:nav,
            books:books[id]

        });
    });
    bookRouter.route('/single')
    .get(function(req,res) {
        res.send('Hello Single Books');
    });
    return bookRouter;
};

module.exports = router;