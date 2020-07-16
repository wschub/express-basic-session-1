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

exports.insertarAutor = async(req, res) => {
	const {
        codigo_autor, 
        nombre, 
        apellido
    } = req.body
	try {
        let respuesta = await cnn_mysql.promise().execute("INSERT INTO autor VALUES(?, ?, ?)", [codigo_autor,nombre,apellido])
        res.status(200).json('El autor fue creado exitosamente')
    } catch (error) {
        
        res.status(500).json('Se genero un erro en la base de datos')
    }
}

exports.eliminarAutor = async(req, res) => {
    const {
        codigo_autor 
    } = req.params
    try {
        let [ResultSetHeader] = await cnn_mysql.promise().execute("DELETE FROM autor WHERE codigo_autor = ?", [codigo_autor])
        if(ResultSetHeader.affectedRows > 0)
            res.status(200).json('Se elimino el autor exitosamente')
        else
            res.status(200).json(`El autor con codigo ${codigo_autor} no exite`)
    } catch (error) {
        console.log(error)
        res.status(500).json('Se genero un erro en la base de datos')
    }
}