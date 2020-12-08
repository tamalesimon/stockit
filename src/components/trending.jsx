import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://finnhub.io/api/v1/quote/';
const API_KEY = 'bv6lqiv48v6s9eue59e0';

function Trending() {

    const [trendingData, settrendingData] = useState([]);

    const getStockData = (stock) => {
       return axios.get(`${BASE_URL}?symbol=${stock}&token=${API_KEY}`)
       .catch((error) => {
           console.error("Error" , error.message);
       });
    };

    useEffect(() => {
        let tempStockData = []
        const stockList = []
        let promises = [];

        stockList.map((stock) => {
            promises.push(
                getStockData(stock)
                .then((res) => {
                    tempStockData.push({
                        name: stock,
                        ...res.data
                    })
                })
            )
        })
    }, []);
    return (
            <div>
                <div className="flex justify-between mb-4">
                    <h2 className=" text-gray-600 font-bold text-base">Trending</h2>
                    <a className=" text-green-500" href="http://">View all</a>
                </div>
                <div>

                </div>
            </div>

        
    )
}

export default Trending;
