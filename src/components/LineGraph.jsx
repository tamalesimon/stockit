import React, {useState, useEffect} from 'react';
import {Line} from 'react-chartjs-2';

function LineGraph() {


    return (
        <div>
            <div>
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center mx-2">
                        <h3 className="text-sm mr-4">Showing Data:</h3>
                        <div class="">
                            <div class="my-2 p-1 bg-white flex border border-gray-200 rounded">
                                <div class="flex flex-auto flex-wrap"></div>
                                <input placeholder="October 2020" class="px-2 text-sm appearance-none outline-none w-full text-gray-800"/>
                                <div class="text-gray-300 w-8 pl-2 pr-1 border-l flex items-center border-gray-200">
                                    <button class="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up w-4 h-4">
                                            <polyline points="18 15 12 9 6 15"></polyline>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="flex flex-row items items-center">
                        <div className="p-2 rounded-md bg-gray-200 bg-opacity-50 flex items-center">
                            <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
                            <div className="text-xs text-gray-400">Return Value</div>
                        </div>
                        <div className="p-1 ml-2 bg-gray-200 bg-opacity-50 rounded-md">
                            <svg className="opacity-50 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" width="24" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </div>
                    </div>                   
                </div>
            </div>
            <div className="mt-4" style={{
                width:"800px",
            }}>
                <Line
                    data = {{
                        labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                        datasets: [
                            {
                                type:'line',
                                data: [0, 200, 96, 150, 900, 400, 600, 250, 700, 200, 100,850],
                                backgroundColor:'white',
                                borderColor:'#1e9127',
                                borderWidth:2,
                                pointBorderColor:'rgba(0, 0, 0, 0)',
                                pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                                pointHoverBackgroundColor:'#1e9127',
                                pointHoverBorderColor:'#000000',
                                pointBorderWidth:4,
                                pointHoverRadius: 6,
                            }
                        ]
                    }}
                    options = {{
                        layout: {
                            padding: {
                                left:0,
                                right:0,
                                top:0,
                                bottom: 0
                            }
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    max: 1000,
                                    min: 0,
                                    stepSize: 200,
                                    callback: function(value){
                                        return '$' + value;
                                    }                               
                                },
                                gridLines: {
                                    display: false,
                                    drawBorder: true

                                }
                            }],

                            xAxes: [{
                                gridLines: {
                                    display: false,
                                    drawBorder: true
                                }
                            }]
                        },
                        elements: {
                            line: {
                                tension: 0
                            }
                        },
                        legend: {
                            display: false
                        }, 
                    }}
                />
            </div>
            
            
        </div>
    )
}

export default LineGraph;
