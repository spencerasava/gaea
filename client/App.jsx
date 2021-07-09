import React, {useState} from 'react';
import Home from './components/Home'

const App = () => {
  let [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    if (darkMode) {
      setDarkMode(false)
    } else {
      setDarkMode(true)
    }
  }

  return (
    <div className={darkMode ? "app-container dark" : "app-container"}>
      <div>γεια gaea</div>
      <div>&lt;hello gaea&gt;</div>
      {darkMode
        ? <button className="dark-mode-button" type="button" onClick={toggleDarkMode}>light</button>
        : <button className="dark-mode-button" type="button" onClick={toggleDarkMode}>dark</button>
      }

      <Home darkMode={darkMode}/>
    </div>
  )
}

export default App;