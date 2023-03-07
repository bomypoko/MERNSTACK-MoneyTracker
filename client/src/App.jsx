import React, { useState } from "react"
import "./App.css"

const App = () => {
  const [name, setName] = useState("")
  const [datetime, setDatetime] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = e => {
    e.preventDefault()

    const url = import.meta.env.VITE_REACT_APP_API_URL + "/transaction"
    const price = name.split()[0]
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        price,
        name: name.substring(price.length + 1),
        description,
        datetime,
      }),
    }).then(response => {
      response.json().then(json => {
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
            placeholder="+200 TV Sony"
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
        </div>
        <button type="submit"> Add New Transaction </button>
      </form>

      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Sony Tv</div>
            <div className="description">It was for new Tv </div>
          </div>

          <div className="right">
            <div className="price red">-$500</div>
            <div className="datetime">2022-12-05 15:24</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Computer PC</div>
            <div className="description">It was for new Tv </div>
          </div>

          <div className="right">
            <div className="price green">$400</div>
            <div className="datetime">2022-12-05 15:24</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Iphone</div>
            <div className="description">It was for new Tv </div>
          </div>

          <div className="right">
            <div className="price red">-$1300</div>
            <div className="datetime">2022-12-05 15:24</div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
