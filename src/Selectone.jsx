import React from 'react';
import PropTypes from 'prop-types';

const Selectone = ({ player, removePlayer }) => {
    // Destructure player properties
    const { id, name, role, country,image } = player;
    return (
        <div className='bg-red shadow-md rounded-lg p-6 m-4 flex justify-between items-center gap-3 shadow-gray-400 bg-gray-200 backdrop-blur-lg w-4/5 mx-auto'>
            <div className='flex gap-3 justify-left w-1/2 items-center'>
                <div>
                    <img src={image} alt={name} className='w-30 h-30 rounded-full border-4 border-gray-300' />
                </div>
                <div>
                    <h1 className="text-gray-600 text-sm mb-1">ID: <span className="font-semibold">{id}</span></h1>
                    <h2 className="font-bold text-xl text-gray-800 mb-1">{name}</h2>
                    <p className="text-gray-700 mb-1">
                        <span className="font-bold text-red-600">Role:</span> {role}
                    </p>
                    <p className="text-gray-700">
                        <span className="font-bold text-blue-600">Country:</span> {country}
                    </p>
                </div>
            </div>
            <div>
                <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded shadow transition duration-200" onClick={() => removePlayer(id)}>
                    Delete
                </button>
            </div>
        </div>
    );
};
Selectone.propTypes = {
    player: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    }).isRequired
};
export default Selectone;