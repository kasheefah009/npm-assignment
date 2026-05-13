import express from "express"
import router from "./routes/user.route.js"
import dotenv from "dotenv"
import { connectDB } from "./db/index.js"
dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use("/", router)

const start = async () => {
    const uri = process.env.MONGODB_URI
    if (!uri || uri.includes("<db_password>")) {
        console.error("MONGODB_URI is missing or still contains <db_password> placeholder. Update .env and retry.")
        process.exit(1)
    }
    try {
        await connectDB(uri)
        console.log("MongoDB connected")
    } catch (err) {
        console.error("MongoDB connection failed:", err.message)
        process.exit(1)
    }
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
    })
}
start()

