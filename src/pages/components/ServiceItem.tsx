import React from 'react';

const ServiceItem = ({ text, number, bgColor, price }) => {
    return (
        <div
            className="p-4 rounded-xl flex justify-between items-center"
            style={{ backgroundColor: bgColor }}
        >
            <span className="text-white">{text} {price}</span>
            <span
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
                style={{ color: bgColor }}
            >
                {number}
            </span>
        </div>
    );
};

export default ServiceItem;