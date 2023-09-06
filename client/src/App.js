import { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import Data from './components/Data/Data'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import SearchResultsByCountry from './components/SearchResultsByCountry/SearchResultsByCountry';
import SearchResultsByKeyword from './components/SearchResultsByKeyword/SearchResultsByKeyword';
import SearchResultsByCity from './components/SearchResultsByCity/SearchResultsByCity';
import './App.css'

function App() {
  const countryQueryRef = useRef("")
  const countryNameRef = useRef("")
  const cityNameRef = useRef("")
  const [keyword, setKeyword] = useState("")
  const [ticketmasterKeywordData, setTicketmasterKeywordData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [geoLocation, setGeoLocation] = useState({});
  const [ticketmasterData, setTicketmasterData] = useState({});
  const [ticketmasterCountryData, setiTcketmasterCountryData] = useState({})
  const [ticketmasterCityData, setTicketmasterCityData] = useState({})
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

  const removeCountryData = () => {
    setiTcketmasterCountryData(null)
  }

  const removeCityData = () => {
    setTicketmasterCityData(null)
  }

  useEffect(() => {
    isLoading ? setProgress((prevProgress) => prevProgress + 1) : setProgress(100)
  }, [isLoading])

  const conditionalDisplay = ticketmasterData && ticketmasterData._embedded && ticketmasterData._embedded.events.length > 0

  const conditionalNavDisplay = ticketmasterCountryData && ticketmasterCountryData._embedded && ticketmasterCountryData._embedded.events.length > 0

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
          conditionalNavDisplay={conditionalNavDisplay}
          inputFocus={inputFocus}
          setInputFocus={setInputFocus}
          removeCountryData={removeCountryData}
        />
        <div
          onClick={handleUnfocused}
          className={`content ${conditionalDisplay ? "opacity-1" : "opacity-0"}`}
        >
          <Routes>
            <Route path="/" element={<Home setIsLoading={setIsLoading} setiTcketmasterCountryData={setiTcketmasterCountryData} countryQueryRef={countryQueryRef} countryNameRef={countryNameRef} cityNameRef={cityNameRef} setTicketmasterKeywordData={setTicketmasterKeywordData} setTicketmasterCityData={setTicketmasterCityData} setKeyword={setKeyword} />} />
            <Route path={`/search_results_by_keyword/${keyword}`} element={<SearchResultsByKeyword ticketmasterKeywordData={ticketmasterKeywordData} keyword={keyword} setKeyword={setKeyword} />} />
            <Route path={`/search_results_by_country/${countryQueryRef.current}`} element={<SearchResultsByCountry ticketmasterCountryData={ticketmasterCountryData} countryNameRef={countryNameRef} removeCountryData={removeCountryData} />} />
            <Route path={`/search_results_by_city/${cityNameRef.current}`} element={<SearchResultsByCity ticketmasterCityData={ticketmasterCityData} cityNameRef={cityNameRef} removeCityData={removeCityData} />} />
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