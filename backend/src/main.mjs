import { app } from "./api.mjs"
import { URL } from "./config.mjs";
import "./controllers/root.mjs"

app.listen(process.env.PORT, ()=>{
    console.log("Backend running at:", URL);
})