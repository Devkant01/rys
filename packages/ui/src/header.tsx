"use client";
import React, {useState, useEffect} from 'react';
import { topHeader } from "@repo/store/design";
import { useRecoilState } from "recoil";
import { FaHome, FaUser, FaShoppingCart, FaSearch, FaTimes } from 'react-icons/fa';

export function Header() {
    const [value, setValue] = useRecoilState(topHeader);
    const [showTopHeader, setShowTopHeader] = useState(value);
    useEffect(() => {
        // Only set state if they're different
        if (showTopHeader !== value) {
            setValue(showTopHeader);
        }
    }, [showTopHeader]);
    return (
        <>
            {/* Top Header */}
            {showTopHeader && (
                <div
                    id="topHeader"
                    className="w-full h-12 flex justify-center items-center uppercase text-sm font-bold bg-[#fff4e5] text-[#ff6900] px-8"
                >
                    <FaTimes
                        onClick={() => setShowTopHeader(false)}
                        className="absolute right-8 text-4xl text-red-600 font-thin border rounded-full p-1 hover:cursor-pointer hover:border-2"
                    />
                    <p>1-DAY EXPRESS DELIVERY NOW AVAILABLE IN BANGALORE!</p>
                </div>
            )}

            {/* Actual Header */}
            <div
                id="actualHeader"
                className="sticky top-0 bg-black text-white h-16 w-full flex justify-between items-center px-8 z-50 shadow-md"
            >
                <HeaderLogo />
                <Categories />
                <UserAccount />
            </div>
        </>
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
