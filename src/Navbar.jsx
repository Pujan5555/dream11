import PropTypes from 'prop-types';
import { useState } from 'react';
import logo from '../public/logo.png'; // Adjust the path as necessary

const Navbar = ({ coins }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="flex items-center justify-between bg-gray-100 text-gray-800 py-3 top-0 sticky z-10 backdrop-blur-lg shadow-md px-4 md:px-12 opacity-80">
            {/* Logo on the left */}
            <img src={logo} alt="cricket" className="h-10 w-auto" />

            {/* Hamburger toggle button (mobile only) */}
            <button
                className="md:hidden ml-auto"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    />
                </svg>
            </button>

            {/* Menu */}
            <div className={`
                flex-col md:flex-row gap-3 md:gap-7 w-full md:w-auto
                ${menuOpen ? 'flex absolute top-16 right-4 bg-gray-100 rounded shadow-md p-4 z-20' : 'hidden'}
                md:flex md:static md:bg-transparent md:shadow-none md:p-0 md:items-center md:justify-end
            `}>
                <button className="font-bold px-4 py-2 rounded hover:bg-gray-200 transition">Home</button>
                <button className="font-bold px-4 py-2 rounded hover:bg-gray-200 transition">About</button>
                <button className="font-bold px-4 py-2 rounded hover:bg-gray-200 transition">Store</button>
                <button className="font-bold px-4 py-2 rounded hover:bg-gray-200 transition">Contact</button>
                <button className="font-bold px-4 py-2 rounded bg-yellow-200 text-yellow-800 cursor-default" disabled>
                    Available coins: {coins}
                </button>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    coins: PropTypes.number.isRequired,
};

export default Navbar;