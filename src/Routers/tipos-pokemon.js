const { Router} = require('express')
const router = Router();

const tablaTipos = require('../dataBase/tabla-tipos.json')

router.get('/',(req,res)=>{
    res.json(tablaTipos)
})

module.exports=router;