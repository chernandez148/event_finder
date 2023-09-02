import React from 'react'
import { Link } from 'react-router-dom';


function SearchResultsByCountry({ ticketmasterCountryData, countryQueryRef }) {
    console.log(ticketmasterCountryData)
    return (
        <section className='SearchResultsByCategory'>
            <div className='breadcrumbs'>
                <Link>Home</Link>
                <span>/</span>
                <Link>By Country</Link>
                <span>/</span>
                <Link>{countryQueryRef.current}</Link>
            </div>
        </section>
    )
}

export default SearchResultsByCountry