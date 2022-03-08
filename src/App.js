import {useState} from 'react'
import './App.css'

function App() {
  const [buttonColor, setButtonColor] = useState('red')
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'

  const handleClick = event => {
    event.preventDefault()
    setButtonColor(newButtonColor)
  }

  return (
    <div className="App">
      <h2>Testing React using Jest and React Testing Library</h2>
      <button onClick={handleClick} style={{backgroundColor: buttonColor}}>
        Change to {newButtonColor}
      </button>
    </div>
  )
}

export default App
