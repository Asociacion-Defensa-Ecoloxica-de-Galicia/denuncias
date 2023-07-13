/** @typedef {import("express").RequestHandler} RequestHandler */

/** @type {RequestHandler} */
function rootController (_ , response) {
    response.send("Backend working...")
    console.log("GET root endpoint.")
}

export {
    rootController
}
