import express from "express"
import { corsMiddleware } from "./middlewares/cors.mjs"
import { rootController } from "./controllers/rootController.mjs"
import { todosOsArtigosLeiDeMontes } from "./controllers/leiDeMontesControlers.mjs"

const BASE_PATH = "/api/v0.0/"

const app = express()
app.use(corsMiddleware)

/** Endpoint só para tests */
app.get(BASE_PATH, rootController)

/** Endpoint para obter lista de artigos lei de montes */
app.get(BASE_PATH+"artigos-lei-de-montes", todosOsArtigosLeiDeMontes)

export {
    app
}