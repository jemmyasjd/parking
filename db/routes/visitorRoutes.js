
const express = require('express');

const { createVisitor, getVisitor, deleteOldVisitors } = require('../controllers/Visitor');

const router = express.Router();

router.get('/', getVisitor);
router.post('/', createVisitor);
router.delete('/delete', deleteOldVisitors);

module.exports = router;