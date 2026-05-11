import express from "express"
import router from "./routes/user.route.js"
import dotenv from "dotenv"

dotenv.config({
    path: "./.env"
})
const app = express()

app.use(express.json())

app.use("/", router)

app.listen(process.env.PORT || 5000, () =>{
    console.log(` Server is running on port: ${process.env.PORT || 5000} `)
})


