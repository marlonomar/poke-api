
const {Router} = require('express');
const router =  Router();

router.get('/datos',(req,res)=>{
    let datos={
        "nombre":"marlon",
        "apellido":"guerrero",
        "edad":22
    }
    res.json(datos)
})


module.exports=router;