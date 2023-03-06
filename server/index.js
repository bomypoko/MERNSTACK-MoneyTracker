const express = require("express")

const app = express()
const PORT = process.env.PORT || 4040

app.get("/", (req, res) => {
  res.json("hello bom")
})

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
