var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
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
    adminRouter.route('/addBooks')
    .get(function(req,res) {
            var url = 'mongodb://localhost:27017/Library';
            mongodb.connect(url,function(err,db){
                var collection = db.collection('books');
                collection.insertMany(books,
                function(err,result) {
                    res.send(result);
                    db.close();
                });
            });
        });
    // bookRouter.route('/:id')
    // .get(function(req,res) {
    //     var id = req.params.id;
    //     res.render('SingleBook',{
    //         title:'Books',
    //         nav:nav,
    //         books:books[id]

    //     });
    //});
    return adminRouter;
};

module.exports = router;