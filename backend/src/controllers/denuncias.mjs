/** @typedef {import("express").RequestHandler} RequestHandler */

/** @type {RequestHandler} */

import { Denuncia } from "../db.mjs"

 async function novaDenuncia(peticion, resposta) {
    // TODO: Crea unha nova denuncia co obxeto en peticion.body

    try {
    
        const {provinceOfComplaint,adegaCode,issue,complaintDetails,zone,allotment,municipality,otherLegislation,institution,institutionProvince,isOtherLegislationChecked,extraDocumentation} = peticion.body
    
        const nuevaDenuncia = await Denuncia.create({
            provinceOfComplaint,
            adegaCode,
            issue,
            complaintDetails,
            zone,
            allotment,
            municipality,
            otherLegislation,
            institution,
            institutionProvince,
            isOtherLegislationChecked,
            extraDocumentation
        });
        resposta.json(nuevaDenuncia)
    
      } catch (error) {
        console.error(error);
        console.status(500);
        console.send("Error al introducir los datos")
      }
}

export {
    novaDenuncia
}