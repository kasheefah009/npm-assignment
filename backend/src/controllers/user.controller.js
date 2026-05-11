export const dataReceived = (req, res) => {
    const {name} = req.body

    res.json({
        message: `received data from ${name}`
    })
}