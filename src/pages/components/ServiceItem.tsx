import React from 'react';

const ServiceItem = ({ text, number, bgColor, price, description }) => {
    return (
        <div
            className="p-6 rounded-xl flex flex-col relative overflow-hidden"
            style={{ backgroundColor: bgColor }}
        >
            <div className="absolute top-4 right-4">
                <span
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold"
                    style={{ color: bgColor }}
                >
                    {number}
                </span>
            </div>

            <h3 className="text-white text-xl font-bold mb-4 pr-12">
                {text}
            </h3>

            <p className="text-white/80 text-sm leading-relaxed mb-6 flex-grow">
                {description}
            </p>

            <div className="flex items-center justify-between">
                <span className="text-white/60 text-sm">Price:</span>
                <span className="text-white text-2xl font-bold">{price}</span>
            </div>

            <div
                className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-full opacity-10"
                style={{ backgroundColor: 'white' }}
            ></div>
        </div>
    );
};

export default ServiceItem;