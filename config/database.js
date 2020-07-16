const mysql = require('mysql2')
/*const cnn_mysql = mysql.createConnection({
    host: 'localhost', 
    user : 'capacitacion_bd', 
    password : 'politecnico', 
    database : 'biblioteca'
}) */

const cnn_mysql = mysql.createConnection({
    host: 'boqp4siwa9ezsmjbsvfz-mysql.services.clever-cloud.com', 
    user : 'ushzsuedosmuccbn', 
    password : '0Z6NGiPJueRvdhwDnkhm', 
    database : 'boqp4siwa9ezsmjbsvfz'
})

module.exports = {cnn_mysql}