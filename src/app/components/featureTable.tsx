// components/FeaturesTable.js
export default function FeaturesTable() {
  return (
    <div className="col-10 mx-auto p-6 ">
      <div className="flex mb-3">
        <div className="col-md-6">
          <h2 className="text-[26px] font-bold">What&apos;s included?</h2>
        </div>
        <div className="col-md-3">
          <h2 className="text-[18px] text-center font-bold mb-6">
            What&apos;s included?
          </h2>
        </div>
        <div className="col-md-3">
          <h2 className="text-[18px] text-center font-bold mb-6">
            What&apos;s included?
          </h2>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden">
        {/* Header Row */}

        <div className="col-md-10">
          <p className="text-[18px] font-semibold">Formation</p>
        </div>
        {/* Formation Filings */}
        <div className="row bg-[#f3efe7] rounded-4 mx-0 py-4 px-3 mb-4">
          <div className="col-md-6 py-2">
            <h3 className="fw-semibold leading-[40px] text-[18px]">Formation Filings</h3>
            <p className="text-[15px] text-[#666666] font-[400] mt-2">
              Cloud BSS navigates the complexities of business formation with the state. A step by step wizard guides you through organizing member information, picking a company name, and more. doola’s experts handle all the paperwork to ensure compliance with state regulations. 
            </p>
          </div>

          <div className="col-md-3 d-flex align-items-center justify-content-center">
            <span className="text-[16px] font-[400] text-black">✔</span>
          </div>

          <div className="col-md-3 d-flex align-items-center justify-content-center">
            <span className="text-[16px] font-[400] text-black">✔</span>
          </div>
        </div>

        {/* EIN */}
        <div className="row rounded-4 mx-0 py-4 px-3 mb-2">
          <div className="col-md-6">
            <h3 className="fw-semibold text-[18px]">EIN</h3>
            <p className="text-[15px] mt-2 font-[400] text-[#666666]">
              Cloud BSS navigates the complexities of business formation with
              the state. A step-by-step wizard guides you through organizing
              member information, picking a company name, and more. doola’s
              experts handle all the paperwork to ensure compliance with state
              regulations.
            </p>
          </div>

          <div className="col-md-3 d-flex align-items-center justify-content-center">
            <span className="text-[16px] font-[400] text-black">✔</span>
          </div>

          <div className="col-md-3 d-flex align-items-center justify-content-center">
            <span className="text-[16px] font-[400] text-black">✔</span>
          </div>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden">
        {/* Header Row */}

        <div className="col-md-10">
          <p className="text-[18px] font-semibold">Compliance</p>
        </div>
        {/* Formation Filings */}
        <div className="row bg-[#f3efe7] rounded-4 mx-0 py-4 px-3 mb-4">
          <div className="col-md-6 py-2">
            <h3 className="fw-semibold leading-[40px] text-[18px]">Registered Agent Service </h3>
            <p className="text-[15px] text-[#666666] font-[400] mt-2">
              Ensure compliance and receive a level of privacy from Cloud BSS Registered Agents. Available to act as your address of record with the state, they receive and forward legal documents, tax notices, and other official correspondence from the state or Internal Revenue Service (IRS).
            </p>
          </div>

          <div className="col-md-3 d-flex align-items-center justify-content-center">
            <span className="text-[16px] font-[400] text-black">✔</span>
          </div>

          <div className="col-md-3 d-flex align-items-center justify-content-center">
            <span className="text-[16px] font-[400] text-black">✔</span>
          </div>
        </div>

        {/* EIN */}
        <div className="row rounded-4 mx-0 py-4 px-3 mb-2">
          <div className="col-md-6">
            <h3 className="fw-semibold text-[18px]">Operating Agreement (LLCs only)</h3>
            <p className="text-[15px]  text-[#666666] font-[400] mt-2">
              Cloud BSS navigates the complexities of business formation with
              the state. A step-by-step wizard guides you through organizing
              member information, picking a company name, and more. doola’s
              experts handle all the paperwork to ensure compliance with state
              regulations.
            </p>
          </div>

          <div className="col-md-3 d-flex align-items-center justify-content-center">
            <span className="text-[16px] font-[400] text-black">✔</span>
          </div>

          <div className="col-md-3 d-flex align-items-center justify-content-center">
            <span className="text-[16px] font-[400] text-black">✔</span>
          </div>
        </div>
        <div className="row bg-[#f3efe7] rounded-4 mx-0 py-4 px-3 mb-5">
          <div className="col-md-6 py-2">
            <h3 className="fw-semibold leading-[40px] text-[18px]">Annual State Filings</h3>
            <p className="text-[15px] text-[#666666] font-[400] mt-2">
              Many states require yearly updates about company structure and charge performance based compliance fees, often called a Franchise Tax. doola handles the calculations and sends updates on your behalf.State charges are not included as part of the filing.
            </p>
          </div>

          <div className="col-md-3 d-flex align-items-center justify-content-center">
            <span className="text-[16px] font-[400] text-black">+$199 /yr</span>
          </div>

          <div className="col-md-3 d-flex align-items-center justify-content-center">
            <span className="text-[16px] font-[400] text-black">✔</span>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden">
          {/* Header Row */}

          <div className="col-md-10">
            <p className="text-[18px] font-semibold">Tax Support</p>
          </div>
          {/* Formation Filings */}
          <div className="row bg-[#f3efe7] rounded-4 mx-0 py-4 px-3 mb-4">
            <div className="col-md-6 py-2">
              <h3 className="fw-semibold leading-[40px] text-[18px]">CPA Consultation</h3>
              <p className="text-[15px] text-[#666666] font-[400] mt-2">
                Phone consultation with a licensed professional working with doola to provide valuable insights and decision making assistance in fields related to taxation, accounting, and other financial matters.
              </p>
            </div>

            <div className="col-md-3 d-flex align-items-center justify-content-center">
              <span className="text-[16px] font-[400] text-black">+$300 /hr</span>
            </div>

            <div className="col-md-3 d-flex align-items-center justify-content-center">
              <span className="text-[16px] font-[400] text-black">1 Free Consultation</span>
            </div>
          </div>

          {/* EIN */}
          <div className="row rounded-4 mx-0 py-4 px-3 mb-2">
            <div className="col-md-6">
              <h3 className="fw-semibold text-[18px]">IRS Tax Filings</h3>
              <p className="text-[15px] mt-2 font-[400] text-[#666666]">
                Cloud BSS can prepare your annual tax return for submission to the Internal Revenue Service (IRS). Experts at doola will keep you informed of changes to tax aws and help you claim any applicable credits.
              </p>
            </div>

            <div className="col-md-3 d-flex align-items-center justify-content-center">
              <span className="text-[16px] font-[400] text-black">+$1,200 /yr</span>
            </div>

            <div className="col-md-3 d-flex align-items-center justify-content-center">
              <span className="text-[16px] font-[400] text-black">✔</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden mb-3">
          {/* Header Row */}

          <div className="col-md-10">
            <p className="text-[18px] font-semibold">Financial management</p>
          </div>
          {/* Formation Filings */}
          <div className="row bg-[#f3efe7] rounded-4 mx-0 py-4 px-3 mb-4">
            <div className="col-md-6 py-2">
              <h3 className="fw-semibold leading-[40px] text-[18px]">Bookkeeping Software</h3>
              <p className="text-[15px] text-[#666666] font-[400] mt-2">
                Track your expenses, income, and tax deductions in real time. Simply classify a few transactions and doola Books will learn to classify them automatically in the future. Generate core financial documents like an Income Statement or Balance Sheet.
              </p>
            </div>

            <div className="col-md-3 d-flex align-items-center justify-content-center">
              <span className="text-[16px] font-[400] text-black">+$300 /hr</span>
            </div>

            <div className="col-md-3 d-flex align-items-center justify-content-center">
              <span className="text-[16px] font-[400] text-black">✔</span>
            </div>
          </div>


        </div>

        <div className="rounded-lg overflow-hidden">
          {/* Header Row */}

          <div className="col-md-10">
            <p className="text-[18px] font-semibold">Customer Service</p>
          </div>
          {/* Formation Filings */}
          <div className="row bg-[#f3efe7] rounded-4 mx-0 py-4 px-3 mb-4">
            <div className="col-md-6 py-2">
              <h3 className="fw-semibold leading-[40px] text-[18px]">Dedicated Account Manager</h3>
              <p className="text-[15px] text-[#666666] font-[400] mt-2">
                Get a dedicated account manager with white glove support to help you run and grow your business.
              </p>
            </div>

            <div className="col-md-3 d-flex align-items-center justify-content-center">
              <span className="text-[16px] font-[400] text-black">+$600 /yr</span>
            </div>

            <div className="col-md-3 d-flex align-items-center justify-content-center">
              <span className="text-[16px] font-[400] text-black">✔</span>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
