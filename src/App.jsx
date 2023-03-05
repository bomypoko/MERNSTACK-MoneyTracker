import React from "react"
import './App.css'

const App = () => {
  return (
    <main>
      <h1> $400</h1>
      <form>
        <div className="basic">
          <input type="text" placeholder="+200 TV Sony" />
          <input type="datetime-local" />
        </div>

        <div className="description">
          <input type="text" placeholder="Description" />
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
            <div className="price">$500</div>
            <div className="datetime">2022-12-05 15:24</div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
