import { useEffect } from 'react'

function Data({ setGeoLocation }) {

    const fetchGeoLocation = async () => {
        const url = 'https://ip-geo-location.p.rapidapi.com/ip/check?format=json';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c341580395mshf9a149316130441p1f1673jsn4a07a8ab5115',
                'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setGeoLocation(result.city.name);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchGeoLocation()
    }, [])


    // const ticketmasterUrl = "https://app.ticketmaster.com/discovery/v2/events.json?"

    return (
        null
    )
}

export default Data