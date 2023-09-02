import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import Filters from './Filters/FIlter'
import FilterByCountry from './FilterByCountry/FilterByCountry'

function Home({ setIsLoading, setiTcketmasterCountryData }) {
    const countryQueryRef = useRef("")
    const navigate = useNavigate()

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
                    setiTcketmasterCountryData(data)
                    setIsLoading(false)
                    navigate('/search_results_by_category')
                })
                .catch(error => console.error('Fetch error:', error));
        }

    }

    return (
        <section className='Home'>
            <Filters />
            <FilterByCountry countryQueryRef={countryQueryRef} handleSubmitByCategory={handleSubmitByCategory} />
        </section>
    )
}

export default Home