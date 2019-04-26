const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');

//configuracion
app.set('port',process.env.PORT || 3000 );


//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

//routes
require('./routes/userRoutes')(app);

// static files (nada por ahora)

app.listen(app.get('port'), () =>{
  console.log("Servidor en puerto 3000");
});