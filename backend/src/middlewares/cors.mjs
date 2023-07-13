import cors from "cors"

const corsMiddleware = cors({
    origin: process.env.CORS_ORIGIN ?? "*"
})

export {
    corsMiddleware
}