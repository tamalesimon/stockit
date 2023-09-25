import React from 'react';

/* import UBER from '../../assets/AIG.png';
import AAPL from '../../assets/AAPL.png';
import AIG from '../../assets/AIG.png';
import AMZN from '../../assets/AMZN.png';
import FB from '../../assets/FB.png';
import SBUX from '../../assets/SBUX.png';
import TSLA from '../../assets/TSLA.png';
import MSFT from '../../'; */






function YourPortfolio(props) { 

    /* const images = require('../../assets'+ props.icon + '.png', true);  */

    const percentage = ((props.price- props.openPrice)/props.openPrice)*100;
    console.log(props.icon);
    return (
        <div className="ml-1 mb-4">
            <div style={{ width:"800px"}} className="flex items-center justify-between py-4 px-6 border-2 border-solid border-opacity-75 border-gray-200 rounded-lg">
                
                <div className="flex flex-row items-center">
                    <img src={require(`../../assets/${props.icon}.png`).default} alt="" className=" w-16 rounded-md opacity-70" />
                    <div className="ml-8">
                        <h2 className="text-sm font-bold text-gray-800">{props.name}</h2>
                        <p className="text-sm font-sans text-gray-400">{props.industry}</p>
                    </div>                 
                </div>
                <div className="flex flex-row">
                    <div className="text-right mr-10">
                        <h2 className="text-sm font-bold text-gray-800">$ {props.investmentValue}</h2>
                        <p className="text-sm font-sans text-gray-400">Investment Value</p>
                    </div>
                    <div className="text-center ml-10">
                        <h2 className="text-sm font-bold text-green-500">+{Number(percentage).toFixed(2)}%</h2>
                        <p className="text-sm font-sans text-gray-400">Return Value</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default YourPortfolio;
