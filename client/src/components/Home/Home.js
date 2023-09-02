import React, { useState, useRef } from 'react'
import Filters from './Filters/FIlter'
import FilterByCountry from './FilterByCountry/FilterByCountry'

function Home({ setIsLoading }) {
    const [ticketmasterCountryData, setiTcketmasterCountryData] = useState({})
    const countryQueryRef = useRef("")

    const handleSubmitByCategory = () => {
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
                    setiTcketmasterCountryData(data, countryQueryRef.current)
                    setIsLoading(false)
                })
                .catch(error => console.error('Fetch error:', error));
        }

    }

    //No Japan, south korea, singapore, portugal, 

    return (
        <section className='Home'>
            <Filters />
            <FilterByCountry countryQueryRef={countryQueryRef} handleSubmitByCategory={handleSubmitByCategory} />
            {ticketmasterCountryData ? <h4>{ticketmasterCountryData._embedded?.events[0].name}</h4> : null}
        </section>
    )
}

export default Home