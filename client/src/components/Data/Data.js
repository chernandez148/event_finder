import { useEffect } from 'react'

function Data({ setGeoLocation, geoLocation, ticketmasterData, setTicketmasterData }) {
    let isThrottled = false;

    const fetchGeoLocation = () => {
        const url = 'https://ip-geo-location.p.rapidapi.com/ip/check?format=json';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c341580395mshf9a149316130441p1f1673jsn4a07a8ab5115',
                'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
            }
        };

        fetch(url, options)
            .then(resp => {
                if (!resp.ok) {
                    throw new Error('Network response was not ok');
                }
                return resp.json();
            })
            .then(data => {
                setGeoLocation((data.city.name));
            })
            .catch(error => console.error('Fetch error:', error));
    };

    console.log(geoLocation); // Display the fetched data


    const fetchTicketmasterData = async () => {

        if (typeof geoLocation === 'string') {
            const url = `https://app.ticketmaster.com/discovery/v2/events.json?city=${geoLocation}&radius=50&apikey=QyLs9ifUcxSzP4ukMvAbhU0YX0GLJOgY`
            const options = {
                method: "GET"
            };

            fetch(url, options)
                .then(resp => {
                    if (!resp.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return resp.json()
                })
                .then(data => {
                    setTicketmasterData(data)
                })
                .catch(error => console.error('Fetch error:', error));
        } else {
            return
        }

    }

    console.log(ticketmasterData)

    useEffect(() => {
        if (!isThrottled) {
            isThrottled = true;
            fetchGeoLocation();
            fetchTicketmasterData();

            setTimeout(() => {
                isThrottled = false;
            }, 1000); // Adjust the delay (in milliseconds) as needed
        }
    }, [])

    return (
        null
    )
}

export default Data