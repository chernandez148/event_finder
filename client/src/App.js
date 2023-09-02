import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import Data from './components/Data/Data'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import SearchResultsByCategory from './components/SearchResultsByCategory/SearchResultsByCategory';
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [geoLocation, setGeoLocation] = useState({});
  const [ticketmasterData, setTicketmasterData] = useState({});
  const [ticketmasterCountryData, setiTcketmasterCountryData] = useState({})
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
    <Router>
      <div className="App">
        {isLoading ? (
          <LoadingBar
            progress={progress}
            height={5} // Customize the height of the loading bar
            color='#5ad8a4' // Customize the loading bar color
          />
        ) : null}
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
          <Routes>
            <Route path="/" element={<Home setIsLoading={setIsLoading} setiTcketmasterCountryData={setiTcketmasterCountryData} />} />
            <Route path='/search_results_by_category' element={<SearchResultsByCategory />} />
          </Routes>
        </div>
        <h1 className={`loading ${!conditionalDisplay ? "opacity-1" : "opacity-0"}`}>
          Loading...
        </h1>
      </div>
    </Router>

  );

}

export default App;