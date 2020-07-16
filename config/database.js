const mysql = require('mysql2')
const cnn_mysql = mysql.createConnection({
    host: 'localhost', 
    user : 'capacitacion_bd', 
    password : 'politecnico', 
    database : 'biblioteca'
})

module.exports = {cnn_mysql}