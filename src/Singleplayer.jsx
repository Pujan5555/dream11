import React from 'react';
import PropTypes from 'prop-types';

const Singleplayer = ({ player, selectPlayer }) => {
    const { id, name, role, country, base_price, age,  image } = player;
    return (
        <div className='bg-red shadow-md rounded-lg p-6 m-4 flex justify-between items-center gap-3 shadow-gray-400 bg-gray-200 backdrop-blur-lg'>
            <div className='flex flex-col gap-3 justify-between w-1/2'>
                <h3 className='text-lg font-bold p-2'>Player ID: {id}</h3>
                <h2 className='hover:text-white hover:bg-blue-500 rounded-lg p-2 cursor-pointer transition duration-200 hover:font-bold'>{name}</h2>
                <p className='hover:text-white hover:bg-blue-500 rounded-lg p-2 cursor-pointer transition duration-200 hover:font-bold'>Role: {role}</p>
                <p className='hover:text-white hover:bg-blue-500 rounded-lg p-2 cursor-pointer transition duration-200 hover:font-bold'>Country: {country}</p>
                <p className='hover:text-white hover:bg-blue-500 rounded-lg p-2 cursor-pointer transition duration-200 hover:font-bold'>Base Price: {base_price}</p>
                <p className='hover:text-white hover:bg-blue-500 rounded-lg p-2 cursor-pointer transition duration-200 hover:font-bold'>Age: {age}</p>
                <button className='bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition duration-200' onClick={() => {selectPlayer(player)}}>Select to buy</button>
            </div>
            <img src={image} alt={name} className='w-40 h-40 rounded-full' />
        </div>
    );
};

Singleplayer.propTypes = {
    player: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        base_price: PropTypes.number.isRequired,
        age: PropTypes.number.isRequired,
        team: PropTypes.string.isRequired
    }).isRequired,
    selectPlayer: PropTypes.func.isRequired
};

export default Singleplayer;