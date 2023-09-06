import React from 'react'

function SearchResultsByCity({ ticketmasterCityData }) {
    console.log(ticketmasterCityData)
    return (
        <div><h1>{ticketmasterCityData._embedded.events[0].name}</h1></div>
    )
}

export default SearchResultsByCity