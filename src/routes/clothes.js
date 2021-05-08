'use strict';

// const Router = require('express');
const express = require('express');

const ClothesModel = require('../models/clothes-model');
const clothes = new ClothesModel;

const clothesRouter = express.Router();
//http://localhost:3000/
// GET http://localhost:3333/clothes?shirt

clothesRouter.get('/clothes', getAllClothes);
clothesRouter.get('/clothes/:id', getOnePeiceOfClothes);
clothesRouter.put('/clothes', createOnePeiceOfClothes);
clothesRouter.post('/clothes/:id', updateOnePeiceOfClothes);
clothesRouter.delete('/clothes/:id', deleteOnePeiceofClothes);

function getAllClothes(req,res){
  let allclothes = clothes.read();
  res.status(200).json(allclothes)
  console.log(getAllClothes)
}
function getOnePeiceOfClothes(req,res){
  const id = parseInt(req.params.id);
  let onepeiceOfClothes = clothes.read(id);
  res.status(200).json(onepeiceOfClothes)
}
function createOnePeiceOfClothes(req,res){
  let content = req.body
  let createdClothes = clothes.create(content);
  res.status(201).json(createdClothes)
}
function updateOnePeiceOfClothes(req,res){
  const id = parseInt(req.params.id);
  let content = req.body
  let updatedClothes = clothes.update(id,content);
  res.status(200).json(updatedClothes)
}
function deleteOnePeiceofClothes(req,res){
  const id = parseInt(req.params.id);
  let deltedClothes = clothes.delete(id);
  res.status(201).json(deltedClothes)
}

module.exports = clothesRouter;