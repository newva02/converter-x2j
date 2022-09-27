const express = require('express');
const app = express();
const port = 3000;

var indexRouter = require('./routes/index');

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', './views');

// set option for body data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set middleware
app.use(express.static(__dirname + '/public'));

app.use('/', indexRouter);

// use res.render to load up an ejs view file

app.listen(port, () => {
  console.log('Server is working : PORT - ',port);
});

