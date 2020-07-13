const { Router, response } = require('express');
const router = Router();


router.get('/',(req,res)=>{

  res.send('<h1>Hello World!</h1>');


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