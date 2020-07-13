const { Router, response } = require('express');
const path = require('path');
const router = Router();


router.get('/',(req,res)=>{
  res.send('<h1>Hello World!</h1>');
});


router.post('/save',(req,res)=>{

  console.log(req.body);

  res.json(req.body);

});


router.get('/one-row/:id',(req,res)=>{
  const id    = req.params.id;
  console.log(id);

});


router.get('/movies',(req,res)=>{
  
  res.sendFile(path.join(__dirname, '../public/json', 'bd.json'));

});


/*
router.post('/register', async (req, res) => {
    const {
          email,
          phoneNumber,
          password,
          firstName,
          lastName,
          photoUrl
        } = req.body;

    });
*/


module.exports = router;