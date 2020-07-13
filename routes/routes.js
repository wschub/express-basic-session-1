const {  Router, query } = require('express');
const path = require('path');
const router = Router();

router.get('/', (req,res)=>{

    res.send('<h1>Hello World!</h1>');
});


router.post('/peticion',(req,res)=>{
    
    console.log(req.body.title);
    console.log(req.body.category);
    console.log(req.body.genre);
    console.log(req.body.director);
    console.log(req.body.Edad);

    const { title,
        genre,
        director,
        Edad 
    } = req.body;
     
    console.log(`dest: ${ director }`);

    let edad = req.body.Edad;
    if(edad>=18){
        res.status(200).json('El usuario es mayor de edad.');
    }
    res.status(201).json('No es mayor de edad');
});


router.get('/peticion/:id', (req,res)=>{

    let user = req.params.id;

    console.log(`peticion ${user}`);
    res.json(`peticion: ${user} `);

});

//actualizar
router.put('/peticion/:id',(req,res)=>{
    
    let user = req.params.id;

    console.log(`peticion ${user}`);
    res.json(`peticion: ${user} `);

    

});

//Delete
router.delete('/peticion/:id',(req,res)=>{
    
    let user = req.params.id;

    console.log(`peticion ${user}`);
    res.json(`peticion: ${user} `);
});


router.get('/movies',(req,res)=>{

    res.sendFile(path.join(__dirname, '../public/json', 'bd.json'));

    

});



module.exports = router;