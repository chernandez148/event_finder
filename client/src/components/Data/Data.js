import { useEffect } from 'react'

function Data({ setGeoLocation, geoLocation, ticketmasterData, setTicketmasterData, setIsLoading, isLoading }) {
    let isThrottled = false;

    const fetchGeoLocation = () => {
        const url = 'https://ip-geo-location4.p.rapidapi.com/';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c341580395mshf9a149316130441p1f1673jsn4a07a8ab5115',
                'X-RapidAPI-Host': 'ip-geo-location4.p.rapidapi.com'
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

    const fetchTicketmasterData = async () => {
        setIsLoading(true)
        if (geoLocation) {

            const url = `https://app.ticketmaster.com/discovery/v2/events?apikey=QyLs9ifUcxSzP4ukMvAbhU0YX0GLJOgY&countryCode=US&city=${geoLocation}`
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
                    setIsLoading(false)
                })
                .catch(error => console.error('Fetch error:', error));
        }
    }

    useEffect(() => {
        if (!isThrottled) {
            isThrottled = true;
            fetchGeoLocation();

            setTimeout(() => {
                isThrottled = false;
            }, 1000);
        }
    }, [])

    useEffect(() => {
        fetchTicketmasterData()

    }, [geoLocation])


    return (
        null
    )
}

export default Data