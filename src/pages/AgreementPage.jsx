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
    <div className="w-full bg-gray-50 py-10 px-4 mt-10">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Hero */}
        <section className="bg-white p-6 md:p-10 rounded-2xl shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700">
            Become AI Shikshak Partner
          </h1>
          <p className="mt-4 text-gray-700 text-lg md:text-xl text-center leading-relaxed">
            Ready to earn big? Join the Yaticorp AI Shikshak Partner Program!
            Introduce game-changing AI tools to schools & institutions across
            India with unlimited earning potential.
          </p>
        </section>

        {/* Features */}
        <section className="bg-white p-6 md:p-10 rounded-2xl shadow-lg space-y-6">
          <h2 className="text-2xl font-bold text-blue-600">
            Partnering for Educational Revolution
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This is more than just a partnership—it's your chance to step into
            the future of EdTech and build significant income on your own terms!
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                Maximum Earnings
              </h3>
              <p className="text-gray-600">
                Unlock powerful tiered commissions that reward top performers.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                Be Your Own Boss
              </h3>
              <p className="text-gray-600">
                Work anytime as an Independent Contractor with full flexibility.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                High-Value Product
              </h3>
              <p className="text-gray-600">
                Promote a powerful AI learning tool that schools genuinely need.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ (Single Column) */}
        <section className="bg-white p-6 md:p-10 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="border rounded-xl p-4 md:p-6 bg-gray-50">
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="w-full text-left flex items-center justify-between"
                >
                  <span className="font-semibold text-gray-800">
                    {i + 1}. {f.q}
                  </span>
                  <span className="text-gray-500">
                    {faqOpen === i ? "−" : "+"}
                  </span>
                </button>

                {faqOpen === i && <p className="text-gray-600 mt-3">{f.a}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Terms & Conditions (Below FAQ) */}
        <section className="bg-white p-6 md:p-10 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Terms & Conditions (Summary)
          </h2>

          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>
              <strong>1. Role and Authorization:</strong> Partners can promote
              AI Shikshak to approved customers including schools, colleges,
              students and institutions.
            </p>
            <p>
              <strong>2. Sales and Payment:</strong> All payments must go
              directly to Yaticorp official channels. Partners cannot collect or
              hold payments.
            </p>
            <p>
              <strong>3. Earning Structure:</strong> Tiered payouts depending on
              total verified sales. Eligibility rules apply.
            </p>
            <p>
              <strong>4. Responsibilities:</strong> Use only approved marketing
              materials and follow official pricing.
            </p>
            <p>
              <strong>5. Restrictions:</strong> Cannot collect payments or
              provide unauthorized pricing. No competing product promotion while
              active.
            </p>
            <p>
              <strong>6. Confidentiality:</strong> Must protect internal
              information. Breach leads to termination and potential legal
              action.
            </p>
            <p>
              <strong>7. Termination:</strong> Yaticorp may remove partners
              violating terms; verified earnings before termination will be
              payable.
            </p>
            <p className="text-sm text-gray-500">
              Jurisdiction: Courts of Bangalore, Karnataka, India.
            </p>
          </div>
        </section>

        {/* Earnings Table (Below T&C) */}
        <section className="bg-white p-6 md:p-10 rounded-2xl shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Earning Structure (Tiered Payout)
          </h3>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left">
                    Total Verified Sales (in cycle)
                  </th>
                  <th className="px-4 py-3 text-left">Payout Rate</th>
                </tr>
              </thead>
              <tbody>
                {tiers.map((t, idx) => (
                  <tr key={idx} className="border-t">
                    <td className="px-4 py-3">{t.range}</td>
                    <td className="px-4 py-3">{t.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-sm text-gray-600">
            Eligibility: To qualify for any sales payout in a billing cycle, the
            Partner must achieve a minimum of 25 verified sales exclusively
            within the first week. If eligibility is met, the incentive applies
            to all sales in that cycle.
          </p>

          <div className="mt-4 bg-gray-50 p-4 rounded">
            <h4 className="font-semibold">Illustrative Examples</h4>
            <ul className="mt-2 text-gray-700 list-disc pl-5">
              <li>24 total sales — Eligibility not met → ₹0</li>
              <li>40 total sales — Eligible at ₹100 → ₹4,000</li>
              <li>75 total sales — Eligible at ₹125 → ₹9,375</li>
              <li>250 total sales — Eligible at ₹175 → ₹43,750</li>
              <li>350 total sales — Eligible at ₹200 → ₹70,000</li>
            </ul>
          </div>

          <p className="mt-3 text-sm text-gray-500">
            Modification Clause: Yaticorp may modify incentive slabs with 7 days
            written notice.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-white p-6 md:p-10 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-blue-600">
            Ready to build your income and your legacy?
          </h2>
          <p className="text-gray-700 mt-2">
            Become a partner, help students learn better, and watch your income
            soar. There's no cap on earnings — grow with us.
          </p>
        </section>

        <section className="text-center">
          <p className="text-gray-600">
            Terms & Conditions of Yaticorp India Pvt Ltd — AI Shikshak Partner
            Program.
          </p>
        </section>
      </div>
    </div>
  );
}
