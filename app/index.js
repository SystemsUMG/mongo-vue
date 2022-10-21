const express = require('express');
const cors = require('cors');
const createError = require('http-errors');
const mongoose = require('mongoose');
require('dotenv').config();

const bodyParser = require('body-parser');
const studentAPI = require('../app/routes/students')

//Conexion a Base de Datos
mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Conectado a MongoDB'))
    .catch((err) => console.log(err))

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false})) //Middleware
app.use(cors())
app.use('/api', studentAPI) //API

//Iniciar servidor
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('Connectado a puerto ' + port)
})

//404
app.use((req, res, next) => {
  next(createError(404))
})

//Manejo de error
app.use(function (err, req, res) {
  console.error(err.message)
  if (!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)
})