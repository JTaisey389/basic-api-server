'use strict';

const express = require('express');

const Places = require('../models/snacks.js');
const placeForSnacks = new Places();

const router = express.Router();

router.get('/snacks', getSnacks);
router.get('/snacks/:id', getSnacksId);
router.get('/snacks', createSnacks);
router.get('/snacks/:id', updateSnacks);
router.get('/snacks/:id', deleteSnacks);

function getSnacks(req, res){
  let getallSnacks = placeForSnacks.read();
  res.status(200).json(getallSnacks);
}
function getSnacksId(req, res){
  const id = parseInt(req.params.id);
  let theoneSnack = placeForSnacks.read(id)
  res.status(200).json(theoneSnack);
}
function createSnacks(req, res){
  let content = req.body;
  let createSnacks = placeForSnacks.create(content);
  res.status(201).json(createSnacks);
}
function updateSnacks(req, res){
  const id = parseInt(req.params.id);
  let content = req.body;
  let updateSnacks = placeForSnacks.update(id, content);
  res.status(200).json(updateSnacks);
}
function deleteSnacks(req, res){
  const id = parseInt(req.params.id);
  let deleteSnacks = placeForSnacks.delete(id);
  res.status(201).json({deleteSnacks})
}

module.exports = router;