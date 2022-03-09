import {useState} from 'react'
import './App.css'
import {camelToCapitalWithSpaces} from './utils/string'

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed')
  const [disabled, setDisabled] = useState(false)
  // const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'
  const newButtonColor =
    buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed'
  // MediumVioletRed --> MidnightBlue

  const handleClick = event => {
    event.preventDefault()
    setButtonColor(newButtonColor)
  }

  const handleChange = event => {
    setDisabled(event.target.checked)
  }

  return (
    <div className="App">
      <h2>Testing React using Jest and React Testing Library</h2>
      <div>
        <button
          disabled={disabled}
          onClick={handleClick}
          style={{
            backgroundColor: disabled ? 'gray' : buttonColor,
            // : camelToCapitalWithSpaces(buttonColor),
            // : camelToCapitalWithSpaces(newButtonColor),
          }}
        >
          Change to {camelToCapitalWithSpaces(newButtonColor)}
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
