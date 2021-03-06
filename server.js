var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    url               = require('url'),
    multipart         = require('connect-multiparty'),
    meetupsController = require('./server/controllers/meetups-controller');

mongoose.connect('mongodb://localhost:27017/crayonn');
//this is a bye bye

app.use(bodyParser());
//app.use(multipart({uploadDir: config.tmp}));

app.get('/', function (req, res) {
    console.log('hello');
    res.sendfile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

app.get('/images/:objId/:type', function(req, res){
  var request = url.parse(req.url, true);
  console.log(request.pathname);
  res.sendfile(request.pathname);
});

//REST API
//app.get('/salmon.jpg', function (req, res) {
//  res.sendfile(__dirname + '/client/views/salmon.jpg');
//});
app.get('/api/recipe', meetupsController.list);
app.post('/api/recipe', meetupsController.create);
app.delete('/api/recipe/:_id', meetupsController.deleteRecipe);
app.post('api/imageUpload', meetupsController.createFile);

app.listen(3000, function() {
  console.log('I\'m Listening...');
})
