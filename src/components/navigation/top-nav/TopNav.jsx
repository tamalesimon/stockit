import React from 'react';

function TopNav() {
    return (
        <div className="top-nav-bar bg-white">
                <header className="py-4 pt-2 flex flex-row items-center justify-between align-middle mx-6">                                   
                    <div>                        
                        <div>
                            <div className="text-2xl mb-2"> Welcome to 
                           <span className="ml-2 font-bold text-green-500">Stockit Platform</span></div>                   
                          <span className="text-lg text-gray-400">Good Morning, Barly Vallendito.</span>
                        </div>

                        
                    </div>
                    <div className="flex uppercase flex-shrink-0 items-center ml-auto">
                    
                    <div className="pl-3 mr-4 space-x-1">
                        <button className="relative p-2 text-gray-400 hover:bg-gray-200 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                            <span class="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-green-500 rounded-full"></span>
                            <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-green-500 rounded-full animate-ping"></span>
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>
                    </div>
                    <div className="justify-end">
                        <div className="inline-flex items-center p-1 bg-white rounded-full">                    
                            <span class="ml-2 sm:ml-3 mr-2 bg-white p-1 shadow-lg cursor-pointer rounded-full overflow-hidden">
                                <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="user profile" class=" w-14 h-14 rounded-full border-white object-cover "/>
                            </span>                        
                             
                        </div>
                    </div>
                    </div> 
                </header>
        </div>
    )
}

export default TopNav
