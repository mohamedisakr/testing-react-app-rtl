import {useState} from 'react'
import './App.css'

function App() {
  const [buttonColor, setButtonColor] = useState('red')
  const [toggle, setToggle] = useState(false)
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'

  const handleClick = event => {
    event.preventDefault()
    setButtonColor(newButtonColor)
  }

  const handleChange = event => {
    // event.preventDefault()
    // let isEnabled = toggle
    setToggle(event.target.checked)
    // setToggle(val => !val)
  }

  return (
    <div className="App">
      <h2>Testing React using Jest and React Testing Library</h2>
      <div>
        <button
          disabled={toggle}
          onClick={handleClick}
          style={{backgroundColor: buttonColor}}
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
          defaultChecked={toggle}
          aria-checked={toggle}
        ></input>
        <label htmlFor="toggle">Toggle</label>
      </div>
    </div>
  )
}

export default App
