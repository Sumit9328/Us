import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MySwiper = () => {
  return (
    <Swiper
      spaceBetween={10} // Space between slides
      loop={true} // Enable infinite loop (optional)
      // navigation={true} // Enable navigation arrows
      modules={[Navigation]} // Use only the Navigation module
      className="items-center"
      navigation={{
        nextEl: '.custom-next', // Reference to your custom Next button
        prevEl: '.custom-prev', // Reference to your custom Previous button
      }}
      breakpoints={{
        640: { // Small screens (Mobile)
          slidesPerView: 1, // 1 slide per view on mobile
        },
        768: { // Medium screens (Tablet)
          slidesPerView: 2, // 2 slides per view on tablet
        },
        1024: { // Large screens (Desktop)
          slidesPerView: 3, // 3 slides per view on desktop
        },
      }}
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="sm:mb-0 col-11">
          <div className="sm:mb-0 w-full sm:w-[100%] bg-[#fffdfa] border-8 border-[#f3efe7] rounded-[32px] px-6 py-6">
            <div>
              <div className="h-[386px]">

                <div className="mb-4">
                  <span className="text-sm rounded-[40px] font-semibold bg-[#F6F6F6] px-3 py-2 text-gray-500">
                    Step 1
                  </span>
                </div>
                <h2 className="text-2xl font-[600] text-gray-800 mb-4">
                  Form your company
                </h2>
                <p className="text-sm text-gray-600 font-[400] mb-6">
                  What we need from you is your:
                </p>
                <ul className="space-y-4">
                  {[
                    { content: "Ideal company name", status: "tick" },
                    {
                      content:
                        "Personal address (it can be anywhere in the world)",
                      status: "tick",
                    },
                    {
                      content: "Email address",
                      status: "tick",
                    },

                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      {item.status === "tick" ? (
                        // Green tick icon with fixed size
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="text-green-500"
                          style={{ minWidth: "24px", minHeight: "24px" }} // Fixed size
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        // Red cross icon with fixed size
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ minWidth: "18px", minHeight: "18px" }} // Fixed size
                        >
                          <path
                            d="M12.3509 11.4195L20.5998 3.17024C20.725 3.04932 20.8249 2.90467 20.8936 2.74474C20.9623 2.58481 20.9984 2.4128 21 2.23875C21.0015 2.0647 20.9683 1.89208 20.9024 1.73098C20.8365 1.56988 20.7391 1.42352 20.6161 1.30044C20.493 1.17736 20.3466 1.08003 20.1855 1.01412C20.0244 0.948208 19.8518 0.915041 19.6778 0.916553C19.5037 0.918066 19.3317 0.954228 19.1718 1.02293C19.0118 1.09163 18.8672 1.19149 18.7463 1.31669L10.497 9.56557L2.24817 1.31669C2.00144 1.07538 1.66949 0.941105 1.32438 0.943006C0.979266 0.944906 0.648824 1.08283 0.404766 1.32684C0.160708 1.57086 0.0227271 1.90128 0.0207655 2.24639C0.0188038 2.5915 0.153021 2.92347 0.394289 3.17024L8.6435 11.4195L0.394289 19.6687C0.270338 19.7899 0.171668 19.9345 0.103991 20.0941C0.0363139 20.2538 0.000974692 20.4252 1.98797e-05 20.5986C-0.000934933 20.772 0.0325137 20.9438 0.0984285 21.1042C0.164343 21.2645 0.261414 21.4102 0.384022 21.5328C0.50663 21.6554 0.652339 21.7524 0.81271 21.8183C0.973082 21.8842 1.14493 21.9176 1.31831 21.9166C1.49168 21.9157 1.66314 21.8803 1.82275 21.8126C1.98236 21.7449 2.12696 21.6462 2.24817 21.5222L10.497 13.2733L18.7463 21.5222C19.0022 21.7782 19.3378 21.9063 19.673 21.9063C20.0083 21.9063 20.3442 21.7782 20.5998 21.5222C20.8456 21.2764 20.9836 20.943 20.9836 20.5954C20.9836 20.2478 20.8456 19.9145 20.5998 19.6687L12.3509 11.4195Z"
                            fill="#EF0000"
                          />
                        </svg>
                      )}
                      <span className="text-[15px] font-[500]">{item.content}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <p className="text-sm text-gray-600 font-[400] mb-3">
                  Get your company formed in:
                </p>





              </div>
              <div className="col-12">
                <div className="col-md-7  rounded-[5px] space-x-3 py-1 h-[30px] items-center justify-center mb-0 flex bg-[#f3efe7]">

                  <svg className="mt-0" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.7 8.1H9.9V4.5C9.9 4.2613 9.80518 4.03239 9.6364 3.8636C9.46762 3.69482 9.2387 3.6 9 3.6C8.76131 3.6 8.53239 3.69482 8.36361 3.8636C8.19482 4.03239 8.1 4.2613 8.1 4.5V9C8.1 9.23869 8.19482 9.46761 8.36361 9.63639C8.53239 9.80518 8.76131 9.9 9 9.9H11.7C11.9387 9.9 12.1676 9.80518 12.3364 9.63639C12.5052 9.46761 12.6 9.23869 12.6 9C12.6 8.7613 12.5052 8.53239 12.3364 8.3636C12.1676 8.19482 11.9387 8.1 11.7 8.1ZM9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389956 7.20038 -0.17433 9.00998 0.172937 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.364C3.89472 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C17.9973 6.61386 17.0483 4.32622 15.361 2.63897C13.6738 0.951717 11.3861 0.00265372 9 0ZM9 16.2C7.57598 16.2 6.18393 15.7777 4.9999 14.9866C3.81586 14.1954 2.89302 13.0709 2.34807 11.7553C1.80312 10.4397 1.66054 8.99201 1.93835 7.59535C2.21616 6.19869 2.9019 4.91577 3.90883 3.90883C4.91577 2.90189 6.19869 2.21616 7.59535 1.93835C8.99202 1.66053 10.4397 1.80312 11.7553 2.34807C13.071 2.89302 14.1954 3.81586 14.9866 4.99989C15.7777 6.18393 16.2 7.57597 16.2 9C16.1978 10.9089 15.4385 12.739 14.0888 14.0888C12.739 15.4385 10.9089 16.1978 9 16.2Z" fill="#262626" />
                  </svg>

                  <p className="text-sm text-gray-700 mt-3 font-[400]">
                    1 week (on average)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>,
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="sm:mb-0 col-11">
          <div className="sm:mb-0 w-full sm:w-[100%] bg-[#fffdfa] border-8 border-[#f3efe7] rounded-[32px] px-6 py-6">
            <div>
              <div className="sm:h-[340px]">

                <div className="mb-4">
                  <span className="text-sm rounded-[40px] font-semibold bg-[#F6F6F6] px-3 py-2 text-gray-500">
                    Step 2
                  </span>
                </div>
                <h2 className="text-2xl font-[600] text-gray-800 mb-4">
                  Get everything you need
                </h2>
                <p className="text-sm text-gray-600 font-[400] mb-6">
                  What you get from us:
                </p>
                <ul className="space-y-4">
                  {[
                    { content: "Company formed with any state", status: "tick" },
                    {
                      content:
                        "Employer Identification Number (EIN)",
                      status: "tick",
                    },
                    {
                      content: "Operating Agreement & Articles of Organization",
                      status: "tick",
                    },
                    {
                      content:
                        "Registered Agent service",
                      status: "tick",
                    },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      {item.status === "tick" ? (
                        // Green tick icon with fixed size
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="text-green-500"
                          style={{ minWidth: "24px", minHeight: "24px" }} // Fixed size
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        // Red cross icon with fixed size
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ minWidth: "18px", minHeight: "18px" }} // Fixed size
                        >
                          <path
                            d="M12.3509 11.4195L20.5998 3.17024C20.725 3.04932 20.8249 2.90467 20.8936 2.74474C20.9623 2.58481 20.9984 2.4128 21 2.23875C21.0015 2.0647 20.9683 1.89208 20.9024 1.73098C20.8365 1.56988 20.7391 1.42352 20.6161 1.30044C20.493 1.17736 20.3466 1.08003 20.1855 1.01412C20.0244 0.948208 19.8518 0.915041 19.6778 0.916553C19.5037 0.918066 19.3317 0.954228 19.1718 1.02293C19.0118 1.09163 18.8672 1.19149 18.7463 1.31669L10.497 9.56557L2.24817 1.31669C2.00144 1.07538 1.66949 0.941105 1.32438 0.943006C0.979266 0.944906 0.648824 1.08283 0.404766 1.32684C0.160708 1.57086 0.0227271 1.90128 0.0207655 2.24639C0.0188038 2.5915 0.153021 2.92347 0.394289 3.17024L8.6435 11.4195L0.394289 19.6687C0.270338 19.7899 0.171668 19.9345 0.103991 20.0941C0.0363139 20.2538 0.000974692 20.4252 1.98797e-05 20.5986C-0.000934933 20.772 0.0325137 20.9438 0.0984285 21.1042C0.164343 21.2645 0.261414 21.4102 0.384022 21.5328C0.50663 21.6554 0.652339 21.7524 0.81271 21.8183C0.973082 21.8842 1.14493 21.9176 1.31831 21.9166C1.49168 21.9157 1.66314 21.8803 1.82275 21.8126C1.98236 21.7449 2.12696 21.6462 2.24817 21.5222L10.497 13.2733L18.7463 21.5222C19.0022 21.7782 19.3378 21.9063 19.673 21.9063C20.0083 21.9063 20.3442 21.7782 20.5998 21.5222C20.8456 21.2764 20.9836 20.943 20.9836 20.5954C20.9836 20.2478 20.8456 19.9145 20.5998 19.6687L12.3509 11.4195Z"
                            fill="#EF0000"
                          />
                        </svg>
                      )}
                      <span className="text-[15px] font-[500]">{item.content}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sm:mt-6">
                <p className="text-sm text-gray-600 font-[400] mb-3">
                  Get your EIN in:
                </p>
              </div>
              <div className="col-12 mb-2">
                <div className="ms-2 w-[180px] rounded-[5px] space-x-3 py-1 h-[30px] items-center justify-center mb-2 flex bg-[#f3efe7]">

                  <svg className="mt-0" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.7 8.1H9.9V4.5C9.9 4.2613 9.80518 4.03239 9.6364 3.8636C9.46762 3.69482 9.2387 3.6 9 3.6C8.76131 3.6 8.53239 3.69482 8.36361 3.8636C8.19482 4.03239 8.1 4.2613 8.1 4.5V9C8.1 9.23869 8.19482 9.46761 8.36361 9.63639C8.53239 9.80518 8.76131 9.9 9 9.9H11.7C11.9387 9.9 12.1676 9.80518 12.3364 9.63639C12.5052 9.46761 12.6 9.23869 12.6 9C12.6 8.7613 12.5052 8.53239 12.3364 8.3636C12.1676 8.19482 11.9387 8.1 11.7 8.1ZM9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389956 7.20038 -0.17433 9.00998 0.172937 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.364C3.89472 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C17.9973 6.61386 17.0483 4.32622 15.361 2.63897C13.6738 0.951717 11.3861 0.00265372 9 0ZM9 16.2C7.57598 16.2 6.18393 15.7777 4.9999 14.9866C3.81586 14.1954 2.89302 13.0709 2.34807 11.7553C1.80312 10.4397 1.66054 8.99201 1.93835 7.59535C2.21616 6.19869 2.9019 4.91577 3.90883 3.90883C4.91577 2.90189 6.19869 2.21616 7.59535 1.93835C8.99202 1.66053 10.4397 1.80312 11.7553 2.34807C13.071 2.89302 14.1954 3.81586 14.9866 4.99989C15.7777 6.18393 16.2 7.57597 16.2 9C16.1978 10.9089 15.4385 12.739 14.0888 14.0888C12.739 15.4385 10.9089 16.1978 9 16.2Z" fill="#262626" />
                  </svg>

                  <p className="text-sm text-gray-700 mt-3 font-[400]">
                    1 week (on average)
                  </p>
                </div>
                <div className="ms-2 sm:w-[276px] rounded-[5px] space-x-3 py-1 sm:h-[30px] h-[45px]    items-center justify-center mb-0 flex bg-[#f3efe7]">

                  <svg className="sm:ml-0 ml-3" width="22" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.7 8.1H9.9V4.5C9.9 4.2613 9.80518 4.03239 9.6364 3.8636C9.46762 3.69482 9.2387 3.6 9 3.6C8.76131 3.6 8.53239 3.69482 8.36361 3.8636C8.19482 4.03239 8.1 4.2613 8.1 4.5V9C8.1 9.23869 8.19482 9.46761 8.36361 9.63639C8.53239 9.80518 8.76131 9.9 9 9.9H11.7C11.9387 9.9 12.1676 9.80518 12.3364 9.63639C12.5052 9.46761 12.6 9.23869 12.6 9C12.6 8.7613 12.5052 8.53239 12.3364 8.3636C12.1676 8.19482 11.9387 8.1 11.7 8.1ZM9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389956 7.20038 -0.17433 9.00998 0.172937 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.364C3.89472 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C17.9973 6.61386 17.0483 4.32622 15.361 2.63897C13.6738 0.951717 11.3861 0.00265372 9 0ZM9 16.2C7.57598 16.2 6.18393 15.7777 4.9999 14.9866C3.81586 14.1954 2.89302 13.0709 2.34807 11.7553C1.80312 10.4397 1.66054 8.99201 1.93835 7.59535C2.21616 6.19869 2.9019 4.91577 3.90883 3.90883C4.91577 2.90189 6.19869 2.21616 7.59535 1.93835C8.99202 1.66053 10.4397 1.80312 11.7553 2.34807C13.071 2.89302 14.1954 3.81586 14.9866 4.99989C15.7777 6.18393 16.2 7.57597 16.2 9C16.1978 10.9089 15.4385 12.739 14.0888 14.0888C12.739 15.4385 10.9089 16.1978 9 16.2Z" fill="#262626" />
                  </svg>

                  <p className="text-sm text-gray-700 mt-3 font-[400] ">
                    8 weeks (on average) without SSN
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>,
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div className="sm:mb-0 col-11">
          <div className="sm:mb-0 w-full sm:w-[100%] bg-[#fffdfa] border-8 border-[#f3efe7] rounded-[32px] px-6 py-6">
            <div>
              <div className="h-[378px]">

                <div className="mb-4">
                  <span className="text-sm rounded-[40px] font-semibold bg-[#F6F6F6] px-3 py-2 text-gray-500">
                    Step 3
                  </span>
                </div>
                <h2 className="text-2xl font-[600] text-gray-800 mb-4">
                  Set up your US bank account
                </h2>
                <p className="text-sm text-gray-600 font-[400] mb-6">
                  Once you get your EIN (required for a bank account), you’re ready to apply for a US bank account through our custom partner portal. A passport is required for this step. ‍
                </p>
              </div>

              <div className="mt-6">
                <p className="text-sm text-gray-600 font-[400] mb-3">
                  Get your bank account in:
                </p>





              </div>
              <div className="col-12 mb-2">
                <div className="ms-2 w-[180px] rounded-[5px] space-x-3 py-1 h-[30px] items-center justify-center mb-0 flex bg-[#f3efe7]">

                  <svg className="mt-0" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.7 8.1H9.9V4.5C9.9 4.2613 9.80518 4.03239 9.6364 3.8636C9.46762 3.69482 9.2387 3.6 9 3.6C8.76131 3.6 8.53239 3.69482 8.36361 3.8636C8.19482 4.03239 8.1 4.2613 8.1 4.5V9C8.1 9.23869 8.19482 9.46761 8.36361 9.63639C8.53239 9.80518 8.76131 9.9 9 9.9H11.7C11.9387 9.9 12.1676 9.80518 12.3364 9.63639C12.5052 9.46761 12.6 9.23869 12.6 9C12.6 8.7613 12.5052 8.53239 12.3364 8.3636C12.1676 8.19482 11.9387 8.1 11.7 8.1ZM9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389956 7.20038 -0.17433 9.00998 0.172937 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.364C3.89472 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C17.9973 6.61386 17.0483 4.32622 15.361 2.63897C13.6738 0.951717 11.3861 0.00265372 9 0ZM9 16.2C7.57598 16.2 6.18393 15.7777 4.9999 14.9866C3.81586 14.1954 2.89302 13.0709 2.34807 11.7553C1.80312 10.4397 1.66054 8.99201 1.93835 7.59535C2.21616 6.19869 2.9019 4.91577 3.90883 3.90883C4.91577 2.90189 6.19869 2.21616 7.59535 1.93835C8.99202 1.66053 10.4397 1.80312 11.7553 2.34807C13.071 2.89302 14.1954 3.81586 14.9866 4.99989C15.7777 6.18393 16.2 7.57597 16.2 9C16.1978 10.9089 15.4385 12.739 14.0888 14.0888C12.739 15.4385 10.9089 16.1978 9 16.2Z" fill="#262626" />
                  </svg>

                  <p className="text-sm text-gray-700 mt-3 font-[400]">
                    3 - 5 business days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>,
      </SwiperSlide>

      {/* Slide 4 */}
      <SwiperSlide>
        <div className="sm:mb-0 col-11">
          <div className="sm:mb-0 w-full sm:w-[100%] bg-[#fffdfa] border-8 border-[#f3efe7] rounded-[32px] px-6 py-6">
            <div>
              <div className="h-[425px]">

                <div className="mb-4">
                  <span className="text-sm rounded-[40px] font-semibold bg-[#F6F6F6] px-3 py-2 text-gray-500">
                    Step 4
                  </span>
                </div>
                <h2 className="text-2xl font-[600] text-gray-800 mb-4">
                  Grow your business
                </h2>
                <p className="text-sm text-gray-600 font-[400] mb-6">
                  You’re all set to dive into your work with the assurance that your business is compliant. Explore additional services, including doola Taxes, available for purchase directly from your Dashboard. For compliance from day one, consider starting with Total Compliance.
                </p>
              </div>


              <div>
                <button className="text-[15px] font-[400] w-[180px] h-[50px] bg-[#212833] text-[#fff] rounded-[50px]">Get Started</button>
              </div>
            </div>
          </div>
        </div>,
      </SwiperSlide>
      

    </Swiper>
  );
};

export default MySwiper;
