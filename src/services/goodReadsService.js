var http = require('http');
var xml2js = require('xml2js');
var parser = xml2js.Parser({explicitArray:false});

var goodreadsService = function() {
    var getBookById = function(id,cb) {
        var options = {
            host: 'www.goodreads.com',
            path: '/book/show/656?format=xml&key=Hd3Dg6G0xkRNYxQxh4DcUw'
        };
        var callback = function(response){
            var str = '';
            response.on('data',function(chunk){
                str += chunk;
            });
            response.on('end',function(){
                console.log(str);
                parser.parseString(str,
                function(err,result){
                    cb(null,
                        result.Goodreads.Response.book);
                });

            });
        };
        http.request(options,callback).end();
    };
    return {
        getBookById: getBookById
    };
};

module.exports =  goodreadsService;