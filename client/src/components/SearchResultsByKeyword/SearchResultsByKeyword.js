import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css'

function SearchResultsByKeyword({ ticketmasterKeywordData, keyword, setKeyword }) {
    const keywordEventsList = ticketmasterKeywordData._embedded.events
    console.log(keywordEventsList)

    return (
        <section className='SearchResultsByCategory'>
            <div className='header'>
                <div className='breadcrumbs'>
                    <Link to="/" onClick={()=>setKeyword('')}>Home</Link>
                    <span>/</span>
                    <Link to="/" onClick={()=>setKeyword('')}>By Keyword</Link>
                    <span>/</span>
                    <Link>{keyword}</Link>
                </div>
                <h1>Events in <span className='keyword'>{keyword}</span></h1>
            </div>
            <div className='country-wrapper'>
                <div className='country-event-list'>
                    <h3>All events that includes '{keyword}'</h3>
                    <ul>
                        {keywordEventsList.map(info => (
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

export default SearchResultsByKeyword