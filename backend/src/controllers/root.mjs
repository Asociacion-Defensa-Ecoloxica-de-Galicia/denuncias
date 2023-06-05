import { app } from "../api.mjs";
import { BASE_PATH } from "../config.mjs";

app.get(BASE_PATH, (_ , response) => {
    response.send("Backend working...")
    console.log("Root GET endpoint requested...")
})
