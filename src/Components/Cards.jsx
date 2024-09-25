import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { mycontext } from '../App';

const Cards = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const { category, searchdata } = useContext(mycontext);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/product/getallproduct');
                setProducts(response.data.result);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProducts();
    }, []);
    const displayedProducts = searchdata.length > 0 ? searchdata : products;
    const filteredProducts = category 
        ? displayedProducts.filter(product => product.category === category) 
        : displayedProducts;

    return (
        <div className="mt-10 flex justify-center mx-5 sm:mx-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div 
                            key={product._id} 
                            className="max-w-xs w-full rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 cursor-pointer" 
                            onClick={() => navigate(`/product/${product._id}`)}
                        >
                            <div className="flex justify-center items-center bg-gray-50 h-48">
                                <img 
                                    className="w-full h-full object-contain" 
                                    src={product.image} 
                                    alt={product.title} 
                                />
                            </div>
                            <div className="px-4 py-2">
                                <div className="text-lg mb-2 flex justify-between">
                                    <p className="font-semibold">{product.title}</p>
                                    <p className="font-semibold">₹{product.price}</p>
                                </div>
                                <p className="text-gray-700 text-sm">{product.titledescription}</p>
                            </div>
                            <div className='px-3 py-4'>
                                <button 
                                    className="px-4 py-2 text-black bg-white hover:bg-green-900 hover:text-white outline outline-1 mt-2 rounded-full transition-colors duration-300"
                                    aria-label={`Add ${product.title} to cart`}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No products found</p>
                )}
            </div>
        </div>
    );
};

export default Cards;
