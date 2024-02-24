const express=require('express');
const { getTasks, getAllTasks, getAllTasks2, getAllTasks3 } = require('../controllers/task');
const router=express.Router();

router.route('/').get(getTasks);
router.route('/all').get(getAllTasks3)


module.exports=router;