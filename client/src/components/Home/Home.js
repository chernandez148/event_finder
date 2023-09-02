import React, { useState } from 'react'
import Filter from './Filter/FIlter'
import FilterByCountry from './FilterByCountry/FilterByCountry'

function Home({ setIsLoading }) {
    const [countryQuery, setCountryQuery] = useState("")
    const [ticketmasterCountryData, setiTcketmasterCountryData] = useState({})
    console.log(countryQuery)

    const handleSubmitByCategory = () => {
        setIsLoading(true)

        if (countryQuery) {

            const url = `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${countryQuery}&apikey=QyLs9ifUcxSzP4ukMvAbhU0YX0GLJOgY`;
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
                    setiTcketmasterCountryData(data, countryQuery)
                    setIsLoading(false)
                })
                .catch(error => console.error('Fetch error:', error));
        }

    }

    //No Japan, south korea, singapore, portugal, 

    return (
        <section className='Home'>
            <Filter />
            <FilterByCountry setCountryQuery={setCountryQuery} handleSubmitByCategory={handleSubmitByCategory} />
            {ticketmasterCountryData ? <h4>{ticketmasterCountryData._embedded?.events[0].name}</h4> : null}
        </section>
    )
}

export default Home