const { type } = require("os");

module.exports=(Sequelize, type)=>{
    return Sequelize.define('frame', {
        id:{
            type: type.INTEGER,
            primaryKey: true, 
            autoIncrement:true,
        },
        title: type.STRING,
        description: type.STRING,
        score: type.INTEGER,
        director:type.STRING
    })
}