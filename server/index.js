const express = require("express")
const cors = require("cors")
const Transaction = require("./models/Transaction.js")
const { default: mongoose } = require("mongoose")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 4040

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.json("hello bom")
})

// This Mongo Connect is a Asynchronous Function so I need to use ( async/await or .then)
app.post("/client/transaction", async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL)
  // Received Request from the Client side )
  const { name, description, datetime, price } = req.body
  // After got info , now we will put in the mongodb (Document)
  const transaction = await Transaction.create({
    name,
    description,
    datetime,
    price,
  })

  res.json(transaction)
})

app.get("/client/transactions", async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL)
  const transactions = await Transaction.find()
  res.json(transactions)
})

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
