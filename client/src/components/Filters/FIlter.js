import './styles.css';
import { PiGuitar } from 'react-icons/pi'
import { MdOutlineFestival } from 'react-icons/md'
import { GiConverseShoe } from 'react-icons/gi'
import { LiaTheaterMasksSolid } from 'react-icons/lia'

const Filter = () => {
    return (
        <section className='filters'>
            <button className='filter-btn'>
                <PiGuitar className='filter-icon' size={24} />Concerts
            </button>
            <button className='filter-btn'>
                <MdOutlineFestival className='filter-icon' size={24} />Festivals
            </button>
            <button className='filter-btn'>
                <GiConverseShoe className='filter-icon' size={24} />Marathons
            </button>
            <button className='filter-btn'>
                <LiaTheaterMasksSolid className='filter-icon' size={24} />Theatre
            </button>
        </section>
    )
}

export default Filter
