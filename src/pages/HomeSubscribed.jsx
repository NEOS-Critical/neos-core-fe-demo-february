import { useNavigate } from 'react-router-dom';


const HomeSubscribed = () => {
  const navigate = useNavigate();

  return (
    <div class="w-[1440px] h-[980px] relative overflow-hidden bg-[#f6f5f2]">
      <div class="w-[68px] h-[980px] absolute left-0 top-0">
        <div class="w-[67px] h-[980px] absolute left-0 top-0 bg-white">
          <div class="flex flex-col justify-start items-center w-[67px] absolute left-0 top-[62px] gap-3">
            <div class="flex-grow-0 flex-shrink-0 w-10 h-px bg-[#e6e2da]"></div>
            <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative p-1 rounded-[999px] border-2 border-[#1e1b19]">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path d="M12.5 12H6.5Z" fill="#1E1B19"></path>
                <path
                  d="M12.5 6V12M12.5 12V18M12.5 12H18.5M12.5 12H6.5"
                  stroke="#1E1B19"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div class="flex-grow-0 flex-shrink-0 w-10 h-px bg-[#e6e2da]"></div>
            <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 gap-[17px] py-1">
              <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 pl-[3px] pr-0.5 py-0.5">
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-grow-0 flex-shrink-0 w-[20.24px] h-[22.24px] relative"
                  preserveAspectRatio="none"
                >
                  <circle
                    cx="3.87891"
                    cy="19.2427"
                    r="2"
                    stroke="#1E1B19"
                    stroke-width="2"
                  ></circle>
                  <rect
                    x="1.87891"
                    y="2.24268"
                    width="4"
                    height="4"
                    stroke="#1E1B19"
                    stroke-width="2"
                  ></rect>
                  <rect
                    x="14.8789"
                    y="17.2427"
                    width="4"
                    height="4"
                    stroke="#1E1B19"
                    stroke-width="2"
                  ></rect>
                  <rect
                    x="16.8789"
                    y="1.41421"
                    width="4"
                    height="4"
                    transform="rotate(45 16.8789 1.41421)"
                    stroke="#1E1B19"
                    stroke-width="2"
                  ></rect>
                  <path
                    d="M5.87891 4.24268H13.8789M13.8789 19.2427H5.87891M16.8789 7.24268V16.2427"
                    stroke="#1E1B19"
                    stroke-width="2"
                  ></path>
                </svg>
              </div>
            </div>
            <svg
              width="67"
              height="39"
              viewBox="0 0 67 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="self-stretch flex-grow-0 flex-shrink-0 h-[38px] relative"
              preserveAspectRatio="none"
            >
              <rect
                x="18.5"
                y="4.24268"
                width="30"
                height="30"
                fill="white"
              ></rect>
              <path
                d="M40.7704 26.5469C39.361 27.9563 37.557 28.9078 35.5865 29.281C33.6159 29.6542 31.5674 29.4323 29.6999 28.6435C27.8324 27.8547 26.2298 26.5344 25.0948 24.8495C23.9598 23.1646 23.3434 21.1908 23.3234 19.1776C23.3035 17.1645 23.881 15.2026 24.9828 13.5398C26.0847 11.877 27.6614 10.5882 29.5137 9.83619C31.3659 9.08422 33.4105 8.90292 35.3888 9.31521C37.3671 9.72749 39.1903 10.7149 40.6279 12.1524L33.513 19.2674L40.7704 26.5469Z"
                fill="#1E1B19"
              ></path>
              <path
                d="M27.9546 24.8161C31.0949 27.9564 36.1553 27.9874 39.2573 24.8854C42.3593 21.7834 42.3283 16.723 39.188 13.5827C36.0477 10.4424 30.9873 10.4114 27.8853 13.5134C24.7833 16.6154 24.8143 21.6758 27.9546 24.8161Z"
                fill="white"
              ></path>
              <path
                style={{ mixBlendMode: 'multiply' }}
                d="M31.5729 26.0107C34.6647 27.3168 38.1803 25.8897 39.4252 22.8231C40.67 19.7566 39.1727 16.2119 36.0808 14.9059C32.9889 13.5998 29.4733 15.0269 28.2285 18.0934C26.9836 21.16 28.481 24.7047 31.5729 26.0107Z"
                fill="url(#paint0_radial_588_472274)"
              ></path>
              <path
                d="M45.7305 16.0135L45.1104 16.7981C45.7882 17.3337 46.2265 18.1146 46.3301 18.9677C46.4337 19.8204 46.1944 20.6746 45.6675 21.3436C45.1407 22.0125 44.3677 22.4436 43.5172 22.5409C42.6843 22.6362 41.8433 22.4037 41.1725 21.8914L41.142 21.8609L41.0993 21.8267C40.5385 21.3767 39.8238 21.1624 39.1076 21.2321C38.3912 21.3019 37.7311 21.6505 37.2706 22.2043L37.2651 22.211L37.2596 22.2178C36.65 22.9776 35.8179 23.528 34.8777 23.7929C33.9374 24.0578 32.9346 24.0241 32.0077 23.6949C31.0807 23.3657 30.2762 22.7573 29.7057 21.9537C29.1352 21.1501 28.8276 20.1918 28.8241 19.2118C28.8206 18.2319 29.1212 17.2785 29.6834 16.4826C30.2455 15.6868 31.0421 15.0866 31.9638 14.765C32.8857 14.4433 33.888 14.416 34.8325 14.6883C35.7772 14.9606 36.6168 15.5191 37.235 16.2869L37.2409 16.2943L37.2469 16.3015C37.7077 16.8523 38.365 17.2032 39.0796 17.2778C39.7944 17.3525 40.5103 17.1446 41.0728 16.6963L41.1169 16.6612L41.1386 16.6395C41.7064 16.2319 42.3942 16.0199 43.099 16.038C43.8263 16.0567 44.5294 16.3194 45.0944 16.7852L45.7305 16.0135Z"
                stroke="#1E1B19"
                stroke-width="2"
              ></path>
              <circle cx="43.0566" cy="19.2505" r="1.25" fill="black"></circle>
              <defs>
                <radialGradient
                  id="paint0_radial_588_472274"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(-365.317 1819.9) rotate(45) scale(232.942 228.355)"
                >
                  <stop></stop>
                  <stop offset="1" stop-color="white"></stop>
                </radialGradient>
              </defs>
            </svg>
          </div>
          <div class="flex justify-center items-center w-[67px] absolute left-0 top-3 gap-3.5 py-1">
            <svg
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M5.83398 8H27.1673H5.83398ZM5.83398 16H27.1673H5.83398ZM5.83398 24H27.1673Z"
                fill="white"
              ></path>
              <path
                d="M5.83398 24H27.1673M5.83398 8H27.1673H5.83398ZM5.83398 16H27.1673H5.83398Z"
                stroke="#1E1B19"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="w-[1372px] h-[49px]">
        <div class="flex justify-start items-start absolute left-[1328px] top-4 gap-2.5">
          <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 overflow-hidden p-1 rounded-2xl">
            <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[4.999999523162842px]">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-grow-0 flex-shrink-0 w-[26px] h-[26px] relative"
                preserveAspectRatio="none"
              >
                <path
                  d="M19.4993 9.75C19.4993 11.5556 19.4993 13.3611 19.4993 15.1667C19.4993 17.3333 20.2216 18.7778 21.666 19.5H4.33268C5.77713 18.7778 6.49935 17.3333 6.49935 15.1667C6.49935 13.3611 6.49935 11.5556 6.49935 9.75C6.49935 6.16015 9.4095 3.25 12.9993 3.25C16.5892 3.25 19.4993 6.16015 19.4993 9.75Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M10.8327 19.5C10.8327 20.6966 11.8027 21.6667 12.9993 21.6667C14.196 21.6667 15.166 20.6966 15.166 19.5"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="square"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <svg
          width="78"
          height="19"
          viewBox="0 0 78 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[78px] h-[18.02px] absolute left-[115px] top-[23px]"
          preserveAspectRatio="none"
        >
          <path
            d="M13.0169 17.7715L2.50561 4.90122V17.7715H0V0.24445H1.76004L12.2714 13.1147V0.24445H14.777V17.7715H13.0169Z"
            fill="#1B1B1B"
          ></path>
          <path
            d="M27.2752 7.13793H33.032V9.50909H27.2752V15.3881H35.0365V17.7715H24.7696V0.24445H34.792V2.62783H27.2752V7.13793Z"
            fill="#1B1B1B"
          ></path>
          <path
            d="M42.5846 12.5647C42.1365 11.4484 41.9124 10.2628 41.9124 9.00797C41.9124 7.75313 42.1365 6.56755 42.5846 5.45123C43.0328 4.33491 43.6439 3.38155 44.418 2.59117C45.1921 1.79263 46.121 1.16114 47.2047 0.696682C48.2884 0.232227 49.4414 0 50.6637 0C52.2933 0 53.7763 0.395194 55.1127 1.18558C56.4571 1.96782 57.5123 3.04747 58.2783 4.42454C59.0442 5.80161 59.4272 7.32942 59.4272 9.00797C59.4272 10.6865 59.0442 12.2143 58.2783 13.5914C57.5123 14.9685 56.4571 16.0522 55.1127 16.8426C53.7763 17.6248 52.2933 18.0159 50.6637 18.0159C49.4414 18.0159 48.2884 17.7837 47.2047 17.3193C46.121 16.8548 45.1921 16.2274 44.418 15.437C43.6439 14.6385 43.0328 13.681 42.5846 12.5647ZM44.4058 9.00797C44.4058 10.9065 45.0006 12.4873 46.1902 13.7503C47.3799 15.0133 48.871 15.6448 50.6637 15.6448C52.4563 15.6448 53.9475 15.0133 55.1371 13.7503C56.3268 12.4873 56.9216 10.9065 56.9216 9.00797C56.9216 7.11756 56.3227 5.54086 55.1249 4.27787C53.9352 3.00673 52.4482 2.37116 50.6637 2.37116C48.8792 2.37116 47.3881 3.00673 46.1902 4.27787C45.0006 5.54086 44.4058 7.11756 44.4058 9.00797Z"
            fill="#1B1B1B"
          ></path>
          <path
            d="M66.4253 15.0948L68.1609 13.3958C69.3994 14.8951 70.8254 15.6448 72.4388 15.6448C73.278 15.6448 73.9951 15.4003 74.5899 14.9114C75.1929 14.4144 75.4944 13.7829 75.4944 13.0169C75.4944 12.5118 75.364 12.0677 75.1033 11.6847C74.8425 11.2936 74.4799 10.9676 74.0155 10.7069C73.5592 10.438 73.0866 10.2017 72.5977 9.99799C72.1169 9.79429 71.571 9.56206 70.9599 9.30131C70.3487 9.03242 69.8476 8.7676 69.4565 8.50685C67.9735 7.5209 67.232 6.23754 67.232 4.65677C67.232 3.36118 67.7372 2.26116 68.7476 1.3567C69.7661 0.452232 71.0291 0 72.5366 0C74.264 0 75.8326 0.582605 77.2422 1.74782L75.7633 3.58119C74.8099 2.7745 73.7669 2.37116 72.6343 2.37116C71.8521 2.37116 71.1717 2.58302 70.5932 3.00673C70.0228 3.43044 69.7376 4.0049 69.7376 4.7301C69.7376 5.15382 69.868 5.53271 70.1287 5.86679C70.3895 6.20088 70.748 6.49421 71.2043 6.74681C71.6688 6.99941 72.1414 7.22756 72.6221 7.43127C73.111 7.63498 73.6529 7.87128 74.2477 8.14018C74.8425 8.40907 75.3314 8.67389 75.7144 8.93464C77.2381 9.93688 78 11.2732 78 12.9436C78 14.4592 77.4826 15.6855 76.4477 16.6226C75.4129 17.5515 74.1173 18.0159 72.561 18.0159C71.355 18.0159 70.2224 17.7674 69.1631 17.2704C68.112 16.7652 67.1994 16.04 66.4253 15.0948Z"
            fill="#1B1B1B"
          ></path>
        </svg>
        <svg
          width="19"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[15.59px] h-[16.59px]"
          preserveAspectRatio="none"
        >
          <path
            d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z"
            stroke="#1E1B19"
            stroke-width="2"
            stroke-linecap="square"
          ></path>
          <path
            d="M11 12L16.5879 17.5879"
            stroke="#1E1B19"
            stroke-width="2"
            stroke-linecap="square"
          ></path>
        </svg>
        <div class="w-[405px] h-[21px] absolute left-[939px] top-6">
          <div class="flex flex-col justify-center items-start absolute left-[-24px] top-0 cursor-pointer" onClick={() => navigate('/')}>
            <p class="flex-grow-0 flex-shrink-0 text-sm text-center text-[#1e1b19]">
              Home
            </p>
          </div>
          <div class="flex flex-col justify-center items-start absolute left-10 top-0 cursor-pointer" onClick={() => navigate('/data-landscape')}>
            <p class="flex-grow-0 flex-shrink-0 text-sm text-center text-[#1e1b19]">
              Data Landscape
            </p>
          </div>
          <div class="flex flex-col justify-center items-start absolute left-[172px] top-0 cursor-pointer" onClick={() => navigate('/exchange-all')}>
            <p class="flex-grow-0 flex-shrink-0 text-sm text-center text-[#1e1b19]">
              Exchange
            </p>
          </div>
          <div class="flex flex-col justify-center items-start absolute left-[260px] top-0">
            <p class="flex-grow-0 flex-shrink-0 text-sm text-center text-[#1e1b19]">
              Insights
            </p>
          </div>
        </div>
        <svg
          width="32"
          height="33"
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8 absolute left-[1376px] top-[17.5px]"
          preserveAspectRatio="none"
        >
          <circle cx="16" cy="16.5" r="16" fill="#CCC6BB"></circle>
          <path
            d="M8.00195 19.7168L8.83398 18.9023C9.42773 19.6211 10.1113 19.9805 10.8848 19.9805C11.2871 19.9805 11.6309 19.8633 11.916 19.6289C12.2051 19.3906 12.3496 19.0879 12.3496 18.7207C12.3496 18.4785 12.2871 18.2656 12.1621 18.082C12.0371 17.8945 11.8633 17.7383 11.6406 17.6133C11.4219 17.4844 11.1953 17.3711 10.9609 17.2734C10.7305 17.1758 10.4688 17.0645 10.1758 16.9395C9.88281 16.8105 9.64258 16.6836 9.45508 16.5586C8.74414 16.0859 8.38867 15.4707 8.38867 14.7129C8.38867 14.0918 8.63086 13.5645 9.11523 13.1309C9.60352 12.6973 10.209 12.4805 10.9316 12.4805C11.7598 12.4805 12.5117 12.7598 13.1875 13.3184L12.4785 14.1973C12.0215 13.8105 11.5215 13.6172 10.9785 13.6172C10.6035 13.6172 10.2773 13.7188 10 13.9219C9.72656 14.125 9.58984 14.4004 9.58984 14.748C9.58984 14.9512 9.65234 15.1328 9.77734 15.293C9.90234 15.4531 10.0742 15.5938 10.293 15.7148C10.5156 15.8359 10.7422 15.9453 10.9727 16.043C11.207 16.1406 11.4668 16.2539 11.752 16.3828C12.0371 16.5117 12.2715 16.6387 12.4551 16.7637C13.1855 17.2441 13.5508 17.8848 13.5508 18.6855C13.5508 19.4121 13.3027 20 12.8066 20.4492C12.3105 20.8945 11.6895 21.1172 10.9434 21.1172C10.3652 21.1172 9.82227 20.998 9.31445 20.7598C8.81055 20.5176 8.37305 20.1699 8.00195 19.7168Z"
            fill="#1E1B19"
          ></path>
          <path
            d="M22.0703 15.3457L19.6094 19.2012H18.7715L16.3105 15.3457V21H15.1094V12.5977H15.9531L19.1934 17.7246L22.4336 12.5977H23.2715V21H22.0703V15.3457Z"
            fill="#1E1B19"
          ></path>
        </svg>
        <div class="w-[1372px] h-0 absolute left-[68px] top-16"></div>
        <svg
          width="41"
          height="2"
          viewBox="0 0 41 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute left-[913px] top-[63px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <line y1="1" x2="41" y2="1" stroke="black" stroke-width="2"></line>
        </svg>
        <div class="w-[1372px] h-px absolute left-[68px] top-16 overflow-hidden bg-[#e6e2da]"></div>
      </div>
      <div class="w-[992px] h-48">
        <div
          class="w-80 h-40 absolute left-[92px] top-[249px] bg-white border border-[#eaecf0]"
          style={{ boxShadow: '0px 1px 3px 0 rgba(16,24,40,0.1), 0px 1px 2px 0 rgba(16,24,40,0.06)' }}
        >
          <p class="w-[301.33px] absolute left-6 top-6 text-base text-left text-[#101828]">
            Worker Profile
          </p>
          <div class="w-[301.33px] h-16 absolute left-6 top-12"></div>
          <p class="absolute left-6 top-[117px] text-xs text-center text-[#101828]">
            Updated
          </p>
          <p class="w-[99.33px] absolute left-[82px] top-[117px] text-xs text-left text-[#7d766f]">
            1 hour ago
          </p>
          <img
            src="group-9151.png"
            class="w-[125px] h-[143px] absolute left-[188px] top-2 object-none"
          />
        </div>
        <div
          class="w-80 h-40 absolute left-[428px] top-[249px] bg-white border border-[#eaecf0]"
          style={{ boxShadow: '0px 1px 3px 0 rgba(16,24,40,0.1), 0px 1px 2px 0 rgba(16,24,40,0.06)' }}
        >
          <p class="w-[301.33px] absolute left-6 top-6 text-base text-left text-[#101828]">
            <span class="w-[301.33px] text-base text-left text-[#101828]">
              Employee
            </span>
            <br />
            <span class="w-[301.33px] text-base text-left text-[#101828]">
              Dashboard
            </span>
          </p>
          <div class="w-[301.33px] h-16 absolute left-6 top-[72px]">
            <div class="w-[157.33px] h-5 absolute left-0 top-11">
              <div class="w-[157.33px] h-5 absolute left-0 top-0">
                <div class="w-[50px] h-5 absolute left-0 top-0">
                  <p class="absolute left-0 top-[5px] text-xs text-center text-black">
                    Updated
                  </p>
                </div>
                <p class="w-[99.33px] absolute left-[58px] top-[5px] text-xs text-left text-[#7d766f]">
                  3 days ago
                </p>
              </div>
            </div>
          </div>
          <img
            src="group-9151-2.png"
            class="w-[111px] h-[111px] absolute left-[190px] top-[13px] object-none"
          />
        </div>
        <div
          class="w-80 h-40 absolute left-[764px] top-[249px] bg-white border border-[#eaecf0]"
          style={{ boxShadow: '0px 1px 3px 0 rgba(16,24,40,0.1), 0px 1px 2px 0 rgba(16,24,40,0.06)' }}
        >
          <p class="w-[129px] absolute left-6 top-6 text-base text-left text-[#101828]">
            Learner Dashboard
          </p>
          <div class="w-[301.33px] h-16 absolute left-6 top-[72px]">
            <div class="w-[157.33px] h-5 absolute left-0 top-11">
              <div class="w-[157.33px] h-5 absolute left-0 top-0">
                <div class="w-[50px] h-5 absolute left-0 top-0">
                  <p class="absolute left-0 top-[5px] text-xs text-center text-black">
                    Updated
                  </p>
                </div>
                <p class="w-[99.33px] absolute left-[58px] top-[5px] text-xs text-left text-[#7d766f]">
                  12/01/23
                </p>
              </div>
            </div>
          </div>
          <img
            src="group-9151-3.png"
            class="w-[133px] h-[92px] absolute left-[172px] top-7 object-none"
          />
        </div>
        <p class="absolute left-[92px] top-[217px] text-base text-left text-black">
          Insights
        </p>
      </div>
      <div class="w-[1328px] h-[250px]">
        <p class="absolute left-[92px] top-[441px] text-base text-left text-black">
          Data Products
        </p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 absolute left-[1362px] top-[443px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M22 12.999V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H13V12.999H22ZM11 12.999V21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V12.999H11V12.999ZM11 3V10.999H2V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H11ZM21 3C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V10.999H13V3H21Z"
            fill="#13100F"
          ></path>
        </svg>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 absolute left-[1396px] top-[443px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"
            fill="#BEB8AE"
          ></path>
        </svg>
        <div
          class="flex flex-col justify-start items-start w-80 h-[190px] absolute left-[92px] top-[473px] overflow-hidden bg-white border border-gray-200"
          style={{ boxShadow: '0px 1px 3px 0 rgba(0,0,0,0.1), 0px 1px 2px 0 rgba(0,0,0,0.06)' }}
        >
          <div class="flex flex-col justify-between items-start self-stretch flex-grow overflow-hidden p-2.5">
            <div class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
              <div class="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p class="flex-grow-0 flex-shrink-0 w-[270px] text-sm text-left text-[#1e1b19]">
                  All Learner Records
                </p>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-grow-0 flex-shrink-0 w-5 h-5"
                  preserveAspectRatio="none"
                >
                  <circle cx="10" cy="10" r="10" fill="#4EBF8D"></circle>
                  <path
                    d="M10.0005 7.75003C9.55547 7.75003 9.12045 7.88199 8.75044 8.12922C8.38043 8.37646 8.09205 8.72786 7.92175 9.13899C7.75145 9.55013 7.70689 10.0025 7.79371 10.439C7.88053 10.8754 8.09482 11.2764 8.40949 11.591C8.72416 11.9057 9.12507 12.12 9.56152 12.2068C9.99798 12.2936 10.4504 12.2491 10.8615 12.0788C11.2726 11.9085 11.6241 11.6201 11.8713 11.2501C12.1185 10.8801 12.2505 10.445 12.2505 10C12.2498 9.4035 12.0125 8.83159 11.5907 8.40978C11.1689 7.98797 10.597 7.7507 10.0005 7.75003ZM10.0005 11.75C9.65436 11.75 9.31602 11.6474 9.02823 11.4551C8.74044 11.2628 8.51614 10.9895 8.38369 10.6697C8.25123 10.35 8.21658 9.99809 8.2841 9.65862C8.35163 9.31915 8.5183 9.00733 8.76304 8.76259C9.00778 8.51785 9.3196 8.35118 9.65907 8.28365C9.99854 8.21613 10.3504 8.25079 10.6702 8.38324C10.9899 8.51569 11.2633 8.74 11.4555 9.02778C11.6478 9.31557 11.7505 9.65391 11.7505 10C11.75 10.464 11.5654 10.9088 11.2373 11.2369C10.9093 11.565 10.4644 11.7495 10.0005 11.75ZM6.08434 8.34582C5.75482 9.12487 5.66548 9.98458 5.82777 10.8147C5.99006 11.6449 6.39658 12.4077 6.99523 13.0052C7.01844 13.0285 7.03686 13.056 7.04942 13.0863C7.06198 13.1167 7.06845 13.1492 7.06845 13.182C7.06845 13.2148 7.06199 13.2473 7.04943 13.2777C7.03687 13.308 7.01845 13.3356 6.99524 13.3588C6.97203 13.382 6.94447 13.4004 6.91414 13.413C6.88381 13.4255 6.85131 13.432 6.81848 13.432C6.78565 13.432 6.75314 13.4255 6.72281 13.413C6.69248 13.4004 6.66493 13.382 6.64171 13.3588C6.20019 12.918 5.84991 12.3944 5.61093 11.8181C5.37194 11.2417 5.24892 10.6239 5.24892 10C5.24892 9.37611 5.37194 8.75832 5.61093 8.18198C5.84991 7.60565 6.20019 7.0821 6.64171 6.64127C6.68859 6.59439 6.75218 6.56805 6.81848 6.56805C6.88478 6.56806 6.94836 6.5944 6.99524 6.64128C7.04212 6.68816 7.06846 6.75175 7.06845 6.81805C7.06845 6.88435 7.04211 6.94793 6.99523 6.99481C6.60706 7.38198 6.29771 7.8408 6.08434 8.34582ZM14.7505 10C14.7512 10.6239 14.6287 11.2418 14.39 11.8182C14.1512 12.3946 13.8009 12.9182 13.3592 13.3588C13.336 13.382 13.3085 13.4004 13.2781 13.413C13.2478 13.4255 13.2153 13.432 13.1825 13.432C13.1496 13.432 13.1171 13.4255 13.0868 13.413C13.0565 13.4004 13.0289 13.382 13.0057 13.3588C12.9825 13.3356 12.9641 13.308 12.9515 13.2777C12.939 13.2473 12.9325 13.2148 12.9325 13.182C12.9325 13.1492 12.939 13.1167 12.9515 13.0863C12.9641 13.056 12.9825 13.0285 13.0057 13.0052C13.4008 12.6108 13.7143 12.1424 13.9281 11.6267C14.142 11.1111 14.2521 10.5583 14.2521 10C14.2521 9.44177 14.142 8.88899 13.9281 8.37332C13.7143 7.85765 13.4008 7.38921 13.0057 6.99481C12.9825 6.9716 12.9641 6.94404 12.9515 6.91371C12.939 6.88338 12.9325 6.85088 12.9325 6.81805C12.9325 6.78522 12.939 6.75271 12.9515 6.72238C12.9641 6.69205 12.9825 6.66449 13.0057 6.64128C13.0289 6.61807 13.0565 6.59965 13.0868 6.58709C13.1171 6.57452 13.1496 6.56806 13.1825 6.56805C13.2153 6.56805 13.2478 6.57452 13.2781 6.58708C13.3085 6.59964 13.336 6.61805 13.3592 6.64127C13.8009 7.08189 14.1512 7.60545 14.39 8.18185C14.6287 8.75825 14.7512 9.37614 14.7505 10ZM5.22747 14.773C5.25068 14.7962 5.2691 14.8238 5.28166 14.8541C5.29422 14.8844 5.30069 14.9169 5.30069 14.9498C5.30069 14.9826 5.29423 15.0151 5.28167 15.0454C5.26911 15.0758 5.25069 15.1033 5.22748 15.1265C5.20427 15.1498 5.17671 15.1682 5.14638 15.1807C5.11605 15.1933 5.08355 15.1998 5.05072 15.1998C5.01789 15.1998 4.98538 15.1933 4.95505 15.1807C4.92472 15.1682 4.89717 15.1498 4.87395 15.1266C4.20003 14.4537 3.66538 13.6546 3.3006 12.7749C2.93581 11.8953 2.74805 10.9523 2.74805 10C2.74805 9.04773 2.93581 8.10477 3.3006 7.22511C3.66538 6.34545 4.20003 5.54634 4.87395 4.8735C4.92083 4.82663 4.98442 4.80029 5.05072 4.80029C5.11702 4.8003 5.1806 4.82664 5.22748 4.87352C5.27436 4.9204 5.3007 4.98399 5.30069 5.05029C5.30069 5.11659 5.27435 5.18017 5.22747 5.22705C4.59997 5.85345 4.10215 6.59744 3.76249 7.41645C3.42283 8.23545 3.248 9.11339 3.248 10C3.248 10.8867 3.42283 11.7646 3.76249 12.5836C4.10215 13.4026 4.59997 14.1466 5.22747 14.773ZM17.2505 10C17.2517 10.9523 17.0647 11.8954 16.7002 12.7752C16.3358 13.6549 15.8012 14.454 15.127 15.1266C15.0801 15.1734 15.0165 15.1998 14.9502 15.1998C14.8839 15.1998 14.8204 15.1734 14.7735 15.1265C14.7266 15.0797 14.7003 15.0161 14.7003 14.9498C14.7003 14.8835 14.7266 14.8199 14.7735 14.773C15.401 14.1466 15.8988 13.4026 16.2385 12.5836C16.5781 11.7646 16.753 10.8867 16.753 10C16.753 9.11339 16.5781 8.23545 16.2385 7.41645C15.8988 6.59744 15.401 5.85345 14.7735 5.22705C14.7266 5.18017 14.7003 5.11659 14.7003 5.05029C14.7003 4.98399 14.7266 4.9204 14.7735 4.87352C14.8204 4.82664 14.8839 4.8003 14.9502 4.80029C15.0165 4.80029 15.0801 4.82663 15.127 4.8735C15.8012 5.54603 16.3358 6.34513 16.7002 7.2249C17.0646 8.10467 17.2516 9.04777 17.2505 10Z"
                    fill="white"
                    stroke="white"
                    stroke-width="0.2"
                  ></path>
                </svg>
              </div>
              <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2.5">
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 h-6 relative gap-1 px-2 rounded-[3px] bg-[#cce5ff]">
                  <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1b19]">
                    Talent academy
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 w-80 overflow-hidden px-2.5 py-1">
            <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[5px]">
              <p class="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-[#1e1b19]">
                Latest data received 2 hours ago
              </p>
            </div>
            <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[5px]">
              <p class="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-[#1e1b19]">
                Data Quality
              </p>
              <p class="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-[#1e1b19]">
                3/5
              </p>
            </div>
          </div>
          <div class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden p-2.5 border-t border-r-0 border-b-0 border-l-0 border-[#e6e2da]">
            <div class="flex justify-end items-center flex-grow-0 flex-shrink-0 gap-2.5">
              <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1.5 py-[7px]">
                <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1b19]">
                  3 Subscribers
                </p>
              </div>
            </div>
            <div class="flex justify-end items-center flex-grow relative gap-2.5">
              <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative px-2.5 py-0.5 rounded-[3px] bg-[#e6e2da]">
                <p class="flex-grow-0 flex-shrink-0 text-xs text-center text-[#1e1b19]">
                  Published
                </p>
              </div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M12 3C11.175 3 10.5 3.675 10.5 4.5C10.5 5.325 11.175 6 12 6C12.825 6 13.5 5.325 13.5 4.5C13.5 3.675 12.825 3 12 3ZM12 18C11.175 18 10.5 18.675 10.5 19.5C10.5 20.325 11.175 21 12 21C12.825 21 13.5 20.325 13.5 19.5C13.5 18.675 12.825 18 12 18ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"
                  fill="#1E1B19"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col justify-start items-start w-80 h-[190px] absolute left-[428px] top-[473px] overflow-hidden bg-white border border-gray-200"
          style={{ boxShadow: '0px 1px 3px 0 rgba(0,0,0,0.1), 0px 1px 2px 0 rgba(0,0,0,0.06)' }}
        >
          <div class="flex flex-col justify-between items-start self-stretch flex-grow overflow-hidden p-2.5">
            <div class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
              <div class="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p class="flex-grow-0 flex-shrink-0 w-[270px] text-sm text-left text-[#1e1b19]">
                  Individual Learner Records
                </p>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-grow-0 flex-shrink-0 w-5 h-5"
                  preserveAspectRatio="none"
                >
                  <circle cx="10" cy="10" r="10" fill="#4EBF8D"></circle>
                  <path
                    d="M10.0005 7.75003C9.55547 7.75003 9.12045 7.88199 8.75044 8.12922C8.38043 8.37646 8.09205 8.72786 7.92175 9.13899C7.75145 9.55013 7.70689 10.0025 7.79371 10.439C7.88053 10.8754 8.09482 11.2764 8.40949 11.591C8.72416 11.9057 9.12507 12.12 9.56152 12.2068C9.99798 12.2936 10.4504 12.2491 10.8615 12.0788C11.2726 11.9085 11.6241 11.6201 11.8713 11.2501C12.1185 10.8801 12.2505 10.445 12.2505 10C12.2498 9.4035 12.0125 8.83159 11.5907 8.40978C11.1689 7.98797 10.597 7.7507 10.0005 7.75003ZM10.0005 11.75C9.65436 11.75 9.31602 11.6474 9.02823 11.4551C8.74044 11.2628 8.51614 10.9895 8.38369 10.6697C8.25123 10.35 8.21658 9.99809 8.2841 9.65862C8.35163 9.31915 8.5183 9.00733 8.76304 8.76259C9.00778 8.51785 9.3196 8.35118 9.65907 8.28365C9.99854 8.21613 10.3504 8.25079 10.6702 8.38324C10.9899 8.51569 11.2633 8.74 11.4555 9.02778C11.6478 9.31557 11.7505 9.65391 11.7505 10C11.75 10.464 11.5654 10.9088 11.2373 11.2369C10.9093 11.565 10.4644 11.7495 10.0005 11.75ZM6.08434 8.34582C5.75482 9.12487 5.66548 9.98458 5.82777 10.8147C5.99006 11.6449 6.39658 12.4077 6.99523 13.0052C7.01844 13.0285 7.03686 13.056 7.04942 13.0863C7.06198 13.1167 7.06845 13.1492 7.06845 13.182C7.06845 13.2148 7.06199 13.2473 7.04943 13.2777C7.03687 13.308 7.01845 13.3356 6.99524 13.3588C6.97203 13.382 6.94447 13.4004 6.91414 13.413C6.88381 13.4255 6.85131 13.432 6.81848 13.432C6.78565 13.432 6.75314 13.4255 6.72281 13.413C6.69248 13.4004 6.66493 13.382 6.64171 13.3588C6.20019 12.918 5.84991 12.3944 5.61093 11.8181C5.37194 11.2417 5.24892 10.6239 5.24892 10C5.24892 9.37611 5.37194 8.75832 5.61093 8.18198C5.84991 7.60565 6.20019 7.0821 6.64171 6.64127C6.68859 6.59439 6.75218 6.56805 6.81848 6.56805C6.88478 6.56806 6.94836 6.5944 6.99524 6.64128C7.04212 6.68816 7.06846 6.75175 7.06845 6.81805C7.06845 6.88435 7.04211 6.94793 6.99523 6.99481C6.60706 7.38198 6.29771 7.8408 6.08434 8.34582ZM14.7505 10C14.7512 10.6239 14.6287 11.2418 14.39 11.8182C14.1512 12.3946 13.8009 12.9182 13.3592 13.3588C13.336 13.382 13.3085 13.4004 13.2781 13.413C13.2478 13.4255 13.2153 13.432 13.1825 13.432C13.1496 13.432 13.1171 13.4255 13.0868 13.413C13.0565 13.4004 13.0289 13.382 13.0057 13.3588C12.9825 13.3356 12.9641 13.308 12.9515 13.2777C12.939 13.2473 12.9325 13.2148 12.9325 13.182C12.9325 13.1492 12.939 13.1167 12.9515 13.0863C12.9641 13.056 12.9825 13.0285 13.0057 13.0052C13.4008 12.6108 13.7143 12.1424 13.9281 11.6267C14.142 11.1111 14.2521 10.5583 14.2521 10C14.2521 9.44177 14.142 8.88899 13.9281 8.37332C13.7143 7.85765 13.4008 7.38921 13.0057 6.99481C12.9825 6.9716 12.9641 6.94404 12.9515 6.91371C12.939 6.88338 12.9325 6.85088 12.9325 6.81805C12.9325 6.78522 12.939 6.75271 12.9515 6.72238C12.9641 6.69205 12.9825 6.66449 13.0057 6.64128C13.0289 6.61807 13.0565 6.59965 13.0868 6.58709C13.1171 6.57452 13.1496 6.56806 13.1825 6.56805C13.2153 6.56805 13.2478 6.57452 13.2781 6.58708C13.3085 6.59964 13.336 6.61805 13.3592 6.64127C13.8009 7.08189 14.1512 7.60545 14.39 8.18185C14.6287 8.75825 14.7512 9.37614 14.7505 10ZM5.22747 14.773C5.25068 14.7962 5.2691 14.8238 5.28166 14.8541C5.29422 14.8844 5.30069 14.9169 5.30069 14.9498C5.30069 14.9826 5.29423 15.0151 5.28167 15.0454C5.26911 15.0758 5.25069 15.1033 5.22748 15.1265C5.20427 15.1498 5.17671 15.1682 5.14638 15.1807C5.11605 15.1933 5.08355 15.1998 5.05072 15.1998C5.01789 15.1998 4.98538 15.1933 4.95505 15.1807C4.92472 15.1682 4.89717 15.1498 4.87395 15.1266C4.20003 14.4537 3.66538 13.6546 3.3006 12.7749C2.93581 11.8953 2.74805 10.9523 2.74805 10C2.74805 9.04773 2.93581 8.10477 3.3006 7.22511C3.66538 6.34545 4.20003 5.54634 4.87395 4.8735C4.92083 4.82663 4.98442 4.80029 5.05072 4.80029C5.11702 4.8003 5.1806 4.82664 5.22748 4.87352C5.27436 4.9204 5.3007 4.98399 5.30069 5.05029C5.30069 5.11659 5.27435 5.18017 5.22747 5.22705C4.59997 5.85345 4.10215 6.59744 3.76249 7.41645C3.42283 8.23545 3.248 9.11339 3.248 10C3.248 10.8867 3.42283 11.7646 3.76249 12.5836C4.10215 13.4026 4.59997 14.1466 5.22747 14.773ZM17.2505 10C17.2517 10.9523 17.0647 11.8954 16.7002 12.7752C16.3358 13.6549 15.8012 14.454 15.127 15.1266C15.0801 15.1734 15.0165 15.1998 14.9502 15.1998C14.8839 15.1998 14.8204 15.1734 14.7735 15.1265C14.7266 15.0797 14.7003 15.0161 14.7003 14.9498C14.7003 14.8835 14.7266 14.8199 14.7735 14.773C15.401 14.1466 15.8988 13.4026 16.2385 12.5836C16.5781 11.7646 16.753 10.8867 16.753 10C16.753 9.11339 16.5781 8.23545 16.2385 7.41645C15.8988 6.59744 15.401 5.85345 14.7735 5.22705C14.7266 5.18017 14.7003 5.11659 14.7003 5.05029C14.7003 4.98399 14.7266 4.9204 14.7735 4.87352C14.8204 4.82664 14.8839 4.8003 14.9502 4.80029C15.0165 4.80029 15.0801 4.82663 15.127 4.8735C15.8012 5.54603 16.3358 6.34513 16.7002 7.2249C17.0646 8.10467 17.2516 9.04777 17.2505 10Z"
                    fill="white"
                    stroke="white"
                    stroke-width="0.2"
                  ></path>
                </svg>
              </div>
              <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2.5">
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 h-6 relative gap-1 px-2 rounded-[3px] bg-[#cce5ff]">
                  <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1b19]">
                    Media
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 w-80 overflow-hidden px-2.5 py-1">
            <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[5px]">
              <p class="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-[#1e1b19]">
                Latest data received 2 hours ago
              </p>
            </div>
            <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[5px]">
              <p class="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-[#1e1b19]">
                Data Quality
              </p>
              <p class="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-[#1e1b19]">
                3/5
              </p>
            </div>
          </div>
          <div class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden p-2.5 border-t border-r-0 border-b-0 border-l-0 border-[#e6e2da]">
            <div class="flex justify-end items-center flex-grow-0 flex-shrink-0 gap-2.5">
              <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-1.5 py-[7px]">
                <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative px-2.5 py-0.5 rounded-[3px] bg-[#e6e2da]">
                  <p class="flex-grow-0 flex-shrink-0 text-xs text-center text-[#1e1b19]">
                    Subscribed
                  </p>
                </div>
              </div>
            </div>
            <div class="flex justify-end items-center flex-grow relative gap-2.5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M12 3C11.175 3 10.5 3.675 10.5 4.5C10.5 5.325 11.175 6 12 6C12.825 6 13.5 5.325 13.5 4.5C13.5 3.675 12.825 3 12 3ZM12 18C11.175 18 10.5 18.675 10.5 19.5C10.5 20.325 11.175 21 12 21C12.825 21 13.5 20.325 13.5 19.5C13.5 18.675 12.825 18 12 18ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"
                  fill="#1E1B19"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col justify-start items-start w-80 h-[190px] absolute left-[764px] top-[473px] overflow-hidden bg-white border border-gray-200"
          style={{ boxShadow: '0px 1px 3px 0 rgba(0,0,0,0.1), 0px 1px 2px 0 rgba(0,0,0,0.06)' }}
        >
          <div class="flex flex-col justify-between items-start self-stretch flex-grow overflow-hidden p-2.5">
            <div class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
              <div class="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p class="flex-grow-0 flex-shrink-0 w-[270px] text-sm text-left text-[#1e1b19]">
                  Individual Learner Records
                </p>
                <div class="flex-grow-0 flex-shrink-0 w-5 h-5">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute left-[279.61px] top-[-0.39px]"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <circle cx="10" cy="10" r="10" fill="#F27A75"></circle>
                  </svg>
                  <div class="flex flex-col justify-center items-center w-[19px] h-[18px] absolute left-[280.68px] top-[0.68px] gap-[3.954232931137085px]">
                    <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[3.954232931137085px] p-[1.9771164655685425px]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-grow-0 flex-shrink-0"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M8.17982 0.261597C6.71343 0.261597 5.27997 0.696431 4.06071 1.51111C2.84146 2.32579 1.89116 3.48373 1.33 4.8385C0.768837 6.19326 0.622012 7.68401 0.90809 9.12222C1.19417 10.5604 1.9003 11.8815 2.93719 12.9184C3.97409 13.9553 5.29517 14.6614 6.73338 14.9475C8.17159 15.2336 9.66234 15.0868 11.0171 14.5256C12.3719 13.9644 13.5298 13.0141 14.3445 11.7949C15.1592 10.5756 15.594 9.14217 15.594 7.67578C15.5918 5.7101 14.8099 3.82556 13.42 2.43561C12.03 1.04566 10.1455 0.263814 8.17982 0.261597V0.261597ZM8.17982 14.4968C6.83074 14.4968 5.51196 14.0968 4.39024 13.3473C3.26853 12.5978 2.39425 11.5325 1.87798 10.2861C1.36172 9.0397 1.22664 7.66822 1.48983 6.34506C1.75302 5.02191 2.40266 3.80651 3.3566 2.85257C4.31054 1.89863 5.52594 1.24899 6.84909 0.985796C8.17225 0.722605 9.54373 0.857684 10.7901 1.37395C12.0365 1.89022 13.1018 2.76449 13.8513 3.88621C14.6008 5.00793 15.0009 6.32671 15.0009 7.67578C14.9988 9.48421 14.2795 11.218 13.0008 12.4967C11.722 13.7755 9.98824 14.4948 8.17982 14.4968ZM7.88325 8.26892V4.11697C7.88325 4.03832 7.91449 3.96289 7.97011 3.90727C8.02573 3.85165 8.10116 3.82041 8.17982 3.82041C8.25847 3.82041 8.3339 3.85165 8.38952 3.90727C8.44514 3.96289 8.47638 4.03832 8.47638 4.11697V8.26892C8.47638 8.34757 8.44514 8.42301 8.38952 8.47862C8.3339 8.53424 8.25847 8.56549 8.17982 8.56549C8.10116 8.56549 8.02573 8.53424 7.97011 8.47862C7.91449 8.42301 7.88325 8.34757 7.88325 8.26892ZM8.77295 10.938C8.77295 11.0553 8.73816 11.17 8.67299 11.2676C8.60781 11.3651 8.51518 11.4411 8.4068 11.486C8.29842 11.5309 8.17916 11.5426 8.0641 11.5198C7.94904 11.4969 7.84336 11.4404 7.76041 11.3574C7.67745 11.2745 7.62096 11.1688 7.59808 11.0537C7.57519 10.9387 7.58694 10.8194 7.63183 10.711C7.67672 10.6027 7.75275 10.51 7.85029 10.4449C7.94783 10.3797 8.0625 10.3449 8.17982 10.3449C8.33707 10.3451 8.48783 10.4076 8.59903 10.5188C8.71022 10.63 8.77277 10.7808 8.77295 10.938V10.938Z"
                          fill="white"
                          stroke="white"
                          stroke-width="0.2"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2.5">
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 h-6 relative gap-1 px-2 rounded-[3px] bg-[#cce5ff]">
                  <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1b19]">
                    Tourism
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 w-80 overflow-hidden px-2.5 py-1">
            <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[5px]">
              <p class="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-[#1e1b19]">
                Latest data received yesterday 12:34
              </p>
            </div>
            <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[5px]">
              <p class="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-[#1e1b19]">
                Data Quality
              </p>
              <p class="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-[#1e1b19]">
                3/5
              </p>
            </div>
          </div>
          <div class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden p-2.5 border-t border-r-0 border-b-0 border-l-0 border-[#e6e2da]">
            <div class="flex justify-end items-center flex-grow-0 flex-shrink-0 gap-2.5">
              <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-1.5 py-[7px]">
                <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative px-2.5 py-0.5 rounded-[3px] bg-[#e6e2da]">
                  <p class="flex-grow-0 flex-shrink-0 text-xs text-center text-[#1e1b19]">
                    Subscribed
                  </p>
                </div>
              </div>
            </div>
            <div class="flex justify-end items-center flex-grow relative gap-2.5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M12 3C11.175 3 10.5 3.675 10.5 4.5C10.5 5.325 11.175 6 12 6C12.825 6 13.5 5.325 13.5 4.5C13.5 3.675 12.825 3 12 3ZM12 18C11.175 18 10.5 18.675 10.5 19.5C10.5 20.325 11.175 21 12 21C12.825 21 13.5 20.325 13.5 19.5C13.5 18.675 12.825 18 12 18ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"
                  fill="#1E1B19"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col justify-start items-start w-80 h-[190px] absolute left-[1100px] top-[473px] overflow-hidden bg-white border border-gray-200"
          style={{ boxShadow: '0px 1px 3px 0 rgba(0,0,0,0.1), 0px 1px 2px 0 rgba(0,0,0,0.06)' }}
        >
          <div class="flex flex-col justify-between items-start self-stretch flex-grow overflow-hidden p-2.5">
            <div class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
              <div class="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                <p class="flex-grow-0 flex-shrink-0 w-[270px] text-sm text-left text-[#1e1b19]">
                  Individual Learner Records
                </p>
                <div class="flex-grow-0 flex-shrink-0 w-5 h-5">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute left-[279.61px] top-[-0.39px]"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <circle cx="10" cy="10" r="10" fill="#4EBF8D"></circle>
                  </svg>
                  <div class="flex flex-col justify-center items-center w-[19px] h-[18px] absolute left-[280.68px] top-[0.68px] gap-[3.954232931137085px]">
                    <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[3.954232931137085px] p-[1.9771164655685425px]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-grow-0 flex-shrink-0"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M8.17982 0.261597C6.71343 0.261597 5.27997 0.696431 4.06071 1.51111C2.84146 2.32579 1.89116 3.48373 1.33 4.8385C0.768837 6.19326 0.622012 7.68401 0.90809 9.12222C1.19417 10.5604 1.9003 11.8815 2.93719 12.9184C3.97409 13.9553 5.29517 14.6614 6.73338 14.9475C8.17159 15.2336 9.66234 15.0868 11.0171 14.5256C12.3719 13.9644 13.5298 13.0141 14.3445 11.7949C15.1592 10.5756 15.594 9.14217 15.594 7.67578C15.5918 5.7101 14.8099 3.82556 13.42 2.43561C12.03 1.04566 10.1455 0.263814 8.17982 0.261597V0.261597ZM8.17982 14.4968C6.83074 14.4968 5.51196 14.0968 4.39024 13.3473C3.26853 12.5978 2.39425 11.5325 1.87798 10.2861C1.36172 9.0397 1.22664 7.66822 1.48983 6.34506C1.75302 5.02191 2.40266 3.80651 3.3566 2.85257C4.31054 1.89863 5.52594 1.24899 6.84909 0.985796C8.17225 0.722605 9.54373 0.857684 10.7901 1.37395C12.0365 1.89022 13.1018 2.76449 13.8513 3.88621C14.6008 5.00793 15.0009 6.32671 15.0009 7.67578C14.9988 9.48421 14.2795 11.218 13.0008 12.4967C11.722 13.7755 9.98824 14.4948 8.17982 14.4968ZM7.88325 8.26892V4.11697C7.88325 4.03832 7.91449 3.96289 7.97011 3.90727C8.02573 3.85165 8.10116 3.82041 8.17982 3.82041C8.25847 3.82041 8.3339 3.85165 8.38952 3.90727C8.44514 3.96289 8.47638 4.03832 8.47638 4.11697V8.26892C8.47638 8.34757 8.44514 8.42301 8.38952 8.47862C8.3339 8.53424 8.25847 8.56549 8.17982 8.56549C8.10116 8.56549 8.02573 8.53424 7.97011 8.47862C7.91449 8.42301 7.88325 8.34757 7.88325 8.26892ZM8.77295 10.938C8.77295 11.0553 8.73816 11.17 8.67299 11.2676C8.60781 11.3651 8.51518 11.4411 8.4068 11.486C8.29842 11.5309 8.17916 11.5426 8.0641 11.5198C7.94904 11.4969 7.84336 11.4404 7.76041 11.3574C7.67745 11.2745 7.62096 11.1688 7.59808 11.0537C7.57519 10.9387 7.58694 10.8194 7.63183 10.711C7.67672 10.6027 7.75275 10.51 7.85029 10.4449C7.94783 10.3797 8.0625 10.3449 8.17982 10.3449C8.33707 10.3451 8.48783 10.4076 8.59903 10.5188C8.71022 10.63 8.77277 10.7808 8.77295 10.938V10.938Z"
                          fill="white"
                          stroke="white"
                          stroke-width="0.2"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2.5">
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 h-6 relative gap-1 px-2 rounded-[3px] bg-[#cce5ff]">
                  <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1b19]">
                    Design &#x26; Construction
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 w-80 overflow-hidden px-2.5 py-1">
            <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[5px]">
              <p class="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-[#1e1b19]">
                Latest data received yesterday 12:34
              </p>
            </div>
            <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[5px]">
              <p class="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-[#1e1b19]">
                Data Quality
              </p>
              <p class="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-[#1e1b19]">
                3/5
              </p>
            </div>
          </div>
          <div class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden p-2.5 border-t border-r-0 border-b-0 border-l-0 border-[#e6e2da]">
            <div class="flex justify-end items-center flex-grow-0 flex-shrink-0 gap-2.5">
              <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-1.5 py-[7px]">
                <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative px-2.5 py-0.5 rounded-[3px] bg-[#e6e2da]">
                  <p class="flex-grow-0 flex-shrink-0 text-xs text-center text-[#1e1b19]">
                    Subscribed
                  </p>
                </div>
              </div>
            </div>
            <div class="flex justify-end items-center flex-grow relative gap-2.5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M12 3C11.175 3 10.5 3.675 10.5 4.5C10.5 5.325 11.175 6 12 6C12.825 6 13.5 5.325 13.5 4.5C13.5 3.675 12.825 3 12 3ZM12 18C11.175 18 10.5 18.675 10.5 19.5C10.5 20.325 11.175 21 12 21C12.825 21 13.5 20.325 13.5 19.5C13.5 18.675 12.825 18 12 18ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"
                  fill="#1E1B19"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="flex justify-end items-start w-[1185px] absolute left-[235px] top-[671px]">
          <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1e1b19]">
            Show All
          </p>
          <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-[3.7113523483276367px]">
            <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[3.7113523483276367px] px-[2.5979466438293457px] py-[3.7113523483276367px]">
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M13.3203 6.19675L8.30995 11.2071C8.25775 11.2593 8.18696 11.2886 8.11314 11.2886C8.03933 11.2886 7.96854 11.2593 7.91634 11.2071C7.86415 11.1549 7.83482 11.0841 7.83482 11.0103C7.83482 10.9365 7.86415 10.8657 7.91634 10.8135L12.4515 6.2783H0.876008C0.802184 6.2783 0.731385 6.24898 0.679184 6.19678C0.626983 6.14457 0.597656 6.07377 0.597656 5.99995C0.597656 5.92613 0.626983 5.85533 0.679184 5.80313C0.731385 5.75093 0.802184 5.7216 0.876008 5.7216H12.4515L7.91634 1.18643C7.86415 1.13423 7.83482 1.06344 7.83482 0.989625C7.83482 0.91581 7.86415 0.845018 7.91634 0.792822C7.96854 0.740627 8.03933 0.711304 8.11314 0.711304C8.18696 0.711304 8.25775 0.740627 8.30995 0.792822L13.3203 5.80315C13.3461 5.82899 13.3666 5.85967 13.3806 5.89344C13.3946 5.9272 13.4018 5.9634 13.4018 5.99995C13.4018 6.0365 13.3946 6.0727 13.3806 6.10647C13.3666 6.14023 13.3461 6.17091 13.3203 6.19675V6.19675Z"
                  fill="black"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="w-[1328px] h-[179px]">
        <p class="absolute left-[92px] top-[715px] text-base text-left text-black">
          Data Sources
        </p>
        <div
          class="flex flex-col justify-start items-start w-80 absolute left-[92px] top-[748px] overflow-hidden bg-white border border-gray-200"
          style={{ boxShadow: '0px 1px 3px 0 rgba(0,0,0,0.1), 0px 1px 2px 0 rgba(0,0,0,0.06)' }}
        >
          <div class="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 gap-2 px-5 pt-2.5 pb-2">
            <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
              <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1e1b19]">
                Talent Academy CSV
              </p>
            </div>
            <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
              <div class="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute left-[-0.68px] top-[-0.68px]"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="9" cy="9" r="9" fill="#4EBF8D"></circle>
                </svg>
                <div class="flex flex-col justify-center items-center w-[15.94px] h-[15.94px] absolute left-[0.96px] top-[1.03px] gap-[2.960381269454956px]">
                  <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[2.960381269454956px] px-[1.480190634727478px] py-[2.0722668170928955px]">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="flex-grow-0 flex-shrink-0"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M9.93216 7.56966L9.93205 5.55042C9.93306 5.17125 9.85887 4.79565 9.71376 4.44534C9.56864 4.09504 9.3555 3.77699 9.08665 3.50961L7.35959 1.78255H9.04388C9.10277 1.78255 9.15924 1.75915 9.20088 1.71751C9.24252 1.67588 9.26591 1.6194 9.26591 1.56052C9.26591 1.50163 9.24252 1.44516 9.20088 1.40352C9.15924 1.36188 9.10277 1.33849 9.04388 1.33849H6.8236C6.80899 1.33852 6.79442 1.33999 6.7801 1.34288C6.77365 1.34416 6.76771 1.34657 6.76148 1.34839C6.75375 1.35034 6.74613 1.3527 6.73866 1.35548C6.73149 1.35877 6.7245 1.36245 6.71773 1.36649C6.71196 1.36963 6.70597 1.37218 6.70044 1.37587C6.67609 1.39215 6.65519 1.41307 6.63891 1.43741C6.63534 1.4428 6.63287 1.44865 6.62978 1.45427C6.62106 1.46767 6.61487 1.48257 6.61154 1.49821C6.60967 1.5045 6.60726 1.51052 6.60596 1.51703C6.60306 1.53135 6.60159 1.54591 6.60157 1.56052V3.7808C6.60157 3.83969 6.62496 3.89616 6.6666 3.9378C6.70824 3.97944 6.76471 4.00283 6.8236 4.00283C6.88248 4.00283 6.93896 3.97944 6.9806 3.9378C7.02223 3.89616 7.04563 3.83969 7.04563 3.7808V2.09651L8.77269 3.82357C9.00016 4.04982 9.18051 4.31894 9.30329 4.61535C9.42607 4.91177 9.48885 5.22958 9.488 5.55042L9.4881 7.56967C9.03983 7.62615 8.62992 7.85135 8.34184 8.19942C8.05375 8.54748 7.90914 8.99226 7.93744 9.44319C7.96575 9.89413 8.16483 10.3173 8.49418 10.6266C8.82352 10.936 9.25836 11.1081 9.71019 11.1081C10.162 11.1081 10.5968 10.9359 10.9262 10.6266C11.2555 10.3173 11.4546 9.89408 11.4829 9.44314C11.5112 8.9922 11.3665 8.54744 11.0784 8.19938C10.7904 7.85132 10.3804 7.62613 9.93216 7.56966H9.93216ZM9.71013 10.6637C9.44665 10.6637 9.18909 10.5856 8.97002 10.4392C8.75094 10.2928 8.58019 10.0847 8.47937 9.84132C8.37854 9.59789 8.35215 9.33004 8.40356 9.07162C8.45496 8.81321 8.58184 8.57584 8.76814 8.38953C8.95445 8.20322 9.19182 8.07634 9.45024 8.02494C9.70865 7.97354 9.97651 7.99992 10.2199 8.10075C10.4634 8.20158 10.6714 8.37233 10.8178 8.5914C10.9642 8.81048 11.0423 9.06804 11.0423 9.33152C11.0419 9.68471 10.9014 10.0233 10.6517 10.2731C10.4019 10.5228 10.0633 10.6633 9.71013 10.6637V10.6637ZM5.04753 7.99935C4.98865 7.99935 4.93217 8.02274 4.89054 8.06438C4.8489 8.10602 4.82551 8.16249 4.8255 8.22137V9.90567L3.09844 8.17861C2.87096 7.95235 2.69061 7.68324 2.56783 7.38682C2.44505 7.09041 2.38227 6.77259 2.38313 6.45176L2.38303 4.43251C2.8313 4.37603 3.24121 4.15083 3.52929 3.80276C3.81738 3.45469 3.96199 3.00992 3.93368 2.55899C3.90538 2.10805 3.7063 1.68485 3.37695 1.37553C3.04761 1.06622 2.61277 0.894036 2.16094 0.894043C1.70912 0.89405 1.27428 1.06624 0.944949 1.37557C0.615615 1.6849 0.416541 2.1081 0.388253 2.55904C0.359965 3.00998 0.504588 3.45474 0.792684 3.8028C1.08078 4.15086 1.49069 4.37605 1.93897 4.43252L1.93908 6.45176C1.93806 6.83093 2.01225 7.20654 2.15736 7.55684C2.30248 7.90715 2.51563 8.22519 2.78448 8.49257L4.51154 10.2196H2.82724C2.76836 10.2196 2.71189 10.243 2.67025 10.2847C2.62861 10.3263 2.60522 10.3828 2.60522 10.4417C2.60522 10.5005 2.62861 10.557 2.67025 10.5987C2.71189 10.6403 2.76836 10.6637 2.82724 10.6637H5.04753C5.06213 10.6637 5.07669 10.6622 5.091 10.6593C5.09754 10.658 5.10355 10.6556 5.10984 10.6537C5.1254 10.6504 5.14022 10.6443 5.15356 10.6356C5.15925 10.6325 5.16519 10.63 5.17066 10.6263C5.19502 10.61 5.21593 10.5891 5.23221 10.5648C5.23579 10.5594 5.23823 10.5536 5.24129 10.548C5.24544 10.5411 5.24922 10.5339 5.25259 10.5266C5.25532 10.5192 5.25764 10.5117 5.25956 10.5041C5.26143 10.4977 5.26387 10.4917 5.26517 10.4851C5.26806 10.4708 5.26953 10.4563 5.26956 10.4417V8.22137C5.26956 8.16249 5.24616 8.10602 5.20453 8.06438C5.16289 8.02274 5.10642 7.99935 5.04753 7.99935ZM0.828825 2.67066C0.828825 2.40718 0.906956 2.14962 1.05334 1.93054C1.19972 1.71147 1.40777 1.54072 1.6512 1.43989C1.89462 1.33906 2.16247 1.31268 2.42089 1.36409C2.67931 1.41549 2.91668 1.54236 3.10298 1.72867C3.28929 1.91498 3.41617 2.15235 3.46757 2.41077C3.51897 2.66918 3.49259 2.93704 3.39176 3.18046C3.29093 3.42388 3.12019 3.63194 2.90111 3.77832C2.68204 3.9247 2.42448 4.00283 2.161 4.00283C1.80781 4.00243 1.4692 3.86194 1.21946 3.6122C0.969712 3.36246 0.829229 3.02385 0.828825 2.67066V2.67066Z"
                        fill="#F6F5F2"
                        stroke="white"
                        stroke-width="0.5"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p class="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#1e1b19]">
                Pipeline: CSV Connector 3
              </p>
            </div>
          </div>
          <div class="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 h-[47px] relative gap-0.5 pl-5 pr-2.5 border-t border-r-0 border-b-0 border-l-0 border-[#e6e2da]">
            <p class="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-[#1e1b19]">
              Added 3 days ago
            </p>
          </div>
        </div>
        <div
          class="flex flex-col justify-start items-start w-80 absolute left-[428px] top-[748px] overflow-hidden bg-white border border-gray-200"
          style={{ boxShadow: '0px 1px 3px 0 rgba(0,0,0,0.1), 0px 1px 2px 0 rgba(0,0,0,0.06)' }}
        >
          <div class="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 gap-2 px-5 pt-2.5 pb-2">
            <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
              <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1e1b19]">
                D&#x26;C CSV
              </p>
            </div>
            <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
              <div class="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute left-[-0.68px] top-[-0.68px]"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="9" cy="9" r="9" fill="#4EBF8D"></circle>
                </svg>
                <div class="flex flex-col justify-center items-center w-[15.94px] h-[15.94px] absolute left-[0.96px] top-[1.03px] gap-[2.960381269454956px]">
                  <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[2.960381269454956px] px-[1.480190634727478px] py-[2.0722668170928955px]">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="flex-grow-0 flex-shrink-0"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M9.93216 7.56966L9.93205 5.55042C9.93306 5.17125 9.85887 4.79565 9.71376 4.44534C9.56864 4.09504 9.3555 3.77699 9.08665 3.50961L7.35959 1.78255H9.04388C9.10277 1.78255 9.15924 1.75915 9.20088 1.71751C9.24252 1.67588 9.26591 1.6194 9.26591 1.56052C9.26591 1.50163 9.24252 1.44516 9.20088 1.40352C9.15924 1.36188 9.10277 1.33849 9.04388 1.33849H6.8236C6.80899 1.33852 6.79442 1.33999 6.7801 1.34288C6.77365 1.34416 6.76771 1.34657 6.76148 1.34839C6.75375 1.35034 6.74613 1.3527 6.73866 1.35548C6.73149 1.35877 6.7245 1.36245 6.71773 1.36649C6.71196 1.36963 6.70597 1.37218 6.70044 1.37587C6.67609 1.39215 6.65519 1.41307 6.63891 1.43741C6.63534 1.4428 6.63287 1.44865 6.62978 1.45427C6.62106 1.46767 6.61487 1.48257 6.61154 1.49821C6.60967 1.5045 6.60726 1.51052 6.60596 1.51703C6.60306 1.53135 6.60159 1.54591 6.60157 1.56052V3.7808C6.60157 3.83969 6.62496 3.89616 6.6666 3.9378C6.70824 3.97944 6.76471 4.00283 6.8236 4.00283C6.88248 4.00283 6.93896 3.97944 6.9806 3.9378C7.02223 3.89616 7.04563 3.83969 7.04563 3.7808V2.09651L8.77269 3.82357C9.00016 4.04982 9.18051 4.31894 9.30329 4.61535C9.42607 4.91177 9.48885 5.22958 9.488 5.55042L9.4881 7.56967C9.03983 7.62615 8.62992 7.85135 8.34184 8.19942C8.05375 8.54748 7.90914 8.99226 7.93744 9.44319C7.96575 9.89413 8.16483 10.3173 8.49418 10.6266C8.82352 10.936 9.25836 11.1081 9.71019 11.1081C10.162 11.1081 10.5968 10.9359 10.9262 10.6266C11.2555 10.3173 11.4546 9.89408 11.4829 9.44314C11.5112 8.9922 11.3665 8.54744 11.0784 8.19938C10.7904 7.85132 10.3804 7.62613 9.93216 7.56966H9.93216ZM9.71013 10.6637C9.44665 10.6637 9.18909 10.5856 8.97002 10.4392C8.75094 10.2928 8.58019 10.0847 8.47937 9.84132C8.37854 9.59789 8.35215 9.33004 8.40356 9.07162C8.45496 8.81321 8.58184 8.57584 8.76814 8.38953C8.95445 8.20322 9.19182 8.07634 9.45024 8.02494C9.70865 7.97354 9.97651 7.99992 10.2199 8.10075C10.4634 8.20158 10.6714 8.37233 10.8178 8.5914C10.9642 8.81048 11.0423 9.06804 11.0423 9.33152C11.0419 9.68471 10.9014 10.0233 10.6517 10.2731C10.4019 10.5228 10.0633 10.6633 9.71013 10.6637V10.6637ZM5.04753 7.99935C4.98865 7.99935 4.93217 8.02274 4.89054 8.06438C4.8489 8.10602 4.82551 8.16249 4.8255 8.22137V9.90567L3.09844 8.17861C2.87096 7.95235 2.69061 7.68324 2.56783 7.38682C2.44505 7.09041 2.38227 6.77259 2.38313 6.45176L2.38303 4.43251C2.8313 4.37603 3.24121 4.15083 3.52929 3.80276C3.81738 3.45469 3.96199 3.00992 3.93368 2.55899C3.90538 2.10805 3.7063 1.68485 3.37695 1.37553C3.04761 1.06622 2.61277 0.894036 2.16094 0.894043C1.70912 0.89405 1.27428 1.06624 0.944949 1.37557C0.615615 1.6849 0.416541 2.1081 0.388253 2.55904C0.359965 3.00998 0.504588 3.45474 0.792684 3.8028C1.08078 4.15086 1.49069 4.37605 1.93897 4.43252L1.93908 6.45176C1.93806 6.83093 2.01225 7.20654 2.15736 7.55684C2.30248 7.90715 2.51563 8.22519 2.78448 8.49257L4.51154 10.2196H2.82724C2.76836 10.2196 2.71189 10.243 2.67025 10.2847C2.62861 10.3263 2.60522 10.3828 2.60522 10.4417C2.60522 10.5005 2.62861 10.557 2.67025 10.5987C2.71189 10.6403 2.76836 10.6637 2.82724 10.6637H5.04753C5.06213 10.6637 5.07669 10.6622 5.091 10.6593C5.09754 10.658 5.10355 10.6556 5.10984 10.6537C5.1254 10.6504 5.14022 10.6443 5.15356 10.6356C5.15925 10.6325 5.16519 10.63 5.17066 10.6263C5.19502 10.61 5.21593 10.5891 5.23221 10.5648C5.23579 10.5594 5.23823 10.5536 5.24129 10.548C5.24544 10.5411 5.24922 10.5339 5.25259 10.5266C5.25532 10.5192 5.25764 10.5117 5.25956 10.5041C5.26143 10.4977 5.26387 10.4917 5.26517 10.4851C5.26806 10.4708 5.26953 10.4563 5.26956 10.4417V8.22137C5.26956 8.16249 5.24616 8.10602 5.20453 8.06438C5.16289 8.02274 5.10642 7.99935 5.04753 7.99935ZM0.828825 2.67066C0.828825 2.40718 0.906956 2.14962 1.05334 1.93054C1.19972 1.71147 1.40777 1.54072 1.6512 1.43989C1.89462 1.33906 2.16247 1.31268 2.42089 1.36409C2.67931 1.41549 2.91668 1.54236 3.10298 1.72867C3.28929 1.91498 3.41617 2.15235 3.46757 2.41077C3.51897 2.66918 3.49259 2.93704 3.39176 3.18046C3.29093 3.42388 3.12019 3.63194 2.90111 3.77832C2.68204 3.9247 2.42448 4.00283 2.161 4.00283C1.80781 4.00243 1.4692 3.86194 1.21946 3.6122C0.969712 3.36246 0.829229 3.02385 0.828825 2.67066V2.67066Z"
                        fill="#F6F5F2"
                        stroke="white"
                        stroke-width="0.5"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p class="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#1e1b19]">
                Pipeline: CVS Connector 2
              </p>
            </div>
          </div>
          <div class="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 h-[47px] relative gap-0.5 pl-5 pr-2.5 border-t border-r-0 border-b-0 border-l-0 border-[#e6e2da]">
            <p class="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-[#1e1b19]">
              Added Jan 4th 2023
            </p>
          </div>
        </div>
        <div
          class="flex flex-col justify-start items-start w-80 absolute left-[764px] top-[748px] overflow-hidden bg-white border border-gray-200"
          style={{ boxShadow: '0px 1px 3px 0 rgba(0,0,0,0.1), 0px 1px 2px 0 rgba(0,0,0,0.06)' }}
        >
          <div class="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 gap-2 px-5 pt-2.5 pb-2">
            <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
              <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1e1b19]">
                Media CSV
              </p>
            </div>
            <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
              <div class="flex-grow-0 flex-shrink-0 w-[16.94px] h-[16.94px]">
                <svg
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute left-[-0.34px] top-[1.19px]"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle
                    cx="8.46774"
                    cy="8.99997"
                    r="8.46774"
                    fill="#F27A75"
                  ></circle>
                </svg>
                <div class="flex flex-col justify-center items-center w-[15px] h-[15px] absolute left-[0.91px] top-[2.5px] gap-[2.960381269454956px]">
                  <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[2.960381269454956px] px-[1.480190634727478px] py-[2.0722668170928955px]">
                    <svg
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="flex-grow-0 flex-shrink-0"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M10.4029 7.56954L10.4028 5.5503C10.4038 5.17113 10.3296 4.79552 10.1845 4.44522C10.0393 4.09492 9.8262 3.77687 9.55735 3.50949L7.83029 1.78242H9.51459C9.57347 1.78242 9.62995 1.75903 9.67158 1.71739C9.71322 1.67575 9.73661 1.61928 9.73661 1.56039C9.73661 1.50151 9.71322 1.44504 9.67158 1.4034C9.62995 1.36176 9.57347 1.33837 9.51459 1.33837H7.2943C7.27969 1.3384 7.26512 1.33987 7.2508 1.34276C7.24435 1.34404 7.23841 1.34645 7.23218 1.34827C7.22445 1.35022 7.21683 1.35258 7.20936 1.35536C7.20219 1.35865 7.19521 1.36233 7.18843 1.36636C7.18266 1.36951 7.17667 1.37206 7.17114 1.37575C7.1468 1.39203 7.12589 1.41294 7.10962 1.43729C7.10604 1.44268 7.10357 1.44853 7.10048 1.45414C7.09176 1.46755 7.08558 1.48244 7.08224 1.49808C7.08037 1.50438 7.07796 1.5104 7.07666 1.51691C7.07377 1.53122 7.0723 1.54579 7.07227 1.56039V3.78068C7.07227 3.83957 7.09566 3.89604 7.1373 3.93768C7.17894 3.97932 7.23541 4.00271 7.2943 4.00271C7.35319 4.00271 7.40966 3.97932 7.4513 3.93768C7.49294 3.89604 7.51633 3.83957 7.51633 3.78068V2.09639L9.24339 3.82345C9.47087 4.0497 9.65121 4.31882 9.774 4.61523C9.89678 4.91164 9.95956 5.22946 9.9587 5.5503L9.95881 7.56954C9.51053 7.62603 9.10063 7.85123 8.81254 8.1993C8.52446 8.54736 8.37985 8.99214 8.40815 9.44307C8.43645 9.89401 8.63554 10.3172 8.96488 10.6265C9.29422 10.9358 9.72907 11.108 10.1809 11.108C10.6327 11.108 11.0675 10.9358 11.3969 10.6265C11.7262 10.3172 11.9253 9.89395 11.9536 9.44302C11.9819 8.99208 11.8372 8.54731 11.5491 8.19925C11.2611 7.8512 10.8511 7.62601 10.4029 7.56954H10.4029ZM10.1808 10.6636C9.91736 10.6636 9.65979 10.5854 9.44072 10.4391C9.22165 10.2927 9.0509 10.0846 8.95007 9.84119C8.84924 9.59777 8.82286 9.32992 8.87426 9.0715C8.92566 8.81308 9.05254 8.57571 9.23885 8.38941C9.42515 8.2031 9.66252 8.07622 9.92094 8.02482C10.1794 7.97342 10.4472 7.9998 10.6906 8.10063C10.9341 8.20146 11.1421 8.37221 11.2885 8.59128C11.4349 8.81035 11.513 9.06792 11.513 9.33139C11.5126 9.68458 11.3721 10.0232 11.1224 10.2729C10.8726 10.5227 10.534 10.6632 10.1808 10.6636V10.6636ZM5.51823 7.99922C5.45935 7.99923 5.40288 8.02262 5.36124 8.06426C5.3196 8.1059 5.29621 8.16237 5.29621 8.22125V9.90555L3.56914 8.17848C3.34166 7.95223 3.16132 7.68311 3.03854 7.3867C2.91575 7.09029 2.85298 6.77247 2.85384 6.45164L2.85373 4.43239C3.30201 4.3759 3.71191 4.15071 3.99999 3.80264C4.28808 3.45457 4.43269 3.0098 4.40439 2.55886C4.37609 2.10793 4.177 1.68473 3.84766 1.37541C3.51831 1.06609 3.08347 0.893914 2.63165 0.893921C2.17982 0.893928 1.74499 1.06612 1.41565 1.37545C1.08632 1.68477 0.887244 2.10798 0.858956 2.55892C0.830668 3.00985 0.975292 3.45462 1.26339 3.80268C1.55148 4.15074 1.96139 4.37592 2.40967 4.4324L2.40978 6.45164C2.40876 6.83081 2.48295 7.20641 2.62807 7.55672C2.77318 7.90702 2.98633 8.22507 3.25518 8.49244L4.98224 10.2195H3.29795C3.23906 10.2195 3.18259 10.2429 3.14095 10.2845C3.09931 10.3262 3.07592 10.3827 3.07592 10.4415C3.07592 10.5004 3.09931 10.5569 3.14095 10.5985C3.18259 10.6402 3.23906 10.6636 3.29795 10.6636H5.51823C5.53283 10.6635 5.5474 10.6621 5.56171 10.6592C5.56824 10.6579 5.57426 10.6554 5.58054 10.6536C5.5961 10.6503 5.61092 10.6441 5.62426 10.6355C5.62995 10.6324 5.63589 10.6298 5.64136 10.6262C5.66572 10.6099 5.68663 10.589 5.70291 10.5646C5.70649 10.5593 5.70893 10.5535 5.71199 10.5479C5.71615 10.5409 5.71992 10.5338 5.7233 10.5264C5.72602 10.5191 5.72834 10.5116 5.73026 10.5039C5.73213 10.4976 5.73457 10.4916 5.73587 10.485C5.73877 10.4707 5.74024 10.4561 5.74026 10.4415V8.22125C5.74026 8.16237 5.71687 8.1059 5.67523 8.06426C5.63359 8.02262 5.57712 7.99923 5.51823 7.99922ZM1.29953 2.67054C1.29953 2.40706 1.37766 2.1495 1.52404 1.93042C1.67042 1.71135 1.87848 1.5406 2.1219 1.43977C2.36532 1.33894 2.63318 1.31256 2.89159 1.36396C3.15001 1.41537 3.38738 1.54224 3.57369 1.72855C3.75999 1.91486 3.88687 2.15223 3.93827 2.41064C3.98968 2.66906 3.96329 2.93692 3.86247 3.18034C3.76164 3.42376 3.59089 3.63182 3.37181 3.7782C3.15274 3.92458 2.89518 4.00271 2.6317 4.00271C2.27851 4.00231 1.9399 3.86182 1.69016 3.61208C1.44042 3.36234 1.29993 3.02373 1.29953 2.67054V2.67054Z"
                        fill="#F6F5F2"
                        stroke="white"
                        stroke-width="0.5"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p class="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#1e1b19]">
                Pipeline: CVS Connector
              </p>
            </div>
          </div>
          <div class="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 h-[47px] relative gap-0.5 pl-5 pr-2.5 border-t border-r-0 border-b-0 border-l-0 border-[#e6e2da]">
            <p class="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-[#1e1b19]">
              Added Jan 7th 2023
            </p>
          </div>
        </div>
        <div
          class="flex flex-col justify-start items-start w-80 absolute left-[1100px] top-[748px] overflow-hidden bg-white border border-gray-200"
          style={{ boxShadow: '0px 1px 3px 0 rgba(0,0,0,0.1), 0px 1px 2px 0 rgba(0,0,0,0.06)' }}
        >
          <div class="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 gap-2 px-5 pt-2.5 pb-2">
            <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
              <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1e1b19]">
                Media CSV
              </p>
            </div>
            <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
              <div class="flex-grow-0 flex-shrink-0 w-[16.94px] h-[16.94px]">
                <svg
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute left-[-0.34px] top-[1.19px]"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle
                    cx="8.46774"
                    cy="8.99997"
                    r="8.46774"
                    fill="#F27A75"
                  ></circle>
                </svg>
                <div class="flex flex-col justify-center items-center w-[15px] h-[15px] absolute left-[0.91px] top-[2.5px] gap-[2.960381269454956px]">
                  <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[2.960381269454956px] px-[1.480190634727478px] py-[2.0722668170928955px]">
                    <svg
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="flex-grow-0 flex-shrink-0"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M10.4029 7.56954L10.4028 5.5503C10.4038 5.17113 10.3296 4.79552 10.1845 4.44522C10.0393 4.09492 9.8262 3.77687 9.55735 3.50949L7.83029 1.78242H9.51459C9.57347 1.78242 9.62995 1.75903 9.67158 1.71739C9.71322 1.67575 9.73661 1.61928 9.73661 1.56039C9.73661 1.50151 9.71322 1.44504 9.67158 1.4034C9.62995 1.36176 9.57347 1.33837 9.51459 1.33837H7.2943C7.27969 1.3384 7.26512 1.33987 7.2508 1.34276C7.24435 1.34404 7.23841 1.34645 7.23218 1.34827C7.22445 1.35022 7.21683 1.35258 7.20936 1.35536C7.20219 1.35865 7.19521 1.36233 7.18843 1.36636C7.18266 1.36951 7.17667 1.37206 7.17114 1.37575C7.1468 1.39203 7.12589 1.41294 7.10962 1.43729C7.10604 1.44268 7.10357 1.44853 7.10048 1.45414C7.09176 1.46755 7.08558 1.48244 7.08224 1.49808C7.08037 1.50438 7.07796 1.5104 7.07666 1.51691C7.07377 1.53122 7.0723 1.54579 7.07227 1.56039V3.78068C7.07227 3.83957 7.09566 3.89604 7.1373 3.93768C7.17894 3.97932 7.23541 4.00271 7.2943 4.00271C7.35319 4.00271 7.40966 3.97932 7.4513 3.93768C7.49294 3.89604 7.51633 3.83957 7.51633 3.78068V2.09639L9.24339 3.82345C9.47087 4.0497 9.65121 4.31882 9.774 4.61523C9.89678 4.91164 9.95956 5.22946 9.9587 5.5503L9.95881 7.56954C9.51053 7.62603 9.10063 7.85123 8.81254 8.1993C8.52446 8.54736 8.37985 8.99214 8.40815 9.44307C8.43645 9.89401 8.63554 10.3172 8.96488 10.6265C9.29422 10.9358 9.72907 11.108 10.1809 11.108C10.6327 11.108 11.0675 10.9358 11.3969 10.6265C11.7262 10.3172 11.9253 9.89395 11.9536 9.44302C11.9819 8.99208 11.8372 8.54731 11.5491 8.19925C11.2611 7.8512 10.8511 7.62601 10.4029 7.56954H10.4029ZM10.1808 10.6636C9.91736 10.6636 9.65979 10.5854 9.44072 10.4391C9.22165 10.2927 9.0509 10.0846 8.95007 9.84119C8.84924 9.59777 8.82286 9.32992 8.87426 9.0715C8.92566 8.81308 9.05254 8.57571 9.23885 8.38941C9.42515 8.2031 9.66252 8.07622 9.92094 8.02482C10.1794 7.97342 10.4472 7.9998 10.6906 8.10063C10.9341 8.20146 11.1421 8.37221 11.2885 8.59128C11.4349 8.81035 11.513 9.06792 11.513 9.33139C11.5126 9.68458 11.3721 10.0232 11.1224 10.2729C10.8726 10.5227 10.534 10.6632 10.1808 10.6636V10.6636ZM5.51823 7.99922C5.45935 7.99923 5.40288 8.02262 5.36124 8.06426C5.3196 8.1059 5.29621 8.16237 5.29621 8.22125V9.90555L3.56914 8.17848C3.34166 7.95223 3.16132 7.68311 3.03854 7.3867C2.91575 7.09029 2.85298 6.77247 2.85384 6.45164L2.85373 4.43239C3.30201 4.3759 3.71191 4.15071 3.99999 3.80264C4.28808 3.45457 4.43269 3.0098 4.40439 2.55886C4.37609 2.10793 4.177 1.68473 3.84766 1.37541C3.51831 1.06609 3.08347 0.893914 2.63165 0.893921C2.17982 0.893928 1.74499 1.06612 1.41565 1.37545C1.08632 1.68477 0.887244 2.10798 0.858956 2.55892C0.830668 3.00985 0.975292 3.45462 1.26339 3.80268C1.55148 4.15074 1.96139 4.37592 2.40967 4.4324L2.40978 6.45164C2.40876 6.83081 2.48295 7.20641 2.62807 7.55672C2.77318 7.90702 2.98633 8.22507 3.25518 8.49244L4.98224 10.2195H3.29795C3.23906 10.2195 3.18259 10.2429 3.14095 10.2845C3.09931 10.3262 3.07592 10.3827 3.07592 10.4415C3.07592 10.5004 3.09931 10.5569 3.14095 10.5985C3.18259 10.6402 3.23906 10.6636 3.29795 10.6636H5.51823C5.53283 10.6635 5.5474 10.6621 5.56171 10.6592C5.56824 10.6579 5.57426 10.6554 5.58054 10.6536C5.5961 10.6503 5.61092 10.6441 5.62426 10.6355C5.62995 10.6324 5.63589 10.6298 5.64136 10.6262C5.66572 10.6099 5.68663 10.589 5.70291 10.5646C5.70649 10.5593 5.70893 10.5535 5.71199 10.5479C5.71615 10.5409 5.71992 10.5338 5.7233 10.5264C5.72602 10.5191 5.72834 10.5116 5.73026 10.5039C5.73213 10.4976 5.73457 10.4916 5.73587 10.485C5.73877 10.4707 5.74024 10.4561 5.74026 10.4415V8.22125C5.74026 8.16237 5.71687 8.1059 5.67523 8.06426C5.63359 8.02262 5.57712 7.99923 5.51823 7.99922ZM1.29953 2.67054C1.29953 2.40706 1.37766 2.1495 1.52404 1.93042C1.67042 1.71135 1.87848 1.5406 2.1219 1.43977C2.36532 1.33894 2.63318 1.31256 2.89159 1.36396C3.15001 1.41537 3.38738 1.54224 3.57369 1.72855C3.75999 1.91486 3.88687 2.15223 3.93827 2.41064C3.98968 2.66906 3.96329 2.93692 3.86247 3.18034C3.76164 3.42376 3.59089 3.63182 3.37181 3.7782C3.15274 3.92458 2.89518 4.00271 2.6317 4.00271C2.27851 4.00231 1.9399 3.86182 1.69016 3.61208C1.44042 3.36234 1.29993 3.02373 1.29953 2.67054V2.67054Z"
                        fill="#F6F5F2"
                        stroke="white"
                        stroke-width="0.5"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p class="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#1e1b19]">
                Pipeline: CVS Connector
              </p>
            </div>
          </div>
          <div class="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 h-[47px] relative gap-0.5 pl-5 pr-2.5 border-t border-r-0 border-b-0 border-l-0 border-[#e6e2da]">
            <p class="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-[#1e1b19]">
              Added Jan 7th 2023
            </p>
          </div>
        </div>
        <div class="flex justify-end items-start w-[1260px] absolute left-40 top-[874px]">
          <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1e1b19]">
            Show All
          </p>
          <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-[3.7113523483276367px]">
            <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[3.7113523483276367px] px-[2.5979466438293457px] py-[3.7113523483276367px]">
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M13.3203 6.19675L8.30995 11.2071C8.25775 11.2593 8.18696 11.2886 8.11314 11.2886C8.03933 11.2886 7.96854 11.2593 7.91634 11.2071C7.86415 11.1549 7.83482 11.0841 7.83482 11.0103C7.83482 10.9365 7.86415 10.8657 7.91634 10.8135L12.4515 6.2783H0.876008C0.802184 6.2783 0.731385 6.24898 0.679184 6.19678C0.626983 6.14457 0.597656 6.07377 0.597656 5.99995C0.597656 5.92613 0.626983 5.85533 0.679184 5.80313C0.731385 5.75093 0.802184 5.7216 0.876008 5.7216H12.4515L7.91634 1.18643C7.86415 1.13423 7.83482 1.06344 7.83482 0.989625C7.83482 0.91581 7.86415 0.845018 7.91634 0.792822C7.96854 0.740627 8.03933 0.711304 8.11314 0.711304C8.18696 0.711304 8.25775 0.740627 8.30995 0.792822L13.3203 5.80315C13.3461 5.82899 13.3666 5.85967 13.3806 5.89344C13.3946 5.9272 13.4018 5.9634 13.4018 5.99995C13.4018 6.0365 13.3946 6.0727 13.3806 6.10647C13.3666 6.14023 13.3461 6.17091 13.3203 6.19675V6.19675Z"
                  fill="black"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="w-[1328px] h-[95px]">
        <div
          class="w-80 h-16 absolute left-[92px] top-[129px] rounded-[3px] bg-white border border-[#eaecf0]"
          style={{ boxShadow: '0px 1px 3px 0 rgba(16,24,40,0.1), 0px 1px 2px 0 rgba(16,24,40,0.06)' }}
        >
          <svg
            width="99"
            height="9"
            viewBox="0 0 99 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute left-[79.42px] top-[26px]"
            preserveAspectRatio="none"
          >
            <path
              d="M0.421875 4.31836C0.421875 3.52148 0.605469 2.79297 0.972656 2.13281C1.33984 1.47266 1.84766 0.953125 2.49609 0.574219C3.14844 0.191406 3.87305 0 4.66992 0C5.26758 0 5.83594 0.115234 6.375 0.345703C6.91797 0.576172 7.37305 0.892578 7.74023 1.29492L6.9375 2.08594C6.68359 1.80859 6.35156 1.58203 5.94141 1.40625C5.53125 1.22656 5.10742 1.13672 4.66992 1.13672C3.81055 1.13672 3.08594 1.44141 2.49609 2.05078C1.91016 2.66016 1.61719 3.41602 1.61719 4.31836C1.61719 4.93945 1.75586 5.49414 2.0332 5.98242C2.31055 6.4668 2.6875 6.8418 3.16406 7.10742C3.64453 7.36914 4.18164 7.5 4.77539 7.5C5.29102 7.5 5.75195 7.38672 6.1582 7.16016C6.56836 6.92969 6.91211 6.64648 7.18945 6.31055L8.03906 7.07812C7.67188 7.54688 7.19531 7.92383 6.60938 8.20898C6.02344 8.49414 5.41211 8.63672 4.77539 8.63672C4.1582 8.63672 3.58008 8.52734 3.04102 8.30859C2.50195 8.08984 2.04102 7.79102 1.6582 7.41211C1.27539 7.0332 0.972656 6.57617 0.75 6.04102C0.53125 5.50586 0.421875 4.93164 0.421875 4.31836Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M12.3049 2.79492L12.176 3.88477C12.0549 3.85352 11.9065 3.83789 11.7307 3.83789C11.4416 3.83789 11.1545 3.92773 10.8694 4.10742C10.5842 4.28711 10.3635 4.51367 10.2073 4.78711V8.51953H9.06469V2.87695H10.1663V3.52734C10.3186 3.3125 10.5413 3.13086 10.8342 2.98242C11.1311 2.83398 11.4729 2.75977 11.8596 2.75977C12.0198 2.75977 12.1682 2.77148 12.3049 2.79492Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M18.1645 5.94141H13.8227C13.854 6.41797 14.0434 6.82031 14.3911 7.14844C14.7388 7.47656 15.1567 7.64062 15.645 7.64062C16.02 7.64062 16.3305 7.57031 16.5766 7.42969C16.8266 7.28906 17.0552 7.10352 17.2622 6.87305L18.0063 7.58203C17.768 7.88281 17.4458 8.13477 17.0395 8.33789C16.6372 8.53711 16.1684 8.63672 15.6333 8.63672C15.0903 8.63672 14.5962 8.51172 14.1509 8.26172C13.7055 8.00781 13.354 7.65625 13.0962 7.20703C12.8423 6.75781 12.7153 6.25586 12.7153 5.70117C12.7153 4.85352 12.9731 4.15234 13.4888 3.59766C14.0083 3.03906 14.6665 2.75977 15.4634 2.75977C16.2446 2.75977 16.8911 3.04102 17.4028 3.60352C17.9184 4.16211 18.1763 4.86133 18.1763 5.70117C18.1763 5.79102 18.1723 5.87109 18.1645 5.94141ZM15.4985 3.75586C15.1313 3.75586 14.7993 3.86914 14.5024 4.0957C14.2095 4.32227 14.0141 4.61719 13.9165 4.98047H16.9868C16.9009 4.625 16.7153 4.33203 16.4302 4.10156C16.1489 3.87109 15.8384 3.75586 15.4985 3.75586Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M23.614 8.51953V8.00391C23.1452 8.42578 22.5652 8.63672 21.8738 8.63672C21.3464 8.63672 20.8738 8.51367 20.4558 8.26758C20.0183 8.00977 19.6687 7.65625 19.407 7.20703C19.1452 6.75391 19.0144 6.25195 19.0144 5.70117C19.0144 5.15039 19.1472 4.64648 19.4128 4.18945C19.6784 3.73242 20.03 3.375 20.4675 3.11719C20.8698 2.87891 21.3288 2.75977 21.8445 2.75977C22.532 2.75977 23.1218 2.97266 23.614 3.39844V2.87695H24.7155V8.51953H23.614ZM23.573 6.75586V4.64062C23.3894 4.39844 23.157 4.20508 22.8757 4.06055C22.5984 3.91211 22.2956 3.83789 21.9675 3.83789C21.4363 3.83789 21.0007 4.02148 20.6609 4.38867C20.3249 4.75586 20.157 5.19336 20.157 5.70117C20.157 6.21289 20.3347 6.65039 20.6902 7.01367C21.0456 7.37695 21.4909 7.55859 22.0261 7.55859C22.3191 7.55859 22.6023 7.48828 22.8757 7.34766C23.1491 7.20703 23.3816 7.00977 23.573 6.75586Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M29.7724 7.48828L30.0009 8.51953C29.7588 8.59766 29.4619 8.63672 29.1103 8.63672C28.4306 8.63672 27.8994 8.41797 27.5166 7.98047C27.2119 7.64453 27.0595 7.14453 27.0595 6.48047V3.90234H25.6181V2.87695H27.0595V1.31836H28.2021V2.87695H30.0009V3.90234H28.2021V6.53906C28.2021 6.89453 28.2568 7.13477 28.3662 7.25977C28.4443 7.35352 28.5556 7.42773 28.7002 7.48242C28.8447 7.5332 28.9951 7.55859 29.1513 7.55859C29.3974 7.55859 29.6045 7.53516 29.7724 7.48828Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M36.1008 5.94141H31.759C31.7902 6.41797 31.9797 6.82031 32.3273 7.14844C32.675 7.47656 33.093 7.64062 33.5812 7.64062C33.9562 7.64062 34.2668 7.57031 34.5129 7.42969C34.7629 7.28906 34.9914 7.10352 35.1984 6.87305L35.9426 7.58203C35.7043 7.88281 35.382 8.13477 34.9758 8.33789C34.5734 8.53711 34.1047 8.63672 33.5695 8.63672C33.0266 8.63672 32.5324 8.51172 32.0871 8.26172C31.6418 8.00781 31.2902 7.65625 31.0324 7.20703C30.7785 6.75781 30.6516 6.25586 30.6516 5.70117C30.6516 4.85352 30.9094 4.15234 31.425 3.59766C31.9445 3.03906 32.6027 2.75977 33.3996 2.75977C34.1809 2.75977 34.8273 3.04102 35.3391 3.60352C35.8547 4.16211 36.1125 4.86133 36.1125 5.70117C36.1125 5.79102 36.1086 5.87109 36.1008 5.94141ZM33.4348 3.75586C33.0676 3.75586 32.7355 3.86914 32.4387 4.0957C32.1457 4.32227 31.9504 4.61719 31.8527 4.98047H34.923C34.8371 4.625 34.6516 4.33203 34.3664 4.10156C34.0852 3.87109 33.7746 3.75586 33.4348 3.75586Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M46.0973 5.63672C46.277 5.22266 46.3669 4.7832 46.3669 4.31836C46.3669 3.85352 46.277 3.41797 46.0973 3.01172C45.9177 2.60156 45.6677 2.25391 45.3473 1.96875C45.0739 1.73047 44.7477 1.55273 44.3688 1.43555C43.9899 1.31836 43.5153 1.25977 42.945 1.25977H41.6852V7.37695H42.945C43.5153 7.37695 43.9899 7.32031 44.3688 7.20703C44.7477 7.08984 45.0739 6.91211 45.3473 6.67383C45.6677 6.39258 45.9177 6.04688 46.0973 5.63672ZM43.0036 8.51953H40.4841V0.117188H43.0036C44.2028 0.117188 45.1637 0.382812 45.8864 0.914062C46.4098 1.30469 46.82 1.79883 47.1169 2.39648C47.4177 2.99023 47.568 3.63086 47.568 4.31836C47.568 5.00977 47.4196 5.6543 47.1227 6.25195C46.8259 6.84961 46.4177 7.3418 45.8981 7.72852C45.1794 8.25586 44.2145 8.51953 43.0036 8.51953Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M52.8827 8.51953V8.00391C52.414 8.42578 51.8339 8.63672 51.1425 8.63672C50.6152 8.63672 50.1425 8.51367 49.7245 8.26758C49.287 8.00977 48.9374 7.65625 48.6757 7.20703C48.414 6.75391 48.2831 6.25195 48.2831 5.70117C48.2831 5.15039 48.4159 4.64648 48.6816 4.18945C48.9472 3.73242 49.2988 3.375 49.7363 3.11719C50.1386 2.87891 50.5976 2.75977 51.1132 2.75977C51.8007 2.75977 52.3905 2.97266 52.8827 3.39844V2.87695H53.9843V8.51953H52.8827ZM52.8417 6.75586V4.64062C52.6581 4.39844 52.4257 4.20508 52.1445 4.06055C51.8671 3.91211 51.5644 3.83789 51.2363 3.83789C50.705 3.83789 50.2695 4.02148 49.9296 4.38867C49.5937 4.75586 49.4257 5.19336 49.4257 5.70117C49.4257 6.21289 49.6034 6.65039 49.9589 7.01367C50.3144 7.37695 50.7597 7.55859 51.2948 7.55859C51.5878 7.55859 51.871 7.48828 52.1445 7.34766C52.4179 7.20703 52.6503 7.00977 52.8417 6.75586Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M55.2502 7.85742L55.8361 7.01953C56.3673 7.43359 56.924 7.64062 57.506 7.64062C57.7677 7.64062 57.9963 7.57617 58.1916 7.44727C58.3908 7.31836 58.4904 7.14844 58.4904 6.9375C58.4904 6.8125 58.4572 6.70703 58.3908 6.62109C58.3283 6.53125 58.2306 6.45703 58.0978 6.39844C57.965 6.33594 57.8361 6.28711 57.7111 6.25195C57.5861 6.21289 57.422 6.16797 57.2189 6.11719C57.0158 6.06641 56.8517 6.01953 56.7267 5.97656C55.8634 5.6875 55.4318 5.20312 55.4318 4.52344C55.4318 4.23047 55.4923 3.96875 55.6134 3.73828C55.7345 3.50781 55.8947 3.32422 56.0939 3.1875C56.297 3.04688 56.5197 2.94141 56.7619 2.87109C57.0041 2.79688 57.256 2.75977 57.5177 2.75977C58.2482 2.75977 58.8713 2.9668 59.3869 3.38086L58.8009 4.20117C58.4103 3.9043 58.006 3.75586 57.588 3.75586C57.3029 3.75586 57.0607 3.82031 56.8615 3.94922C56.6662 4.07812 56.5685 4.25 56.5685 4.46484C56.5685 4.53906 56.5861 4.60742 56.6213 4.66992C56.6603 4.72852 56.7052 4.7793 56.756 4.82227C56.8068 4.86133 56.883 4.90039 56.9845 4.93945C57.0861 4.97852 57.174 5.00977 57.2482 5.0332C57.3263 5.05664 57.4357 5.08594 57.5763 5.12109C57.7873 5.17578 57.9728 5.23047 58.133 5.28516C58.297 5.33594 58.4787 5.41211 58.6779 5.51367C58.8771 5.61523 59.0392 5.72656 59.1642 5.84766C59.2931 5.96484 59.4025 6.11719 59.4923 6.30469C59.5822 6.48828 59.6271 6.69141 59.6271 6.91406C59.6271 7.42969 59.4201 7.8457 59.006 8.16211C58.5959 8.47852 58.1037 8.63672 57.5295 8.63672C56.6505 8.63672 55.8908 8.37695 55.2502 7.85742Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M62.1527 0V3.36914C62.6293 2.96289 63.1801 2.75977 63.8051 2.75977C64.2113 2.75977 64.5922 2.84961 64.9477 3.0293C65.307 3.20508 65.6098 3.44727 65.8559 3.75586C66.227 4.22852 66.4125 4.89648 66.4125 5.75977V8.51953H65.2699V5.70117C65.2699 5.09961 65.1586 4.66211 64.9359 4.38867C64.8031 4.2207 64.6332 4.08789 64.4262 3.99023C64.2191 3.88867 64.0004 3.83789 63.7699 3.83789C63.1293 3.83789 62.5902 4.10547 62.1527 4.64062V8.51953H61.0102V0H62.1527Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M69.1959 8.00391V8.51953H68.0944V0H69.237V3.36914C69.7213 2.96289 70.2975 2.75977 70.9655 2.75977C71.4811 2.75977 71.9401 2.87891 72.3424 3.11719C72.7799 3.375 73.1315 3.73242 73.3971 4.18945C73.6627 4.64648 73.7955 5.15039 73.7955 5.70117C73.7955 6.25195 73.6647 6.75391 73.403 7.20703C73.1413 7.65625 72.7916 8.00977 72.3541 8.26758C71.9362 8.51367 71.4635 8.63672 70.9362 8.63672C70.2448 8.63672 69.6647 8.42578 69.1959 8.00391ZM69.237 4.64062V6.75586C69.4284 7.00977 69.6608 7.20703 69.9342 7.34766C70.2077 7.48828 70.4909 7.55859 70.7838 7.55859C71.319 7.55859 71.7643 7.37695 72.1198 7.01367C72.4752 6.65039 72.653 6.21289 72.653 5.70117C72.653 5.19336 72.483 4.75586 72.1432 4.38867C71.8073 4.02148 71.3737 3.83789 70.8424 3.83789C70.5143 3.83789 70.2096 3.91211 69.9284 4.06055C69.651 4.20508 69.4205 4.39844 69.237 4.64062Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M75.4716 7.79883C74.9169 7.24023 74.6395 6.54102 74.6395 5.70117C74.6395 4.86133 74.9169 4.16211 75.4716 3.60352C76.0263 3.04102 76.7216 2.75977 77.5575 2.75977C78.3934 2.75977 79.0868 3.04102 79.6376 3.60352C80.1923 4.16211 80.4696 4.86133 80.4696 5.70117C80.4696 6.54102 80.1923 7.24023 79.6376 7.79883C79.0868 8.35742 78.3934 8.63672 77.5575 8.63672C76.7216 8.63672 76.0263 8.35742 75.4716 7.79883ZM76.2802 4.37695C75.9481 4.73633 75.7821 5.17773 75.7821 5.70117C75.7821 6.22461 75.9481 6.66602 76.2802 7.02539C76.6161 7.38086 77.0419 7.55859 77.5575 7.55859C78.0731 7.55859 78.497 7.38086 78.829 7.02539C79.1649 6.66602 79.3329 6.22461 79.3329 5.70117C79.3329 5.17773 79.1649 4.73633 78.829 4.37695C78.497 4.01758 78.0731 3.83789 77.5575 3.83789C77.0419 3.83789 76.6161 4.01758 76.2802 4.37695Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M85.9132 8.51953V8.00391C85.4445 8.42578 84.8644 8.63672 84.173 8.63672C83.6456 8.63672 83.173 8.51367 82.755 8.26758C82.3175 8.00977 81.9679 7.65625 81.7062 7.20703C81.4445 6.75391 81.3136 6.25195 81.3136 5.70117C81.3136 5.15039 81.4464 4.64648 81.712 4.18945C81.9777 3.73242 82.3292 3.375 82.7667 3.11719C83.1691 2.87891 83.628 2.75977 84.1437 2.75977C84.8312 2.75977 85.421 2.97266 85.9132 3.39844V2.87695H87.0148V8.51953H85.9132ZM85.8722 6.75586V4.64062C85.6886 4.39844 85.4562 4.20508 85.1749 4.06055C84.8976 3.91211 84.5948 3.83789 84.2667 3.83789C83.7355 3.83789 83.2999 4.02148 82.9601 4.38867C82.6241 4.75586 82.4562 5.19336 82.4562 5.70117C82.4562 6.21289 82.6339 6.65039 82.9894 7.01367C83.3448 7.37695 83.7902 7.55859 84.3253 7.55859C84.6183 7.55859 84.9015 7.48828 85.1749 7.34766C85.4484 7.20703 85.6808 7.00977 85.8722 6.75586Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M92.0599 2.79492L91.931 3.88477C91.8099 3.85352 91.6615 3.83789 91.4857 3.83789C91.1966 3.83789 90.9095 3.92773 90.6244 4.10742C90.3392 4.28711 90.1185 4.51367 89.9623 4.78711V8.51953H88.8197V2.87695H89.9212V3.52734C90.0736 3.3125 90.2962 3.13086 90.5892 2.98242C90.8861 2.83398 91.2279 2.75977 91.6146 2.75977C91.7748 2.75977 91.9232 2.77148 92.0599 2.79492Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M97.0699 8.51953V8.00391C96.6012 8.42578 96.0211 8.63672 95.3297 8.63672C94.8023 8.63672 94.3297 8.51367 93.9117 8.26758C93.4742 8.00977 93.1246 7.65625 92.8629 7.20703C92.6012 6.75391 92.4703 6.25195 92.4703 5.70117C92.4703 5.15039 92.6031 4.64648 92.8688 4.18945C93.1344 3.73242 93.4859 3.375 93.9234 3.11719C94.3258 2.87891 94.7848 2.75977 95.3004 2.75977C95.9684 2.75977 96.5445 2.96289 97.0289 3.36914V0H98.1715V8.51953H97.0699ZM97.0289 6.75586V4.64062C96.8453 4.39844 96.6129 4.20508 96.3316 4.06055C96.0543 3.91211 95.7516 3.83789 95.4234 3.83789C94.8922 3.83789 94.4566 4.02148 94.1168 4.38867C93.7809 4.75586 93.6129 5.19336 93.6129 5.70117C93.6129 6.21289 93.7906 6.65039 94.1461 7.01367C94.5016 7.37695 94.9469 7.55859 95.482 7.55859C95.775 7.55859 96.0582 7.48828 96.3316 7.34766C96.6051 7.20703 96.8375 7.00977 97.0289 6.75586Z"
              fill="#1E1B19"
            ></path>
          </svg>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-7 h-7 absolute left-8 top-[18px]"
            preserveAspectRatio="none"
          >
            <path d="M14 14H8Z" fill="#1E1B19"></path>
            <path
              d="M14 8V14M14 14V20M14 14H20M14 14H8"
              stroke="#1E1B19"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <rect
              x="1"
              y="1"
              width="26"
              height="26"
              rx="13"
              stroke="#1E1B19"
              stroke-width="2"
            ></rect>
          </svg>
          <div class="flex flex-col justify-center items-center absolute left-[269px] top-[23px] gap-1">
            <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1">
              <svg
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M20.5319 17.0851H19.383V1.38298C19.383 1.28141 19.3426 1.184 19.2708 1.11218C19.199 1.04036 19.1016 1.00001 19 1H13.6383C13.5367 1.00001 13.4393 1.04036 13.3675 1.11218C13.2957 1.184 13.2553 1.28141 13.2553 1.38298V5.59574H8.2766C8.17503 5.59575 8.07762 5.6361 8.00579 5.70792C7.93397 5.77974 7.89362 5.87715 7.89362 5.97872V10.1915H2.91489C2.81332 10.1915 2.71591 10.2318 2.64409 10.3037C2.57227 10.3755 2.53192 10.4729 2.53191 10.5745V17.0851H1.38298C1.28141 17.0851 1.18399 17.1255 1.11217 17.1973C1.04035 17.2691 1 17.3665 1 17.4681C1 17.5697 1.04035 17.6671 1.11217 17.7389C1.18399 17.8107 1.28141 17.8511 1.38298 17.8511H20.5319C20.6335 17.8511 20.7309 17.8107 20.8027 17.7389C20.8745 17.6671 20.9149 17.5697 20.9149 17.4681C20.9149 17.3665 20.8745 17.2691 20.8027 17.1973C20.7309 17.1255 20.6335 17.0851 20.5319 17.0851ZM8.65957 6.3617H13.2553V17.0851H8.65957V6.3617ZM3.29787 10.9574H7.89362V17.0851H3.29787V10.9574ZM14.0213 17.0851V1.76596H18.617V17.0851H14.0213Z"
                  fill="black"
                  stroke="black"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <svg
          width="326"
          height="70"
          viewBox="0 0 326 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-80 h-16 absolute left-[428px] top-[129px]"
          preserveAspectRatio="none"
        >
          <g filter="url(#filter0_dd_588_472538)">
            <rect
              x="3"
              y="2"
              width="320"
              height="64"
              rx="3"
              fill="white"
            ></rect>
            <path d="M49 34H43Z" fill="#1E1B19"></path>
            <path
              d="M49 28V34M49 34V40M49 34H55M49 34H43"
              stroke="#1E1B19"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <rect
              x="36"
              y="21"
              width="26"
              height="26"
              rx="13"
              stroke="#1E1B19"
              stroke-width="2"
            ></rect>
            <rect x="261.5" y="19" width="30" height="30" fill="white"></rect>
            <path
              d="M283.77 41.3043C282.361 42.7137 280.557 43.6651 278.586 44.0383C276.616 44.4115 274.567 44.1897 272.7 43.4009C270.832 42.6121 269.23 41.2917 268.095 39.6068C266.96 37.9219 266.343 35.9481 266.323 33.935C266.304 31.9219 266.881 29.9599 267.983 28.2971C269.085 26.6343 270.661 25.3455 272.514 24.5935C274.366 23.8415 276.41 23.6602 278.389 24.0725C280.367 24.4848 282.19 25.4722 283.628 26.9098L276.513 34.0247L283.77 41.3043Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M270.955 39.5734C274.095 42.7137 279.155 42.7447 282.257 39.6427C285.359 36.5407 285.328 31.4804 282.188 28.3401C279.048 25.1998 273.987 25.1687 270.885 28.2707C267.783 31.3727 267.814 36.4331 270.955 39.5734Z"
              fill="white"
            ></path>
            <path
              style={{ mixBlendMode: 'multiply' }}
              d="M274.573 40.768C277.665 42.0741 281.18 40.647 282.425 37.5805C283.67 34.5139 282.173 30.9693 279.081 29.6632C275.989 28.3571 272.473 29.7842 271.228 32.8508C269.984 35.9173 271.481 39.462 274.573 40.768Z"
              fill="url(#paint0_radial_588_472538)"
            ></path>
            <path
              d="M288.731 30.7709L288.11 31.5554C288.788 32.091 289.226 32.8719 289.33 33.725C289.434 34.5777 289.194 35.4319 288.668 36.1009C288.141 36.7698 287.368 37.2009 286.517 37.2982C285.684 37.3936 284.843 37.161 284.172 36.6487L284.142 36.6182L284.099 36.584C283.539 36.134 282.824 35.9197 282.108 35.9894C281.391 36.0592 280.731 36.4078 280.271 36.9617L280.265 36.9683L280.26 36.9751C279.65 37.7349 278.818 38.2854 277.878 38.5502C276.937 38.8151 275.935 38.7815 275.008 38.4523C274.081 38.123 273.276 37.5146 272.706 36.711C272.135 35.9074 271.828 34.9491 271.824 33.9691C271.821 32.9892 272.121 32.0358 272.683 31.2399C273.246 30.4441 274.042 29.8439 274.964 29.5223C275.886 29.2006 276.888 29.1733 277.833 29.4456C278.777 29.7179 279.617 30.2764 280.235 31.0443L280.241 31.0516L280.247 31.0588C280.708 31.6096 281.365 31.9605 282.08 32.0351C282.794 32.1098 283.51 31.9019 284.073 31.4537L284.117 31.4186L284.139 31.3968C284.706 30.9892 285.394 30.7772 286.099 30.7953C286.826 30.814 287.529 31.0767 288.094 31.5425L288.731 30.7709Z"
              stroke="#1E1B19"
              stroke-width="2"
            ></path>
            <circle cx="286.057" cy="34.0078" r="1.25" fill="black"></circle>
            <path
              d="M83.4219 32.7988C83.4219 32.002 83.6055 31.2734 83.9727 30.6133C84.3398 29.9531 84.8477 29.4336 85.4961 29.0547C86.1484 28.6719 86.873 28.4805 87.6699 28.4805C88.2676 28.4805 88.8359 28.5957 89.375 28.8262C89.918 29.0566 90.373 29.373 90.7402 29.7754L89.9375 30.5664C89.6836 30.2891 89.3516 30.0625 88.9414 29.8867C88.5312 29.707 88.1074 29.6172 87.6699 29.6172C86.8105 29.6172 86.0859 29.9219 85.4961 30.5312C84.9102 31.1406 84.6172 31.8965 84.6172 32.7988C84.6172 33.4199 84.7559 33.9746 85.0332 34.4629C85.3105 34.9473 85.6875 35.3223 86.1641 35.5879C86.6445 35.8496 87.1816 35.9805 87.7754 35.9805C88.291 35.9805 88.752 35.8672 89.1582 35.6406C89.5684 35.4102 89.9121 35.127 90.1895 34.791L91.0391 35.5586C90.6719 36.0273 90.1953 36.4043 89.6094 36.6895C89.0234 36.9746 88.4121 37.1172 87.7754 37.1172C87.1582 37.1172 86.5801 37.0078 86.041 36.7891C85.502 36.5703 85.041 36.2715 84.6582 35.8926C84.2754 35.5137 83.9727 35.0566 83.75 34.5215C83.5312 33.9863 83.4219 33.4121 83.4219 32.7988Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M95.3049 31.2754L95.176 32.3652C95.0549 32.334 94.9065 32.3184 94.7307 32.3184C94.4416 32.3184 94.1545 32.4082 93.8694 32.5879C93.5842 32.7676 93.3635 32.9941 93.2073 33.2676V37H92.0647V31.3574H93.1663V32.0078C93.3186 31.793 93.5413 31.6113 93.8342 31.4629C94.1311 31.3145 94.4729 31.2402 94.8596 31.2402C95.0198 31.2402 95.1682 31.252 95.3049 31.2754Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M101.165 34.4219H96.8227C96.854 34.8984 97.0434 35.3008 97.3911 35.6289C97.7388 35.957 98.1567 36.1211 98.645 36.1211C99.02 36.1211 99.3305 36.0508 99.5766 35.9102C99.8266 35.7695 100.055 35.584 100.262 35.3535L101.006 36.0625C100.768 36.3633 100.446 36.6152 100.04 36.8184C99.6372 37.0176 99.1684 37.1172 98.6333 37.1172C98.0903 37.1172 97.5962 36.9922 97.1509 36.7422C96.7055 36.4883 96.354 36.1367 96.0962 35.6875C95.8423 35.2383 95.7153 34.7363 95.7153 34.1816C95.7153 33.334 95.9731 32.6328 96.4888 32.0781C97.0083 31.5195 97.6665 31.2402 98.4634 31.2402C99.2446 31.2402 99.8911 31.5215 100.403 32.084C100.918 32.6426 101.176 33.3418 101.176 34.1816C101.176 34.2715 101.172 34.3516 101.165 34.4219ZM98.4985 32.2363C98.1313 32.2363 97.7993 32.3496 97.5024 32.5762C97.2095 32.8027 97.0141 33.0977 96.9165 33.4609H99.9868C99.9009 33.1055 99.7153 32.8125 99.4302 32.582C99.1489 32.3516 98.8384 32.2363 98.4985 32.2363Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M106.614 37V36.4844C106.145 36.9062 105.565 37.1172 104.874 37.1172C104.346 37.1172 103.874 36.9941 103.456 36.748C103.018 36.4902 102.669 36.1367 102.407 35.6875C102.145 35.2344 102.014 34.7324 102.014 34.1816C102.014 33.6309 102.147 33.127 102.413 32.6699C102.678 32.2129 103.03 31.8555 103.468 31.5977C103.87 31.3594 104.329 31.2402 104.844 31.2402C105.532 31.2402 106.122 31.4531 106.614 31.8789V31.3574H107.716V37H106.614ZM106.573 35.2363V33.1211C106.389 32.8789 106.157 32.6855 105.876 32.541C105.598 32.3926 105.296 32.3184 104.968 32.3184C104.436 32.3184 104.001 32.502 103.661 32.8691C103.325 33.2363 103.157 33.6738 103.157 34.1816C103.157 34.6934 103.335 35.1309 103.69 35.4941C104.046 35.8574 104.491 36.0391 105.026 36.0391C105.319 36.0391 105.602 35.9688 105.876 35.8281C106.149 35.6875 106.382 35.4902 106.573 35.2363Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M112.772 35.9688L113.001 37C112.759 37.0781 112.462 37.1172 112.11 37.1172C111.431 37.1172 110.899 36.8984 110.517 36.4609C110.212 36.125 110.06 35.625 110.06 34.9609V32.3828H108.618V31.3574H110.06V29.7988H111.202V31.3574H113.001V32.3828H111.202V35.0195C111.202 35.375 111.257 35.6152 111.366 35.7402C111.444 35.834 111.556 35.9082 111.7 35.9629C111.845 36.0137 111.995 36.0391 112.151 36.0391C112.397 36.0391 112.604 36.0156 112.772 35.9688Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M119.101 34.4219H114.759C114.79 34.8984 114.98 35.3008 115.327 35.6289C115.675 35.957 116.093 36.1211 116.581 36.1211C116.956 36.1211 117.267 36.0508 117.513 35.9102C117.763 35.7695 117.991 35.584 118.198 35.3535L118.943 36.0625C118.704 36.3633 118.382 36.6152 117.976 36.8184C117.573 37.0176 117.105 37.1172 116.57 37.1172C116.027 37.1172 115.532 36.9922 115.087 36.7422C114.642 36.4883 114.29 36.1367 114.032 35.6875C113.779 35.2383 113.652 34.7363 113.652 34.1816C113.652 33.334 113.909 32.6328 114.425 32.0781C114.945 31.5195 115.603 31.2402 116.4 31.2402C117.181 31.2402 117.827 31.5215 118.339 32.084C118.855 32.6426 119.112 33.3418 119.112 34.1816C119.112 34.2715 119.109 34.3516 119.101 34.4219ZM116.435 32.2363C116.068 32.2363 115.736 32.3496 115.439 32.5762C115.146 32.8027 114.95 33.0977 114.853 33.4609H117.923C117.837 33.1055 117.652 32.8125 117.366 32.582C117.085 32.3516 116.775 32.2363 116.435 32.2363Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M129.097 34.1172C129.277 33.7031 129.367 33.2637 129.367 32.7988C129.367 32.334 129.277 31.8984 129.097 31.4922C128.918 31.082 128.668 30.7344 128.347 30.4492C128.074 30.2109 127.748 30.0332 127.369 29.916C126.99 29.7988 126.515 29.7402 125.945 29.7402H124.685V35.8574H125.945C126.515 35.8574 126.99 35.8008 127.369 35.6875C127.748 35.5703 128.074 35.3926 128.347 35.1543C128.668 34.873 128.918 34.5273 129.097 34.1172ZM126.004 37H123.484V28.5977H126.004C127.203 28.5977 128.164 28.8633 128.886 29.3945C129.41 29.7852 129.82 30.2793 130.117 30.877C130.418 31.4707 130.568 32.1113 130.568 32.7988C130.568 33.4902 130.42 34.1348 130.123 34.7324C129.826 35.3301 129.418 35.8223 128.898 36.209C128.179 36.7363 127.215 37 126.004 37Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M135.883 37V36.4844C135.414 36.9062 134.834 37.1172 134.143 37.1172C133.615 37.1172 133.143 36.9941 132.725 36.748C132.287 36.4902 131.937 36.1367 131.676 35.6875C131.414 35.2344 131.283 34.7324 131.283 34.1816C131.283 33.6309 131.416 33.127 131.682 32.6699C131.947 32.2129 132.299 31.8555 132.736 31.5977C133.139 31.3594 133.598 31.2402 134.113 31.2402C134.801 31.2402 135.391 31.4531 135.883 31.8789V31.3574H136.984V37H135.883ZM135.842 35.2363V33.1211C135.658 32.8789 135.426 32.6855 135.144 32.541C134.867 32.3926 134.564 32.3184 134.236 32.3184C133.705 32.3184 133.269 32.502 132.93 32.8691C132.594 33.2363 132.426 33.6738 132.426 34.1816C132.426 34.6934 132.603 35.1309 132.959 35.4941C133.314 35.8574 133.76 36.0391 134.295 36.0391C134.588 36.0391 134.871 35.9688 135.144 35.8281C135.418 35.6875 135.65 35.4902 135.842 35.2363Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M142.041 35.9688L142.27 37C142.028 37.0781 141.731 37.1172 141.379 37.1172C140.699 37.1172 140.168 36.8984 139.785 36.4609C139.481 36.125 139.328 35.625 139.328 34.9609V32.3828H137.887V31.3574H139.328V29.7988H140.471V31.3574H142.27V32.3828H140.471V35.0195C140.471 35.375 140.526 35.6152 140.635 35.7402C140.713 35.834 140.824 35.9082 140.969 35.9629C141.113 36.0137 141.264 36.0391 141.42 36.0391C141.666 36.0391 141.873 36.0156 142.041 35.9688Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M147.52 37V36.4844C147.051 36.9062 146.471 37.1172 145.78 37.1172C145.252 37.1172 144.78 36.9941 144.362 36.748C143.924 36.4902 143.575 36.1367 143.313 35.6875C143.051 35.2344 142.92 34.7324 142.92 34.1816C142.92 33.6309 143.053 33.127 143.319 32.6699C143.584 32.2129 143.936 31.8555 144.373 31.5977C144.776 31.3594 145.235 31.2402 145.75 31.2402C146.438 31.2402 147.028 31.4531 147.52 31.8789V31.3574H148.621V37H147.52ZM147.479 35.2363V33.1211C147.295 32.8789 147.063 32.6855 146.782 32.541C146.504 32.3926 146.202 32.3184 145.873 32.3184C145.342 32.3184 144.907 32.502 144.567 32.8691C144.231 33.2363 144.063 33.6738 144.063 34.1816C144.063 34.6934 144.241 35.1309 144.596 35.4941C144.952 35.8574 145.397 36.0391 145.932 36.0391C146.225 36.0391 146.508 35.9688 146.782 35.8281C147.055 35.6875 147.287 35.4902 147.479 35.2363Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M154.563 36.5078V39.8828H153.421V31.3574H154.522V31.8789C155.015 31.4531 155.604 31.2402 156.292 31.2402C156.808 31.2402 157.266 31.3594 157.669 31.5977C158.106 31.8555 158.458 32.2129 158.724 32.6699C158.989 33.127 159.122 33.6309 159.122 34.1816C159.122 34.7324 158.991 35.2344 158.729 35.6875C158.468 36.1367 158.118 36.4902 157.681 36.748C157.263 36.9941 156.79 37.1172 156.263 37.1172C155.595 37.1172 155.028 36.9141 154.563 36.5078ZM154.563 33.1211V35.2363C154.755 35.4902 154.987 35.6875 155.261 35.8281C155.534 35.9688 155.817 36.0391 156.11 36.0391C156.645 36.0391 157.091 35.8574 157.446 35.4941C157.802 35.1309 157.979 34.6934 157.979 34.1816C157.979 33.6738 157.809 33.2363 157.47 32.8691C157.134 32.502 156.7 32.3184 156.169 32.3184C155.841 32.3184 155.536 32.3926 155.255 32.541C154.977 32.6855 154.747 32.8789 154.563 33.1211Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M163.687 31.2754L163.558 32.3652C163.437 32.334 163.288 32.3184 163.112 32.3184C162.823 32.3184 162.536 32.4082 162.251 32.5879C161.966 32.7676 161.745 32.9941 161.589 33.2676V37H160.446V31.3574H161.548V32.0078C161.7 31.793 161.923 31.6113 162.216 31.4629C162.513 31.3145 162.855 31.2402 163.241 31.2402C163.401 31.2402 163.55 31.252 163.687 31.2754Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M164.929 36.2793C164.374 35.7207 164.097 35.0215 164.097 34.1816C164.097 33.3418 164.374 32.6426 164.929 32.084C165.484 31.5215 166.179 31.2402 167.015 31.2402C167.851 31.2402 168.544 31.5215 169.095 32.084C169.65 32.6426 169.927 33.3418 169.927 34.1816C169.927 35.0215 169.65 35.7207 169.095 36.2793C168.544 36.8379 167.851 37.1172 167.015 37.1172C166.179 37.1172 165.484 36.8379 164.929 36.2793ZM165.738 32.8574C165.406 33.2168 165.24 33.6582 165.24 34.1816C165.24 34.7051 165.406 35.1465 165.738 35.5059C166.074 35.8613 166.499 36.0391 167.015 36.0391C167.531 36.0391 167.954 35.8613 168.286 35.5059C168.622 35.1465 168.79 34.7051 168.79 34.1816C168.79 33.6582 168.622 33.2168 168.286 32.8574C167.954 32.498 167.531 32.3184 167.015 32.3184C166.499 32.3184 166.074 32.498 165.738 32.8574Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M175.371 37V36.4844C174.902 36.9062 174.322 37.1172 173.63 37.1172C173.103 37.1172 172.63 36.9941 172.213 36.748C171.775 36.4902 171.425 36.1367 171.164 35.6875C170.902 35.2344 170.771 34.7324 170.771 34.1816C170.771 33.6309 170.904 33.127 171.17 32.6699C171.435 32.2129 171.787 31.8555 172.224 31.5977C172.627 31.3594 173.086 31.2402 173.601 31.2402C174.269 31.2402 174.845 31.4434 175.33 31.8496V28.4805H176.472V37H175.371ZM175.33 35.2363V33.1211C175.146 32.8789 174.914 32.6855 174.632 32.541C174.355 32.3926 174.052 32.3184 173.724 32.3184C173.193 32.3184 172.757 32.502 172.418 32.8691C172.082 33.2363 171.914 33.6738 171.914 34.1816C171.914 34.6934 172.091 35.1309 172.447 35.4941C172.802 35.8574 173.248 36.0391 173.783 36.0391C174.076 36.0391 174.359 35.9688 174.632 35.8281C174.906 35.6875 175.138 35.4902 175.33 35.2363Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M180.68 37.1172C180.281 37.1172 179.906 37.0352 179.555 36.8711C179.207 36.7031 178.914 36.4707 178.676 36.1738C178.5 35.9512 178.369 35.6895 178.283 35.3887C178.201 35.0879 178.16 34.7051 178.16 34.2402V31.3574H179.297V34.4219C179.297 34.9219 179.404 35.2969 179.619 35.5469C179.748 35.6992 179.908 35.8203 180.099 35.9102C180.295 35.9961 180.5 36.0391 180.715 36.0391C181.035 36.0391 181.332 35.9609 181.605 35.8047C181.879 35.6484 182.109 35.459 182.297 35.2363V31.3574H183.439V37H182.332V36.4844C182.168 36.6406 181.937 36.7852 181.64 36.918C181.348 37.0508 181.027 37.1172 180.68 37.1172Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M189.399 35.166L190.272 35.7988C190.037 36.1895 189.688 36.5078 189.223 36.7539C188.762 36.9961 188.275 37.1172 187.764 37.1172C186.897 37.1172 186.178 36.8379 185.607 36.2793C185.037 35.7207 184.752 35.0215 184.752 34.1816C184.752 33.3457 185.031 32.6465 185.59 32.084C186.149 31.5215 186.85 31.2402 187.693 31.2402C188.178 31.2402 188.631 31.3516 189.053 31.5742C189.479 31.793 189.826 32.0898 190.096 32.4648L189.252 33.1738C189.076 32.9277 188.856 32.7246 188.59 32.5645C188.324 32.4004 188.025 32.3184 187.693 32.3184C187.182 32.3184 186.754 32.4961 186.41 32.8516C186.066 33.207 185.895 33.6504 185.895 34.1816C185.895 34.7285 186.07 35.1758 186.422 35.5234C186.774 35.8672 187.221 36.0391 187.764 36.0391C188.42 36.0391 188.965 35.748 189.399 35.166Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M194.608 35.9688L194.836 37C194.594 37.0781 194.297 37.1172 193.946 37.1172C193.266 37.1172 192.735 36.8984 192.352 36.4609C192.047 36.125 191.895 35.625 191.895 34.9609V32.3828H190.453V31.3574H191.895V29.7988H193.037V31.3574H194.836V32.3828H193.037V35.0195C193.037 35.375 193.092 35.6152 193.201 35.7402C193.28 35.834 193.391 35.9082 193.535 35.9629C193.68 36.0137 193.83 36.0391 193.987 36.0391C194.233 36.0391 194.44 36.0156 194.608 35.9688Z"
              fill="#1E1B19"
            ></path>
            <rect
              x="3.5"
              y="2.5"
              width="319"
              height="63"
              rx="2.5"
              stroke="#EAECF0"
            ></rect>
          </g>
          <defs>
            <filter
              id="filter0_dd_588_472538"
              x="0"
              y="0"
              width="326"
              height="70"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>
              <feOffset dy="1"></feOffset>
              <feGaussianBlur stdDeviation="1"></feGaussianBlur>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_588_472538"
              ></feBlend>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>
              <feOffset dy="1"></feOffset>
              <feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_588_472538"
                result="effect2_dropShadow_588_472538"
              ></feBlend>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_588_472538"
                result="shape"
              ></feBlend>
            </filter>
            <radialGradient
              id="paint0_radial_588_472538"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(-122.317 1834.65) rotate(45) scale(232.942 228.355)"
            >
              <stop></stop>
              <stop offset="1" stop-color="white"></stop>
            </radialGradient>
          </defs>
        </svg>
        <svg
          width="326"
          height="70"
          viewBox="0 0 326 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-80 h-16 absolute left-[764px] top-[129px]"
          preserveAspectRatio="none"
        >
          <g filter="url(#filter0_dd_588_472551)">
            <rect
              x="3"
              y="2"
              width="320"
              height="64"
              rx="3"
              fill="white"
            ></rect>
            <path d="M49 34H43Z" fill="#1E1B19"></path>
            <path
              d="M49 28V34M49 34V40M49 34H55M49 34H43"
              stroke="#1E1B19"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <rect
              x="36"
              y="21"
              width="26"
              height="26"
              rx="13"
              stroke="#1E1B19"
              stroke-width="2"
            ></rect>
            <path
              d="M266 27.75V40.25C266 43.0125 270.477 45.25 276 45.25C281.523 45.25 286 43.0125 286 40.25V27.75M266 27.75C266 30.5125 270.477 32.75 276 32.75C281.523 32.75 286 30.5125 286 27.75M266 27.75C266 24.9875 270.477 22.75 276 22.75C281.523 22.75 286 24.9875 286 27.75M286 34C286 36.7625 281.523 39 276 39C270.477 39 266 36.7625 266 34"
              stroke="#111928"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M83.4219 32.7988C83.4219 32.002 83.6055 31.2734 83.9727 30.6133C84.3398 29.9531 84.8477 29.4336 85.4961 29.0547C86.1484 28.6719 86.873 28.4805 87.6699 28.4805C88.2676 28.4805 88.8359 28.5957 89.375 28.8262C89.918 29.0566 90.373 29.373 90.7402 29.7754L89.9375 30.5664C89.6836 30.2891 89.3516 30.0625 88.9414 29.8867C88.5312 29.707 88.1074 29.6172 87.6699 29.6172C86.8105 29.6172 86.0859 29.9219 85.4961 30.5312C84.9102 31.1406 84.6172 31.8965 84.6172 32.7988C84.6172 33.4199 84.7559 33.9746 85.0332 34.4629C85.3105 34.9473 85.6875 35.3223 86.1641 35.5879C86.6445 35.8496 87.1816 35.9805 87.7754 35.9805C88.291 35.9805 88.752 35.8672 89.1582 35.6406C89.5684 35.4102 89.9121 35.127 90.1895 34.791L91.0391 35.5586C90.6719 36.0273 90.1953 36.4043 89.6094 36.6895C89.0234 36.9746 88.4121 37.1172 87.7754 37.1172C87.1582 37.1172 86.5801 37.0078 86.041 36.7891C85.502 36.5703 85.041 36.2715 84.6582 35.8926C84.2754 35.5137 83.9727 35.0566 83.75 34.5215C83.5312 33.9863 83.4219 33.4121 83.4219 32.7988Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M95.3049 31.2754L95.176 32.3652C95.0549 32.334 94.9065 32.3184 94.7307 32.3184C94.4416 32.3184 94.1545 32.4082 93.8694 32.5879C93.5842 32.7676 93.3635 32.9941 93.2073 33.2676V37H92.0647V31.3574H93.1663V32.0078C93.3186 31.793 93.5413 31.6113 93.8342 31.4629C94.1311 31.3145 94.4729 31.2402 94.8596 31.2402C95.0198 31.2402 95.1682 31.252 95.3049 31.2754Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M101.165 34.4219H96.8227C96.854 34.8984 97.0434 35.3008 97.3911 35.6289C97.7388 35.957 98.1567 36.1211 98.645 36.1211C99.02 36.1211 99.3305 36.0508 99.5766 35.9102C99.8266 35.7695 100.055 35.584 100.262 35.3535L101.006 36.0625C100.768 36.3633 100.446 36.6152 100.04 36.8184C99.6372 37.0176 99.1684 37.1172 98.6333 37.1172C98.0903 37.1172 97.5962 36.9922 97.1509 36.7422C96.7055 36.4883 96.354 36.1367 96.0962 35.6875C95.8423 35.2383 95.7153 34.7363 95.7153 34.1816C95.7153 33.334 95.9731 32.6328 96.4888 32.0781C97.0083 31.5195 97.6665 31.2402 98.4634 31.2402C99.2446 31.2402 99.8911 31.5215 100.403 32.084C100.918 32.6426 101.176 33.3418 101.176 34.1816C101.176 34.2715 101.172 34.3516 101.165 34.4219ZM98.4985 32.2363C98.1313 32.2363 97.7993 32.3496 97.5024 32.5762C97.2095 32.8027 97.0141 33.0977 96.9165 33.4609H99.9868C99.9009 33.1055 99.7153 32.8125 99.4302 32.582C99.1489 32.3516 98.8384 32.2363 98.4985 32.2363Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M106.614 37V36.4844C106.145 36.9062 105.565 37.1172 104.874 37.1172C104.346 37.1172 103.874 36.9941 103.456 36.748C103.018 36.4902 102.669 36.1367 102.407 35.6875C102.145 35.2344 102.014 34.7324 102.014 34.1816C102.014 33.6309 102.147 33.127 102.413 32.6699C102.678 32.2129 103.03 31.8555 103.468 31.5977C103.87 31.3594 104.329 31.2402 104.844 31.2402C105.532 31.2402 106.122 31.4531 106.614 31.8789V31.3574H107.716V37H106.614ZM106.573 35.2363V33.1211C106.389 32.8789 106.157 32.6855 105.876 32.541C105.598 32.3926 105.296 32.3184 104.968 32.3184C104.436 32.3184 104.001 32.502 103.661 32.8691C103.325 33.2363 103.157 33.6738 103.157 34.1816C103.157 34.6934 103.335 35.1309 103.69 35.4941C104.046 35.8574 104.491 36.0391 105.026 36.0391C105.319 36.0391 105.602 35.9688 105.876 35.8281C106.149 35.6875 106.382 35.4902 106.573 35.2363Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M112.772 35.9688L113.001 37C112.759 37.0781 112.462 37.1172 112.11 37.1172C111.431 37.1172 110.899 36.8984 110.517 36.4609C110.212 36.125 110.06 35.625 110.06 34.9609V32.3828H108.618V31.3574H110.06V29.7988H111.202V31.3574H113.001V32.3828H111.202V35.0195C111.202 35.375 111.257 35.6152 111.366 35.7402C111.444 35.834 111.556 35.9082 111.7 35.9629C111.845 36.0137 111.995 36.0391 112.151 36.0391C112.397 36.0391 112.604 36.0156 112.772 35.9688Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M119.101 34.4219H114.759C114.79 34.8984 114.98 35.3008 115.327 35.6289C115.675 35.957 116.093 36.1211 116.581 36.1211C116.956 36.1211 117.267 36.0508 117.513 35.9102C117.763 35.7695 117.991 35.584 118.198 35.3535L118.943 36.0625C118.704 36.3633 118.382 36.6152 117.976 36.8184C117.573 37.0176 117.105 37.1172 116.57 37.1172C116.027 37.1172 115.532 36.9922 115.087 36.7422C114.642 36.4883 114.29 36.1367 114.032 35.6875C113.779 35.2383 113.652 34.7363 113.652 34.1816C113.652 33.334 113.909 32.6328 114.425 32.0781C114.945 31.5195 115.603 31.2402 116.4 31.2402C117.181 31.2402 117.827 31.5215 118.339 32.084C118.855 32.6426 119.112 33.3418 119.112 34.1816C119.112 34.2715 119.109 34.3516 119.101 34.4219ZM116.435 32.2363C116.068 32.2363 115.736 32.3496 115.439 32.5762C115.146 32.8027 114.95 33.0977 114.853 33.4609H117.923C117.837 33.1055 117.652 32.8125 117.366 32.582C117.085 32.3516 116.775 32.2363 116.435 32.2363Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M129.097 34.1172C129.277 33.7031 129.367 33.2637 129.367 32.7988C129.367 32.334 129.277 31.8984 129.097 31.4922C128.918 31.082 128.668 30.7344 128.347 30.4492C128.074 30.2109 127.748 30.0332 127.369 29.916C126.99 29.7988 126.515 29.7402 125.945 29.7402H124.685V35.8574H125.945C126.515 35.8574 126.99 35.8008 127.369 35.6875C127.748 35.5703 128.074 35.3926 128.347 35.1543C128.668 34.873 128.918 34.5273 129.097 34.1172ZM126.004 37H123.484V28.5977H126.004C127.203 28.5977 128.164 28.8633 128.886 29.3945C129.41 29.7852 129.82 30.2793 130.117 30.877C130.418 31.4707 130.568 32.1113 130.568 32.7988C130.568 33.4902 130.42 34.1348 130.123 34.7324C129.826 35.3301 129.418 35.8223 128.898 36.209C128.179 36.7363 127.215 37 126.004 37Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M135.883 37V36.4844C135.414 36.9062 134.834 37.1172 134.143 37.1172C133.615 37.1172 133.143 36.9941 132.725 36.748C132.287 36.4902 131.937 36.1367 131.676 35.6875C131.414 35.2344 131.283 34.7324 131.283 34.1816C131.283 33.6309 131.416 33.127 131.682 32.6699C131.947 32.2129 132.299 31.8555 132.736 31.5977C133.139 31.3594 133.598 31.2402 134.113 31.2402C134.801 31.2402 135.391 31.4531 135.883 31.8789V31.3574H136.984V37H135.883ZM135.842 35.2363V33.1211C135.658 32.8789 135.426 32.6855 135.144 32.541C134.867 32.3926 134.564 32.3184 134.236 32.3184C133.705 32.3184 133.269 32.502 132.93 32.8691C132.594 33.2363 132.426 33.6738 132.426 34.1816C132.426 34.6934 132.603 35.1309 132.959 35.4941C133.314 35.8574 133.76 36.0391 134.295 36.0391C134.588 36.0391 134.871 35.9688 135.144 35.8281C135.418 35.6875 135.65 35.4902 135.842 35.2363Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M142.041 35.9688L142.27 37C142.028 37.0781 141.731 37.1172 141.379 37.1172C140.699 37.1172 140.168 36.8984 139.785 36.4609C139.481 36.125 139.328 35.625 139.328 34.9609V32.3828H137.887V31.3574H139.328V29.7988H140.471V31.3574H142.27V32.3828H140.471V35.0195C140.471 35.375 140.526 35.6152 140.635 35.7402C140.713 35.834 140.824 35.9082 140.969 35.9629C141.113 36.0137 141.264 36.0391 141.42 36.0391C141.666 36.0391 141.873 36.0156 142.041 35.9688Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M147.52 37V36.4844C147.051 36.9062 146.471 37.1172 145.78 37.1172C145.252 37.1172 144.78 36.9941 144.362 36.748C143.924 36.4902 143.575 36.1367 143.313 35.6875C143.051 35.2344 142.92 34.7324 142.92 34.1816C142.92 33.6309 143.053 33.127 143.319 32.6699C143.584 32.2129 143.936 31.8555 144.373 31.5977C144.776 31.3594 145.235 31.2402 145.75 31.2402C146.438 31.2402 147.028 31.4531 147.52 31.8789V31.3574H148.621V37H147.52ZM147.479 35.2363V33.1211C147.295 32.8789 147.063 32.6855 146.782 32.541C146.504 32.3926 146.202 32.3184 145.873 32.3184C145.342 32.3184 144.907 32.502 144.567 32.8691C144.231 33.2363 144.063 33.6738 144.063 34.1816C144.063 34.6934 144.241 35.1309 144.596 35.4941C144.952 35.8574 145.397 36.0391 145.932 36.0391C146.225 36.0391 146.508 35.9688 146.782 35.8281C147.055 35.6875 147.287 35.4902 147.479 35.2363Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M152.882 36.3379L153.468 35.5C153.999 35.9141 154.556 36.1211 155.138 36.1211C155.399 36.1211 155.628 36.0566 155.823 35.9277C156.022 35.7988 156.122 35.6289 156.122 35.418C156.122 35.293 156.089 35.1875 156.022 35.1016C155.96 35.0117 155.862 34.9375 155.729 34.8789C155.597 34.8164 155.468 34.7676 155.343 34.7324C155.218 34.6934 155.054 34.6484 154.85 34.5977C154.647 34.5469 154.483 34.5 154.358 34.457C153.495 34.168 153.063 33.6836 153.063 33.0039C153.063 32.7109 153.124 32.4492 153.245 32.2188C153.366 31.9883 153.526 31.8047 153.725 31.668C153.929 31.5273 154.151 31.4219 154.393 31.3516C154.636 31.2773 154.888 31.2402 155.149 31.2402C155.88 31.2402 156.503 31.4473 157.018 31.8613L156.433 32.6816C156.042 32.3848 155.638 32.2363 155.22 32.2363C154.934 32.2363 154.692 32.3008 154.493 32.4297C154.298 32.5586 154.2 32.7305 154.2 32.9453C154.2 33.0195 154.218 33.0879 154.253 33.1504C154.292 33.209 154.337 33.2598 154.388 33.3027C154.438 33.3418 154.515 33.3809 154.616 33.4199C154.718 33.459 154.806 33.4902 154.88 33.5137C154.958 33.5371 155.067 33.5664 155.208 33.6016C155.419 33.6562 155.604 33.7109 155.765 33.7656C155.929 33.8164 156.11 33.8926 156.309 33.9941C156.509 34.0957 156.671 34.207 156.796 34.3281C156.925 34.4453 157.034 34.5977 157.124 34.7852C157.214 34.9688 157.259 35.1719 157.259 35.3945C157.259 35.9102 157.052 36.3262 156.638 36.6426C156.227 36.959 155.735 37.1172 155.161 37.1172C154.282 37.1172 153.522 36.8574 152.882 36.3379Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M158.993 36.2793C158.439 35.7207 158.161 35.0215 158.161 34.1816C158.161 33.3418 158.439 32.6426 158.993 32.084C159.548 31.5215 160.243 31.2402 161.079 31.2402C161.915 31.2402 162.609 31.5215 163.159 32.084C163.714 32.6426 163.991 33.3418 163.991 34.1816C163.991 35.0215 163.714 35.7207 163.159 36.2793C162.609 36.8379 161.915 37.1172 161.079 37.1172C160.243 37.1172 159.548 36.8379 158.993 36.2793ZM159.802 32.8574C159.47 33.2168 159.304 33.6582 159.304 34.1816C159.304 34.7051 159.47 35.1465 159.802 35.5059C160.138 35.8613 160.564 36.0391 161.079 36.0391C161.595 36.0391 162.019 35.8613 162.351 35.5059C162.687 35.1465 162.855 34.7051 162.855 34.1816C162.855 33.6582 162.687 33.2168 162.351 32.8574C162.019 32.498 161.595 32.3184 161.079 32.3184C160.564 32.3184 160.138 32.498 159.802 32.8574Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M167.718 37.1172C167.32 37.1172 166.945 37.0352 166.593 36.8711C166.245 36.7031 165.952 36.4707 165.714 36.1738C165.538 35.9512 165.408 35.6895 165.322 35.3887C165.24 35.0879 165.199 34.7051 165.199 34.2402V31.3574H166.335V34.4219C166.335 34.9219 166.443 35.2969 166.658 35.5469C166.786 35.6992 166.947 35.8203 167.138 35.9102C167.333 35.9961 167.538 36.0391 167.753 36.0391C168.074 36.0391 168.37 35.9609 168.644 35.8047C168.917 35.6484 169.148 35.459 169.335 35.2363V31.3574H170.478V37H169.37V36.4844C169.206 36.6406 168.976 36.7852 168.679 36.918C168.386 37.0508 168.066 37.1172 167.718 37.1172Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M175.511 31.2754L175.382 32.3652C175.261 32.334 175.113 32.3184 174.937 32.3184C174.648 32.3184 174.361 32.4082 174.076 32.5879C173.791 32.7676 173.57 32.9941 173.414 33.2676V37H172.271V31.3574H173.373V32.0078C173.525 31.793 173.748 31.6113 174.041 31.4629C174.338 31.3145 174.679 31.2402 175.066 31.2402C175.226 31.2402 175.375 31.252 175.511 31.2754Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M180.568 35.166L181.441 35.7988C181.207 36.1895 180.857 36.5078 180.392 36.7539C179.931 36.9961 179.445 37.1172 178.933 37.1172C178.066 37.1172 177.348 36.8379 176.777 36.2793C176.207 35.7207 175.922 35.0215 175.922 34.1816C175.922 33.3457 176.201 32.6465 176.76 32.084C177.318 31.5215 178.019 31.2402 178.863 31.2402C179.348 31.2402 179.801 31.3516 180.223 31.5742C180.648 31.793 180.996 32.0898 181.265 32.4648L180.422 33.1738C180.246 32.9277 180.025 32.7246 179.76 32.5645C179.494 32.4004 179.195 32.3184 178.863 32.3184C178.351 32.3184 177.924 32.4961 177.58 32.8516C177.236 33.207 177.064 33.6504 177.064 34.1816C177.064 34.7285 177.24 35.1758 177.592 35.5234C177.943 35.8672 178.39 36.0391 178.933 36.0391C179.59 36.0391 180.135 35.748 180.568 35.166Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M187.494 34.4219H183.152C183.184 34.8984 183.373 35.3008 183.721 35.6289C184.068 35.957 184.486 36.1211 184.975 36.1211C185.35 36.1211 185.66 36.0508 185.906 35.9102C186.156 35.7695 186.385 35.584 186.592 35.3535L187.336 36.0625C187.098 36.3633 186.775 36.6152 186.369 36.8184C185.967 37.0176 185.498 37.1172 184.963 37.1172C184.42 37.1172 183.926 36.9922 183.481 36.7422C183.035 36.4883 182.684 36.1367 182.426 35.6875C182.172 35.2383 182.045 34.7363 182.045 34.1816C182.045 33.334 182.303 32.6328 182.818 32.0781C183.338 31.5195 183.996 31.2402 184.793 31.2402C185.574 31.2402 186.221 31.5215 186.732 32.084C187.248 32.6426 187.506 33.3418 187.506 34.1816C187.506 34.2715 187.502 34.3516 187.494 34.4219ZM184.828 32.2363C184.461 32.2363 184.129 32.3496 183.832 32.5762C183.539 32.8027 183.344 33.0977 183.246 33.4609H186.316C186.231 33.1055 186.045 32.8125 185.76 32.582C185.479 32.3516 185.168 32.2363 184.828 32.2363Z"
              fill="#1E1B19"
            ></path>
            <rect
              x="3.5"
              y="2.5"
              width="319"
              height="63"
              rx="2.5"
              stroke="#EAECF0"
            ></rect>
          </g>
          <defs>
            <filter
              id="filter0_dd_588_472551"
              x="0"
              y="0"
              width="326"
              height="70"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>
              <feOffset dy="1"></feOffset>
              <feGaussianBlur stdDeviation="1"></feGaussianBlur>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_588_472551"
              ></feBlend>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>
              <feOffset dy="1"></feOffset>
              <feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_588_472551"
                result="effect2_dropShadow_588_472551"
              ></feBlend>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_588_472551"
                result="shape"
              ></feBlend>
            </filter>
          </defs>
        </svg>
        <div
          class="w-80 h-16 absolute left-[1100px] top-[129px] rounded-[3px] bg-white border border-[#eaecf0]"
          style={{ boxShadow: '0px 1px 3px 0 rgba(16,24,40,0.1), 0px 1px 2px 0 rgba(16,24,40,0.06)' }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-7 h-7 absolute left-8 top-[18px]"
            preserveAspectRatio="none"
          >
            <path d="M14 14H8Z" fill="#1E1B19"></path>
            <path
              d="M14 8V14M14 14V20M14 14H20M14 14H8"
              stroke="#1E1B19"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <rect
              x="1"
              y="1"
              width="26"
              height="26"
              rx="13"
              stroke="#1E1B19"
              stroke-width="2"
            ></rect>
          </svg>
          <div class="flex justify-start items-start absolute left-[262px] top-[18px] gap-2.5 pl-[3px] pr-0.5 py-0.5">
            <svg
              width="21"
              height="23"
              viewBox="0 0 21 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="flex-grow-0 flex-shrink-0 w-[20.24px] h-[22.24px] relative"
              preserveAspectRatio="none"
            >
              <circle
                cx="3"
                cy="19.2427"
                r="2"
                stroke="#1E1B19"
                stroke-width="2"
              ></circle>
              <rect
                x="1"
                y="2.24268"
                width="4"
                height="4"
                stroke="#1E1B19"
                stroke-width="2"
              ></rect>
              <rect
                x="14"
                y="17.2427"
                width="4"
                height="4"
                stroke="#1E1B19"
                stroke-width="2"
              ></rect>
              <rect
                x="16"
                y="1.41421"
                width="4"
                height="4"
                transform="rotate(45 16 1.41421)"
                stroke="#1E1B19"
                stroke-width="2"
              ></rect>
              <path
                d="M5 4.24268H13M13 19.2427H5M16 7.24268V16.2427"
                stroke="#1E1B19"
                stroke-width="2"
              ></path>
            </svg>
          </div>
          <svg
            width="82"
            height="12"
            viewBox="0 0 82 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute left-[79.42px] top-[25.48px]"
            preserveAspectRatio="none"
          >
            <path
              d="M0.421875 4.79883C0.421875 4.00195 0.605469 3.27344 0.972656 2.61328C1.33984 1.95312 1.84766 1.43359 2.49609 1.05469C3.14844 0.671875 3.87305 0.480469 4.66992 0.480469C5.26758 0.480469 5.83594 0.595703 6.375 0.826172C6.91797 1.05664 7.37305 1.37305 7.74023 1.77539L6.9375 2.56641C6.68359 2.28906 6.35156 2.0625 5.94141 1.88672C5.53125 1.70703 5.10742 1.61719 4.66992 1.61719C3.81055 1.61719 3.08594 1.92188 2.49609 2.53125C1.91016 3.14062 1.61719 3.89648 1.61719 4.79883C1.61719 5.41992 1.75586 5.97461 2.0332 6.46289C2.31055 6.94727 2.6875 7.32227 3.16406 7.58789C3.64453 7.84961 4.18164 7.98047 4.77539 7.98047C5.29102 7.98047 5.75195 7.86719 6.1582 7.64062C6.56836 7.41016 6.91211 7.12695 7.18945 6.79102L8.03906 7.55859C7.67188 8.02734 7.19531 8.4043 6.60938 8.68945C6.02344 8.97461 5.41211 9.11719 4.77539 9.11719C4.1582 9.11719 3.58008 9.00781 3.04102 8.78906C2.50195 8.57031 2.04102 8.27148 1.6582 7.89258C1.27539 7.51367 0.972656 7.05664 0.75 6.52148C0.53125 5.98633 0.421875 5.41211 0.421875 4.79883Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M12.3049 3.27539L12.176 4.36523C12.0549 4.33398 11.9065 4.31836 11.7307 4.31836C11.4416 4.31836 11.1545 4.4082 10.8694 4.58789C10.5842 4.76758 10.3635 4.99414 10.2073 5.26758V9H9.06469V3.35742H10.1663V4.00781C10.3186 3.79297 10.5413 3.61133 10.8342 3.46289C11.1311 3.31445 11.4729 3.24023 11.8596 3.24023C12.0198 3.24023 12.1682 3.25195 12.3049 3.27539Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M18.1645 6.42188H13.8227C13.854 6.89844 14.0434 7.30078 14.3911 7.62891C14.7388 7.95703 15.1567 8.12109 15.645 8.12109C16.02 8.12109 16.3305 8.05078 16.5766 7.91016C16.8266 7.76953 17.0552 7.58398 17.2622 7.35352L18.0063 8.0625C17.768 8.36328 17.4458 8.61523 17.0395 8.81836C16.6372 9.01758 16.1684 9.11719 15.6333 9.11719C15.0903 9.11719 14.5962 8.99219 14.1509 8.74219C13.7055 8.48828 13.354 8.13672 13.0962 7.6875C12.8423 7.23828 12.7153 6.73633 12.7153 6.18164C12.7153 5.33398 12.9731 4.63281 13.4888 4.07812C14.0083 3.51953 14.6665 3.24023 15.4634 3.24023C16.2446 3.24023 16.8911 3.52148 17.4028 4.08398C17.9184 4.64258 18.1763 5.3418 18.1763 6.18164C18.1763 6.27148 18.1723 6.35156 18.1645 6.42188ZM15.4985 4.23633C15.1313 4.23633 14.7993 4.34961 14.5024 4.57617C14.2095 4.80273 14.0141 5.09766 13.9165 5.46094H16.9868C16.9009 5.10547 16.7153 4.8125 16.4302 4.58203C16.1489 4.35156 15.8384 4.23633 15.4985 4.23633Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M23.614 9V8.48438C23.1452 8.90625 22.5652 9.11719 21.8738 9.11719C21.3464 9.11719 20.8738 8.99414 20.4558 8.74805C20.0183 8.49023 19.6687 8.13672 19.407 7.6875C19.1452 7.23438 19.0144 6.73242 19.0144 6.18164C19.0144 5.63086 19.1472 5.12695 19.4128 4.66992C19.6784 4.21289 20.03 3.85547 20.4675 3.59766C20.8698 3.35938 21.3288 3.24023 21.8445 3.24023C22.532 3.24023 23.1218 3.45312 23.614 3.87891V3.35742H24.7155V9H23.614ZM23.573 7.23633V5.12109C23.3894 4.87891 23.157 4.68555 22.8757 4.54102C22.5984 4.39258 22.2956 4.31836 21.9675 4.31836C21.4363 4.31836 21.0007 4.50195 20.6609 4.86914C20.3249 5.23633 20.157 5.67383 20.157 6.18164C20.157 6.69336 20.3347 7.13086 20.6902 7.49414C21.0456 7.85742 21.4909 8.03906 22.0261 8.03906C22.3191 8.03906 22.6023 7.96875 22.8757 7.82812C23.1491 7.6875 23.3816 7.49023 23.573 7.23633Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M29.7724 7.96875L30.0009 9C29.7588 9.07812 29.4619 9.11719 29.1103 9.11719C28.4306 9.11719 27.8994 8.89844 27.5166 8.46094C27.2119 8.125 27.0595 7.625 27.0595 6.96094V4.38281H25.6181V3.35742H27.0595V1.79883H28.2021V3.35742H30.0009V4.38281H28.2021V7.01953C28.2021 7.375 28.2568 7.61523 28.3662 7.74023C28.4443 7.83398 28.5556 7.9082 28.7002 7.96289C28.8447 8.01367 28.9951 8.03906 29.1513 8.03906C29.3974 8.03906 29.6045 8.01562 29.7724 7.96875Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M36.1008 6.42188H31.759C31.7902 6.89844 31.9797 7.30078 32.3273 7.62891C32.675 7.95703 33.093 8.12109 33.5812 8.12109C33.9562 8.12109 34.2668 8.05078 34.5129 7.91016C34.7629 7.76953 34.9914 7.58398 35.1984 7.35352L35.9426 8.0625C35.7043 8.36328 35.382 8.61523 34.9758 8.81836C34.5734 9.01758 34.1047 9.11719 33.5695 9.11719C33.0266 9.11719 32.5324 8.99219 32.0871 8.74219C31.6418 8.48828 31.2902 8.13672 31.0324 7.6875C30.7785 7.23828 30.6516 6.73633 30.6516 6.18164C30.6516 5.33398 30.9094 4.63281 31.425 4.07812C31.9445 3.51953 32.6027 3.24023 33.3996 3.24023C34.1809 3.24023 34.8273 3.52148 35.3391 4.08398C35.8547 4.64258 36.1125 5.3418 36.1125 6.18164C36.1125 6.27148 36.1086 6.35156 36.1008 6.42188ZM33.4348 4.23633C33.0676 4.23633 32.7355 4.34961 32.4387 4.57617C32.1457 4.80273 31.9504 5.09766 31.8527 5.46094H34.923C34.8371 5.10547 34.6516 4.8125 34.3664 4.58203C34.0852 4.35156 33.7746 4.23633 33.4348 4.23633Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M41.6852 4.14258H43.6071C44.1032 4.14258 44.4704 4.01758 44.7087 3.76758C44.9352 3.5293 45.0485 3.25391 45.0485 2.94141C45.0485 2.625 44.9352 2.34766 44.7087 2.10938C44.4743 1.86328 44.1071 1.74023 43.6071 1.74023H41.6852V4.14258ZM43.6657 5.2793H41.6852V9H40.4841V0.597656H43.6657C44.3923 0.597656 44.9762 0.783203 45.4177 1.1543C45.6755 1.37695 45.8766 1.64258 46.0212 1.95117C46.1696 2.25977 46.2438 2.58984 46.2438 2.94141C46.2438 3.29297 46.1696 3.62305 46.0212 3.93164C45.8766 4.24023 45.6755 4.50586 45.4177 4.72852C44.9802 5.0957 44.3962 5.2793 43.6657 5.2793Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M47.3808 9V3.35742H48.5234V9H47.3808ZM47.4101 1.88672C47.2695 1.74219 47.1991 1.56445 47.1991 1.35352C47.1991 1.14258 47.2695 0.964844 47.4101 0.820312C47.5546 0.671875 47.7323 0.597656 47.9433 0.597656C48.1542 0.597656 48.332 0.671875 48.4765 0.820312C48.6249 0.964844 48.6991 1.14258 48.6991 1.35352C48.6991 1.56445 48.6249 1.74219 48.4765 1.88672C48.332 2.02734 48.1542 2.09766 47.9433 2.09766C47.7323 2.09766 47.5546 2.02734 47.4101 1.88672Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M51.4591 8.50781V11.8828H50.3166V3.35742H51.4181V3.87891C51.9103 3.45312 52.5002 3.24023 53.1877 3.24023C53.7033 3.24023 54.1623 3.35938 54.5646 3.59766C55.0021 3.85547 55.3537 4.21289 55.6193 4.66992C55.8849 5.12695 56.0177 5.63086 56.0177 6.18164C56.0177 6.73242 55.8869 7.23438 55.6252 7.6875C55.3634 8.13672 55.0138 8.49023 54.5763 8.74805C54.1584 8.99414 53.6857 9.11719 53.1584 9.11719C52.4904 9.11719 51.924 8.91406 51.4591 8.50781ZM51.4591 5.12109V7.23633C51.6505 7.49023 51.883 7.6875 52.1564 7.82812C52.4298 7.96875 52.713 8.03906 53.006 8.03906C53.5412 8.03906 53.9865 7.85742 54.342 7.49414C54.6974 7.13086 54.8752 6.69336 54.8752 6.18164C54.8752 5.67383 54.7052 5.23633 54.3654 4.86914C54.0295 4.50195 53.5959 4.31836 53.0646 4.31836C52.7365 4.31836 52.4318 4.39258 52.1505 4.54102C51.8732 4.68555 51.6427 4.87891 51.4591 5.12109Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M62.3109 6.42188H57.9691C58.0004 6.89844 58.1898 7.30078 58.5375 7.62891C58.8852 7.95703 59.3031 8.12109 59.7914 8.12109C60.1664 8.12109 60.477 8.05078 60.723 7.91016C60.973 7.76953 61.2016 7.58398 61.4086 7.35352L62.1527 8.0625C61.9145 8.36328 61.5922 8.61523 61.1859 8.81836C60.7836 9.01758 60.3148 9.11719 59.7797 9.11719C59.2367 9.11719 58.7426 8.99219 58.2973 8.74219C57.852 8.48828 57.5004 8.13672 57.2426 7.6875C56.9887 7.23828 56.8617 6.73633 56.8617 6.18164C56.8617 5.33398 57.1195 4.63281 57.6352 4.07812C58.1547 3.51953 58.8129 3.24023 59.6098 3.24023C60.391 3.24023 61.0375 3.52148 61.5492 4.08398C62.0648 4.64258 62.3227 5.3418 62.3227 6.18164C62.3227 6.27148 62.3187 6.35156 62.3109 6.42188ZM59.6449 4.23633C59.2777 4.23633 58.9457 4.34961 58.6488 4.57617C58.3559 4.80273 58.1605 5.09766 58.0629 5.46094H61.1332C61.0473 5.10547 60.8617 4.8125 60.5766 4.58203C60.2953 4.35156 59.9848 4.23633 59.6449 4.23633Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M63.6413 9V0.480469H64.7838V9H63.6413Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M66.577 9V3.35742H67.7196V9H66.577ZM66.6063 1.88672C66.4657 1.74219 66.3954 1.56445 66.3954 1.35352C66.3954 1.14258 66.4657 0.964844 66.6063 0.820312C66.7509 0.671875 66.9286 0.597656 67.1395 0.597656C67.3505 0.597656 67.5282 0.671875 67.6727 0.820312C67.8212 0.964844 67.8954 1.14258 67.8954 1.35352C67.8954 1.56445 67.8212 1.74219 67.6727 1.88672C67.5282 2.02734 67.3505 2.09766 67.1395 2.09766C66.9286 2.09766 66.7509 2.02734 66.6063 1.88672Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M70.6144 3.35742V3.90234C70.8019 3.72266 71.0382 3.56836 71.3234 3.43945C71.6124 3.30664 71.9405 3.24023 72.3077 3.24023C72.714 3.24023 73.0948 3.33008 73.4503 3.50977C73.8097 3.68555 74.1124 3.92773 74.3585 4.23633C74.7296 4.70898 74.9152 5.37695 74.9152 6.24023V9H73.7726V6.18164C73.7726 5.58008 73.6612 5.14258 73.4386 4.86914C73.3058 4.70117 73.1359 4.56836 72.9288 4.4707C72.7218 4.36914 72.503 4.31836 72.2726 4.31836C71.632 4.31836 71.0929 4.58594 70.6554 5.12109V9H69.5128V3.35742H70.6144Z"
              fill="#1E1B19"
            ></path>
            <path
              d="M81.5658 6.42188H77.224C77.2552 6.89844 77.4447 7.30078 77.7923 7.62891C78.14 7.95703 78.558 8.12109 79.0462 8.12109C79.4212 8.12109 79.7318 8.05078 79.9779 7.91016C80.2279 7.76953 80.4564 7.58398 80.6634 7.35352L81.4076 8.0625C81.1693 8.36328 80.847 8.61523 80.4408 8.81836C80.0384 9.01758 79.5697 9.11719 79.0345 9.11719C78.4916 9.11719 77.9974 8.99219 77.5521 8.74219C77.1068 8.48828 76.7552 8.13672 76.4974 7.6875C76.2435 7.23828 76.1166 6.73633 76.1166 6.18164C76.1166 5.33398 76.3744 4.63281 76.89 4.07812C77.4095 3.51953 78.0677 3.24023 78.8646 3.24023C79.6459 3.24023 80.2923 3.52148 80.8041 4.08398C81.3197 4.64258 81.5775 5.3418 81.5775 6.18164C81.5775 6.27148 81.5736 6.35156 81.5658 6.42188ZM78.8998 4.23633C78.5326 4.23633 78.2005 4.34961 77.9037 4.57617C77.6107 4.80273 77.4154 5.09766 77.3177 5.46094H80.388C80.3021 5.10547 80.1166 4.8125 79.8314 4.58203C79.5502 4.35156 79.2396 4.23633 78.8998 4.23633Z"
              fill="#1E1B19"
            ></path>
          </svg>
        </div>
        <p class="absolute left-[94px] top-[98px] text-base text-left text-black">
          Create new
        </p>
      </div>
      <div
        class="flex justify-start items-center w-[510px] absolute left-[465px] top-[59px] pl-4 pr-2 py-2 rounded bg-[#0e7a53]"
        style={{ boxShadow: '0px 32px 64px 0 rgba(52,48,44,0.08), 0px 16px 32px 0 rgba(52,48,44,0.05), 0px 6px 12px 0 rgba(52,48,44,0.04), 0px 2px 4px 0 rgba(52,48,44,0.03)' }}
      >
        <div class="flex justify-start items-center flex-grow relative gap-2">
          <p class="flex-grow w-[426px] text-sm text-left text-white">
            Subscribed successfully to Worker Profile!
          </p>
          <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 h-8 relative gap-2 px-2 py-1 rounded">
            <p class="flex-grow-0 flex-shrink-0 text-sm text-center text-white">
              Close
            </p>
          </div>
        </div>
        <div class="flex-grow-0 flex-shrink-0 w-0 h-8"></div>
      </div>
    </div>
  );
};

export default HomeSubscribed;
