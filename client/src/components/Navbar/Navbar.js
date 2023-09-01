import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import owl from '../../assets/owl.png';
import hoot from '../../assets/hoot-hoot.png'
import './styles.css';

function Navbar({ inputFocus, setInputFocus, conditionalDisplay }) {

    const handleCityFocus = () => {
        setInputFocus((prevFocus) => ({
            ...prevFocus,
            city: true,
            date: false,
            search: false
        }));
    };

    const handleDateFocus = () => {
        setInputFocus((prevFocus) => ({
            ...prevFocus,
            date: true,
            city: false,
            search: false
        }));
    };

    const handleSearchFocus = () => {
        setInputFocus((prevFocus) => ({
            ...prevFocus,
            date: false,
            city: false,
            search: true
        }));
    };

    return (
        <section className='Navbar'>
            <nav>
                <div className='image-logo'>
                    <img src={hoot} alt='Hoot' className={`hoot ${conditionalDisplay ? "opacity-1" : "opacity-0"}`} />
                    <img src={owl} width='75px' alt='Owl Logo' />
                    <h2>Event Finder</h2>
                </div>
                <form className={inputFocus.city || inputFocus.date || inputFocus.search ? "unfocused" : ""}>
                    <input
                        className={`city-input ${inputFocus.city ? 'focused' : ''} ${inputFocus.city || inputFocus.date || inputFocus.search ? "ps-1" : ""}`}
                        type='text'
                        placeholder='Search City...'
                        onClick={handleCityFocus}
                    />
                    <input
                        className={inputFocus.date ? 'date-input focused' : 'date-input'}
                        type='text'
                        placeholder='Pick Your Date...'
                        onClick={handleDateFocus}
                    />
                    <input
                        className={inputFocus.search ? 'search-input focused' : 'search-input'}
                        type='text'
                        placeholder='Search for Artists, Venues, and Events'
                        onClick={handleSearchFocus}
                    />
                    <button
                        className={
                            inputFocus.city || inputFocus.date || inputFocus.search
                                ? 'submit-btn focused-btn'
                                : 'submit-btn'
                        }
                    >
                        {inputFocus.city || inputFocus.date || inputFocus.search ? (
                            <>
                                <FiSearch className='search-icon' />
                                Search
                            </>
                        ) : (
                            <FiSearch />
                        )}
                    </button>

                </form>
                <button className='user-btn'>
                    <AiOutlineMenu className='hamburger' size={18} />{' '}
                    <FaUserCircle size={24} />
                </button>
            </nav>
        </section>
    );
}

export default Navbar;
