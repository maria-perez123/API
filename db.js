const Sequelize=require('sequelize');

const frameModel=require('./models/table');

const sequelize=new Sequelize('6jT571O6Ot','6jT571O6Ot','q3sF8cnJPT', {
    host:'remotemysql.com',
    dialect: 'mysql'
})

const Frame= frameModel(sequelize, Sequelize);

sequelize.sync({force: false})
    .then(()=>{
        console.log('Tabla sincronizada');
    })

module.exports ={
    Frame
}