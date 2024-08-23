const express = require('express');
const app = express();
require('dotenv').config()
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
  try{ res.render('index');}
   catch(er){res.send(er)}
});

app.listen(3000, () => {
    console.log('Server running on port ' + 3000);
});
