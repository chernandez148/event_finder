import React from 'react'
import './styles.css'

function BrowserByCity({ cityNameRef, handleSubmitByCity }) {

    const cities = [
        { name: "Los Angeles", icon: "los-angeles.png" },
        { name: "Seattle", icon: "seattle.jpg" },
        { name: "Houston", icon: "houston.jpg" },
        { name: "New York", icon: "new-york.png" },
        { name: "Miami", icon: "miami.jpg" },
        { name: "Vancouver", icon: "vancouver.jpg" },
        { name: "Toronto", icon: "toronto.jpg" },
        { name: "Montreal", icon: "montreal.jpg" },
        { name: "Guadalajara", icon: "guadalajara.jpg" },
    ]

    const handleCityQuery = (city) => {
        cityNameRef.current = city.name
        handleSubmitByCity()
    }

    return (
        <section className='BrowserByCity'>
            <h4>Popular Destinations</h4>
            <div className='city-wrapper'>
                <ul >
                    {cities.map((city) => (
                        <li key={city.name} >
                            <button onClick={() => handleCityQuery(city)}>
                                <img src={require(`../../../assets/${city.icon}`)} alt={city.name} />
                                {city.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default BrowserByCity;