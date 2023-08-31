import { useEffect } from 'react'

function Data({ setGeoLocation }) {

    const fetchGeoLocation = async () => {
        const url = 'https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '341721dfc3msh52cf0a669d33f1bp195e5bjsn6ada1036ef4e',
                'X-RapidAPI-Host': 'ip-geolocation-ipwhois-io.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            setGeoLocation(result);
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