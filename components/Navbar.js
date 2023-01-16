import React, { useState } from 'react'

const Navbar = () => {
    const [show, setShow] = useState(false)
    return (

        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 shadow-md ">
            <div className=" flex flex-wrap items-center justify-between ">
                <div className='flex gap-20'>
                    <img src="/logo.png" className='h-10' alt="" />
                    <div className='hidden  h-12 w-[300px] rounded-xl border-[3px] bg-white items-center px-3 border-[#18161646] sm:flex gap-2'>
                        <img src="/search.svg" className='h-6' alt="" />
                        <input type="text" placeholder='Search ...' className='rounded-xl h-full w-full outline-none placeholder:text-lg text-[#00000070]' />
                    </div>
                </div>
                <button onClick={(e => setShow(!show))} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   " aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white  ">
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 " aria-current="page">Events</a>
                        </li>
                        <li>
                            <a href="#about" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0   ">About Us</a>
                        </li>
                        <li>
                            <a href="#advisory" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0   ">Our Advisors</a>
                        </li>
                        <li>
                            <a href="#howitworks" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0   ">How it Works</a>
                        </li>
                        <li>
                            <a href="#apply" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0   ">Apply Now </a>

                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0   ">Connect With us </a>
                        </li>
                    </ul>
                </div>
                {show &&
                    <div className="h-screen mt-10 w-full" id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 " aria-current="page">Events</a>
                            </li>
                            <li>
                                <a href="#about" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0   ">About Us</a>
                            </li>
                            <li>
                                <a href="#advisory" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0   ">Our Advisors</a>
                            </li>
                            <li>
                                <a href="#howitworks" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0   ">How it Works</a>
                            </li>
                            <li>
                                <a href="#apply" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0   ">Apply Now </a>

                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0   ">Connect With us </a>

                            </li>
                        </ul>
                    </div>}
            </div>
        </nav>

    )
}

export default Navbar