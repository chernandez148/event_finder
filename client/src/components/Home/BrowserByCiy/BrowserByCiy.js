import React, { useState } from 'react'
import { GrFormPrevious } from 'react-icons/gr';
import { GrFormNext } from 'react-icons/gr';
import './styles.css'

function BrowserByCity() {
    const [xAxis, setXAxis] = useState(0)

    const cities = [
        { name: "Los Angeles", icon: "los-angeles.png" },
        { name: "Seattle", icon: "seattle.jpg" },
        { name: "Houston", icon: "houston.jpg" },
        { name: "New York", icon: "new-york.png" },
        { name: "Miami", icon: "miami.jpg" },
        { name: "Vancouver", icon: "vancouver.jpg" },
        { name: "Toronto", icon: "toronto.jpg" },
        { name: "Montreal", icon: "montreal.jpg" }
    ]

    const handlePrev = () => {
        if (xAxis === 0) {
            setXAxis(0)
        } else {
            setXAxis(xAxis - 270)
        }
    }

    const handleNext = () => {
        if (xAxis === 810) {
            setXAxis(0)
        } else {
            setXAxis(xAxis + 270)
        }
    }

    return (
        <section className='BrowserByCity'>
            <h4>Popular Destinations</h4>
            <div className='city-wrapper'>
                <button onClick={handlePrev} className='prev'><GrFormPrevious /></button>
                <ul >
                    {cities.map((city) => (
                        <li key={city.name} style={{ position: "relative", right: xAxis }}>
                            <button>
                                <img src={require(`../../../assets/${city.icon}`)} alt={city.name} />
                                {city.name}
                            </button>
                        </li>
                    ))}
                </ul>
                <button onClick={handleNext} className='next'><GrFormNext /></button>
            </div>
        </section>
    );
}

export default BrowserByCity;