import React, { useState } from "react";

export default function AgreementPage() {
  const [faqOpen, setFaqOpen] = useState(null);

  const tiers = [
    { range: "25 - 49", rate: "₹100 per registration" },
    { range: "50 - 99", rate: "₹125 per registration" },
    { range: "100 - 199", rate: "₹150 per registration" },
    { range: "200 - 299", rate: "₹175 per registration" },
    { range: "300+", rate: "₹200 per registration" },
  ];

  return (
    <section className="bg-white py-10 px-4 mt-10">
      <div className="bg-blue-900/90 backdrop-blur-md border border-blue-300/40 xl:rounded-2xl shadow-2xl max-w-7xl w-full p-8 sm:p-12 mx-auto mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-white">
          <span className="text-blue-300">Terms & Conditions</span>
        </h2>

        <p className="text-center text-blue-100 mb-12 text-base sm:text-lg">
          Yaticorp India Pvt Ltd — AI Shikshak Partner Program
        </p>

        <div className="bg-blue-800/40 border border-blue-300/20 rounded-xl p-6 sm:p-8 space-y-6 text-blue-100 text-sm sm:text-base leading-relaxed">
          <div>
            <p className="font-semibold text-blue-200 text-lg mb-4">
              Yaticorp India Pvt Ltd — AI Shikshak Partner Program
            </p>
            <p className="text-sm text-blue-200/80 mb-6">
              These Terms and Conditions ("T&C") govern the role,
              responsibilities, and incentive structure for any individual or
              entity ("Partner") who participates in the Yaticorp Business
              Development Partner Program. By accepting these T&C, the Partner
              acknowledges and agrees to abide by all rules and stipulations
              detailed below.
            </p>
          </div>

          {/* SECTION 1 */}
          <div>
            <h3 className="font-bold text-white text-xl mb-3">
              1. Role and Authorization
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-semibold">Purpose:</span> The Partner is
                authorized to promote, market, and sell AI products offered by
                Yaticorp India Pvt Ltd (Yaticorp), including AI Shikshak,
                strictly on an incentive-only basis.
              </li>
              <li>
                <span className="font-semibold">Authorized Market:</span>{" "}
                Partners may sell and market products to Schools, Colleges,
                Students, Individual learners, and Educational
                Institutions/Organizations.
              </li>
            </ul>
          </div>

          {/* SECTION 2 */}
          <div>
            <h3 className="font-bold text-white text-xl mb-3">
              2. Sales and Payment Protocol
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-semibold">Direct Payments:</span> All
                customer payments must be made directly to Yaticorp India Pvt
                Ltd via official channels.
              </li>
              <li>
                <span className="font-semibold">Prohibition:</span> The Partner
                is prohibited from collecting or handling customer payments.
              </li>
              <li>
                <span className="font-semibold">Activation:</span> Product
                activation happens only after full verified payment.
              </li>
            </ul>
          </div>

          {/* SECTION 3 */}
          <div>
            <h3 className="font-bold text-white text-xl mb-3">
              3. 💰 Earning Structure (Tiered Payout)
            </h3>

            {/* 3.1 */}
            <div className="mb-4">
              <h4 className="font-semibold text-blue-200 mb-2">
                3.1 Eligibility for Earning (Weekly Threshold)
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  The Partner must achieve a minimum of 25 verified
                  sales/registrations within a single week to qualify.
                </li>
                <li>
                  If the weekly eligibility is met, incentives are paid for all
                  sales made in that billing cycle.
                </li>
              </ul>
            </div>

            {/* 3.2 */}
            <div className="mb-4">
              <h4 className="font-semibold text-blue-200 mb-2">
                3.2 Incentive Rate Tiers
              </h4>
              <p className="mb-3">
                The incentive rate depends on the total number of verified sales
                in the billing cycle:
              </p>

              <p className="font-semibold text-yellow-300 mb-4">
                To qualify for payout, the Partner must achieve 25 verified
                sales in the first week.
              </p>

              <div className="bg-blue-700/30 border border-blue-300/20 rounded-lg p-4 mb-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-blue-300/20">
                      <th className="py-2 text-left font-semibold">
                        Total Verified Sales
                      </th>
                      <th className="py-2 text-left font-semibold">
                        Payout Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-blue-300/10">
                      <td className="py-2 font-semibold">25 - 49</td>
                      <td className="py-2 font-semibold">
                        ₹100 per registration
                      </td>
                    </tr>
                    <tr className="border-b border-blue-300/10">
                      <td className="py-2 font-semibold">50 - 99</td>
                      <td className="py-2 font-semibold">
                        ₹125 per registration
                      </td>
                    </tr>
                    <tr className="border-b border-blue-300/10">
                      <td className="py-2 font-semibold">100 - 199</td>
                      <td className="py-2 font-semibold">
                        ₹150 per registration
                      </td>
                    </tr>
                    <tr className="border-b border-blue-300/10">
                      <td className="py-2 font-semibold">200 - 299</td>
                      <td className="py-2 font-semibold">
                        ₹175 per registration
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 font-semibold">300+</td>
                      <td className="py-2 font-semibold">
                        ₹200 per registration
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3.3 */}
            <div className="mb-4">
              <h4 className="font-semibold text-blue-200 mb-2">
                3.3 Illustrative Payout Examples
              </h4>

              <div className="bg-blue-700/30 border border-blue-300/20 rounded-lg p-4">
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-blue-300/20">
                      <th className="py-2 text-left font-semibold">
                        Total Sales
                      </th>
                      <th className="py-2 text-left font-semibold">
                        Eligibility
                      </th>
                      <th className="py-2 text-left font-semibold">Rate</th>
                      <th className="py-2 text-left font-semibold">
                        Total Earning
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-blue-300/10">
                      <td className="py-2">24</td>
                      <td className="py-2">No</td>
                      <td className="py-2">(Below 25)</td>
                      <td className="py-2 font-semibold">₹0</td>
                    </tr>
                    <tr className="border-b border-blue-300/10">
                      <td className="py-2">40</td>
                      <td className="py-2">Yes</td>
                      <td className="py-2">₹100</td>
                      <td className="py-2 font-semibold">₹4,000</td>
                    </tr>
                    <tr className="border-b border-blue-300/10">
                      <td className="py-2">75</td>
                      <td className="py-2">Yes</td>
                      <td className="py-2">₹125</td>
                      <td className="py-2 font-semibold">₹9,375</td>
                    </tr>
                    <tr className="border-b border-blue-300/10">
                      <td className="py-2">250</td>
                      <td className="py-2">Yes</td>
                      <td className="py-2">₹175</td>
                      <td className="py-2 font-semibold">₹43,750</td>
                    </tr>
                    <tr>
                      <td className="py-2">350</td>
                      <td className="py-2">Yes</td>
                      <td className="py-2">₹200</td>
                      <td className="py-2 font-semibold">₹70,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3.4 */}
            <div>
              <h4 className="font-semibold text-blue-200 mb-2">
                3.4 Modification Clause
              </h4>
              <p>
                Yaticorp India Pvt Ltd reserves the right to modify incentive
                slabs and rates with 7 days notice.
              </p>
            </div>
          </div>

          {/* SECTION 4 */}
          <div>
            <h3 className="font-bold text-white text-xl mb-3">
              4. Partner Responsibilities and Conduct
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Promote AI Shikshak ethically and professionally.</li>
              <li>Use only approved marketing materials.</li>
              <li>Avoid false claims or unauthorized pricing.</li>
              <li>Report leads and sales regularly.</li>
              <li>Follow all Yaticorp policies.</li>
            </ul>
          </div>

          {/* SECTION 5 */}
          <div>
            <h3 className="font-bold text-white text-xl mb-3">
              5. Restrictions and Prohibitions
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cannot claim to be employee/agent of Yaticorp.</li>
              <li>No agreements may be signed on behalf of Yaticorp.</li>
              <li>No customer payment handling.</li>
              <li>No sharing confidential info.</li>
              <li>No promoting competing products.</li>
            </ul>
          </div>

          {/* SECTION 6 */}
          <div>
            <h3 className="font-bold text-white text-xl mb-3">
              6. Non-Disclosure & Confidentiality
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-semibold">Confidential Info:</span>{" "}
                internal pricing, strategies, sales processes, proprietary
                materials.
              </li>
              <li>
                <span className="font-semibold">Obligation:</span> Must keep all
                info confidential.
              </li>
              <li>
                <span className="font-semibold">Breach:</span> Immediate removal
                + forfeiture + legal action.
              </li>
            </ul>
          </div>

          {/* SECTION 7 */}
          <div>
            <h3 className="font-bold text-white text-xl mb-3">
              7. Relationship Status and Termination
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Partner is an Independent Contractor.</li>
              <li>Yaticorp may remove any partner violating rules.</li>
              <li>
                Payout for verified sales before termination remains payable.
              </li>
            </ul>
          </div>

          {/* SECTION 8 */}
          <div>
            <h3 className="font-bold text-white text-xl mb-3">
              8. General Provisions
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-semibold">Intellectual Property:</span>{" "}
                All branding belongs to Yaticorp.
              </li>
              <li>
                <span className="font-semibold">Jurisdiction:</span> Bangalore
                courts have exclusive authority.
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-blue-300/20">
            <p className="text-sm text-blue-100/80 italic">
              By accepting these T&C, the Partner agrees to abide by all rules
              above.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
