import React from 'react';
import Bagimg from '/Users/susidharan/GUVI WEB development/Fullstack/E-commersApp/ecommers-frontend/src/assets/Shopping-Bag-PNG-Image-4229042207_processed.png';

const Home = () => {
    return (
        <div className="flex items-center justify-center mt-8 mb-10">
            <div className="p-8 rounded-lg shadow-lg max-w-7xl w-full flex flex-col sm:flex-row bg-red-100">
                <div className="flex-1 sm:order-1 flex flex-col items-center sm:items-start text-center sm:text-left">
                    <h2 className="text-3xl font-bold text-green-900 sm:text-4xl"> 
                        Grab Up to 50% Off On<br />
                        <span className="mt-2 block">Selected Product</span>
                    </h2>
                    <button className="px-4 py-2 text-white bg-green-800 hover:bg-green-900 mt-5 rounded-full">
                        Buy Now
                    </button>
                </div>
                <div className="flex-shrink-0 sm:order-2 mt-4 sm:mt-0 flex justify-center">
                    <img
                        src={Bagimg}
                        alt="Shopping Bag"
                        className="w-48 h-48 object-cover" 
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
