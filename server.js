const express = require("express");
const path  =  require("path");
const exhbs = require("express-handlebars");

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exhbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.set('port', (process.env.PORT || 3000));

app.get('/', function(req, res) {
  res.render('home', {
    content: 'this is new content'
  });
});

app.listen(app.get('port'), function() {
  console.log('server started on port ' + app.get('port'));
});
