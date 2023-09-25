import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TrendingDataRow from '../trending/trendingDataRow';


/* const BASE_URL = 'https://finnhub.io/api/v1/quote/';
const API_KEY = 'bv6lqiv48v6s9eue59e0'; */

function Trending() {

    const [trendingData, settrendingData] = useState([]);
    const [yourProfile, setYourProfileData] = useState([]);

    //Your Profile Data
    const getMyStocks = () => {

        db.collection('myStocks')
        .onSnapshot(snapshot => {
            let promises = [];
            let tempData = []
            snapshot.docs.map((doc) => {
                promises.push(getStockData(doc.data().ticker)
                .then(res => {
                    tempData.push({
                        id: doc.id,
                        data: doc.data(),
                        info: res.data
                    });
                })
                );
            });

            Promise.all(promises).then(() => {
                setYourProfileData(tempData);
            });
        });
    };

    //trending data
    const getStockData = (stock) => {
       return axios
       .get(`${process.env.REACT_APP_BASEURL}?symbol=${stock}&token=${process.env.REACT_APP_KEY}`)
       .catch((error) => {
           console.error("Error" , error.message);
       });
    };

    useEffect(() => {
        let tempStockData = [];
        const stockList = ["AAPL", "UBER", "MSFT", "SPOT", "AIG", "AMZN", "SBUX", "FB"]
        let promises = [];

        stockList.map((stock) => {
            promises.push(
                getStockData(stock)
                .then((res) => {
                    tempStockData.push({
                        name: stock,
                        ...res.data
                    });
                })
            );
        });

        Promise.all(promises).then(() => {
            console.log(tempStockData);
            settrendingData(tempStockData);
        });

    }, []);
    return (
            <div>
                <div className="flex justify-between mb-4">
                    <h2 className=" text-gray-600 font-bold text-base">Trending</h2>
                    <a className=" text-green-500" href="http://">View all</a>
                </div>
                <div className="border-gray-100 p-2.5 border-2 border-solid rounded-lg">
                    <div>
                        <table className="table-auto border-collapse w-full">                            
                            <thead>
                                <tr className="bg-gray-100 rounded-lg bg-opacity-75">
                                
                                    <th className="pl-6 py-3 text-left text-xs font-bold text-gray-500 tracking-wider">#</th>
                                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 tracking-wider">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 tracking-wider">Price/Unit</th>
                                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 tracking-wider">Return</th>
                                    
                                </tr>
                            </thead>
                            
                            {trendingData.map((stock) => (
                                <TrendingDataRow 
                                    key={stock.name}
                                    name={stock.name}
                                    openPrice={stock.o}
                                    price={stock.c} 
                                />
                            ))}
                        </table>
                    </div>
                </div>
            </div>

        
    )
}

export default Trending;
