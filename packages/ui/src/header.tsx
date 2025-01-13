"use client";
import React from 'react';
import { FaHome, FaUser, FaShoppingCart, FaSearch, FaTimes  } from 'react-icons/fa';

export function Header() {
    const [showTopHeader, setShowTopHeader] = React.useState(true);
    return (
        <header className="h-full sticky top-0">
            {/* Top Header */}
            {showTopHeader && (
                <div
                    id="topHeader"
                    className="w-full h-12 relative flex justify-center items-center uppercase text-sm font-bold bg-[#fff4e5] text-[#ff6900] px-8"
                >
                    <FaTimes onClick={() => setShowTopHeader(false)} className="absolute right-8 text-4xl text-red-600 font-extralight border rounded-full p-1 hover:cursor-pointer" />
                    <p>1-DAY EXPRESS DELIVERY NOW AVAILABLE IN BANGALORE!</p>
                </div>
            )}

            {/* Actual Header */}
            <div
                id="actualHeader"
                className="w-full h-16 sticky top-0 bg-black text-white flex justify-between items-center px-8 z-50"
            >
                <HeaderLogo />

                <Categories />

                <UserAccount />
            </div>
        </header>
    );
}

function HeaderLogo() {
    return (
        <div className="flex justify-center items-center hover:cursor-pointer">
            <FaHome className="text-3xl text-white" />
        </div>
    );
}

function Categories() {
    return (
        <div id="categories">
            <ul className="flex gap-6 uppercase text-sm font-bold">
                <li>New</li>
                <li>Women</li>
                <li>Men</li>
                <li>Kids</li>
                <li>Motorsport</li>
                <li>Collaborations</li>
                <li>Sports</li>
                <li>Outlet</li>
                <li>PVMA</li>
            </ul>
        </div>
    );
}

function UserAccount() {
    return (
        <div className="flex items-center gap-4">
            <div className="border border-gray-300 px-4 py-1 flex justify-center items-center hover:cursor-pointer">
                <FaSearch className="text-xl text-white" />
                <button className="ml-4 text-white border-none">Search</button>
            </div>
            <FaShoppingCart className="text-xl text-white hover:cursor-pointer" />
            <FaUser className="text-xl text-white hover:cursor-pointer" />
        </div>
    );
}
