import React, { useState } from 'react'
import Filter from './Filter/FIlter'
import FilterByCountry from './FilterByCountry/FilterByCountry'

function Home() {
    const [countryQuery, setCountryQuery] = useState("")
    console.log(countryQuery)

    return (
        <section className='Home'>
            <Filter />
            <FilterByCountry setCountryQuery={setCountryQuery} />
        </section>
    )
}

export default Home