const express = require('express')
const app = express()
const morgan = require('morgan')

//settings 
app.set('port',process.env.PORT ||3000)
app.set('json spaces',2)

//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json());

//routers
app.use(require('./src/Routers/tipos-pokemon'))

//starting server
app.listen(app.set('port'),()=>{
    console.log(`server on port ${app.set('port')}`)
})
