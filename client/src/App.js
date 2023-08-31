import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'

function App() {
  const [inputFocus, setInputFocus] = useState({
    city: false,
    date: false,
    search: false,
  });
  console.log(inputFocus)

  const handleUnfocused = () => {
    setInputFocus((prevFocus) => ({
      ...prevFocus,
      city: false,
      date: false,
      search: false
    }));
  }

  return (
    <div className="App">
      <Navbar inputFocus={inputFocus} setInputFocus={setInputFocus} />
      <div
        onClick={handleUnfocused}
        className='content'
      >
        Mains
      </div>
    </div>
  );
}

export default App;
