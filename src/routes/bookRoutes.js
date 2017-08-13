var express = require('express');
var bookRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
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
    bookRouter.use(function(req,res,next){
        if (!req.user) {
            res.redirect('/');
        }
        next();
    });
    bookRouter.route('/')
    .get(function(req,res) {
        var url = 'mongodb://localhost:27017/Library';
        mongodb.connect(url,function(err,db) {
            var collection = db.collection('books');
            collection.find({}).toArray (
           function(err,results){
                res.render('books',{
                    title:'Books',
                    nav:nav,
                    books:results
                });
            }
);
        });
    });
    bookRouter.route('/:id')
    .get(function(req,res) {
        var id = new ObjectId(req.params.id);
        var url = 'mongodb://localhost:27017/Library';
        mongodb.connect(url,function(err,db) {
            var collection = db.collection('books');
            collection.findOne({_id:id},
           function(err,results) {
                res.render('SingleBook',{
                    title:'Books',
                    nav:nav,
                    books:results
                });
            });
        });
    });
    bookRouter.route('/single')
    .get(function(req,res) {
        res.send('Hello Single Books');
    });
    return bookRouter;
};

module.exports = router;