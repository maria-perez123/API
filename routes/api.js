const router=require('express').Router();

const apitableRouter=require('./routeapi/table');

router.use('/table', apitableRouter)

module.exports=router;

