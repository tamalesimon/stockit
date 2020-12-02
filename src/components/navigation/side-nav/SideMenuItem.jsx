import React from 'react';

function SideMenuItem({itemSvgLeft, linkTitle, itemSvgRight, link}) {
    return (
        <li>
            <a className=" opacity-60 mb-1 px-2 py-2  flex items-center font-medium text-gray-500 hover:text-green-600 hover:font-bold" href={link}>
                {itemSvgLeft}
                    {linkTitle}
                {itemSvgRight}
            </a>
        </li>
    )
}

export default SideMenuItem;
