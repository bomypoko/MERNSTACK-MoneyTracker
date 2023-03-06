const express = require("express")

const cors = require("cors")
const app = express()

const PORT = process.env.PORT || 4040

app.use(cors())

app.get("/", (req, res) => {
  res.json("hello bom")
})


app.post("/client/transaction", (req, res) => {
  res.json(req.body)
})

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
