import React from 'react';
import './styles.css';

const countries = [
    { name: 'USA', icon: 'united-states.png' },
    { name: 'Canada', icon: 'canada.png' },
    { name: 'Mexico', icon: 'mexico.png' },
    { name: 'UK', icon: 'united-kingdom.png' },
    { name: 'Japan', icon: 'japan.png' },
    { name: 'South Korea', icon: 'south-korea.png' },
    { name: 'Singapore', icon: 'singapore.png' },
    { name: 'Portugal', icon: 'portugal.png' },
    { name: 'Spain', icon: 'spain.png' },
    { name: 'Australia', icon: 'australia.png' },
];

function FilterByCountry({ setCountryQuery }) {
    const handleCountryClick = (countryName) => {
        setCountryQuery(countryName);
    };

    return (
        <div className='Filter-By-Country'>
            <h4>Browse by Country</h4>
            <ul>
                {countries.map((country) => (
                    <li key={country.name}>
                        <button onClick={() => handleCountryClick(country.name)}>
                            <img src={require(`../../../assets/${country.icon}`)} alt={country.name} />
                            {country.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FilterByCountry;
