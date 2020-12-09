import React from 'react';

function TrendingDataRow(props) {
    const percentage = ((props.price- props.openPrice)/props.openPrice)*100;
    return (
        <tbody>
            <tr className="text-sm font-bold text-gray-800 cursor-pointer lg:hover:bg-gray-100">
                <td></td>
                <td className="px-6 py-4 whitespace-nowrap">{props.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">$ {props.price}</td>
                <td className="px-6 py-4 whitespace-nowrap text-green-500">{Number(percentage).toFixed(2)}%</td>
            </tr>
        </tbody>
    )
}

export default TrendingDataRow;
