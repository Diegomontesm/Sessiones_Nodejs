const express =require('express');
const app=express();
const path=require('path');
const session = require('express-session');
const flash= require('connect-flash');//PERMITE ENVIAR MENSAJES ENTRE PAGINAS


//CONFIGURACION
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

//MIDDLEWARES FUNCIONES QUE PROCESAN ALGO ANTES DE QUE LLEGUEN A
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(session({
    secret:'mysecretkey',
    resave:false,
    saveUninitialized:false    
    
})); 
app.use(flash());


//globals
app.use((req, res, next)=>{
    app.locals.message = req.flash('success');
    next();//PARA QUE CONTINUE CON LAS RUTAS DE ABAJO
})



//ROUTES
app.use(require('./ROUTES/index'));

app.listen(4000);
console.log('server on port', 4000);

