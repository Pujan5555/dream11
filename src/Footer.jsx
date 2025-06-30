import React from 'react';
import logo from '../public/logo.png'; // Adjust the path as necessary

const Footer = () => (
    <div className="w-full">
        {/* Newsletter Section */}
        <div className="w-full py-8 bg-gray-100 text-center">
            <h2 className="text-2xl font-semibold">Subscribe to our Newsletter</h2>
            <form className="inline-block mt-4 w-full max-w-md">
                <div className="flex flex-row max-sm:flex-col max-sm:px-3">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="p-2 w-2/3 min-w-[120px] rounded-l-md border border-gray-300 box-border max-sm:rounded-md max-sm:w-full max-sm:mb-2"
                    />
                    <button
                        type="submit"
                        className="p-2 px-4 border-none rounded-r-md bg-gray-900 text-white cursor-pointer w-1/3 min-w-[60px] max-sm:rounded-md max-sm:w-full"
                    >
                        Subscribe
                    </button>
                </div>
            </form>
        </div>

        {/* Black Footer Section */}
        <div className="w-full bg-black text-white pt-8 pb-4">
            {/* Logo in the middle */}
            <div className="flex justify-center items-center mb-8">
                <img src={logo} alt="Logo" className="h-[60px] max-w-[90vw]" />
            </div>
            {/* Three columns */}
            <div className="flex justify-center items-start gap-16 flex-wrap w-full box-border footer-columns
                                            max-lg:gap-8 max-md:flex-col max-md:items-center max-md:gap-4">
                {/* Contact */}
                <div className="min-w-[180px] text-center flex-1 m-4 max-w-[300px] w-full">
                    <h4 className="text-lg font-semibold mb-2">Contact</h4>
                    <p>Email: info@dream11.com</p>
                    <p>Phone: +1 234 567 890</p>
                </div>
                {/* Social Media Links */}
                <div className="min-w-[180px] text-center flex-1 m-4 max-w-[300px] w-full">
                    <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
                    <div className="flex justify-center gap-2">
                        <a href="https://facebook.com" className="text-white hover:text-blue-400 transition">Facebook</a>
                        <a href="https://twitter.com" className="text-white hover:text-blue-400 transition">Twitter</a>
                        <a href="https://instagram.com" className="text-white hover:text-pink-400 transition">Instagram</a>
                    </div>
                </div>
                {/* Subscribe */}
                <div className="min-w-[180px] text-center flex-1 m-4 max-w-[300px] w-full">
                    <h4 className="text-lg font-semibold mb-2">Subscribe</h4>
                    <form className="flex justify-center items-center max-sm:flex-col">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="p-2 w-[70%] min-w-[80px] rounded-l-md border border-gray-300 box-border max-sm:rounded-md max-sm:w-full max-sm:mb-2"
                        />
                        <button
                            type="submit"
                            className="p-2 px-3 border-none rounded-r-md bg-white text-black cursor-pointer w-[30%] min-w-[40px] max-sm:rounded-md max-sm:w-full"
                        >
                            Go
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

export default Footer;