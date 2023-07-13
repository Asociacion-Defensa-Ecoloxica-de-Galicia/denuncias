import { app } from "./express.mjs"

app.listen(process.env.PORT ?? 8000 , ()=>{
    console.log("Backend running 👍");
})