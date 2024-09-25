import React, { useState, useContext,useEffect } from 'react';
import { FaRegUser } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { mycontext } from '../App';
import axios from 'axios';

const Header = () => {
    const { setCategory,setsearchData } = useContext(mycontext);
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => setMenu(!menu);
    
    const categories = ["All",'gadgets', 'clothes','toy'];
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const [query,setQuery] = useState("");
    const handleChangeSearch = (e)=>{
        setQuery(e.target.value);
    }
    // search Api
    useEffect(() => {
        const fetchsearchProduct = async () => {
            try {
                if (query.length === 0 || query.length > 2) {
                    const res = await axios.get(`http://localhost:4000/api/product/searchproduct?q=${query}`);
                    setsearchData(res.data);
                } 
            } catch (error) {
                console.error("Error fetching search results:", error);
            }
        }
        if (query !== "" ) {
            fetchsearchProduct();
        } 
    }, [query]);

    return (
        <nav>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
                            aria-controls="mobile-menu"
                            aria-expanded={menu}
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            {menu ? (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img
                                className="h-12 w-auto"
                                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ScaUcCnRP_GVnt07WJtY_AHaHa%26pid%3DApi&f=1"
                                alt="Your Company"
                            />
                            <h1 className="text-green-800 text-2xl ml-3">Shopcart</h1>
                        </div>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12 text-green-100">
                        <div className="relative">
                            <button
                                type="button"
                                className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-green-900"
                                aria-expanded={isOpen}
                                onClick={toggleDropdown}
                            >
                                Categories
                                <svg className="h-5 w-5 flex-none text-green-900" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </button>
                            {isOpen && (
                                <div className="absolute mt-2 w-48 rounded-md bg-white shadow-lg z-10">
                                    <ul className="py-1">
                                        {categories.map((category, index) => (
                                            <li key={index}>
                                                <input
                                                    type="radio"
                                                    id={category}
                                                    name="category"
                                                    className="hidden"
                                                    onChange={() => setCategory(category == "All" ? "": category)}
                                                />
                                                <label
                                                    htmlFor={category}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                                >
                                                    {category}
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <a href="#" className="text-sm font-semibold leading-6 text-green-950">Deals</a>
                        <a href="#" className="text-sm font-semibold leading-6 text-green-950">What's New</a>
                        <a href="#" className="text-sm font-semibold leading-6 text-green-950">Delivery</a>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="relative ml-3 flex gap-8 items-center">
                            <div className="relative hidden sm:flex">
                                <input
                                    type="search"
                                    className="relative m-0 block flex-auto rounded border border-solid border-neutral-200 bg-transparent px-3 py-[0.25rem] text-base text-black"
                                    placeholder="Search"
                                    aria-label="Search"
                                    onChange={handleChangeSearch}
                                />
                                <span className="flex items-center whitespace-nowrap px-3 py-[0.25rem] text-surface">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                        />
                                    </svg>
                                </span>
                            </div>
                            <div className="items-center gap-4 flex">
                                <h2 className="items-center text-sm hidden sm:flex">
                                    <FaRegUser className="mr-1.5" size={16} /> Account
                                </h2>
                                <h2 className="flex items-center text-sm">
                                    <BsCart3 className="mr-1.5" size={18} /> Cart
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {menu && (
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                    <div className="relative">
                            <button
                                type="button"
                                className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-green-900"
                                aria-expanded={isOpen}
                                onClick={toggleDropdown}
                            >
                                Categories
                                <svg className="h-5 w-5 flex-none text-green-900" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </button>
                            {isOpen && (
                                <div className="absolute mt-2 w-48 rounded-md bg-white shadow-lg z-10">
                                    <ul className="py-1">
                                        {categories.map((category, index) => (
                                            <li key={index}>
                                                <input
                                                    type="radio"
                                                    id={category}
                                                    name="category"
                                                    className="hidden"
                                                    onChange={() => setCategory(category == "All" ? "": category)}
                                                />
                                                <label
                                                    htmlFor={category}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                                >
                                                    {category}
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <a
                            href="#"
                            className="block rounded-md px-3 py-2 text-base font-medium text-green-900 hover:bg-gray-700 hover:text-white"
                        >
                            Deals
                        </a>
                        <a
                            href="#"
                            className="block rounded-md px-3 py-2 text-base font-medium text-green-900 hover:bg-gray-700 hover:text-white"
                        >
                            What's New
                        </a>
                        <a
                            href="#"
                            className="block rounded-md px-3 py-2 text-base font-medium text-green-900 hover:bg-gray-700 hover:text-white"
                        >
                            Delivery
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
