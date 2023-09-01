import { useState } from 'react'
import Data from './components/Data/Data'
import Navbar from './components/Navbar/Navbar'
import './App.css'

function App() {
  const [geoLocation, setGeoLocation] = useState({})
  const [ticketmasterData, setTicketmasterData] = useState({})
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
      <Data geoLocation={geoLocation} setGeoLocation={setGeoLocation} ticketmasterData={ticketmasterData} setTicketmasterData={setTicketmasterData} />
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
