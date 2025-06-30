import React from 'react';
import Selectone from './Selectone';

const Selected = ({ selected, removePlayer }) => {
    return (
        <div>
            <h2 className='text-lg font-semibold text-center'>Selected Players: {selected.length}/6</h2>
            <ul>
                {selected.map((player) => (
                    <Selectone key={player.id} player={player} removePlayer={removePlayer} />
                ))}
            </ul>
        </div>
    );
};

export default Selected;