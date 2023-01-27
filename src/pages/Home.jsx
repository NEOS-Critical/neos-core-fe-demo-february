import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
  const navigate = useNavigate()

  return (
    <div className="w-[1440px] h-[980px] relative overflow-hidden bg-white">
      <div className="w-[1381px] h-[673.99px] absolute left-[61px] top-28">
        <div className="w-[1381px] h-[201px] absolute left-0 top-0 bg-[#fafaf8]">
          <div className="w-[1341px] h-6 absolute left-4 top-2">
            <p className="absolute left-0 top-0 text-base text-left text-black">
              Insights
            </p>
          </div>
          <div className="w-[1341px] h-[125px] absolute left-4 top-10">
            <div className="w-[320.25px] h-[125px] absolute left-0 top-0 overflow-hidden rounded-[3px] bg-white border border-[#b1aaa1]">
              <div className="w-[100px] h-[75px] absolute left-[110.13px] top-[30px]">
                <div className="flex justify-start items-start absolute left-[34px] top-0 p-1 rounded-[999px] border border-[#1e1b19]">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path d="M12.125 12H6.125Z" fill="#1E1B19"></path>
                    <path
                      d="M12.125 6V12M12.125 12V18M12.125 12H18.125M12.125 12H6.125"
                      stroke="#1E1B19"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <p className="w-[141px] absolute left-[-20.12px] top-[37px] text-xs font-light text-center text-[#1e1b19]">
                  Create New Insight
                </p>
              </div>
            </div>
            <div className="w-[320.25px] h-[125px] absolute left-[340.25px] top-0 overflow-hidden rounded-[3px] bg-white border border-[#b1aaa1]">
              <div className="w-[320.25px] h-[73px] absolute left-0 top-0 overflow-hidden">
                <img
                  src="screenshot-2023-01-25-at-17.46.png"
                  className="w-[321px] h-[172px] absolute left-[-1px] top-[-1px] object-cover"
                />
              </div>
              <div className="w-[320.25px] h-[52px] absolute left-0 top-[73px] border-t border-r-0 border-b-0 border-l-0 border-[#b1aaa1]">
                <p className="w-[284px] absolute left-[7.75px] top-2 text-sm text-left text-[#1e1b19]">
                  Worker profile
                </p>
                <p className="w-[295px] absolute left-[7.75px] top-[30px] text-xs font-light text-left text-[#1e1b19]">
                  Updated 1h ago
                </p>
              </div>
            </div>
            <div className="w-[320.25px] h-[125px] absolute left-[680.5px] top-0 overflow-hidden rounded-[3px] bg-white border border-[#b1aaa1]">
              <div className="w-[320.25px] h-[73px] absolute left-0 top-0">
                <div className="w-[320.25px] h-[73px] absolute left-0 top-0 overflow-hidden">
                  <img
                    src="screenshot-2023-01-25-at-17.46-2.png"
                    className="w-[322px] h-[137px] absolute left-[-0.5px] top-[-35px] object-cover"
                  />
                </div>
              </div>
              <div className="w-[320.25px] h-[52px] absolute left-0 top-[73px] border-t border-r-0 border-b-0 border-l-0 border-[#b1aaa1]">
                <p className="w-[296px] absolute left-[7.5px] top-2 text-sm text-left text-[#1e1b19]">
                  Employee dashboard
                </p>
                <p className="w-[300px] absolute left-[7.5px] top-[30px] text-xs font-light text-left text-[#1e1b19]">
                  Updated 3 days ago
                </p>
              </div>
            </div>
            <div className="w-[320.25px] h-[125px] absolute left-[1020.75px] top-0 overflow-hidden rounded-[3px] bg-white border border-[#b1aaa1]">
              <div className="w-[320.25px] h-[73px] absolute left-0 top-0 overflow-hidden">
                <img
                  src="screenshot-2023-01-25-at-17.47.png"
                  className="w-[318px] h-[153px] absolute left-[-1px] top-[-1px] object-cover"
                />
              </div>
              <div className="w-[320.25px] h-[52px] absolute left-0 top-[73px] border-t border-r-0 border-b-0 border-l-0 border-[#b1aaa1]">
                <p className="w-[282px] absolute left-[8.25px] top-2 text-sm text-left text-[#1e1b19]">
                  Learner dashboard
                </p>
                <p className="w-[300px] absolute left-[8.25px] top-[30px] text-xs font-light text-left text-[#1e1b19]">
                  Updated 12th Jan 2023 at 12:34
                </p>
              </div>
            </div>
          </div>
          <div className="w-[1341px] h-5 absolute left-4 top-[173px]">
            <p className="absolute left-[1267px] top-0 text-sm text-left text-[#1e1b19]">
              Show All
            </p>
            <div className="flex justify-center items-center absolute left-[1323px] top-0 gap-[3.7113523483276367px]">
              <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[3.7113523483276367px] px-[2.5979466438293457px] py-[3.7113523483276367px]">
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M13.3206 6.19688L8.31025 11.2072C8.25806 11.2594 8.18727 11.2887 8.11345 11.2887C8.03963 11.2887 7.96884 11.2594 7.91665 11.2072C7.86445 11.155 7.83513 11.0842 7.83513 11.0104C7.83513 10.9366 7.86445 10.8658 7.91665 10.8136L12.4518 6.27842H0.876313C0.802489 6.27842 0.73169 6.2491 0.679489 6.1969C0.627288 6.1447 0.597961 6.0739 0.597961 6.00007C0.597961 5.92625 0.627288 5.85545 0.679489 5.80325C0.73169 5.75105 0.802489 5.72172 0.876313 5.72172H12.4518L7.91665 1.18655C7.86445 1.13436 7.83513 1.06356 7.83513 0.989747C7.83513 0.915932 7.86445 0.84514 7.91665 0.792944C7.96884 0.740749 8.03963 0.711426 8.11345 0.711426C8.18727 0.711426 8.25806 0.740749 8.31025 0.792944L13.3206 5.80327C13.3464 5.82911 13.3669 5.85979 13.3809 5.89356C13.3949 5.92733 13.4021 5.96352 13.4021 6.00007C13.4021 6.03663 13.3949 6.07282 13.3809 6.10659C13.3669 6.14036 13.3464 6.17104 13.3206 6.19688V6.19688Z"
                    fill="black"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1381px] h-[304px] absolute left-0 top-[201px]">
          <div className="w-[1349px] h-10 absolute left-4 top-0">
            <div className="w-[1349px] h-6 absolute left-0 top-4">
              <p className="absolute left-0 top-0 text-base text-left text-black">
                Data Products
              </p>
              <svg
                width="58"
                height="24"
                viewBox="0 0 58 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[58px] h-6 absolute left-[1291px] top-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M22 12.999V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H13V12.999H22ZM11 12.999V21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V12.999H11V12.999ZM11 3V10.999H2V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H11ZM21 3C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V10.999H13V3H21Z"
                  fill="#13100F"
                ></path>
                <path
                  d="M37 4H55V6H37V4ZM37 11H55V13H37V11ZM37 18H55V20H37V18Z"
                  fill="#BEB8AE"
                ></path>
              </svg>
            </div>
          </div>
          <div className="w-[1349px] h-[228px] absolute left-4 top-12">
            <div className="w-[322.25px] h-[228px] absolute left-0 top-0 overflow-hidden rounded-[3px] border border-[#b1aaa1]">
              <div className="w-[135px] h-[75px] absolute left-[93.63px] top-[76.5px]">
                <div className="flex justify-start items-start absolute left-[51.5px] top-0 p-1 rounded-[999px] border border-[#1e1b19]">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path d="M12.125 12.5H6.125Z" fill="#1E1B19"></path>
                    <path
                      d="M12.125 6.5V12.5M12.125 12.5V18.5M12.125 12.5H18.125M12.125 12.5H6.125"
                      stroke="#1E1B19"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <p className="w-40 absolute left-[-12.62px] top-[36.5px] text-xs font-light text-center text-[#1e1b19]">
                  Create New Data Product
                </p>
              </div>
            </div>
            <div className="w-[322.25px] h-[228px] absolute left-[342.25px] top-0 overflow-hidden rounded-[3px] bg-white border border-[#b1aaa1]">
              <div className="w-[322.25px] h-[126px] absolute left-0 top-0 overflow-hidden border-t-0 border-r-0 border-b border-l-0 border-[#e6e2da]">
                <div className="w-[302.25px] h-[50px] absolute left-[9.75px] top-2.5">
                  <div className="w-[302.25px] h-4 absolute left-0 top-0">
                    <p className="w-[306px] absolute left-0 top-0 text-sm text-left text-[#1e1b19]">
                      All Learner Records
                    </p>
                  </div>
                  <div className="w-[191px] h-6 absolute left-0 top-[26px]">
                    <div className="flex justify-start items-center h-6 absolute left-0 top-0 gap-1 px-2 rounded-[3px] bg-[#cce5ff]">
                      <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1b19]">
                        Talent academy
                      </p>
                    </div>
                    <div className="flex justify-center items-center absolute left-[116px] top-px px-2.5 py-0.5 rounded-[3px] bg-[#e6e2da]">
                      <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-[#1e1b19]">
                        Published
                      </p>
                    </div>
                  </div>
                </div>
                <p className="w-[298px] absolute left-[9.75px] top-[74px] text-xs font-light text-left text-[#1e1b19]">
                  All courses and certificates completed from all sectors.
                  Contains PII.
                </p>
              </div>
              <div className="w-[322.25px] h-12 absolute left-0 top-[126px] overflow-hidden">
                <div className="w-44 h-5 absolute left-2.5 top-1">
                  <p className="w-[305px] absolute left-[-0.25px] top-0 text-xs font-light text-left text-[#1e1b19]">
                    Latest data received 2 hours ago
                  </p>
                </div>
                <div className="w-[94px] h-5 absolute left-2.5 top-6">
                  <p className="w-[75px] absolute left-[-0.25px] top-0 text-xs font-light text-left text-[#1e1b19]">
                    Data Quality
                  </p>
                  <p className="w-6 absolute left-[74.75px] top-0 text-xs font-light text-left text-[#1e1b19]">
                    3/5
                  </p>
                </div>
              </div>
              <div className="w-[322.25px] h-[54px] absolute left-0 top-[174px] overflow-hidden border-t border-r-0 border-b-0 border-l-0 border-[#e6e2da]">
                <div className="w-[104px] h-[34px] absolute left-[9.75px] top-2.5">
                  <div className="w-[74px] h-[34px] absolute left-0 top-0">
                    <p className="w-[86px] absolute left-0 top-[7px] text-xs text-left text-[#1e1b19]">
                      3 Subscribers
                    </p>
                  </div>
                </div>
                <svg
                  width="229"
                  height="24"
                  viewBox="0 0 229 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[228.25px] h-6 absolute left-[84px] top-[15px]"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M216.5 3C215.675 3 215 3.675 215 4.5C215 5.325 215.675 6 216.5 6C217.325 6 218 5.325 218 4.5C218 3.675 217.325 3 216.5 3ZM216.5 18C215.675 18 215 18.675 215 19.5C215 20.325 215.675 21 216.5 21C217.325 21 218 20.325 218 19.5C218 18.675 217.325 18 216.5 18ZM216.5 10.5C215.675 10.5 215 11.175 215 12C215 12.825 215.675 13.5 216.5 13.5C217.325 13.5 218 12.825 218 12C218 11.175 217.325 10.5 216.5 10.5Z"
                    fill="#1E1B19"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="w-[322.25px] h-[228px] absolute left-[684.5px] top-0 overflow-hidden rounded-[3px] bg-white border border-[#b1aaa1]">
              <div className="w-[322.25px] h-[124px] absolute left-0 top-0 overflow-hidden border-t-0 border-r-0 border-b border-l-0 border-[#e6e2da]">
                <div className="w-[302.25px] h-[50px] absolute left-[9.5px] top-2.5">
                  <div className="w-[302.25px] h-4 absolute left-0 top-0">
                    <p className="w-[330px] absolute left-0 top-0 text-sm text-left text-[#1e1b19]">
                      Individual Learner Records
                    </p>
                  </div>
                  <div className="w-[116px] h-6 absolute left-0 top-[26px]">
                    <div className="flex justify-start items-center h-6 absolute left-0 top-0 gap-1 px-2 rounded-[3px] bg-[#cce5ff]">
                      <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1b19]">
                        Media
                      </p>
                    </div>
                    <div className="flex justify-center items-center absolute left-[61px] top-px px-2.5 py-0.5 rounded-[3px] bg-[#e6e2da]">
                      <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-[#1e1b19]">
                        Public
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-[302.25px] h-10 absolute left-2.5 top-[74px]">
                  <p className="w-[303px] absolute left-[-0.5px] top-0 text-xs font-light text-left text-[#1e1b19]">
                    Courses and certificates completed by Media employees.
                    Contains PII.
                  </p>
                </div>
              </div>
              <div className="w-[322.25px] h-12 absolute left-0 top-[124px] overflow-hidden">
                <div className="w-44 h-5 absolute left-2.5 top-1">
                  <p className="w-[301px] absolute left-[-0.5px] top-0 text-xs font-light text-left text-[#1e1b19]">
                    Latest data received 2 hours ago
                  </p>
                </div>
                <div className="w-[94px] h-5 absolute left-2.5 top-6">
                  <p className="w-[75px] absolute left-[-0.5px] top-0 text-xs font-light text-left text-[#1e1b19]">
                    Data Quality
                  </p>
                  <p className="w-[26px] absolute left-[74.5px] top-0 text-xs font-light text-left text-[#1e1b19]">
                    3/5
                  </p>
                </div>
              </div>
              <div className="w-[322.25px] h-14 absolute left-0 top-[172px] overflow-hidden border-t border-r-0 border-b-0 border-l-0 border-[#e6e2da]">
                <div className="w-[82px] h-9 absolute left-2.5 top-2.5">
                  <div className="w-[82px] h-9 absolute left-0 top-0">
                    <div className="flex justify-center items-center absolute left-0 top-[7px] px-2.5 py-0.5 rounded-[3px] bg-[#e6e2da]">
                      <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-[#1e1b19]">
                        Subscribed
                      </p>
                    </div>
                  </div>
                </div>
                <svg
                  width="221"
                  height="24"
                  viewBox="0 0 221 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[220.25px] h-6 absolute left-[92px] top-4"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M208.75 3C207.925 3 207.25 3.675 207.25 4.5C207.25 5.325 207.925 6 208.75 6C209.575 6 210.25 5.325 210.25 4.5C210.25 3.675 209.575 3 208.75 3ZM208.75 18C207.925 18 207.25 18.675 207.25 19.5C207.25 20.325 207.925 21 208.75 21C209.575 21 210.25 20.325 210.25 19.5C210.25 18.675 209.575 18 208.75 18ZM208.75 10.5C207.925 10.5 207.25 11.175 207.25 12C207.25 12.825 207.925 13.5 208.75 13.5C209.575 13.5 210.25 12.825 210.25 12C210.25 11.175 209.575 10.5 208.75 10.5Z"
                    fill="#1E1B19"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="w-[322.25px] h-[228px] absolute left-[1026.75px] top-0 overflow-hidden rounded-[3px] bg-white border border-[#b1aaa1]">
              <div className="w-[322.25px] h-[124px] absolute left-0 top-0 overflow-hidden border-t-0 border-r-0 border-b border-l-0 border-[#e6e2da]">
                <div className="w-[302.25px] h-[50px] absolute left-[10.25px] top-2.5">
                  <div className="w-[302.25px] h-4 absolute left-0 top-0">
                    <p className="w-[330px] absolute left-0 top-0 text-sm text-left text-[#1e1b19]">
                      Individual Learner Records
                    </p>
                  </div>
                  <div className="w-[125px] h-6 absolute left-0 top-[26px]">
                    <div className="flex justify-start items-center h-6 absolute left-0 top-0 gap-1 px-2 rounded-[3px] bg-[#e6f2ff]">
                      <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#1e1b19]">
                        Tourism
                      </p>
                    </div>
                    <div className="flex justify-center items-center absolute left-[70px] top-px px-2.5 py-0.5 rounded-[3px] bg-[#e6e2da]">
                      <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-[#1e1b19]">
                        Public
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-[302.25px] h-10 absolute left-[10.25px] top-[74px]">
                  <p className="w-[303px] absolute left-[-0.5px] top-0 text-xs font-light text-left text-[#1e1b19]">
                    Courses and certificates completed by Media employees.
                    Contains PII.
                  </p>
                </div>
              </div>
              <div className="w-[322.25px] h-12 absolute left-0 top-[124px] overflow-hidden">
                <div className="w-[195px] h-5 absolute left-2.5 top-1">
                  <p className="w-[301px] absolute left-[0.25px] top-0 text-xs font-light text-left text-[#1e1b19]">
                    Latest data received yesterday 12:34
                  </p>
                </div>
                <div className="w-[94px] h-5 absolute left-2.5 top-6">
                  <p className="w-[75px] absolute left-[0.25px] top-0 text-xs font-light text-left text-[#1e1b19]">
                    Data Quality
                  </p>
                  <p className="w-[25px] absolute left-[75.25px] top-0 text-xs font-light text-left text-[#1e1b19]">
                    3/5
                  </p>
                </div>
              </div>
              <div className="w-[322.25px] h-14 absolute left-0 top-[172px] overflow-hidden border-t border-r-0 border-b-0 border-l-0 border-[#e6e2da]">
                <div className="w-[82px] h-9 absolute left-2.5 top-2.5">
                  <div className="flex justify-start items-start absolute left-0 top-0 gap-1.5 py-[7px]">
                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative px-2.5 py-0.5 rounded-[3px] bg-[#e6e2da]">
                      <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-[#1e1b19]">
                        Subscribed
                      </p>
                    </div>
                  </div>
                </div>
                <svg
                  width="221"
                  height="24"
                  viewBox="0 0 221 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[220.25px] h-6 absolute left-[92px] top-4"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M209 3C208.175 3 207.5 3.675 207.5 4.5C207.5 5.325 208.175 6 209 6C209.825 6 210.5 5.325 210.5 4.5C210.5 3.675 209.825 3 209 3ZM209 18C208.175 18 207.5 18.675 207.5 19.5C207.5 20.325 208.175 21 209 21C209.825 21 210.5 20.325 210.5 19.5C210.5 18.675 209.825 18 209 18ZM209 10.5C208.175 10.5 207.5 11.175 207.5 12C207.5 12.825 208.175 13.5 209 13.5C209.825 13.5 210.5 12.825 210.5 12C210.5 11.175 209.825 10.5 209 10.5Z"
                    fill="#1E1B19"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="w-[1341px] h-5 absolute left-4 top-[284px]">
            <p className="absolute left-[1267px] top-0 text-sm text-left text-[#1e1b19]">
              Show All
            </p>
            <div className="flex justify-center items-center absolute left-[1323px] top-0 gap-[3.7113523483276367px]">
              <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[3.7113523483276367px] px-[2.5979466438293457px] py-[3.7113523483276367px]">
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M13.3206 6.19688L8.31025 11.2072C8.25806 11.2594 8.18727 11.2887 8.11345 11.2887C8.03963 11.2887 7.96884 11.2594 7.91665 11.2072C7.86445 11.155 7.83513 11.0842 7.83513 11.0104C7.83513 10.9366 7.86445 10.8658 7.91665 10.8136L12.4518 6.27842H0.876313C0.802489 6.27842 0.73169 6.2491 0.679489 6.1969C0.627288 6.1447 0.597961 6.0739 0.597961 6.00007C0.597961 5.92625 0.627288 5.85545 0.679489 5.80325C0.73169 5.75105 0.802489 5.72172 0.876313 5.72172H12.4518L7.91665 1.18655C7.86445 1.13436 7.83513 1.06356 7.83513 0.989747C7.83513 0.915932 7.86445 0.84514 7.91665 0.792944C7.96884 0.740749 8.03963 0.711426 8.11345 0.711426C8.18727 0.711426 8.25806 0.740749 8.31025 0.792944L13.3206 5.80327C13.3464 5.82911 13.3669 5.85979 13.3809 5.89356C13.3949 5.92733 13.4021 5.96352 13.4021 6.00007C13.4021 6.03663 13.3949 6.07282 13.3809 6.10659C13.3669 6.14036 13.3464 6.17104 13.3206 6.19688V6.19688Z"
                    fill="black"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1381px] h-[168.99px] absolute left-0 top-[505px]">
          <div className="flex justify-start items-start w-[1349px] absolute left-4 top-2 gap-8">
            <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">
              Data Sources
            </p>
          </div>
          <div className="w-[1349px] h-[116.99px] absolute left-4 top-10">
            <div className="w-[322.25px] h-[116.99px] absolute left-0 top-0 overflow-hidden rounded-[3px] border border-[#beb8ae]">
              <div className="w-[110px] h-[75px] absolute left-[106.13px] top-[25.99px]">
                <div className="flex justify-start items-start absolute left-[39px] top-0 p-1 rounded-[999px] border border-[#1e1b19]">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path d="M12.125 12.9939H6.125Z" fill="#1E1B19"></path>
                    <path
                      d="M12.125 6.9939V12.9939M12.125 12.9939V18.9939M12.125 12.9939H18.125M12.125 12.9939H6.125"
                      stroke="#1E1B19"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <p className="w-[136px] absolute left-[-13.12px] top-[37.01px] text-xs font-light text-center text-[#1e1b19]">
                  Add new data source
                </p>
              </div>
            </div>
            <div className="w-[322.25px] h-[116.99px] absolute left-[342.25px] top-0 overflow-hidden rounded-[3px] bg-white border border-[#b1aaa1]">
              <div className="w-[322.25px] h-[69.99px] absolute left-0 top-0">
                <div className="w-[114.09px] h-[23.99px] absolute left-5 top-2.5">
                  <div className="flex flex-col justify-center items-center absolute left-0 top-0 gap-[5px]">
                    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[5px] px-[2.5px] py-0.5">
                      <svg
                        width="19"
                        height="20"
                        viewBox="0 0 19 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M18.2617 9.01142L2.426 0.143444C2.22616 0.0315279 1.99692 -0.0167243 1.76892 0.00513692C1.54092 0.0269981 1.32503 0.117931 1.1501 0.265782C0.975165 0.413632 0.849529 0.611355 0.789982 0.832523C0.730435 1.05369 0.739815 1.28777 0.816867 1.50346L3.80387 9.86699C3.83289 9.94853 3.83289 10.0376 3.80387 10.1191L0.816867 18.4827C0.738895 18.6985 0.728857 18.933 0.788102 19.1546C0.847348 19.3763 0.973036 19.5745 1.14827 19.7226C1.3235 19.8707 1.53987 19.9616 1.7683 19.983C1.99672 20.0045 2.22624 19.9555 2.426 19.8427L18.2617 10.9747C18.4362 10.877 18.5815 10.7345 18.6826 10.562C18.7837 10.3894 18.837 10.193 18.837 9.99305C18.837 9.79307 18.7837 9.59669 18.6826 9.42415C18.5815 9.25162 18.4362 9.10915 18.2617 9.01142V9.01142ZM17.8953 10.3203L2.05961 19.1882C1.99299 19.2256 1.91658 19.2417 1.84057 19.2344C1.76457 19.2271 1.6926 19.1968 1.63427 19.1475C1.57595 19.0982 1.53406 19.0323 1.51419 18.9586C1.49433 18.8849 1.49744 18.8069 1.52311 18.735L4.51011 10.3713L4.51111 10.3681H10.2471C10.3465 10.3681 10.4419 10.3285 10.5122 10.2582C10.5826 10.1879 10.6221 10.0925 10.6221 9.99305C10.6221 9.8936 10.5826 9.79821 10.5122 9.72789C10.4419 9.65756 10.3465 9.61805 10.2471 9.61805H4.51116C4.51075 9.61693 4.51052 9.61579 4.5101 9.61467L1.52311 1.25123C1.4961 1.17947 1.4923 1.10105 1.51224 1.02702C1.53218 0.952986 1.57485 0.887082 1.63425 0.8386C1.7019 0.781279 1.78721 0.748987 1.87586 0.747147C1.94047 0.747837 2.00379 0.765314 2.05961 0.797866L17.8953 9.66585C17.9534 9.69843 18.0019 9.74593 18.0356 9.80344C18.0692 9.86095 18.087 9.9264 18.087 9.99306C18.087 10.0597 18.0692 10.1252 18.0356 10.1827C18.0019 10.2402 17.9534 10.2877 17.8953 10.3203V10.3203Z"
                          fill="#7D766F"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <p className="w-[142px] absolute left-[32.75px] top-0.5 text-sm text-left text-[#1e1b19]">
                    SAP Pipeline
                  </p>
                </div>
                <div className="w-[162px] h-5 absolute left-5 top-[41.99px]">
                  <div className="flex justify-center items-center absolute left-0 top-1 gap-[5px]">
                    <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 h-3 w-3 relative">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path
                          d="M7.94854 1.82258C7.93981 1.80939 7.92852 1.7981 7.91534 1.78938C7.06848 0.951308 5.92382 0.483288 4.73239 0.48795C3.54096 0.492612 2.4 0.969575 1.55973 1.81425C0.719455 2.65892 0.24845 3.80234 0.250004 4.99378C0.251558 6.18522 0.725544 7.32742 1.56802 8.16989C2.4105 9.01237 3.55269 9.48636 4.74413 9.48791C5.93557 9.48946 7.079 9.01846 7.92367 8.17818C8.76834 7.33791 9.2453 6.19695 9.24996 5.00552C9.25463 3.81409 8.78661 2.66944 7.94854 1.82258V1.82258ZM6.36345 4.80248C6.32963 4.49897 6.21018 4.21133 6.01905 3.97315L7.80229 2.18991C8.4607 2.9055 8.84469 3.83097 8.88631 4.80248H6.36345ZM6.01413 4.98225C6.01413 5.23114 5.94033 5.47444 5.80205 5.68138C5.66378 5.88832 5.46725 6.04961 5.2373 6.14485C5.00736 6.2401 4.75434 6.26502 4.51024 6.21646C4.26614 6.16791 4.04191 6.04806 3.86592 5.87207C3.68993 5.69608 3.57008 5.47186 3.52153 5.22775C3.47297 4.98365 3.49789 4.73063 3.59314 4.50069C3.68838 4.27075 3.84967 4.07421 4.05661 3.93594C4.26356 3.79766 4.50685 3.72386 4.75574 3.72386C5.08937 3.72423 5.40923 3.85693 5.64514 4.09285C5.88106 4.32876 6.01376 4.64862 6.01413 4.98225ZM4.75574 9.11697C4.08316 9.11747 3.42062 8.95389 2.82556 8.64042C2.23051 8.32695 1.7209 7.87305 1.34094 7.31808C0.960987 6.76312 0.722146 6.12384 0.645135 5.45569C0.568124 4.78753 0.655268 4.11068 0.899009 3.48383C1.14275 2.85697 1.53573 2.29904 2.04387 1.85842C2.55201 1.41779 3.15997 1.10778 3.81502 0.955255C4.47007 0.802734 5.15245 0.812313 5.80296 0.98316C6.45347 1.15401 7.05249 1.48097 7.54806 1.93568L5.76482 3.71892C5.48444 3.49521 5.13764 3.37107 4.77899 3.36602C4.42034 3.36097 4.07018 3.4753 3.78362 3.69102C3.49705 3.90675 3.29034 4.21162 3.19599 4.55768C3.10165 4.90374 3.12504 5.27134 3.26248 5.60266C3.39991 5.93397 3.6436 6.21019 3.95519 6.38786C4.26678 6.56553 4.6286 6.63456 4.98373 6.5841C5.33885 6.53364 5.66711 6.36655 5.91688 6.10911C6.16665 5.85168 6.32374 5.51851 6.36345 5.16202H8.88631C8.83879 6.22603 8.38299 7.23079 7.6137 7.96737C6.84441 8.70396 5.82081 9.11569 4.75574 9.11697V9.11697Z"
                          fill="#7D766F"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <p className="w-[206px] absolute left-[21.75px] top-[0.01px] text-sm font-light text-left text-[#1e1b19]">
                    Data Sources: source 1
                  </p>
                </div>
              </div>
              <div className="w-[322.25px] h-[47px] absolute left-0 top-[69.99px] border-t border-r-0 border-b-0 border-l-0 border-[#e6e2da]">
                <p className="absolute left-5 top-[16.5px] text-xs font-light text-left text-[#1e1b19]">
                  Pipeline updated 1h ago
                </p>
              </div>
            </div>
            <div className="w-[322.25px] h-[116.99px] absolute left-[684.5px] top-0 overflow-hidden rounded-[3px] bg-white border border-[#b1aaa1]">
              <div className="w-[322.25px] h-[69.99px] absolute left-0 top-0">
                <div className="w-[121.09px] h-[23.99px] absolute left-5 top-2.5">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[23.09px] h-[23.99px] absolute left-0 top-0"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M15.8913 15.992V11.994L20.7011 16.9915L15.8913 21.989V17.991H4.34782V15.992H15.8913ZM8.19566 1.99902V5.99602L19.7392 5.99702V7.99601H8.19566V11.994L3.38586 6.99651L8.19566 1.99902Z"
                      fill="#7D766F"
                    ></path>
                  </svg>
                  <p className="w-[157px] absolute left-[33.5px] top-0.5 text-sm text-left text-[#1e1b19]">
                    Smart Itinerary
                  </p>
                </div>
                <div className="w-[140px] h-5 absolute left-5 top-[41.99px]">
                  <p className="w-[162px] absolute left-[0.5px] top-[0.01px] text-sm font-light text-left text-[#1e1b19]">
                    Data Sources: source 1
                  </p>
                </div>
              </div>
              <div className="w-[322.25px] h-[47px] absolute left-0 top-[69.99px] border-t border-r-0 border-b-0 border-l-0 border-[#e6e2da]">
                <p className="w-[232px] absolute left-[19.5px] top-[16.01px] text-xs font-light text-left text-[#1e1b19]">
                  Connector updated yesterday 12:45
                </p>
              </div>
            </div>
            <div className="w-[322.25px] h-[116.99px] absolute left-[1026.75px] top-0 overflow-hidden rounded-[3px] bg-white border border-[#b1aaa1]">
              <div className="w-[322.25px] h-[69.99px] absolute left-0 top-0">
                <div className="w-[132.09px] h-[23.99px] absolute left-5 top-2.5">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[23.09px] h-[23.99px] absolute left-0 top-0"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M16.1413 15.992V11.994L20.9511 16.9915L16.1413 21.989V17.991H4.59784V15.992H16.1413ZM8.44567 1.99902V5.99602L19.9892 5.99702V7.99601H8.44567V11.994L3.63588 6.99651L8.44567 1.99902Z"
                      fill="#7D766F"
                    ></path>
                  </svg>
                  <p className="w-[171px] absolute left-[33.25px] top-0.5 text-sm text-left text-[#1e1b19]">
                    CSV Connector
                  </p>
                </div>
                <div className="w-[140px] h-5 absolute left-5 top-[41.99px]">
                  <p className="w-[172px] absolute left-[0.25px] top-[0.01px] text-sm font-light text-left text-[#1e1b19]">
                    Data Sources: source 1
                  </p>
                </div>
              </div>
              <div className="w-[322.25px] h-[47px] absolute left-0 top-[69.99px] border-t border-r-0 border-b-0 border-l-0 border-[#e6e2da]">
                <p className="w-[244px] absolute left-[20.25px] top-[16.01px] text-xs font-light text-left text-[#1e1b19]">
                  Connector updated 01/01/2023 01:22
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-[1440px] absolute left-0 top-16 px-5 py-2 bg-[#f6f5f2]">
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-10">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-4 py-1 rounded-[3px] bg-[#1e1b19]">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M13.5433 11.0461C13.8448 10.3181 14 9.53793 14 8.75C14 7.1587 13.3679 5.63258 12.2426 4.50736C11.1174 3.38214 9.5913 2.75 8 2.75C6.4087 2.75 4.88258 3.38214 3.75736 4.50736C2.63214 5.63258 2 7.1587 2 8.75C2 9.53793 2.15519 10.3181 2.45672 11.0461C2.75825 11.7741 3.20021 12.4355 3.75736 12.9926C4.31451 13.5498 4.97595 13.9917 5.7039 14.2933C6.43185 14.5948 7.21207 14.75 8 14.75C8.78793 14.75 9.56815 14.5948 10.2961 14.2933C11.0241 13.9917 11.6855 13.5498 12.2426 12.9926C12.7998 12.4355 13.2417 11.7741 13.5433 11.0461Z"
                fill="#1E1B19"
              ></path>
              <path
                d="M8 6.75V8.75M8 8.75V10.75M8 8.75H10M8 8.75H6M14 8.75C14 9.53793 13.8448 10.3181 13.5433 11.0461C13.2417 11.7741 12.7998 12.4355 12.2426 12.9926C11.6855 13.5498 11.0241 13.9917 10.2961 14.2933C9.56815 14.5948 8.78793 14.75 8 14.75C7.21207 14.75 6.43185 14.5948 5.7039 14.2933C4.97595 13.9917 4.31451 13.5498 3.75736 12.9926C3.20021 12.4355 2.75825 11.7741 2.45672 11.0461C2.15519 10.3181 2 9.53793 2 8.75C2 7.1587 2.63214 5.63258 3.75736 4.50736C4.88258 3.38214 6.4087 2.75 8 2.75C9.5913 2.75 11.1174 3.38214 12.2426 4.50736C13.3679 5.63258 14 7.1587 14 8.75Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-white">
              Create
            </p>
          </div>
        </div>
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 overflow-hidden p-1 rounded-2xl">
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-[4.999999523162842px]">
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[4.999999523162842px] px-[3.499999523162842px] py-[1.999999761581421px]">
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M17.3463 14.0576C16.7667 13.0601 16.0759 11.1777 16.0759 7.875V7.20969C16.0759 3.26322 12.9122 0.0290258 9.02337 0.000187397C9.00525 9.3647e-05 8.98721 0 8.96908 0C7.08196 0.00257693 5.27316 0.754683 3.94056 2.09087C2.60796 3.42706 1.86072 5.23788 1.86322 7.125V7.875C1.86322 11.1776 1.172 13.0599 0.592098 14.0575C0.492273 14.2282 0.439245 14.4223 0.438366 14.6201C0.437486 14.8179 0.488784 15.0125 0.587087 15.1841C0.68539 15.3558 0.827221 15.4985 0.998275 15.5978C1.16933 15.6972 1.36356 15.7497 1.56137 15.75H5.59417V16.125C5.59417 17.0201 5.94975 17.8785 6.58269 18.5115C7.21562 19.1444 8.07407 19.5 8.96917 19.5C9.86428 19.5 10.7227 19.1444 11.3557 18.5115C11.9886 17.8785 12.3442 17.0201 12.3442 16.125V15.75H16.377C16.5748 15.7497 16.769 15.6972 16.94 15.5978C17.111 15.4985 17.2529 15.3558 17.3512 15.1842C17.4495 15.0126 17.5008 14.8181 17.5 14.6203C17.4991 14.4225 17.4461 14.2284 17.3463 14.0576V14.0576ZM11.5942 16.125C11.5942 16.8212 11.3176 17.4889 10.8253 17.9812C10.333 18.4734 9.66537 18.75 8.96917 18.75C8.27298 18.75 7.6053 18.4734 7.11302 17.9812C6.62074 17.4889 6.34417 16.8212 6.34417 16.125V15.75H11.5942V16.125ZM16.6992 14.8136C16.6671 14.8707 16.6203 14.9181 16.5636 14.9509C16.5069 14.9837 16.4425 15.0007 16.377 15H1.56137C1.49588 15.0007 1.43141 14.9837 1.37473 14.9509C1.31805 14.9181 1.27123 14.8706 1.23919 14.8135C1.20537 14.756 1.18765 14.6905 1.18787 14.6238C1.1881 14.5571 1.20627 14.4917 1.24048 14.4344C1.8667 13.3571 2.61322 11.3447 2.61322 7.87501V7.12501C2.61071 5.43677 3.27896 3.81668 4.47094 2.62114C5.66293 1.42559 7.28103 0.752529 8.96927 0.750007C8.98538 0.750007 9.00177 0.750101 9.01788 0.750195C12.4961 0.776013 15.3259 3.67375 15.3259 7.2097V7.87501C15.3259 11.3447 16.0719 13.3572 16.6978 14.4345C16.732 14.4917 16.7502 14.5572 16.7504 14.6239C16.7507 14.6906 16.733 14.7561 16.6992 14.8136V14.8136Z"
                    fill="#1E1B19"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg
        width="61"
        height="868"
        viewBox="0 0 61 868"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[60px] h-[868px] absolute left-0 top-28"
        preserveAspectRatio="none"
      >
        <rect width="60" height="868" fill="white"></rect>
        <path
          d="M19.3334 22H40.6667H19.3334ZM19.3334 30H40.6667H19.3334ZM19.3334 38H40.6667Z"
          fill="white"
        ></path>
        <path
          d="M19.3334 38H40.6667M19.3334 22H40.6667H19.3334ZM19.3334 30H40.6667H19.3334Z"
          stroke="#1E1B19"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <rect x="10" y="66" width="40" height="1" fill="#E6E2DA"></rect>
        <circle cx="23.3787" cy="108.243" r="2.5" stroke="#1E1B19"></circle>
        <rect
          x="20.8787"
          y="90.7427"
          width="5"
          height="5"
          stroke="#1E1B19"
        ></rect>
        <rect
          x="33.8787"
          y="105.743"
          width="5"
          height="5"
          stroke="#1E1B19"
        ></rect>
        <rect
          x="36.3787"
          y="89.7071"
          width="5"
          height="5"
          transform="rotate(45 36.3787 89.7071)"
          stroke="#1E1B19"
        ></rect>
        <path
          d="M25.3787 93.2427H33.3787M33.3787 108.243H25.3787M36.3787 96.2427V105.243"
          stroke="#1E1B19"
        ></path>
        <path
          d="M36.6631 159.547C35.2537 160.956 33.4497 161.908 31.4792 162.281C29.5086 162.654 27.4601 162.432 25.5926 161.644C23.7251 160.855 22.1225 159.535 20.9875 157.85C19.8525 156.165 19.2361 154.191 19.2161 152.178C19.1962 150.165 19.7737 148.203 20.8755 146.54C21.9774 144.877 23.5541 143.588 25.4064 142.836C27.2586 142.084 29.3032 141.903 31.2815 142.315C33.2598 142.728 35.083 143.715 36.5206 145.153L29.4057 152.267L36.6631 159.547Z"
          fill="#1E1B19"
        ></path>
        <path
          d="M23.0421 158.623C26.6335 162.214 32.4209 162.25 35.9685 158.702C39.5161 155.154 39.4806 149.367 35.8892 145.776C32.2978 142.184 26.5104 142.149 22.9628 145.696C19.4152 149.244 19.4507 155.031 23.0421 158.623Z"
          fill="white"
        ></path>
        <path
          // style="mix-blend-mode:multiply"
          d="M27.4669 159.011C30.5588 160.317 34.0744 158.89 35.3192 155.823C36.564 152.757 35.0667 149.212 31.9748 147.906C28.8829 146.6 25.3673 148.027 24.1225 151.093C22.8777 154.16 24.375 157.705 27.4669 159.011Z"
          fill="url(#paint0_radial_564_463042)"
        ></path>
        <path
          d="M41.2968 149.409L41.6231 149.014L41.305 149.416C42.0832 150.031 42.587 150.928 42.7061 151.909C42.8253 152.89 42.5502 153.874 41.9427 154.645C41.3352 155.416 40.4443 155.913 39.4652 156.025C38.4954 156.136 37.5174 155.86 36.7428 155.258L36.7288 155.244L36.709 155.224L36.6871 155.206C36.225 154.836 35.6364 154.659 35.0474 154.717C34.4582 154.774 33.9159 155.061 33.5377 155.516L33.5376 155.516L33.532 155.523C32.8587 156.362 31.94 156.969 30.9024 157.262C29.8646 157.554 28.7587 157.517 27.7373 157.154C26.7158 156.791 25.8296 156.121 25.2012 155.236C24.5728 154.35 24.2335 153.294 24.2297 152.214C24.2258 151.133 24.5574 150.081 25.1782 149.202C25.7989 148.323 26.6786 147.66 27.696 147.305C28.7134 146.95 29.819 146.92 30.86 147.22C31.9011 147.52 32.8261 148.136 33.5069 148.982L33.5068 148.982L33.513 148.989C33.8928 149.443 34.4345 149.732 35.0227 149.793C35.6112 149.855 36.1997 149.684 36.6619 149.315L36.6845 149.297L36.7049 149.277L36.705 149.277L36.7051 149.277L36.7051 149.277L36.7052 149.277L36.7053 149.277L36.7053 149.277L36.7054 149.277L36.7055 149.277L36.7055 149.276L36.7056 149.276L36.7057 149.276L36.7057 149.276L36.7058 149.276L36.7059 149.276L36.706 149.276L36.706 149.276L36.7061 149.276L36.7062 149.276L36.7062 149.276L36.7063 149.276L36.7064 149.276L36.7064 149.276L36.7065 149.275L36.7066 149.275L36.7067 149.275L36.7067 149.275L36.7068 149.275L36.7069 149.275L36.707 149.275L36.707 149.275L36.7071 149.275L36.7072 149.275L36.7073 149.275L36.7073 149.275L36.7074 149.275L36.7075 149.275L36.7076 149.274L36.7076 149.274L36.7077 149.274L36.7078 149.274L36.7079 149.274L36.7079 149.274L36.708 149.274L36.7081 149.274L36.7082 149.274L36.7082 149.274L36.7083 149.274L36.7084 149.274L36.7085 149.274L36.7086 149.273L36.7086 149.273L36.7087 149.273L36.7088 149.273L36.7089 149.273L36.7089 149.273L36.709 149.273L36.7091 149.273L36.7092 149.273L36.7093 149.273L36.7093 149.273L36.7094 149.273L36.7095 149.272L36.7096 149.272L36.7097 149.272L36.7098 149.272L36.7098 149.272L36.7099 149.272L36.71 149.272L36.7101 149.272L36.7102 149.272L36.7102 149.272L36.7103 149.272L36.7104 149.272L36.7105 149.271L36.7106 149.271L36.7107 149.271L36.7107 149.271L36.7108 149.271L36.7109 149.271L36.711 149.271L36.7111 149.271L36.7112 149.271L36.7112 149.271L36.7113 149.271L36.7114 149.271L36.7115 149.27L36.7116 149.27L36.7117 149.27L36.7118 149.27L36.7118 149.27L36.7119 149.27L36.712 149.27L36.7121 149.27L36.7122 149.27L36.7123 149.27L36.7124 149.27L36.7124 149.27L36.7125 149.269L36.7126 149.269L36.7127 149.269L36.7128 149.269L36.7129 149.269L36.713 149.269L36.7131 149.269L36.7131 149.269L36.7132 149.269L36.7133 149.269L36.7134 149.269L36.7135 149.268L36.7136 149.268L36.7137 149.268L36.7138 149.268L36.7139 149.268L36.7139 149.268C37.3745 148.783 38.1797 148.53 39.0041 148.551C39.8405 148.573 40.6481 148.875 41.2968 149.409Z"
          stroke="#1E1B19"
          strokeWidth="1.02602"
        ></path>
        <path
          d="M38.8679 155.229C40.5021 155.246 41.8137 153.934 41.7974 152.3C41.7812 150.666 40.4432 149.328 38.8091 149.311C37.1749 149.295 35.8633 150.607 35.8795 152.241C35.8958 153.875 37.2337 155.213 38.8679 155.229Z"
          fill="white"
        ></path>
        <path
          d="M38.4702 153.201C38.3316 153.139 38.2058 153.052 38.0998 152.943L38.0999 152.943C37.9368 152.777 37.8256 152.568 37.7804 152.342C37.7351 152.115 37.7578 151.882 37.8454 151.672C37.9329 151.461 38.0814 151.283 38.2721 151.159C38.4628 151.035 38.6873 150.971 38.9171 150.976C39.1469 150.98 39.3718 151.052 39.5632 151.184C39.7546 151.315 39.9038 151.5 39.9919 151.714C40.08 151.929 40.103 152.163 40.0581 152.387C40.0133 152.611 39.9026 152.816 39.7403 152.975L39.7401 152.975C39.6324 153.082 39.5042 153.165 39.3628 153.221C39.2214 153.277 39.0697 153.304 38.9165 153.301C38.7632 153.297 38.6115 153.263 38.4702 153.201ZM40.0451 150.997C39.8151 150.767 39.5233 150.609 39.2065 150.543C38.8898 150.477 38.5623 150.506 38.2654 150.626C37.9685 150.747 37.7157 150.954 37.5391 151.22C37.3625 151.487 37.27 151.801 37.2732 152.124C37.2764 152.446 37.3751 152.762 37.5568 153.032C37.7384 153.301 37.9948 153.512 38.2937 153.639C38.5926 153.765 38.9207 153.801 39.2364 153.741C39.5522 153.681 39.8413 153.529 40.0673 153.303C40.3703 153 40.538 152.586 40.5337 152.154C40.5294 151.722 40.3535 151.306 40.0451 150.997Z"
          fill="#1E1B19"
          stroke="#1E1B19"
          strokeWidth="0.102602"
        ></path>
        <rect
          width="1"
          height="868"
          transform="matrix(-1 0 0 1 61 0)"
          fill="#E6E2DA"
        ></rect>
        <defs>
          <radialGradient
            id="paint0_radial_564_463042"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(-369.423 1952.9) rotate(45) scale(232.942 228.355)"
          >
            <stop></stop>
            <stop offset="1" stopColor="white"></stop>
          </radialGradient>
        </defs>
      </svg>
      <div className="w-[1440px] h-16 absolute left-0 top-0 bg-white border-t-0 border-r-0 border-b border-l-0 border-[#e6e2da]">
        <div className="w-[1400px] h-16 absolute left-5 top-0">
          <svg
            width="78"
            height="36"
            viewBox="0 0 78 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[78px] h-9 absolute left-0 top-3.5"
            preserveAspectRatio="none"
          >
            <path
              d="M14.6367 25L4.55859 12.6602V25H2.15625V8.19531H3.84375L13.9219 20.5352V8.19531H16.3242V25H14.6367Z"
              fill="#1B1B1B"
            ></path>
            <path
              d="M28.3073 14.8047H33.8269V17.0781H28.3073V22.7148H35.7487V25H25.905V8.19531H35.5144V10.4805H28.3073V14.8047Z"
              fill="#1B1B1B"
            ></path>
            <path
              d="M42.9858 20.0078C42.5561 18.9375 42.3413 17.8008 42.3413 16.5977C42.3413 15.3945 42.5561 14.2578 42.9858 13.1875C43.4155 12.1172 44.0014 11.2031 44.7436 10.4453C45.4858 9.67969 46.3764 9.07422 47.4155 8.62891C48.4545 8.18359 49.56 7.96094 50.7319 7.96094C52.2944 7.96094 53.7163 8.33984 54.9975 9.09766C56.2866 9.84766 57.2983 10.8828 58.0327 12.2031C58.767 13.5234 59.1342 14.9883 59.1342 16.5977C59.1342 18.207 58.767 19.6719 58.0327 20.9922C57.2983 22.3125 56.2866 23.3516 54.9975 24.1094C53.7163 24.8594 52.2944 25.2344 50.7319 25.2344C49.56 25.2344 48.4545 25.0117 47.4155 24.5664C46.3764 24.1211 45.4858 23.5195 44.7436 22.7617C44.0014 21.9961 43.4155 21.0781 42.9858 20.0078ZM44.7319 16.5977C44.7319 18.418 45.3022 19.9336 46.4428 21.1445C47.5834 22.3555 49.0131 22.9609 50.7319 22.9609C52.4506 22.9609 53.8803 22.3555 55.0209 21.1445C56.1616 19.9336 56.7319 18.418 56.7319 16.5977C56.7319 14.7852 56.1577 13.2734 55.0092 12.0625C53.8686 10.8438 52.4428 10.2344 50.7319 10.2344C49.0209 10.2344 47.5913 10.8438 46.4428 12.0625C45.3022 13.2734 44.7319 14.7852 44.7319 16.5977Z"
              fill="#1B1B1B"
            ></path>
            <path
              d="M65.8439 22.4336L67.508 20.8047C68.6955 22.2422 70.0627 22.9609 71.6095 22.9609C72.4142 22.9609 73.1017 22.7266 73.672 22.2578C74.2502 21.7812 74.5392 21.1758 74.5392 20.4414C74.5392 19.957 74.4142 19.5312 74.1642 19.1641C73.9142 18.7891 73.5666 18.4766 73.1213 18.2266C72.6838 17.9688 72.2306 17.7422 71.7619 17.5469C71.3009 17.3516 70.7775 17.1289 70.1916 16.8789C69.6056 16.6211 69.1252 16.3672 68.7502 16.1172C67.3283 15.1719 66.6173 13.9414 66.6173 12.4258C66.6173 11.1836 67.1017 10.1289 68.0705 9.26172C69.047 8.39453 70.258 7.96094 71.7033 7.96094C73.3595 7.96094 74.8634 8.51953 76.215 9.63672L74.797 11.3945C73.883 10.6211 72.883 10.2344 71.797 10.2344C71.047 10.2344 70.3947 10.4375 69.84 10.8438C69.2931 11.25 69.0197 11.8008 69.0197 12.4961C69.0197 12.9023 69.1447 13.2656 69.3947 13.5859C69.6447 13.9062 69.9884 14.1875 70.4259 14.4297C70.8713 14.6719 71.3244 14.8906 71.7853 15.0859C72.2541 15.2812 72.7736 15.5078 73.3439 15.7656C73.9142 16.0234 74.383 16.2773 74.7502 16.5273C76.2111 17.4883 76.9416 18.7695 76.9416 20.3711C76.9416 21.8242 76.4455 23 75.4533 23.8984C74.4611 24.7891 73.2189 25.2344 71.7267 25.2344C70.5705 25.2344 69.4845 24.9961 68.4689 24.5195C67.4611 24.0352 66.5861 23.3398 65.8439 22.4336Z"
              fill="#1B1B1B"
            ></path>
          </svg>
          <div className="flex justify-start items-center w-[1178px] absolute left-[110px] top-[21.5px] gap-4">
            <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative cursor-pointer" onClick={() => navigate('/')}>
              <p className="flex-grow-0 flex-shrink-0 text-sm text-center text-[#1e1b19]">
                Home
              </p>
            </div>
            <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative cursor-pointer" onClick={() => navigate('/data-landscape')}>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-center text-[#1e1b19]">
                Data Landscape
              </p>
            </div>
            <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-center text-[#1e1b19]">
                Exchange
              </p>
            </div>
            <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-center text-[#1e1b19]">
                Insights
              </p>
            </div>
          </div>
          <div className="flex justify-end items-center absolute left-[1320px] top-4 gap-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
              preserveAspectRatio="none"
            >
              <path
                d="M14.4121 14.4121L20 20"
                stroke="#1E1B19"
                strokeLinecap="square"
              ></path>
              <path
                d="M10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16Z"
                stroke="#1E1B19"
                strokeLinecap="square"
              ></path>
            </svg>
            <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-8 w-8 relative gap-2.5 rounded-[999px] bg-[#e6e2da]">
              <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-[#1e1b19]">
                NM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
