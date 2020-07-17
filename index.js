require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const routes = require('./routes/routes');
const route_biblioteca = require('./routes/biblioteca')

/* Initializations */
const app = express();
//app.use(helmet())


app.set("port", process.env.PORT1);


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());





// Static files
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, './public/index.html'));
});


app.use('/api/',routes);
app.use('/api/biblioteca/',route_biblioteca);
//app.use(require('./routes/routes'));


app.listen(app.get("port"), '0.0.0.0')