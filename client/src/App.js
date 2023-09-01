import { useState, useEffect } from 'react'
import LoadingBar from 'react-top-loading-bar';
import Data from './components/Data/Data'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
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

  useEffect(() => {
    isLoading ? setProgress((prevProgress) => prevProgress + 1) : setProgress(100)
  }, [isLoading])

  const conditionalDisplay = ticketmasterData && ticketmasterData._embedded && ticketmasterData._embedded.events.length > 0

  return (
    <div className="App">
      {isLoading ?
        <LoadingBar
          progress={progress}
          height={2} // Customize the height of the loading bar
          color='#5ad8a4' // Customize the loading bar color
        /> : null}
      <Data
        geoLocation={geoLocation}
        setGeoLocation={setGeoLocation}
        ticketmasterData={ticketmasterData}
        setTicketmasterData={setTicketmasterData}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <Navbar
        conditionalDisplay={conditionalDisplay}
        inputFocus={inputFocus}
        setInputFocus={setInputFocus}
      />
      <div
        onClick={handleUnfocused}
        className={`content ${conditionalDisplay ? "opacity-1" : "opacity-0"}`}
      >
        <Home />
      </div>
      <h1 className={`loading ${!conditionalDisplay ? "opacity-1" : "opacity-0"}`}>Loading...</h1>
    </div>
  );
}

export default App;
