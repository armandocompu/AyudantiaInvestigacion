const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection');

const app = express();

//importando rutas
const activosRoutes = require('./routes/activos');
//const { urlencoded } = require('express');

// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host:'localhost',
    user: 'root',
    password: 'salva2013',
    port:3306,
    database: 'stres-km'
}, 'single'));

app.use(express.urlencoded({extended: false}));
 
//routes
app.use('/', activosRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
  });
