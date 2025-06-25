import React from 'react';
import Arrow from '@/assets/arrow.svg?react'
import {TelegramProvider} from "@/lib/telegram/TelegramProvider.ts";

const CaseCard = ({ title, description, bgImage, link }) => {
    return (
        <div
            className="rounded-xl overflow-hidden w-72 cursor-pointer"
            style={{ cursor: link ? 'pointer' : 'default' }}
        >
            <div className="bg-[#130723] rounded-xl">
                <img className="w-full bg-center px-4 object-contain pt-4" src={bgImage} />
            </div>

            <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-white font-bold text-lg truncate">{title}</h3>
                    {link ? (
                        <Arrow className="ml-2 h-7 w-7" />
                    ) : (
                        <span className="ml-2 text-xs px-2 py-1 bg-[#222222] text-white rounded-full">Скоро кейс</span>
                    )}
                </div>
                <p className="text-white/80 text-sm line-clamp-2 overflow-hidden">{description}</p>
            </div>
        </div>
    );
};

export default CaseCard;