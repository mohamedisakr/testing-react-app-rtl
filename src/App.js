import './App.css'

function App() {
  const handleClick = event => {
    event.preventDefault()
    event.target.style = "backgroundColor: 'green'"
  }

  return (
    <div className="App">
      <h2>Testing React using Jest and React Testing Library</h2>
      <button onClick={handleClick} style={{backgroundColor: 'red'}}>
        Change to blue
      </button>
    </div>
  )
}

export default App
