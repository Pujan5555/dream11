import React from 'react';
import PropTypes from 'prop-types';

const Banner = ({ claimTokens }) => {
    return (
        <div className=" relative bg-[url('../public/bg-shadow.png')] bg-cover bg-center flex flex-col items-center justify-between gap-8 text-white text-center w-4/5 mx-auto p-10 rounded-2xl my-3">
            <div className='absolute inset-0 bg-black opacity-100 -z-20 rounded-2xl'></div>
            <img src="../public/banner-main.png" alt="Banner" />
            <h1 className='text-4xl font-bold'>Assemble Your Dream 11 team</h1>
            <p className='text-lg'>Join the ultimate fantasy cricket league and showcase your skills!</p>
            <button className='bg-blue-400 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-700 transition duration-300' onClick={claimTokens}>Claim free tokens</button>
        </div>
    );
};

Banner.propTypes = {
    claimTokens: PropTypes.func.isRequired,
};

export default Banner;