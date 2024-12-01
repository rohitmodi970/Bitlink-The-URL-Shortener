import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <nav className='flex justify-between items-center h-20 bg-purple-700 text-white px-3'>
            <div className="logo font-bold text-[3vw]"><Link href="/"> Shorify</Link></div>
            <ul className='flex justify-center items-center gap-4 '>
                <Link href="/"> <li>Home</li></Link>
                <Link href="/about"> <li>About</li></Link>
                <Link href="/shorten"> <li>Shorten</li></Link>
                <Link href="/contact"> <li>Contact Us</li></Link>
                <li className='flex justify-center items-center gap-4 '>
                    <Link href="/shorten"> <button className='bg-purple-500 shadow-lg p-3 rounded-lg'>Try Now</button></Link>
                    <Link href="/github"> <button className='bg-purple-500 shadow-lg p-3 rounded-lg'>GitHub</button></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
