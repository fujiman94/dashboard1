import React, { useState } from 'react'
// icons
import { 
    RiDashboardLine,
    RiBriefcaseLine,
    RiCalendar2Line,
    RiMessage2Line,
    RiLogoutBoxRLine,
    RiMenu3Fill,
    RiCloseLine,
    RiNotification3Line,
    RiArrowDownSLine,
    RiSearchLine,
    RiCheckboxBlankCircleFill,
    RiMapPinRangeLine,
    RiFilter3Line,
    RiDropboxFill,
    RiTwitchLine,
    RiGoogleLine,
    RiAmazonLine

} from "react-icons/ri";

export const Dashboard = () => {
    const [sidebar, setSideBar] = useState(false)

    const handleSideBar = () => {
        setSideBar(!sidebar);
    };

  return (
    <div className='min-h-screen grid grid-cols-1 lg:grid-cols-6'>
        {/* Sidebard */}
        <div className={`fixed lg:static top-0 w-full h-full overflow-y-scroll  col-span-1 p-8 border-r ${sidebar ? "-left-0" : "left-full" } z-50 bg-white w-[85%] lg:w-full md:w-[40%] transition-all`}>
            {/* Logotipo */}
            <div className='text-center p-8 border-r-gray-300'>
                <h1 className='uppercase font-bold tracking-[4px]'>wwwork</h1>
            </div>
            <div className='h-[800px] flex flex-col justify-between'>
            {/* Menu */}
                <nav className=''>
                    <ul className=''>
                        <li className=''>
                            <a href='#' className='flex items-center justify-center p-4 gap-4 rounded-lg hover:bg-purple-600 hover:text-white transition-colors text-gray-500 font-semibold'>
                                <RiDashboardLine/>
                                Dashboard
                            </a>
                            <a href='#' className='flex items-center justify-center p-4 gap-4 rounded-lg hover:bg-purple-600 hover:text-white transition-colors text-gray-500 font-semibold'>
                                <RiBriefcaseLine/>
                                Job Board
                            </a>
                            <a href='#' className='flex items-center justify-center p-4 gap-4 rounded-lg hover:bg-purple-600 hover:text-white transition-colors text-gray-500 font-semibold'>
                                <RiCalendar2Line/>
                                Scheadule
                            </a>
                            <a href='#' className='flex items-center justify-center p-4 gap-4 rounded-lg hover:bg-purple-600 hover:text-white transition-colors text-gray-500 font-semibold'>
                                <RiMessage2Line/>
                                Messenger
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* Image & log out */}
                <div className='flex flex-col gap-4'>
                    <img src='img1.svg' alt='Freelancer live' className=''/>
                    {/* Update */}
                    <div className='flex flex-col bg-purple-50 rounded-3xl p-8 gap-4'>
                        <h3 className='text-xl text-center'>Get Upgrade</h3>
                        <p className='text-gray-500 text-center'>Step to the next level, with more features</p>
                        <button className='flex items-center justify-center p-2 gap-4 rounded-lg bg-purple-600 text-white font-semibold'>Learn more</button>
                    </div>
                    <a href='#' className='flex items-center justify-center p-4 gap-4 rounded-lg hover:bg-purple-600 hover:text-white transition-colors text-gray-500 font-semibold'>
                        <RiLogoutBoxRLine/>
                        Logout
                    </a>
                </div>
            </div>
        </div>
        {/* Menu Btn hide & show  */}
        <button 
            className='block lg:hidden fixed bottom-4 right-4 bg-purple-600 p-2 rounded-full text-white text-2xl z-50'
            onClick={handleSideBar}
        >
            { sidebar ? <RiCloseLine/> : <RiMenu3Fill/> }
        </button>

        {/* Board */}
        <div className='col-span-5'>
            {/* Header */}
            <header className='flex flex-col md:flex-row items-center justify-between p-6 pl-4 md:px-8 lg:px-12 w-full gap-4'>
                {/* Quick Searcher */}
                <form className='w-full md:w-[40%] lg:w-[30%] order-1 md:order-none'>
                    <div className='relative'>
                        <RiSearchLine className='absolute left-2 top-3'/>
                        <input
                            type='text'
                            className='py-2 pl-8 pr-4 outline-none rounded-lg bg-gray-50 w-full'
                            placeholder='Search'>
                        </input>
                    </div>
                </form>
                {/* Notifications */}
                <nav className='w-full md:w-[60%] lg:w-[70%] flex justify-center md:justify-end'>
                    <ul className='flex items-center gap-4'>
                        <li>
                            <a href='#' className='relative'>
                                <RiNotification3Line className='text-lg'/>
                                <RiCheckboxBlankCircleFill className='absolute -right-1 -top-1 text-xs text-red-500'/>
                            </a>
                        </li>
                        <li>
                            <a href='#' className='flex items-center gap-1 font-semibold'>
                                Fujikawa Tomo <RiArrowDownSLine/>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            {/* Content */}
            <div className='p-4 md:p-8 bg-gray-100'>
                {/* Dash Board Title */}
                <div className='mb-8'>
                    <h2 className='text-2xl font-semibold'>Job Board</h2>
                </div>
                {/* Searcher, Options, Filter */}
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4 items-center mb-4'>
                    <form className='col-span-1 md:col-span-2'>
                        <div className='relative'>
                            <RiSearchLine className='absolute left-2 top-3 text-purple-600'/>
                            <input
                                type='text'
                                className='py-2 pl-8 pr-4 outline-none bg-white w-full'
                                placeholder='Search'>
                            </input>
                        </div>
                    </form>

                    <form className='col-span-1'>
                        <div className='relative'>
                            <RiMapPinRangeLine className='absolute left-2 top-3 text-purple-600'/>
                            <select
                                type='text'
                                className='py-[10px] pl-8 pr-4 outline-none bg-white w-full text-gray-400'

                            >
                                <option>Location</option>
                                <option>Spain</option>
                                <option>Chile</option>
                                <option>Mexico</option>
                                <option>United States</option>
                            </select>
                        </div>
                    </form>

                    <form className='col-span-1'>
                        <div className='relative'>
                            <RiFilter3Line className='absolute left-2 top-3 text-purple-600'/>
                            <input
                                type='text'
                                placeholder='Filters'
                                className='py-2 pl-8 pr-4 outline-none bg-white w-full '
                                >
                            </input>
                            <span className='absolute text-sm right-3 top-2 bg-purple-600 text-white py-1 px-[10px] rounded-full'>
                                4
                            </span>

                        </div>
                    </form>
                </div>
                {/*Selected filters*/}
                <div className='flex items-center gap-4 flex-wrap'>
                    <span className='bg-white rounded-full flex items-center pl-4 pr-6 py-2 gap-4 px-6 text-gray-500'>
                        <button className='bg-purple-100 p-1 rounded-full text-purple-600 text-sm '>
                            <RiCloseLine/>
                        </button>{ " " }
                        Design
                    </span>
                    <span className='bg-white rounded-full flex items-center pl-4 pr-6 py-2 gap-4 px-6 text-gray-500'>
                        <button className='bg-purple-100 p-1 rounded-full text-purple-600 text-sm'>
                            <RiCloseLine/>
                        </button>{ " " }
                        Regular
                    </span>
                    <span className='bg-white rounded-full flex items-center pl-4 pr-6 py-2 gap-4 px-6 text-gray-500'>
                        <button className='bg-purple-100 p-1 rounded-full text-purple-600 text-sm'>
                            <RiCloseLine/>
                        </button>{ " " }
                        Full time
                    </span>
                    <span className='bg-white rounded-full flex items-center pl-4 pr-6 py-2 gap-4 px-6 text-gray-500'>
                        <button className='bg-purple-100 p-1 rounded-full text-purple-600 text-xs'>
                            <RiCloseLine className=''/>
                        </button>{ " " }
                        B2B
                    </span>
                    <button className='text-gray-500 ml-4'>
                        Clear All
                    </button>
                </div>
                {/* Results */}
                <div className='flex justify-between items-center mt-4 mb-8'>
                    <p className='text-gray-500'>
                        We've found <span className='text-purple-600 font-bold'>523</span> jobs!
                    </p>
                    <p className='text-gray-500 flex items-center gap-2'>
                        Sort by: <span className='text-purple-600 font-bold hover:cursor-pointer'>Date</span>{" "}
                        <RiArrowDownSLine/>
                    </p>
                </div>
                {/* Cards */}
                <a href='#' className='bg-white rounded-2xl p-8 flex gap-8 w-full drop-shadow-lg flex-col md:flex-row border-2 hover:border-purple-400 border-transparent transition-all mb-4'>
                    {/* Icons */}
                    <div className='w-full md:w-[10%] items-center justify-start md:justify-center'>
                        <RiDropboxFill className='text-7xl bg-purple-100 text-purple-600  p-4 rounded-md'/>
                    </div>
                    {/* Title */}
                    <div className='md:w-[70%] w-full'>
                        <h1 className='text-xl flex items-center gap-4 mb-2'>
                            UX designer <span className='text-xs py-1 px-2 bg-purple-100 text-purple-600 font-bold'>Remote</span>
                            <span className='text-xs py-1 px-2 bg-green-100 text-green-600 font-bold'>Sketch</span>
                        </h1>
                        <p className='text-gray-500'>
                            Dropbox ---- Warzawa
                        </p>
                    </div>
                        {/* Time & PLN */}
                        <div className='md:w-[20%] w-full flex flex-col items-end'>
                            <h3 className='text-xl text-gray-500 mb-2'>
                                8.8 - 13.7K PLN
                            </h3>
                            <p className='text-gray-500'>
                                2 days ago
                            </p>
                        </div>
                </a>

                <a href='#' className='bg-white rounded-2xl p-8 flex gap-8 w-full drop-shadow-lg flex-col md:flex-row border-2 hover:border-purple-400 border-transparent transition-all mb-4'>
                    {/* Icons */}
                    <div className='w-full md:w-[10%] items-center justify-start md:justify-center'>
                        <RiTwitchLine className='text-7xl bg-purple-100 text-purple-600  p-4 rounded-md'/>
                    </div>
                    {/* Title */}
                    <div className='md:w-[70%] w-full'>
                        <h1 className='text-xl flex items-center gap-4 mb-2'>
                            Product designer <span className='text-xs py-1 px-2 bg-purple-100 text-purple-600 font-bold'>Remote</span>
                        </h1>
                        <p className='text-gray-500'>
                            Twitch ---- Wroclaw
                        </p>
                    </div>
                        {/* Time & PLN */}
                        <div className='md:w-[20%] w-full flex flex-col items-end'>
                            <h3 className='text-xl text-gray-500 mb-2'>
                                8.2 - 13.5K PLN
                            </h3>
                            <p className='text-gray-500'>
                                2 days ago
                            </p>
                        </div>
                </a>

                <a href='#' className='bg-white rounded-2xl p-8 flex gap-8 w-full drop-shadow-lg flex-col md:flex-row border-2 hover:border-purple-400 border-transparent transition-all mb-4'>
                    {/* Icons */}
                    <div className='w-full md:w-[10%] items-center justify-start md:justify-center'>
                        <RiGoogleLine className='text-7xl bg-purple-100 text-purple-600  p-4 rounded-md'/>
                    </div>
                    {/* Title */}
                    <div className='md:w-[70%] w-full'>
                        <h1 className='text-xl flex items-center gap-4 mb-2'>
                            UX/UI designer <span className='text-xs py-1 px-2 bg-purple-100 text-purple-600 font-bold'>Remote</span>
                            <span className='text-xs py-1 px-2 bg-yellow-100 text-yellow-600 font-bold'>Javascript</span>
                        </h1>
                        <p className='text-gray-500'>
                            Google ---- Warzawa
                        </p>
                    </div>
                        {/* Time & PLN */}
                        <div className='md:w-[20%] w-full flex flex-col items-end'>
                            <h3 className='text-xl text-gray-500 mb-2'>
                                8.8 - 13.7K PLN
                            </h3>
                            <p className='text-gray-500'>
                                2 days ago
                            </p>
                        </div>
                </a>

                <a href='#' className='bg-white rounded-2xl p-8 flex gap-8 w-full drop-shadow-lg flex-col md:flex-row border-2 hover:border-purple-400 border-transparent transition-all mb-4'>
                    {/* Icons */}
                    <div className='w-full md:w-[10%] items-center justify-start md:justify-center'>
                        <RiAmazonLine className='text-7xl bg-purple-100 text-purple-600  p-4 rounded-md'/>
                    </div>
                    {/* Title */}
                    <div className='md:w-[70%] w-full'>
                        <h1 className='text-xl flex items-center gap-4 mb-2'>
                            Amazon designer <span className='text-xs py-1 px-2 bg-purple-100 text-purple-600 font-bold'>Remote</span>
                            <span className='text-xs py-1 px-2 bg-red-100 text-red-600 font-bold'>Adobe</span>
                        </h1>
                        <p className='text-gray-500'>
                            Amazon  ---- Warzawa
                        </p>
                    </div>
                        {/* Time & PLN */}
                        <div className='md:w-[20%] w-full flex flex-col items-end'>
                            <h3 className='text-xl text-gray-500 mb-2'>
                                8.8 - 13.7K PLN
                            </h3>
                            <p className='text-gray-500'>
                                2 days ago
                            </p>
                        </div>
                </a>
            </div>
        </div>
    </div>
  )
}

