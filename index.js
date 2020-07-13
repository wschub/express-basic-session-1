require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const routes = require('./routes/routes');


/* Initializations */
const app = express();
//app.use(helmet())


app.set("port", process.env.PORT1);


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());


app.use('/api/',routes);
//app.use(require('./routes/routes'));


// Static files
//app.use('/public', express.static(path.join(__dirname, './public')));



app.listen(app.get("port"), ()=>{
    console.log(`Server on port ${process.env.PORT1}`);
  })