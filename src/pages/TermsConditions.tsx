import React from 'react';
import Bg from '@/assets/mainBg.png';

const TermsConditions = () => {
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
                        <h1 className="text-white text-3xl font-bold mb-2">Terms and Conditions</h1>
                    </div>

                    <div className="text-white space-y-6 text-sm leading-relaxed">
                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-purple-300">1. Introduction</h2>
                            <p className="mb-4">
                                <strong>1.1.</strong> The following definitions and interpretation rules apply to these Terms and Conditions ("Conditions"):
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>TMA Pay:</strong> TMA Pay, operating as an IT & Telegram agency specializing in mini app development and promotion.</li>
                                <li><strong>Business Day:</strong> Any day excluding weekends and official public holidays, between 9 AM and 6 PM (local time).</li>
                                <li><strong>Charges:</strong> The fees payable by the Client to TMA Pay for the provision of the Services.</li>
                                <li><strong>Contract:</strong> The agreement formed when the Client places an Order and TMA Pay accepts it or when the Client accepts a valid quotation for Services from TMA Pay under Condition 2.3.</li>
                                <li><strong>Client:</strong> The individual, firm, or company purchasing Services from TMA Pay.</li>
                                <li><strong>Client Materials:</strong> All documents, information, materials, and works provided by the Client to carry out the Services, including but not limited to written content, project briefs, and reference materials.</li>
                                <li><strong>Deliverables:</strong> All documents, products, and materials developed by TMA Pay (or its agents, subcontractors, consultants, and employees) in relation to the Services, in any form, as specified in the Contract.</li>
                                <li><strong>Force Majeure:</strong> Any act, event, or circumstance beyond the reasonable control of the affected party.</li>
                                <li><strong>Intellectual Property Rights:</strong> All rights, whether registered or unregistered, including copyrights, trademarks, domain names, trade secrets, database rights, and other intellectual property rights.</li>
                                <li><strong>Order:</strong> A written order for the Services placed by the Client.</li>
                                <li><strong>Services:</strong> Mini app consulting, social media management & marketing, mini app development, and any other services provided or agreed upon by TMA Pay for the Client.</li>
                            </ul>
                            <p className="mt-4">
                                <strong>1.2.</strong> Headings used in these Conditions are for convenience only and do not affect the interpretation of the terms.
                            </p>
                            <p>
                                <strong>1.3.</strong> References to "writing" or "written" include communication via email and other digital means.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-purple-300">2. Application</h2>
                            <p><strong>2.1.</strong> These Conditions:</p>
                            <ul className="list-disc list-inside ml-4 mb-4">
                                <li>Apply to and are incorporated into the Contract.</li>
                                <li>Prevail over any inconsistent terms contained in the Client's purchase order, acceptance of a quotation, or any other document supplied by the Client.</li>
                            </ul>
                            <p className="mb-4">
                                <strong>2.2.</strong> By ordering any of the Services, the Client agrees to be bound by these Conditions. The Client must be at least 18 years old and legally able to enter a contract.
                            </p>
                            <p className="mb-4">
                                <strong>2.3.</strong> The Client's Order or acceptance of a quotation for Services constitutes an offer to purchase the Services on these Conditions. No offer shall be accepted by TMA Pay other than:
                            </p>
                            <ul className="list-disc list-inside ml-4 mb-4">
                                <li>By a written acceptance issued by TMA Pay.</li>
                                <li>By TMA Pay commencing the provision of Services, in which case a binding contract is formed.</li>
                            </ul>
                            <p className="mb-4">
                                <strong>2.4.</strong> Quotations are valid for a period of 7 days from issuance unless stated otherwise.
                            </p>
                            <p>
                                <strong>2.5.</strong> The description of Services on our website is a general overview and does not form part of the Contract.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-purple-300">3. Commencement and Duration</h2>
                            <p className="mb-4">
                                <strong>3.1.</strong> The Services shall commence on the date of acceptance and shall continue for the period specified in the Order.
                            </p>
                            <p className="mb-4">
                                <strong>3.2.</strong> Services may be provided in instalments where necessary.
                            </p>
                            <p>
                                <strong>3.3.</strong> Product delivery will take place no later than 72 hours after the purchase has been made, unless stated otherwise. In case of a delay, TMA Pay Customer Support will notify the Client as soon as possible.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-purple-300">4. TMA Pay's Obligations</h2>
                            <p className="mb-4">
                                <strong>4.1.</strong> TMA Pay shall use reasonable efforts to deliver high-quality Services as specified in the Contract.
                            </p>
                            <p className="mb-4">
                                <strong>4.2.</strong> TMA Pay shall make efforts to meet any agreed-upon deadlines, but time shall not be of the essence.
                            </p>
                            <p className="mb-4">
                                <strong>4.3.</strong> TMA Pay is not responsible for the loss, corruption, or modification of Client-provided materials.
                            </p>
                            <p>
                                <strong>4.4.</strong> TMA Pay does not guarantee specific marketing or engagement results from its Services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-purple-300">5. Fees and Payments</h2>
                            <p className="mb-4">
                                <strong>5.1.</strong> Fees for the Services shall be set out in the Order or quotation provided by TMA Pay.
                            </p>
                            <p className="mb-4">
                                <strong>5.2.</strong> Prices may be displayed in multiple currencies, with exchange rates subject to fluctuation. The Client is responsible for any applicable VAT or other taxes.
                            </p>
                            <p className="mb-4">
                                <strong>5.3.</strong> Payments must be made in advance unless otherwise agreed. The Client may pay either by direct payment or from their account balance, as available.
                            </p>
                            <p>
                                <strong>5.4.</strong> Orders cancelled after work has commenced will be subject to partial or full charges, depending on the progress of the work.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-purple-300">6. Intellectual Property Rights</h2>
                            <p className="mb-4">
                                <strong>6.1.</strong> Unless otherwise agreed, TMA Pay retains all Intellectual Property Rights in the Deliverables until full payment is received.
                            </p>
                            <p>
                                <strong>6.2.</strong> Upon payment, TMA Pay grants the Client a license to use the Deliverables for their intended purpose.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-purple-300">7. Confidentiality</h2>
                            <p className="mb-4">
                                <strong>7.1.</strong> Both parties agree to keep all confidential information shared during the engagement strictly confidential.
                            </p>
                            <p>
                                <strong>7.2.</strong> The Client must not disclose or distribute any proprietary materials provided by TMA Pay without prior written consent.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-purple-300">8. Limitation of Liability</h2>
                            <p className="mb-4">
                                <strong>8.1.</strong> TMA Pay is not liable for any indirect, incidental, or consequential damages resulting from the use of its Services.
                            </p>
                            <p>
                                <strong>8.2.</strong> The total liability of TMA Pay for any claim is limited to the amount paid by the Client for the specific Service in question.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-purple-300">9. Refund Policy</h2>
                            <p className="mb-4">
                                <strong>9.1.</strong> Refunds will only be provided if the Services were not delivered on time or as expected, based on direct communication with TMA Pay Support.
                            </p>
                            <p className="mb-4">
                                <strong>9.2.</strong> To request a refund, the Client must contact TMA Pay Support within 7 days of the expected delivery date, providing details of the issue and supporting evidence.
                            </p>
                            <p className="mb-4">
                                <strong>9.3.</strong> TMA Pay reserves the right to review and assess refund requests on a case-by-case basis. If a refund is approved, it will be processed using the original payment method.
                            </p>
                            <p>
                                <strong>9.4.</strong> Refunds will not be issued for dissatisfaction with subjective aspects of the Services, such as design preferences, or for delays caused by incomplete or unclear instructions from the Client.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-purple-300">10. Termination</h2>
                            <p className="mb-4">
                                <strong>10.1.</strong> Either party may terminate the Contract if the other party breaches its obligations and fails to remedy the breach within 30 days of notice.
                            </p>
                            <p>
                                <strong>10.2.</strong> Termination does not affect any accrued rights or obligations of either party.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-purple-300">11. Governing Law and Jurisdiction</h2>
                            <p className="mb-4">
                                <strong>11.1.</strong> These Terms are governed by and construed in accordance with applicable laws.
                            </p>
                            <p>
                                <strong>11.2.</strong> Any disputes shall be subject to the jurisdiction of competent courts.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-purple-300">12. Changes to These Terms</h2>
                            <p className="mb-4">
                                <strong>12.1.</strong> TMA Pay reserves the right to amend these Terms at any time. Changes will be effective upon posting on the website.
                            </p>
                            <p>
                                <strong>12.2.</strong> Continued use of the Services after changes are made constitutes acceptance of the updated Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-purple-300">Contact Information</h2>
                            <p>
                                For any inquiries regarding these Terms, please contact us at:
                            </p>
                            <p className="mt-2">
                                <strong>Email:</strong> contact@tmapay.com
                            </p>
                        </section>

                        <section>
                            <p className="text-gray-400 text-xs mt-8">
                                <strong>Effective Date:</strong> February 10, 2025
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsConditions;