
const express = require('express');

const { createVisitor, getVisitor } = require('../controllers/Visitor');

const router = express.Router();

router.get('/', getVisitor);
router.post('/', createVisitor);

module.exports = router;