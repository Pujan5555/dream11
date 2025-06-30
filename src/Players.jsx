import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Singleplayer from './Singleplayer.jsx';

const Players = ({ selectPlayer }) => {
    const [player, setPlayer] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/info.json');
            const data = await response.json();
            setPlayer(data);
        };
        fetchData();
    }, []);
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 w-4/5 max-sm:w-full mx-auto'>
            {player.map((p) => (
                <Singleplayer key={p.id} player={p} selectPlayer={selectPlayer} />
            ))}
        </div>
    );
};

Players.propTypes = {
    player: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        base_price: PropTypes.number.isRequired,
        age: PropTypes.number.isRequired,
        team: PropTypes.string.isRequired
    })).isRequired
};

export default Players;