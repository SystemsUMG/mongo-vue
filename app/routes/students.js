const express = require('express');
const studentRoute = express.Router();

let StudentModel = require('../models/Student');

//Rutas para formulario y tabla
//Retornar elementos
studentRoute.route('/students').get((req, res, next) => {
  StudentModel.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

//Agregar registro
studentRoute.route('/students').post((req, res, next) => {
  StudentModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

//Retornar registro
studentRoute.route('/students/:id').get((req, res, next) => {
  StudentModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

//Actualizar registro
studentRoute.route('/students/:id').put((req, res, next) => {
  StudentModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
    }
  })
})

//Eliminar registro
studentRoute.route('/students/:id').delete((req, res, next) => {
  StudentModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = studentRoute;