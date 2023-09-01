import { useState } from 'react'
import Data from './components/Data/Data'
import Navbar from './components/Navbar/Navbar'
import Filters from './components/Filters/Filters'
import './App.css'

function App() {
  const [geoLocation, setGeoLocation] = useState({})
  const [inputFocus, setInputFocus] = useState({
    city: false,
    date: false,
    search: false,
  });
  console.log(inputFocus)
  console.log(geoLocation)

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
      <Data setGeoLocation={setGeoLocation} />
      <Navbar inputFocus={inputFocus} setInputFocus={setInputFocus} />
      <div
        onClick={handleUnfocused}
        className='content'
      >
        <Filters />
        Mains
      </div>
    </div>
  );
}

export default App;
