const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

//importando rutas
const activosRoutes = require('./routes/activos');
const { urlencoded } = require('express');

// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//middlewars
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

//empezando el servidor
app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en el puerto 3000');
});
