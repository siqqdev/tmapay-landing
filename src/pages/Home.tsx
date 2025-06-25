import React from 'react';
import 'aos/dist/aos.css';
import Bg from '@/assets/mainBg.png';
import Services from "@/pages/components/Services.tsx";
import OurCases from "@/pages/components/OurCases.tsx";
import WorkStages from "@/pages/components/WorkStages.tsx";
import Visa from '@/assets/pays/visa.png'
import Mastercard from '@/assets/pays/mastercard.png'

const Home = () => {
    return (
        <div className='min-h-screen w-full bg-cover bg-no-repeat bg-center pb-6'
             style={{ backgroundImage: `url(${Bg})` }}>
            <div className="">
                <div className="mb-8 p-6">
                    <h1
                        className="text-white text-3xl font-bold mb-4"
                        data-aos="fade-down"
                        data-aos-delay="100"
                    >
                        TMA Pay
                    </h1>
                    <p
                        className="text-white text-sm mb-8 font-montserrat"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        IT & Telegram agency - your reliable partner in the field of development and promotion of Telegram projects
                    </p>

                    <div className="flex gap-8 self-center justify-center">
                        <div
                            className="w-36 h-36 rounded-full bg-[#1D054A] flex items-center justify-center"
                            data-aos="zoom-in"
                            data-aos-delay="500"
                        >
                            <div className="text-center">
                                <div className="text-5xl font-bold text-white">5+</div>
                                <div className="text-xs text-white">Years in IT</div>
                            </div>
                        </div>

                        <div
                            className="w-36 h-36 rounded-full bg-black border-2 border-[#5B2C96] flex items-center justify-center"
                            data-aos="zoom-in"
                            data-aos-delay="700"
                        >
                            <div className="text-center">
                                <div className="text-5xl font-bold text-white">20+</div>
                                <div className="text-xs text-white">TMA Cases</div>
                            </div>
                        </div>
                    </div>
                </div>

                <Services />

                <div
                    className="mt-12 mb-12"
                >
                    <OurCases />
                </div>

                <div
                    className="px-6 mb-12"
                >
                    <WorkStages />
                </div>

                {/* Footer */}
                <div className="px-6 py-8 border-t border-gray-600">
                    <div className="flex flex-col items-center space-y-4">
                        {/* Payment Methods */}
                        <div className="flex gap-4 items-center">
                            <img src={Visa} alt="Visa" className="h-8" />
                            <img src={Mastercard} alt="Mastercard" className="h-8" />
                        </div>

                        {/* Contact Email */}
                        <div className="text-white text-sm">
                            <a href="mailto:contact@tmapay.com" className="hover:text-purple-300 transition-colors">
                                contact@tmapay.com
                            </a>
                        </div>

                        {/* Legal Links */}
                        <div className="flex gap-6">
                            <a
                                href="/privacy-policy"
                                className="text-white text-xs hover:text-purple-300 transition-colors underline"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="/terms-conditions"
                                className="text-white text-xs hover:text-purple-300 transition-colors underline"
                            >
                                Terms & Conditions
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;