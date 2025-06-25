import React, { useEffect } from 'react';
import ServiceItem from './ServiceItem';

const Services = () => {
    const services = [
        { text: "Mini app consulting", number: 1, price: "€99", bgColor: "#120230" },
        { text: "Social media management & mini app marketing", number: 2, price: "€173", bgColor: "#1D044B" },
        { text: "Mini app development", number: 3, price: "€390", bgColor: "#1F0353" }
    ];

    return (
        <div className='px-6'>
            <h2
                className="text-white text-2xl font-bold mb-6"
                data-aos="fade-right"
                data-aos-delay="100"
            >
                What do we do?
            </h2>

            <div className="flex flex-col gap-4">
                {services.map((service, index) => (
                    <div
                        key={service.number}
                        data-aos="fade-up"
                        data-aos-delay={200 + (index * 100)}
                    >
                        <ServiceItem
                            text={service.text}
                            number={service.number}
                            price={service.price}
                            bgColor={service.bgColor}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;