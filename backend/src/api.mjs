import express from "express"
import { corsMiddleware } from "./middlewares/cors.mjs"

const app = express()
app.use(corsMiddleware)

export {
    app
}