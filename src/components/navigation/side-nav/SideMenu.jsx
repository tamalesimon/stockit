import React from 'react';
import SideMenuItem from './SideMenuItem';

import {dashboard as dash} from './svg/dashboard';
import {chartBar as portfolio} from './svg/chart-bar';
import {trending as discovery} from './svg/trending';
import {payments as credit} from './svg/payments';
import {history as hist} from './svg/history';
import {inbox as messages} from './svg/inbox';
import {settings as cog} from './svg/settings';




import logo from './svg/logo.png';

import './side-bar.css';

function SideMenu() {
    
    return (
        <div className="side__bar w-64 min-h-screen overflow-y-auto side-bar shadow relative z-30 md:block">            
            <div className="flex flex-col px-2 py-4 m-4">
                {/* Branding */}
                <div className="flex flex-row items-center">
                    <div><img src={logo} width="24" height="24" alt=""/></div>
                    
                    <div className="ml-4 items-center text-2xl font-bold tracking-tight text-gray-700">
                        Stockit.
                    </div>
                </div>
                
                <button className="bg-green-500 hover:bg-green-600 text-gray-50 font-medium rounded-xl mt-8 shadow-xl px-2 py-4 ">
                    Invest Now
                </button>              
            </div>
            {/* Menu */}
            <div className="px-4 py-2">
                    <ul>
                        <SideMenuItem itemSvgLeft={dash} linkTitle="Dashboard" link="dashboard-link" />
                        <SideMenuItem itemSvgLeft={portfolio} linkTitle="Portfolio" link="portfolio-link" />
                        <SideMenuItem itemSvgLeft={discovery} linkTitle="Discovery" link="discovery-link" />
                        <SideMenuItem itemSvgLeft={credit} linkTitle="Payments" link="payments-link" /> 
                        <SideMenuItem itemSvgLeft={hist} linkTitle="History" link="history-link" /> 
                        <SideMenuItem itemSvgLeft={messages} linkTitle="Inbox" link="inbox-link" />
                        <SideMenuItem itemSvgLeft={cog} linkTitle="Settings" link="settings-link" /> 
                    </ul>
                </div>
        </div>
    )
}

export default SideMenu;
