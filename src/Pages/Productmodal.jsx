import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Productmodal = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://ecommers-backend-0h9u.onrender.com/api/product/getproductbyid/${id}`);
                setProduct(response.data.result);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) return <h1>Loading...</h1>;

    return (
        <>
            <Header />
            <div className="flex items-start justify-center mt-8 mb-10">
                <div className="p-8 rounded-lg shadow-lg max-w-7xl w-full flex flex-col sm:flex-row bg-gray-100">
                    <div className="flex-1 mb-5 sm:mb-0 flex justify-center">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-48 h-48 object-cover"
                        />
                    </div>
                    <div className="flex-shrink-0 p-6">
                        <h2 className="text-xl font-bold">{product.title}</h2>
                        <p className="text-gray-700 max-w-xs mt-2">{product.description}</p>
                        <p className="text-gray-700 mt-2">Quantity: {product.quantity}</p>
                        <p className="text-lg font-semibold mt-2">₹{product.price}</p>
                        <div className="flex mt-5">
                            <button className="px-4 py-2 text-white bg-green-800 hover:bg-green-900 rounded-full">
                                Buy Now
                            </button>
                            <button className="px-4 py-2 text-white bg-green-800 hover:bg-green-900 ml-5 rounded-full">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <button className="px-4 py-2 ml-20 text-white bg-red-600 hover:bg-red-700 mt-5 rounded-full flex" onClick={() => navigate('/')}>
                <MdKeyboardArrowLeft size={25} /> <span className="ml-2">Back</span>
            </button>
        </>
    );
};

export default Productmodal;
