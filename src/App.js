import {useState} from 'react'
import './App.css'

function App() {
  const [buttonColor, setButtonColor] = useState('red')
  const [disabled, setDisabled] = useState(false)
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'
  // disabled === true      ? setButtonColor('gray') :

  const handleClick = event => {
    event.preventDefault()
    setButtonColor(newButtonColor)
  }

  const handleChange = event => {
    setDisabled(event.target.checked)
    // setButtonColor('gray')
  }

  return (
    <div className="App">
      <h2>Testing React using Jest and React Testing Library</h2>
      <div>
        <button
          disabled={disabled}
          onClick={handleClick}
          style={{backgroundColor: disabled ? 'gray' : buttonColor}}
        >
          Change to {newButtonColor}
        </button>
      </div>
      <div>
        <input
          onChange={handleChange}
          type="checkbox"
          id="toggle"
          name="toggle"
          defaultChecked={disabled}
          aria-checked={disabled}
        ></input>
        <label htmlFor="toggle">Toggle</label>
      </div>
    </div>
  )
}

export default App
