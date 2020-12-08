import React from 'react';
import LineGraph from '../LineGraph';
import Trending from '../trending';

function DashBody() {
    return (
        <main className="md:ml-6 mr-10 py-8">
            <div className="flex">
                <div>
                    <h2 className="mx-2 text-gray-600 font-bold text-base">Portfolio Summary</h2>
                    <div>
                        <LineGraph/>
                    </div>
                </div>
                <div style={{
                    width: "100%"
                }} className="ml-8">
                    <Trending/> 
                </div>
            </div>        
        </main>
    )
}

export default DashBody;
