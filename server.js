const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

//portti herokulle
const port = process.env.PORT || 3000;

//partials käyttöön
hbs.registerPartials(__dirname + '/views/partials')
// laittaa public-folderin käyttöön
app.use(express.static(__dirname + '/public'));
// hbs käyttöön
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('root.hbs', {

  });
});



app.listen(port, () => {
  console.log(`server up on port ${port}`);
});
