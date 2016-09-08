'use strict';

const express = require('express');
const router = express.Router();

const climbingStyles = [
  {
    id: 12,
    name: `bouldering`,
    equipment: [`shoes`, `pad`, `chalk`]
  },
  {
    id: 22,
    name: `sport`,
    equipment: [`shoes`, `rope`, `harness`, `quickdraws`]
  },
  {
    id: 4,
    name: `traditional`,
    equipment: [`rack`, `rope`, `shoes`, `huevos`]
  }
]

router.get('/', function(req, res) {
  res.send(climbingStyles);
});

module.exports = router;
