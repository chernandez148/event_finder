import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css'


function SearchResultsByCountry({ ticketmasterCountryData, countryNameRef, removeCountryData }) {
    console.log(ticketmasterCountryData)
    return (
        <section className='SearchResultsByCategory'>
            <div className='header'>
                <div className='breadcrumbs'>
                    <Link to="/" onClick={removeCountryData}>Home</Link>
                    <span>/</span>
                    <Link to="/" onClick={removeCountryData}>By Country</Link>
                    <span>/</span>
                    <Link>{countryNameRef.current}</Link>
                </div>
                <h1>Events in <span className='country-name'>{countryNameRef.current}</span></h1>
            </div>

        </section>
    )
}

export default SearchResultsByCountry