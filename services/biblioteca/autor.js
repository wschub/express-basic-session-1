const {cnn_mysql} = require('../../config/database')
const {SQL_OBTENER_AUTORES,SQL_OBTENER_AUTOR} = require('../../sql_helper/autor')

exports.obtenerAutores = async(req, res) => {
	try {
        let [rows] = await cnn_mysql.promise().query(SQL_OBTENER_AUTORES)
        res.status(200).json(rows)
    } catch (error) {
        
        res.status(500).json('Se genero un erro en la base de datos')
    }
}

exports.obtenerAutor = async(req, res) => {
    const {
        codigo_autor 
    } = req.params
    console.log("=======")
    console.log(codigo_autor)
    console.log(req.query)
    console.log("========")
    try {
        let [rows] = await cnn_mysql.promise().query(SQL_OBTENER_AUTOR, [codigo_autor])
        if(rows[0] !== undefined)
            res.status(200).json(rows[0])
        else
            res.status(200).json({})
    } catch (error) {
        console.log(error)
        res.status(500).json('Se genero un erro en la base de datos')
    }
}