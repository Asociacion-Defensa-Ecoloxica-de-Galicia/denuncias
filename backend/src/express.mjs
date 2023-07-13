import express from "express"
import { corsMiddleware } from "./middlewares/cors.mjs"
import { rootController } from "./controllers/rootController.mjs"
import { todosOsArtigosLeiDeMontes } from "./controllers/leiDeMontesControlers.mjs"
import { todasAsLexislacionsAdicionais } from "./controllers/lexislacionsAdicionaisControlers.mjs"
import { novaDenuncia } from "./controllers/denuncias.mjs"

const BASE_PATH = "/api/v0.0/"

const app = express()
app.use(corsMiddleware)

/** Endpoint só para tests */
app.get(BASE_PATH, rootController)

/** Obter lista de artigos lei de montes */
app.get(BASE_PATH+"artigos-lei-de-montes", todosOsArtigosLeiDeMontes)

/** Obter lista de outras lexislacións */
app.get(BASE_PATH+"outras-leis", todasAsLexislacionsAdicionais)

/** Nova denuncia */
app.post(BASE_PATH+"denuncia", novaDenuncia)

export {
    app
}