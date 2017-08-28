

var express = require('express');
var fs = require('fs'),
    xml2js = require('xml2js');
var path = require('path');
var app = express();

// Define the port to run on
app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/getdata', function (req, res) {
  
    var parser = new xml2js.Parser();
    var result;
    parser.parseString(fs.readFileSync('hack.xml').toString(), function (err, result1) {
        console.dir(result1);

    
     res.send(result1);
        console.log('Done');
    });

});

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});