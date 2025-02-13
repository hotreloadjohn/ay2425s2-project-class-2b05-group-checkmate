const express = require('express');
// const { getAllPersons } = require('../models/Person.model');
const router = express.Router();

const chartsController = require('../controllers/chartsController');


router.post('/:id/view', chartsController.incrementCommentViewController);

router.get('/:symbol', chartsController.getStockChartData);



module.exports = router;
