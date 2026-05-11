import { Router } from "express"
import { dataReceived } from "../controllers/user.controller.js"

const router = Router()

router.get("/", (req, res) => {
    res.json({
        status: "online"
    })
})

router.post("/data", dataReceived)

export default router;