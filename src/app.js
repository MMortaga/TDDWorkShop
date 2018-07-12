const express = require ('express');
const path = require ('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const controllers = require('./controllers');
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.set('views',path.join(__dirname, 'views'));
app.set('view engine','hbs');
app.engine('hbs',exphbs({
  extname:'hbs',
  layoutsDir:path.join(__dirname,'views','layouts'),
  partialsDir:path.join(__dirname,'views','partials'),
  defaultLayout:'main'
}));
app.use(cookieParser());
app.use(controllers);
app.use((req,res)=>{
  res.status(404).render('error',{layout:false});
});
app.use((err,req,res)=>{
  res.status(500).render('error',{layout:false});
});
app.set('port', process.env.PORT || 5000);
module.exports = app;
