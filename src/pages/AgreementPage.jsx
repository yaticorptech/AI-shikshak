import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const AgreementPage = () => {
  const loc = useLocation();
  const partner = loc.state;

  const pdfRef = useRef();

  // Today's date in dd/mm/yyyy format
  const today = new Date();
  const formattedDate = `${String(today.getDate()).padStart(2, "0")}/${String(
    today.getMonth() + 1
  ).padStart(2, "0")}/${today.getFullYear()}`;

  const downloadPDF = async () => {
    const element = pdfRef.current;

    // Force desktop width before capture
    const originalWidth = element.style.width;
    const originalTransform = element.style.transform;

    element.style.width = "794px";
    element.style.transform = "scale(1)";
    element.style.transformOrigin = "top left";

    const canvas = await html2canvas(element, { scale: 2 });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(`${partner.Name}_Agreement.pdf`);

    // Reset to original responsive mode
    element.style.width = originalWidth;
    element.style.transform = originalTransform;
  };

  return (
    <div className="p-5 font-[Times_New_Roman] bg-gradient-to-b from-blue-50 to-gray-100">
      <div
        ref={pdfRef}
        className="
      p-6
      border-2 
      border-gray-300
      bg-white     
      mx-auto 
      font-[Times_New_Roman]
      text-[16px]
      leading-relaxed
      max-w-[794px]  
      w-full
      mt-12
    "
      >
        <h1 className="text-center text-2xl md:text-3xl mb-6 font-bold">
          PARTNERSHIP AGREEMENT WITH NDA
        </h1>
        <p>
          This agreement is made and executed at Karnataka on{" "}
          <strong>{formattedDate}</strong>, between:
        </p>
        <p className="mt-4">
          <strong>YATICORP INDIA PVT LTD</strong>, a company incorporated under
          the Companies Act, 2013, having its registered office at Bangalore,
          No.677, 1st floor, suit no.899, HSR Layout, Sector-1-560102, acting
          through its Director <strong>Yatheesha KS</strong>, hereinafter
          referred to as the <strong>First Party</strong>.
        </p>
        <p className="mt-4">
          <strong>AND</strong>
          <br />
          Partner: <strong>{partner.Name}</strong>
          <br />
          {partner.Address}, {partner.pan}, {partner.Aadhar}
        </p>
        <p className="mt-4">
          WHEREAS, the First Party is engaged in the business of selling and
          marketing AI Shikshak. The Company and the Partner shall collectively
          be referred to as the “Parties.”
        </p>
        {/* SECTION 1 */}
        <h2 className="text-xl font-bold mt-6 mb-2">1. DEFINITIONS</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>"Clause" means a clause of this Agreement.</li>
          <li>"Month" means an English calendar month.</li>
          <li>
            "Opening Date" means the date of commencement of the usage of the
            product.
          </li>
        </ul>
        {/* SECTION 2 */}
        <h2 className="text-xl font-bold mt-6 mb-2">2. PURPOSE</h2>
        <p>
          The Company appoints the Partner/s to act as a Business Development
          Partner / Representative to promote, market, and sell AI Shikshak
          products and services strictly on a commission basis.
        </p>
        {/* SECTION 3 */}
        <h2 className="text-xl font-bold mt-6 mb-2">
          3. SCOPE OF WORK & AUTHORISED MARKET
        </h2>
        <p>
          The Partner is authorised solely to market and sell AI Shikshak
          services to:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Schools</li>
          <li>Colleges</li>
          <li>Students</li>
          <li>Individual Learners</li>
        </ul>
        <p className="mt-2">
          The Partner may not engage in marketing or selling outside the above
          categories without prior written approval.
        </p>
        {/* SECTION 4 */}
        <h2 className="text-xl font-bold mt-10 mb-2">
          4. COMMISSION & PAYMENT TERMS
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>The Partner will receive commission as per Annexure.</li>
          <li>All customer payments must be made directly to the Company.</li>
          <li>The Partner is strictly prohibited from collecting payments.</li>
          <li>Commission will be paid monthly after verification of sales.</li>
          <li>
            Illegal fund collection will lead to immediate termination and legal
            action.
          </li>
        </ul>
        {/* SECTION 5 */}
        <br />
        <br />
        <br />
        <h2 className="text-xl font-bold mt-6 mb-2">
          5. PARTNER RESPONSIBILITIES
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Represent AI Shikshak professionally.</li>
          <li>Use only approved marketing materials.</li>
          <li>No false promises or pricing changes.</li>
          <li>Provide regular updates on leads and sales.</li>
          <li>Follow all Company policies.</li>
        </ul>
        {/* SECTION 6 */}
        <h2 className="text-xl font-bold mt-6 mb-2">6. RESTRICTIONS</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Present themselves as an employee or legal representative of the
            Company.
          </li>
          <li>Enter into agreements on behalf of the Company.</li>
          <li>Share confidential information or internal strategies.</li>
          <li>
            Engage with or promote competing businesses without written
            approval.
          </li>
        </ul>
        {/* SECTION 7 */}
        <h2 className="text-xl font-bold mt-6 mb-2">
          7. RELATIONSHIP OF PARTIES
        </h2>
        <p>
          The Partner is an Independent Contractor. No employer-employee or
          agency relationship is created.
        </p>
        {/* SECTION 8 */}
        <h2 className="text-xl font-bold mt-6 mb-2">8. TERM & TERMINATION</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Valid for [12 months / until terminated].</li>
          <li>Either party may terminate with [DAYS] notice.</li>
          <li>
            Immediate termination for misconduct, breach, fraud, or violation.
          </li>
          <li>Commission on verified sales up to termination will be paid.</li>
        </ul>
        {/* SECTION 9 */}
        <h2 className="text-xl font-bold mt-10 mb-2">
          9. NON-DISCLOSURE AGREEMENT (NDA)
        </h2>
        <h3 className="font-bold mt-4">
          9.1 Definition of Confidential Information
        </h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Customer databases and leads</li>
          <li>Pricing, business plans, financial details</li>
          <li>Product details, training materials</li>
          <li>Technical data and intellectual property</li>
        </ul>
        <h3 className="font-bold mt-6">9.2 Obligations</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Maintain strict confidentiality.</li>
          <li>Not copy, disclose, or misuse information.</li>
          <li>Return/destroy confidential material upon termination.</li>
        </ul>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h3 className="font-bold mt-6">9.3 Exceptions</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Information already public.</li>
          <li>Information legally obtained.</li>
        </ul>
        <h3 className="font-bold mt-6">9.4 Penalties</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Immediate termination.</li>
          <li>Legal action for damages.</li>
          <li>Forfeiture of unpaid commission.</li>
        </ul>
        {/* SECTION 10 */}
        <h2 className="text-xl font-bold mt-6 mb-2">
          10. INTELLECTUAL PROPERTY
        </h2>
        <p>
          All logos, content, and digital assets remain Company property and may
          not be altered or misused.
        </p>
        {/* SECTION 11 */}
        <h2 className="text-xl font-bold mt-6 mb-2">11. JURISDICTION</h2>
        <p>All disputes shall be adjudicated in the courts of Bangalore.</p>
        {/* SECTION 12 */}
        <h2 className="text-xl font-bold mt-6 mb-2">12. ANNEXURE</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Price Slabs</li>
          <li>Eligibility for Commission</li>
          <li>Pay Scale</li>
        </ul>
        {/* SIGNATURES */}
        <h2 className="text-xl font-bold mt-10 mb-4">
          13. ACCEPTANCE & SIGNATURES
        </h2>
        <div className="flex flex-col md:flex-row justify-between gap-8 mt-10">
          <div className="md:w-1/2 text-left">
            <p>
              <strong>For YATICORP INDIA Pvt Ltd (First Party)</strong>
            </p>
            <p>Authorized Signatory</p>
            <p>Name: Yatheesha KS</p>
            <p>Title: CEO</p>
            <p>Date: {formattedDate}</p>
          </div>

          <div className="md:w-1/3 text-left">
            <p>
              <strong>For Second Party</strong>
            </p>
            <p>Authorized Signatory</p>
            <p>Name: {partner.Name}</p>
            <p>Title: Partner</p>
            <p>Date: {formattedDate}</p>
          </div>
        </div>
        {/* WITNESSES */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mt-12">
          <div className="md:w-1/2 text-left">
            <p>
              <strong>First Party Witness</strong>
            </p>
            <p>Witness Name:</p>
            <p>Address:</p>
            <br />
            <p>Signature:</p>
          </div>

          <div className="md:w-1/3 text-left">
            <p>
              <strong>Second Party Witness</strong>
            </p>
            <p>Witness Name:</p>
            <p>Address:</p>
            <br />
            <p>Signature:</p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-8">
        <button
          onClick={downloadPDF}
          className="px-6 py-3 bg-blue-600 text-white rounded-md text-lg"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default AgreementPage;
