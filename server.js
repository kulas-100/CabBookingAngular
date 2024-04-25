var express = require('express');
var app = express();
app.use(express.static('dist/prj-kv36-04-03-2024-s'));
app.get('/', function (req, res,next) {
res.redirect('/');
});
app.listen(8080)