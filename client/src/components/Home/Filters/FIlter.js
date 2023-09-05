import './styles.css';
import { PiGuitar } from 'react-icons/pi'
import { MdOutlineFestival, MdOutlineSportsMartialArts, MdVolunteerActivism } from 'react-icons/md'
import { GiConverseShoe, GiForestCamp } from 'react-icons/gi'
import { LiaTheaterMasksSolid } from 'react-icons/lia'


const Filter = ({ setTicketmasterKeywordData, setKeyword }) => {

    const handleKeywordChange = (e) => {
        console.log('e.target.value', e.target.value)
        setKeyword(() => e.target.value)
    }

    return (
        <section className='filters'>
            <button className='filter-btn' value='concerts' onClick={handleKeywordChange}>
                <PiGuitar className='filter-icon' size={24} />Concerts
            </button>
            <button className='filter-btn' value='festivals' onClick={handleKeywordChange}>
                <MdOutlineFestival className='filter-icon' size={24} />Festivals
            </button>
            <button className='filter-btn' value='marathons' onClick={handleKeywordChange}>
                <GiConverseShoe className='filter-icon' size={24} />Marathons
            </button>
            <button className='filter-btn' value='theater' onClick={handleKeywordChange}>
                <LiaTheaterMasksSolid className='filter-icon' size={24} />Theater
            </button>
            <button className='filter-btn' value='sports' onClick={handleKeywordChange}>
                <MdOutlineSportsMartialArts className='filter-icon' size={24} />Sports
            </button>
            <button className='filter-btn' value='valunteer' onClick={handleKeywordChange}>
                <MdVolunteerActivism className='filter-icon' size={24} />Volunteer
            </button>
            <button className='filter-btn' value='outdoor' onClick={handleKeywordChange}>
                <GiForestCamp className='filter-icon' size={24} />Outdoor
            </button>
        </section>
    )
}

export default Filter