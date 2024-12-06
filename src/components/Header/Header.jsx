import React from 'react';
import logo from '../../assets/Logo.png';
import '../Header/Header.css'
import {ShoppingCartIcon } from '@heroicons/react/24/outline'

const Header = () => {
    return (
    <div className='my-container'>
            <nav className="flex items-center justify-between">
                    <div className="logo-area flex items-center gap-2">
                        <img src={logo} alt="logo" className='w-16 h-26 '/>
                        <h4>Organick</h4>
                    </div>
                    <div className='nav-area'>
                        <ul className='items-center hidden space-x-7 lg:flex'>
                            <li><a href="Home">Home</a></li>
                            <li><a href="Js">About</a></li>
                            <li><a href="CSS">Pages</a></li>
                            <li><a href="User">Shop</a></li>
                        </ul>
                </div> 
                <div className="search-cart flex items-center gap-4">
                    <div className='search-area'>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                  </div>
                    <div className='cart-area border border-black-500 flex items-center gap-2 '>
                        <ShoppingCartIcon className=" carts bg-[#274C5B] rounded-full" />
                        <h4>Cart 0</h4>
                    </div>
                </div>
       </nav>
    </div>
    );
};

export default Header;