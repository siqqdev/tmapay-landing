import React from 'react';
import Bg from '@/assets/mainBg.png';

const PrivacyPolicy = () => {
    return (
        <div className='min-h-screen w-full bg-cover bg-no-repeat bg-center pb-6'
             style={{ backgroundImage: `url(${Bg})` }}>
            <div className="px-6 py-20">
                <div className="max-w-4xl mx-auto bg-black/60 backdrop-blur-sm rounded-xl p-8">
                    <div className="mb-6">
                        <a
                            href="/"
                            className="text-purple-300 hover:text-white transition-colors text-sm mb-4 inline-block"
                        >
                            ← Back to Home
                        </a>
                        <h1 className="text-white text-3xl font-bold mb-2">Privacy Policy</h1>
                    </div>

                    <div className="text-white space-y-6 text-sm leading-relaxed">
                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-purple-300">1. Introduction</h2>
                            <p>
                                TMA Pay ("we," "our," "us") is committed to protecting your privacy and handling your personal data responsibly. This Privacy Policy outlines how we collect, process, store, and protect your personal data when you use our website and our services. By using our website and services, you agree to the collection and processing of your data as described in this Privacy Policy. If you do not agree with any part of this policy, please do not use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-purple-300">2. Company Information</h2>
                            <p>
                                <strong>TMA Pay</strong><br/>
                                Email: contact@tmapay.com
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-purple-300">3. Data We Collect</h2>
                            <p>We may collect and process the following types of personal data:</p>
                            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                                <li><strong>Identity Information:</strong> Full name, company name, and job title.</li>
                                <li><strong>Contact Information:</strong> Email address, phone number, and billing address.</li>
                                <li><strong>Payment Information:</strong> Payment details, transaction history (processed securely through third-party providers).</li>
                                <li><strong>Technical Data:</strong> IP address, browser type, operating system, and usage data.</li>
                                <li><strong>Communications:</strong> Emails, messages, and feedback.</li>
                                <li><strong>Marketing Preferences:</strong> Opt-in/opt-out preferences for receiving marketing materials.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-purple-300">4. How We Collect Data</h2>
                            <p>We collect personal data in the following ways:</p>
                            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                                <li><strong>Directly from You:</strong> When you fill out a form, make a purchase, or contact us.</li>
                                <li><strong>Automatically:</strong> Through cookies and analytics tools when you visit our website.</li>
                                <li><strong>From Third Parties:</strong> Payment processors, service providers, or business partners.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-purple-300">5. Purpose of Data Collection</h2>
                            <p>We process personal data for the following purposes:</p>
                            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                                <li>To provide and manage our services.</li>
                                <li>To process payments and transactions.</li>
                                <li>To communicate with you regarding orders, support, and inquiries.</li>
                                <li>To improve our website and user experience.</li>
                                <li>To send marketing and promotional content (only if consented to).</li>
                                <li>To comply with legal obligations and prevent fraud.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-purple-300">6. Legal Basis for Processing</h2>
                            <p>We process your personal data based on:</p>
                            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                                <li><strong>Contractual Necessity:</strong> To fulfill our contractual obligations.</li>
                                <li><strong>Legitimate Interests:</strong> To improve our services and prevent fraud.</li>
                                <li><strong>Legal Compliance:</strong> To meet legal and regulatory obligations.</li>
                                <li><strong>Consent:</strong> When you provide explicit consent for marketing communications.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-purple-300">7. Data Sharing</h2>
                            <p>We do not sell or rent your data. However, we may share your data with:</p>
                            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                                <li><strong>Service Providers:</strong> Hosting services, payment processors, and email communication providers.</li>
                                <li><strong>Regulatory Authorities:</strong> If required by law or to comply with legal obligations.</li>
                                <li><strong>Business Partners:</strong> When necessary for collaborative projects or referrals.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-purple-300">8. Data Security</h2>
                            <p>
                                We implement appropriate technical and organizational security measures to protect your personal data. However, no method of transmission over the internet is 100% secure. While we strive to protect your personal data, we cannot guarantee absolute security.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-purple-300">9. Data Retention</h2>
                            <p>
                                We retain personal data only as long as necessary for the purposes outlined in this Privacy Policy or as required by law. When data is no longer needed, we securely delete or anonymize it.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-purple-300">10. Your Rights</h2>
                            <p>Under data protection laws, you have the right to:</p>
                            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                                <li>Access your personal data.</li>
                                <li>Request corrections to inaccurate data.</li>
                                <li>Request deletion of your data (where applicable).</li>
                                <li>Restrict processing of your data.</li>
                                <li>Object to certain types of data processing.</li>
                                <li>Withdraw consent for marketing communications.</li>
                                <li>Request data portability (where applicable).</li>
                            </ul>
                            <p className="mt-2">To exercise your rights, contact us at contact@tmapay.com.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-purple-300">11. Cookies and Tracking Technologies</h2>
                            <p>
                                We use cookies and similar tracking technologies to enhance user experience and analyze website traffic. You can manage your cookie preferences through your browser settings.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-purple-300">12. Third-Party Links</h2>
                            <p>
                                Our website may contain links to third-party websites. We are not responsible for their privacy practices, and we encourage you to review their privacy policies before providing any personal data.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-purple-300">13. Updates to This Privacy Policy</h2>
                            <p>
                                We may update this Privacy Policy periodically. Any changes will be posted on this page, and significant changes may be communicated via email or website notifications. Continued use of our services constitutes acceptance of the revised policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-purple-300">14. Contact Information</h2>
                            <p>
                                If you have any questions or concerns regarding this Privacy Policy, please contact us at:
                            </p>
                            <p className="mt-2">
                                <strong>Email:</strong> contact@tmapay.com
                            </p>
                        </section>

                        <section>
                            <p className="text-gray-400 text-xs mt-8">
                                <strong>Effective Date:</strong> February 9, 2025
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;