/** @typedef {import("express").RequestHandler} RequestHandler */

import { LeyDeMontes } from "../db.mjs";

/** @type {RequestHandler} */
async function todosOsArtigosLeiDeMontes(peticion, resposta) {
    try {
        const artigosLeiDeMontes  = await LeyDeMontes.findAll()
        resposta.json(artigosLeiDeMontes)
    } catch (error) {
        console.error(error)
        resposta.sendStatus(500)
    }
}

export{
    todosOsArtigosLeiDeMontes
}