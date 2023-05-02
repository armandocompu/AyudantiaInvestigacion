const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection');

const app = express();

//importando rutas
const activosRoutes=require('./routes/activos');
const conceptosRoutes=require('./routes/conceptos');
const fuentesRoutes=require('./routes/fuentes');
const definicionesRoutes=require('./routes/definiciones');
const indicadoresRoutes=require('./routes/indicadores');
const medicionesRoutes=require('./routes/mediciones');
const periodoRoutes=require('./routes/periodo');
const programaRoutes=require('./routes/programa');
const sinonimosRoutes=require('./routes/sinonimos');
const tipoactivoRoutes=require('./routes/tipoactivo');
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
app.use('/',conceptosRoutes);
app.use('/activos',activosRoutes);
app.use('/fuentes',fuentesRoutes);
app.use('/definiciones',definicionesRoutes);
app.use('/indicadores',indicadoresRoutes);
app.use('/mediciones',medicionesRoutes);
app.use('/periodosescolares',periodoRoutes);
app.use('/programas',programaRoutes);
app.use('/sinonimos',sinonimosRoutes);
app.use('/tiposactivo',tipoactivoRoutes);


//static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
  });
