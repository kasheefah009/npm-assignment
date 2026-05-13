export const dataReceived = (req, res) => {
    const { name } = req.body

    res.status(201).json({
        message: `received data from ${name}`
    })
}