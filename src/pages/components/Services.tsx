import ServiceItem from './ServiceItem';


const Services = () => {
    const services = [
        {
            text: "Mini app consulting",
            number: 1,
            price: "€99",
            bgColor: "#120230",
            description: "Professional consultation for mini app development and optimization. Requirements analysis, technical expertise, architecture recommendations and strategic guidance for your project success."
        },
        {
            text: "Social media management & mini app marketing",
            number: 2,
            price: "€173",
            bgColor: "#1D044B",
            description: "Comprehensive social media management and mini app promotion. Content strategy creation, advertising campaign setup, performance analytics and user base growth optimization."
        },
        {
            text: "Mini app development",
            number: 3,
            price: "€390",
            bgColor: "#1F0353",
            description: "Full-cycle mini app development from concept to launch. Modern technologies, responsive design, API integrations, thorough testing and post-release technical support."
        }
    ];

    return (
        <div className='px-6 max-w-2xl mx-auto'>
            <h2
                className="text-white text-3xl font-bold mb-8 text-center"
                data-aos="fade-right"
                data-aos-delay="100"
            >
                What do we do?
            </h2>

            <div className="flex flex-col gap-6">
                {services.map((service, index) => (
                    <div
                        key={service.number}
                        data-aos="fade-up"
                        data-aos-delay={200 + (index * 100)}
                        className="transform hover:scale-105 transition-transform duration-300"
                    >
                        <ServiceItem
                            text={service.text}
                            number={service.number}
                            price={service.price}
                            bgColor={service.bgColor}
                            description={service.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;