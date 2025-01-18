
const express = require('express');

const { createVisitor, getVisitor, deleteOldVisitors } = require('../controllers/Visitor');

const router = express.Router();

router.get('/', getVisitor);
router.post('/', createVisitor);
router.get('/delete', deleteOldVisitors);

module.exports = router;