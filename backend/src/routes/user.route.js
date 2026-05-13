import { Router } from "express"
import { dataReceived } from "../controllers/user.controller.js"

const router = Router()

router.get("/status", (req, res) => {
    res.status(200).json({
        status: "online"
    })
})

router.post("/data", dataReceived)

export default router;