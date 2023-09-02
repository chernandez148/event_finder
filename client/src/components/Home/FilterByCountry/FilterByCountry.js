import React from 'react';
import './styles.css';

const countries = [
    { name: 'USA', countryCode: "US", icon: 'united-states.png' },
    { name: 'Canada', countryCode: "CA", icon: 'canada.png' },
    { name: 'Mexico', countryCode: "MX", icon: 'mexico.png' },
    { name: 'UK', countryCode: "UK", icon: 'united-kingdom.png' },
    { name: 'France', countryCode: "FR", icon: 'france.png' },
    { name: 'Germany', countryCode: "DE", icon: 'germany.png' },
    { name: 'Japan', countryCode: "JP", icon: 'japan.png' },
    { name: 'South Korea', countryCode: "KR", icon: 'south-korea.png' },
    { name: 'Singapore', countryCode: "SG", icon: 'singapore.png' },
    { name: 'Portugal', countryCode: "PT", icon: 'portugal.png' },
    { name: 'Spain', countryCode: "ES", icon: 'spain.png' },
    { name: 'South Africa', countryCode: "ZA", icon: 'south-africa.png' },
    { name: 'Australia', countryCode: "AU", icon: 'australia.png' },
];

function FilterByCountry({ setCountryQuery, handleSubmitByCategory }) {
    const handleCountryClick = (countryName) => {
        setCountryQuery(countryName);
        handleSubmitByCategory()
    };

    return (
        <div className='Filter-By-Country'>
            <h4>Browse by Country</h4>
            <ul>
                {countries.map((country) => (
                    <li key={country.name}>
                        <button onClick={() => handleCountryClick(country.countryCode)}>
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
