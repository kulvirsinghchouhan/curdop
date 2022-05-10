const { json } = require("express");
const express = require("express");

const users = require("../models/user.js")
const router = express.Router();

router.get('/', async(req,res) => {

  try{
      const user = await users.find();
      res.json(user);
      
  }catch(err){
      res.send('Error' + err)
  }
});

router.get('/:id', async(req,res) => {

    try{
        const user = await users.findById(req.params.id);
        res.json(user);
        
    }catch(err){
        res.send('Error' + err)
    }
  });

router.post('/', async(req,res) => {
    const user = new users({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    })

    try{
        const use1 =  await user.save() 
        res.json(use1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res) => {
  
    try{
        const userr = await users.findById(req.params.id) 

        userr.name = req.body.name
        user1 = await userr.save()
         res.json(userr)
 
    }catch(err){
        res.send('Error')
    }

})

router.delete('/:id',async(req,res) => {

    console.log(req.params.id)
  
    try{
        const userr = await users.findById(req.params.id) 

        console.log(userr);

        user1 = await userr.remove(userr)

        console.log(user1)
        // res.json(userr)
 
    }catch(err){
        res.send('Error')
    }

})

module.exports = router