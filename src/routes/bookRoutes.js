var express = require('express');
var bookRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var router = function(nav) {
    var bookService = require('../services/goodReadsService')();
    var bookController = require('../controller/bookController')(bookService,nav);
    bookRouter.use(bookController.middleware);
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
    // bookRouter.use(bookControlle);
    bookRouter.route('/')
    .get(bookController.getIndex);
    bookRouter.route('/:id')
    .get(bookController.getByIndex);
    return bookRouter;
};

module.exports = router;