'use strict';

const express = require('express');

const Places = require('../models/places.js');
const { delete } = require('./snacks.js');
const placeForThings = new Places();

const router = express.Router();

router.get('/places', getPlaces);
router.get('/places/:id', getPlacesId);
router.get('/places', createPlaces);
router.get('/places/:id', updatePlaces);
router.get('/places/:id', deletePlaces);

function getPlaces(req, res){
  let getallPlaces = placeForThings.read();
  res.status(200).json(getallPlaces);
}
function getPlacesId(req, res){
  const id = parseInt(req.params.id);
  let theonePlace = placeForThings.read(id)
  res.status(200).json(theonePlace);
}
function createPlaces(req, res){
  let content = req.body;
  let createPlaces = placeForThings.create(content);
  res.status(201).json(createPlaces);
}
function updatePlaces(req, res){
  if(id){
    delete this.db.find(record => record.id === id);
    this.db.find(record => record.id === id) = {
      id: this.id,
      record: obj
    }
    return obj;
  }
  // const id = parseInt(req.params.id);
  // let modifyOne = placeForThings.update(id);
  // res.status(200).json(modifyOne);
}
function deletePlaces(req, res){
  const id = parent(req.params.id);
  let deleteOne = placeForThings.update(id);
  res.status(200).json(deleteOne)
}

module.exports = router;