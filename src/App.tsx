import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import AnimatedRoutes from "./AnimatedRoutes.tsx";
import Home from './pages/Home.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import TermsConditions from './pages/TermsConditions.tsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    useEffect(() => {
        AOS.refresh();

        AOS.init({
            duration: 1000,
            once: false,
            easing: 'ease-out',
            offset: 50,
            delay: 0,
            mirror: true,
            anchorPlacement: 'top-bottom',
            disable: false
        });
    }, []);

    return (
        <AnimatedRoutes>
            <Route path='/' element={<Home />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/terms-conditions' element={<TermsConditions />} />
        </AnimatedRoutes>
    );
}

export default App