var mongodb = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var bookController = function(bookService,nav) {
    var middleware = function(req,res,next){
        // if (!req.user) {
        //     res.redirect('/');
        // }
        next();
    };
    var getIndex = function(req,res) {
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
    };

    var getById = function(req,res) {
        var id = new ObjectId(req.params.id);
        var url = 'mongodb://localhost:27017/Library';
        mongodb.connect(url,function(err,db) {
            var collection = db.collection('books');
            collection.findOne({_id:id},
           function(err,results) {
                bookService.getBookById(results.bookId,
                    function(err,book) {
                        results.book = book;
                        res.render('SingleBook',{
                            title:'Books',
                            nav:nav,
                            books:results
                        });
                    });
            });
        });
    };

    return {
        getIndex: getIndex,
        getByIndex : getById,
        middleware : middleware
    };
};

module.exports = bookController;