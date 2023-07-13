 
 import { Sequelize, DataTypes } from "sequelize";

 const db = new Sequelize({
     dialect: "sqlite",
     storage: "./database.sqlite"
 }) ;
 
 
 const Denuncia = db.define("Denuncia", {
    provinceOfComplaint: {
        type: DataTypes.STRING,
    },
    adegaCode: {
        type: DataTypes.STRING,
        unique: true
    },
    issue: {
        type: DataTypes.STRING
    },
    complaintDetails: {
        type: DataTypes.STRING,
    },
    zone: {
        type: DataTypes.STRING
    },
    allotment: {
        type: DataTypes.STRING
    },
    municipality: {
        type: DataTypes.STRING,
    },
    otherLegislation: {
        type: DataTypes.STRING
    },
    institution: {
        type: DataTypes.STRING
    },
    institutionProvince: {
        type: DataTypes.STRING
    },
    isOtherLegislationChecked: {
        type: DataTypes.BOOLEAN
    },
    extraDocumentation: {
        type: DataTypes.BOOLEAN
    },
});

//ATENCION!!! en las siguientes columnas ¿habra que quitar llaves y poner [] ?
const LeyDeMontes= db.define("LeyDeMontes", {
    descripcion:{
        type: DataTypes.STRING,
    }
});
const OutrasNormativas = db.define("OutrasNormativas", {
    descripcion:{
       type: DataTypes.STRING,
   }
});
//Ahora viene hacer las relaciones entre tablas
Denuncia.belongsToMany(LeyDeMontes, { through: "DenunciaLeyDeMontes", as: "LeyDeMontes"})
LeyDeMontes.belongsToMany(Denuncia, { through: "DenunciaLeyDeMontes", as: "Denuncia"})

Denuncia.belongsToMany(OutrasNormativas, { through: "DenunciaOutrasNormativas", as: "OutrasNormativas"})
OutrasNormativas.belongsToMany(Denuncia, { through: "DenunciaOutrasNormativas", as: "Denuncia"})


export{
    db,
    Denuncia,
    LeyDeMontes,
    OutrasNormativas
}