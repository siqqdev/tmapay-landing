import React from 'react';

const WorkStageItem = ({ number, title, description }) => {
    return (
        <div
            className="bg-[#120230] p-4 rounded-xl"
        >
            <div className="flex gap-4 items-center mb-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#120230] flex-shrink-0 font-bold">
                    {number}
                </div>
                <h4 className="text-white font-bold">{title}</h4>
            </div>
            <p className="text-white/80 text-sm">{description}</p>
        </div>
    );
};

export default WorkStageItem;