import React, { useState, useEffect } from "react"
import "./App.css"
import axios from "axios"

const App = () => {
  const [name, setName] = useState("")
  const [datetime, setDatetime] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [data, setData] = useState("")

  // get data with axios

  // useEffect(() => {
  //   const url = import.meta.env.VITE_REACT_APP_API_URL + "/transactions"
  //   const fetchData = async () => {
  //     const result = await axios.get(url).then(result => setData(result.data))
  //   }

  //   fetchData()
  // }, [])

  // console.log(data)

  // ******----------------------------------------********

  // Get Data with Fetch

  useEffect(() => {
    getTransaction().then(transactions => {
      setData(transactions)
    })
  }, [])

  const getTransaction = async () => {
    const url = import.meta.env.VITE_REACT_APP_API_URL + "/transactions"
    const response = await fetch(url)
    return await response.json()
  }

  const handleSubmit = e => {
    e.preventDefault()
    const url = import.meta.env.VITE_REACT_APP_API_URL + "/transaction"
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        description,
        datetime,
        price,
      }),
    }).then(response => {
      response.json().then(json => {
        setName("")
        setDatetime("")
        setDescription("")
        setPrice("")

        console.log("result", json)
      })
    })
  }

  return (
    <main>
      <h1> $400</h1>
      <form onSubmit={handleSubmit}>
        <div className="basic">
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Item"
          />

          <input
            type="datetime-local"
            value={datetime}
            onChange={e => setDatetime(e.target.value)}
          />
        </div>

        <div className="description">
          <input
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Description"
          />

          <input
            type="number"
            value={price}
            onChange={e => setPrice(e.target.value)}
            placeholder="Amount"
          />
        </div>

        <button type="submit"> Add New Transaction </button>
      </form>

      {data.map(item => (

        <div className="transactions"> 

          <div className="transaction">

            <div className="left">
              <div className="name" key={item.id}>
                {item.name}
              </div>
              <div className="description">{item.description}</div>
            </div>

            <div className="right">
            <div className="price red">{item.price}</div>
            <div className="datetime">{item.datetime}</div>
          </div>

          </div>
        </div>
      ))}

      <div className="transactions">
        {/* <div className="transaction">
          <div className="left">
            <div className="name">Sony</div>
            <div className="description">It was for new Tv </div>
          </div>

          <div className="right">
            <div className="price red">-$500</div>
            <div className="datetime">2022-12-05 15:24</div>
          </div>
        </div> */}

        {/* <div className="transaction">
          <div className="left">
            <div className="name">Computer PC</div>
            <div className="description">It was for new Tv </div>
          </div>

          <div className="right">
            <div className="price green">$400</div>
            <div className="datetime">2022-12-05 15:24</div>
          </div>
        </div> */}

        {/* <div className="transaction">
          <div className="left">
            <div className="name">Iphone</div>
            <div className="description">It was for new Tv </div>
          </div>

          <div className="right">
            <div className="price red">-$1300</div>
            <div className="datetime">2022-12-05 15:24</div>
          </div>
        </div> */}
      </div>
    </main>
  )
}

export default App
