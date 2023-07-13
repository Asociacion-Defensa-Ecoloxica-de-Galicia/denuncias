import express from "express"
import { corsMiddleware } from "./middlewares/cors.mjs"
import { rootController } from "./controllers/rootController.mjs"

const BASE_PATH = "/api/v0.0/"

const app = express()
app.use(corsMiddleware)

app.get(BASE_PATH, rootController)

export {
    app
}