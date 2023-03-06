const express = require("express")

const app = express()
const PORT = process.env.PORT || 4040

// Test Connect Server 

app.get("/", (req, res) => {
  res.json("hello bom")
})
// End Test Connect Server 

// Connect the with the client 

app.post('/client/transaction' , ( req,res ) => {
  res.json(req.body)
})

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
