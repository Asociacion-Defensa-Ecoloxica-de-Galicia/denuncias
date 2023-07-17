/** @typedef {import("express").RequestHandler} RequestHandler */

import { OutrasNormativas } from "../db.mjs";

/** @type {RequestHandler} */
async function todasAsLexislacionsAdicionais(peticion, resposta) {
    try {
        const artigosOutrasNormativas = await OutrasNormativas.findAll();
        resposta.json(artigosOutrasNormativas);
    } catch (error) {
        console.error(error);
        console.status(500);
        console.send("Error al obtener las normativas");
    }
}

export {
    todasAsLexislacionsAdicionais
}