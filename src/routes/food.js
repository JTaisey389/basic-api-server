'use strict';

// const { Router } = require('express');
const express = require('express');

const foodModel = require('../models/food-model');
const food = new foodModel;

const foodRouter = express.Router();
//http://localhost:3000/
// GET http://localhost:3333/food?shirt

foodRouter.get('/food', getAllFood);
foodRouter.get('/food/:id', getOnePeiceOfFood);
foodRouter.put('/food', createOnePeiceOfFood);
foodRouter.post('/food/:id', updateOnePeiceOfFood);
foodRouter.delete('/food/:id', deleteOnePeiceofFood);

function getAllFood(req,res){
  let allfood = food.read();
  res.status(200).json(allfood)
}
function getOnePeiceOfFood(req,res){
  const id = parseInt(req.params.id);
  let onepeiceOfFood = food.read(id);
  res.status(200).json(onepeiceOfFood)
}
function createOnePeiceOfFood(req,res){
  let content = req.body
  let createdFood = food.create(content);
  res.status(201).json(createdFood)
}
function updateOnePeiceOfFood(req,res){
  const id = parseInt(req.params.id);
  let content = req.body
  let updatedFood = food.update(id,content);
  res.status(200).json(updatedFood)
}
function deleteOnePeiceofFood(req,res){
  const id = parseInt(req.params.id);
  let deltedFood = food.delete(id);
  res.status(201).json(deltedFood)
}

module.exports = foodRouter;