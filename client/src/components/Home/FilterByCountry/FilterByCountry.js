import React from 'react';
import './styles.css';

const countries = [
    { name: 'USA', countryCode: "US", icon: 'united-states.png' },
    { name: 'Canada', countryCode: "CA", icon: 'canada.png' },
    { name: 'Mexico', countryCode: "MX", icon: 'mexico.png' },
    { name: 'UK', countryCode: "UK", icon: 'united-kingdom.png' },
    { name: 'France', countryCode: "FR", icon: 'france.png' },
    { name: 'Germany', countryCode: "DE", icon: 'germany.png' },
    { name: 'Ireland', countryCode: "IE", icon: 'ireland.png' },
    { name: 'Switzerland', countryCode: "CH", icon: 'switzerland.png' },
    { name: 'Netherlands', countryCode: "NL", icon: 'netherlands.png' },
    { name: 'Spain', countryCode: "ES", icon: 'spain.png' },
    { name: 'South Africa', countryCode: "ZA", icon: 'south-africa.png' },
    { name: 'New Zealand', countryCode: "NZ", icon: 'new-zealand.png' },
    { name: 'Australia', countryCode: "AU", icon: 'australia.png' },
];

function FilterByCountry({ countryQueryRef, countryNameRef, handleSubmitByCategory }) {

    const handleCountryClick = (country) => {
        countryQueryRef.current = country.countryCode;
        countryNameRef.current = country.name;
        handleSubmitByCategory()
    };

    return (
        <div className='Filter-By-Country'>
            <h4>Browse by Country</h4>
            <ul>
                {countries.map((country) => (
                    <li key={country.name}>
                        <button onClick={() => handleCountryClick(country)}>
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
