import React, { useEffect } from 'react';
import CaseCard from './CaseCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import Auto from '@/assets/auto.png'
import Bingo from '@/assets/bingo.png'
import Dating from '@/assets/date.png'
import Sex from '@/assets/sex.png'
import Task from '@/assets/task.png'
import Visa from '@/assets/visa.png'
import Wish from '@/assets/wish.png'
import Durak from '@/assets/durak.png'

import 'swiper/css';

const OurCases = () => {
    const cases = [
        {
            title: "Auto Friend",
            description: "Marketplace for buying and selling cars with a convenient search and filtering system",
            bgImage: Auto,
            link: 'https://teletype.in/@wheela_agency/kmG7Tvw9-3b'
        },
        {
            title: "Sex Shop",
            description: "Online adult store with anonymous delivery and a wide range of products for adults",
            bgImage: Sex,
            link: 'https://teletype.in/@wheela_agency/nHgxu7Z-ZbH'
        },
        {
            title: "Visa Center",
            description: "Visa processing assistance service with support at all stages and result guarantee",
            bgImage: Visa,
            link: 'https://teletype.in/@wheela_agency/mS_8i6im_hb'
        },
        {
            title: "Bingo",
            description: "Entertainment app with 'guess the number' mechanics and the possibility to win prizes",
            bgImage: Bingo
        },
        {
            title: "Dating",
            description: "Dating app with a unique partner matching algorithm based on interests",
            bgImage: Dating
        },
        {
            title: "Task To Coin",
            description: "Crypto clicker with the ability to earn currency for completed tasks",
            bgImage: Task
        },
        {
            title: "Wish List",
            description: "App for creating and tracking wish lists with the ability to share with friends...",
            bgImage: Wish
        },
        {
            title: "Durak Online",
            description: "Durak card game with the ability to play online with other players",
            bgImage: Durak
        }
    ];

    return (
        <div className='pl-6'>
            <h2
                className="text-white text-2xl font-bold mb-6 px-6"
            >
                Our Cases
            </h2>

            <Swiper
                spaceBetween={16}
                slidesPerView={'auto'}
                className="mySwiper"
                slidesOffsetAfter={40}
            >
                {cases.map((caseItem, index) => (
                    <SwiperSlide key={index} style={{ width: 'auto', minWidth: '240px' }}>
                        <CaseCard
                            title={caseItem.title}
                            description={caseItem.description}
                            bgImage={caseItem.bgImage}
                            link={caseItem.link}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default OurCases;