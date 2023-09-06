import React from 'react'
import { useNavigate } from 'react-router-dom';
import Filter from './Filters/FIlter'
import FilterByCountry from './FilterByCountry/FilterByCountry'
import BrowserByCiy from './BrowserByCiy/BrowserByCiy';

function Home({
    setIsLoading,
    setTicketmasterCityData,
    setiTcketmasterCountryData,
    countryQueryRef,
    countryNameRef,
    cityNameRef,
    setTicketmasterKeywordData,
    setKeyword
}) {
    const navigate = useNavigate()

    const handleSubmitByCountry = () => {
        setIsLoading(true)

        if (countryQueryRef.current) {

            const url = `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${countryQueryRef.current}&apikey=QyLs9ifUcxSzP4ukMvAbhU0YX0GLJOgY`;
            const options = {
                method: "GET"
            };

            fetch(url, options)
                .then(resp => {
                    if (!resp.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return resp.json()
                })
                .then(data => {
                    setiTcketmasterCountryData(data)
                    setIsLoading(false)
                    navigate(`/search_results_by_country/${countryQueryRef.current}`)
                })
                .catch(error => console.error('Fetch error:', error));
        }

    }

    const handleSubmitByCity = () => {
        setIsLoading(true)

        if (cityNameRef.current) {

            const url = `https://app.ticketmaster.com/discovery/v2/events.json?city=${cityNameRef.current}&apikey=QyLs9ifUcxSzP4ukMvAbhU0YX0GLJOgY`;
            const options = {
                method: "GET"
            };

            fetch(url, options)
                .then(resp => {
                    if (!resp.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return resp.json()
                })
                .then(data => {
                    setTicketmasterCityData(data)
                    setIsLoading(false)
                    navigate(`/search_results_by_city/${cityNameRef.current}`)
                })
                .catch(error => console.error('Fetch error:', error));
        }

    }

    return (
        <section className='Home'>
            <Filter setTicketmasterKeywordData={setTicketmasterKeywordData} setKeyword={setKeyword} />
            <FilterByCountry countryQueryRef={countryQueryRef} countryNameRef={countryNameRef} handleSubmitByCountry={handleSubmitByCountry} />
            <BrowserByCiy cityNameRef={cityNameRef} handleSubmitByCity={handleSubmitByCity} />
        </section>
    )
}

export default Home