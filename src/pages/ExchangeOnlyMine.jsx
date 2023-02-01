import { useNavigate } from 'react-router-dom';

const ExchangeOnlyMine = () => {
  const navigate = useNavigate();

  return (
    <div class="w-[1440px] h-[980px] relative bg-[#f6f5f2]">
      <div class="flex justify-start items-start w-[1372px] absolute left-[68px] top-[156px] gap-2 px-10 py-4">
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[1299px] gap-4">
          <div class="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-8">
            <p class="flex-grow-0 flex-shrink-0 text-base text-left text-black">
              My Data Products
            </p>
          </div>
          <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[314px] gap-5">
            <div
              class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-[314px] overflow-hidden bg-white border border-gray-200"
              style={{boxShadow: '0px 1px 3px 0 rgba(0,0,0,0.1), 0px 1px 2px 0 rgba(0,0,0,0.06)'}}
            >
              <div class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2 px-2.5 pt-2.5 pb-4 border-t-0 border-r-0 border-b border-l-0 border-[#e6e2da]">
                <div class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
                  <div class="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p class="flex-grow-0 flex-shrink-0 w-[306px] text-sm text-left text-[#1e1b19]">
                      TA courses for Talent Academy
                    </p>
                  </div>
                  <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2.5">
                    <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative px-2.5 py-0.5 rounded-[3px] bg-[#cce5ff]">
                      <p class="flex-grow-0 flex-shrink-0 text-xs text-center text-[#1e1b19]">
                        Talent Academy
                      </p>
                    </div>
                    <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative px-2.5 py-0.5 rounded-[3px] bg-[#e6e2da]">
                      <p class="flex-grow-0 flex-shrink-0 text-xs text-center text-[#141c25]">
                        Published
                      </p>
                    </div>
                    <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative px-2.5 py-0.5 rounded-[3px] bg-[#d2fae4]">
                      <p class="flex-grow-0 flex-shrink-0 text-xs text-center text-[#141c25]">
                        New
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden px-2.5 py-1">
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[5px]">
                  <p class="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-[#1e1b19]">
                    Latest data received 3sec ago
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
                      0 Subscribers
                    </p>
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
              class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-[314px] overflow-hidden bg-white border border-gray-200"
              style={{boxShadow: '0px 1px 3px 0 rgba(0,0,0,0.1), 0px 1px 2px 0 rgba(0,0,0,0.06)'}}
            >
              <div class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2 px-2.5 pt-2.5 pb-4 border-t-0 border-r-0 border-b border-l-0 border-[#e6e2da]">
                <div class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
                  <div class="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <p class="flex-grow-0 flex-shrink-0 w-[306px] text-sm text-left text-[#1e1b19]">
                      All Learner Records
                    </p>
                  </div>
                  <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2.5">
                    <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative px-2.5 py-0.5 rounded-[3px] bg-[#cce5ff]">
                      <p class="flex-grow-0 flex-shrink-0 text-xs text-center text-[#1e1b19]">
                        Talent Academy
                      </p>
                    </div>
                    <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative px-2.5 py-0.5 rounded-[3px] bg-[#e6e2da]">
                      <p class="flex-grow-0 flex-shrink-0 text-xs text-center text-[#141c25]">
                        Published
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden px-2.5 py-1">
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[5px]">
                  <p class="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-[#1e1b19]">
                    Latest data received 3sec ago
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
          </div>
        </div>
      </div>
      <div class="flex justify-between items-end w-[1292px] absolute left-[108px] top-20">
        <div
          class="flex flex-row-reverse justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden rounded-[3px] border border-[#d0d5dd]"
          style={{filter: 'drop-shadow(0px 1px 2px rgba(16,24,40,0.05))'}}
        >
          <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-4 py-2.5 bg-[#f0f5ff] border-t-0 border-r border-b-0 border-l-0 border-[#1f2a37] cursor-pointer" onClick={() => navigate('/exchange-available')}>
            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1d2939]">
              Available
            </p>
          </div>
          <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-4 py-2.5 bg-[#f0f5ff] border-t-0 border-r border-b-0 border-l-0 border-gray-300 cursor-pointer" onClick={() => navigate('/exchange-shared')}>
            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1f2a37]">
              Shared with me
            </p>
          </div>
          <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-4 py-2.5 bg-white border-t-0 border-r border-b-0 border-l-0 border-gray-300 cursor-pointer" onClick={() => navigate('/exchange-only-mine')}>
            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1d2939]">
              Only Mine
            </p>
          </div>
          <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-4 py-2.5 bg-[#f0f5ff] border-t-0 border-r border-b-0 border-l-0 border-[#d0d5dd] cursor-pointer" onClick={() => navigate('/exchange-all')}>
            <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-[#344054]">
              All
            </p>
          </div>
        </div>
        <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[770px] gap-3">
          <div class="flex flex-col justify-start items-start flex-grow gap-2">
            <div class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1.5">
              <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#344054]">
                Show
              </p>
              <div
                class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-2 py-1.5 rounded-[3px] bg-white border border-[#d0d5dd]"
                style={{boxShadow: '0px 1px 2px 0 rgba(16,24,40,0.05)'}}
              >
                <div class="flex justify-start items-center flex-grow relative gap-2">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="flex-grow-0 flex-shrink-0 w-2.5 h-2.5 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <circle cx="5" cy="5" r="4" fill="#12B76A"></circle>
                  </svg>
                  <p class="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#101828]">
                    Published
                  </p>
                </div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="#667085"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-start items-start flex-grow gap-2">
            <div class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1.5">
              <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#344054]">
                Domain
              </p>
              <div
                class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-2 py-1.5 rounded-[3px] bg-white border border-[#d0d5dd]"
                style={{boxShadow: '0px 1px 2px 0 rgba(16,24,40,0.05)'}}
              >
                <div class="flex justify-start items-center flex-grow relative gap-2">
                  <p class="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#101828]">
                    All
                  </p>
                </div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="#667085"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                    cy="19.2426"
                    r="2"
                    stroke="#1E1B19"
                    stroke-width="2"
                  ></circle>
                  <rect
                    x="1.87891"
                    y="2.24261"
                    width="4"
                    height="4"
                    stroke="#1E1B19"
                    stroke-width="2"
                  ></rect>
                  <rect
                    x="14.8789"
                    y="17.2426"
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
                    d="M5.87891 4.24261H13.8789M13.8789 19.2426H5.87891M16.8789 7.24261V16.2426"
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
                y="4.24261"
                width="30"
                height="30"
                fill="white"
              ></rect>
              <path
                d="M40.7694 26.5469C39.3601 27.9563 37.556 28.9078 35.5855 29.2809C33.6149 29.6541 31.5664 29.4323 29.6989 28.6435C27.8314 27.8547 26.2288 26.5344 25.0938 24.8495C23.9588 23.1645 23.3424 21.1907 23.3225 19.1776C23.3025 17.1645 23.88 15.2025 24.9819 13.5398C26.0837 11.877 27.6604 10.5881 29.5127 9.83616C31.3649 9.08419 33.4095 8.90289 35.3878 9.31518C37.3661 9.72746 39.1893 10.7148 40.6269 12.1524L33.512 19.2673L40.7694 26.5469Z"
                fill="#1E1B19"
              ></path>
              <path
                d="M27.9556 24.8159C31.0959 27.9562 36.1563 27.9873 39.2583 24.8853C42.3603 21.7833 42.3292 16.7229 39.1889 13.5826C36.0486 10.4423 30.9883 10.4113 27.8863 13.5133C24.7843 16.6153 24.8153 21.6756 27.9556 24.8159Z"
                fill="white"
              ></path>
              <path
                style={{mixBlendMode: 'multiply'}}
                d="M31.5738 26.0107C34.6657 27.3168 38.1813 25.8896 39.4262 22.8231C40.671 19.7566 39.1736 16.2119 36.0818 14.9058C32.9899 13.5998 29.4743 15.0269 28.2294 18.0934C26.9846 21.1599 28.4819 24.7046 31.5738 26.0107Z"
                fill="url(#paint0_radial_583_471828)"
              ></path>
              <path
                d="M45.7295 16.0135L45.1095 16.7981C45.7872 17.3337 46.2255 18.1146 46.3291 18.9676C46.4327 19.8203 46.1935 20.6746 45.6666 21.3435C45.1397 22.0124 44.3667 22.4436 43.5162 22.5409C42.6833 22.6362 41.8423 22.4036 41.1715 21.8913L41.141 21.8608L41.0983 21.8266C40.5375 21.3767 39.8228 21.1623 39.1066 21.2321C38.3902 21.3018 37.7301 21.6505 37.2696 22.2043L37.2641 22.211L37.2587 22.2178C36.649 22.9775 35.8169 23.528 34.8768 23.7929C33.9364 24.0578 32.9336 24.0241 32.0067 23.6949C31.0797 23.3657 30.2752 22.7573 29.7047 21.9536C29.1342 21.15 28.8266 20.1918 28.8231 19.2117C28.8196 18.2318 29.1203 17.2785 29.6824 16.4826C30.2445 15.6867 31.0411 15.0865 31.9629 14.7649C32.8847 14.4433 33.887 14.4159 34.8316 14.6882C35.7762 14.9606 36.6159 15.519 37.234 16.2869L37.2399 16.2943L37.246 16.3015C37.7067 16.8523 38.3641 17.2031 39.0786 17.2778C39.7935 17.3524 40.5093 17.1446 41.0718 16.6963L41.1159 16.6612L41.1376 16.6395C41.7054 16.2318 42.3932 16.0198 43.098 16.038C43.8253 16.0567 44.5284 16.3194 45.0935 16.7852L45.7295 16.0135Z"
                stroke="#1E1B19"
                stroke-width="2"
              ></path>
              <circle cx="43.0566" cy="19.2504" r="1.25" fill="black"></circle>
              <defs>
                <radialGradient
                  id="paint0_radial_583_471828"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(-365.316 1819.9) rotate(45) scale(232.942 228.355)"
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
                d="M5.83301 8H27.1663H5.83301ZM5.83301 16H27.1663H5.83301ZM5.83301 24H27.1663Z"
                fill="white"
              ></path>
              <path
                d="M5.83301 24H27.1663M5.83301 8H27.1663H5.83301ZM5.83301 16H27.1663H5.83301Z"
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
                  d="M19.5003 9.75C19.5003 11.5556 19.5003 13.3611 19.5003 15.1667C19.5003 17.3333 20.2225 18.7778 21.667 19.5H4.33366C5.7781 18.7778 6.50032 17.3333 6.50032 15.1667C6.50032 13.3611 6.50032 11.5556 6.50032 9.75C6.50032 6.16015 9.41047 3.25 13.0003 3.25C16.5902 3.25 19.5003 6.16015 19.5003 9.75Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M10.8337 19.5C10.8337 20.6966 11.8037 21.6667 13.0003 21.6667C14.1969 21.6667 15.167 20.6966 15.167 19.5"
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
          <div class="flex flex-col justify-center items-start absolute left-[260px] top-0 cursor-pointer" onClick={() => navigate('/insights')}>
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
        <div class="w-[1372px] h-px absolute left-[68px] top-16 overflow-hidden bg-[#e6e2da]"></div>
        <svg
          width="64"
          height="2"
          viewBox="0 0 64 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute left-[1110px] top-16"
          preserveAspectRatio="xMidYMid meet"
        >
          <line y1="1" x2="64" y2="1" stroke="black" stroke-width="2"></line>
        </svg>
      </div>
    </div>
  );
};

export default ExchangeOnlyMine;
