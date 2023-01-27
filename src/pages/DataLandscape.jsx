import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DcCsv from '../components/DcCsv';
import DcCsvOne from '../components/DcCsvOne';
import TourismError from '../components/TourismError';
import TourismErrorTwo from '../components/TourismErrorTwo';

const DataLandscape = (props) => {
  const navigate = useNavigate();
  const [isTourismHover, setIsTourismHover] = useState(false);
  const [isIndividualHover, setIsIndividualHover] = useState(false);
  const [isDcHover, setIsDcHover] = useState(false);
  const [isDcOneHover, setIsDcOneHover] = useState(false);

  return (
    <div className="w-[1440px] h-[980px] relative overflow-hidden bg-white">
      <svg
        width="1380"
        height="917"
        viewBox="0 0 1380 917"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[1380px] h-[916px]"
        preserveAspectRatio="none"
      >
        <path
          d="M14.5362 1L14.5362 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M44.9926 1L44.9926 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M72.065 1L72.065 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M102.521 1L102.521 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M129.594 1L129.594 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M160.05 1L160.05 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M188.815 1L188.815 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M217.579 1L217.579 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M244.651 1L244.651 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M273.416 1L273.416 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M302.18 1L302.18 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M330.945 1L330.945 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M358.017 1L358.017 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M388.474 1L388.474 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M417.238 1L417.238 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M446.002 1L446.002 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M474.767 1L474.767 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M503.531 1L503.531 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M532.296 1L532.296 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M561.06 1L561.06 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M589.825 1L589.825 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M618.589 1L618.589 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M647.353 1L647.353 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M676.117 1L676.117 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M704.883 1L704.883 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M731.955 1L731.955 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M762.411 1L762.411 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M791.175 1L791.175 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M819.94 1L819.94 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M848.704 1L848.704 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M879.161 1L879.161 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M906.234 1L906.233 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M934.998 1L934.998 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M963.762 1L963.762 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M992.526 1L992.526 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1021.29 1L1021.29 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1050.06 1L1050.06 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1078.82 1L1078.82 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1107.58 1L1107.58 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1134.66 1L1134.66 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1163.42 1L1163.42 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1192.19 1L1192.19 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1220.95 1L1220.95 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1249.71 1L1249.71 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1278.48 1L1278.48 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1308.94 1L1308.94 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1337.7 1L1337.7 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1366.46 1L1366.46 912.454"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1 16.052H1380"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1 42.8105H1380"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1 72.9131H1380"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1 99.6719H1380"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1 128.102H1380"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1 159.877H1380"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1 186.635H1380"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1 215.066H1380"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1 241.825H1380"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1 271.928H1380"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1 302.031H1380"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1 328.789H1380"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1 357.219H1380"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1 385.65H1380"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1 414.081H1380"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1 442.511H1380"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1 469.27H1380"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1 497.701H1380"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1 526.131H1380"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1 556.234H1380"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1 588.01H1380"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1 614.768H1380"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1 641.526H1380"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1 668.284H1380"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1 698.388H1380"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1 726.819H1380"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1 755.249H1380"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1 783.68H1380"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1 813.783H1380"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1 838.869H1380"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1 870.644H1380"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <path
          d="M1 899.075H1380"
          stroke="black"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeDasharray="0.17 28.43"
        ></path>
        <mask
          id="mask0_561_464143"
          // style="mask-type:alpha"
          maskUnits="userSpaceOnUse"
          x="1"
          y="1"
          width="1380"
          height="916"
        >
          <rect x="1" y="1" width="1380" height="916" fill="white"></rect>
        </mask>
        <g mask="url(#mask0_561_464143)"></g>
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
          <div className="w-[1178px] h-[21px] absolute left-[110px] top-[21.5px]">
            <div className="flex flex-col justify-center items-start absolute left-0 top-0 cursor-pointer" onClick={() => navigate('/')}>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-center text-[#1e1b19]">
                Home
              </p>
            </div>
            <div className="flex flex-col justify-center items-start absolute left-[55px] top-0">
              <p className="flex-grow-0 flex-shrink-0 text-sm text-center text-[#1e1b19]">
                Data Landscape
              </p>
            </div>
            <div className="flex flex-col justify-center items-start absolute left-[179px] top-0">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-center text-[#1e1b19]">
                Exchange
              </p>
            </div>
            <div className="flex flex-col justify-center items-start absolute left-64 top-0">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-center text-[#1e1b19]">
                Insights
              </p>
            </div>
          </div>
          <div className="w-20 h-8 absolute left-[1320px] top-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 absolute left-0 top-1"
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
            <div className="flex flex-col justify-center items-center w-8 h-8 absolute left-12 top-0 gap-2.5 rounded-[999px] bg-[#e6e2da]">
              <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-[#1e1b19]">
                NM
              </p>
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
          d="M19.3333 22H40.6667H19.3333ZM19.3333 30H40.6667H19.3333ZM19.3333 38H40.6667Z"
          fill="white"
        ></path>
        <path
          d="M19.3333 38H40.6667M19.3333 22H40.6667H19.3333ZM19.3333 30H40.6667H19.3333Z"
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
          d="M36.663 159.547C35.2536 160.956 33.4496 161.908 31.4791 162.281C29.5085 162.654 27.46 162.432 25.5925 161.644C23.725 160.855 22.1224 159.535 20.9874 157.85C19.8524 156.165 19.236 154.191 19.2161 152.178C19.1961 150.165 19.7736 148.203 20.8754 146.54C21.9773 144.877 23.554 143.588 25.4063 142.836C27.2585 142.084 29.3031 141.903 31.2814 142.315C33.2597 142.728 35.0829 143.715 36.5205 145.153L29.4056 152.267L36.663 159.547Z"
          fill="#1E1B19"
        ></path>
        <path
          d="M23.042 158.623C26.6334 162.214 32.4208 162.25 35.9684 158.702C39.516 155.154 39.4805 149.367 35.8891 145.776C32.2977 142.184 26.5103 142.149 22.9627 145.696C19.4151 149.244 19.4506 155.031 23.042 158.623Z"
          fill="white"
        ></path>
        <path
          // style="mix-blend-mode:multiply"
          d="M27.4669 159.011C30.5588 160.317 34.0744 158.89 35.3192 155.823C36.564 152.757 35.0667 149.212 31.9748 147.906C28.8829 146.6 25.3673 148.027 24.1225 151.093C22.8776 154.16 24.375 157.705 27.4669 159.011Z"
          fill="url(#paint0_radial_562_472246)"
        ></path>
        <path
          d="M41.2967 149.409L41.6231 149.014L41.305 149.416C42.0831 150.031 42.5869 150.928 42.7061 151.909C42.8252 152.89 42.5501 153.874 41.9427 154.645C41.3352 155.416 40.4443 155.913 39.4651 156.025C38.4954 156.136 37.5174 155.86 36.7428 155.258L36.7288 155.244L36.709 155.224L36.6871 155.206C36.225 154.836 35.6364 154.659 35.0474 154.717C34.4582 154.774 33.9158 155.061 33.5376 155.516L33.5376 155.516L33.532 155.523C32.8587 156.362 31.94 156.969 30.9023 157.262C29.8646 157.554 28.7587 157.517 27.7373 157.154C26.7158 156.791 25.8295 156.121 25.2011 155.236C24.5727 154.35 24.2335 153.294 24.2296 152.214C24.2258 151.133 24.5574 150.081 25.1782 149.202C25.7989 148.323 26.6785 147.66 27.696 147.305C28.7134 146.95 29.8189 146.92 30.86 147.22C31.9011 147.52 32.826 148.136 33.5069 148.982L33.5068 148.982L33.513 148.989C33.8928 149.443 34.4345 149.732 35.0227 149.793C35.6111 149.855 36.1997 149.684 36.6619 149.315L36.6845 149.297L36.7049 149.277L36.705 149.277L36.705 149.277L36.7051 149.277L36.7052 149.277L36.7052 149.277L36.7053 149.277L36.7054 149.277L36.7054 149.277L36.7055 149.276L36.7056 149.276L36.7056 149.276L36.7057 149.276L36.7058 149.276L36.7059 149.276L36.7059 149.276L36.706 149.276L36.7061 149.276L36.7061 149.276L36.7062 149.276L36.7063 149.276L36.7063 149.276L36.7064 149.276L36.7065 149.275L36.7066 149.275L36.7066 149.275L36.7067 149.275L36.7068 149.275L36.7069 149.275L36.7069 149.275L36.707 149.275L36.7071 149.275L36.7071 149.275L36.7072 149.275L36.7073 149.275L36.7074 149.275L36.7074 149.275L36.7075 149.274L36.7076 149.274L36.7077 149.274L36.7077 149.274L36.7078 149.274L36.7079 149.274L36.708 149.274L36.7081 149.274L36.7081 149.274L36.7082 149.274L36.7083 149.274L36.7084 149.274L36.7084 149.274L36.7085 149.273L36.7086 149.273L36.7087 149.273L36.7088 149.273L36.7088 149.273L36.7089 149.273L36.709 149.273L36.7091 149.273L36.7092 149.273L36.7092 149.273L36.7093 149.273L36.7094 149.273L36.7095 149.272L36.7096 149.272L36.7096 149.272L36.7097 149.272L36.7098 149.272L36.7099 149.272L36.71 149.272L36.71 149.272L36.7101 149.272L36.7102 149.272L36.7103 149.272L36.7104 149.272L36.7105 149.271L36.7105 149.271L36.7106 149.271L36.7107 149.271L36.7108 149.271L36.7109 149.271L36.711 149.271L36.711 149.271L36.7111 149.271L36.7112 149.271L36.7113 149.271L36.7114 149.271L36.7115 149.27L36.7116 149.27L36.7116 149.27L36.7117 149.27L36.7118 149.27L36.7119 149.27L36.712 149.27L36.7121 149.27L36.7122 149.27L36.7122 149.27L36.7123 149.27L36.7124 149.27L36.7125 149.269L36.7126 149.269L36.7127 149.269L36.7128 149.269L36.7129 149.269L36.7129 149.269L36.713 149.269L36.7131 149.269L36.7132 149.269L36.7133 149.269L36.7134 149.269L36.7135 149.268L36.7136 149.268L36.7136 149.268L36.7137 149.268L36.7138 149.268L36.7139 149.268C37.3745 148.783 38.1796 148.53 39.0041 148.551C39.8405 148.573 40.6481 148.875 41.2967 149.409Z"
          stroke="#1E1B19"
          strokeWidth="1.02602"
        ></path>
        <path
          d="M38.8678 155.229C40.502 155.246 41.8136 153.934 41.7973 152.3C41.7811 150.666 40.4432 149.328 38.809 149.311C37.1748 149.295 35.8632 150.607 35.8794 152.241C35.8957 153.875 37.2336 155.213 38.8678 155.229Z"
          fill="white"
        ></path>
        <path
          d="M38.4701 153.201C38.3315 153.139 38.2057 153.052 38.0997 152.943L38.0998 152.943C37.9367 152.777 37.8255 152.568 37.7803 152.342C37.735 152.115 37.7577 151.882 37.8452 151.672C37.9328 151.461 38.0813 151.283 38.272 151.159C38.4627 151.035 38.6871 150.971 38.917 150.976C39.1468 150.98 39.3717 151.052 39.5631 151.184C39.7545 151.315 39.9037 151.5 39.9918 151.714C40.0799 151.929 40.1028 152.163 40.058 152.387C40.0132 152.611 39.9025 152.816 39.7402 152.975L39.74 152.975C39.6323 153.082 39.5041 153.165 39.3627 153.221C39.2213 153.277 39.0696 153.304 38.9163 153.301C38.7631 153.297 38.6114 153.263 38.4701 153.201ZM40.045 150.997C39.8149 150.767 39.5231 150.609 39.2064 150.543C38.8897 150.477 38.5621 150.506 38.2653 150.626C37.9684 150.747 37.7156 150.954 37.539 151.22C37.3623 151.487 37.2699 151.801 37.2731 152.124C37.2763 152.446 37.375 152.762 37.5566 153.032C37.7383 153.301 37.9947 153.512 38.2936 153.639C38.5925 153.765 38.9206 153.801 39.2363 153.741C39.552 153.681 39.8412 153.529 40.0672 153.303C40.3702 153 40.5379 152.586 40.5336 152.154C40.5293 151.722 40.3534 151.306 40.045 150.997Z"
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
            id="paint0_radial_562_472246"
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
      <div className="w-[80.91px] h-5 absolute left-[1189px] top-[292px]">
        <div className="flex flex-col justify-center items-center absolute left-0 top-[1.57px] gap-1">
          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="none"
            >
              <path
                d="M19.5319 16.6596H18.383V0.957442C18.383 0.855871 18.3426 0.758462 18.2708 0.68664C18.199 0.614819 18.1016 0.574468 18 0.574463H12.6383C12.5367 0.574468 12.4393 0.614819 12.3675 0.68664C12.2957 0.758462 12.2553 0.855871 12.2553 0.957442V5.17021H7.2766C7.17503 5.17021 7.07762 5.21056 7.00579 5.28239C6.93397 5.35421 6.89362 5.45162 6.89362 5.55319V9.76595H1.91489C1.81332 9.76596 1.71591 9.80631 1.64409 9.87813C1.57227 9.94995 1.53192 10.0474 1.53191 10.1489V16.6596H0.382979C0.281406 16.6596 0.183994 16.6999 0.112172 16.7717C0.0403495 16.8436 0 16.941 0 17.0425C0 17.1441 0.0403495 17.2415 0.112172 17.3134C0.183994 17.3852 0.281406 17.4255 0.382979 17.4255H19.5319C19.6335 17.4255 19.7309 17.3852 19.8027 17.3134C19.8745 17.2415 19.9149 17.1441 19.9149 17.0425C19.9149 16.941 19.8745 16.8436 19.8027 16.7717C19.7309 16.6999 19.6335 16.6596 19.5319 16.6596ZM7.65957 5.93617H12.2553V16.6596H7.65957V5.93617ZM2.29787 10.5319H6.89362V16.6596H2.29787V10.5319ZM13.0213 16.6596V1.34042H17.617V16.6596H13.0213Z"
                fill="black"
              ></path>
            </svg>
          </div>
        </div>
        <p className="absolute left-[25.91px] top-0 text-sm font-light text-left text-black">
          Insights
        </p>
      </div>
      <svg
        width="60"
        height="12"
        viewBox="0 0 60 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[1127.5px] top-[342.5px]"
        preserveAspectRatio="none"
      >
        <path
          d="M60 6L50 0.226497V11.7735L60 6ZM0 7H51V5H0V7Z"
          fill="#D9D4C9"
        ></path>
      </svg>
      <svg
        width="113"
        height="212"
        viewBox="0 0 113 212"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[788.83px] top-[244.11px]"
        preserveAspectRatio="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M67.3302 11.6153C67.3304 6.6446 63.3008 2.61496 58.3301 2.61499L0.327172 2.61529L0.327164 0.615291L58.3301 0.614987C64.4054 0.614957 69.3304 5.54006 69.3302 11.6154L69.3272 99.0001H103V94.2266L113 100L103 105.774V101H69.6561L69.6572 200.634C69.6573 206.709 64.7323 211.634 58.657 211.634L0.501961 211.633L0.501997 209.633L58.6571 209.634C63.6278 209.634 67.6573 205.604 67.6573 200.634L67.6561 101H1V99.0001H67.3272L67.3302 11.6153Z"
          fill="#D9D4C9"
        ></path>
      </svg>
      <div className="w-[168px] h-8" onMouseEnter={() => setIsTourismHover(true)} onMouseLeave={() => setIsTourismHover(false)}>
        <div className="w-[168px] h-8 absolute left-[104.5px] top-[230.5px] bg-[#ffefd6] border border-[#dcdbdb]"></div>
        <p className="absolute left-[115px] top-60 text-xs text-left text-black">
          Tourism CSV
        </p>
        <div className="flex flex-col justify-center items-center w-[15px] absolute left-[254px] top-[239px] gap-[3.124999761581421px]">
          <div className="flex-grow-0 flex-shrink-0 w-[5.43px] h-[15px] relative">
            {/* Tourism Error */}
            {isTourismHover && (
              <TourismError />
            )}
            <div className="flex flex-col justify-center items-center absolute left-0 top-0 gap-[2.4193546772003174px] px-[1.2096773386001587px] py-[1.6935482025146484px]">
              <svg
                width="5"
                height="13"
                viewBox="0 0 5 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M2.5 4.99468C2.20226 4.99468 1.91121 5.08297 1.66366 5.24838C1.4161 5.41379 1.22315 5.6489 1.10921 5.92397C0.995274 6.19904 0.965462 6.50172 1.02355 6.79374C1.08163 7.08575 1.22501 7.35399 1.43554 7.56452C1.64607 7.77505 1.9143 7.91842 2.20631 7.97651C2.49833 8.03459 2.80101 8.00478 3.07608 7.89084C3.35115 7.7769 3.58626 7.58395 3.75167 7.3364C3.91708 7.08884 4.00537 6.79779 4.00537 6.50005C4.00493 6.10094 3.84618 5.7183 3.56397 5.43609C3.28175 5.15387 2.89911 4.99513 2.5 4.99468ZM2.5 7.57532C2.28733 7.57532 2.07944 7.51226 1.90261 7.39411C1.72578 7.27596 1.58796 7.10802 1.50658 6.91154C1.42519 6.71506 1.4039 6.49886 1.44539 6.29028C1.48688 6.0817 1.58929 5.8901 1.73967 5.73972C1.89005 5.58935 2.08164 5.48694 2.29022 5.44545C2.4988 5.40396 2.71501 5.42525 2.91149 5.50664C3.10797 5.58802 3.2759 5.72584 3.39405 5.90267C3.5122 6.07949 3.57527 6.28739 3.57527 6.50005C3.57495 6.78514 3.46156 7.05845 3.25998 7.26003C3.05839 7.46162 2.78508 7.57501 2.5 7.57532ZM2.5 3.70436C2.79773 3.70436 3.08878 3.61607 3.33634 3.45065C3.5839 3.28524 3.77685 3.05013 3.89078 2.77506C4.00472 2.49999 4.03453 2.19731 3.97645 1.9053C3.91836 1.61328 3.77499 1.34505 3.56446 1.13452C3.35393 0.923988 3.0857 0.780615 2.79368 0.72253C2.50167 0.664444 2.19899 0.694256 1.92392 0.808194C1.64884 0.922132 1.41374 1.11508 1.24832 1.36264C1.08291 1.6102 0.994622 1.90124 0.994622 2.19898C0.99507 2.59809 1.15382 2.98073 1.43603 3.26295C1.71825 3.54516 2.10088 3.70391 2.5 3.70436ZM2.5 1.12371C2.71267 1.12371 2.92056 1.18678 3.09739 1.30493C3.27421 1.42308 3.41203 1.59101 3.49342 1.78749C3.5748 1.98397 3.59609 2.20017 3.55461 2.40875C3.51312 2.61734 3.41071 2.80893 3.26033 2.95931C3.10995 3.10969 2.91835 3.2121 2.70977 3.25359C2.50119 3.29508 2.28499 3.27378 2.08851 3.1924C1.89203 3.11101 1.7241 2.97319 1.60594 2.79637C1.48779 2.61954 1.42473 2.41165 1.42473 2.19898C1.42505 1.9139 1.53844 1.64058 1.74002 1.439C1.9416 1.23742 2.21492 1.12403 2.5 1.12371ZM2.5 9.29575C2.20226 9.29575 1.91121 9.38404 1.66366 9.54945C1.4161 9.71487 1.22315 9.94997 1.10921 10.225C0.995274 10.5001 0.965462 10.8028 1.02355 11.0948C1.08163 11.3868 1.22501 11.6551 1.43554 11.8656C1.64607 12.0761 1.9143 12.2195 2.20631 12.2776C2.49833 12.3357 2.80101 12.3059 3.07608 12.1919C3.35115 12.078 3.58626 11.885 3.75167 11.6375C3.91708 11.3899 4.00537 11.0989 4.00537 10.8011C4.00493 10.402 3.84618 10.0194 3.56397 9.73716C3.28175 9.45495 2.89911 9.2962 2.5 9.29575ZM2.5 11.8764C2.28733 11.8764 2.07944 11.8133 1.90261 11.6952C1.72578 11.577 1.58796 11.4091 1.50658 11.2126C1.42519 11.0161 1.4039 10.7999 1.44539 10.5914C1.48688 10.3828 1.58929 10.1912 1.73967 10.0408C1.89005 9.89042 2.08164 9.78801 2.29022 9.74652C2.4988 9.70503 2.71501 9.72633 2.91149 9.80771C3.10797 9.88909 3.2759 10.0269 3.39405 10.2037C3.5122 10.3806 3.57527 10.5885 3.57527 10.8011C3.57495 11.0862 3.46156 11.3595 3.25998 11.5611C3.05839 11.7627 2.78508 11.8761 2.5 11.8764Z"
                  fill="black"
                ></path>
              </svg>
            </div>
            <svg
              width="3"
              height="4"
              viewBox="0 0 3 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[1.15px] top-[1.56px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx="1.50002" cy="2.125" r="1.25" fill="black"></circle>
            </svg>
            <svg
              width="3"
              height="3"
              viewBox="0 0 3 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[1.15px] top-[5.94px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx="1.50002" cy="1.5" r="1.25" fill="black"></circle>
            </svg>
            <svg
              width="3"
              height="4"
              viewBox="0 0 3 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[1.15px] top-[10.31px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx="1.50002" cy="1.875" r="1.25" fill="black"></circle>
            </svg>
          </div>
        </div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 absolute left-[229px] top-[237px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <circle cx="10" cy="10" r="10" fill="#F1615B"></circle>
          <path
            d="M10 0.789795C8.17833 0.789795 6.39757 1.32998 4.88291 2.34205C3.36825 3.35411 2.18771 4.7926 1.49059 6.4756C0.793465 8.15861 0.611066 10.0105 0.966456 11.7972C1.32185 13.5839 2.19906 15.225 3.48718 16.5131C4.77529 17.8013 6.41645 18.6785 8.20312 19.0339C9.98979 19.3893 11.8417 19.2069 13.5247 18.5097C15.2077 17.8126 16.6462 16.6321 17.6583 15.1174C18.6703 13.6027 19.2105 11.822 19.2105 10.0003C19.2078 7.55838 18.2365 5.21725 16.5098 3.49054C14.7831 1.76383 12.4419 0.79255 10 0.789795V0.789795ZM10 18.474C8.32407 18.474 6.68577 17.977 5.29228 17.0459C3.89879 16.1148 2.81269 14.7914 2.17134 13.2431C1.52999 11.6947 1.36218 9.99092 1.68914 8.34719C2.0161 6.70345 2.82314 5.19359 4.0082 4.00852C5.19327 2.82346 6.70314 2.01642 8.34687 1.68946C9.9906 1.3625 11.6944 1.5303 13.2427 2.17166C14.7911 2.81301 16.1145 3.8991 17.0456 5.29259C17.9767 6.68608 18.4737 8.32438 18.4737 10.0003C18.4711 12.2469 17.5776 14.4007 15.989 15.9893C14.4004 17.5779 12.2466 18.4715 10 18.474ZM9.63158 10.7372V5.57927C9.63158 5.48156 9.6704 5.38785 9.73949 5.31875C9.80858 5.24966 9.90229 5.21085 10 5.21085C10.0977 5.21085 10.1914 5.24966 10.2605 5.31875C10.3296 5.38785 10.3684 5.48156 10.3684 5.57927V10.7372C10.3684 10.8349 10.3296 10.9286 10.2605 10.9977C10.1914 11.0668 10.0977 11.1056 10 11.1056C9.90229 11.1056 9.80858 11.0668 9.73949 10.9977C9.6704 10.9286 9.63158 10.8349 9.63158 10.7372ZM10.7368 14.053C10.7368 14.1987 10.6936 14.3411 10.6127 14.4623C10.5317 14.5835 10.4166 14.6779 10.282 14.7337C10.1473 14.7895 9.99919 14.8041 9.85625 14.7756C9.71332 14.7472 9.58203 14.677 9.47898 14.574C9.37593 14.4709 9.30575 14.3396 9.27732 14.1967C9.24889 14.0538 9.26348 13.9056 9.31925 13.771C9.37502 13.6363 9.46946 13.5213 9.59064 13.4403C9.71181 13.3593 9.85427 13.3161 10 13.3161C10.1954 13.3163 10.3826 13.394 10.5208 13.5322C10.6589 13.6703 10.7366 13.8576 10.7368 14.053V14.053Z"
            fill="white"
          ></path>
        </svg>
      </div>
      <div className="w-[168px] h-8">
        <div className="w-[168px] h-8 absolute left-[104.5px] top-[327.5px] bg-[#ffefd6] border border-[#dcdbdb]"></div>
        <p className="absolute left-[115px] top-[337px] text-xs text-left text-black">
          Media CSV
        </p>
        <div className="flex flex-col justify-center items-center w-[15px] absolute left-[254px] top-[336px] gap-[3.124999761581421px]">
          <div className="flex-grow-0 flex-shrink-0 w-[5.43px] h-[15px] relative">
            <div className="flex flex-col justify-center items-center absolute left-0 top-0 gap-[2.4193546772003174px] px-[1.2096773386001587px] py-[1.6935482025146484px]">
              <svg
                width="5"
                height="13"
                viewBox="0 0 5 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M2.5 4.99456C2.20226 4.99456 1.91121 5.08285 1.66366 5.24826C1.4161 5.41367 1.22315 5.64878 1.10921 5.92385C0.995274 6.19892 0.965462 6.5016 1.02355 6.79362C1.08163 7.08563 1.22501 7.35386 1.43554 7.56439C1.64607 7.77492 1.9143 7.9183 2.20631 7.97638C2.49833 8.03447 2.80101 8.00466 3.07608 7.89072C3.35115 7.77678 3.58626 7.58383 3.75167 7.33627C3.91708 7.08872 4.00537 6.79767 4.00537 6.49993C4.00493 6.10082 3.84618 5.71818 3.56397 5.43597C3.28175 5.15375 2.89911 4.995 2.5 4.99456ZM2.5 7.5752C2.28733 7.5752 2.07944 7.51214 1.90261 7.39399C1.72578 7.27583 1.58796 7.1079 1.50658 6.91142C1.42519 6.71494 1.4039 6.49874 1.44539 6.29016C1.48688 6.08158 1.58929 5.88998 1.73967 5.7396C1.89005 5.58922 2.08164 5.48681 2.29022 5.44532C2.4988 5.40384 2.71501 5.42513 2.91149 5.50651C3.10797 5.5879 3.2759 5.72572 3.39405 5.90255C3.5122 6.07937 3.57527 6.28726 3.57527 6.49993C3.57495 6.78501 3.46156 7.05833 3.25998 7.25991C3.05839 7.46149 2.78508 7.57488 2.5 7.5752ZM2.5 3.70423C2.79773 3.70423 3.08878 3.61595 3.33634 3.45053C3.5839 3.28512 3.77685 3.05001 3.89078 2.77494C4.00472 2.49987 4.03453 2.19719 3.97645 1.90517C3.91836 1.61316 3.77499 1.34493 3.56446 1.1344C3.35393 0.923866 3.0857 0.780493 2.79368 0.722407C2.50167 0.664322 2.19899 0.694134 1.92392 0.808072C1.64884 0.92201 1.41374 1.11496 1.24832 1.36252C1.08291 1.61007 0.994622 1.90112 0.994622 2.19886C0.99507 2.59797 1.15382 2.98061 1.43603 3.26283C1.71825 3.54504 2.10088 3.70379 2.5 3.70423ZM2.5 1.12359C2.71267 1.12359 2.92056 1.18665 3.09739 1.3048C3.27421 1.42296 3.41203 1.59089 3.49342 1.78737C3.5748 1.98385 3.59609 2.20005 3.55461 2.40863C3.51312 2.61721 3.41071 2.80881 3.26033 2.95919C3.10995 3.10957 2.91835 3.21198 2.70977 3.25347C2.50119 3.29496 2.28499 3.27366 2.08851 3.19228C1.89203 3.11089 1.7241 2.97307 1.60594 2.79625C1.48779 2.61942 1.42473 2.41153 1.42473 2.19886C1.42505 1.91378 1.53844 1.64046 1.74002 1.43888C1.9416 1.2373 2.21492 1.12391 2.5 1.12359ZM2.5 9.29563C2.20226 9.29563 1.91121 9.38392 1.66366 9.54933C1.4161 9.71475 1.22315 9.94985 1.10921 10.2249C0.995274 10.5 0.965462 10.8027 1.02355 11.0947C1.08163 11.3867 1.22501 11.6549 1.43554 11.8655C1.64607 12.076 1.9143 12.2194 2.20631 12.2775C2.49833 12.3355 2.80101 12.3057 3.07608 12.1918C3.35115 12.0779 3.58626 11.8849 3.75167 11.6373C3.91708 11.3898 4.00537 11.0987 4.00537 10.801C4.00493 10.4019 3.84618 10.0193 3.56397 9.73704C3.28175 9.45482 2.89911 9.29608 2.5 9.29563ZM2.5 11.8763C2.28733 11.8763 2.07944 11.8132 1.90261 11.6951C1.72578 11.5769 1.58796 11.409 1.50658 11.2125C1.42519 11.016 1.4039 10.7998 1.44539 10.5912C1.48688 10.3827 1.58929 10.1911 1.73967 10.0407C1.89005 9.8903 2.08164 9.78789 2.29022 9.7464C2.4988 9.70491 2.71501 9.7262 2.91149 9.80759C3.10797 9.88897 3.2759 10.0268 3.39405 10.2036C3.5122 10.3804 3.57527 10.5883 3.57527 10.801C3.57495 11.0861 3.46156 11.3594 3.25998 11.561C3.05839 11.7626 2.78508 11.876 2.5 11.8763Z"
                  fill="black"
                ></path>
              </svg>
            </div>
            <svg
              width="3"
              height="4"
              viewBox="0 0 3 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[1.15px] top-[1.56px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx="1.50002" cy="2.125" r="1.25" fill="black"></circle>
            </svg>
            <svg
              width="3"
              height="3"
              viewBox="0 0 3 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[1.15px] top-[5.94px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx="1.50002" cy="1.5" r="1.25" fill="black"></circle>
            </svg>
            <svg
              width="3"
              height="4"
              viewBox="0 0 3 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[1.15px] top-[10.31px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx="1.50002" cy="1.875" r="1.25" fill="black"></circle>
            </svg>
          </div>
        </div>
      </div>
      <div className="w-[168px] h-8" onMouseEnter={() => setIsDcHover(true)} onMouseLeave={() => setIsDcHover(false)}>
        <div className="w-[168px] h-8 absolute left-[104.5px] top-[435.5px] bg-[#ffefd6] border border-[#dcdbdb]"></div>
        <p className="absolute left-[115px] top-[445px] text-xs text-left text-black">
          D&#x26;C CSV
        </p>
        <div className="flex flex-col justify-center items-center w-[15px] absolute left-[254px] top-[444px] gap-[3.124999761581421px]">
          <div className="flex-grow-0 flex-shrink-0 w-[5.43px] h-[15px] relative">
            {/* DC hover */}
            {isDcHover && (
              <DcCsv />
            )}
            <div className="flex flex-col justify-center items-center absolute left-0 top-0 gap-[2.4193546772003174px] px-[1.2096773386001587px] py-[1.6935482025146484px]">
              <svg
                width="5"
                height="13"
                viewBox="0 0 5 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M2.5 4.99456C2.20226 4.99456 1.91121 5.08285 1.66366 5.24826C1.4161 5.41367 1.22315 5.64878 1.10921 5.92385C0.995274 6.19892 0.965462 6.5016 1.02355 6.79362C1.08163 7.08563 1.22501 7.35386 1.43554 7.56439C1.64607 7.77492 1.9143 7.9183 2.20631 7.97638C2.49833 8.03447 2.80101 8.00466 3.07608 7.89072C3.35115 7.77678 3.58626 7.58383 3.75167 7.33627C3.91708 7.08872 4.00537 6.79767 4.00537 6.49993C4.00493 6.10082 3.84618 5.71818 3.56397 5.43597C3.28175 5.15375 2.89911 4.995 2.5 4.99456ZM2.5 7.5752C2.28733 7.5752 2.07944 7.51214 1.90261 7.39399C1.72578 7.27583 1.58796 7.1079 1.50658 6.91142C1.42519 6.71494 1.4039 6.49874 1.44539 6.29016C1.48688 6.08158 1.58929 5.88998 1.73967 5.7396C1.89005 5.58922 2.08164 5.48681 2.29022 5.44532C2.4988 5.40384 2.71501 5.42513 2.91149 5.50651C3.10797 5.5879 3.2759 5.72572 3.39405 5.90255C3.5122 6.07937 3.57527 6.28726 3.57527 6.49993C3.57495 6.78501 3.46156 7.05833 3.25998 7.25991C3.05839 7.46149 2.78508 7.57488 2.5 7.5752ZM2.5 3.70423C2.79773 3.70423 3.08878 3.61595 3.33634 3.45053C3.5839 3.28512 3.77685 3.05001 3.89078 2.77494C4.00472 2.49987 4.03453 2.19719 3.97645 1.90517C3.91836 1.61316 3.77499 1.34493 3.56446 1.1344C3.35393 0.923866 3.0857 0.780493 2.79368 0.722407C2.50167 0.664322 2.19899 0.694134 1.92392 0.808072C1.64884 0.92201 1.41374 1.11496 1.24832 1.36252C1.08291 1.61007 0.994622 1.90112 0.994622 2.19886C0.99507 2.59797 1.15382 2.98061 1.43603 3.26283C1.71825 3.54504 2.10088 3.70379 2.5 3.70423ZM2.5 1.12359C2.71267 1.12359 2.92056 1.18665 3.09739 1.3048C3.27421 1.42296 3.41203 1.59089 3.49342 1.78737C3.5748 1.98385 3.59609 2.20005 3.55461 2.40863C3.51312 2.61721 3.41071 2.80881 3.26033 2.95919C3.10995 3.10957 2.91835 3.21198 2.70977 3.25347C2.50119 3.29496 2.28499 3.27366 2.08851 3.19228C1.89203 3.11089 1.7241 2.97307 1.60594 2.79625C1.48779 2.61942 1.42473 2.41153 1.42473 2.19886C1.42505 1.91378 1.53844 1.64046 1.74002 1.43888C1.9416 1.2373 2.21492 1.12391 2.5 1.12359ZM2.5 9.29563C2.20226 9.29563 1.91121 9.38392 1.66366 9.54933C1.4161 9.71475 1.22315 9.94985 1.10921 10.2249C0.995274 10.5 0.965462 10.8027 1.02355 11.0947C1.08163 11.3867 1.22501 11.6549 1.43554 11.8655C1.64607 12.076 1.9143 12.2194 2.20631 12.2775C2.49833 12.3355 2.80101 12.3057 3.07608 12.1918C3.35115 12.0779 3.58626 11.8849 3.75167 11.6373C3.91708 11.3898 4.00537 11.0987 4.00537 10.801C4.00493 10.4019 3.84618 10.0193 3.56397 9.73704C3.28175 9.45482 2.89911 9.29608 2.5 9.29563ZM2.5 11.8763C2.28733 11.8763 2.07944 11.8132 1.90261 11.6951C1.72578 11.5769 1.58796 11.409 1.50658 11.2125C1.42519 11.016 1.4039 10.7998 1.44539 10.5912C1.48688 10.3827 1.58929 10.1911 1.73967 10.0407C1.89005 9.8903 2.08164 9.78789 2.29022 9.7464C2.4988 9.70491 2.71501 9.7262 2.91149 9.80759C3.10797 9.88897 3.2759 10.0268 3.39405 10.2036C3.5122 10.3804 3.57527 10.5883 3.57527 10.801C3.57495 11.0861 3.46156 11.3594 3.25998 11.561C3.05839 11.7626 2.78508 11.876 2.5 11.8763Z"
                  fill="black"
                ></path>
              </svg>
            </div>
            <svg
              width="3"
              height="4"
              viewBox="0 0 3 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[1.15px] top-[1.56px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx="1.50002" cy="2.125" r="1.25" fill="black"></circle>
            </svg>
            <svg
              width="3"
              height="3"
              viewBox="0 0 3 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[1.15px] top-[5.94px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx="1.50002" cy="1.5" r="1.25" fill="black"></circle>
            </svg>
            <svg
              width="3"
              height="4"
              viewBox="0 0 3 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[1.15px] top-[10.31px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx="1.50002" cy="1.875" r="1.25" fill="black"></circle>
            </svg>
          </div>
        </div>
      </div>
      <div className="w-[168px] h-8">
        <div className="w-[168px] h-8 absolute left-[104.5px] top-[597.5px] bg-[#ffefd6] border border-[#dcdbdb]"></div>
        <p className="absolute left-[115px] top-[607px] text-xs text-left text-black">
          Talent Academy CSV
        </p>
        <div className="flex flex-col justify-center items-center w-[15px] absolute left-[254px] top-[606px] gap-[3.124999761581421px]">
          <div className="flex-grow-0 flex-shrink-0 w-[5.43px] h-[15px] relative">
            <div className="flex flex-col justify-center items-center absolute left-0 top-0 gap-[2.4193546772003174px] px-[1.2096773386001587px] py-[1.6935482025146484px]">
              <svg
                width="5"
                height="13"
                viewBox="0 0 5 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M2.5 4.99456C2.20226 4.99456 1.91121 5.08285 1.66366 5.24826C1.4161 5.41367 1.22315 5.64878 1.10921 5.92385C0.995274 6.19892 0.965462 6.5016 1.02355 6.79362C1.08163 7.08563 1.22501 7.35386 1.43554 7.56439C1.64607 7.77492 1.9143 7.9183 2.20631 7.97638C2.49833 8.03447 2.80101 8.00466 3.07608 7.89072C3.35115 7.77678 3.58626 7.58383 3.75167 7.33627C3.91708 7.08872 4.00537 6.79767 4.00537 6.49993C4.00493 6.10082 3.84618 5.71818 3.56397 5.43597C3.28175 5.15375 2.89911 4.995 2.5 4.99456ZM2.5 7.5752C2.28733 7.5752 2.07944 7.51214 1.90261 7.39399C1.72578 7.27583 1.58796 7.1079 1.50658 6.91142C1.42519 6.71494 1.4039 6.49874 1.44539 6.29016C1.48688 6.08158 1.58929 5.88998 1.73967 5.7396C1.89005 5.58922 2.08164 5.48681 2.29022 5.44532C2.4988 5.40384 2.71501 5.42513 2.91149 5.50651C3.10797 5.5879 3.2759 5.72572 3.39405 5.90255C3.5122 6.07937 3.57527 6.28726 3.57527 6.49993C3.57495 6.78501 3.46156 7.05833 3.25998 7.25991C3.05839 7.46149 2.78508 7.57488 2.5 7.5752ZM2.5 3.70423C2.79773 3.70423 3.08878 3.61595 3.33634 3.45053C3.5839 3.28512 3.77685 3.05001 3.89078 2.77494C4.00472 2.49987 4.03453 2.19719 3.97645 1.90517C3.91836 1.61316 3.77499 1.34493 3.56446 1.1344C3.35393 0.923866 3.0857 0.780493 2.79368 0.722407C2.50167 0.664322 2.19899 0.694134 1.92392 0.808072C1.64884 0.92201 1.41374 1.11496 1.24832 1.36252C1.08291 1.61007 0.994622 1.90112 0.994622 2.19886C0.99507 2.59797 1.15382 2.98061 1.43603 3.26283C1.71825 3.54504 2.10088 3.70379 2.5 3.70423ZM2.5 1.12359C2.71267 1.12359 2.92056 1.18665 3.09739 1.3048C3.27421 1.42296 3.41203 1.59089 3.49342 1.78737C3.5748 1.98385 3.59609 2.20005 3.55461 2.40863C3.51312 2.61721 3.41071 2.80881 3.26033 2.95919C3.10995 3.10957 2.91835 3.21198 2.70977 3.25347C2.50119 3.29496 2.28499 3.27366 2.08851 3.19228C1.89203 3.11089 1.7241 2.97307 1.60594 2.79625C1.48779 2.61942 1.42473 2.41153 1.42473 2.19886C1.42505 1.91378 1.53844 1.64046 1.74002 1.43888C1.9416 1.2373 2.21492 1.12391 2.5 1.12359ZM2.5 9.29563C2.20226 9.29563 1.91121 9.38392 1.66366 9.54933C1.4161 9.71475 1.22315 9.94985 1.10921 10.2249C0.995274 10.5 0.965462 10.8027 1.02355 11.0947C1.08163 11.3867 1.22501 11.6549 1.43554 11.8655C1.64607 12.076 1.9143 12.2194 2.20631 12.2775C2.49833 12.3355 2.80101 12.3057 3.07608 12.1918C3.35115 12.0779 3.58626 11.8849 3.75167 11.6373C3.91708 11.3898 4.00537 11.0987 4.00537 10.801C4.00493 10.4019 3.84618 10.0193 3.56397 9.73704C3.28175 9.45482 2.89911 9.29608 2.5 9.29563ZM2.5 11.8763C2.28733 11.8763 2.07944 11.8132 1.90261 11.6951C1.72578 11.5769 1.58796 11.409 1.50658 11.2125C1.42519 11.016 1.4039 10.7998 1.44539 10.5912C1.48688 10.3827 1.58929 10.1911 1.73967 10.0407C1.89005 9.8903 2.08164 9.78789 2.29022 9.7464C2.4988 9.70491 2.71501 9.7262 2.91149 9.80759C3.10797 9.88897 3.2759 10.0268 3.39405 10.2036C3.5122 10.3804 3.57527 10.5883 3.57527 10.801C3.57495 11.0861 3.46156 11.3594 3.25998 11.561C3.05839 11.7626 2.78508 11.876 2.5 11.8763Z"
                  fill="black"
                ></path>
              </svg>
            </div>
            <svg
              width="3"
              height="4"
              viewBox="0 0 3 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[1.15px] top-[1.56px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx="1.50002" cy="2.125" r="1.25" fill="black"></circle>
            </svg>
            <svg
              width="3"
              height="3"
              viewBox="0 0 3 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[1.15px] top-[5.94px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx="1.50002" cy="1.5" r="1.25" fill="black"></circle>
            </svg>
            <svg
              width="3"
              height="4"
              viewBox="0 0 3 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[1.15px] top-[10.31px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx="1.50002" cy="1.875" r="1.25" fill="black"></circle>
            </svg>
          </div>
        </div>
      </div>
      <div className="w-[272px] h-[63px] absolute left-[518px] top-[217px] bg-white border border-[#dcdbdb]" onMouseEnter={() => setIsIndividualHover(true)} onMouseLeave={() => setIsIndividualHover(false)}>
        <div className="w-[270px] h-7 absolute left-px top-px bg-[#e6f2ff]">
          <p className="w-[229px] absolute left-2 top-1.5 text-xs text-left text-black">
            Individual learner records
          </p>
          <div className="flex flex-col justify-center items-center w-[15px] absolute left-[247px] top-[6.5px] gap-[3.124999761581421px]">
            <div className="flex-grow-0 flex-shrink-0 w-[5.43px] h-[15px] relative">
              {isIndividualHover && (
                <TourismErrorTwo />
              )}
              <div className="flex flex-col justify-center items-center absolute left-0 top-0 gap-[2.4193546772003174px] px-[1.2096773386001587px] py-[1.6935482025146484px]">
                <svg
                  width="5"
                  height="12"
                  viewBox="0 0 5 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M2.50001 4.49468C2.20227 4.49468 1.91122 4.58297 1.66366 4.74838C1.41611 4.91379 1.22316 5.1489 1.10922 5.42397C0.995281 5.69904 0.96547 6.00172 1.02355 6.29374C1.08164 6.58575 1.22501 6.85399 1.43554 7.06452C1.64607 7.27505 1.91431 7.41842 2.20632 7.47651C2.49834 7.53459 2.80102 7.50478 3.07609 7.39084C3.35116 7.2769 3.58627 7.08395 3.75168 6.8364C3.91709 6.58884 4.00538 6.29779 4.00538 6.00005C4.00493 5.60094 3.84619 5.2183 3.56397 4.93609C3.28176 4.65387 2.89912 4.49513 2.50001 4.49468ZM2.50001 7.07532C2.28734 7.07532 2.07945 7.01226 1.90262 6.89411C1.72579 6.77596 1.58797 6.60802 1.50659 6.41154C1.4252 6.21506 1.40391 5.99886 1.4454 5.79028C1.48689 5.5817 1.5893 5.3901 1.73968 5.23972C1.89005 5.08935 2.08165 4.98694 2.29023 4.94545C2.49881 4.90396 2.71501 4.92525 2.91149 5.00664C3.10797 5.08802 3.27591 5.22584 3.39406 5.40267C3.51221 5.57949 3.57527 5.78739 3.57527 6.00005C3.57496 6.28514 3.46157 6.55845 3.25998 6.76003C3.0584 6.96162 2.78509 7.07501 2.50001 7.07532ZM2.50001 3.20436C2.79774 3.20436 3.08879 3.11607 3.33635 2.95065C3.58391 2.78524 3.77685 2.55013 3.89079 2.27506C4.00473 1.99999 4.03454 1.69731 3.97646 1.4053C3.91837 1.11328 3.775 0.845049 3.56447 0.634519C3.35394 0.423988 3.0857 0.280615 2.79369 0.22253C2.50168 0.164444 2.19899 0.194256 1.92392 0.308194C1.64885 0.422132 1.41374 0.61508 1.24833 0.862638C1.08292 1.1102 0.99463 1.40124 0.99463 1.69898C0.995077 2.09809 1.15382 2.48073 1.43604 2.76295C1.71825 3.04516 2.10089 3.20391 2.50001 3.20436ZM2.50001 0.623712C2.71267 0.623712 2.92057 0.686775 3.09739 0.804927C3.27422 0.923079 3.41204 1.09101 3.49342 1.28749C3.57481 1.48397 3.5961 1.70017 3.55461 1.90875C3.51312 2.11734 3.41071 2.30893 3.26034 2.45931C3.10996 2.60969 2.91836 2.7121 2.70978 2.75359C2.5012 2.79508 2.285 2.77378 2.08852 2.6924C1.89204 2.61101 1.7241 2.47319 1.60595 2.29637C1.4878 2.11954 1.42474 1.91165 1.42474 1.69898C1.42505 1.4139 1.53844 1.14058 1.74003 0.939001C1.94161 0.737418 2.21492 0.624029 2.50001 0.623712ZM2.50001 8.79575C2.20227 8.79575 1.91122 8.88404 1.66366 9.04945C1.41611 9.21487 1.22316 9.44997 1.10922 9.72505C0.995281 10.0001 0.96547 10.3028 1.02355 10.5948C1.08164 10.8868 1.22501 11.1551 1.43554 11.3656C1.64607 11.5761 1.91431 11.7195 2.20632 11.7776C2.49834 11.8357 2.80102 11.8059 3.07609 11.6919C3.35116 11.578 3.58627 11.385 3.75168 11.1375C3.91709 10.8899 4.00538 10.5989 4.00538 10.3011C4.00493 9.90202 3.84619 9.51938 3.56397 9.23716C3.28176 8.95495 2.89912 8.7962 2.50001 8.79575ZM2.50001 11.3764C2.28734 11.3764 2.07945 11.3133 1.90262 11.1952C1.72579 11.077 1.58797 10.9091 1.50659 10.7126C1.4252 10.5161 1.40391 10.2999 1.4454 10.0914C1.48689 9.88277 1.5893 9.69118 1.73968 9.5408C1.89005 9.39042 2.08165 9.28801 2.29023 9.24652C2.49881 9.20503 2.71501 9.22633 2.91149 9.30771C3.10797 9.38909 3.27591 9.52691 3.39406 9.70374C3.51221 9.88057 3.57527 10.0885 3.57527 10.3011C3.57496 10.5862 3.46157 10.8595 3.25998 11.0611C3.0584 11.2627 2.78509 11.3761 2.50001 11.3764Z"
                    fill="black"
                  ></path>
                </svg>
              </div>
              <svg
                width="3"
                height="3"
                viewBox="0 0 3 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[1.15px] top-[1.56px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="1.50003" cy="1.625" r="1.25" fill="black"></circle>
              </svg>
              <svg
                width="3"
                height="4"
                viewBox="0 0 3 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[1.15px] top-[5.94px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="1.50003" cy="2" r="1.25" fill="black"></circle>
              </svg>
              <svg
                width="3"
                height="3"
                viewBox="0 0 3 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[1.15px] top-[10.31px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="1.50003" cy="1.375" r="1.25" fill="black"></circle>
              </svg>
            </div>
          </div>
        </div>
        <div className="w-[270px] h-px absolute left-px top-[29px] overflow-hidden bg-[#13100f]/[0.15]"></div>
        <div className="w-[100px] h-8 absolute left-px top-[30px]">
          <p className="w-36 absolute left-2 top-2 text-xs font-light text-left text-black">
            Owner: Tourism
          </p>
        </div>
      </div>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 absolute left-[779px] top-52"
        preserveAspectRatio="none"
      >
        <circle cx="10" cy="10" r="10" fill="#F27A75"></circle>
        <path
          d="M10 0.855469C8.21997 0.855469 6.47991 1.38331 4.99987 2.37224C3.51983 3.36117 2.36628 4.76678 1.68509 6.41132C1.0039 8.05585 0.82567 9.86545 1.17294 11.6113C1.5202 13.3571 2.37737 14.9608 3.63604 16.2194C4.89471 17.4781 6.49836 18.3353 8.24419 18.6825C9.99002 19.0298 11.7996 18.8516 13.4442 18.1704C15.0887 17.4892 16.4943 16.3356 17.4832 14.8556C18.4722 13.3756 19 11.6355 19 9.85547C18.9973 7.46935 18.0482 5.18172 16.361 3.49448C14.6737 1.80724 12.3861 0.858161 10 0.855469V0.855469ZM10 18.1355C8.36237 18.1355 6.76152 17.6499 5.39988 16.74C4.03824 15.8302 2.97697 14.5371 2.35028 13.0241C1.72359 11.5111 1.55962 9.84628 1.8791 8.24012C2.19859 6.63396 2.98718 5.1586 4.14516 4.00062C5.30314 2.84265 6.77849 2.05405 8.38465 1.73457C9.99082 1.41508 11.6556 1.57905 13.1686 2.20575C14.6816 2.83244 15.9748 3.89371 16.8846 5.25535C17.7944 6.61698 18.28 8.21784 18.28 9.85547C18.2775 12.0507 17.4044 14.1553 15.8521 15.7076C14.2998 17.2598 12.1952 18.133 10 18.1355ZM9.64 10.5755V5.53547C9.64 5.43999 9.67793 5.34842 9.74544 5.28091C9.81296 5.2134 9.90452 5.17547 10 5.17547C10.0955 5.17547 10.187 5.2134 10.2546 5.28091C10.3221 5.34842 10.36 5.43999 10.36 5.53547V10.5755C10.36 10.6709 10.3221 10.7625 10.2546 10.83C10.187 10.8975 10.0955 10.9355 10 10.9355C9.90452 10.9355 9.81296 10.8975 9.74544 10.83C9.67793 10.7625 9.64 10.6709 9.64 10.5755ZM10.72 13.8155C10.72 13.9579 10.6778 14.0971 10.5987 14.2155C10.5195 14.3339 10.4071 14.4262 10.2755 14.4807C10.144 14.5352 9.9992 14.5494 9.85954 14.5216C9.71987 14.4939 9.59158 14.4253 9.49089 14.3246C9.39019 14.2239 9.32162 14.0956 9.29384 13.9559C9.26606 13.8163 9.28031 13.6715 9.33481 13.5399C9.3893 13.4084 9.48159 13.2959 9.59999 13.2168C9.71839 13.1377 9.8576 13.0955 10 13.0955C10.1909 13.0957 10.3739 13.1716 10.5089 13.3066C10.6439 13.4416 10.7198 13.6246 10.72 13.8155V13.8155Z"
          fill="white"
          stroke="white"
          strokeWidth="0.242778"
        ></path>
      </svg>
      <div className="w-[272px] h-[63px] absolute left-[518px] top-[315px] bg-white border border-[#dcdbdb]">
        <div className="w-[270px] h-7 absolute left-px top-px bg-[#e6f2ff]">
          <p className="w-[229px] absolute left-2 top-1.5 text-xs text-left text-black">
            Individual learner records
          </p>
          <div className="flex flex-col justify-center items-center w-[15px] absolute left-[247px] top-[6.5px] gap-[3.124999761581421px]">
            <div className="flex-grow-0 flex-shrink-0 w-[5.43px] h-[15px] relative">

              <div className="flex flex-col justify-center items-center absolute left-0 top-0 gap-[2.4193546772003174px] px-[1.2096773386001587px] py-[1.6935482025146484px]">
                <svg
                  width="5"
                  height="12"
                  viewBox="0 0 5 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M2.50001 4.49627C2.20227 4.49627 1.91122 4.58455 1.66366 4.74997C1.41611 4.91538 1.22316 5.15049 1.10922 5.42556C0.995281 5.70063 0.96547 6.00331 1.02355 6.29533C1.08164 6.58734 1.22501 6.85557 1.43554 7.0661C1.64607 7.27663 1.91431 7.42001 2.20632 7.47809C2.49834 7.53618 2.80102 7.50637 3.07609 7.39243C3.35116 7.27849 3.58627 7.08554 3.75168 6.83798C3.91709 6.59043 4.00538 6.29938 4.00538 6.00164C4.00493 5.60253 3.84619 5.21989 3.56397 4.93767C3.28176 4.65546 2.89912 4.49671 2.50001 4.49627ZM2.50001 7.07691C2.28734 7.07691 2.07945 7.01385 1.90262 6.89569C1.72579 6.77754 1.58797 6.60961 1.50659 6.41313C1.4252 6.21665 1.40391 6.00045 1.4454 5.79187C1.48689 5.58329 1.5893 5.39169 1.73968 5.24131C1.89005 5.09093 2.08165 4.98852 2.29023 4.94703C2.49881 4.90554 2.71501 4.92684 2.91149 5.00822C3.10797 5.08961 3.27591 5.22743 3.39406 5.40425C3.51221 5.58108 3.57527 5.78897 3.57527 6.00164C3.57496 6.28672 3.46157 6.56004 3.25998 6.76162C3.0584 6.9632 2.78509 7.07659 2.50001 7.07691ZM2.50001 3.20594C2.79774 3.20594 3.08879 3.11765 3.33635 2.95224C3.58391 2.78683 3.77685 2.55172 3.89079 2.27665C4.00473 2.00158 4.03454 1.6989 3.97646 1.40688C3.91837 1.11487 3.775 0.846636 3.56447 0.636106C3.35394 0.425575 3.0857 0.282202 2.79369 0.224116C2.50168 0.166031 2.19899 0.195843 1.92392 0.309781C1.64885 0.423719 1.41374 0.616667 1.24833 0.864225C1.08292 1.11178 0.99463 1.40283 0.99463 1.70057C0.995077 2.09968 1.15382 2.48232 1.43604 2.76453C1.71825 3.04675 2.10089 3.2055 2.50001 3.20594ZM2.50001 0.625299C2.71267 0.625299 2.92057 0.688362 3.09739 0.806514C3.27422 0.924666 3.41204 1.0926 3.49342 1.28908C3.57481 1.48556 3.5961 1.70176 3.55461 1.91034C3.51312 2.11892 3.41071 2.31052 3.26034 2.4609C3.10996 2.61128 2.91836 2.71369 2.70978 2.75517C2.5012 2.79666 2.285 2.77537 2.08852 2.69399C1.89204 2.6126 1.7241 2.47478 1.60595 2.29795C1.4878 2.12113 1.42474 1.91324 1.42474 1.70057C1.42505 1.41549 1.53844 1.14217 1.74003 0.940588C1.94161 0.739004 2.21492 0.625616 2.50001 0.625299ZM2.50001 8.79734C2.20227 8.79734 1.91122 8.88563 1.66366 9.05104C1.41611 9.21645 1.22316 9.45156 1.10922 9.72663C0.995281 10.0017 0.96547 10.3044 1.02355 10.5964C1.08164 10.8884 1.22501 11.1566 1.43554 11.3672C1.64607 11.5777 1.91431 11.7211 2.20632 11.7792C2.49834 11.8373 2.80102 11.8074 3.07609 11.6935C3.35116 11.5796 3.58627 11.3866 3.75168 11.1391C3.91709 10.8915 4.00538 10.6005 4.00538 10.3027C4.00493 9.9036 3.84619 9.52096 3.56397 9.23875C3.28176 8.95653 2.89912 8.79779 2.50001 8.79734ZM2.50001 11.378C2.28734 11.378 2.07945 11.3149 1.90262 11.1968C1.72579 11.0786 1.58797 10.9107 1.50659 10.7142C1.4252 10.5177 1.40391 10.3015 1.4454 10.0929C1.48689 9.88436 1.5893 9.69276 1.73968 9.54239C1.89005 9.39201 2.08165 9.2896 2.29023 9.24811C2.49881 9.20662 2.71501 9.22791 2.91149 9.3093C3.10797 9.39068 3.27591 9.5285 3.39406 9.70533C3.51221 9.88216 3.57527 10.09 3.57527 10.3027C3.57496 10.5878 3.46157 10.8611 3.25998 11.0627C3.0584 11.2643 2.78509 11.3777 2.50001 11.378Z"
                    fill="black"
                  ></path>
                </svg>
              </div>
              <svg
                width="3"
                height="3"
                viewBox="0 0 3 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[1.15px] top-[1.56px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle
                  cx="1.50003"
                  cy="1.62671"
                  r="1.25"
                  fill="black"
                ></circle>
              </svg>
              <svg
                width="3"
                height="4"
                viewBox="0 0 3 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[1.15px] top-[5.94px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle
                  cx="1.50003"
                  cy="2.00171"
                  r="1.25"
                  fill="black"
                ></circle>
              </svg>
              <svg
                width="3"
                height="3"
                viewBox="0 0 3 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[1.15px] top-[10.31px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle
                  cx="1.50003"
                  cy="1.37671"
                  r="1.25"
                  fill="black"
                ></circle>
              </svg>
            </div>
          </div>
        </div>
        <div className="w-[270px] h-px absolute left-px top-[29px] overflow-hidden bg-[#13100f]/[0.15]"></div>
        <div className="w-[93px] h-8 absolute left-px top-[30px]">
          <p className="w-[238px] absolute left-2 top-2 text-xs font-light text-left text-black">
            Owner: Media
          </p>
        </div>
      </div>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 absolute left-[779px] top-[307px]"
        preserveAspectRatio="none"
      >
        <circle cx="10" cy="10" r="10" fill="#4EBF8D"></circle>
        <path
          d="M9.99999 7.75003C9.55498 7.75003 9.11997 7.88199 8.74996 8.12922C8.37995 8.37646 8.09156 8.72786 7.92126 9.13899C7.75096 9.55013 7.7064 10.0025 7.79322 10.439C7.88004 10.8754 8.09433 11.2764 8.409 11.591C8.72367 11.9057 9.12458 12.12 9.56104 12.2068C9.99749 12.2936 10.4499 12.2491 10.861 12.0788C11.2722 11.9085 11.6236 11.6201 11.8708 11.2501C12.118 10.8801 12.25 10.445 12.25 10C12.2493 9.4035 12.012 8.83159 11.5902 8.40978C11.1684 7.98797 10.5965 7.7507 9.99999 7.75003ZM9.99999 11.75C9.65387 11.75 9.31553 11.6474 9.02774 11.4551C8.73995 11.2628 8.51565 10.9895 8.3832 10.6697C8.25075 10.35 8.21609 9.99809 8.28361 9.65862C8.35114 9.31915 8.51781 9.00733 8.76255 8.76259C9.00729 8.51785 9.31911 8.35118 9.65858 8.28365C9.99805 8.21613 10.3499 8.25079 10.6697 8.38324C10.9895 8.51569 11.2628 8.74 11.4551 9.02778C11.6474 9.31557 11.75 9.65391 11.75 10C11.7495 10.464 11.5649 10.9088 11.2369 11.2369C10.9088 11.565 10.464 11.7495 9.99999 11.75ZM6.08385 8.34582C5.75433 9.12487 5.66499 9.98458 5.82728 10.8147C5.98957 11.6449 6.39609 12.4077 6.99474 13.0052C7.01795 13.0285 7.03637 13.056 7.04893 13.0863C7.0615 13.1167 7.06796 13.1492 7.06796 13.182C7.06797 13.2148 7.0615 13.2473 7.04894 13.2777C7.03638 13.308 7.01797 13.3356 6.99475 13.3588C6.97154 13.382 6.94398 13.4004 6.91366 13.413C6.88333 13.4255 6.85082 13.432 6.81799 13.432C6.78516 13.432 6.75266 13.4255 6.72233 13.413C6.692 13.4004 6.66444 13.382 6.64122 13.3588C6.1997 12.918 5.84943 12.3944 5.61044 11.8181C5.37145 11.2417 5.24843 10.6239 5.24843 10C5.24843 9.37611 5.37145 8.75832 5.61044 8.18198C5.84943 7.60565 6.1997 7.0821 6.64122 6.64127C6.68811 6.59439 6.75169 6.56805 6.81799 6.56805C6.88429 6.56806 6.94787 6.5944 6.99475 6.64128C7.04163 6.68816 7.06797 6.75175 7.06796 6.81805C7.06796 6.88435 7.04162 6.94793 6.99474 6.99481C6.60657 7.38198 6.29722 7.8408 6.08385 8.34582ZM14.75 10C14.7507 10.6239 14.6282 11.2418 14.3895 11.8182C14.1507 12.3946 13.8004 12.9182 13.3588 13.3588C13.3355 13.382 13.308 13.4004 13.2777 13.413C13.2473 13.4255 13.2148 13.432 13.182 13.432C13.1492 13.432 13.1167 13.4255 13.0863 13.413C13.056 13.4004 13.0284 13.382 13.0052 13.3588C12.982 13.3356 12.9636 13.308 12.951 13.2777C12.9385 13.2473 12.932 13.2148 12.932 13.182C12.932 13.1492 12.9385 13.1167 12.951 13.0863C12.9636 13.056 12.982 13.0285 13.0052 13.0052C13.4003 12.6108 13.7138 12.1424 13.9276 11.6267C14.1415 11.1111 14.2516 10.5583 14.2516 10C14.2516 9.44177 14.1415 8.88899 13.9276 8.37332C13.7138 7.85765 13.4003 7.38921 13.0052 6.99481C12.982 6.9716 12.9636 6.94404 12.951 6.91371C12.9385 6.88338 12.932 6.85088 12.932 6.81805C12.932 6.78522 12.9385 6.75271 12.951 6.72238C12.9636 6.69205 12.982 6.66449 13.0052 6.64128C13.0284 6.61807 13.056 6.59965 13.0863 6.58709C13.1167 6.57452 13.1492 6.56806 13.182 6.56805C13.2148 6.56805 13.2473 6.57452 13.2777 6.58708C13.308 6.59964 13.3355 6.61805 13.3588 6.64127C13.8004 7.08189 14.1507 7.60545 14.3895 8.18185C14.6282 8.75825 14.7507 9.37614 14.75 10ZM5.22698 14.773C5.25019 14.7962 5.26861 14.8238 5.28117 14.8541C5.29374 14.8844 5.3002 14.9169 5.3002 14.9498C5.30021 14.9826 5.29374 15.0151 5.28118 15.0454C5.26862 15.0758 5.25021 15.1033 5.22699 15.1265C5.20378 15.1498 5.17622 15.1682 5.1459 15.1807C5.11557 15.1933 5.08306 15.1998 5.05023 15.1998C5.0174 15.1998 4.9849 15.1933 4.95457 15.1807C4.92424 15.1682 4.89668 15.1498 4.87346 15.1266C4.19954 14.4537 3.66489 13.6546 3.30011 12.7749C2.93532 11.8953 2.74756 10.9523 2.74756 10C2.74756 9.04773 2.93532 8.10477 3.30011 7.22511C3.66489 6.34545 4.19954 5.54634 4.87346 4.8735C4.92035 4.82663 4.98393 4.80029 5.05023 4.80029C5.11653 4.8003 5.18011 4.82664 5.22699 4.87352C5.27387 4.9204 5.30021 4.98399 5.3002 5.05029C5.3002 5.11659 5.27386 5.18017 5.22698 5.22705C4.59948 5.85345 4.10166 6.59744 3.762 7.41645C3.42234 8.23545 3.24751 9.11339 3.24751 10C3.24751 10.8867 3.42234 11.7646 3.762 12.5836C4.10166 13.4026 4.59948 14.1466 5.22698 14.773ZM17.25 10C17.2512 10.9523 17.0642 11.8954 16.6998 12.7752C16.3353 13.6549 15.8007 14.454 15.1265 15.1266C15.0796 15.1734 15.016 15.1998 14.9497 15.1998C14.8834 15.1998 14.8199 15.1734 14.773 15.1265C14.7261 15.0797 14.6998 15.0161 14.6998 14.9498C14.6998 14.8835 14.7261 14.8199 14.773 14.773C15.4005 14.1466 15.8983 13.4026 16.238 12.5836C16.5776 11.7646 16.7525 10.8867 16.7525 10C16.7525 9.11339 16.5776 8.23545 16.238 7.41645C15.8983 6.59744 15.4005 5.85345 14.773 5.22705C14.7261 5.18017 14.6998 5.11659 14.6998 5.05029C14.6998 4.98399 14.7261 4.9204 14.773 4.87352C14.8199 4.82664 14.8834 4.8003 14.9497 4.80029C15.016 4.80029 15.0796 4.82663 15.1265 4.8735C15.8007 5.54603 16.3353 6.34513 16.6997 7.2249C17.0642 8.10467 17.2512 9.04777 17.25 10Z"
          fill="white"
          stroke="white"
          strokeWidth="0.2"
        ></path>
      </svg>
      <div className="w-[272px] h-[63px] absolute left-[518px] top-[423px] bg-white border border-[#dcdbdb]" onMouseEnter={() => setIsDcOneHover(true)} onMouseLeave={() => setIsDcOneHover(false)}>
        <div className="w-[270px] h-7 absolute left-px top-px bg-[#e6f2ff]">
          <p className="w-[229px] absolute left-2 top-1.5 text-xs text-left text-black">
            Individual learner records
          </p>
          <div className="flex flex-col justify-center items-center w-[15px] absolute left-[247px] top-[6.5px] gap-[3.124999761581421px]">
            <div className="flex-grow-0 flex-shrink-0 w-[5.43px] h-[15px] relative">
              {isDcOneHover && (
                <DcCsvOne />
              )}
              <div className="flex flex-col justify-center items-center absolute left-0 top-0 gap-[2.4193546772003174px] px-[1.2096773386001587px] py-[1.6935482025146484px]">
                <svg
                  width="5"
                  height="12"
                  viewBox="0 0 5 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M2.50001 4.49627C2.20227 4.49627 1.91122 4.58455 1.66366 4.74997C1.41611 4.91538 1.22316 5.15049 1.10922 5.42556C0.995281 5.70063 0.96547 6.00331 1.02355 6.29533C1.08164 6.58734 1.22501 6.85557 1.43554 7.0661C1.64607 7.27663 1.91431 7.42001 2.20632 7.47809C2.49834 7.53618 2.80102 7.50637 3.07609 7.39243C3.35116 7.27849 3.58627 7.08554 3.75168 6.83798C3.91709 6.59043 4.00538 6.29938 4.00538 6.00164C4.00493 5.60253 3.84619 5.21989 3.56397 4.93767C3.28176 4.65546 2.89912 4.49671 2.50001 4.49627ZM2.50001 7.07691C2.28734 7.07691 2.07945 7.01385 1.90262 6.89569C1.72579 6.77754 1.58797 6.60961 1.50659 6.41313C1.4252 6.21665 1.40391 6.00045 1.4454 5.79187C1.48689 5.58329 1.5893 5.39169 1.73968 5.24131C1.89005 5.09093 2.08165 4.98852 2.29023 4.94703C2.49881 4.90554 2.71501 4.92684 2.91149 5.00822C3.10797 5.08961 3.27591 5.22743 3.39406 5.40425C3.51221 5.58108 3.57527 5.78897 3.57527 6.00164C3.57496 6.28672 3.46157 6.56004 3.25998 6.76162C3.0584 6.9632 2.78509 7.07659 2.50001 7.07691ZM2.50001 3.20594C2.79774 3.20594 3.08879 3.11765 3.33635 2.95224C3.58391 2.78683 3.77685 2.55172 3.89079 2.27665C4.00473 2.00158 4.03454 1.6989 3.97646 1.40688C3.91837 1.11487 3.775 0.846636 3.56447 0.636106C3.35394 0.425575 3.0857 0.282202 2.79369 0.224116C2.50168 0.166031 2.19899 0.195843 1.92392 0.309781C1.64885 0.423719 1.41374 0.616667 1.24833 0.864225C1.08292 1.11178 0.99463 1.40283 0.99463 1.70057C0.995077 2.09968 1.15382 2.48232 1.43604 2.76453C1.71825 3.04675 2.10089 3.2055 2.50001 3.20594ZM2.50001 0.625299C2.71267 0.625299 2.92057 0.688362 3.09739 0.806514C3.27422 0.924666 3.41204 1.0926 3.49342 1.28908C3.57481 1.48556 3.5961 1.70176 3.55461 1.91034C3.51312 2.11892 3.41071 2.31052 3.26034 2.4609C3.10996 2.61128 2.91836 2.71369 2.70978 2.75517C2.5012 2.79666 2.285 2.77537 2.08852 2.69399C1.89204 2.6126 1.7241 2.47478 1.60595 2.29795C1.4878 2.12113 1.42474 1.91324 1.42474 1.70057C1.42505 1.41549 1.53844 1.14217 1.74003 0.940588C1.94161 0.739004 2.21492 0.625616 2.50001 0.625299ZM2.50001 8.79734C2.20227 8.79734 1.91122 8.88563 1.66366 9.05104C1.41611 9.21645 1.22316 9.45156 1.10922 9.72663C0.995281 10.0017 0.96547 10.3044 1.02355 10.5964C1.08164 10.8884 1.22501 11.1566 1.43554 11.3672C1.64607 11.5777 1.91431 11.7211 2.20632 11.7792C2.49834 11.8373 2.80102 11.8074 3.07609 11.6935C3.35116 11.5796 3.58627 11.3866 3.75168 11.1391C3.91709 10.8915 4.00538 10.6005 4.00538 10.3027C4.00493 9.9036 3.84619 9.52096 3.56397 9.23875C3.28176 8.95653 2.89912 8.79779 2.50001 8.79734ZM2.50001 11.378C2.28734 11.378 2.07945 11.3149 1.90262 11.1968C1.72579 11.0786 1.58797 10.9107 1.50659 10.7142C1.4252 10.5177 1.40391 10.3015 1.4454 10.0929C1.48689 9.88436 1.5893 9.69276 1.73968 9.54239C1.89005 9.39201 2.08165 9.2896 2.29023 9.24811C2.49881 9.20662 2.71501 9.22791 2.91149 9.3093C3.10797 9.39068 3.27591 9.5285 3.39406 9.70533C3.51221 9.88216 3.57527 10.09 3.57527 10.3027C3.57496 10.5878 3.46157 10.8611 3.25998 11.0627C3.0584 11.2643 2.78509 11.3777 2.50001 11.378Z"
                    fill="black"
                  ></path>
                </svg>
              </div>
              <svg
                width="3"
                height="3"
                viewBox="0 0 3 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[1.15px] top-[1.56px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle
                  cx="1.50003"
                  cy="1.62671"
                  r="1.25"
                  fill="black"
                ></circle>
              </svg>
              <svg
                width="3"
                height="4"
                viewBox="0 0 3 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[1.15px] top-[5.94px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle
                  cx="1.50003"
                  cy="2.00171"
                  r="1.25"
                  fill="black"
                ></circle>
              </svg>
              <svg
                width="3"
                height="3"
                viewBox="0 0 3 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[1.15px] top-[10.31px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle
                  cx="1.50003"
                  cy="1.37671"
                  r="1.25"
                  fill="black"
                ></circle>
              </svg>
            </div>
          </div>
        </div>
        <div className="w-[270px] h-px absolute left-px top-[29px] overflow-hidden bg-[#13100f]/[0.15]"></div>
        <div className="w-[183px] h-8 absolute left-px top-[30px]">
          <p className="w-[237px] absolute left-2 top-2 text-xs font-light text-left text-black">
            Owner: Design &#x26; Construction
          </p>
        </div>
      </div>
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 absolute left-[779px] top-[415px]"
        preserveAspectRatio="none"
      >
        <circle cx="10.0023" cy="10" r="10" fill="#4EBF8D"></circle>
        <g clipPath="url(#clip0_562_472862)">
          <path
            d="M10.0022 7.75003C9.55724 7.75003 9.12222 7.88199 8.75221 8.12922C8.3822 8.37646 8.09382 8.72786 7.92352 9.13899C7.75322 9.55013 7.70866 10.0025 7.79548 10.439C7.8823 10.8754 8.09659 11.2764 8.41126 11.591C8.72593 11.9057 9.12684 12.12 9.56329 12.2068C9.99975 12.2936 10.4522 12.2491 10.8633 12.0788C11.2744 11.9085 11.6258 11.6201 11.8731 11.2501C12.1203 10.8801 12.2522 10.445 12.2522 10C12.2516 9.4035 12.0143 8.83159 11.5925 8.40978C11.1707 7.98797 10.5988 7.7507 10.0022 7.75003ZM10.0022 11.75C9.65613 11.75 9.31779 11.6474 9.03 11.4551C8.74221 11.2628 8.51791 10.9895 8.38546 10.6697C8.253 10.35 8.21835 9.99809 8.28587 9.65862C8.3534 9.31915 8.52007 9.00733 8.76481 8.76259C9.00955 8.51785 9.32137 8.35118 9.66084 8.28365C10.0003 8.21613 10.3522 8.25079 10.6719 8.38324C10.9917 8.51569 11.265 8.74 11.4573 9.02778C11.6496 9.31557 11.7522 9.65391 11.7522 10C11.7517 10.464 11.5672 10.9088 11.2391 11.2369C10.911 11.565 10.4662 11.7495 10.0022 11.75ZM6.08611 8.34582C5.75659 9.12487 5.66725 9.98458 5.82954 10.8147C5.99183 11.6449 6.39835 12.4077 6.997 13.0052C7.02021 13.0285 7.03863 13.056 7.05119 13.0863C7.06375 13.1167 7.07022 13.1492 7.07022 13.182C7.07022 13.2148 7.06376 13.2473 7.0512 13.2777C7.03864 13.308 7.02022 13.3356 6.99701 13.3588C6.9738 13.382 6.94624 13.4004 6.91591 13.413C6.88558 13.4255 6.85308 13.432 6.82025 13.432C6.78742 13.432 6.75491 13.4255 6.72458 13.413C6.69425 13.4004 6.6667 13.382 6.64348 13.3588C6.20196 12.918 5.85168 12.3944 5.6127 11.8181C5.37371 11.2417 5.25069 10.6239 5.25069 10C5.25069 9.37611 5.37371 8.75832 5.6127 8.18198C5.85168 7.60565 6.20196 7.0821 6.64348 6.64127C6.69036 6.59439 6.75395 6.56805 6.82025 6.56805C6.88655 6.56806 6.95013 6.5944 6.99701 6.64128C7.04389 6.68816 7.07023 6.75175 7.07022 6.81805C7.07022 6.88435 7.04388 6.94793 6.997 6.99481C6.60883 7.38198 6.29948 7.8408 6.08611 8.34582ZM14.7522 10C14.753 10.6239 14.6305 11.2418 14.3917 11.8182C14.153 12.3946 13.8027 12.9182 13.361 13.3588C13.3378 13.382 13.3102 13.4004 13.2799 13.413C13.2496 13.4255 13.2171 13.432 13.1842 13.432C13.1514 13.432 13.1189 13.4255 13.0886 13.413C13.0583 13.4004 13.0307 13.382 13.0075 13.3588C12.9843 13.3356 12.9659 13.308 12.9533 13.2777C12.9407 13.2473 12.9343 13.2148 12.9343 13.182C12.9343 13.1492 12.9407 13.1167 12.9533 13.0863C12.9659 13.056 12.9843 13.0285 13.0075 13.0052C13.4026 12.6108 13.716 12.1424 13.9299 11.6267C14.1438 11.1111 14.2538 10.5583 14.2538 10C14.2538 9.44177 14.1438 8.88899 13.9299 8.37332C13.716 7.85765 13.4026 7.38921 13.0075 6.99481C12.9843 6.9716 12.9659 6.94404 12.9533 6.91371C12.9407 6.88338 12.9343 6.85088 12.9343 6.81805C12.9343 6.78522 12.9407 6.75271 12.9533 6.72238C12.9659 6.69205 12.9843 6.66449 13.0075 6.64128C13.0307 6.61807 13.0583 6.59965 13.0886 6.58709C13.1189 6.57452 13.1514 6.56806 13.1842 6.56805C13.2171 6.56805 13.2496 6.57452 13.2799 6.58708C13.3102 6.59964 13.3378 6.61805 13.361 6.64127C13.8027 7.08189 14.153 7.60545 14.3917 8.18185C14.6305 8.75825 14.753 9.37614 14.7522 10ZM5.22924 14.773C5.25245 14.7962 5.27087 14.8238 5.28343 14.8541C5.29599 14.8844 5.30246 14.9169 5.30246 14.9498C5.30246 14.9826 5.296 15.0151 5.28344 15.0454C5.27088 15.0758 5.25246 15.1033 5.22925 15.1265C5.20604 15.1498 5.17848 15.1682 5.14815 15.1807C5.11782 15.1933 5.08532 15.1998 5.05249 15.1998C5.01966 15.1998 4.98715 15.1933 4.95682 15.1807C4.92649 15.1682 4.89894 15.1498 4.87572 15.1266C4.2018 14.4537 3.66715 13.6546 3.30237 12.7749C2.93758 11.8953 2.74982 10.9523 2.74982 10C2.74982 9.04773 2.93758 8.10477 3.30237 7.22511C3.66715 6.34545 4.2018 5.54634 4.87572 4.8735C4.9226 4.82663 4.98619 4.80029 5.05249 4.80029C5.11879 4.8003 5.18237 4.82664 5.22925 4.87352C5.27613 4.9204 5.30247 4.98399 5.30246 5.05029C5.30246 5.11659 5.27612 5.18017 5.22924 5.22705C4.60174 5.85345 4.10392 6.59744 3.76426 7.41645C3.4246 8.23545 3.24977 9.11339 3.24977 10C3.24977 10.8867 3.4246 11.7646 3.76426 12.5836C4.10392 13.4026 4.60174 14.1466 5.22924 14.773ZM17.2522 10C17.2534 10.9523 17.0664 11.8954 16.702 12.7752C16.3376 13.6549 15.803 14.454 15.1288 15.1266C15.0819 15.1734 15.0183 15.1998 14.952 15.1998C14.8857 15.1998 14.8221 15.1734 14.7752 15.1265C14.7284 15.0797 14.702 15.0161 14.702 14.9498C14.702 14.8835 14.7284 14.8199 14.7753 14.773C15.4028 14.1466 15.9006 13.4026 16.2402 12.5836C16.5799 11.7646 16.7547 10.8867 16.7547 10C16.7547 9.11339 16.5799 8.23545 16.2402 7.41645C15.9006 6.59744 15.4028 5.85345 14.7753 5.22705C14.7284 5.18017 14.702 5.11659 14.702 5.05029C14.702 4.98399 14.7284 4.9204 14.7752 4.87352C14.8221 4.82664 14.8857 4.8003 14.952 4.80029C15.0183 4.80029 15.0819 4.82663 15.1288 4.8735C15.8029 5.54603 16.3376 6.34513 16.702 7.2249C17.0664 8.10467 17.2534 9.04777 17.2522 10Z"
            fill="white"
            stroke="white"
            strokeWidth="0.2"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_562_472862">
            <rect
              width="16"
              height="16"
              fill="white"
              transform="translate(2.00226 2)"
            ></rect>
          </clipPath>
        </defs>
      </svg>
      <div className="w-[178px] h-[30px] absolute left-[1189px] top-[328px] bg-white border border-[#dcdbdb]">
        <div className="w-44 h-7 absolute left-px top-px bg-[#0076a8]">
          <div className="flex flex-col justify-center items-center absolute left-2 top-[6.66px] gap-1">
            <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[3.124999761581421px] px-[1.5624998807907104px] py-[2.187499761581421px]">
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M12.5156 10.6875H11.8125V1.07812C11.8125 1.01597 11.7878 0.956353 11.7438 0.9124C11.6999 0.868447 11.6403 0.843753 11.5781 0.84375H8.29687C8.23472 0.843753 8.1751 0.868447 8.13115 0.9124C8.0872 0.956353 8.0625 1.01597 8.0625 1.07812V3.65625H5.01562C4.95347 3.65625 4.89385 3.68095 4.8499 3.7249C4.80595 3.76885 4.78125 3.82847 4.78125 3.89062V6.46875H1.73437C1.67222 6.46875 1.6126 6.49345 1.56865 6.5374C1.5247 6.58135 1.5 6.64097 1.5 6.70312V10.6875H0.796875C0.734715 10.6875 0.675101 10.7122 0.631147 10.7561C0.587193 10.8001 0.5625 10.8597 0.5625 10.9219C0.5625 10.984 0.587193 11.0436 0.631147 11.0876C0.675101 11.1316 0.734715 11.1562 0.796875 11.1562H12.5156C12.5778 11.1562 12.6374 11.1316 12.6814 11.0876C12.7253 11.0436 12.75 10.984 12.75 10.9219C12.75 10.8597 12.7253 10.8001 12.6814 10.7561C12.6374 10.7122 12.5778 10.6875 12.5156 10.6875ZM5.25 4.125H8.0625V10.6875H5.25V4.125ZM1.96875 6.9375H4.78125V10.6875H1.96875V6.9375ZM8.53125 10.6875V1.3125H11.3437V10.6875H8.53125Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="0.3"
                ></path>
              </svg>
            </div>
          </div>
          <p className="w-[109.69px] absolute left-[33.31px] top-1.5 text-xs text-left text-white">
            Learner dashboard
          </p>
          <div className="flex flex-col justify-center items-center w-[15px] absolute left-[153px] top-[6.5px] gap-[3.124999761581421px]">
            <div className="flex-grow-0 flex-shrink-0 w-[5.43px] h-[15px] relative">
              <div className="flex flex-col justify-center items-center absolute left-0 top-0 gap-[2.4193546772003174px] px-[1.2096773386001587px] py-[1.6935482025146484px]">
                <svg
                  width="5"
                  height="12"
                  viewBox="0 0 5 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M2.50001 4.49456C2.20227 4.49456 1.91122 4.58285 1.66366 4.74826C1.41611 4.91367 1.22316 5.14878 1.10922 5.42385C0.995281 5.69892 0.96547 6.0016 1.02355 6.29362C1.08164 6.58563 1.22501 6.85386 1.43554 7.06439C1.64607 7.27492 1.91431 7.4183 2.20632 7.47638C2.49834 7.53447 2.80102 7.50466 3.07609 7.39072C3.35116 7.27678 3.58627 7.08383 3.75168 6.83627C3.91709 6.58872 4.00538 6.29767 4.00538 5.99993C4.00493 5.60082 3.84619 5.21818 3.56397 4.93597C3.28176 4.65375 2.89912 4.495 2.50001 4.49456ZM2.50001 7.0752C2.28734 7.0752 2.07945 7.01214 1.90262 6.89399C1.72579 6.77583 1.58797 6.6079 1.50659 6.41142C1.4252 6.21494 1.40391 5.99874 1.4454 5.79016C1.48689 5.58158 1.5893 5.38998 1.73968 5.2396C1.89005 5.08922 2.08165 4.98681 2.29023 4.94532C2.49881 4.90384 2.71501 4.92513 2.91149 5.00651C3.10797 5.0879 3.27591 5.22572 3.39406 5.40255C3.51221 5.57937 3.57527 5.78726 3.57527 5.99993C3.57496 6.28501 3.46157 6.55833 3.25998 6.75991C3.0584 6.96149 2.78509 7.07488 2.50001 7.0752ZM2.50001 3.20423C2.79774 3.20423 3.08879 3.11595 3.33635 2.95053C3.58391 2.78512 3.77685 2.55001 3.89079 2.27494C4.00473 1.99987 4.03454 1.69719 3.97646 1.40517C3.91837 1.11316 3.775 0.844927 3.56447 0.634397C3.35394 0.423866 3.0857 0.280493 2.79369 0.222407C2.50168 0.164322 2.19899 0.194134 1.92392 0.308072C1.64885 0.42201 1.41374 0.614958 1.24833 0.862516C1.08292 1.11007 0.99463 1.40112 0.99463 1.69886C0.995077 2.09797 1.15382 2.48061 1.43604 2.76283C1.71825 3.04504 2.10089 3.20379 2.50001 3.20423ZM2.50001 0.62359C2.71267 0.62359 2.92057 0.686653 3.09739 0.804805C3.27422 0.922957 3.41204 1.09089 3.49342 1.28737C3.57481 1.48385 3.5961 1.70005 3.55461 1.90863C3.51312 2.11721 3.41071 2.30881 3.26034 2.45919C3.10996 2.60957 2.91836 2.71198 2.70978 2.75347C2.5012 2.79496 2.285 2.77366 2.08852 2.69228C1.89204 2.61089 1.7241 2.47307 1.60595 2.29625C1.4878 2.11942 1.42474 1.91153 1.42474 1.69886C1.42505 1.41378 1.53844 1.14046 1.74003 0.938879C1.94161 0.737295 2.21492 0.623907 2.50001 0.62359ZM2.50001 8.79563C2.20227 8.79563 1.91122 8.88392 1.66366 9.04933C1.41611 9.21475 1.22316 9.44985 1.10922 9.72492C0.995281 10 0.96547 10.3027 1.02355 10.5947C1.08164 10.8867 1.22501 11.1549 1.43554 11.3655C1.64607 11.576 1.91431 11.7194 2.20632 11.7775C2.49834 11.8355 2.80102 11.8057 3.07609 11.6918C3.35116 11.5779 3.58627 11.3849 3.75168 11.1373C3.91709 10.8898 4.00538 10.5987 4.00538 10.301C4.00493 9.90189 3.84619 9.51926 3.56397 9.23704C3.28176 8.95482 2.89912 8.79608 2.50001 8.79563ZM2.50001 11.3763C2.28734 11.3763 2.07945 11.3132 1.90262 11.1951C1.72579 11.0769 1.58797 10.909 1.50659 10.7125C1.4252 10.516 1.40391 10.2998 1.4454 10.0912C1.48689 9.88265 1.5893 9.69106 1.73968 9.54068C1.89005 9.3903 2.08165 9.28789 2.29023 9.2464C2.49881 9.20491 2.71501 9.2262 2.91149 9.30759C3.10797 9.38897 3.27591 9.52679 3.39406 9.70362C3.51221 9.88045 3.57527 10.0883 3.57527 10.301C3.57496 10.5861 3.46157 10.8594 3.25998 11.061C3.0584 11.2626 2.78509 11.376 2.50001 11.3763Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <svg
                width="3"
                height="3"
                viewBox="0 0 3 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[1.15px] top-[1.56px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="1.5" cy="1.625" r="1.25" fill="white"></circle>
              </svg>
              <svg
                width="3"
                height="4"
                viewBox="0 0 3 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[1.15px] top-[5.94px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="1.5" cy="2" r="1.25" fill="white"></circle>
              </svg>
              <svg
                width="3"
                height="3"
                viewBox="0 0 3 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[1.15px] top-[10.31px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="1.5" cy="1.375" r="1.25" fill="white"></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[228px] h-[62px] absolute left-[902px] top-[313px] bg-white border border-[#dcdbdb]">
        <div className="w-[226px] h-7 absolute left-px top-px bg-[#e6f2ff]">
          <p className="w-[185px] absolute left-2 top-1.5 text-xs text-left text-black">
            TA - All learner records
          </p>
          <div className="flex flex-col justify-center items-center w-[15px] absolute left-[203px] top-[6.5px] gap-[3.124999761581421px]">
            <div className="flex-grow-0 flex-shrink-0 w-[5.43px] h-[15px] relative">
              <div className="flex flex-col justify-center items-center absolute left-0 top-0 gap-[2.4193546772003174px] px-[1.2096773386001587px] py-[1.6935482025146484px]">
                <svg
                  width="5"
                  height="12"
                  viewBox="0 0 5 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M2.50001 4.49456C2.20227 4.49456 1.91122 4.58285 1.66366 4.74826C1.41611 4.91367 1.22316 5.14878 1.10922 5.42385C0.995281 5.69892 0.96547 6.0016 1.02355 6.29362C1.08164 6.58563 1.22501 6.85386 1.43554 7.06439C1.64607 7.27492 1.91431 7.4183 2.20632 7.47638C2.49834 7.53447 2.80102 7.50466 3.07609 7.39072C3.35116 7.27678 3.58627 7.08383 3.75168 6.83627C3.91709 6.58872 4.00538 6.29767 4.00538 5.99993C4.00493 5.60082 3.84619 5.21818 3.56397 4.93597C3.28176 4.65375 2.89912 4.495 2.50001 4.49456ZM2.50001 7.0752C2.28734 7.0752 2.07945 7.01214 1.90262 6.89399C1.72579 6.77583 1.58797 6.6079 1.50659 6.41142C1.4252 6.21494 1.40391 5.99874 1.4454 5.79016C1.48689 5.58158 1.5893 5.38998 1.73968 5.2396C1.89005 5.08922 2.08165 4.98681 2.29023 4.94532C2.49881 4.90384 2.71501 4.92513 2.91149 5.00651C3.10797 5.0879 3.27591 5.22572 3.39406 5.40255C3.51221 5.57937 3.57527 5.78726 3.57527 5.99993C3.57496 6.28501 3.46157 6.55833 3.25998 6.75991C3.0584 6.96149 2.78509 7.07488 2.50001 7.0752ZM2.50001 3.20423C2.79774 3.20423 3.08879 3.11595 3.33635 2.95053C3.58391 2.78512 3.77685 2.55001 3.89079 2.27494C4.00473 1.99987 4.03454 1.69719 3.97646 1.40517C3.91837 1.11316 3.775 0.844927 3.56447 0.634397C3.35394 0.423866 3.0857 0.280493 2.79369 0.222407C2.50168 0.164322 2.19899 0.194134 1.92392 0.308072C1.64885 0.42201 1.41374 0.614958 1.24833 0.862516C1.08292 1.11007 0.99463 1.40112 0.99463 1.69886C0.995077 2.09797 1.15382 2.48061 1.43604 2.76283C1.71825 3.04504 2.10089 3.20379 2.50001 3.20423ZM2.50001 0.62359C2.71267 0.62359 2.92057 0.686653 3.09739 0.804805C3.27422 0.922957 3.41204 1.09089 3.49342 1.28737C3.57481 1.48385 3.5961 1.70005 3.55461 1.90863C3.51312 2.11721 3.41071 2.30881 3.26034 2.45919C3.10996 2.60957 2.91836 2.71198 2.70978 2.75347C2.5012 2.79496 2.285 2.77366 2.08852 2.69228C1.89204 2.61089 1.7241 2.47307 1.60595 2.29625C1.4878 2.11942 1.42474 1.91153 1.42474 1.69886C1.42505 1.41378 1.53844 1.14046 1.74003 0.938879C1.94161 0.737295 2.21492 0.623907 2.50001 0.62359ZM2.50001 8.79563C2.20227 8.79563 1.91122 8.88392 1.66366 9.04933C1.41611 9.21475 1.22316 9.44985 1.10922 9.72492C0.995281 10 0.96547 10.3027 1.02355 10.5947C1.08164 10.8867 1.22501 11.1549 1.43554 11.3655C1.64607 11.576 1.91431 11.7194 2.20632 11.7775C2.49834 11.8355 2.80102 11.8057 3.07609 11.6918C3.35116 11.5779 3.58627 11.3849 3.75168 11.1373C3.91709 10.8898 4.00538 10.5987 4.00538 10.301C4.00493 9.90189 3.84619 9.51926 3.56397 9.23704C3.28176 8.95482 2.89912 8.79608 2.50001 8.79563ZM2.50001 11.3763C2.28734 11.3763 2.07945 11.3132 1.90262 11.1951C1.72579 11.0769 1.58797 10.909 1.50659 10.7125C1.4252 10.516 1.40391 10.2998 1.4454 10.0912C1.48689 9.88265 1.5893 9.69106 1.73968 9.54068C1.89005 9.3903 2.08165 9.28789 2.29023 9.2464C2.49881 9.20491 2.71501 9.2262 2.91149 9.30759C3.10797 9.38897 3.27591 9.52679 3.39406 9.70362C3.51221 9.88045 3.57527 10.0883 3.57527 10.301C3.57496 10.5861 3.46157 10.8594 3.25998 11.061C3.0584 11.2626 2.78509 11.376 2.50001 11.3763Z"
                    fill="black"
                  ></path>
                </svg>
              </div>
              <svg
                width="3"
                height="3"
                viewBox="0 0 3 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[1.15px] top-[1.56px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="1.5" cy="1.625" r="1.25" fill="black"></circle>
              </svg>
              <svg
                width="3"
                height="4"
                viewBox="0 0 3 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[1.15px] top-[5.94px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="1.5" cy="2" r="1.25" fill="black"></circle>
              </svg>
              <svg
                width="3"
                height="3"
                viewBox="0 0 3 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[1.15px] top-[10.31px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="1.5" cy="1.375" r="1.25" fill="black"></circle>
              </svg>
            </div>
          </div>
        </div>
        <div className="w-[88px] h-8 absolute left-px top-[29px]">
          <p className="absolute left-2 top-2 text-xs font-light text-left text-black">
            3 subscribers
          </p>
        </div>
      </div>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 absolute left-[1119px] top-[305px]"
        preserveAspectRatio="none"
      >
        <circle cx="10" cy="10" r="10" fill="#4EBF8D"></circle>
        <path
          d="M9.99999 7.75003C9.55498 7.75003 9.11997 7.88199 8.74996 8.12922C8.37995 8.37646 8.09156 8.72786 7.92126 9.13899C7.75096 9.55013 7.7064 10.0025 7.79322 10.439C7.88004 10.8754 8.09433 11.2764 8.409 11.591C8.72367 11.9057 9.12458 12.12 9.56104 12.2068C9.99749 12.2936 10.4499 12.2491 10.861 12.0788C11.2722 11.9085 11.6236 11.6201 11.8708 11.2501C12.118 10.8801 12.25 10.445 12.25 10C12.2493 9.4035 12.012 8.83159 11.5902 8.40978C11.1684 7.98797 10.5965 7.7507 9.99999 7.75003ZM9.99999 11.75C9.65387 11.75 9.31553 11.6474 9.02774 11.4551C8.73995 11.2628 8.51565 10.9895 8.3832 10.6697C8.25075 10.35 8.21609 9.99809 8.28361 9.65862C8.35114 9.31915 8.51781 9.00733 8.76255 8.76259C9.00729 8.51785 9.31911 8.35118 9.65858 8.28365C9.99805 8.21613 10.3499 8.25079 10.6697 8.38324C10.9895 8.51569 11.2628 8.74 11.4551 9.02778C11.6474 9.31557 11.75 9.65391 11.75 10C11.7495 10.464 11.5649 10.9088 11.2369 11.2369C10.9088 11.565 10.464 11.7495 9.99999 11.75ZM6.08385 8.34582C5.75433 9.12487 5.66499 9.98458 5.82728 10.8147C5.98957 11.6449 6.39609 12.4077 6.99474 13.0052C7.01795 13.0285 7.03637 13.056 7.04893 13.0863C7.0615 13.1167 7.06796 13.1492 7.06796 13.182C7.06797 13.2148 7.0615 13.2473 7.04894 13.2777C7.03638 13.308 7.01797 13.3356 6.99475 13.3588C6.97154 13.382 6.94398 13.4004 6.91366 13.413C6.88333 13.4255 6.85082 13.432 6.81799 13.432C6.78516 13.432 6.75266 13.4255 6.72233 13.413C6.692 13.4004 6.66444 13.382 6.64122 13.3588C6.1997 12.918 5.84943 12.3944 5.61044 11.8181C5.37145 11.2417 5.24843 10.6239 5.24843 10C5.24843 9.37611 5.37145 8.75832 5.61044 8.18198C5.84943 7.60565 6.1997 7.0821 6.64122 6.64127C6.68811 6.59439 6.75169 6.56805 6.81799 6.56805C6.88429 6.56806 6.94787 6.5944 6.99475 6.64128C7.04163 6.68816 7.06797 6.75175 7.06796 6.81805C7.06796 6.88435 7.04162 6.94793 6.99474 6.99481C6.60657 7.38198 6.29722 7.8408 6.08385 8.34582ZM14.75 10C14.7507 10.6239 14.6282 11.2418 14.3895 11.8182C14.1507 12.3946 13.8004 12.9182 13.3588 13.3588C13.3355 13.382 13.308 13.4004 13.2777 13.413C13.2473 13.4255 13.2148 13.432 13.182 13.432C13.1492 13.432 13.1167 13.4255 13.0863 13.413C13.056 13.4004 13.0284 13.382 13.0052 13.3588C12.982 13.3356 12.9636 13.308 12.951 13.2777C12.9385 13.2473 12.932 13.2148 12.932 13.182C12.932 13.1492 12.9385 13.1167 12.951 13.0863C12.9636 13.056 12.982 13.0285 13.0052 13.0052C13.4003 12.6108 13.7138 12.1424 13.9276 11.6267C14.1415 11.1111 14.2516 10.5583 14.2516 10C14.2516 9.44177 14.1415 8.88899 13.9276 8.37332C13.7138 7.85765 13.4003 7.38921 13.0052 6.99481C12.982 6.9716 12.9636 6.94404 12.951 6.91371C12.9385 6.88338 12.932 6.85088 12.932 6.81805C12.932 6.78522 12.9385 6.75271 12.951 6.72238C12.9636 6.69205 12.982 6.66449 13.0052 6.64128C13.0284 6.61807 13.056 6.59965 13.0863 6.58709C13.1167 6.57452 13.1492 6.56806 13.182 6.56805C13.2148 6.56805 13.2473 6.57452 13.2777 6.58708C13.308 6.59964 13.3355 6.61805 13.3588 6.64127C13.8004 7.08189 14.1507 7.60545 14.3895 8.18185C14.6282 8.75825 14.7507 9.37614 14.75 10ZM5.22698 14.773C5.25019 14.7962 5.26861 14.8238 5.28117 14.8541C5.29374 14.8844 5.3002 14.9169 5.3002 14.9498C5.30021 14.9826 5.29374 15.0151 5.28118 15.0454C5.26862 15.0758 5.25021 15.1033 5.22699 15.1265C5.20378 15.1498 5.17622 15.1682 5.1459 15.1807C5.11557 15.1933 5.08306 15.1998 5.05023 15.1998C5.0174 15.1998 4.9849 15.1933 4.95457 15.1807C4.92424 15.1682 4.89668 15.1498 4.87346 15.1266C4.19954 14.4537 3.66489 13.6546 3.30011 12.7749C2.93532 11.8953 2.74756 10.9523 2.74756 10C2.74756 9.04773 2.93532 8.10477 3.30011 7.22511C3.66489 6.34545 4.19954 5.54634 4.87346 4.8735C4.92035 4.82663 4.98393 4.80029 5.05023 4.80029C5.11653 4.8003 5.18011 4.82664 5.22699 4.87352C5.27387 4.9204 5.30021 4.98399 5.3002 5.05029C5.3002 5.11659 5.27386 5.18017 5.22698 5.22705C4.59948 5.85345 4.10166 6.59744 3.762 7.41645C3.42234 8.23545 3.24751 9.11339 3.24751 10C3.24751 10.8867 3.42234 11.7646 3.762 12.5836C4.10166 13.4026 4.59948 14.1466 5.22698 14.773ZM17.25 10C17.2512 10.9523 17.0642 11.8954 16.6998 12.7752C16.3353 13.6549 15.8007 14.454 15.1265 15.1266C15.0796 15.1734 15.016 15.1998 14.9497 15.1998C14.8834 15.1998 14.8199 15.1734 14.773 15.1265C14.7261 15.0797 14.6998 15.0161 14.6998 14.9498C14.6998 14.8835 14.7261 14.8199 14.773 14.773C15.4005 14.1466 15.8983 13.4026 16.238 12.5836C16.5776 11.7646 16.7525 10.8867 16.7525 10C16.7525 9.11339 16.5776 8.23545 16.238 7.41645C15.8983 6.59744 15.4005 5.85345 14.773 5.22705C14.7261 5.18017 14.6998 5.11659 14.6998 5.05029C14.6998 4.98399 14.7261 4.9204 14.773 4.87352C14.8199 4.82664 14.8834 4.8003 14.9497 4.80029C15.016 4.80029 15.0796 4.82663 15.1265 4.8735C15.8007 5.54603 16.3353 6.34513 16.6997 7.2249C17.0642 8.10467 17.2512 9.04777 17.25 10Z"
          fill="white"
          stroke="white"
          strokeWidth="0.2"
        ></path>
      </svg>
      <div className="w-[237px] h-[70px]">
        <div className="flex flex-col justify-start items-start w-[228px] absolute left-[903px] top-[151px] p-px bg-white border border-[#dcdbdb]">
          <div className="self-stretch flex-grow-0 flex-shrink-0 h-7 relative bg-[#e6f2ff]">
            <p className="w-[185px] absolute left-2 top-1.5 text-xs text-left text-black">
              Add another
            </p>
            <div className="flex flex-col justify-center items-center w-[15px] absolute left-[203px] top-[6.5px] gap-[3.124999761581421px]">
              <div className="flex-grow-0 flex-shrink-0 w-[5.43px] h-[15px] relative">
                <div className="flex flex-col justify-center items-center absolute left-0 top-0 gap-[2.4193546772003174px] px-[1.2096773386001587px] py-[1.6935482025146484px]">
                  <svg
                    width="5"
                    height="12"
                    viewBox="0 0 5 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M2.50001 4.49468C2.20227 4.49468 1.91122 4.58297 1.66366 4.74838C1.41611 4.91379 1.22316 5.1489 1.10922 5.42397C0.995281 5.69904 0.96547 6.00172 1.02355 6.29374C1.08164 6.58575 1.22501 6.85399 1.43554 7.06452C1.64607 7.27505 1.91431 7.41842 2.20632 7.47651C2.49834 7.53459 2.80102 7.50478 3.07609 7.39084C3.35116 7.2769 3.58627 7.08395 3.75168 6.8364C3.91709 6.58884 4.00538 6.29779 4.00538 6.00005C4.00493 5.60094 3.84619 5.2183 3.56397 4.93609C3.28176 4.65387 2.89912 4.49513 2.50001 4.49468ZM2.50001 7.07532C2.28734 7.07532 2.07945 7.01226 1.90262 6.89411C1.72579 6.77596 1.58797 6.60802 1.50659 6.41154C1.4252 6.21506 1.40391 5.99886 1.4454 5.79028C1.48689 5.5817 1.5893 5.3901 1.73968 5.23972C1.89005 5.08935 2.08165 4.98694 2.29023 4.94545C2.49881 4.90396 2.71501 4.92525 2.91149 5.00664C3.10797 5.08802 3.27591 5.22584 3.39406 5.40267C3.51221 5.57949 3.57527 5.78739 3.57527 6.00005C3.57496 6.28514 3.46157 6.55845 3.25998 6.76003C3.0584 6.96162 2.78509 7.07501 2.50001 7.07532ZM2.50001 3.20436C2.79774 3.20436 3.08879 3.11607 3.33635 2.95065C3.58391 2.78524 3.77685 2.55013 3.89079 2.27506C4.00473 1.99999 4.03454 1.69731 3.97646 1.4053C3.91837 1.11328 3.775 0.845049 3.56447 0.634519C3.35394 0.423988 3.0857 0.280615 2.79369 0.22253C2.50168 0.164444 2.19899 0.194256 1.92392 0.308194C1.64885 0.422132 1.41374 0.61508 1.24833 0.862638C1.08292 1.1102 0.99463 1.40124 0.99463 1.69898C0.995077 2.09809 1.15382 2.48073 1.43604 2.76295C1.71825 3.04516 2.10089 3.20391 2.50001 3.20436ZM2.50001 0.623712C2.71267 0.623712 2.92057 0.686775 3.09739 0.804927C3.27422 0.923079 3.41204 1.09101 3.49342 1.28749C3.57481 1.48397 3.5961 1.70017 3.55461 1.90875C3.51312 2.11734 3.41071 2.30893 3.26034 2.45931C3.10996 2.60969 2.91836 2.7121 2.70978 2.75359C2.5012 2.79508 2.285 2.77378 2.08852 2.6924C1.89204 2.61101 1.7241 2.47319 1.60595 2.29637C1.4878 2.11954 1.42474 1.91165 1.42474 1.69898C1.42505 1.4139 1.53844 1.14058 1.74003 0.939001C1.94161 0.737418 2.21492 0.624029 2.50001 0.623712ZM2.50001 8.79575C2.20227 8.79575 1.91122 8.88404 1.66366 9.04945C1.41611 9.21487 1.22316 9.44997 1.10922 9.72505C0.995281 10.0001 0.96547 10.3028 1.02355 10.5948C1.08164 10.8868 1.22501 11.1551 1.43554 11.3656C1.64607 11.5761 1.91431 11.7195 2.20632 11.7776C2.49834 11.8357 2.80102 11.8059 3.07609 11.6919C3.35116 11.578 3.58627 11.385 3.75168 11.1375C3.91709 10.8899 4.00538 10.5989 4.00538 10.3011C4.00493 9.90202 3.84619 9.51938 3.56397 9.23716C3.28176 8.95495 2.89912 8.7962 2.50001 8.79575ZM2.50001 11.3764C2.28734 11.3764 2.07945 11.3133 1.90262 11.1952C1.72579 11.077 1.58797 10.9091 1.50659 10.7126C1.4252 10.5161 1.40391 10.2999 1.4454 10.0914C1.48689 9.88277 1.5893 9.69118 1.73968 9.5408C1.89005 9.39042 2.08165 9.28801 2.29023 9.24652C2.49881 9.20503 2.71501 9.22633 2.91149 9.30771C3.10797 9.38909 3.27591 9.52691 3.39406 9.70374C3.51221 9.88057 3.57527 10.0885 3.57527 10.3011C3.57496 10.5862 3.46157 10.8595 3.25998 11.0611C3.0584 11.2627 2.78509 11.3761 2.50001 11.3764Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
                <svg
                  width="3"
                  height="3"
                  viewBox="0 0 3 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[1.15px] top-[1.56px]"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="1.5" cy="1.625" r="1.25" fill="black"></circle>
                </svg>
                <svg
                  width="3"
                  height="4"
                  viewBox="0 0 3 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[1.15px] top-[5.94px]"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="1.5" cy="2" r="1.25" fill="black"></circle>
                </svg>
                <svg
                  width="3"
                  height="3"
                  viewBox="0 0 3 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[1.15px] top-[10.31px]"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="1.5" cy="1.375" r="1.25" fill="black"></circle>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-[201px] h-8 relative">
            <p className="w-[142px] absolute left-2 top-2 text-xs font-light text-left text-black">
              3 subscribers
            </p>
          </div>
        </div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 absolute left-[1120px] top-[143px]"
          preserveAspectRatio="none"
        >
          <circle cx="10" cy="10" r="10" fill="#4EBF8D"></circle>
          <path
            d="M9.99999 7.75003C9.55498 7.75003 9.11997 7.88199 8.74996 8.12922C8.37995 8.37646 8.09156 8.72786 7.92126 9.13899C7.75096 9.55013 7.7064 10.0025 7.79322 10.439C7.88004 10.8754 8.09433 11.2764 8.409 11.591C8.72367 11.9057 9.12458 12.12 9.56104 12.2068C9.99749 12.2936 10.4499 12.2491 10.861 12.0788C11.2722 11.9085 11.6236 11.6201 11.8708 11.2501C12.118 10.8801 12.25 10.445 12.25 10C12.2493 9.4035 12.012 8.83159 11.5902 8.40978C11.1684 7.98797 10.5965 7.7507 9.99999 7.75003ZM9.99999 11.75C9.65387 11.75 9.31553 11.6474 9.02774 11.4551C8.73995 11.2628 8.51565 10.9895 8.3832 10.6697C8.25075 10.35 8.21609 9.99809 8.28361 9.65862C8.35114 9.31915 8.51781 9.00733 8.76255 8.76259C9.00729 8.51785 9.31911 8.35118 9.65858 8.28365C9.99805 8.21613 10.3499 8.25079 10.6697 8.38324C10.9895 8.51569 11.2628 8.74 11.4551 9.02778C11.6474 9.31557 11.75 9.65391 11.75 10C11.7495 10.464 11.5649 10.9088 11.2369 11.2369C10.9088 11.565 10.464 11.7495 9.99999 11.75ZM6.08385 8.34582C5.75433 9.12487 5.66499 9.98458 5.82728 10.8147C5.98957 11.6449 6.39609 12.4077 6.99474 13.0052C7.01795 13.0285 7.03637 13.056 7.04893 13.0863C7.0615 13.1167 7.06796 13.1492 7.06796 13.182C7.06797 13.2148 7.0615 13.2473 7.04894 13.2777C7.03638 13.308 7.01797 13.3356 6.99475 13.3588C6.97154 13.382 6.94398 13.4004 6.91366 13.413C6.88333 13.4255 6.85082 13.432 6.81799 13.432C6.78516 13.432 6.75266 13.4255 6.72233 13.413C6.692 13.4004 6.66444 13.382 6.64122 13.3588C6.1997 12.918 5.84943 12.3944 5.61044 11.8181C5.37145 11.2417 5.24843 10.6239 5.24843 10C5.24843 9.37611 5.37145 8.75832 5.61044 8.18198C5.84943 7.60565 6.1997 7.0821 6.64122 6.64127C6.68811 6.59439 6.75169 6.56805 6.81799 6.56805C6.88429 6.56806 6.94787 6.5944 6.99475 6.64128C7.04163 6.68816 7.06797 6.75175 7.06796 6.81805C7.06796 6.88435 7.04162 6.94793 6.99474 6.99481C6.60657 7.38198 6.29722 7.8408 6.08385 8.34582ZM14.75 10C14.7507 10.6239 14.6282 11.2418 14.3895 11.8182C14.1507 12.3946 13.8004 12.9182 13.3588 13.3588C13.3355 13.382 13.308 13.4004 13.2777 13.413C13.2473 13.4255 13.2148 13.432 13.182 13.432C13.1492 13.432 13.1167 13.4255 13.0863 13.413C13.056 13.4004 13.0284 13.382 13.0052 13.3588C12.982 13.3356 12.9636 13.308 12.951 13.2777C12.9385 13.2473 12.932 13.2148 12.932 13.182C12.932 13.1492 12.9385 13.1167 12.951 13.0863C12.9636 13.056 12.982 13.0285 13.0052 13.0052C13.4003 12.6108 13.7138 12.1424 13.9276 11.6267C14.1415 11.1111 14.2516 10.5583 14.2516 10C14.2516 9.44177 14.1415 8.88899 13.9276 8.37332C13.7138 7.85765 13.4003 7.38921 13.0052 6.99481C12.982 6.9716 12.9636 6.94404 12.951 6.91371C12.9385 6.88338 12.932 6.85088 12.932 6.81805C12.932 6.78522 12.9385 6.75271 12.951 6.72238C12.9636 6.69205 12.982 6.66449 13.0052 6.64128C13.0284 6.61807 13.056 6.59965 13.0863 6.58709C13.1167 6.57452 13.1492 6.56806 13.182 6.56805C13.2148 6.56805 13.2473 6.57452 13.2777 6.58708C13.308 6.59964 13.3355 6.61805 13.3588 6.64127C13.8004 7.08189 14.1507 7.60545 14.3895 8.18185C14.6282 8.75825 14.7507 9.37614 14.75 10ZM5.22698 14.773C5.25019 14.7962 5.26861 14.8238 5.28117 14.8541C5.29374 14.8844 5.3002 14.9169 5.3002 14.9498C5.30021 14.9826 5.29374 15.0151 5.28118 15.0454C5.26862 15.0758 5.25021 15.1033 5.22699 15.1265C5.20378 15.1498 5.17622 15.1682 5.1459 15.1807C5.11557 15.1933 5.08306 15.1998 5.05023 15.1998C5.0174 15.1998 4.9849 15.1933 4.95457 15.1807C4.92424 15.1682 4.89668 15.1498 4.87346 15.1266C4.19954 14.4537 3.66489 13.6546 3.30011 12.7749C2.93532 11.8953 2.74756 10.9523 2.74756 10C2.74756 9.04773 2.93532 8.10477 3.30011 7.22511C3.66489 6.34545 4.19954 5.54634 4.87346 4.8735C4.92035 4.82663 4.98393 4.80029 5.05023 4.80029C5.11653 4.8003 5.18011 4.82664 5.22699 4.87352C5.27387 4.9204 5.30021 4.98399 5.3002 5.05029C5.3002 5.11659 5.27386 5.18017 5.22698 5.22705C4.59948 5.85345 4.10166 6.59744 3.762 7.41645C3.42234 8.23545 3.24751 9.11339 3.24751 10C3.24751 10.8867 3.42234 11.7646 3.762 12.5836C4.10166 13.4026 4.59948 14.1466 5.22698 14.773ZM17.25 10C17.2512 10.9523 17.0642 11.8954 16.6998 12.7752C16.3353 13.6549 15.8007 14.454 15.1265 15.1266C15.0796 15.1734 15.016 15.1998 14.9497 15.1998C14.8834 15.1998 14.8199 15.1734 14.773 15.1265C14.7261 15.0797 14.6998 15.0161 14.6998 14.9498C14.6998 14.8835 14.7261 14.8199 14.773 14.773C15.4005 14.1466 15.8983 13.4026 16.238 12.5836C16.5776 11.7646 16.7525 10.8867 16.7525 10C16.7525 9.11339 16.5776 8.23545 16.238 7.41645C15.8983 6.59744 15.4005 5.85345 14.773 5.22705C14.7261 5.18017 14.6998 5.11659 14.6998 5.05029C14.6998 4.98399 14.7261 4.9204 14.773 4.87352C14.8199 4.82664 14.8834 4.8003 14.9497 4.80029C15.016 4.80029 15.0796 4.82663 15.1265 4.8735C15.8007 5.54603 16.3353 6.34513 16.6997 7.2249C17.0642 8.10467 17.2512 9.04777 17.25 10Z"
            fill="white"
            stroke="white"
            strokeWidth="0.2"
          ></path>
        </svg>
      </div>
      <div className="w-[169px] h-[19px]">
        <svg
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[103.5px] top-[196.5px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M12.4912 1.16379C11.1154 0.41332 9.29309 0 7.36 0C5.42691 0 3.60461 0.41332 2.22875 1.16379C0.79152 1.94773 0 3.0118 0 4.16V11.84C0 12.9882 0.79152 14.0523 2.22875 14.8362C3.60461 15.5867 5.42691 16 7.36 16C9.29309 16 11.1154 15.5867 12.4912 14.8362C13.9285 14.0523 14.72 12.9882 14.72 11.84V4.16C14.72 3.0118 13.9285 1.94773 12.4912 1.16379ZM2.5352 1.72563C3.81867 1.02555 5.53215 0.64 7.36 0.64C9.18785 0.64 10.9013 1.02555 12.1848 1.72562C13.407 2.39227 14.08 3.2568 14.08 4.16C14.08 5.0632 13.407 5.92773 12.1848 6.59438C10.9013 7.29445 9.18785 7.68 7.36 7.68C5.53215 7.68 3.81867 7.29445 2.5352 6.59438C1.31305 5.92773 0.64 5.0632 0.64 4.16C0.64 3.2568 1.31305 2.39227 2.5352 1.72563ZM14.08 11.84C14.08 12.7432 13.407 13.6077 12.1848 14.2744C10.9013 14.9745 9.18785 15.36 7.36 15.36C5.53215 15.36 3.81867 14.9745 2.5352 14.2744C1.31305 13.6077 0.64 12.7432 0.64 11.84V9.71855C1.01537 10.1931 1.54992 10.6259 2.22875 10.9962C3.60461 11.7467 5.42691 12.16 7.36 12.16C9.29309 12.16 11.1154 11.7467 12.4912 10.9962C13.1701 10.6259 13.7046 10.1931 14.08 9.71855V11.84ZM14.08 8C14.08 8.9032 13.407 9.76773 12.1848 10.4344C10.9013 11.1345 9.18785 11.52 7.36 11.52C5.53215 11.52 3.81867 11.1345 2.5352 10.4344C1.31305 9.76773 0.64 8.9032 0.64 8V5.87855C1.01537 6.35313 1.54992 6.78594 2.22875 7.15621C3.60461 7.90668 5.42691 8.32 7.36 8.32C9.29309 8.32 11.1154 7.90668 12.4912 7.15621C13.1701 6.78594 13.7046 6.35313 14.08 5.87855V8Z"
            fill="black"
          ></path>
        </svg>
        <p className="w-[146px] h-[19px] absolute left-[127px] top-[196px] text-sm font-light text-left text-black">
          Data sources
        </p>
      </div>
      <div className="w-[258px] h-6">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 absolute left-[518px] top-[177px]"
          preserveAspectRatio="none"
        >
          <path
            d="M17.3304 17.8434C16.2029 18.9709 14.7597 19.732 13.1833 20.0306C11.6068 20.3291 9.968 20.1517 8.474 19.5206C6.98 18.8896 5.69794 17.8333 4.78994 16.4854C3.88195 15.1375 3.3888 13.5584 3.37285 11.9479C3.3569 10.3374 3.81888 8.76785 4.70036 7.43764C5.58184 6.10743 6.84324 5.07634 8.32503 4.47476C9.80682 3.87319 11.4425 3.72815 13.0251 4.05798C14.6078 4.3878 16.0664 5.17769 17.2164 6.32775L11.5245 12.0197L17.3304 17.8434Z"
            fill="#1E1B19"
          ></path>
          <path
            d="M6.43362 17.104C9.30676 19.9771 13.9366 20.0055 16.7747 17.1674C19.6128 14.3293 19.5844 9.69945 16.7113 6.8263C13.8382 3.95316 9.20828 3.92476 6.37018 6.76286C3.53208 9.60097 3.56048 14.2308 6.43362 17.104Z"
            fill="white"
          ></path>
          <path
            // style="mix-blend-mode:multiply"
            d="M9.97352 17.4144C12.447 18.4593 15.2595 17.3176 16.2554 14.8644C17.2512 12.4112 16.0534 9.5754 13.5799 8.53055C11.1063 7.48569 8.29386 8.6274 7.298 11.0806C6.30213 13.5338 7.50001 16.3696 9.97352 17.4144Z"
            fill="url(#paint0_radial_562_472282)"
          ></path>
          <path
            d="M21.2985 9.4166L21.044 9.73859C21.6665 10.2306 22.0696 10.9482 22.1649 11.7329C22.2602 12.5175 22.0401 13.3047 21.5541 13.9217C21.0682 14.5387 20.3554 14.9359 19.5721 15.0256C18.7963 15.1143 18.0139 14.8941 17.3943 14.4121L17.3831 14.4009L17.3672 14.385L17.3497 14.371C16.98 14.0743 16.5091 13.9333 16.0379 13.9792C15.5665 14.0251 15.1327 14.2544 14.8301 14.6183L14.8301 14.6183L14.8256 14.6238C14.287 15.2951 13.552 15.7812 12.7219 16.0151C11.8917 16.249 11.007 16.2191 10.1898 15.9288C9.37262 15.6386 8.66364 15.1024 8.16091 14.3942C7.6582 13.6861 7.38681 12.8412 7.38372 11.9766C7.38064 11.112 7.64594 10.2702 8.14255 9.56709C8.63915 8.86402 9.34285 8.33388 10.1568 8.04988C10.9707 7.76587 11.8552 7.74193 12.688 7.98202C13.5209 8.22213 14.2608 8.71439 14.8055 9.39102L14.8054 9.39106L14.8104 9.397C15.1142 9.76019 15.5476 9.99136 16.0182 10.0405C16.4889 10.0897 16.9598 9.95279 17.3295 9.65815L17.3476 9.64374L17.3639 9.62739L17.364 9.62734L17.364 9.62729L17.3641 9.62723L17.3642 9.62718L17.3642 9.62713L17.3643 9.62707L17.3643 9.62702L17.3644 9.62697L17.3644 9.62691L17.3645 9.62686L17.3645 9.6268L17.3646 9.62675L17.3646 9.62669L17.3647 9.62664L17.3648 9.62658L17.3648 9.62653L17.3649 9.62647L17.3649 9.62641L17.365 9.62636L17.365 9.6263L17.3651 9.62624L17.3651 9.62619L17.3652 9.62613L17.3653 9.62607L17.3653 9.62601L17.3654 9.62596L17.3654 9.6259L17.3655 9.62584L17.3656 9.62578L17.3656 9.62572L17.3657 9.62566L17.3657 9.6256L17.3658 9.62554L17.3658 9.62549L17.3659 9.62543L17.366 9.62537L17.366 9.62531L17.3661 9.62524L17.3661 9.62518L17.3662 9.62512L17.3663 9.62506L17.3663 9.625L17.3664 9.62494L17.3665 9.62488L17.3665 9.62482L17.3666 9.62475L17.3666 9.62469L17.3667 9.62463L17.3668 9.62457L17.3668 9.62451L17.3669 9.62444L17.367 9.62438L17.367 9.62432L17.3671 9.62425L17.3671 9.62419L17.3672 9.62413L17.3673 9.62406L17.3673 9.624L17.3674 9.62393L17.3675 9.62387L17.3675 9.62381L17.3676 9.62374L17.3677 9.62368L17.3677 9.62361L17.3678 9.62355L17.3679 9.62348L17.3679 9.62342L17.368 9.62335L17.3681 9.62328L17.3681 9.62322L17.3682 9.62315L17.3682 9.62309L17.3683 9.62302L17.3684 9.62295L17.3684 9.62289L17.3685 9.62282L17.3686 9.62275L17.3686 9.62269L17.3687 9.62262L17.3688 9.62255L17.3689 9.62248L17.3689 9.62242L17.369 9.62235L17.3691 9.62228L17.3691 9.62221L17.3692 9.62214L17.3693 9.62208L17.3693 9.62201L17.3694 9.62194L17.3695 9.62187L17.3695 9.6218L17.3696 9.62173L17.3697 9.62166L17.3697 9.62159L17.3698 9.62153L17.3699 9.62146L17.3699 9.62139L17.37 9.62132L17.3701 9.62125L17.3702 9.62118L17.3702 9.62111L17.3703 9.62104L17.3704 9.62097L17.3704 9.6209L17.3705 9.62083L17.3706 9.62076L17.3706 9.62069L17.3707 9.62062L17.3708 9.62054L17.3709 9.62047L17.3709 9.6204L17.371 9.62033L17.3711 9.62026L17.3711 9.62021C17.8996 9.23178 18.5437 9.02974 19.2033 9.0467C19.8724 9.0639 20.5185 9.30553 21.0374 9.73329L21.2985 9.4166Z"
            stroke="#1E1B19"
            strokeWidth="0.820819"
          ></path>
          <path
            d="M19.0943 14.3892C20.4016 14.4022 21.4509 13.3529 21.4379 12.0456C21.4249 10.7382 20.3545 9.66789 19.0472 9.65489C17.7398 9.64189 16.6905 10.6912 16.7035 11.9985C16.7165 13.3059 17.7869 14.3762 19.0943 14.3892Z"
            fill="white"
          ></path>
          <path
            d="M18.7761 12.7662C18.6652 12.7172 18.5646 12.6472 18.4797 12.5601L18.4798 12.56C18.3494 12.4275 18.2604 12.2601 18.2242 12.0791C18.188 11.8981 18.2062 11.7116 18.2762 11.5432C18.3463 11.3748 18.4651 11.2321 18.6176 11.1329C18.7702 11.0338 18.9497 10.9827 19.1336 10.9862C19.3175 10.9897 19.4974 11.0477 19.6505 11.1529C19.8036 11.2581 19.923 11.4058 19.9935 11.5772C20.0639 11.7486 20.0823 11.9359 20.0464 12.1154C20.0105 12.2948 19.922 12.4585 19.7922 12.5856L19.792 12.5858C19.7059 12.671 19.6033 12.738 19.4902 12.7827C19.3771 12.8274 19.2557 12.849 19.1331 12.8462C19.0105 12.8434 18.8891 12.8162 18.7761 12.7662ZM20.036 11.0034C19.852 10.8194 19.6185 10.693 19.3652 10.6401C19.1118 10.5873 18.8497 10.6105 18.6122 10.7069C18.3747 10.8033 18.1725 10.9686 18.0312 11.1819C17.8899 11.3951 17.8159 11.6466 17.8185 11.9046C17.821 12.1625 17.9 12.4153 18.0453 12.631C18.1906 12.8467 18.3958 13.0158 18.6349 13.1168C18.874 13.2178 19.1365 13.2462 19.3891 13.1984C19.6416 13.1506 19.873 13.0286 20.0538 12.8478C20.2962 12.6054 20.4303 12.2748 20.4269 11.9289C20.4234 11.583 20.2828 11.2502 20.036 11.0034Z"
            fill="#1E1B19"
            stroke="#1E1B19"
            strokeWidth="0.0820819"
          ></path>
          <defs>
            <radialGradient
              id="paint0_radial_562_472282"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(-307.538 1452.52) rotate(45) scale(186.354 182.684)"
            >
              <stop></stop>
              <stop offset="1" stopColor="white"></stop>
            </radialGradient>
          </defs>
        </svg>
        <p className="w-[228px] h-[19px] absolute left-[548px] top-[179px] text-sm font-light text-left text-black">
          Atomic Data products
        </p>
      </div>
      <p className="w-[228px] h-[19px] absolute left-[903px] top-[278px] text-sm font-light text-left text-black">
        Combination Data products
      </p>
      <div className="w-[248px] h-10">
        <div className="w-[248px] h-10 absolute left-[518.5px] top-[593.5px] bg-white border border-[#edebfe]"></div>
        <p className="w-[168px] absolute left-[569px] top-[608px] text-xs font-light text-left text-black">
          Create new data product
        </p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 absolute left-[532px] top-[602px]"
          preserveAspectRatio="none"
        >
          <path d="M12 12H7.5Z" fill="#1E1B19"></path>
          <path
            d="M12 7.5V12M12 12V16.5M12 12H16.5M12 12H7.5"
            stroke="#1E1B19"
            strokeWidth="0.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <rect
            x="0.375"
            y="0.375"
            width="23.25"
            height="23.25"
            rx="11.625"
            stroke="#1E1B19"
            strokeWidth="0.75"
          ></rect>
        </svg>
      </div>
      <div className="flex justify-start items-center absolute left-[815px] top-[911px] overflow-hidden gap-6 pr-4 bg-gray-100">
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 px-4 py-3 bg-gray-200">
          <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">
            Legend
          </p>
        </div>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1.5 px-2">
          <div className="flex-grow-0 flex-shrink-0 w-5 h-5">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[7.61px] top-[-0.39px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx="10" cy="10" r="10" fill="#F27A75"></circle>
            </svg>
            <div className="flex flex-col justify-center items-center w-[19px] h-[18px] absolute left-[8.68px] top-[0.68px] gap-[3.954232931137085px]">
              <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[3.954232931137085px] p-[1.9771164655685425px]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M8.17969 0.261597C6.71331 0.261597 5.27985 0.696431 4.06059 1.51111C2.84133 2.32579 1.89104 3.48373 1.32988 4.8385C0.768715 6.19326 0.62189 7.68401 0.907968 9.12222C1.19405 10.5604 1.90018 11.8815 2.93707 12.9184C3.97396 13.9553 5.29505 14.6614 6.73326 14.9475C8.17147 15.2336 9.66221 15.0868 11.017 14.5256C12.3717 13.9644 13.5297 13.0141 14.3444 11.7949C15.159 10.5756 15.5939 9.14217 15.5939 7.67578C15.5917 5.7101 14.8098 3.82556 13.4199 2.43561C12.0299 1.04566 10.1454 0.263814 8.17969 0.261597V0.261597ZM8.17969 14.4968C6.83062 14.4968 5.51184 14.0968 4.39012 13.3473C3.2684 12.5978 2.39413 11.5325 1.87786 10.2861C1.36159 9.0397 1.22651 7.66822 1.48971 6.34506C1.7529 5.02191 2.40254 3.80651 3.35648 2.85257C4.31042 1.89863 5.52582 1.24899 6.84897 0.985796C8.17213 0.722605 9.54361 0.857684 10.79 1.37395C12.0364 1.89022 13.1017 2.76449 13.8512 3.88621C14.6007 5.00793 15.0007 6.32671 15.0007 7.67578C14.9987 9.48421 14.2794 11.218 13.0006 12.4967C11.7219 13.7755 9.98812 14.4948 8.17969 14.4968ZM7.88313 8.26892V4.11697C7.88313 4.03832 7.91437 3.96289 7.96999 3.90727C8.02561 3.85165 8.10104 3.82041 8.17969 3.82041C8.25835 3.82041 8.33378 3.85165 8.3894 3.90727C8.44502 3.96289 8.47626 4.03832 8.47626 4.11697V8.26892C8.47626 8.34757 8.44502 8.42301 8.3894 8.47862C8.33378 8.53424 8.25835 8.56549 8.17969 8.56549C8.10104 8.56549 8.02561 8.53424 7.96999 8.47862C7.91437 8.42301 7.88313 8.34757 7.88313 8.26892ZM8.77283 10.938C8.77283 11.0553 8.73804 11.17 8.67287 11.2676C8.60769 11.3651 8.51506 11.4411 8.40668 11.486C8.29829 11.5309 8.17904 11.5426 8.06398 11.5198C7.94892 11.4969 7.84323 11.4404 7.76028 11.3574C7.67733 11.2745 7.62084 11.1688 7.59795 11.0537C7.57507 10.9387 7.58681 10.8194 7.63171 10.711C7.6766 10.6027 7.75262 10.51 7.85016 10.4449C7.94771 10.3797 8.06238 10.3449 8.17969 10.3449C8.33695 10.3451 8.48771 10.4076 8.5989 10.5188C8.7101 10.63 8.77265 10.7808 8.77283 10.938V10.938Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="0.2"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-black">
            Error
          </p>
        </div>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1.5 px-2">
          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 gap-[5.05293607711792px]">
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[5.05293607711792px] px-[4.042348861694336px] py-[2.52646803855896px]">
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M0.0423428 13.7897C0.0423392 13.8404 0.0525417 13.8905 0.0723402 13.9372C0.0921386 13.9838 0.121127 14.026 0.157579 14.0612L5.45969 19.3633C5.46076 19.3643 5.46205 19.3651 5.46316 19.3661C5.47964 19.3824 5.49757 19.3971 5.51673 19.4101C5.52316 19.4144 5.53033 19.4172 5.53695 19.421C5.55136 19.43 5.56637 19.438 5.58187 19.445C5.59029 19.4485 5.59931 19.4502 5.60796 19.4531C5.62255 19.4586 5.63748 19.4631 5.65265 19.4667C5.67733 19.4717 5.70245 19.4742 5.72764 19.4742L14.8237 19.4742C15.1251 19.4739 15.4141 19.354 15.6272 19.1409C15.8403 18.9277 15.9602 18.6388 15.9606 18.3373L15.9606 1.66264C15.9602 1.36122 15.8403 1.07224 15.6272 0.859106C15.4141 0.645968 15.1251 0.526076 14.8237 0.525731L1.17999 0.52573C0.878573 0.526075 0.589596 0.645967 0.376458 0.859104C0.163321 1.07224 0.0434288 1.36122 0.043084 1.66264L0.043083 13.7821C0.0430365 13.7847 0.0423428 13.7871 0.0423428 13.7897ZM5.34867 18.1804L1.33696 14.1687L5.34867 14.1687L5.34867 18.1804ZM1.17999 1.28367L14.8237 1.28367C14.9241 1.28379 15.0205 1.32375 15.0915 1.3948C15.1626 1.46584 15.2025 1.56217 15.2026 1.66264L15.2026 18.3373C15.2025 18.4378 15.1626 18.5341 15.0915 18.6052C15.0205 18.6762 14.9241 18.7162 14.8237 18.7163L6.10661 18.7163L6.10661 13.7897C6.1066 13.6892 6.06667 13.5928 5.9956 13.5217C5.92453 13.4507 5.82814 13.4107 5.72764 13.4107L0.801023 13.4107L0.801024 1.66264C0.801139 1.56217 0.841103 1.46584 0.912149 1.3948C0.983195 1.32375 1.07952 1.28379 1.17999 1.28367ZM4.59073 9.24205C4.59073 9.14154 4.63066 9.04515 4.70173 8.97408C4.7728 8.90301 4.86919 8.86308 4.9697 8.86308L11.0332 8.86308C11.1337 8.86308 11.2301 8.903 11.3012 8.97407C11.3723 9.04514 11.4122 9.14154 11.4122 9.24205C11.4122 9.34256 11.3723 9.43895 11.3012 9.51002C11.2301 9.58109 11.1337 9.62102 11.0332 9.62102L4.9697 9.62102C4.86919 9.62101 4.7728 9.58108 4.70173 9.51001C4.63066 9.43894 4.59073 9.34255 4.59073 9.24205V9.24205ZM4.59073 6.21028C4.59073 6.10978 4.63066 6.01339 4.70173 5.94232C4.7728 5.87125 4.86919 5.83132 4.9697 5.83131L11.0332 5.83131C11.1337 5.83131 11.2301 5.87124 11.3012 5.94231C11.3723 6.01338 11.4122 6.10978 11.4122 6.21028C11.4122 6.31079 11.3723 6.40719 11.3012 6.47826C11.2301 6.54933 11.1337 6.58925 11.0332 6.58925L4.9697 6.58925C4.86919 6.58925 4.7728 6.54932 4.70173 6.47825C4.63066 6.40718 4.59073 6.31079 4.59073 6.21028Z"
                  fill="black"
                ></path>
              </svg>
            </div>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-black">
            Draft
          </p>
        </div>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1.5 px-2">
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-5 h-5"
            preserveAspectRatio="none"
          >
            <circle cx="10.0029" cy="10" r="10" fill="#4EBF8D"></circle>
            <g clipPath="url(#clip0_562_473874)">
              <path
                d="M10.0029 7.75003C9.55791 7.75003 9.1229 7.88199 8.75289 8.12922C8.38287 8.37646 8.09449 8.72786 7.92419 9.13899C7.75389 9.55013 7.70933 10.0025 7.79615 10.439C7.88297 10.8754 8.09726 11.2764 8.41193 11.591C8.7266 11.9057 9.12751 12.12 9.56397 12.2068C10.0004 12.2936 10.4528 12.2491 10.864 12.0788C11.2751 11.9085 11.6265 11.6201 11.8737 11.2501C12.121 10.8801 12.2529 10.445 12.2529 10C12.2522 9.4035 12.015 8.83159 11.5932 8.40978C11.1714 7.98797 10.5994 7.7507 10.0029 7.75003ZM10.0029 11.75C9.6568 11.75 9.31846 11.6474 9.03067 11.4551C8.74288 11.2628 8.51858 10.9895 8.38613 10.6697C8.25368 10.35 8.21902 9.99809 8.28654 9.65862C8.35407 9.31915 8.52074 9.00733 8.76548 8.76259C9.01022 8.51785 9.32204 8.35118 9.66151 8.28365C10.001 8.21613 10.3528 8.25079 10.6726 8.38324C10.9924 8.51569 11.2657 8.74 11.458 9.02778C11.6503 9.31557 11.7529 9.65391 11.7529 10C11.7524 10.464 11.5679 10.9088 11.2398 11.2369C10.9117 11.565 10.4669 11.7495 10.0029 11.75ZM6.08678 8.34582C5.75726 9.12487 5.66792 9.98458 5.83021 10.8147C5.9925 11.6449 6.39902 12.4077 6.99767 13.0052C7.02088 13.0285 7.0393 13.056 7.05186 13.0863C7.06443 13.1167 7.07089 13.1492 7.07089 13.182C7.0709 13.2148 7.06443 13.2473 7.05187 13.2777C7.03931 13.308 7.0209 13.3356 6.99768 13.3588C6.97447 13.382 6.94691 13.4004 6.91658 13.413C6.88626 13.4255 6.85375 13.432 6.82092 13.432C6.78809 13.432 6.75559 13.4255 6.72526 13.413C6.69493 13.4004 6.66737 13.382 6.64415 13.3588C6.20263 12.918 5.85236 12.3944 5.61337 11.8181C5.37438 11.2417 5.25136 10.6239 5.25136 10C5.25136 9.37611 5.37438 8.75832 5.61337 8.18198C5.85236 7.60565 6.20263 7.0821 6.64415 6.64127C6.69104 6.59439 6.75462 6.56805 6.82092 6.56805C6.88722 6.56806 6.9508 6.5944 6.99768 6.64128C7.04456 6.68816 7.0709 6.75175 7.07089 6.81805C7.07089 6.88435 7.04455 6.94793 6.99767 6.99481C6.6095 7.38198 6.30015 7.8408 6.08678 8.34582ZM14.7529 10C14.7537 10.6239 14.6311 11.2418 14.3924 11.8182C14.1536 12.3946 13.8034 12.9182 13.3617 13.3588C13.3385 13.382 13.3109 13.4004 13.2806 13.413C13.2503 13.4255 13.2177 13.432 13.1849 13.432C13.1521 13.432 13.1196 13.4255 13.0893 13.413C13.0589 13.4004 13.0314 13.382 13.0082 13.3588C12.9849 13.3356 12.9665 13.308 12.954 13.2777C12.9414 13.2473 12.9349 13.2148 12.9349 13.182C12.9349 13.1492 12.9414 13.1167 12.954 13.0863C12.9665 13.056 12.985 13.0285 13.0082 13.0052C13.4033 12.6108 13.7167 12.1424 13.9306 11.6267C14.1444 11.1111 14.2545 10.5583 14.2545 10C14.2545 9.44177 14.1444 8.88899 13.9306 8.37332C13.7167 7.85765 13.4033 7.38921 13.0082 6.99481C12.985 6.9716 12.9665 6.94404 12.954 6.91371C12.9414 6.88338 12.9349 6.85088 12.9349 6.81805C12.9349 6.78522 12.9414 6.75271 12.954 6.72238C12.9665 6.69205 12.9849 6.66449 13.0082 6.64128C13.0314 6.61807 13.0589 6.59965 13.0893 6.58709C13.1196 6.57452 13.1521 6.56806 13.1849 6.56805C13.2177 6.56805 13.2503 6.57452 13.2806 6.58708C13.3109 6.59964 13.3385 6.61805 13.3617 6.64127C13.8034 7.08189 14.1536 7.60545 14.3924 8.18185C14.6311 8.75825 14.7537 9.37614 14.7529 10ZM5.22991 14.773C5.25312 14.7962 5.27154 14.8238 5.2841 14.8541C5.29667 14.8844 5.30313 14.9169 5.30313 14.9498C5.30314 14.9826 5.29667 15.0151 5.28411 15.0454C5.27155 15.0758 5.25314 15.1033 5.22992 15.1265C5.20671 15.1498 5.17915 15.1682 5.14882 15.1807C5.1185 15.1933 5.08599 15.1998 5.05316 15.1998C5.02033 15.1998 4.98783 15.1933 4.9575 15.1807C4.92717 15.1682 4.89961 15.1498 4.87639 15.1266C4.20247 14.4537 3.66782 13.6546 3.30304 12.7749C2.93825 11.8953 2.75049 10.9523 2.75049 10C2.75049 9.04773 2.93825 8.10477 3.30304 7.22511C3.66782 6.34545 4.20247 5.54634 4.87639 4.8735C4.92328 4.82663 4.98686 4.80029 5.05316 4.80029C5.11946 4.8003 5.18304 4.82664 5.22992 4.87352C5.2768 4.9204 5.30314 4.98399 5.30313 5.05029C5.30313 5.11659 5.27679 5.18017 5.22991 5.22705C4.60241 5.85345 4.10459 6.59744 3.76493 7.41645C3.42527 8.23545 3.25044 9.11339 3.25044 10C3.25044 10.8867 3.42527 11.7646 3.76493 12.5836C4.10459 13.4026 4.60241 14.1466 5.22991 14.773ZM17.2529 10C17.2541 10.9523 17.0671 11.8954 16.7027 12.7752C16.3383 13.6549 15.8036 14.454 15.1294 15.1266C15.0826 15.1734 15.019 15.1998 14.9527 15.1998C14.8864 15.1998 14.8228 15.1734 14.7759 15.1265C14.729 15.0797 14.7027 15.0161 14.7027 14.9498C14.7027 14.8835 14.729 14.8199 14.7759 14.773C15.4034 14.1466 15.9012 13.4026 16.2409 12.5836C16.5806 11.7646 16.7554 10.8867 16.7554 10C16.7554 9.11339 16.5806 8.23545 16.2409 7.41645C15.9012 6.59744 15.4034 5.85345 14.7759 5.22705C14.729 5.18017 14.7027 5.11659 14.7027 5.05029C14.7027 4.98399 14.729 4.9204 14.7759 4.87352C14.8228 4.82664 14.8864 4.8003 14.9527 4.80029C15.019 4.80029 15.0826 4.82663 15.1294 4.8735C15.8036 5.54603 16.3383 6.34513 16.7027 7.2249C17.0671 8.10467 17.2541 9.04777 17.2529 10Z"
                fill="white"
                stroke="white"
                strokeWidth="0.2"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_562_473874">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(2.00293 2)"
                ></rect>
              </clipPath>
            </defs>
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-black">
            Live
          </p>
        </div>
        <svg
          width="2"
          height="18"
          viewBox="0 0 2 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0"
          preserveAspectRatio="none"
        >
          <line x1="0.50293" x2="0.50293" y2="18" stroke="black"></line>
        </svg>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1.5 px-2">
          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 gap-[4.948185920715332px]">
            <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[4.948185920715332px] px-[2.474092960357666px] py-[3.4637298583984375px]">
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M16.4352 11.6218L16.435 8.24674C16.4367 7.61297 16.3127 6.98515 16.0702 6.39963C15.8276 5.81411 15.4713 5.28251 15.022 4.83559L12.1353 1.94885H14.9505C15.0489 1.94885 15.1433 1.90975 15.2129 1.84015C15.2825 1.77056 15.3216 1.67616 15.3216 1.57774C15.3216 1.47931 15.2825 1.38492 15.2129 1.31532C15.1433 1.24572 15.0489 1.20662 14.9505 1.20662H11.2394C11.2149 1.20668 11.1906 1.20913 11.1666 1.21396C11.1559 1.2161 11.1459 1.22013 11.1355 1.22318C11.1226 1.22643 11.1099 1.23038 11.0974 1.23503C11.0854 1.24053 11.0737 1.24667 11.0624 1.25342C11.0528 1.25867 11.0427 1.26293 11.0335 1.2691C10.9928 1.29632 10.9579 1.33128 10.9307 1.37197C10.9247 1.38097 10.9206 1.39075 10.9154 1.40014C10.9008 1.42255 10.8905 1.44744 10.8849 1.47359C10.8818 1.48411 10.8778 1.49416 10.8756 1.50505C10.8707 1.52898 10.8683 1.55332 10.8682 1.57774V5.28887C10.8682 5.3873 10.9073 5.48169 10.9769 5.55129C11.0465 5.62089 11.1409 5.65999 11.2394 5.65999C11.3378 5.65999 11.4322 5.62089 11.5018 5.55129C11.5714 5.48169 11.6105 5.3873 11.6105 5.28887V2.47363L14.4972 5.36036C14.8774 5.73853 15.1789 6.18836 15.3841 6.6838C15.5893 7.17924 15.6943 7.71047 15.6928 8.24673L15.693 11.6218C14.9437 11.7163 14.2586 12.0927 13.7771 12.6745C13.2955 13.2562 13.0538 13.9997 13.1011 14.7534C13.1484 15.5071 13.4812 16.2145 14.0317 16.7315C14.5822 17.2485 15.309 17.5363 16.0642 17.5363C16.8194 17.5363 17.5462 17.2485 18.0967 16.7314C18.6472 16.2144 18.9799 15.507 19.0272 14.7533C19.0745 13.9996 18.8327 13.2562 18.3512 12.6744C17.8697 12.0926 17.1845 11.7162 16.4352 11.6218H16.4352ZM16.0641 16.7934C15.6237 16.7934 15.1932 16.6628 14.827 16.4181C14.4609 16.1735 14.1755 15.8257 14.0069 15.4188C13.8384 15.012 13.7943 14.5643 13.8802 14.1323C13.9661 13.7004 14.1782 13.3036 14.4896 12.9922C14.801 12.6808 15.1978 12.4687 15.6297 12.3828C16.0616 12.2969 16.5094 12.341 16.9162 12.5095C17.3231 12.6781 17.6709 12.9635 17.9155 13.3296C18.1602 13.6958 18.2908 14.1263 18.2908 14.5667C18.2901 15.1571 18.0553 15.723 17.6379 16.1405C17.2204 16.5579 16.6545 16.7927 16.0641 16.7934V16.7934ZM8.27072 12.34C8.17229 12.34 8.0779 12.3791 8.00831 12.4487C7.93871 12.5183 7.89961 12.6127 7.8996 12.7112V15.5264L5.01287 12.6397C4.63265 12.2615 4.3312 11.8117 4.12598 11.3162C3.92075 10.8208 3.81582 10.2896 3.81726 9.7533L3.81708 6.37819C4.56636 6.28377 5.2515 5.90736 5.73303 5.32558C6.21455 4.74379 6.45626 4.00037 6.40896 3.24665C6.36165 2.49292 6.02889 1.78555 5.4784 1.26854C4.92791 0.751527 4.20108 0.463734 3.44588 0.463745C2.69067 0.463756 1.96385 0.751572 1.41338 1.2686C0.862908 1.78563 0.530162 2.49301 0.48288 3.24673C0.435597 4.00046 0.677331 4.74388 1.15887 5.32565C1.64041 5.90742 2.32557 6.28381 3.07485 6.3782L3.07504 9.75329C3.07333 10.3871 3.19734 11.0149 3.43989 11.6004C3.68244 12.1859 4.03872 12.7175 4.4881 13.1644L7.37483 16.0512H4.55958C4.46115 16.0512 4.36676 16.0903 4.29716 16.1599C4.22756 16.2295 4.18847 16.3239 4.18847 16.4223C4.18847 16.5207 4.22756 16.6151 4.29716 16.6847C4.36676 16.7543 4.46115 16.7934 4.55958 16.7934H8.27072C8.29512 16.7933 8.31946 16.7909 8.34338 16.7861C8.3543 16.7839 8.36436 16.7798 8.37487 16.7768C8.40087 16.7712 8.42564 16.7609 8.44794 16.7465C8.45745 16.7412 8.46737 16.737 8.47653 16.7309C8.51724 16.7037 8.55219 16.6688 8.57941 16.628C8.58539 16.6191 8.58946 16.6094 8.59458 16.6C8.60153 16.5884 8.60783 16.5765 8.61347 16.5642C8.61802 16.5519 8.62191 16.5393 8.62512 16.5266C8.62824 16.516 8.63232 16.5059 8.63449 16.495C8.63933 16.471 8.64179 16.4467 8.64183 16.4223V12.7112C8.64183 12.6127 8.60273 12.5183 8.53313 12.4487C8.46353 12.3791 8.36914 12.34 8.27072 12.34ZM1.21928 3.43331C1.21928 2.99291 1.34988 2.5624 1.59455 2.19623C1.83922 1.83005 2.18698 1.54465 2.59385 1.37612C3.00072 1.20759 3.44844 1.16349 3.88037 1.24941C4.3123 1.33532 4.70906 1.54739 5.02047 1.8588C5.33188 2.17021 5.54395 2.56697 5.62986 2.9989C5.71578 3.43084 5.67169 3.87855 5.50315 4.28542C5.33462 4.69229 5.04922 5.04005 4.68304 5.28472C4.31687 5.5294 3.88636 5.65999 3.44597 5.65999C2.85562 5.65931 2.28965 5.4245 1.87221 5.00706C1.45477 4.58962 1.21996 4.02365 1.21928 3.43331V3.43331Z"
                  fill="black"
                ></path>
              </svg>
            </div>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-black">
            Pipeline/connector
          </p>
        </div>
      </div>
      <svg
        width="249"
        height="12"
        viewBox="0 0 249 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[273px] top-[446px]"
        preserveAspectRatio="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M243 12C246.314 12 249 9.31371 249 6C249 2.68629 246.314 0 243 0C240.027 0 237.559 2.16229 237.083 5H0V7H237.083C237.559 9.83771 240.027 12 243 12Z"
          fill="#4EBF8D"
        ></path>
      </svg>
      <svg
        width="249"
        height="12"
        viewBox="0 0 249 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[273px] top-[608px]"
        preserveAspectRatio="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M243 12C246.314 12 249 9.31371 249 6C249 2.68629 246.314 0 243 0C240.027 0 237.559 2.16229 237.083 5H0V7H237.083C237.559 9.83771 240.027 12 243 12Z"
          fill="#B1AAA1"
        ></path>
      </svg>
      <svg
        width="249"
        height="12"
        viewBox="0 0 249 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[273px] top-[336px]"
        preserveAspectRatio="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M243 12C246.314 12 249 9.31371 249 6C249 2.68629 246.314 0 243 0C240.027 0 237.559 2.16229 237.083 5H0V7H237.083C237.559 9.83771 240.027 12 243 12Z"
          fill="#4EBF8D"
        ></path>
      </svg>
      <svg
        width="249"
        height="12"
        viewBox="0 0 249 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[273px] top-[239px]"
        preserveAspectRatio="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M243 12C246.314 12 249 9.31371 249 6C249 2.68629 246.314 0 243 0C240.027 0 237.559 2.16229 237.083 5H0V7H237.083C237.559 9.83771 240.027 12 243 12Z"
          fill="#F27A75"
        ></path>
      </svg>
      <div className="w-[16.94px] h-[16.94px]">
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[380.66px] top-[443.66px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <circle cx="8.46774" cy="8.46774" r="8.46774" fill="#4EBF8D"></circle>
        </svg>
        <div className="flex flex-col justify-center items-center w-[15px] h-[15px] absolute left-[381.91px] top-[444.97px] gap-[2.960381269454956px]">
          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[2.960381269454956px] px-[1.480190634727478px] py-[2.0722668170928955px]">
            <svg
              width="13"
              height="11"
              viewBox="0 0 13 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="none"
            >
              <path
                d="M10.4028 7.03731L10.4027 5.01807C10.4038 4.6389 10.3296 4.2633 10.1844 3.91299C10.0393 3.56269 9.82618 3.24464 9.55734 2.97726L7.83028 1.2502H9.51457C9.57346 1.2502 9.62993 1.2268 9.67157 1.18517C9.71321 1.14353 9.7366 1.08705 9.7366 1.02817C9.7366 0.969283 9.71321 0.912809 9.67157 0.87117C9.62993 0.829532 9.57346 0.80614 9.51457 0.80614H7.29428C7.27968 0.806172 7.26511 0.807643 7.25078 0.81053C7.24433 0.811811 7.2384 0.814223 7.23216 0.816046C7.22443 0.817989 7.21682 0.820355 7.20934 0.823133C7.20218 0.826425 7.19519 0.830099 7.18842 0.834137C7.18264 0.837281 7.17665 0.839828 7.17113 0.843521C7.14678 0.859805 7.12588 0.880717 7.1096 0.905066C7.10602 0.91045 7.10356 0.9163 7.10047 0.921918C7.09174 0.935322 7.08556 0.950217 7.08223 0.965858C7.08036 0.972153 7.07795 0.97817 7.07664 0.984681C7.07375 0.998997 7.07228 1.01356 7.07226 1.02817V3.24845C7.07226 3.30734 7.09565 3.36381 7.13729 3.40545C7.17893 3.44709 7.2354 3.47048 7.29428 3.47048C7.35317 3.47048 7.40964 3.44709 7.45128 3.40545C7.49292 3.36381 7.51631 3.30734 7.51631 3.24845V1.56416L9.24338 3.29122C9.47085 3.51748 9.6512 3.78659 9.77398 4.08301C9.89676 4.37942 9.95954 4.69724 9.95868 5.01807L9.95879 7.03732C9.51051 7.0938 9.10061 7.319 8.81253 7.66707C8.52444 8.01514 8.37983 8.45991 8.40813 8.91084C8.43643 9.36178 8.63552 9.78498 8.96486 10.0943C9.29421 10.4036 9.72905 10.5758 10.1809 10.5758C10.6327 10.5758 11.0675 10.4036 11.3969 10.0943C11.7262 9.78493 11.9253 9.36173 11.9536 8.91079C11.9819 8.45985 11.8372 8.01509 11.5491 7.66703C11.261 7.31897 10.8511 7.09378 10.4028 7.03731H10.4028ZM10.1808 10.1313C9.91734 10.1313 9.65978 10.0532 9.4407 9.90683C9.22163 9.76045 9.05088 9.55239 8.95005 9.30897C8.84922 9.06555 8.82284 8.79769 8.87424 8.53927C8.92565 8.28086 9.05252 8.04349 9.23883 7.85718C9.42514 7.67087 9.66251 7.544 9.92092 7.49259C10.1793 7.44119 10.4472 7.46757 10.6906 7.5684C10.934 7.66923 11.1421 7.83998 11.2885 8.05905C11.4349 8.27813 11.513 8.53569 11.513 8.79917C11.5126 9.15236 11.3721 9.49097 11.1224 9.74071C10.8726 9.99045 10.534 10.1309 10.1808 10.1313V10.1313ZM5.51822 7.467C5.45933 7.467 5.40286 7.49039 5.36122 7.53203C5.31959 7.57367 5.29619 7.63014 5.29619 7.68903V9.37332L3.56913 7.64626C3.34165 7.42001 3.1613 7.15089 3.03852 6.85448C2.91574 6.55806 2.85296 6.24024 2.85382 5.91941L2.85371 3.90016C3.30199 3.84368 3.71189 3.61848 3.99998 3.27041C4.28806 2.92234 4.43267 2.47757 4.40437 2.02664C4.37607 1.5757 4.17698 1.1525 3.84764 0.843184C3.5183 0.533868 3.08345 0.361688 2.63163 0.361694C2.17981 0.361701 1.74497 0.533894 1.41564 0.843221C1.0863 1.15255 0.887229 1.57575 0.858941 2.02669C0.830653 2.47763 0.975276 2.92239 1.26337 3.27045C1.55147 3.61851 1.96138 3.8437 2.40966 3.90017L2.40977 5.91941C2.40874 6.29858 2.48294 6.67419 2.62805 7.02449C2.77316 7.3748 2.98631 7.69284 3.25517 7.96022L4.98223 9.68728H3.29793C3.23905 9.68728 3.18257 9.71067 3.14093 9.75231C3.0993 9.79395 3.0759 9.85043 3.0759 9.90931C3.0759 9.9682 3.0993 10.0247 3.14093 10.0663C3.18257 10.1079 3.23905 10.1313 3.29793 10.1313H5.51822C5.53282 10.1313 5.54738 10.1298 5.56169 10.127C5.56822 10.1257 5.57424 10.1232 5.58053 10.1214C5.59609 10.1181 5.61091 10.1119 5.62425 10.1033C5.62994 10.1001 5.63587 10.0976 5.64135 10.094C5.66571 10.0777 5.68662 10.0568 5.7029 10.0324C5.70648 10.0271 5.70892 10.0212 5.71198 10.0156C5.71613 10.0087 5.71991 10.0016 5.72328 9.99422C5.726 9.98685 5.72833 9.97934 5.73025 9.97172C5.73212 9.9654 5.73456 9.95934 5.73586 9.9528C5.73875 9.93848 5.74022 9.92392 5.74025 9.90931V7.68903C5.74024 7.63014 5.71685 7.57367 5.67521 7.53203C5.63358 7.49039 5.5771 7.467 5.51822 7.467ZM1.29951 2.13831C1.29951 1.87483 1.37764 1.61727 1.52402 1.3982C1.67041 1.17912 1.87846 1.00837 2.12188 0.907545C2.36531 0.806716 2.63316 0.780335 2.89158 0.831737C3.14999 0.883139 3.38736 1.01002 3.57367 1.19632C3.75998 1.38263 3.88686 1.62 3.93826 1.87842C3.98966 2.13683 3.96328 2.40469 3.86245 2.64811C3.76162 2.89153 3.59087 3.09959 3.3718 3.24597C3.15272 3.39235 2.89516 3.47048 2.63168 3.47048C2.27849 3.47008 1.93989 3.3296 1.69014 3.07985C1.4404 2.83011 1.29992 2.4915 1.29951 2.13831V2.13831Z"
                fill="#F6F5F2"
                stroke="white"
                strokeWidth="0.5"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="w-[16.94px] h-[16.94px]">
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[380.66px] top-[334.66px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <circle cx="8.46774" cy="8.46774" r="8.46774" fill="#4EBF8D"></circle>
        </svg>
        <div className="flex flex-col justify-center items-center w-[15px] h-[15px] absolute left-[381.91px] top-[335.97px] gap-[2.960381269454956px]">
          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[2.960381269454956px] px-[1.480190634727478px] py-[2.0722668170928955px]">
            <svg
              width="13"
              height="11"
              viewBox="0 0 13 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="none"
            >
              <path
                d="M10.4028 7.03731L10.4027 5.01807C10.4038 4.6389 10.3296 4.2633 10.1844 3.91299C10.0393 3.56269 9.82618 3.24464 9.55734 2.97726L7.83028 1.2502H9.51457C9.57346 1.2502 9.62993 1.2268 9.67157 1.18517C9.71321 1.14353 9.7366 1.08705 9.7366 1.02817C9.7366 0.969283 9.71321 0.912809 9.67157 0.87117C9.62993 0.829532 9.57346 0.80614 9.51457 0.80614H7.29428C7.27968 0.806172 7.26511 0.807643 7.25078 0.81053C7.24433 0.811811 7.2384 0.814223 7.23216 0.816046C7.22443 0.817989 7.21682 0.820355 7.20934 0.823133C7.20218 0.826425 7.19519 0.830099 7.18842 0.834137C7.18264 0.837281 7.17665 0.839828 7.17113 0.843521C7.14678 0.859805 7.12588 0.880717 7.1096 0.905066C7.10602 0.91045 7.10356 0.9163 7.10047 0.921918C7.09174 0.935322 7.08556 0.950217 7.08223 0.965858C7.08036 0.972153 7.07795 0.97817 7.07664 0.984681C7.07375 0.998997 7.07228 1.01356 7.07226 1.02817V3.24845C7.07226 3.30734 7.09565 3.36381 7.13729 3.40545C7.17893 3.44709 7.2354 3.47048 7.29428 3.47048C7.35317 3.47048 7.40964 3.44709 7.45128 3.40545C7.49292 3.36381 7.51631 3.30734 7.51631 3.24845V1.56416L9.24338 3.29122C9.47085 3.51748 9.6512 3.78659 9.77398 4.08301C9.89676 4.37942 9.95954 4.69724 9.95868 5.01807L9.95879 7.03732C9.51051 7.0938 9.10061 7.319 8.81253 7.66707C8.52444 8.01514 8.37983 8.45991 8.40813 8.91084C8.43643 9.36178 8.63552 9.78498 8.96486 10.0943C9.29421 10.4036 9.72905 10.5758 10.1809 10.5758C10.6327 10.5758 11.0675 10.4036 11.3969 10.0943C11.7262 9.78493 11.9253 9.36173 11.9536 8.91079C11.9819 8.45985 11.8372 8.01509 11.5491 7.66703C11.261 7.31897 10.8511 7.09378 10.4028 7.03731H10.4028ZM10.1808 10.1313C9.91734 10.1313 9.65978 10.0532 9.4407 9.90683C9.22163 9.76045 9.05088 9.55239 8.95005 9.30897C8.84922 9.06555 8.82284 8.79769 8.87424 8.53927C8.92565 8.28086 9.05252 8.04349 9.23883 7.85718C9.42514 7.67087 9.66251 7.544 9.92092 7.49259C10.1793 7.44119 10.4472 7.46757 10.6906 7.5684C10.934 7.66923 11.1421 7.83998 11.2885 8.05905C11.4349 8.27813 11.513 8.53569 11.513 8.79917C11.5126 9.15236 11.3721 9.49097 11.1224 9.74071C10.8726 9.99045 10.534 10.1309 10.1808 10.1313V10.1313ZM5.51822 7.467C5.45933 7.467 5.40286 7.49039 5.36122 7.53203C5.31959 7.57367 5.29619 7.63014 5.29619 7.68903V9.37332L3.56913 7.64626C3.34165 7.42001 3.1613 7.15089 3.03852 6.85448C2.91574 6.55806 2.85296 6.24024 2.85382 5.91941L2.85371 3.90016C3.30199 3.84368 3.71189 3.61848 3.99998 3.27041C4.28806 2.92234 4.43267 2.47757 4.40437 2.02664C4.37607 1.5757 4.17698 1.1525 3.84764 0.843184C3.5183 0.533868 3.08345 0.361688 2.63163 0.361694C2.17981 0.361701 1.74497 0.533894 1.41564 0.843221C1.0863 1.15255 0.887229 1.57575 0.858941 2.02669C0.830653 2.47763 0.975276 2.92239 1.26337 3.27045C1.55147 3.61851 1.96138 3.8437 2.40966 3.90017L2.40977 5.91941C2.40874 6.29858 2.48294 6.67419 2.62805 7.02449C2.77316 7.3748 2.98631 7.69284 3.25517 7.96022L4.98223 9.68728H3.29793C3.23905 9.68728 3.18257 9.71067 3.14093 9.75231C3.0993 9.79395 3.0759 9.85043 3.0759 9.90931C3.0759 9.9682 3.0993 10.0247 3.14093 10.0663C3.18257 10.1079 3.23905 10.1313 3.29793 10.1313H5.51822C5.53282 10.1313 5.54738 10.1298 5.56169 10.127C5.56822 10.1257 5.57424 10.1232 5.58053 10.1214C5.59609 10.1181 5.61091 10.1119 5.62425 10.1033C5.62994 10.1001 5.63587 10.0976 5.64135 10.094C5.66571 10.0777 5.68662 10.0568 5.7029 10.0324C5.70648 10.0271 5.70892 10.0212 5.71198 10.0156C5.71613 10.0087 5.71991 10.0016 5.72328 9.99422C5.726 9.98685 5.72833 9.97934 5.73025 9.97172C5.73212 9.9654 5.73456 9.95934 5.73586 9.9528C5.73875 9.93848 5.74022 9.92392 5.74025 9.90931V7.68903C5.74024 7.63014 5.71685 7.57367 5.67521 7.53203C5.63358 7.49039 5.5771 7.467 5.51822 7.467ZM1.29951 2.13831C1.29951 1.87483 1.37764 1.61727 1.52402 1.3982C1.67041 1.17912 1.87846 1.00837 2.12188 0.907545C2.36531 0.806716 2.63316 0.780335 2.89158 0.831737C3.14999 0.883139 3.38736 1.01002 3.57367 1.19632C3.75998 1.38263 3.88686 1.62 3.93826 1.87842C3.98966 2.13683 3.96328 2.40469 3.86245 2.64811C3.76162 2.89153 3.59087 3.09959 3.3718 3.24597C3.15272 3.39235 2.89516 3.47048 2.63168 3.47048C2.27849 3.47008 1.93989 3.3296 1.69014 3.07985C1.4404 2.83011 1.29992 2.4915 1.29951 2.13831V2.13831Z"
                fill="#F6F5F2"
                stroke="white"
                strokeWidth="0.5"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="w-[16.94px] h-[16.94px]">
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[379.66px] top-[237.66px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <circle cx="8.46774" cy="8.46774" r="8.46774" fill="#F27A75"></circle>
        </svg>
        <div className="flex flex-col justify-center items-center w-[15px] h-[15px] absolute left-[380.91px] top-[238.97px] gap-[2.960381269454956px]">
          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[2.960381269454956px] px-[1.480190634727478px] py-[2.0722668170928955px]">
            <svg
              width="13"
              height="11"
              viewBox="0 0 13 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="none"
            >
              <path
                d="M10.4028 7.03743L10.4027 5.01819C10.4038 4.63903 10.3296 4.26342 10.1844 3.91312C10.0393 3.56281 9.82618 3.24477 9.55734 2.97739L7.83028 1.25032H9.51457C9.57346 1.25032 9.62993 1.22693 9.67157 1.18529C9.71321 1.14365 9.7366 1.08718 9.7366 1.02829C9.7366 0.969405 9.71321 0.912931 9.67157 0.871292C9.62993 0.829654 9.57346 0.806262 9.51457 0.806262H7.29428C7.27968 0.806294 7.26511 0.807765 7.25078 0.810652C7.24433 0.811933 7.2384 0.814345 7.23216 0.816168C7.22443 0.818111 7.21682 0.820477 7.20934 0.823255C7.20218 0.826547 7.19519 0.830221 7.18842 0.834259C7.18264 0.837403 7.17665 0.839951 7.17113 0.843643C7.14678 0.859927 7.12588 0.880839 7.1096 0.905188C7.10602 0.910572 7.10356 0.916422 7.10047 0.92204C7.09174 0.935444 7.08556 0.950339 7.08223 0.96598C7.08036 0.972275 7.07795 0.978292 7.07664 0.984803C7.07375 0.999119 7.07228 1.01369 7.07226 1.02829V3.24858C7.07226 3.30746 7.09565 3.36394 7.13729 3.40557C7.17893 3.44721 7.2354 3.4706 7.29428 3.4706C7.35317 3.4706 7.40964 3.44721 7.45128 3.40557C7.49292 3.36394 7.51631 3.30746 7.51631 3.24858V1.56428L9.24338 3.29134C9.47085 3.5176 9.6512 3.78672 9.77398 4.08313C9.89676 4.37954 9.95954 4.69736 9.95868 5.01819L9.95879 7.03744C9.51051 7.09393 9.10061 7.31912 8.81253 7.66719C8.52444 8.01526 8.37983 8.46003 8.40813 8.91097C8.43643 9.3619 8.63552 9.7851 8.96486 10.0944C9.29421 10.4037 9.72905 10.5759 10.1809 10.5759C10.6327 10.5759 11.0675 10.4037 11.3969 10.0944C11.7262 9.78506 11.9253 9.36185 11.9536 8.91091C11.9819 8.45998 11.8372 8.01521 11.5491 7.66715C11.261 7.31909 10.8511 7.09391 10.4028 7.03743H10.4028ZM10.1808 10.1315C9.91734 10.1315 9.65978 10.0533 9.4407 9.90695C9.22163 9.76057 9.05088 9.55251 8.95005 9.30909C8.84922 9.06567 8.82284 8.79781 8.87424 8.5394C8.92565 8.28098 9.05252 8.04361 9.23883 7.8573C9.42514 7.671 9.66251 7.54412 9.92092 7.49272C10.1793 7.44131 10.4472 7.4677 10.6906 7.56852C10.934 7.66935 11.1421 7.8401 11.2885 8.05918C11.4349 8.27825 11.513 8.53581 11.513 8.79929C11.5126 9.15248 11.3721 9.49109 11.1224 9.74083C10.8726 9.99057 10.534 10.1311 10.1808 10.1315V10.1315ZM5.51822 7.46712C5.45933 7.46712 5.40286 7.49052 5.36122 7.53215C5.31959 7.57379 5.29619 7.63026 5.29619 7.68915V9.37344L3.56913 7.64638C3.34165 7.42013 3.1613 7.15101 3.03852 6.8546C2.91574 6.55819 2.85296 6.24037 2.85382 5.91953L2.85371 3.90029C3.30199 3.8438 3.71189 3.6186 3.99998 3.27053C4.28806 2.92247 4.43267 2.47769 4.40437 2.02676C4.37607 1.57582 4.17698 1.15262 3.84764 0.843306C3.5183 0.53399 3.08345 0.36181 2.63163 0.361816C2.17981 0.361823 1.74497 0.534016 1.41564 0.843343C1.0863 1.15267 0.887229 1.57588 0.858941 2.02681C0.830653 2.47775 0.975276 2.92252 1.26337 3.27058C1.55147 3.61863 1.96138 3.84382 2.40966 3.90029L2.40977 5.91953C2.40874 6.2987 2.48294 6.67431 2.62805 7.02461C2.77316 7.37492 2.98631 7.69296 3.25517 7.96034L4.98223 9.6874H3.29793C3.23905 9.6874 3.18257 9.7108 3.14093 9.75244C3.0993 9.79407 3.0759 9.85055 3.0759 9.90943C3.0759 9.96832 3.0993 10.0248 3.14093 10.0664C3.18257 10.1081 3.23905 10.1315 3.29793 10.1315H5.51822C5.53282 10.1314 5.54738 10.13 5.56169 10.1271C5.56822 10.1258 5.57424 10.1233 5.58053 10.1215C5.59609 10.1182 5.61091 10.112 5.62425 10.1034C5.62994 10.1003 5.63587 10.0977 5.64135 10.0941C5.66571 10.0778 5.68662 10.0569 5.7029 10.0325C5.70648 10.0272 5.70892 10.0214 5.71198 10.0158C5.71613 10.0088 5.71991 10.0017 5.72328 9.99434C5.726 9.98697 5.72833 9.97946 5.73025 9.97184C5.73212 9.96552 5.73456 9.95947 5.73586 9.95292C5.73875 9.9386 5.74022 9.92404 5.74025 9.90943V7.68915C5.74024 7.63026 5.71685 7.57379 5.67521 7.53215C5.63358 7.49052 5.5771 7.46712 5.51822 7.46712ZM1.29951 2.13843C1.29951 1.87495 1.37764 1.61739 1.52402 1.39832C1.67041 1.17924 1.87846 1.0085 2.12188 0.907667C2.36531 0.806838 2.63316 0.780457 2.89158 0.831859C3.14999 0.883261 3.38736 1.01014 3.57367 1.19645C3.75998 1.38275 3.88686 1.62012 3.93826 1.87854C3.98966 2.13696 3.96328 2.40481 3.86245 2.64823C3.76162 2.89166 3.59087 3.09971 3.3718 3.24609C3.15272 3.39247 2.89516 3.4706 2.63168 3.4706C2.27849 3.4702 1.93989 3.32972 1.69014 3.07997C1.4404 2.83023 1.29992 2.49162 1.29951 2.13843V2.13843Z"
                fill="#F6F5F2"
                stroke="white"
                strokeWidth="0.5"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <svg
        width="114"
        height="33"
        viewBox="0 0 114 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[787px] top-[174.67px]"
        preserveAspectRatio="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M106.5 9.33017L114 5.00005L106.5 0.669918V4.00005H2H0V33H2L2 6.00005H106.5V9.33017Z"
          fill="#D9D4C9"
        ></path>
      </svg>
      <div className="w-[16.94px] h-[16.94px]">
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[380.66px] top-[605.66px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <circle cx="8.46774" cy="8.46774" r="8.46774" fill="#B1AAA1"></circle>
        </svg>
        <div className="flex flex-col justify-center items-center w-[15px] h-[15px] absolute left-[381.91px] top-[606.97px] gap-[2.960381269454956px]">
          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[2.960381269454956px] px-[1.480190634727478px] py-[2.0722668170928955px]">
            <svg
              width="13"
              height="11"
              viewBox="0 0 13 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="none"
            >
              <path
                d="M10.4028 7.03731L10.4027 5.01807C10.4038 4.6389 10.3296 4.2633 10.1844 3.91299C10.0393 3.56269 9.82618 3.24464 9.55734 2.97726L7.83028 1.2502H9.51457C9.57346 1.2502 9.62993 1.2268 9.67157 1.18517C9.71321 1.14353 9.7366 1.08705 9.7366 1.02817C9.7366 0.969283 9.71321 0.912809 9.67157 0.87117C9.62993 0.829532 9.57346 0.80614 9.51457 0.80614H7.29428C7.27968 0.806172 7.26511 0.807643 7.25078 0.81053C7.24433 0.811811 7.2384 0.814223 7.23216 0.816046C7.22443 0.817989 7.21682 0.820355 7.20934 0.823133C7.20218 0.826425 7.19519 0.830099 7.18842 0.834137C7.18264 0.837281 7.17665 0.839828 7.17113 0.843521C7.14678 0.859805 7.12588 0.880717 7.1096 0.905066C7.10602 0.91045 7.10356 0.9163 7.10047 0.921918C7.09174 0.935322 7.08556 0.950217 7.08223 0.965858C7.08036 0.972153 7.07795 0.97817 7.07664 0.984681C7.07375 0.998997 7.07228 1.01356 7.07226 1.02817V3.24845C7.07226 3.30734 7.09565 3.36381 7.13729 3.40545C7.17893 3.44709 7.2354 3.47048 7.29428 3.47048C7.35317 3.47048 7.40964 3.44709 7.45128 3.40545C7.49292 3.36381 7.51631 3.30734 7.51631 3.24845V1.56416L9.24338 3.29122C9.47085 3.51748 9.6512 3.78659 9.77398 4.08301C9.89676 4.37942 9.95954 4.69724 9.95868 5.01807L9.95879 7.03732C9.51051 7.0938 9.10061 7.319 8.81253 7.66707C8.52444 8.01514 8.37983 8.45991 8.40813 8.91084C8.43643 9.36178 8.63552 9.78498 8.96486 10.0943C9.29421 10.4036 9.72905 10.5758 10.1809 10.5758C10.6327 10.5758 11.0675 10.4036 11.3969 10.0943C11.7262 9.78493 11.9253 9.36173 11.9536 8.91079C11.9819 8.45985 11.8372 8.01509 11.5491 7.66703C11.261 7.31897 10.8511 7.09378 10.4028 7.03731H10.4028ZM10.1808 10.1313C9.91734 10.1313 9.65978 10.0532 9.4407 9.90683C9.22163 9.76045 9.05088 9.55239 8.95005 9.30897C8.84922 9.06555 8.82284 8.79769 8.87424 8.53927C8.92565 8.28086 9.05252 8.04349 9.23883 7.85718C9.42514 7.67087 9.66251 7.544 9.92092 7.49259C10.1793 7.44119 10.4472 7.46757 10.6906 7.5684C10.934 7.66923 11.1421 7.83998 11.2885 8.05905C11.4349 8.27813 11.513 8.53569 11.513 8.79917C11.5126 9.15236 11.3721 9.49097 11.1224 9.74071C10.8726 9.99045 10.534 10.1309 10.1808 10.1313V10.1313ZM5.51822 7.467C5.45933 7.467 5.40286 7.49039 5.36122 7.53203C5.31959 7.57367 5.29619 7.63014 5.29619 7.68903V9.37332L3.56913 7.64626C3.34165 7.42001 3.1613 7.15089 3.03852 6.85448C2.91574 6.55806 2.85296 6.24024 2.85382 5.91941L2.85371 3.90016C3.30199 3.84368 3.71189 3.61848 3.99998 3.27041C4.28806 2.92234 4.43267 2.47757 4.40437 2.02664C4.37607 1.5757 4.17698 1.1525 3.84764 0.843184C3.5183 0.533868 3.08345 0.361688 2.63163 0.361694C2.17981 0.361701 1.74497 0.533894 1.41564 0.843221C1.0863 1.15255 0.887229 1.57575 0.858941 2.02669C0.830653 2.47763 0.975276 2.92239 1.26337 3.27045C1.55147 3.61851 1.96138 3.8437 2.40966 3.90017L2.40977 5.91941C2.40874 6.29858 2.48294 6.67419 2.62805 7.02449C2.77316 7.3748 2.98631 7.69284 3.25517 7.96022L4.98223 9.68728H3.29793C3.23905 9.68728 3.18257 9.71067 3.14093 9.75231C3.0993 9.79395 3.0759 9.85043 3.0759 9.90931C3.0759 9.9682 3.0993 10.0247 3.14093 10.0663C3.18257 10.1079 3.23905 10.1313 3.29793 10.1313H5.51822C5.53282 10.1313 5.54738 10.1298 5.56169 10.127C5.56822 10.1257 5.57424 10.1232 5.58053 10.1214C5.59609 10.1181 5.61091 10.1119 5.62425 10.1033C5.62994 10.1001 5.63587 10.0976 5.64135 10.094C5.66571 10.0777 5.68662 10.0568 5.7029 10.0324C5.70648 10.0271 5.70892 10.0212 5.71198 10.0156C5.71613 10.0087 5.71991 10.0016 5.72328 9.99422C5.726 9.98685 5.72833 9.97934 5.73025 9.97172C5.73212 9.9654 5.73456 9.95934 5.73586 9.9528C5.73875 9.93848 5.74022 9.92392 5.74025 9.90931V7.68903C5.74024 7.63014 5.71685 7.57367 5.67521 7.53203C5.63358 7.49039 5.5771 7.467 5.51822 7.467ZM1.29951 2.13831C1.29951 1.87483 1.37764 1.61727 1.52402 1.3982C1.67041 1.17912 1.87846 1.00837 2.12188 0.907545C2.36531 0.806716 2.63316 0.780335 2.89158 0.831737C3.14999 0.883139 3.38736 1.01002 3.57367 1.19632C3.75998 1.38263 3.88686 1.62 3.93826 1.87842C3.98966 2.13683 3.96328 2.40469 3.86245 2.64811C3.76162 2.89153 3.59087 3.09959 3.3718 3.24597C3.15272 3.39235 2.89516 3.47048 2.63168 3.47048C2.27849 3.47008 1.93989 3.3296 1.69014 3.07985C1.4404 2.83011 1.29992 2.4915 1.29951 2.13831V2.13831Z"
                fill="#F6F5F2"
                stroke="white"
                strokeWidth="0.5"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataLandscape;
