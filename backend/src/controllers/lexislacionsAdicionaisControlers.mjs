/** @typedef {import("express").RequestHandler} RequestHandler */

/** @type {RequestHandler} */
async function todasAsLexislacionsAdicionais(peticion, resposta) {
    // TODO: Obter lista de todalas lexislacions adicionais e entrgala como JSON
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