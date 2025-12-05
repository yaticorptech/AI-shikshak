import React, { useState } from "react";

export default function AgreementPage() {
  const [faqOpen, setFaqOpen] = useState(null);

  const faqs = [
    {
      q: "Who can become a AI Shikshak Partner?",
      a: "Anyone interested in promoting AI Shikshak—students, teachers, professionals, freelancers, or business owners—can join the program.",
    },
    {
      q: "Do I need to invest or pay anything to join?",
      a: "No. Joining the Partner Program is completely free. There are no registration or membership fees.",
    },
    {
      q: "How much commission can I earn?",
      a: "You earn based on tiered slabs after completing the required minimum (see Terms). Commission is paid only when eligibility thresholds are met.",
    },
    {
      q: "Is there a limit to how many sales I can make?",
      a: "No. There is no upper limit. You can earn unlimited commission based on your performance.",
    },
    {
      q: "How and when will I receive my commission?",
      a: "Commission is settled in 10 days. Payment is sent directly to your bank account provided in your Partner Form.",
    },
    {
      q: "Can I collect money directly from customers?",
      a: "No. All payments must go directly to the Company’s account through official channels. Partners cannot hold customer payments.",
    },
    {
      q: "Will I get marketing materials or training?",
      a: "Yes. Partners receive digital flyers, sales scripts, social media content and basic product training provided by Yaticorp’s official team.",
    },
    {
      q: "Can I give customers discounts or offers?",
      a: "No. Partners must follow official pricing only. Unauthorized discounts will lead to termination of partnership.",
    },
    {
      q: "Can I sell in any city or state?",
      a: "Yes. You are free to sell anywhere in India, online or offline.",
    },
    {
      q: "What happens if I fail to meet the minimum sales requirement in a month?",
      a: "You will not be eligible for commission for that month, but you can continue selling next month and qualify again.",
    },
    {
      q: "Will Yaticorp provide leads?",
      a: "Leads may or may not be provided. Partners are primarily responsible for sourcing their own prospects.",
    },
    {
      q: "Can I represent myself as a Channel Partner of Yaticorp?",
      a: "Yes. You are an Independent Partner, not an employee, agent, or representative of the company.",
    },
    {
      q: "What if a customer wants a demo or more information?",
      a: "You may share approved videos, presentations, or contact details of the support team. Do not create your own pricing or promotional content.",
    },
    {
      q: "Can I promote other companies or AI products?",
      a: "No. Partners cannot work with competing products during active participation.",
    },
    {
      q: "How do I exit the Partner Program?",
      a: "You can exit anytime by informing the team. All confidential materials must be deleted, and outstanding commissions (for verified sales) will be settled.",
    },
  ];

  const tiers = [
    { range: "25 - 49", rate: "₹100 per registration" },
    { range: "50 - 99", rate: "₹125 per registration" },
    { range: "100 - 199", rate: "₹150 per registration" },
    { range: "200 - 299", rate: "₹175 per registration" },
    { range: "300+", rate: "₹200 per registration" },
  ];

  return (
    <div className="w-full bg-blue-50 py-10 px-4 mt-10">
      <section className="bg-white border border-blue-300 xl:rounded-2xl shadow-2xl max-w-7xl w-full p-8 sm:p-12 mx-auto mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-blue-900">
          <span className="text-blue-600">Terms & Conditions</span>
        </h2>

        <p className="text-center text-blue-700 mb-12 text-base sm:text-lg">
          Yaticorp India Pvt Ltd -- AI Shikshak Partner Program
        </p>

        <div className="bg-blue-100 border border-blue-200 rounded-xl p-6 sm:p-8 space-y-6 text-blue-900 text-sm sm:text-base leading-relaxed">
          <div>
            <p className="font-semibold text-blue-700 text-lg mb-4">
              Yaticorp India Pvt Ltd -- AI Shikshak Partner Program
            </p>
            <p className="text-sm text-blue-600 mb-6">
              These Terms and Conditions ("T&C") govern the role,
              responsibilities, and incentive structure for any individual or
              entity ("Partner") who participates in the Yaticorp Business
              Development Partner Program.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-blue-900 text-xl mb-3">
                1. Role and Authorization
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-blue-800">
                <li>
                  <span className="font-semibold">Purpose:</span> The Partner is
                  authorized to promote, market, and sell AI products offered by
                  Yaticorp.
                </li>
                <li>
                  <span className="font-semibold">Authorized Market:</span>{" "}
                  Schools, Colleges, Students, Individual learners, and
                  Educational bodies.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-blue-900 text-xl mb-3">
                2. Sales and Payment Protocol
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-blue-800">
                <li>
                  <span className="font-semibold">Direct Payments:</span>{" "}
                  Payments must be made directly to Yaticorp.
                </li>
                <li>
                  <span className="font-semibold">Prohibition:</span> The
                  Partner cannot collect any payments.
                </li>
                <li>
                  <span className="font-semibold">Activation:</span> Activation
                  begins only after full payment is verified.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-blue-900 text-xl mb-3">
                3. 💰 Earning Structure (Tiered Payout)
              </h3>

              <div className="mb-4">
                <h4 className="font-semibold text-blue-700 mb-2">
                  3.1 Eligibility for Earning (Weekly Threshold)
                </h4>
                <ul className="list-disc pl-6 space-y-2 text-blue-800">
                  <li>
                    Minimum of 25 verified sales/registrations per week is
                    required.
                  </li>
                  <li>
                    If threshold is met, incentives apply to all sales for that
                    cycle.
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-blue-700 mb-2">
                  3.2 Incentive Rate Tiers
                </h4>

                <p className="mb-3 text-blue-800">
                  Incentive increases with higher verified sales:
                </p>

                <p className="font-semibold text-blue-900 mb-4">
                  To qualify for any payout, a minimum of 25 weekly verified
                  sales is essential.
                </p>

                <div className="bg-blue-100 border border-blue-200 rounded-lg p-4 mb-4">
                  <table className="w-full text-sm text-blue-900">
                    <thead>
                      <tr className="border-b border-blue-300">
                        <th className="py-2 text-left font-semibold">
                          Total Verified Sales (in cycle)
                        </th>
                        <th className="py-2 text-left font-semibold">
                          Payout Rate (Per Sale)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-blue-200">
                        <td className="py-2 font-semibold">25 - 49</td>
                        <td className="py-2 font-semibold">₹100</td>
                      </tr>
                      <tr className="border-b border-blue-200">
                        <td className="py-2 font-semibold">50 - 99</td>
                        <td className="py-2 font-semibold">₹125</td>
                      </tr>
                      <tr className="border-b border-blue-200">
                        <td className="py-2 font-semibold">100 - 199</td>
                        <td className="py-2 font-semibold">₹150</td>
                      </tr>
                      <tr className="border-b border-blue-200">
                        <td className="py-2 font-semibold">200 - 299</td>
                        <td className="py-2 font-semibold">₹175</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-semibold">300+</td>
                        <td className="py-2 font-semibold">₹200</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-blue-700 mb-2">
                  3.3 Illustrative Examples
                </h4>

                <div className="bg-blue-100 border border-blue-200 rounded-lg p-4">
                  <table className="w-full text-xs sm:text-sm text-blue-900">
                    <thead>
                      <tr className="border-b border-blue-300">
                        <th className="py-2 text-left font-semibold">
                          Total Sales
                        </th>
                        <th className="py-2 text-left font-semibold">
                          Threshold Met?
                        </th>
                        <th className="py-2 text-left font-semibold">
                          Rate Applied
                        </th>
                        <th className="py-2 text-left font-semibold">
                          Total Earnings
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-blue-200">
                        <td className="py-2">24</td>
                        <td className="py-2">No</td>
                        <td className="py-2">—</td>
                        <td className="py-2 font-semibold">₹0</td>
                      </tr>
                      <tr className="border-b border-blue-200">
                        <td className="py-2">40</td>
                        <td className="py-2">Yes</td>
                        <td className="py-2">₹100</td>
                        <td className="py-2 font-semibold">₹4,000</td>
                      </tr>
                      <tr className="border-b border-blue-200">
                        <td className="py-2">75</td>
                        <td className="py-2">Yes</td>
                        <td className="py-2">₹125</td>
                        <td className="py-2 font-semibold">₹9,375</td>
                      </tr>
                      <tr className="border-b border-blue-200">
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

              <div>
                <h4 className="font-semibold text-blue-700 mb-2">
                  3.4 Modification Clause
                </h4>
                <p className="text-blue-800">
                  Yaticorp may update the payout structure with a 7-day notice.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-blue-900 text-xl mb-3">
                4. Partner Responsibilities
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-blue-800">
                <li>Promote ethically and professionally.</li>
                <li>Use approved marketing content only.</li>
                <li>No false commitments or manipulated pricing.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-blue-900 text-xl mb-3">
                5. Restrictions and Prohibitions
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-blue-800">
                <li>Cannot represent as employee/agent of Yaticorp.</li>
                <li>No unauthorized commitments.</li>
                <li>No customer payment handling.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-blue-900 text-xl mb-3">
                6. Confidentiality
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-blue-800">
                <li>All internal material is confidential.</li>
                <li>Partner must not share or misuse information.</li>
                <li>Breach leads to termination & legal consequences.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-blue-900 text-xl mb-3">
                7. Relationship Status & Termination
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-blue-800">
                <li>Partner works as an Independent Contractor.</li>
                <li>Fraud or misconduct leads to termination.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-blue-900 text-xl mb-3">
                8. General Provisions
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-blue-800">
                <li>
                  <span className="font-semibold">IP:</span> All assets belong
                  to Yaticorp.
                </li>
                <li>
                  <span className="font-semibold">Jurisdiction:</span> Bangalore
                  courts only.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-blue-300">
            <p className="text-sm text-blue-700 italic">
              By accepting these T&C, the Partner agrees to all terms stated
              above.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
