import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css'

function SearchResultsByCountry({ ticketmasterCountryData, countryNameRef, removeCountryData }) {
    const countryEventsList = ticketmasterCountryData._embedded.events
    console.log(countryEventsList, countryNameRef)

    return (
        <section className='SearchResultsByCategory'>
            <div className='header'>
                <div className='overlay'></div>
                <div className='breadcrumbs'>
                    <Link to="/" onClick={removeCountryData}>Home</Link>
                    <span>/</span>
                    <Link to="/" onClick={removeCountryData}>By Country</Link>
                    <span>/</span>
                    <Link>{countryNameRef.current}</Link>
                </div>
                <h1>Events in <span className='country-name'>{countryNameRef.current}</span></h1>
            </div>
            <div className='country-wrapper'>
                <div className='country-event-list'>
                    <h3>All events in {countryNameRef.current}</h3>
                    <ul>
                        {countryEventsList.map(info => (
                            <li key={info.id} className='event-card'>
                                <img src={info.images[1].url} alt={info.name} />
                                <div className='event-info'>
                                    <h4>{info.name}</h4>
                                    <h6>{info.dates.start.localDate}</h6>
                                    {info._embedded.venues[0].address && ( // Check if address exists
                                        <h6>
                                            {info._embedded.venues[0].address.line1 ? `${info._embedded.venues[0].address.line1}` : 'TBA'}
                                            {info._embedded.venues[0].address.line2 ? `, ${info._embedded.venues[0].address.line2}` : ''}
                                            {info._embedded.venues[0].city ? `, ${info._embedded.venues[0].city.name}` : ''}
                                        </h6>
                                    )}
                                </div>
                                <a className='ticket-link' href={info.url}>Buy Ticket</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='event-location'>google maps</div>
            </div>
        </section>
    )
}

export default SearchResultsByCountry
