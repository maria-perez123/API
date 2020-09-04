const router= require('express').Router();

const {Frame}=require('../../db');

router.get('/', async(req, res)=>{
    const table=await Frame.findAll();
    res.json(table);
})

router.post('/', async(req, res)=>{
    const table=await Frame.create(req.body);
    res.json(table);
})

router.put('/:tableId', async(req, res)=>{
    await Frame.update(req.body, {
        where:{id:req.params.tableId}
    });
    res.json({succes: 'se ha modificado'})
})

router.delete('/:tableId', async(req, res)=>{
    await Frame.destroy({
        where:{id:req.params.tableId}
    })
    res.json({succes:'se ha borrado la pelicula'});
})

module.exports=router;