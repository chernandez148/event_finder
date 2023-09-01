import { useState } from 'react'
import Data from './components/Data/Data'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Filters from './components/Filters/Filters';

function App() {
  const [geoLocation, setGeoLocation] = useState({});
  const [ticketmasterData, setTicketmasterData] = useState({});
  const [inputFocus, setInputFocus] = useState({
    city: false,
    date: false,
    search: false,
  });

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
      <Filters />
        {ticketmasterData && ticketmasterData._embedded && ticketmasterData._embedded.events.length > 0 ? (
          <h1>{ticketmasterData._embedded.events[0].name}</h1>
        ) : (
          <h1>No events available</h1>
        )}
      </div>
    </div>
  );
}

export default App;
