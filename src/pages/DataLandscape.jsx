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
    <div class="w-[1440px] h-[980px] relative overflow-hidden bg-[#f6f5f2]">
      <svg
        width="1380"
        height="917"
        viewBox="0 0 1380 917"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-[1380px] h-[916px]"
        preserveAspectRatio="none"
      >
        <path
          d="M13.5361 2L13.5361 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M31.9927 2L31.9926 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M52.0649 2L52.0649 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M72.0649 2L72.0649 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M92.5215 2L92.5214 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M112.594 2L112.594 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M133.05 2L133.05 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M193.814 2L193.814 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M153.814 1L153.814 912.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M172.814 2L172.814 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M213.579 2L213.579 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M234.651 2L234.651 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M254.416 2L254.416 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M275.18 2L275.18 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M294.945 2L294.945 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M315.018 2L315.018 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M335.474 2L335.474 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M355.238 2L355.238 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M376.002 2L376.002 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M397.002 2L397.002 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M418.002 2L418.002 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M439.002 2L439.002 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M460.002 2L460.002 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M478.767 2L478.767 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M499.531 2L499.531 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M518.296 2L518.296 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M539.06 2L539.06 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M559.825 2L559.825 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M578.589 2L578.589 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M599.354 2L599.353 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M619.117 2L619.117 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M640.883 2L640.883 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M659.955 2L659.955 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M680.411 2L680.411 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M701.175 2L701.175 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M720.94 2L720.94 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M741.94 2L741.94 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M762.94 2L762.94 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M783.94 2L783.94 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M804.94 2L804.94 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M825.94 2L825.94 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M843.704 2L843.704 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M862.161 2L862.161 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M883.233 1L883.233 912.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M902.998 2L902.998 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M924.762 2L924.762 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M944.526 2L944.526 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M964.291 2L964.29 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M984.055 2L984.055 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1004.82 2L1004.82 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1025.58 2L1025.58 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1045.66 2L1045.66 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1066.42 2L1066.42 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1086.19 2L1086.19 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1106.19 2L1106.19 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1126.19 2L1126.19 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1146.19 2L1146.19 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1166.19 2L1166.19 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1186.19 2L1186.19 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1206.19 2L1206.19 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1227.95 2L1227.95 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1249.71 2L1249.71 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1268.71 3L1268.71 914.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1287.71 3L1287.71 914.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1308.48 2L1308.48 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1328.94 3L1328.94 914.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1349.7 2L1349.7 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1369.46 2L1369.46 913.454"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 13.0518H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 31.0518H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 51.8105H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 91.8105H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 71.9131H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 112.672H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 153.672H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 133.102H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 173.877H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 193.636H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 213.066H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 234.066H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 255.825H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 275.928H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 293.928H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 315.031H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 334.789H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 355.219H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 376.219H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 395.65H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 414.65H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 436.081H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 456.512H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 475.27H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 497.701H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 537.701H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 516.701H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 558.131H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 577.234H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 619.01H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 598.01H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 638.768H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 659.526H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 699.284H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 679.284H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 719.388H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 739.818H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 760.249H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 779.249H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 800.68H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 840.783H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 822.783H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 861.869H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 882.644H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <path
          d="M1 902.075H1380"
          stroke="black"
          stroke-opacity="0.4"
          stroke-linecap="round"
          stroke-dasharray="0.2 20"
        ></path>
        <mask
          id="mask0_576_470588"
          style={{maskType:'alpha'}}
          maskUnits="userSpaceOnUse"
          x="1"
          y="1"
          width="1380"
          height="916"
        >
          <rect x="1" y="1" width="1380" height="916" fill="white"></rect>
        </mask>
        <g mask="url(#mask0_576_470588)"></g>
      </svg>
      <div class="flex justify-start items-center absolute left-[815px] top-[911px] overflow-hidden gap-6 pr-4 bg-white">
        <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 px-4 py-3 bg-gray-200">
          <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-black">
            Legend
          </p>
        </div>
        <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1.5 px-2">
          <div class="flex-grow-0 flex-shrink-0 w-5 h-5">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="absolute left-[7.61px] top-[-0.39px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx="10" cy="10" r="10" fill="#F27A75"></circle>
            </svg>
            <div class="flex flex-col justify-center items-center w-[19px] h-[18px] absolute left-[8.68px] top-[0.68px] gap-[3.954232931137085px]">
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
                    d="M8.17982 0.261597C6.71343 0.261597 5.27997 0.696431 4.06071 1.51111C2.84146 2.32579 1.89116 3.48373 1.33 4.8385C0.768837 6.19326 0.622012 7.68401 0.90809 9.12222C1.19417 10.5604 1.9003 11.8815 2.93719 12.9184C3.97409 13.9553 5.29517 14.6614 6.73338 14.9475C8.17159 15.2336 9.66234 15.0868 11.0171 14.5256C12.3719 13.9644 13.5298 13.0141 14.3445 11.7949C15.1592 10.5756 15.594 9.14217 15.594 7.67578C15.5918 5.7101 14.8099 3.82556 13.42 2.43561C12.03 1.04566 10.1455 0.263814 8.17982 0.261597ZM8.17982 14.4968C6.83074 14.4968 5.51196 14.0968 4.39024 13.3473C3.26853 12.5978 2.39425 11.5325 1.87798 10.2861C1.36172 9.0397 1.22664 7.66822 1.48983 6.34506C1.75302 5.02191 2.40266 3.80651 3.3566 2.85257C4.31054 1.89863 5.52594 1.24899 6.84909 0.985796C8.17225 0.722605 9.54373 0.857684 10.7901 1.37395C12.0365 1.89022 13.1018 2.76449 13.8513 3.88621C14.6008 5.00793 15.0009 6.32671 15.0009 7.67578C14.9988 9.48421 14.2795 11.218 13.0008 12.4967C11.722 13.7755 9.98824 14.4948 8.17982 14.4968ZM7.88325 8.26892V4.11697C7.88325 4.03832 7.91449 3.96289 7.97011 3.90727C8.02573 3.85165 8.10116 3.82041 8.17982 3.82041C8.25847 3.82041 8.3339 3.85165 8.38952 3.90727C8.44514 3.96289 8.47638 4.03832 8.47638 4.11697V8.26892C8.47638 8.34757 8.44514 8.42301 8.38952 8.47862C8.3339 8.53424 8.25847 8.56549 8.17982 8.56549C8.10116 8.56549 8.02573 8.53424 7.97011 8.47862C7.91449 8.42301 7.88325 8.34757 7.88325 8.26892ZM8.77295 10.938C8.77295 11.0553 8.73816 11.17 8.67299 11.2676C8.60781 11.3651 8.51518 11.4411 8.4068 11.486C8.29842 11.5309 8.17916 11.5427 8.0641 11.5198C7.94904 11.4969 7.84336 11.4404 7.76041 11.3574C7.67745 11.2745 7.62096 11.1688 7.59808 11.0537C7.57519 10.9387 7.58694 10.8194 7.63183 10.711C7.67672 10.6027 7.75275 10.51 7.85029 10.4449C7.94783 10.3797 8.0625 10.3449 8.17982 10.3449C8.33707 10.3451 8.48783 10.4076 8.59903 10.5188C8.71022 10.63 8.77277 10.7808 8.77295 10.938Z"
                    fill="white"
                    stroke="white"
                    stroke-width="0.2"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <p class="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-black">
            Error
          </p>
        </div>
        <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1.5 px-2">
          <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 gap-[5.05293607711792px]">
            <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[5.05293607711792px] px-[4.042348861694336px] py-[2.52646803855896px]">
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M0.0422206 13.7897C0.0422168 13.8404 0.0524192 13.8905 0.0722184 13.9372C0.0920167 13.9838 0.121006 14.026 0.157457 14.0612L5.45957 19.3633C5.46063 19.3643 5.46193 19.3651 5.46304 19.3661C5.47952 19.3824 5.49745 19.3971 5.51661 19.4101C5.52304 19.4144 5.53021 19.4172 5.53683 19.421C5.55124 19.43 5.56625 19.438 5.58175 19.445C5.59016 19.4485 5.59918 19.4502 5.60784 19.4531C5.62243 19.4586 5.63736 19.4631 5.65252 19.4667C5.67721 19.4717 5.70233 19.4742 5.72751 19.4742L14.8235 19.4742C15.125 19.4739 15.4139 19.354 15.6271 19.1409C15.8402 18.9277 15.9601 18.6388 15.9604 18.3373L15.9605 1.66264C15.9601 1.36122 15.8402 1.07224 15.6271 0.859106C15.4139 0.645967 15.125 0.526075 14.8235 0.525732L1.17987 0.525731C0.878451 0.526074 0.589473 0.645966 0.376336 0.859105C0.163199 1.07224 0.043307 1.36122 0.0429617 1.66264L0.0429607 13.7821C0.0429149 13.7847 0.0422206 13.7871 0.0422206 13.7897ZM5.34854 18.1804L1.33684 14.1687L5.34854 14.1687L5.34854 18.1804ZM1.17987 1.28367L14.8235 1.28367C14.924 1.28379 15.0203 1.32375 15.0914 1.3948C15.1624 1.46584 15.2024 1.56217 15.2025 1.66264L15.2025 18.3373C15.2024 18.4378 15.1624 18.5341 15.0914 18.6052C15.0203 18.6762 14.924 18.7162 14.8235 18.7163L6.10648 18.7163L6.10648 13.7897C6.10648 13.6892 6.06655 13.5928 5.99548 13.5217C5.92441 13.4507 5.82802 13.4107 5.72751 13.4107L0.800901 13.4107L0.800902 1.66264C0.801017 1.56217 0.840981 1.46584 0.912027 1.3948C0.983073 1.32375 1.0794 1.28379 1.17987 1.28367ZM4.5906 9.24205C4.59061 9.14154 4.63054 9.04515 4.70161 8.97408C4.77268 8.90301 4.86907 8.86308 4.96957 8.86308L11.0331 8.86308C11.1336 8.86308 11.23 8.903 11.3011 8.97407C11.3721 9.04514 11.4121 9.14154 11.4121 9.24205C11.4121 9.34256 11.3721 9.43895 11.3011 9.51002C11.23 9.58109 11.1336 9.62102 11.0331 9.62102L4.96957 9.62102C4.86907 9.62101 4.77268 9.58108 4.70161 9.51001C4.63054 9.43894 4.59061 9.34255 4.5906 9.24205ZM4.5906 6.21028C4.59061 6.10978 4.63054 6.01339 4.70161 5.94232C4.77268 5.87125 4.86907 5.83132 4.96957 5.83131L11.0331 5.83131C11.1336 5.83131 11.23 5.87124 11.3011 5.94231C11.3721 6.01338 11.4121 6.10978 11.4121 6.21028C11.4121 6.31079 11.3721 6.40719 11.3011 6.47826C11.23 6.54933 11.1336 6.58925 11.0331 6.58925L4.96957 6.58925C4.86907 6.58925 4.77268 6.54932 4.70161 6.47825C4.63054 6.40718 4.59061 6.31079 4.5906 6.21028Z"
                  fill="black"
                ></path>
              </svg>
            </div>
          </div>
          <p class="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-black">
            Draft
          </p>
        </div>
        <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1.5 px-2">
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="flex-grow-0 flex-shrink-0 w-5 h-5"
            preserveAspectRatio="none"
          >
            <circle cx="10.0029" cy="10" r="10" fill="#4EBF8D"></circle>
            <g clip-path="url(#clip0_576_470716)">
              <path
                d="M10.0029 7.75003C9.55791 7.75003 9.1229 7.88199 8.75289 8.12922C8.38287 8.37646 8.09449 8.72786 7.92419 9.13899C7.75389 9.55013 7.70933 10.0025 7.79615 10.439C7.88297 10.8754 8.09726 11.2764 8.41193 11.591C8.7266 11.9057 9.12751 12.12 9.56397 12.2068C10.0004 12.2936 10.4528 12.2491 10.864 12.0788C11.2751 11.9085 11.6265 11.6201 11.8737 11.2501C12.121 10.8801 12.2529 10.445 12.2529 10C12.2522 9.4035 12.015 8.83159 11.5932 8.40978C11.1714 7.98797 10.5994 7.7507 10.0029 7.75003ZM10.0029 11.75C9.6568 11.75 9.31846 11.6474 9.03067 11.4551C8.74288 11.2628 8.51858 10.9895 8.38613 10.6697C8.25368 10.35 8.21902 9.99809 8.28654 9.65862C8.35407 9.31915 8.52074 9.00733 8.76548 8.76259C9.01022 8.51785 9.32204 8.35118 9.66151 8.28365C10.001 8.21613 10.3528 8.25079 10.6726 8.38324C10.9924 8.51569 11.2657 8.74 11.458 9.02778C11.6503 9.31557 11.7529 9.65391 11.7529 10C11.7524 10.464 11.5679 10.9088 11.2398 11.2369C10.9117 11.565 10.4669 11.7495 10.0029 11.75ZM6.08678 8.34582C5.75726 9.12487 5.66792 9.98458 5.83021 10.8147C5.9925 11.6449 6.39902 12.4077 6.99767 13.0052C7.02088 13.0285 7.0393 13.056 7.05186 13.0863C7.06443 13.1167 7.07089 13.1492 7.07089 13.182C7.0709 13.2148 7.06443 13.2473 7.05187 13.2777C7.03931 13.308 7.0209 13.3356 6.99768 13.3588C6.97447 13.382 6.94691 13.4004 6.91658 13.413C6.88626 13.4255 6.85375 13.432 6.82092 13.432C6.78809 13.432 6.75559 13.4255 6.72526 13.413C6.69493 13.4004 6.66737 13.382 6.64415 13.3588C6.20263 12.918 5.85236 12.3944 5.61337 11.8181C5.37438 11.2417 5.25136 10.6239 5.25136 10C5.25136 9.37611 5.37438 8.75832 5.61337 8.18198C5.85236 7.60565 6.20263 7.0821 6.64415 6.64127C6.69104 6.59439 6.75462 6.56805 6.82092 6.56805C6.88722 6.56806 6.9508 6.5944 6.99768 6.64128C7.04456 6.68816 7.0709 6.75175 7.07089 6.81805C7.07089 6.88435 7.04455 6.94793 6.99767 6.99481C6.6095 7.38198 6.30015 7.8408 6.08678 8.34582ZM14.7529 10C14.7537 10.6239 14.6311 11.2418 14.3924 11.8182C14.1536 12.3946 13.8034 12.9182 13.3617 13.3588C13.3385 13.382 13.3109 13.4004 13.2806 13.413C13.2503 13.4255 13.2177 13.432 13.1849 13.432C13.1521 13.432 13.1196 13.4255 13.0893 13.413C13.0589 13.4004 13.0314 13.382 13.0082 13.3588C12.9849 13.3356 12.9665 13.308 12.954 13.2777C12.9414 13.2473 12.9349 13.2148 12.9349 13.182C12.9349 13.1492 12.9414 13.1167 12.954 13.0863C12.9665 13.056 12.985 13.0285 13.0082 13.0052C13.4033 12.6108 13.7167 12.1424 13.9306 11.6267C14.1444 11.1111 14.2545 10.5583 14.2545 10C14.2545 9.44177 14.1444 8.88899 13.9306 8.37332C13.7167 7.85765 13.4033 7.38921 13.0082 6.99481C12.985 6.9716 12.9665 6.94404 12.954 6.91371C12.9414 6.88338 12.9349 6.85088 12.9349 6.81805C12.9349 6.78522 12.9414 6.75271 12.954 6.72238C12.9665 6.69205 12.9849 6.66449 13.0082 6.64128C13.0314 6.61807 13.0589 6.59965 13.0893 6.58709C13.1196 6.57452 13.1521 6.56806 13.1849 6.56805C13.2177 6.56805 13.2503 6.57452 13.2806 6.58708C13.3109 6.59964 13.3385 6.61805 13.3617 6.64127C13.8034 7.08189 14.1536 7.60545 14.3924 8.18185C14.6311 8.75825 14.7537 9.37614 14.7529 10ZM5.22991 14.773C5.25312 14.7962 5.27154 14.8238 5.2841 14.8541C5.29667 14.8844 5.30313 14.9169 5.30313 14.9498C5.30314 14.9826 5.29667 15.0151 5.28411 15.0454C5.27155 15.0758 5.25314 15.1033 5.22992 15.1265C5.20671 15.1498 5.17915 15.1682 5.14882 15.1807C5.1185 15.1933 5.08599 15.1998 5.05316 15.1998C5.02033 15.1998 4.98783 15.1933 4.9575 15.1807C4.92717 15.1682 4.89961 15.1498 4.87639 15.1266C4.20247 14.4537 3.66782 13.6546 3.30304 12.7749C2.93825 11.8953 2.75049 10.9523 2.75049 10C2.75049 9.04773 2.93825 8.10477 3.30304 7.22511C3.66782 6.34545 4.20247 5.54634 4.87639 4.8735C4.92328 4.82663 4.98686 4.80029 5.05316 4.80029C5.11946 4.8003 5.18304 4.82664 5.22992 4.87352C5.2768 4.9204 5.30314 4.98399 5.30313 5.05029C5.30313 5.11659 5.27679 5.18017 5.22991 5.22705C4.60241 5.85345 4.10459 6.59744 3.76493 7.41645C3.42527 8.23545 3.25044 9.11339 3.25044 10C3.25044 10.8867 3.42527 11.7646 3.76493 12.5836C4.10459 13.4026 4.60241 14.1466 5.22991 14.773ZM17.2529 10C17.2541 10.9523 17.0671 11.8954 16.7027 12.7752C16.3383 13.6549 15.8036 14.454 15.1294 15.1266C15.0826 15.1734 15.019 15.1998 14.9527 15.1998C14.8864 15.1998 14.8228 15.1734 14.7759 15.1265C14.729 15.0797 14.7027 15.0161 14.7027 14.9498C14.7027 14.8835 14.729 14.8199 14.7759 14.773C15.4034 14.1466 15.9012 13.4026 16.2409 12.5836C16.5806 11.7646 16.7554 10.8867 16.7554 10C16.7554 9.11339 16.5806 8.23545 16.2409 7.41645C15.9012 6.59744 15.4034 5.85345 14.7759 5.22705C14.729 5.18017 14.7027 5.11659 14.7027 5.05029C14.7027 4.98399 14.729 4.9204 14.7759 4.87352C14.8228 4.82664 14.8864 4.8003 14.9527 4.80029C15.019 4.80029 15.0826 4.82663 15.1294 4.8735C15.8036 5.54603 16.3383 6.34513 16.7027 7.2249C17.0671 8.10467 17.2541 9.04777 17.2529 10Z"
                fill="white"
                stroke="white"
                stroke-width="0.2"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_576_470716">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(2.00293 2)"
                ></rect>
              </clipPath>
            </defs>
          </svg>
          <p class="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-black">
            Live
          </p>
        </div>
        <svg
          width="2"
          height="18"
          viewBox="0 0 2 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="flex-grow-0 flex-shrink-0"
          preserveAspectRatio="none"
        >
          <line x1="0.50293" x2="0.50293" y2="18" stroke="black"></line>
        </svg>
        <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1.5 px-2">
          <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 gap-[4.948185920715332px]">
            <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[4.948185920715332px] px-[2.474092960357666px] py-[3.4637298583984375px]">
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M16.4352 11.6218L16.435 8.24674C16.4367 7.61297 16.3127 6.98515 16.0702 6.39963C15.8276 5.81411 15.4713 5.28251 15.022 4.83559L12.1353 1.94885H14.9505C15.0489 1.94885 15.1433 1.90975 15.2129 1.84015C15.2825 1.77056 15.3216 1.67616 15.3216 1.57774C15.3216 1.47931 15.2825 1.38492 15.2129 1.31532C15.1433 1.24572 15.0489 1.20662 14.9505 1.20662H11.2394C11.2149 1.20668 11.1906 1.20913 11.1666 1.21396C11.1559 1.2161 11.1459 1.22013 11.1355 1.22318C11.1226 1.22643 11.1099 1.23038 11.0974 1.23503C11.0854 1.24053 11.0737 1.24667 11.0624 1.25342C11.0528 1.25867 11.0427 1.26293 11.0335 1.2691C10.9928 1.29632 10.9579 1.33128 10.9307 1.37197C10.9247 1.38097 10.9206 1.39075 10.9154 1.40014C10.9008 1.42255 10.8905 1.44744 10.8849 1.47359C10.8818 1.48411 10.8778 1.49416 10.8756 1.50505C10.8707 1.52898 10.8683 1.55332 10.8682 1.57774V5.28887C10.8682 5.3873 10.9073 5.48169 10.9769 5.55129C11.0465 5.62089 11.1409 5.65999 11.2394 5.65999C11.3378 5.65999 11.4322 5.62089 11.5018 5.55129C11.5714 5.48169 11.6105 5.3873 11.6105 5.28887V2.47363L14.4972 5.36036C14.8774 5.73853 15.1789 6.18836 15.3841 6.6838C15.5893 7.17924 15.6943 7.71047 15.6928 8.24673L15.693 11.6218C14.9437 11.7163 14.2586 12.0927 13.7771 12.6745C13.2955 13.2562 13.0538 13.9997 13.1011 14.7534C13.1484 15.5071 13.4812 16.2145 14.0317 16.7315C14.5822 17.2485 15.309 17.5363 16.0642 17.5363C16.8194 17.5363 17.5462 17.2485 18.0967 16.7314C18.6472 16.2144 18.9799 15.507 19.0272 14.7533C19.0745 13.9996 18.8327 13.2562 18.3512 12.6744C17.8697 12.0926 17.1845 11.7162 16.4352 11.6218H16.4352ZM16.0641 16.7934C15.6237 16.7934 15.1932 16.6628 14.827 16.4181C14.4609 16.1735 14.1755 15.8257 14.0069 15.4188C13.8384 15.012 13.7943 14.5643 13.8802 14.1323C13.9661 13.7004 14.1782 13.3036 14.4896 12.9922C14.801 12.6808 15.1978 12.4687 15.6297 12.3828C16.0616 12.2969 16.5094 12.341 16.9162 12.5095C17.3231 12.6781 17.6709 12.9635 17.9155 13.3296C18.1602 13.6958 18.2908 14.1263 18.2908 14.5667C18.2901 15.1571 18.0553 15.723 17.6379 16.1405C17.2204 16.5579 16.6545 16.7927 16.0641 16.7934ZM8.27072 12.34C8.17229 12.34 8.0779 12.3791 8.00831 12.4487C7.93871 12.5183 7.89961 12.6127 7.8996 12.7112V15.5264L5.01287 12.6397C4.63265 12.2615 4.3312 11.8117 4.12598 11.3162C3.92075 10.8208 3.81582 10.2896 3.81726 9.75329L3.81708 6.37819C4.56636 6.28377 5.2515 5.90736 5.73303 5.32558C6.21455 4.74379 6.45626 4.00037 6.40896 3.24665C6.36165 2.49292 6.02889 1.78555 5.4784 1.26854C4.92791 0.751527 4.20108 0.463734 3.44588 0.463745C2.69067 0.463756 1.96385 0.751572 1.41338 1.2686C0.862908 1.78563 0.530162 2.49301 0.48288 3.24673C0.435597 4.00046 0.677331 4.74388 1.15887 5.32565C1.64041 5.90742 2.32557 6.28381 3.07485 6.3782L3.07504 9.75329C3.07333 10.3871 3.19734 11.0149 3.43989 11.6004C3.68244 12.1859 4.03872 12.7175 4.4881 13.1644L7.37483 16.0512H4.55958C4.46115 16.0512 4.36676 16.0903 4.29716 16.1599C4.22756 16.2295 4.18847 16.3239 4.18847 16.4223C4.18847 16.5207 4.22756 16.6151 4.29716 16.6847C4.36676 16.7543 4.46115 16.7934 4.55958 16.7934H8.27072C8.29512 16.7933 8.31946 16.7909 8.34338 16.7861C8.3543 16.7839 8.36436 16.7798 8.37487 16.7768C8.40087 16.7712 8.42564 16.7609 8.44794 16.7465C8.45745 16.7412 8.46737 16.737 8.47653 16.7309C8.51724 16.7037 8.55219 16.6688 8.57941 16.628C8.58539 16.6191 8.58946 16.6094 8.59458 16.6C8.60153 16.5884 8.60783 16.5765 8.61347 16.5642C8.61802 16.5519 8.62191 16.5393 8.62512 16.5266C8.62824 16.516 8.63232 16.5059 8.63449 16.495C8.63933 16.471 8.64179 16.4467 8.64183 16.4223V12.7112C8.64183 12.6127 8.60273 12.5183 8.53313 12.4487C8.46353 12.3791 8.36914 12.34 8.27072 12.34ZM1.21928 3.43331C1.21928 2.99291 1.34988 2.5624 1.59455 2.19623C1.83922 1.83005 2.18698 1.54465 2.59385 1.37612C3.00072 1.20759 3.44844 1.16349 3.88037 1.24941C4.3123 1.33532 4.70906 1.54739 5.02047 1.8588C5.33188 2.17021 5.54395 2.56697 5.62986 2.9989C5.71578 3.43084 5.67169 3.87855 5.50315 4.28542C5.33462 4.69229 5.04922 5.04005 4.68304 5.28472C4.31687 5.5294 3.88636 5.65999 3.44597 5.65999C2.85562 5.65931 2.28965 5.4245 1.87221 5.00706C1.45477 4.58962 1.21996 4.02365 1.21928 3.43331Z"
                  fill="black"
                ></path>
              </svg>
            </div>
          </div>
          <p class="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-black">
            Pipeline/connector
          </p>
        </div>
      </div>
      <div class="w-[1263px] h-[491px]">
        <div class="flex justify-start items-center absolute left-[1189px] top-[292px] gap-1.5 pr-2">
          <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 gap-1">
            <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1">
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M19.5319 16.6596H18.383V0.957442C18.383 0.855871 18.3426 0.758462 18.2708 0.68664C18.199 0.614819 18.1016 0.574468 18 0.574463H12.6383C12.5367 0.574468 12.4393 0.614819 12.3675 0.68664C12.2957 0.758462 12.2553 0.855871 12.2553 0.957442V5.17021H7.2766C7.17503 5.17021 7.07762 5.21056 7.00579 5.28239C6.93397 5.35421 6.89362 5.45162 6.89362 5.55319V9.76595H1.91489C1.81332 9.76596 1.71591 9.80631 1.64409 9.87813C1.57227 9.94995 1.53192 10.0474 1.53191 10.1489V16.6596H0.382979C0.281406 16.6596 0.183994 16.6999 0.112172 16.7717C0.0403495 16.8436 0 16.941 0 17.0425C0 17.1441 0.0403495 17.2415 0.112172 17.3134C0.183994 17.3852 0.281406 17.4255 0.382979 17.4255H19.5319C19.6335 17.4255 19.7309 17.3852 19.8027 17.3134C19.8745 17.2415 19.9149 17.1441 19.9149 17.0425C19.9149 16.941 19.8745 16.8436 19.8027 16.7717C19.7309 16.6999 19.6335 16.6596 19.5319 16.6596ZM7.65957 5.93617H12.2553V16.6596H7.65957V5.93617ZM2.29787 10.5319H6.89362V16.6596H2.29787V10.5319ZM13.0213 16.6596V1.34042H17.617V16.6596H13.0213Z"
                  fill="black"
                ></path>
              </svg>
            </div>
          </div>
          <p class="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-black">
            Insights
          </p>
        </div>
        <svg
          width="60"
          height="12"
          viewBox="0 0 60 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute left-[1128px] top-[343px]"
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
          class="absolute left-[789.33px] top-[244.61px]"
          preserveAspectRatio="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M67.3302 11.6153C67.3304 6.6446 63.3008 2.61496 58.3301 2.61499L0.327172 2.61529L0.327164 0.615291L58.3301 0.614987C64.4054 0.614957 69.3304 5.54006 69.3302 11.6154L69.3272 99.0001H103V94.2266L113 100L103 105.774V101H69.6561L69.6572 200.634C69.6573 206.709 64.7323 211.634 58.657 211.634L0.501961 211.633L0.501997 209.633L58.6571 209.634C63.6278 209.634 67.6573 205.605 67.6573 200.634L67.6561 101H1V99.0001H67.3272L67.3302 11.6153Z"
            fill="#D9D4C9"
          ></path>
        </svg>
        <div class="w-[170px] h-[34px]" onMouseEnter={() => setIsTourismHover(true)} onMouseLeave={() => setIsTourismHover(false)}>
          <div class="w-[170px] h-[34px] absolute left-[103.5px] top-[229.5px] bg-white border border-[#dcdbdb]"></div>
          <div class="w-[168px] h-8 absolute left-[104.5px] top-[230.5px] bg-[#ffefd6]"></div>
          <p class="absolute left-[115px] top-60 text-xs text-left text-black">
            Tourism CSV
          </p>
          <div class="flex flex-col justify-center items-center w-[15px] absolute left-[254px] top-[239px] gap-[3.124999761581421px]">
            {isTourismHover && (
              <TourismError />
            )}
            <div class="flex-grow-0 flex-shrink-0 w-[5.43px] h-[15px] relative">
              <div class="flex flex-col justify-center items-center absolute left-0 top-0 gap-[2.4193546772003174px] px-[1.2096773386001587px] py-[1.6935482025146484px]">
                <svg
                  width="5"
                  height="13"
                  viewBox="0 0 5 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M2.50001 4.99456C2.20227 4.99456 1.91122 5.08285 1.66366 5.24826C1.41611 5.41367 1.22316 5.64878 1.10922 5.92385C0.995281 6.19892 0.96547 6.5016 1.02355 6.79362C1.08164 7.08563 1.22501 7.35386 1.43554 7.56439C1.64607 7.77492 1.91431 7.9183 2.20632 7.97638C2.49834 8.03447 2.80102 8.00466 3.07609 7.89072C3.35116 7.77678 3.58627 7.58383 3.75168 7.33627C3.91709 7.08872 4.00538 6.79767 4.00538 6.49993C4.00493 6.10082 3.84619 5.71818 3.56397 5.43597C3.28176 5.15375 2.89912 4.995 2.50001 4.99456ZM2.50001 7.5752C2.28734 7.5752 2.07945 7.51214 1.90262 7.39399C1.72579 7.27583 1.58797 7.1079 1.50659 6.91142C1.4252 6.71494 1.40391 6.49874 1.4454 6.29016C1.48689 6.08158 1.5893 5.88998 1.73968 5.7396C1.89005 5.58922 2.08165 5.48681 2.29023 5.44532C2.49881 5.40384 2.71501 5.42513 2.91149 5.50651C3.10797 5.5879 3.27591 5.72572 3.39406 5.90254C3.51221 6.07937 3.57527 6.28726 3.57527 6.49993C3.57496 6.78501 3.46157 7.05833 3.25998 7.25991C3.0584 7.46149 2.78509 7.57488 2.50001 7.5752ZM2.50001 3.70423C2.79774 3.70423 3.08879 3.61595 3.33635 3.45053C3.58391 3.28512 3.77685 3.05001 3.89079 2.77494C4.00473 2.49987 4.03454 2.19719 3.97646 1.90517C3.91837 1.61316 3.775 1.34493 3.56447 1.1344C3.35394 0.923866 3.0857 0.780493 2.79369 0.722407C2.50168 0.664322 2.19899 0.694134 1.92392 0.808072C1.64885 0.92201 1.41374 1.11496 1.24833 1.36252C1.08292 1.61007 0.99463 1.90112 0.99463 2.19886C0.995077 2.59797 1.15382 2.98061 1.43604 3.26283C1.71825 3.54504 2.10089 3.70379 2.50001 3.70423ZM2.50001 1.12359C2.71267 1.12359 2.92057 1.18665 3.09739 1.3048C3.27422 1.42296 3.41204 1.59089 3.49342 1.78737C3.57481 1.98385 3.5961 2.20005 3.55461 2.40863C3.51312 2.61721 3.41071 2.80881 3.26034 2.95919C3.10996 3.10957 2.91836 3.21198 2.70978 3.25347C2.5012 3.29496 2.285 3.27366 2.08852 3.19228C1.89204 3.11089 1.7241 2.97307 1.60595 2.79625C1.4878 2.61942 1.42474 2.41153 1.42474 2.19886C1.42505 1.91378 1.53844 1.64046 1.74003 1.43888C1.94161 1.2373 2.21492 1.12391 2.50001 1.12359ZM2.50001 9.29563C2.20227 9.29563 1.91122 9.38392 1.66366 9.54933C1.41611 9.71475 1.22316 9.94985 1.10922 10.2249C0.995281 10.5 0.96547 10.8027 1.02355 11.0947C1.08164 11.3867 1.22501 11.6549 1.43554 11.8655C1.64607 12.076 1.91431 12.2194 2.20632 12.2775C2.49834 12.3355 2.80102 12.3057 3.07609 12.1918C3.35116 12.0779 3.58627 11.8849 3.75168 11.6373C3.91709 11.3898 4.00538 11.0987 4.00538 10.801C4.00493 10.4019 3.84619 10.0193 3.56397 9.73704C3.28176 9.45482 2.89912 9.29608 2.50001 9.29563ZM2.50001 11.8763C2.28734 11.8763 2.07945 11.8132 1.90262 11.6951C1.72579 11.5769 1.58797 11.409 1.50659 11.2125C1.4252 11.016 1.40391 10.7998 1.4454 10.5912C1.48689 10.3827 1.5893 10.1911 1.73968 10.0407C1.89005 9.8903 2.08165 9.78789 2.29023 9.7464C2.49881 9.70491 2.71501 9.7262 2.91149 9.80759C3.10797 9.88897 3.27591 10.0268 3.39406 10.2036C3.51221 10.3804 3.57527 10.5883 3.57527 10.801C3.57496 11.0861 3.46157 11.3594 3.25998 11.561C3.0584 11.7626 2.78509 11.876 2.50001 11.8763Z"
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
                class="absolute left-[1.15px] top-[1.56px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="1.5" cy="2.125" r="1.25" fill="black"></circle>
              </svg>
              <svg
                width="3"
                height="3"
                viewBox="0 0 3 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="absolute left-[1.15px] top-[5.94px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="1.5" cy="1.5" r="1.25" fill="black"></circle>
              </svg>
              <svg
                width="3"
                height="4"
                viewBox="0 0 3 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="absolute left-[1.15px] top-[10.31px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="1.5" cy="1.875" r="1.25" fill="black"></circle>
              </svg>
            </div>
          </div>
          <div class="w-5 h-5">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="absolute left-[228.55px] top-[236.55px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx="10" cy="10" r="10" fill="#F1615B"></circle>
            </svg>
            <div class="flex flex-col justify-center items-center w-5 h-5 absolute left-[229px] top-[237px] gap-[4.912280082702637px]">
              <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[4.912280082702637px] p-[2.4561400413513184px]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M10.0001 0.790161C8.17841 0.790161 6.39765 1.33035 4.88299 2.34241C3.36832 3.35448 2.18779 4.79297 1.49066 6.47597C0.793541 8.15897 0.611142 10.0109 0.966533 11.7976C1.32192 13.5842 2.19914 15.2254 3.48726 16.5135C4.77537 17.8016 6.41653 18.6788 8.2032 19.0342C9.98986 19.3896 11.8418 19.2072 13.5248 18.5101C15.2078 17.813 16.6463 16.6324 17.6583 15.1178C18.6704 13.6031 19.2106 11.8224 19.2106 10.0007C19.2078 7.55875 18.2366 5.21762 16.5099 3.4909C14.7831 1.76419 12.442 0.792916 10.0001 0.790161ZM10.0001 18.4744C8.32414 18.4744 6.68584 17.9774 5.29235 17.0463C3.89886 16.1152 2.81277 14.7918 2.17142 13.2434C1.53006 11.6951 1.36226 9.99129 1.68922 8.34755C2.01618 6.70382 2.82322 5.19395 4.00828 4.00889C5.19335 2.82382 6.70321 2.01678 8.34695 1.68982C9.99068 1.36286 11.6945 1.53067 13.2428 2.17202C14.7912 2.81338 16.1146 3.89947 17.0457 5.29296C17.9768 6.68645 18.4738 8.32475 18.4738 10.0007C18.4712 12.2473 17.5776 14.4011 15.9891 15.9897C14.4005 17.5782 12.2467 18.4718 10.0001 18.4744ZM9.63166 10.7375V5.57963C9.63166 5.48192 9.67047 5.38821 9.73957 5.31912C9.80866 5.25003 9.90237 5.21121 10.0001 5.21121C10.0978 5.21121 10.1915 5.25003 10.2606 5.31912C10.3297 5.38821 10.3685 5.48192 10.3685 5.57963V10.7375C10.3685 10.8352 10.3297 10.9289 10.2606 10.998C10.1915 11.0671 10.0978 11.1059 10.0001 11.1059C9.90237 11.1059 9.80866 11.0671 9.73957 10.998C9.67047 10.9289 9.63166 10.8352 9.63166 10.7375ZM10.7369 14.0533C10.7369 14.199 10.6937 14.3415 10.6127 14.4627C10.5318 14.5839 10.4167 14.6783 10.2821 14.7341C10.1474 14.7898 9.99926 14.8044 9.85633 14.776C9.7134 14.7476 9.5821 14.6774 9.47905 14.5743C9.376 14.4713 9.30583 14.34 9.2774 14.1971C9.24896 14.0541 9.26356 13.906 9.31933 13.7713C9.3751 13.6367 9.46954 13.5216 9.59071 13.4407C9.71189 13.3597 9.85435 13.3165 10.0001 13.3165C10.1954 13.3167 10.3827 13.3944 10.5209 13.5325C10.659 13.6707 10.7367 13.858 10.7369 14.0533Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="w-[170px] h-[34px]">
          <div class="w-[170px] h-[34px] absolute left-[103.5px] top-[326.5px] bg-white border border-[#dcdbdb]"></div>
          <div class="w-[168px] h-8 absolute left-[104.5px] top-[327.5px] bg-[#ffefd6]"></div>
          <p class="absolute left-[115px] top-[337px] text-xs text-left text-black">
            Media CSV
          </p>
          <div class="flex flex-col justify-center items-center w-[15px] absolute left-[254px] top-[336px] gap-[3.124999761581421px]">
            <div class="flex-grow-0 flex-shrink-0 w-[5.43px] h-[15px] relative">
              <div class="flex flex-col justify-center items-center absolute left-0 top-0 gap-[2.4193546772003174px] px-[1.2096773386001587px] py-[1.6935482025146484px]">
                <svg
                  width="5"
                  height="13"
                  viewBox="0 0 5 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M2.50001 4.99456C2.20227 4.99456 1.91122 5.08285 1.66366 5.24826C1.41611 5.41367 1.22316 5.64878 1.10922 5.92385C0.995281 6.19892 0.96547 6.5016 1.02355 6.79362C1.08164 7.08563 1.22501 7.35386 1.43554 7.56439C1.64607 7.77492 1.91431 7.9183 2.20632 7.97638C2.49834 8.03447 2.80102 8.00466 3.07609 7.89072C3.35116 7.77678 3.58627 7.58383 3.75168 7.33627C3.91709 7.08872 4.00538 6.79767 4.00538 6.49993C4.00493 6.10082 3.84619 5.71818 3.56397 5.43597C3.28176 5.15375 2.89912 4.995 2.50001 4.99456ZM2.50001 7.5752C2.28734 7.5752 2.07945 7.51214 1.90262 7.39399C1.72579 7.27583 1.58797 7.1079 1.50659 6.91142C1.4252 6.71494 1.40391 6.49874 1.4454 6.29016C1.48689 6.08158 1.5893 5.88998 1.73968 5.7396C1.89005 5.58922 2.08165 5.48681 2.29023 5.44532C2.49881 5.40384 2.71501 5.42513 2.91149 5.50651C3.10797 5.5879 3.27591 5.72572 3.39406 5.90254C3.51221 6.07937 3.57527 6.28726 3.57527 6.49993C3.57496 6.78501 3.46157 7.05833 3.25998 7.25991C3.0584 7.46149 2.78509 7.57488 2.50001 7.5752ZM2.50001 3.70423C2.79774 3.70423 3.08879 3.61595 3.33635 3.45053C3.58391 3.28512 3.77685 3.05001 3.89079 2.77494C4.00473 2.49987 4.03454 2.19719 3.97646 1.90517C3.91837 1.61316 3.775 1.34493 3.56447 1.1344C3.35394 0.923866 3.0857 0.780493 2.79369 0.722407C2.50168 0.664322 2.19899 0.694134 1.92392 0.808072C1.64885 0.92201 1.41374 1.11496 1.24833 1.36252C1.08292 1.61007 0.99463 1.90112 0.99463 2.19886C0.995077 2.59797 1.15382 2.98061 1.43604 3.26283C1.71825 3.54504 2.10089 3.70379 2.50001 3.70423ZM2.50001 1.12359C2.71267 1.12359 2.92057 1.18665 3.09739 1.3048C3.27422 1.42296 3.41204 1.59089 3.49342 1.78737C3.57481 1.98385 3.5961 2.20005 3.55461 2.40863C3.51312 2.61721 3.41071 2.80881 3.26034 2.95919C3.10996 3.10957 2.91836 3.21198 2.70978 3.25347C2.5012 3.29496 2.285 3.27366 2.08852 3.19228C1.89204 3.11089 1.7241 2.97307 1.60595 2.79625C1.4878 2.61942 1.42474 2.41153 1.42474 2.19886C1.42505 1.91378 1.53844 1.64046 1.74003 1.43888C1.94161 1.2373 2.21492 1.12391 2.50001 1.12359ZM2.50001 9.29563C2.20227 9.29563 1.91122 9.38392 1.66366 9.54933C1.41611 9.71475 1.22316 9.94985 1.10922 10.2249C0.995281 10.5 0.96547 10.8027 1.02355 11.0947C1.08164 11.3867 1.22501 11.6549 1.43554 11.8655C1.64607 12.076 1.91431 12.2194 2.20632 12.2775C2.49834 12.3355 2.80102 12.3057 3.07609 12.1918C3.35116 12.0779 3.58627 11.8849 3.75168 11.6373C3.91709 11.3898 4.00538 11.0987 4.00538 10.801C4.00493 10.4019 3.84619 10.0193 3.56397 9.73704C3.28176 9.45482 2.89912 9.29608 2.50001 9.29563ZM2.50001 11.8763C2.28734 11.8763 2.07945 11.8132 1.90262 11.6951C1.72579 11.5769 1.58797 11.409 1.50659 11.2125C1.4252 11.016 1.40391 10.7998 1.4454 10.5912C1.48689 10.3827 1.5893 10.1911 1.73968 10.0407C1.89005 9.8903 2.08165 9.78789 2.29023 9.7464C2.49881 9.70491 2.71501 9.7262 2.91149 9.80759C3.10797 9.88897 3.27591 10.0268 3.39406 10.2036C3.51221 10.3804 3.57527 10.5883 3.57527 10.801C3.57496 11.0861 3.46157 11.3594 3.25998 11.561C3.0584 11.7626 2.78509 11.876 2.50001 11.8763Z"
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
                class="absolute left-[1.15px] top-[1.56px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="1.5" cy="2.125" r="1.25" fill="black"></circle>
              </svg>
              <svg
                width="3"
                height="3"
                viewBox="0 0 3 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="absolute left-[1.15px] top-[5.94px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="1.5" cy="1.5" r="1.25" fill="black"></circle>
              </svg>
              <svg
                width="3"
                height="4"
                viewBox="0 0 3 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="absolute left-[1.15px] top-[10.31px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="1.5" cy="1.875" r="1.25" fill="black"></circle>
              </svg>
            </div>
          </div>
        </div>
        <div class="w-[170px] h-[34px]" onMouseEnter={() => setIsDcHover(true)} onMouseLeave={() => setIsDcHover(false)}>
          <div class="w-[170px] h-[34px] absolute left-[103.5px] top-[434.5px] bg-white border border-[#dcdbdb]"></div>
          <div class="w-[168px] h-8 absolute left-[104.5px] top-[435.5px] bg-[#ffefd6]"></div>
          <p class="absolute left-[115px] top-[445px] text-xs text-left text-black">
            D&#x26;C CSV
          </p>
          <div class="flex flex-col justify-center items-center w-[15px] absolute left-[254px] top-[444px] gap-[3.124999761581421px]">
            <div class="flex-grow-0 flex-shrink-0 w-[5.43px] h-[15px] relative">
              {isDcHover && (
                <DcCsv />
              )}
              <div class="flex flex-col justify-center items-center absolute left-0 top-0 gap-[2.4193546772003174px] px-[1.2096773386001587px] py-[1.6935482025146484px]">
                <svg
                  width="5"
                  height="13"
                  viewBox="0 0 5 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M2.50001 4.99468C2.20227 4.99468 1.91122 5.08297 1.66366 5.24838C1.41611 5.41379 1.22316 5.6489 1.10922 5.92397C0.995281 6.19904 0.96547 6.50172 1.02355 6.79374C1.08164 7.08575 1.22501 7.35399 1.43554 7.56452C1.64607 7.77505 1.91431 7.91842 2.20632 7.97651C2.49834 8.03459 2.80102 8.00478 3.07609 7.89084C3.35116 7.7769 3.58627 7.58395 3.75168 7.3364C3.91709 7.08884 4.00538 6.79779 4.00538 6.50005C4.00493 6.10094 3.84619 5.7183 3.56397 5.43609C3.28176 5.15387 2.89912 4.99513 2.50001 4.99468ZM2.50001 7.57532C2.28734 7.57532 2.07945 7.51226 1.90262 7.39411C1.72579 7.27596 1.58797 7.10802 1.50659 6.91154C1.4252 6.71506 1.40391 6.49886 1.4454 6.29028C1.48689 6.0817 1.5893 5.8901 1.73968 5.73972C1.89005 5.58935 2.08165 5.48694 2.29023 5.44545C2.49881 5.40396 2.71501 5.42525 2.91149 5.50664C3.10797 5.58802 3.27591 5.72584 3.39406 5.90267C3.51221 6.07949 3.57527 6.28739 3.57527 6.50005C3.57496 6.78514 3.46157 7.05845 3.25998 7.26003C3.0584 7.46162 2.78509 7.57501 2.50001 7.57532ZM2.50001 3.70436C2.79774 3.70436 3.08879 3.61607 3.33635 3.45065C3.58391 3.28524 3.77685 3.05013 3.89079 2.77506C4.00473 2.49999 4.03454 2.19731 3.97646 1.9053C3.91837 1.61328 3.775 1.34505 3.56447 1.13452C3.35394 0.923988 3.0857 0.780615 2.79369 0.72253C2.50168 0.664444 2.19899 0.694256 1.92392 0.808194C1.64885 0.922132 1.41374 1.11508 1.24833 1.36264C1.08292 1.6102 0.99463 1.90124 0.99463 2.19898C0.995077 2.59809 1.15382 2.98073 1.43604 3.26295C1.71825 3.54516 2.10089 3.70391 2.50001 3.70436ZM2.50001 1.12371C2.71267 1.12371 2.92057 1.18678 3.09739 1.30493C3.27422 1.42308 3.41204 1.59101 3.49342 1.78749C3.57481 1.98397 3.5961 2.20017 3.55461 2.40875C3.51312 2.61734 3.41071 2.80893 3.26034 2.95931C3.10996 3.10969 2.91836 3.2121 2.70978 3.25359C2.5012 3.29508 2.285 3.27378 2.08852 3.1924C1.89204 3.11101 1.7241 2.97319 1.60595 2.79637C1.4878 2.61954 1.42474 2.41165 1.42474 2.19898C1.42505 1.9139 1.53844 1.64058 1.74003 1.439C1.94161 1.23742 2.21492 1.12403 2.50001 1.12371ZM2.50001 9.29575C2.20227 9.29575 1.91122 9.38404 1.66366 9.54945C1.41611 9.71487 1.22316 9.94998 1.10922 10.225C0.995281 10.5001 0.96547 10.8028 1.02355 11.0948C1.08164 11.3868 1.22501 11.6551 1.43554 11.8656C1.64607 12.0761 1.91431 12.2195 2.20632 12.2776C2.49834 12.3357 2.80102 12.3059 3.07609 12.1919C3.35116 12.078 3.58627 11.885 3.75168 11.6375C3.91709 11.3899 4.00538 11.0989 4.00538 10.8011C4.00493 10.402 3.84619 10.0194 3.56397 9.73716C3.28176 9.45495 2.89912 9.2962 2.50001 9.29575ZM2.50001 11.8764C2.28734 11.8764 2.07945 11.8133 1.90262 11.6952C1.72579 11.577 1.58797 11.4091 1.50659 11.2126C1.4252 11.0161 1.40391 10.7999 1.4454 10.5914C1.48689 10.3828 1.5893 10.1912 1.73968 10.0408C1.89005 9.89042 2.08165 9.78801 2.29023 9.74652C2.49881 9.70503 2.71501 9.72633 2.91149 9.80771C3.10797 9.8891 3.27591 10.0269 3.39406 10.2037C3.51221 10.3806 3.57527 10.5885 3.57527 10.8011C3.57496 11.0862 3.46157 11.3595 3.25998 11.5611C3.0584 11.7627 2.78509 11.8761 2.50001 11.8764Z"
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
                class="absolute left-[1.15px] top-[1.56px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="1.5" cy="2.12512" r="1.25" fill="black"></circle>
              </svg>
              <svg
                width="3"
                height="3"
                viewBox="0 0 3 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="absolute left-[1.15px] top-[5.94px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="1.5" cy="1.50012" r="1.25" fill="black"></circle>
              </svg>
              <svg
                width="3"
                height="4"
                viewBox="0 0 3 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="absolute left-[1.15px] top-[10.31px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="1.5" cy="1.87512" r="1.25" fill="black"></circle>
              </svg>
            </div>
          </div>
        </div>
        <div class="w-[170px] h-[34px]">
          <div class="w-[170px] h-[34px] absolute left-[103.5px] top-[597.5px] bg-white border border-[#dcdbdb]"></div>
          <div class="w-[168px] h-8 absolute left-[104.5px] top-[598.5px] bg-[#ffefd6]"></div>
          <p class="absolute left-[115px] top-[608px] text-xs text-left text-black">
            Talent Academy CSV
          </p>
          <div class="flex flex-col justify-center items-center w-[15px] absolute left-[254px] top-[607px] gap-[3.124999761581421px]">
            <div class="flex-grow-0 flex-shrink-0 w-[5.43px] h-[15px] relative">
              <div class="flex flex-col justify-center items-center absolute left-0 top-0 gap-[2.4193546772003174px] px-[1.2096773386001587px] py-[1.6935482025146484px]">
                <svg
                  width="5"
                  height="13"
                  viewBox="0 0 5 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M2.50001 4.99468C2.20227 4.99468 1.91122 5.08297 1.66366 5.24838C1.41611 5.41379 1.22316 5.6489 1.10922 5.92397C0.995281 6.19904 0.96547 6.50172 1.02355 6.79374C1.08164 7.08575 1.22501 7.35399 1.43554 7.56452C1.64607 7.77505 1.91431 7.91842 2.20632 7.97651C2.49834 8.03459 2.80102 8.00478 3.07609 7.89084C3.35116 7.7769 3.58627 7.58395 3.75168 7.3364C3.91709 7.08884 4.00538 6.79779 4.00538 6.50005C4.00493 6.10094 3.84619 5.7183 3.56397 5.43609C3.28176 5.15387 2.89912 4.99513 2.50001 4.99468ZM2.50001 7.57532C2.28734 7.57532 2.07945 7.51226 1.90262 7.39411C1.72579 7.27596 1.58797 7.10802 1.50659 6.91154C1.4252 6.71506 1.40391 6.49886 1.4454 6.29028C1.48689 6.0817 1.5893 5.8901 1.73968 5.73972C1.89005 5.58935 2.08165 5.48694 2.29023 5.44545C2.49881 5.40396 2.71501 5.42525 2.91149 5.50664C3.10797 5.58802 3.27591 5.72584 3.39406 5.90267C3.51221 6.07949 3.57527 6.28739 3.57527 6.50005C3.57496 6.78514 3.46157 7.05845 3.25998 7.26003C3.0584 7.46162 2.78509 7.57501 2.50001 7.57532ZM2.50001 3.70436C2.79774 3.70436 3.08879 3.61607 3.33635 3.45065C3.58391 3.28524 3.77685 3.05013 3.89079 2.77506C4.00473 2.49999 4.03454 2.19731 3.97646 1.9053C3.91837 1.61328 3.775 1.34505 3.56447 1.13452C3.35394 0.923988 3.0857 0.780615 2.79369 0.72253C2.50168 0.664444 2.19899 0.694256 1.92392 0.808194C1.64885 0.922132 1.41374 1.11508 1.24833 1.36264C1.08292 1.6102 0.99463 1.90124 0.99463 2.19898C0.995077 2.59809 1.15382 2.98073 1.43604 3.26295C1.71825 3.54516 2.10089 3.70391 2.50001 3.70436ZM2.50001 1.12371C2.71267 1.12371 2.92057 1.18678 3.09739 1.30493C3.27422 1.42308 3.41204 1.59101 3.49342 1.78749C3.57481 1.98397 3.5961 2.20017 3.55461 2.40875C3.51312 2.61734 3.41071 2.80893 3.26034 2.95931C3.10996 3.10969 2.91836 3.2121 2.70978 3.25359C2.5012 3.29508 2.285 3.27378 2.08852 3.1924C1.89204 3.11101 1.7241 2.97319 1.60595 2.79637C1.4878 2.61954 1.42474 2.41165 1.42474 2.19898C1.42505 1.9139 1.53844 1.64058 1.74003 1.439C1.94161 1.23742 2.21492 1.12403 2.50001 1.12371ZM2.50001 9.29575C2.20227 9.29575 1.91122 9.38404 1.66366 9.54945C1.41611 9.71487 1.22316 9.94998 1.10922 10.225C0.995281 10.5001 0.96547 10.8028 1.02355 11.0948C1.08164 11.3868 1.22501 11.6551 1.43554 11.8656C1.64607 12.0761 1.91431 12.2195 2.20632 12.2776C2.49834 12.3357 2.80102 12.3059 3.07609 12.1919C3.35116 12.078 3.58627 11.885 3.75168 11.6375C3.91709 11.3899 4.00538 11.0989 4.00538 10.8011C4.00493 10.402 3.84619 10.0194 3.56397 9.73716C3.28176 9.45495 2.89912 9.2962 2.50001 9.29575ZM2.50001 11.8764C2.28734 11.8764 2.07945 11.8133 1.90262 11.6952C1.72579 11.577 1.58797 11.4091 1.50659 11.2126C1.4252 11.0161 1.40391 10.7999 1.4454 10.5914C1.48689 10.3828 1.5893 10.1912 1.73968 10.0408C1.89005 9.89042 2.08165 9.78801 2.29023 9.74652C2.49881 9.70503 2.71501 9.72633 2.91149 9.80771C3.10797 9.8891 3.27591 10.0269 3.39406 10.2037C3.51221 10.3806 3.57527 10.5885 3.57527 10.8011C3.57496 11.0862 3.46157 11.3595 3.25998 11.5611C3.0584 11.7627 2.78509 11.8761 2.50001 11.8764Z"
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
                class="absolute left-[1.15px] top-[1.56px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="1.5" cy="2.12512" r="1.25" fill="black"></circle>
              </svg>
              <svg
                width="3"
                height="3"
                viewBox="0 0 3 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="absolute left-[1.15px] top-[5.94px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="1.5" cy="1.50012" r="1.25" fill="black"></circle>
              </svg>
              <svg
                width="3"
                height="4"
                viewBox="0 0 3 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="absolute left-[1.15px] top-[10.31px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle cx="1.5" cy="1.87512" r="1.25" fill="black"></circle>
              </svg>
            </div>
          </div>
        </div>
        <div class="w-[281px] h-[70px]" onMouseEnter={() => setIsIndividualHover(true)} onMouseLeave={() => setIsIndividualHover(false)}>
          <div
            class="flex flex-col justify-start items-start absolute left-[519px] top-[217px] bg-white border border-gray-200"
            style={{ boxShadow: '0px 1px 3px 0 rgba(0,0,0,0.1), 0px 1px 2px 0 rgba(0,0,0,0.06)' }}
          >
            <div class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 px-2 py-1.5 bg-[#e6f2ff]">
              <p class="flex-grow w-[229px] text-xs text-left text-black">
                Individual learner records
              </p>
              <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-[15px] relative gap-[3.124999761581421px]">
                <div class="flex-grow-0 flex-shrink-0 w-[5.43px] h-[15px] relative">
                {isIndividualHover && (
                  <TourismErrorTwo />
                )}
                  <div class="flex flex-col justify-center items-center absolute left-0 top-0 gap-[2.4193546772003174px] px-[1.2096773386001587px] py-[1.6935482025146484px]">
                    <svg
                      width="5"
                      height="12"
                      viewBox="0 0 5 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="flex-grow-0 flex-shrink-0"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M2.50001 4.49456C2.20227 4.49456 1.91122 4.58285 1.66366 4.74826C1.41611 4.91367 1.22316 5.14878 1.10922 5.42385C0.995281 5.69892 0.96547 6.0016 1.02355 6.29362C1.08164 6.58563 1.22501 6.85386 1.43554 7.06439C1.64607 7.27492 1.91431 7.4183 2.20632 7.47638C2.49834 7.53447 2.80102 7.50466 3.07609 7.39072C3.35116 7.27678 3.58627 7.08383 3.75168 6.83627C3.91709 6.58872 4.00538 6.29767 4.00538 5.99993C4.00493 5.60082 3.84619 5.21818 3.56397 4.93597C3.28176 4.65375 2.89912 4.495 2.50001 4.49456ZM2.50001 7.0752C2.28734 7.0752 2.07945 7.01214 1.90262 6.89399C1.72579 6.77583 1.58797 6.6079 1.50659 6.41142C1.4252 6.21494 1.40391 5.99874 1.4454 5.79016C1.48689 5.58158 1.5893 5.38998 1.73968 5.2396C1.89005 5.08922 2.08165 4.98681 2.29023 4.94532C2.49881 4.90384 2.71501 4.92513 2.91149 5.00651C3.10797 5.0879 3.27591 5.22572 3.39406 5.40254C3.51221 5.57937 3.57527 5.78726 3.57527 5.99993C3.57496 6.28501 3.46157 6.55833 3.25998 6.75991C3.0584 6.96149 2.78509 7.07488 2.50001 7.0752ZM2.50001 3.20423C2.79774 3.20423 3.08879 3.11595 3.33635 2.95053C3.58391 2.78512 3.77685 2.55001 3.89079 2.27494C4.00473 1.99987 4.03454 1.69719 3.97646 1.40517C3.91837 1.11316 3.775 0.844927 3.56447 0.634397C3.35394 0.423866 3.0857 0.280493 2.79369 0.222407C2.50168 0.164322 2.19899 0.194134 1.92392 0.308072C1.64885 0.42201 1.41374 0.614958 1.24833 0.862516C1.08292 1.11007 0.99463 1.40112 0.99463 1.69886C0.995077 2.09797 1.15382 2.48061 1.43604 2.76283C1.71825 3.04504 2.10089 3.20379 2.50001 3.20423ZM2.50001 0.62359C2.71267 0.62359 2.92057 0.686653 3.09739 0.804805C3.27422 0.922957 3.41204 1.09089 3.49342 1.28737C3.57481 1.48385 3.5961 1.70005 3.55461 1.90863C3.51312 2.11721 3.41071 2.30881 3.26034 2.45919C3.10996 2.60957 2.91836 2.71198 2.70978 2.75347C2.5012 2.79496 2.285 2.77366 2.08852 2.69228C1.89204 2.61089 1.7241 2.47307 1.60595 2.29625C1.4878 2.11942 1.42474 1.91153 1.42474 1.69886C1.42505 1.41378 1.53844 1.14046 1.74003 0.938879C1.94161 0.737296 2.21492 0.623907 2.50001 0.62359ZM2.50001 8.79563C2.20227 8.79563 1.91122 8.88392 1.66366 9.04933C1.41611 9.21475 1.22316 9.44985 1.10922 9.72492C0.995281 10 0.96547 10.3027 1.02355 10.5947C1.08164 10.8867 1.22501 11.1549 1.43554 11.3655C1.64607 11.576 1.91431 11.7194 2.20632 11.7775C2.49834 11.8355 2.80102 11.8057 3.07609 11.6918C3.35116 11.5779 3.58627 11.3849 3.75168 11.1373C3.91709 10.8898 4.00538 10.5987 4.00538 10.301C4.00493 9.90189 3.84619 9.51925 3.56397 9.23704C3.28176 8.95482 2.89912 8.79608 2.50001 8.79563ZM2.50001 11.3763C2.28734 11.3763 2.07945 11.3132 1.90262 11.1951C1.72579 11.0769 1.58797 10.909 1.50659 10.7125C1.4252 10.516 1.40391 10.2998 1.4454 10.0912C1.48689 9.88265 1.5893 9.69106 1.73968 9.54068C1.89005 9.3903 2.08165 9.28789 2.29023 9.2464C2.49881 9.20491 2.71501 9.2262 2.91149 9.30759C3.10797 9.38897 3.27591 9.52679 3.39406 9.70362C3.51221 9.88045 3.57527 10.0883 3.57527 10.301C3.57496 10.5861 3.46157 10.8594 3.25998 11.061C3.0584 11.2626 2.78509 11.376 2.50001 11.3763Z"
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
                    class="absolute left-[1.15px] top-[1.56px]"
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
                    class="absolute left-[1.15px] top-[5.94px]"
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
                    class="absolute left-[1.15px] top-[10.31px]"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <circle cx="1.5" cy="1.375" r="1.25" fill="black"></circle>
                  </svg>
                </div>
              </div>
            </div>
            <div class="flex-grow-0 flex-shrink-0 w-[270px] h-px relative overflow-hidden bg-gray-200"></div>
            <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 p-2">
              <p class="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-black">
                Owner: Tourism
              </p>
            </div>
          </div>
          <div class="w-5 h-5">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="absolute left-[779.61px] top-[207.61px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx="10" cy="10" r="10" fill="#F27A75"></circle>
            </svg>
            <div class="flex flex-col justify-center items-center w-[19px] h-[18px] absolute left-[780.68px] top-[208.68px] gap-[3.954232931137085px]">
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
                    d="M8.17982 0.261597C6.71343 0.261597 5.27997 0.696431 4.06071 1.51111C2.84146 2.32579 1.89116 3.48373 1.33 4.8385C0.768837 6.19326 0.622012 7.68401 0.90809 9.12222C1.19417 10.5604 1.9003 11.8815 2.93719 12.9184C3.97409 13.9553 5.29517 14.6614 6.73338 14.9475C8.17159 15.2336 9.66234 15.0868 11.0171 14.5256C12.3719 13.9644 13.5298 13.0141 14.3445 11.7949C15.1592 10.5756 15.594 9.14217 15.594 7.67578C15.5918 5.7101 14.8099 3.82556 13.42 2.43561C12.03 1.04566 10.1455 0.263814 8.17982 0.261597ZM8.17982 14.4968C6.83074 14.4968 5.51196 14.0968 4.39024 13.3473C3.26853 12.5978 2.39425 11.5325 1.87798 10.2861C1.36172 9.0397 1.22664 7.66822 1.48983 6.34506C1.75302 5.02191 2.40266 3.80651 3.3566 2.85257C4.31054 1.89863 5.52594 1.24899 6.84909 0.985796C8.17225 0.722605 9.54373 0.857684 10.7901 1.37395C12.0365 1.89022 13.1018 2.76449 13.8513 3.88621C14.6008 5.00793 15.0009 6.32671 15.0009 7.67578C14.9988 9.48421 14.2795 11.218 13.0008 12.4967C11.722 13.7755 9.98824 14.4948 8.17982 14.4968ZM7.88325 8.26892V4.11697C7.88325 4.03832 7.91449 3.96289 7.97011 3.90727C8.02573 3.85165 8.10116 3.82041 8.17982 3.82041C8.25847 3.82041 8.3339 3.85165 8.38952 3.90727C8.44514 3.96289 8.47638 4.03832 8.47638 4.11697V8.26892C8.47638 8.34757 8.44514 8.42301 8.38952 8.47862C8.3339 8.53424 8.25847 8.56549 8.17982 8.56549C8.10116 8.56549 8.02573 8.53424 7.97011 8.47862C7.91449 8.42301 7.88325 8.34757 7.88325 8.26892ZM8.77295 10.938C8.77295 11.0553 8.73816 11.17 8.67299 11.2676C8.60781 11.3651 8.51518 11.4411 8.4068 11.486C8.29842 11.5309 8.17916 11.5427 8.0641 11.5198C7.94904 11.4969 7.84336 11.4404 7.76041 11.3574C7.67745 11.2745 7.62096 11.1688 7.59808 11.0537C7.57519 10.9387 7.58694 10.8194 7.63183 10.711C7.67672 10.6027 7.75275 10.51 7.85029 10.4449C7.94783 10.3797 8.0625 10.3449 8.17982 10.3449C8.33707 10.3451 8.48783 10.4076 8.59903 10.5188C8.71022 10.63 8.77277 10.7808 8.77295 10.938Z"
                    fill="white"
                    stroke="white"
                    stroke-width="0.2"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="w-[281px] h-[69px]">
          <div
            class="flex flex-col justify-start items-start absolute left-[519px] top-[315px] bg-white border border-gray-200"
            style={{ boxShadow: '0px 1px 3px 0 rgba(0,0,0,0.1), 0px 1px 2px 0 rgba(0,0,0,0.06)' }}
          >
            <div class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 px-2 py-1.5 bg-[#e6f2ff]">
              <p class="flex-grow w-[229px] text-xs text-left text-black">
                Individual learner records
              </p>
              <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-[15px] relative gap-[3.124999761581421px]">
                <div class="flex-grow-0 flex-shrink-0 w-[5.43px] h-[15px] relative">
                  <div class="flex flex-col justify-center items-center absolute left-0 top-0 gap-[2.4193546772003174px] px-[1.2096773386001587px] py-[1.6935482025146484px]">
                    <svg
                      width="5"
                      height="12"
                      viewBox="0 0 5 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="flex-grow-0 flex-shrink-0"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M2.50001 4.49614C2.20227 4.49614 1.91122 4.58443 1.66366 4.74985C1.41611 4.91526 1.22316 5.15037 1.10922 5.42544C0.995281 5.70051 0.96547 6.00319 1.02355 6.2952C1.08164 6.58722 1.22501 6.85545 1.43554 7.06598C1.64607 7.27651 1.91431 7.41988 2.20632 7.47797C2.49834 7.53606 2.80102 7.50624 3.07609 7.3923C3.35116 7.27837 3.58627 7.08542 3.75168 6.83786C3.91709 6.5903 4.00538 6.29925 4.00538 6.00152C4.00493 5.60241 3.84619 5.21977 3.56397 4.93755C3.28176 4.65534 2.89912 4.49659 2.50001 4.49614ZM2.50001 7.07679C2.28734 7.07679 2.07945 7.01372 1.90262 6.89557C1.72579 6.77742 1.58797 6.60949 1.50659 6.41301C1.4252 6.21653 1.40391 6.00033 1.4454 5.79174C1.48689 5.58316 1.5893 5.39157 1.73968 5.24119C1.89005 5.09081 2.08165 4.9884 2.29023 4.94691C2.49881 4.90542 2.71501 4.92672 2.91149 5.0081C3.10797 5.08949 3.27591 5.2273 3.39406 5.40413C3.51221 5.58096 3.57527 5.78885 3.57527 6.00152C3.57496 6.2866 3.46157 6.55992 3.25998 6.7615C3.0584 6.96308 2.78509 7.07647 2.50001 7.07679ZM2.50001 3.20582C2.79774 3.20582 3.08879 3.11753 3.33635 2.95212C3.58391 2.78671 3.77685 2.5516 3.89079 2.27653C4.00473 2.00146 4.03454 1.69878 3.97646 1.40676C3.91837 1.11475 3.775 0.846514 3.56447 0.635983C3.35394 0.425453 3.0857 0.28208 2.79369 0.223994C2.50168 0.165909 2.19899 0.195721 1.92392 0.309659C1.64885 0.423597 1.41374 0.616545 1.24833 0.864103C1.08292 1.11166 0.99463 1.40271 0.99463 1.70045C0.995077 2.09956 1.15382 2.4822 1.43604 2.76441C1.71825 3.04663 2.10089 3.20537 2.50001 3.20582ZM2.50001 0.625176C2.71267 0.625176 2.92057 0.68824 3.09739 0.806392C3.27422 0.924544 3.41204 1.09248 3.49342 1.28896C3.57481 1.48544 3.5961 1.70164 3.55461 1.91022C3.51312 2.1188 3.41071 2.3104 3.26034 2.46077C3.10996 2.61115 2.91836 2.71356 2.70978 2.75505C2.5012 2.79654 2.285 2.77525 2.08852 2.69386C1.89204 2.61248 1.7241 2.47466 1.60595 2.29783C1.4878 2.12101 1.42474 1.91311 1.42474 1.70045C1.42505 1.41536 1.53844 1.14205 1.74003 0.940466C1.94161 0.738882 2.21492 0.625494 2.50001 0.625176ZM2.50001 8.79722C2.20227 8.79722 1.91122 8.88551 1.66366 9.05092C1.41611 9.21633 1.22316 9.45144 1.10922 9.72651C0.995281 10.0016 0.96547 10.3043 1.02355 10.5963C1.08164 10.8883 1.22501 11.1565 1.43554 11.3671C1.64607 11.5776 1.91431 11.721 2.20632 11.779C2.49834 11.8371 2.80102 11.8073 3.07609 11.6934C3.35116 11.5794 3.58627 11.3865 3.75168 11.1389C3.91709 10.8914 4.00538 10.6003 4.00538 10.3026C4.00493 9.90348 3.84619 9.52084 3.56397 9.23863C3.28176 8.95641 2.89912 8.79767 2.50001 8.79722ZM2.50001 11.3779C2.28734 11.3779 2.07945 11.3148 1.90262 11.1966C1.72579 11.0785 1.58797 10.9106 1.50659 10.7141C1.4252 10.5176 1.40391 10.3014 1.4454 10.0928C1.48689 9.88424 1.5893 9.69264 1.73968 9.54226C1.89005 9.39188 2.08165 9.28948 2.29023 9.24799C2.49881 9.2065 2.71501 9.22779 2.91149 9.30918C3.10797 9.39056 3.27591 9.52838 3.39406 9.70521C3.51221 9.88203 3.57527 10.0899 3.57527 10.3026C3.57496 10.5877 3.46157 10.861 3.25998 11.0626C3.0584 11.2642 2.78509 11.3775 2.50001 11.3779Z"
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
                    class="absolute left-[1.15px] top-[1.56px]"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <circle
                      cx="1.5"
                      cy="1.62659"
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
                    class="absolute left-[1.15px] top-[5.94px]"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <circle
                      cx="1.5"
                      cy="2.00159"
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
                    class="absolute left-[1.15px] top-[10.31px]"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <circle
                      cx="1.5"
                      cy="1.37659"
                      r="1.25"
                      fill="black"
                    ></circle>
                  </svg>
                </div>
              </div>
            </div>
            <div class="flex-grow-0 flex-shrink-0 w-[270px] h-px relative overflow-hidden bg-[#13100f]/[0.15]"></div>
            <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 p-2">
              <p class="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-black">
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
            class="w-5 h-5"
            preserveAspectRatio="none"
          >
            <circle cx="10" cy="10" r="10" fill="#4EBF8D"></circle>
            <path
              d="M9.99999 7.75003C9.55498 7.75003 9.11997 7.88199 8.74996 8.12922C8.37995 8.37646 8.09156 8.72786 7.92126 9.13899C7.75096 9.55013 7.7064 10.0025 7.79322 10.439C7.88004 10.8754 8.09433 11.2764 8.409 11.591C8.72367 11.9057 9.12458 12.12 9.56104 12.2068C9.99749 12.2936 10.4499 12.2491 10.861 12.0788C11.2722 11.9085 11.6236 11.6201 11.8708 11.2501C12.118 10.8801 12.25 10.445 12.25 10C12.2493 9.4035 12.012 8.83159 11.5902 8.40978C11.1684 7.98797 10.5965 7.7507 9.99999 7.75003ZM9.99999 11.75C9.65387 11.75 9.31553 11.6474 9.02774 11.4551C8.73995 11.2628 8.51565 10.9895 8.3832 10.6697C8.25075 10.35 8.21609 9.99809 8.28361 9.65862C8.35114 9.31915 8.51781 9.00733 8.76255 8.76259C9.00729 8.51785 9.31911 8.35118 9.65858 8.28365C9.99805 8.21613 10.3499 8.25079 10.6697 8.38324C10.9895 8.51569 11.2628 8.74 11.4551 9.02778C11.6474 9.31557 11.75 9.65391 11.75 10C11.7495 10.464 11.5649 10.9088 11.2369 11.2369C10.9088 11.565 10.464 11.7495 9.99999 11.75ZM6.08385 8.34582C5.75433 9.12487 5.66499 9.98458 5.82728 10.8147C5.98957 11.6449 6.39609 12.4077 6.99474 13.0052C7.01795 13.0285 7.03637 13.056 7.04893 13.0863C7.0615 13.1167 7.06796 13.1492 7.06796 13.182C7.06797 13.2148 7.0615 13.2473 7.04894 13.2777C7.03638 13.308 7.01797 13.3356 6.99475 13.3588C6.97154 13.382 6.94398 13.4004 6.91366 13.413C6.88333 13.4255 6.85082 13.432 6.81799 13.432C6.78516 13.432 6.75266 13.4255 6.72233 13.413C6.692 13.4004 6.66444 13.382 6.64122 13.3588C6.1997 12.918 5.84943 12.3944 5.61044 11.8181C5.37145 11.2417 5.24843 10.6239 5.24843 10C5.24843 9.37611 5.37145 8.75832 5.61044 8.18198C5.84943 7.60565 6.1997 7.0821 6.64122 6.64127C6.68811 6.59439 6.75169 6.56805 6.81799 6.56805C6.88429 6.56806 6.94787 6.5944 6.99475 6.64128C7.04163 6.68816 7.06797 6.75175 7.06796 6.81805C7.06796 6.88435 7.04162 6.94793 6.99474 6.99481C6.60657 7.38198 6.29722 7.8408 6.08385 8.34582ZM14.75 10C14.7507 10.6239 14.6282 11.2418 14.3895 11.8182C14.1507 12.3946 13.8004 12.9182 13.3588 13.3588C13.3355 13.382 13.308 13.4004 13.2777 13.413C13.2473 13.4255 13.2148 13.432 13.182 13.432C13.1492 13.432 13.1167 13.4255 13.0863 13.413C13.056 13.4004 13.0284 13.382 13.0052 13.3588C12.982 13.3356 12.9636 13.308 12.951 13.2777C12.9385 13.2473 12.932 13.2148 12.932 13.182C12.932 13.1492 12.9385 13.1167 12.951 13.0863C12.9636 13.056 12.982 13.0285 13.0052 13.0052C13.4003 12.6108 13.7138 12.1424 13.9276 11.6267C14.1415 11.1111 14.2516 10.5583 14.2516 10C14.2516 9.44177 14.1415 8.88899 13.9276 8.37332C13.7138 7.85765 13.4003 7.38921 13.0052 6.99481C12.982 6.9716 12.9636 6.94404 12.951 6.91371C12.9385 6.88338 12.932 6.85088 12.932 6.81805C12.932 6.78522 12.9385 6.75271 12.951 6.72238C12.9636 6.69205 12.982 6.66449 13.0052 6.64128C13.0284 6.61807 13.056 6.59965 13.0863 6.58709C13.1167 6.57452 13.1492 6.56806 13.182 6.56805C13.2148 6.56805 13.2473 6.57452 13.2777 6.58708C13.308 6.59964 13.3355 6.61805 13.3588 6.64127C13.8004 7.08189 14.1507 7.60545 14.3895 8.18185C14.6282 8.75825 14.7507 9.37614 14.75 10ZM5.22698 14.773C5.25019 14.7962 5.26861 14.8238 5.28117 14.8541C5.29374 14.8844 5.3002 14.9169 5.3002 14.9498C5.30021 14.9826 5.29374 15.0151 5.28118 15.0454C5.26862 15.0758 5.25021 15.1033 5.22699 15.1265C5.20378 15.1498 5.17622 15.1682 5.1459 15.1807C5.11557 15.1933 5.08306 15.1998 5.05023 15.1998C5.0174 15.1998 4.9849 15.1933 4.95457 15.1807C4.92424 15.1682 4.89668 15.1498 4.87346 15.1266C4.19954 14.4537 3.66489 13.6546 3.30011 12.7749C2.93532 11.8953 2.74756 10.9523 2.74756 10C2.74756 9.04773 2.93532 8.10477 3.30011 7.22511C3.66489 6.34545 4.19954 5.54634 4.87346 4.8735C4.92035 4.82663 4.98393 4.80029 5.05023 4.80029C5.11653 4.8003 5.18011 4.82664 5.22699 4.87352C5.27387 4.9204 5.30021 4.98399 5.3002 5.05029C5.3002 5.11659 5.27386 5.18017 5.22698 5.22705C4.59948 5.85345 4.10166 6.59744 3.762 7.41645C3.42234 8.23545 3.24751 9.11339 3.24751 10C3.24751 10.8867 3.42234 11.7646 3.762 12.5836C4.10166 13.4026 4.59948 14.1466 5.22698 14.773ZM17.25 10C17.2512 10.9523 17.0642 11.8954 16.6998 12.7752C16.3353 13.6549 15.8007 14.454 15.1265 15.1266C15.0796 15.1734 15.016 15.1998 14.9497 15.1998C14.8834 15.1998 14.8199 15.1734 14.773 15.1265C14.7261 15.0797 14.6998 15.0161 14.6998 14.9498C14.6998 14.8835 14.7261 14.8199 14.773 14.773C15.4005 14.1466 15.8983 13.4026 16.238 12.5836C16.5776 11.7646 16.7525 10.8867 16.7525 10C16.7525 9.11339 16.5776 8.23545 16.238 7.41645C15.8983 6.59744 15.4005 5.85345 14.773 5.22705C14.7261 5.18017 14.6998 5.11659 14.6998 5.05029C14.6998 4.98399 14.7261 4.9204 14.773 4.87352C14.8199 4.82664 14.8834 4.8003 14.9497 4.80029C15.016 4.80029 15.0796 4.82663 15.1265 4.8735C15.8007 5.54603 16.3353 6.34513 16.6997 7.2249C17.0642 8.10467 17.2512 9.04777 17.25 10Z"
              fill="white"
              stroke="white"
              stroke-width="0.2"
            ></path>
          </svg>
        </div>
        <div class="w-[281px] h-[69px]" onMouseEnter={() => setIsDcOneHover(true)} onMouseLeave={() => setIsDcOneHover(false)}>
          <div
            class="flex flex-col justify-start items-start absolute left-[519px] top-[423px] bg-white border border-gray-200"
            style={{ boxShadow: '0px 1px 3px 0 rgba(0,0,0,0.1), 0px 1px 2px 0 rgba(0,0,0,0.06)' }}
          >
            <div class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 px-2 py-1.5 bg-[#e6f2ff]">
              <p class="flex-grow w-[229px] text-xs text-left text-black">
                Individual learner records
              </p>
              <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-[15px] relative gap-[3.124999761581421px]">
                <div class="flex-grow-0 flex-shrink-0 w-[5.43px] h-[15px] relative">
                  {isDcOneHover && (
                    <DcCsvOne />
                  )}
                  <div class="flex flex-col justify-center items-center absolute left-0 top-0 gap-[2.4193546772003174px] px-[1.2096773386001587px] py-[1.6935482025146484px]">
                    <svg
                      width="5"
                      height="12"
                      viewBox="0 0 5 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="flex-grow-0 flex-shrink-0"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M2.50001 4.49614C2.20227 4.49614 1.91122 4.58443 1.66366 4.74985C1.41611 4.91526 1.22316 5.15037 1.10922 5.42544C0.995281 5.70051 0.96547 6.00319 1.02355 6.2952C1.08164 6.58722 1.22501 6.85545 1.43554 7.06598C1.64607 7.27651 1.91431 7.41988 2.20632 7.47797C2.49834 7.53606 2.80102 7.50624 3.07609 7.3923C3.35116 7.27837 3.58627 7.08542 3.75168 6.83786C3.91709 6.5903 4.00538 6.29925 4.00538 6.00152C4.00493 5.60241 3.84619 5.21977 3.56397 4.93755C3.28176 4.65534 2.89912 4.49659 2.50001 4.49614ZM2.50001 7.07679C2.28734 7.07679 2.07945 7.01372 1.90262 6.89557C1.72579 6.77742 1.58797 6.60949 1.50659 6.41301C1.4252 6.21653 1.40391 6.00033 1.4454 5.79174C1.48689 5.58316 1.5893 5.39157 1.73968 5.24119C1.89005 5.09081 2.08165 4.9884 2.29023 4.94691C2.49881 4.90542 2.71501 4.92672 2.91149 5.0081C3.10797 5.08949 3.27591 5.2273 3.39406 5.40413C3.51221 5.58096 3.57527 5.78885 3.57527 6.00152C3.57496 6.2866 3.46157 6.55992 3.25998 6.7615C3.0584 6.96308 2.78509 7.07647 2.50001 7.07679ZM2.50001 3.20582C2.79774 3.20582 3.08879 3.11753 3.33635 2.95212C3.58391 2.78671 3.77685 2.5516 3.89079 2.27653C4.00473 2.00146 4.03454 1.69878 3.97646 1.40676C3.91837 1.11475 3.775 0.846514 3.56447 0.635983C3.35394 0.425453 3.0857 0.28208 2.79369 0.223994C2.50168 0.165909 2.19899 0.195721 1.92392 0.309659C1.64885 0.423597 1.41374 0.616545 1.24833 0.864103C1.08292 1.11166 0.99463 1.40271 0.99463 1.70045C0.995077 2.09956 1.15382 2.4822 1.43604 2.76441C1.71825 3.04663 2.10089 3.20537 2.50001 3.20582ZM2.50001 0.625176C2.71267 0.625176 2.92057 0.68824 3.09739 0.806392C3.27422 0.924544 3.41204 1.09248 3.49342 1.28896C3.57481 1.48544 3.5961 1.70164 3.55461 1.91022C3.51312 2.1188 3.41071 2.3104 3.26034 2.46077C3.10996 2.61115 2.91836 2.71356 2.70978 2.75505C2.5012 2.79654 2.285 2.77525 2.08852 2.69386C1.89204 2.61248 1.7241 2.47466 1.60595 2.29783C1.4878 2.12101 1.42474 1.91311 1.42474 1.70045C1.42505 1.41536 1.53844 1.14205 1.74003 0.940466C1.94161 0.738882 2.21492 0.625494 2.50001 0.625176ZM2.50001 8.79722C2.20227 8.79722 1.91122 8.88551 1.66366 9.05092C1.41611 9.21633 1.22316 9.45144 1.10922 9.72651C0.995281 10.0016 0.96547 10.3043 1.02355 10.5963C1.08164 10.8883 1.22501 11.1565 1.43554 11.3671C1.64607 11.5776 1.91431 11.721 2.20632 11.779C2.49834 11.8371 2.80102 11.8073 3.07609 11.6934C3.35116 11.5794 3.58627 11.3865 3.75168 11.1389C3.91709 10.8914 4.00538 10.6003 4.00538 10.3026C4.00493 9.90348 3.84619 9.52084 3.56397 9.23863C3.28176 8.95641 2.89912 8.79767 2.50001 8.79722ZM2.50001 11.3779C2.28734 11.3779 2.07945 11.3148 1.90262 11.1966C1.72579 11.0785 1.58797 10.9106 1.50659 10.7141C1.4252 10.5176 1.40391 10.3014 1.4454 10.0928C1.48689 9.88424 1.5893 9.69264 1.73968 9.54226C1.89005 9.39188 2.08165 9.28948 2.29023 9.24799C2.49881 9.2065 2.71501 9.22779 2.91149 9.30918C3.10797 9.39056 3.27591 9.52838 3.39406 9.70521C3.51221 9.88203 3.57527 10.0899 3.57527 10.3026C3.57496 10.5877 3.46157 10.861 3.25998 11.0626C3.0584 11.2642 2.78509 11.3775 2.50001 11.3779Z"
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
                    class="absolute left-[1.15px] top-[1.56px]"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <circle
                      cx="1.5"
                      cy="1.62659"
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
                    class="absolute left-[1.15px] top-[5.94px]"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <circle
                      cx="1.5"
                      cy="2.00159"
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
                    class="absolute left-[1.15px] top-[10.31px]"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <circle
                      cx="1.5"
                      cy="1.37659"
                      r="1.25"
                      fill="black"
                    ></circle>
                  </svg>
                </div>
              </div>
            </div>
            <div class="flex-grow-0 flex-shrink-0 w-[270px] h-px relative overflow-hidden bg-[#13100f]/[0.15]"></div>
            <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 p-2">
              <p class="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-black">
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
            class="w-5 h-5"
            preserveAspectRatio="none"
          >
            <circle cx="10.0024" cy="10" r="10" fill="#4EBF8D"></circle>
            <g clip-path="url(#clip0_576_470799)">
              <path
                d="M10.0024 7.75003C9.55742 7.75003 9.12241 7.88199 8.7524 8.12922C8.38239 8.37646 8.094 8.72786 7.9237 9.13899C7.7534 9.55013 7.70885 10.0025 7.79566 10.439C7.88248 10.8754 8.09677 11.2764 8.41144 11.591C8.72611 11.9057 9.12702 12.12 9.56348 12.2068C9.99993 12.2936 10.4523 12.2491 10.8635 12.0788C11.2746 11.9085 11.626 11.6201 11.8732 11.2501C12.1205 10.8801 12.2524 10.445 12.2524 10C12.2518 9.4035 12.0145 8.83159 11.5927 8.40978C11.1709 7.98797 10.599 7.7507 10.0024 7.75003ZM10.0024 11.75C9.65631 11.75 9.31797 11.6474 9.03018 11.4551C8.7424 11.2628 8.51809 10.9895 8.38564 10.6697C8.25319 10.35 8.21853 9.99809 8.28606 9.65862C8.35358 9.31915 8.52025 9.00733 8.76499 8.76259C9.00974 8.51785 9.32156 8.35118 9.66102 8.28365C10.0005 8.21613 10.3524 8.25079 10.6721 8.38324C10.9919 8.51569 11.2652 8.74 11.4575 9.02778C11.6498 9.31557 11.7524 9.65391 11.7524 10C11.7519 10.464 11.5674 10.9088 11.2393 11.2369C10.9112 11.565 10.4664 11.7495 10.0024 11.75ZM6.08629 8.34582C5.75677 9.12487 5.66743 9.98458 5.82972 10.8147C5.99201 11.6449 6.39853 12.4077 6.99718 13.0052C7.02039 13.0285 7.03881 13.056 7.05137 13.0863C7.06394 13.1167 7.0704 13.1492 7.07041 13.182C7.07041 13.2148 7.06394 13.2473 7.05138 13.2777C7.03882 13.308 7.02041 13.3356 6.99719 13.3588C6.97398 13.382 6.94643 13.4004 6.9161 13.413C6.88577 13.4255 6.85326 13.432 6.82043 13.432C6.7876 13.432 6.7551 13.4255 6.72477 13.413C6.69444 13.4004 6.66688 13.382 6.64366 13.3588C6.20214 12.918 5.85187 12.3944 5.61288 11.8181C5.37389 11.2417 5.25088 10.6239 5.25088 10C5.25088 9.37611 5.37389 8.75832 5.61288 8.18198C5.85187 7.60565 6.20214 7.0821 6.64366 6.64127C6.69055 6.59439 6.75413 6.56805 6.82043 6.56805C6.88673 6.56806 6.95032 6.5944 6.99719 6.64128C7.04407 6.68816 7.07041 6.75175 7.07041 6.81805C7.0704 6.88435 7.04406 6.94793 6.99718 6.99481C6.60901 7.38198 6.29967 7.8408 6.08629 8.34582ZM14.7524 10C14.7532 10.6239 14.6307 11.2418 14.3919 11.8182C14.1532 12.3946 13.8029 12.9182 13.3612 13.3588C13.338 13.382 13.3104 13.4004 13.2801 13.413C13.2498 13.4255 13.2173 13.432 13.1844 13.432C13.1516 13.432 13.1191 13.4255 13.0888 13.413C13.0584 13.4004 13.0309 13.382 13.0077 13.3588C12.9845 13.3356 12.966 13.308 12.9535 13.2777C12.9409 13.2473 12.9345 13.2148 12.9345 13.182C12.9345 13.1492 12.9409 13.1167 12.9535 13.0863C12.9661 13.056 12.9845 13.0285 13.0077 13.0052C13.4028 12.6108 13.7162 12.1424 13.9301 11.6267C14.1439 11.1111 14.254 10.5583 14.254 10C14.254 9.44177 14.1439 8.88899 13.9301 8.37332C13.7162 7.85765 13.4028 7.38921 13.0077 6.99481C12.9845 6.9716 12.9661 6.94404 12.9535 6.91371C12.9409 6.88338 12.9345 6.85088 12.9345 6.81805C12.9345 6.78522 12.9409 6.75271 12.9535 6.72238C12.966 6.69205 12.9845 6.66449 13.0077 6.64128C13.0309 6.61807 13.0584 6.59965 13.0888 6.58709C13.1191 6.57452 13.1516 6.56806 13.1844 6.56805C13.2173 6.56805 13.2498 6.57452 13.2801 6.58708C13.3104 6.59964 13.338 6.61805 13.3612 6.64127C13.8029 7.08189 14.1532 7.60545 14.3919 8.18185C14.6307 8.75825 14.7532 9.37614 14.7524 10ZM5.22942 14.773C5.25263 14.7962 5.27105 14.8238 5.28361 14.8541C5.29618 14.8844 5.30264 14.9169 5.30265 14.9498C5.30265 14.9826 5.29618 15.0151 5.28362 15.0454C5.27106 15.0758 5.25265 15.1033 5.22943 15.1265C5.20622 15.1498 5.17867 15.1682 5.14834 15.1807C5.11801 15.1933 5.0855 15.1998 5.05267 15.1998C5.01984 15.1998 4.98734 15.1933 4.95701 15.1807C4.92668 15.1682 4.89912 15.1498 4.8759 15.1266C4.20198 14.4537 3.66733 13.6546 3.30255 12.7749C2.93776 11.8953 2.75 10.9523 2.75 10C2.75 9.04773 2.93776 8.10477 3.30255 7.22511C3.66733 6.34545 4.20198 5.54634 4.8759 4.8735C4.92279 4.82663 4.98637 4.80029 5.05267 4.80029C5.11897 4.8003 5.18256 4.82664 5.22943 4.87352C5.27631 4.9204 5.30265 4.98399 5.30265 5.05029C5.30264 5.11659 5.2763 5.18017 5.22942 5.22705C4.60192 5.85345 4.1041 6.59744 3.76445 7.41645C3.42479 8.23545 3.24995 9.11339 3.24995 10C3.24995 10.8867 3.42479 11.7646 3.76445 12.5836C4.1041 13.4026 4.60192 14.1466 5.22942 14.773ZM17.2524 10C17.2536 10.9523 17.0666 11.8954 16.7022 12.7752C16.3378 13.6549 15.8031 14.454 15.129 15.1266C15.0821 15.1734 15.0185 15.1998 14.9522 15.1998C14.8859 15.1998 14.8223 15.1734 14.7754 15.1265C14.7285 15.0797 14.7022 15.0161 14.7022 14.9498C14.7022 14.8835 14.7286 14.8199 14.7754 14.773C15.4029 14.1466 15.9008 13.4026 16.2404 12.5836C16.5801 11.7646 16.7549 10.8867 16.7549 10C16.7549 9.11339 16.5801 8.23545 16.2404 7.41645C15.9008 6.59744 15.4029 5.85345 14.7754 5.22705C14.7286 5.18017 14.7022 5.11659 14.7022 5.05029C14.7022 4.98399 14.7285 4.9204 14.7754 4.87352C14.8223 4.82664 14.8859 4.8003 14.9522 4.80029C15.0185 4.80029 15.0821 4.82663 15.129 4.8735C15.8031 5.54603 16.3378 6.34513 16.7022 7.2249C17.0666 8.10467 17.2536 9.04777 17.2524 10Z"
                fill="white"
                stroke="white"
                stroke-width="0.2"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_576_470799">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(2.00244 2)"
                ></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class="flex flex-col justify-start items-start w-[178px] absolute left-[1189px] top-[328px] p-px bg-white border border-[#dcdbdb]">
          <div class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 px-2 py-1.5 bg-[#0076a8]">
            <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 gap-1">
              <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[3.124999761581421px] px-[1.5624998807907104px] py-[2.187499761581421px]">
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
                    d="M12.5156 10.6875H11.8125V1.07812C11.8125 1.01597 11.7878 0.956353 11.7438 0.9124C11.6999 0.868447 11.6403 0.843753 11.5781 0.84375H8.29687C8.23472 0.843753 8.1751 0.868447 8.13115 0.9124C8.0872 0.956353 8.0625 1.01597 8.0625 1.07812V3.65625H5.01562C4.95347 3.65625 4.89385 3.68095 4.8499 3.7249C4.80595 3.76885 4.78125 3.82847 4.78125 3.89062V6.46875H1.73437C1.67222 6.46875 1.6126 6.49345 1.56865 6.5374C1.5247 6.58135 1.5 6.64097 1.5 6.70312V10.6875H0.796875C0.734715 10.6875 0.675101 10.7122 0.631147 10.7561C0.587193 10.8001 0.5625 10.8597 0.5625 10.9219C0.5625 10.984 0.587193 11.0436 0.631147 11.0876C0.675101 11.1316 0.734715 11.1562 0.796875 11.1562H12.5156C12.5778 11.1562 12.6374 11.1316 12.6814 11.0876C12.7253 11.0436 12.75 10.984 12.75 10.9219C12.75 10.8597 12.7253 10.8001 12.6814 10.7561C12.6374 10.7122 12.5778 10.6875 12.5156 10.6875ZM5.25 4.125H8.0625V10.6875H5.25V4.125ZM1.96875 6.9375H4.78125V10.6875H1.96875V6.9375ZM8.53125 10.6875V1.3125H11.3437V10.6875H8.53125Z"
                    fill="white"
                    stroke="white"
                    stroke-width="0.3"
                  ></path>
                </svg>
              </div>
            </div>
            <p class="flex-grow w-[109.69px] text-xs text-left text-white">
              Learner dashboard
            </p>
            <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-[15px] relative gap-[3.124999761581421px]">
              <div class="flex-grow-0 flex-shrink-0 w-[5.43px] h-[15px] relative">
                <div class="flex flex-col justify-center items-center absolute left-0 top-0 gap-[2.4193546772003174px] px-[1.2096773386001587px] py-[1.6935482025146484px]">
                  <svg
                    width="5"
                    height="12"
                    viewBox="0 0 5 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="flex-grow-0 flex-shrink-0"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M2.50001 4.49456C2.20227 4.49456 1.91122 4.58285 1.66366 4.74826C1.41611 4.91367 1.22316 5.14878 1.10922 5.42385C0.995281 5.69892 0.96547 6.0016 1.02355 6.29362C1.08164 6.58563 1.22501 6.85386 1.43554 7.06439C1.64607 7.27492 1.91431 7.4183 2.20632 7.47638C2.49834 7.53447 2.80102 7.50466 3.07609 7.39072C3.35116 7.27678 3.58627 7.08383 3.75168 6.83627C3.91709 6.58872 4.00538 6.29767 4.00538 5.99993C4.00493 5.60082 3.84619 5.21818 3.56397 4.93597C3.28176 4.65375 2.89912 4.495 2.50001 4.49456ZM2.50001 7.0752C2.28734 7.0752 2.07945 7.01214 1.90262 6.89399C1.72579 6.77583 1.58797 6.6079 1.50659 6.41142C1.4252 6.21494 1.40391 5.99874 1.4454 5.79016C1.48689 5.58158 1.5893 5.38998 1.73968 5.2396C1.89005 5.08922 2.08165 4.98681 2.29023 4.94532C2.49881 4.90384 2.71501 4.92513 2.91149 5.00651C3.10797 5.0879 3.27591 5.22572 3.39406 5.40254C3.51221 5.57937 3.57527 5.78726 3.57527 5.99993C3.57496 6.28501 3.46157 6.55833 3.25998 6.75991C3.0584 6.96149 2.78509 7.07488 2.50001 7.0752ZM2.50001 3.20423C2.79774 3.20423 3.08879 3.11595 3.33635 2.95053C3.58391 2.78512 3.77685 2.55001 3.89079 2.27494C4.00473 1.99987 4.03454 1.69719 3.97646 1.40517C3.91837 1.11316 3.775 0.844927 3.56447 0.634397C3.35394 0.423866 3.0857 0.280493 2.79369 0.222407C2.50168 0.164322 2.19899 0.194134 1.92392 0.308072C1.64885 0.42201 1.41374 0.614958 1.24833 0.862516C1.08292 1.11007 0.99463 1.40112 0.99463 1.69886C0.995077 2.09797 1.15382 2.48061 1.43604 2.76283C1.71825 3.04504 2.10089 3.20379 2.50001 3.20423ZM2.50001 0.62359C2.71267 0.62359 2.92057 0.686653 3.09739 0.804805C3.27422 0.922957 3.41204 1.09089 3.49342 1.28737C3.57481 1.48385 3.5961 1.70005 3.55461 1.90863C3.51312 2.11721 3.41071 2.30881 3.26034 2.45919C3.10996 2.60957 2.91836 2.71198 2.70978 2.75347C2.5012 2.79496 2.285 2.77366 2.08852 2.69228C1.89204 2.61089 1.7241 2.47307 1.60595 2.29625C1.4878 2.11942 1.42474 1.91153 1.42474 1.69886C1.42505 1.41378 1.53844 1.14046 1.74003 0.938879C1.94161 0.737296 2.21492 0.623907 2.50001 0.62359ZM2.50001 8.79563C2.20227 8.79563 1.91122 8.88392 1.66366 9.04933C1.41611 9.21475 1.22316 9.44985 1.10922 9.72492C0.995281 10 0.96547 10.3027 1.02355 10.5947C1.08164 10.8867 1.22501 11.1549 1.43554 11.3655C1.64607 11.576 1.91431 11.7194 2.20632 11.7775C2.49834 11.8355 2.80102 11.8057 3.07609 11.6918C3.35116 11.5779 3.58627 11.3849 3.75168 11.1373C3.91709 10.8898 4.00538 10.5987 4.00538 10.301C4.00493 9.90189 3.84619 9.51925 3.56397 9.23704C3.28176 8.95482 2.89912 8.79608 2.50001 8.79563ZM2.50001 11.3763C2.28734 11.3763 2.07945 11.3132 1.90262 11.1951C1.72579 11.0769 1.58797 10.909 1.50659 10.7125C1.4252 10.516 1.40391 10.2998 1.4454 10.0912C1.48689 9.88265 1.5893 9.69106 1.73968 9.54068C1.89005 9.3903 2.08165 9.28789 2.29023 9.2464C2.49881 9.20491 2.71501 9.2262 2.91149 9.30759C3.10797 9.38897 3.27591 9.52679 3.39406 9.70362C3.51221 9.88045 3.57527 10.0883 3.57527 10.301C3.57496 10.5861 3.46157 10.8594 3.25998 11.061C3.0584 11.2626 2.78509 11.376 2.50001 11.3763Z"
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
                  class="absolute left-[1.15px] top-[1.56px]"
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
                  class="absolute left-[1.15px] top-[5.94px]"
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
                  class="absolute left-[1.15px] top-[10.31px]"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <circle cx="1.5" cy="1.375" r="1.25" fill="white"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="w-[237px] h-[70px]">
          <div class="flex flex-col justify-start items-start w-[228px] absolute left-[902px] top-[313px] p-px bg-white border border-[#dcdbdb]">
            <div class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 px-2 py-1.5 bg-[#e6f2ff]">
              <p class="flex-grow w-[185px] text-xs text-left text-black">
                TA - All learner records
              </p>
              <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-[15px] relative gap-[3.124999761581421px]">
                <div class="flex-grow-0 flex-shrink-0 w-[5.43px] h-[15px] relative">
                  <div class="flex flex-col justify-center items-center absolute left-0 top-0 gap-[2.4193546772003174px] px-[1.2096773386001587px] py-[1.6935482025146484px]">
                    <svg
                      width="5"
                      height="12"
                      viewBox="0 0 5 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="flex-grow-0 flex-shrink-0"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M2.50001 4.49456C2.20227 4.49456 1.91122 4.58285 1.66366 4.74826C1.41611 4.91367 1.22316 5.14878 1.10922 5.42385C0.995281 5.69892 0.96547 6.0016 1.02355 6.29362C1.08164 6.58563 1.22501 6.85386 1.43554 7.06439C1.64607 7.27492 1.91431 7.4183 2.20632 7.47638C2.49834 7.53447 2.80102 7.50466 3.07609 7.39072C3.35116 7.27678 3.58627 7.08383 3.75168 6.83627C3.91709 6.58872 4.00538 6.29767 4.00538 5.99993C4.00493 5.60082 3.84619 5.21818 3.56397 4.93597C3.28176 4.65375 2.89912 4.495 2.50001 4.49456ZM2.50001 7.0752C2.28734 7.0752 2.07945 7.01214 1.90262 6.89399C1.72579 6.77583 1.58797 6.6079 1.50659 6.41142C1.4252 6.21494 1.40391 5.99874 1.4454 5.79016C1.48689 5.58158 1.5893 5.38998 1.73968 5.2396C1.89005 5.08922 2.08165 4.98681 2.29023 4.94532C2.49881 4.90384 2.71501 4.92513 2.91149 5.00651C3.10797 5.0879 3.27591 5.22572 3.39406 5.40254C3.51221 5.57937 3.57527 5.78726 3.57527 5.99993C3.57496 6.28501 3.46157 6.55833 3.25998 6.75991C3.0584 6.96149 2.78509 7.07488 2.50001 7.0752ZM2.50001 3.20423C2.79774 3.20423 3.08879 3.11595 3.33635 2.95053C3.58391 2.78512 3.77685 2.55001 3.89079 2.27494C4.00473 1.99987 4.03454 1.69719 3.97646 1.40517C3.91837 1.11316 3.775 0.844927 3.56447 0.634397C3.35394 0.423866 3.0857 0.280493 2.79369 0.222407C2.50168 0.164322 2.19899 0.194134 1.92392 0.308072C1.64885 0.42201 1.41374 0.614958 1.24833 0.862516C1.08292 1.11007 0.99463 1.40112 0.99463 1.69886C0.995077 2.09797 1.15382 2.48061 1.43604 2.76283C1.71825 3.04504 2.10089 3.20379 2.50001 3.20423ZM2.50001 0.62359C2.71267 0.62359 2.92057 0.686653 3.09739 0.804805C3.27422 0.922957 3.41204 1.09089 3.49342 1.28737C3.57481 1.48385 3.5961 1.70005 3.55461 1.90863C3.51312 2.11721 3.41071 2.30881 3.26034 2.45919C3.10996 2.60957 2.91836 2.71198 2.70978 2.75347C2.5012 2.79496 2.285 2.77366 2.08852 2.69228C1.89204 2.61089 1.7241 2.47307 1.60595 2.29625C1.4878 2.11942 1.42474 1.91153 1.42474 1.69886C1.42505 1.41378 1.53844 1.14046 1.74003 0.938879C1.94161 0.737296 2.21492 0.623907 2.50001 0.62359ZM2.50001 8.79563C2.20227 8.79563 1.91122 8.88392 1.66366 9.04933C1.41611 9.21475 1.22316 9.44985 1.10922 9.72492C0.995281 10 0.96547 10.3027 1.02355 10.5947C1.08164 10.8867 1.22501 11.1549 1.43554 11.3655C1.64607 11.576 1.91431 11.7194 2.20632 11.7775C2.49834 11.8355 2.80102 11.8057 3.07609 11.6918C3.35116 11.5779 3.58627 11.3849 3.75168 11.1373C3.91709 10.8898 4.00538 10.5987 4.00538 10.301C4.00493 9.90189 3.84619 9.51925 3.56397 9.23704C3.28176 8.95482 2.89912 8.79608 2.50001 8.79563ZM2.50001 11.3763C2.28734 11.3763 2.07945 11.3132 1.90262 11.1951C1.72579 11.0769 1.58797 10.909 1.50659 10.7125C1.4252 10.516 1.40391 10.2998 1.4454 10.0912C1.48689 9.88265 1.5893 9.69106 1.73968 9.54068C1.89005 9.3903 2.08165 9.28789 2.29023 9.2464C2.49881 9.20491 2.71501 9.2262 2.91149 9.30759C3.10797 9.38897 3.27591 9.52679 3.39406 9.70362C3.51221 9.88045 3.57527 10.0883 3.57527 10.301C3.57496 10.5861 3.46157 10.8594 3.25998 11.061C3.0584 11.2626 2.78509 11.376 2.50001 11.3763Z"
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
                    class="absolute left-[1.15px] top-[1.56px]"
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
                    class="absolute left-[1.15px] top-[5.94px]"
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
                    class="absolute left-[1.15px] top-[10.31px]"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <circle cx="1.5" cy="1.375" r="1.25" fill="black"></circle>
                  </svg>
                </div>
              </div>
            </div>
            <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 p-2">
              <p class="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-black">
                Owner: Talent Academy
              </p>
            </div>
          </div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            preserveAspectRatio="none"
          >
            <circle cx="10" cy="10" r="10" fill="#4EBF8D"></circle>
            <path
              d="M9.99999 7.75003C9.55498 7.75003 9.11997 7.88199 8.74996 8.12922C8.37995 8.37646 8.09156 8.72786 7.92126 9.13899C7.75096 9.55013 7.7064 10.0025 7.79322 10.439C7.88004 10.8754 8.09433 11.2764 8.409 11.591C8.72367 11.9057 9.12458 12.12 9.56104 12.2068C9.99749 12.2936 10.4499 12.2491 10.861 12.0788C11.2722 11.9085 11.6236 11.6201 11.8708 11.2501C12.118 10.8801 12.25 10.445 12.25 10C12.2493 9.4035 12.012 8.83159 11.5902 8.40978C11.1684 7.98797 10.5965 7.7507 9.99999 7.75003ZM9.99999 11.75C9.65387 11.75 9.31553 11.6474 9.02774 11.4551C8.73995 11.2628 8.51565 10.9895 8.3832 10.6697C8.25075 10.35 8.21609 9.99809 8.28361 9.65862C8.35114 9.31915 8.51781 9.00733 8.76255 8.76259C9.00729 8.51785 9.31911 8.35118 9.65858 8.28365C9.99805 8.21613 10.3499 8.25079 10.6697 8.38324C10.9895 8.51569 11.2628 8.74 11.4551 9.02778C11.6474 9.31557 11.75 9.65391 11.75 10C11.7495 10.464 11.5649 10.9088 11.2369 11.2369C10.9088 11.565 10.464 11.7495 9.99999 11.75ZM6.08385 8.34582C5.75433 9.12487 5.66499 9.98458 5.82728 10.8147C5.98957 11.6449 6.39609 12.4077 6.99474 13.0052C7.01795 13.0285 7.03637 13.056 7.04893 13.0863C7.0615 13.1167 7.06796 13.1492 7.06796 13.182C7.06797 13.2148 7.0615 13.2473 7.04894 13.2777C7.03638 13.308 7.01797 13.3356 6.99475 13.3588C6.97154 13.382 6.94398 13.4004 6.91366 13.413C6.88333 13.4255 6.85082 13.432 6.81799 13.432C6.78516 13.432 6.75266 13.4255 6.72233 13.413C6.692 13.4004 6.66444 13.382 6.64122 13.3588C6.1997 12.918 5.84943 12.3944 5.61044 11.8181C5.37145 11.2417 5.24843 10.6239 5.24843 10C5.24843 9.37611 5.37145 8.75832 5.61044 8.18198C5.84943 7.60565 6.1997 7.0821 6.64122 6.64127C6.68811 6.59439 6.75169 6.56805 6.81799 6.56805C6.88429 6.56806 6.94787 6.5944 6.99475 6.64128C7.04163 6.68816 7.06797 6.75175 7.06796 6.81805C7.06796 6.88435 7.04162 6.94793 6.99474 6.99481C6.60657 7.38198 6.29722 7.8408 6.08385 8.34582ZM14.75 10C14.7507 10.6239 14.6282 11.2418 14.3895 11.8182C14.1507 12.3946 13.8004 12.9182 13.3588 13.3588C13.3355 13.382 13.308 13.4004 13.2777 13.413C13.2473 13.4255 13.2148 13.432 13.182 13.432C13.1492 13.432 13.1167 13.4255 13.0863 13.413C13.056 13.4004 13.0284 13.382 13.0052 13.3588C12.982 13.3356 12.9636 13.308 12.951 13.2777C12.9385 13.2473 12.932 13.2148 12.932 13.182C12.932 13.1492 12.9385 13.1167 12.951 13.0863C12.9636 13.056 12.982 13.0285 13.0052 13.0052C13.4003 12.6108 13.7138 12.1424 13.9276 11.6267C14.1415 11.1111 14.2516 10.5583 14.2516 10C14.2516 9.44177 14.1415 8.88899 13.9276 8.37332C13.7138 7.85765 13.4003 7.38921 13.0052 6.99481C12.982 6.9716 12.9636 6.94404 12.951 6.91371C12.9385 6.88338 12.932 6.85088 12.932 6.81805C12.932 6.78522 12.9385 6.75271 12.951 6.72238C12.9636 6.69205 12.982 6.66449 13.0052 6.64128C13.0284 6.61807 13.056 6.59965 13.0863 6.58709C13.1167 6.57452 13.1492 6.56806 13.182 6.56805C13.2148 6.56805 13.2473 6.57452 13.2777 6.58708C13.308 6.59964 13.3355 6.61805 13.3588 6.64127C13.8004 7.08189 14.1507 7.60545 14.3895 8.18185C14.6282 8.75825 14.7507 9.37614 14.75 10ZM5.22698 14.773C5.25019 14.7962 5.26861 14.8238 5.28117 14.8541C5.29374 14.8844 5.3002 14.9169 5.3002 14.9498C5.30021 14.9826 5.29374 15.0151 5.28118 15.0454C5.26862 15.0758 5.25021 15.1033 5.22699 15.1265C5.20378 15.1498 5.17622 15.1682 5.1459 15.1807C5.11557 15.1933 5.08306 15.1998 5.05023 15.1998C5.0174 15.1998 4.9849 15.1933 4.95457 15.1807C4.92424 15.1682 4.89668 15.1498 4.87346 15.1266C4.19954 14.4537 3.66489 13.6546 3.30011 12.7749C2.93532 11.8953 2.74756 10.9523 2.74756 10C2.74756 9.04773 2.93532 8.10477 3.30011 7.22511C3.66489 6.34545 4.19954 5.54634 4.87346 4.8735C4.92035 4.82663 4.98393 4.80029 5.05023 4.80029C5.11653 4.8003 5.18011 4.82664 5.22699 4.87352C5.27387 4.9204 5.30021 4.98399 5.3002 5.05029C5.3002 5.11659 5.27386 5.18017 5.22698 5.22705C4.59948 5.85345 4.10166 6.59744 3.762 7.41645C3.42234 8.23545 3.24751 9.11339 3.24751 10C3.24751 10.8867 3.42234 11.7646 3.762 12.5836C4.10166 13.4026 4.59948 14.1466 5.22698 14.773ZM17.25 10C17.2512 10.9523 17.0642 11.8954 16.6998 12.7752C16.3353 13.6549 15.8007 14.454 15.1265 15.1266C15.0796 15.1734 15.016 15.1998 14.9497 15.1998C14.8834 15.1998 14.8199 15.1734 14.773 15.1265C14.7261 15.0797 14.6998 15.0161 14.6998 14.9498C14.6998 14.8835 14.7261 14.8199 14.773 14.773C15.4005 14.1466 15.8983 13.4026 16.238 12.5836C16.5776 11.7646 16.7525 10.8867 16.7525 10C16.7525 9.11339 16.5776 8.23545 16.238 7.41645C15.8983 6.59744 15.4005 5.85345 14.773 5.22705C14.7261 5.18017 14.6998 5.11659 14.6998 5.05029C14.6998 4.98399 14.7261 4.9204 14.773 4.87352C14.8199 4.82664 14.8834 4.8003 14.9497 4.80029C15.016 4.80029 15.0796 4.82663 15.1265 4.8735C15.8007 5.54603 16.3353 6.34513 16.6997 7.2249C17.0642 8.10467 17.2512 9.04777 17.25 10Z"
              fill="white"
              stroke="white"
              stroke-width="0.2"
            ></path>
          </svg>
        </div>
        <div class="w-[350.7px] h-[99.91px]">
          <svg
            width="114"
            height="69"
            viewBox="0 0 114 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute left-[789.3px] top-[174.93px]"
            preserveAspectRatio="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M104 0.926636L114 6.70014L104 12.4736V7.70014H61.9999V7.65113L33.8102 7.36519C28.7679 7.31405 24.6675 11.4151 24.7194 16.4574L24.8606 30.1792L24.8516 30.1792L25.1335 57.802C25.1964 63.9648 20.1844 68.9768 14.0216 68.9137L0.299805 68.7734L0.320261 66.7735L14.0421 66.9138C19.0843 66.9654 23.1851 62.8647 23.1336 57.8224L22.8395 29.0101L22.8485 29.01L22.7195 16.4779C22.6561 10.3152 27.6677 5.30279 33.8305 5.36529L62.6428 5.65755L62.6424 5.70014H104V0.926636Z"
              fill="#D9D4C9"
            ></path>
          </svg>
          <div class="w-[237px] h-[70px]">
            <div class="flex flex-col justify-start items-start w-[228px] absolute left-[903px] top-[151px] p-px bg-white border border-[#dcdbdb]">
              <div class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 px-2 py-1.5 bg-[#e6f2ff]">
                <p class="flex-grow w-[185px] text-xs text-left text-black">
                  Learning record subset _ no PII
                </p>
                <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-[15px] relative gap-[3.124999761581421px]">
                  <div class="flex-grow-0 flex-shrink-0 w-[5.43px] h-[15px] relative">
                    <div class="flex flex-col justify-center items-center absolute left-0 top-0 gap-[2.4193546772003174px] px-[1.2096773386001587px] py-[1.6935482025146484px]">
                      <svg
                        width="5"
                        height="12"
                        viewBox="0 0 5 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex-grow-0 flex-shrink-0"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path
                          d="M2.50001 4.49456C2.20227 4.49456 1.91122 4.58285 1.66366 4.74826C1.41611 4.91367 1.22316 5.14878 1.10922 5.42385C0.995281 5.69892 0.96547 6.0016 1.02355 6.29362C1.08164 6.58563 1.22501 6.85386 1.43554 7.06439C1.64607 7.27492 1.91431 7.4183 2.20632 7.47638C2.49834 7.53447 2.80102 7.50466 3.07609 7.39072C3.35116 7.27678 3.58627 7.08383 3.75168 6.83627C3.91709 6.58872 4.00538 6.29767 4.00538 5.99993C4.00493 5.60082 3.84619 5.21818 3.56397 4.93597C3.28176 4.65375 2.89912 4.495 2.50001 4.49456ZM2.50001 7.0752C2.28734 7.0752 2.07945 7.01214 1.90262 6.89399C1.72579 6.77583 1.58797 6.6079 1.50659 6.41142C1.4252 6.21494 1.40391 5.99874 1.4454 5.79016C1.48689 5.58158 1.5893 5.38998 1.73968 5.2396C1.89005 5.08922 2.08165 4.98681 2.29023 4.94532C2.49881 4.90384 2.71501 4.92513 2.91149 5.00651C3.10797 5.0879 3.27591 5.22572 3.39406 5.40254C3.51221 5.57937 3.57527 5.78726 3.57527 5.99993C3.57496 6.28501 3.46157 6.55833 3.25998 6.75991C3.0584 6.96149 2.78509 7.07488 2.50001 7.0752ZM2.50001 3.20423C2.79774 3.20423 3.08879 3.11595 3.33635 2.95053C3.58391 2.78512 3.77685 2.55001 3.89079 2.27494C4.00473 1.99987 4.03454 1.69719 3.97646 1.40517C3.91837 1.11316 3.775 0.844927 3.56447 0.634397C3.35394 0.423866 3.0857 0.280493 2.79369 0.222407C2.50168 0.164322 2.19899 0.194134 1.92392 0.308072C1.64885 0.42201 1.41374 0.614958 1.24833 0.862516C1.08292 1.11007 0.99463 1.40112 0.99463 1.69886C0.995077 2.09797 1.15382 2.48061 1.43604 2.76283C1.71825 3.04504 2.10089 3.20379 2.50001 3.20423ZM2.50001 0.62359C2.71267 0.62359 2.92057 0.686653 3.09739 0.804805C3.27422 0.922957 3.41204 1.09089 3.49342 1.28737C3.57481 1.48385 3.5961 1.70005 3.55461 1.90863C3.51312 2.11721 3.41071 2.30881 3.26034 2.45919C3.10996 2.60957 2.91836 2.71198 2.70978 2.75347C2.5012 2.79496 2.285 2.77366 2.08852 2.69228C1.89204 2.61089 1.7241 2.47307 1.60595 2.29625C1.4878 2.11942 1.42474 1.91153 1.42474 1.69886C1.42505 1.41378 1.53844 1.14046 1.74003 0.938879C1.94161 0.737296 2.21492 0.623907 2.50001 0.62359ZM2.50001 8.79563C2.20227 8.79563 1.91122 8.88392 1.66366 9.04933C1.41611 9.21475 1.22316 9.44985 1.10922 9.72492C0.995281 10 0.96547 10.3027 1.02355 10.5947C1.08164 10.8867 1.22501 11.1549 1.43554 11.3655C1.64607 11.576 1.91431 11.7194 2.20632 11.7775C2.49834 11.8355 2.80102 11.8057 3.07609 11.6918C3.35116 11.5779 3.58627 11.3849 3.75168 11.1373C3.91709 10.8898 4.00538 10.5987 4.00538 10.301C4.00493 9.90189 3.84619 9.51925 3.56397 9.23704C3.28176 8.95482 2.89912 8.79608 2.50001 8.79563ZM2.50001 11.3763C2.28734 11.3763 2.07945 11.3132 1.90262 11.1951C1.72579 11.0769 1.58797 10.909 1.50659 10.7125C1.4252 10.516 1.40391 10.2998 1.4454 10.0912C1.48689 9.88265 1.5893 9.69106 1.73968 9.54068C1.89005 9.3903 2.08165 9.28789 2.29023 9.2464C2.49881 9.20491 2.71501 9.2262 2.91149 9.30759C3.10797 9.38897 3.27591 9.52679 3.39406 9.70362C3.51221 9.88045 3.57527 10.0883 3.57527 10.301C3.57496 10.5861 3.46157 10.8594 3.25998 11.061C3.0584 11.2626 2.78509 11.376 2.50001 11.3763Z"
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
                      class="absolute left-[1.15px] top-[1.56px]"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <circle
                        cx="1.5"
                        cy="1.625"
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
                      class="absolute left-[1.15px] top-[5.94px]"
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
                      class="absolute left-[1.15px] top-[10.31px]"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <circle
                        cx="1.5"
                        cy="1.375"
                        r="1.25"
                        fill="black"
                      ></circle>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 p-2">
                <p class="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-black">
                  Owner Talent Academy
                </p>
              </div>
            </div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              preserveAspectRatio="none"
            >
              <circle cx="10" cy="10" r="10" fill="#4EBF8D"></circle>
              <path
                d="M9.99999 7.75003C9.55498 7.75003 9.11997 7.88199 8.74996 8.12922C8.37995 8.37646 8.09156 8.72786 7.92126 9.13899C7.75096 9.55013 7.7064 10.0025 7.79322 10.439C7.88004 10.8754 8.09433 11.2764 8.409 11.591C8.72367 11.9057 9.12458 12.12 9.56104 12.2068C9.99749 12.2936 10.4499 12.2491 10.861 12.0788C11.2722 11.9085 11.6236 11.6201 11.8708 11.2501C12.118 10.8801 12.25 10.445 12.25 10C12.2493 9.4035 12.012 8.83159 11.5902 8.40978C11.1684 7.98797 10.5965 7.7507 9.99999 7.75003ZM9.99999 11.75C9.65387 11.75 9.31553 11.6474 9.02774 11.4551C8.73995 11.2628 8.51565 10.9895 8.3832 10.6697C8.25075 10.35 8.21609 9.99809 8.28361 9.65862C8.35114 9.31915 8.51781 9.00733 8.76255 8.76259C9.00729 8.51785 9.31911 8.35118 9.65858 8.28365C9.99805 8.21613 10.3499 8.25079 10.6697 8.38324C10.9895 8.51569 11.2628 8.74 11.4551 9.02778C11.6474 9.31557 11.75 9.65391 11.75 10C11.7495 10.464 11.5649 10.9088 11.2369 11.2369C10.9088 11.565 10.464 11.7495 9.99999 11.75ZM6.08385 8.34582C5.75433 9.12487 5.66499 9.98458 5.82728 10.8147C5.98957 11.6449 6.39609 12.4077 6.99474 13.0052C7.01795 13.0285 7.03637 13.056 7.04893 13.0863C7.0615 13.1167 7.06796 13.1492 7.06796 13.182C7.06797 13.2148 7.0615 13.2473 7.04894 13.2777C7.03638 13.308 7.01797 13.3356 6.99475 13.3588C6.97154 13.382 6.94398 13.4004 6.91366 13.413C6.88333 13.4255 6.85082 13.432 6.81799 13.432C6.78516 13.432 6.75266 13.4255 6.72233 13.413C6.692 13.4004 6.66444 13.382 6.64122 13.3588C6.1997 12.918 5.84943 12.3944 5.61044 11.8181C5.37145 11.2417 5.24843 10.6239 5.24843 10C5.24843 9.37611 5.37145 8.75832 5.61044 8.18198C5.84943 7.60565 6.1997 7.0821 6.64122 6.64127C6.68811 6.59439 6.75169 6.56805 6.81799 6.56805C6.88429 6.56806 6.94787 6.5944 6.99475 6.64128C7.04163 6.68816 7.06797 6.75175 7.06796 6.81805C7.06796 6.88435 7.04162 6.94793 6.99474 6.99481C6.60657 7.38198 6.29722 7.8408 6.08385 8.34582ZM14.75 10C14.7507 10.6239 14.6282 11.2418 14.3895 11.8182C14.1507 12.3946 13.8004 12.9182 13.3588 13.3588C13.3355 13.382 13.308 13.4004 13.2777 13.413C13.2473 13.4255 13.2148 13.432 13.182 13.432C13.1492 13.432 13.1167 13.4255 13.0863 13.413C13.056 13.4004 13.0284 13.382 13.0052 13.3588C12.982 13.3356 12.9636 13.308 12.951 13.2777C12.9385 13.2473 12.932 13.2148 12.932 13.182C12.932 13.1492 12.9385 13.1167 12.951 13.0863C12.9636 13.056 12.982 13.0285 13.0052 13.0052C13.4003 12.6108 13.7138 12.1424 13.9276 11.6267C14.1415 11.1111 14.2516 10.5583 14.2516 10C14.2516 9.44177 14.1415 8.88899 13.9276 8.37332C13.7138 7.85765 13.4003 7.38921 13.0052 6.99481C12.982 6.9716 12.9636 6.94404 12.951 6.91371C12.9385 6.88338 12.932 6.85088 12.932 6.81805C12.932 6.78522 12.9385 6.75271 12.951 6.72238C12.9636 6.69205 12.982 6.66449 13.0052 6.64128C13.0284 6.61807 13.056 6.59965 13.0863 6.58709C13.1167 6.57452 13.1492 6.56806 13.182 6.56805C13.2148 6.56805 13.2473 6.57452 13.2777 6.58708C13.308 6.59964 13.3355 6.61805 13.3588 6.64127C13.8004 7.08189 14.1507 7.60545 14.3895 8.18185C14.6282 8.75825 14.7507 9.37614 14.75 10ZM5.22698 14.773C5.25019 14.7962 5.26861 14.8238 5.28117 14.8541C5.29374 14.8844 5.3002 14.9169 5.3002 14.9498C5.30021 14.9826 5.29374 15.0151 5.28118 15.0454C5.26862 15.0758 5.25021 15.1033 5.22699 15.1265C5.20378 15.1498 5.17622 15.1682 5.1459 15.1807C5.11557 15.1933 5.08306 15.1998 5.05023 15.1998C5.0174 15.1998 4.9849 15.1933 4.95457 15.1807C4.92424 15.1682 4.89668 15.1498 4.87346 15.1266C4.19954 14.4537 3.66489 13.6546 3.30011 12.7749C2.93532 11.8953 2.74756 10.9523 2.74756 10C2.74756 9.04773 2.93532 8.10477 3.30011 7.22511C3.66489 6.34545 4.19954 5.54634 4.87346 4.8735C4.92035 4.82663 4.98393 4.80029 5.05023 4.80029C5.11653 4.8003 5.18011 4.82664 5.22699 4.87352C5.27387 4.9204 5.30021 4.98399 5.3002 5.05029C5.3002 5.11659 5.27386 5.18017 5.22698 5.22705C4.59948 5.85345 4.10166 6.59744 3.762 7.41645C3.42234 8.23545 3.24751 9.11339 3.24751 10C3.24751 10.8867 3.42234 11.7646 3.762 12.5836C4.10166 13.4026 4.59948 14.1466 5.22698 14.773ZM17.25 10C17.2512 10.9523 17.0642 11.8954 16.6998 12.7752C16.3353 13.6549 15.8007 14.454 15.1265 15.1266C15.0796 15.1734 15.016 15.1998 14.9497 15.1998C14.8834 15.1998 14.8199 15.1734 14.773 15.1265C14.7261 15.0797 14.6998 15.0161 14.6998 14.9498C14.6998 14.8835 14.7261 14.8199 14.773 14.773C15.4005 14.1466 15.8983 13.4026 16.238 12.5836C16.5776 11.7646 16.7525 10.8867 16.7525 10C16.7525 9.11339 16.5776 8.23545 16.238 7.41645C15.8983 6.59744 15.4005 5.85345 14.773 5.22705C14.7261 5.18017 14.6998 5.11659 14.6998 5.05029C14.6998 4.98399 14.7261 4.9204 14.773 4.87352C14.8199 4.82664 14.8834 4.8003 14.9497 4.80029C15.016 4.80029 15.0796 4.82663 15.1265 4.8735C15.8007 5.54603 16.3353 6.34513 16.6997 7.2249C17.0642 8.10467 17.2512 9.04777 17.25 10Z"
                fill="white"
                stroke="white"
                stroke-width="0.2"
              ></path>
            </svg>
          </div>
        </div>
        <div class="w-[169px] h-[19px]">
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute left-[103.5px] top-[195.5px]"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M12.4912 1.16379C11.1154 0.41332 9.29309 0 7.36 0C5.42691 0 3.60461 0.41332 2.22875 1.16379C0.79152 1.94773 0 3.0118 0 4.16V11.84C0 12.9882 0.79152 14.0523 2.22875 14.8362C3.60461 15.5867 5.42691 16 7.36 16C9.29309 16 11.1154 15.5867 12.4912 14.8362C13.9285 14.0523 14.72 12.9882 14.72 11.84V4.16C14.72 3.0118 13.9285 1.94773 12.4912 1.16379ZM2.5352 1.72563C3.81867 1.02555 5.53215 0.64 7.36 0.64C9.18785 0.64 10.9013 1.02555 12.1848 1.72562C13.407 2.39227 14.08 3.2568 14.08 4.16C14.08 5.0632 13.407 5.92773 12.1848 6.59438C10.9013 7.29445 9.18785 7.68 7.36 7.68C5.53215 7.68 3.81867 7.29445 2.5352 6.59438C1.31305 5.92773 0.64 5.0632 0.64 4.16C0.64 3.2568 1.31305 2.39227 2.5352 1.72563ZM14.08 11.84C14.08 12.7432 13.407 13.6077 12.1848 14.2744C10.9013 14.9745 9.18785 15.36 7.36 15.36C5.53215 15.36 3.81867 14.9745 2.5352 14.2744C1.31305 13.6077 0.64 12.7432 0.64 11.84V9.71855C1.01537 10.1931 1.54992 10.6259 2.22875 10.9962C3.60461 11.7467 5.42691 12.16 7.36 12.16C9.29309 12.16 11.1154 11.7467 12.4912 10.9962C13.1701 10.6259 13.7046 10.1931 14.08 9.71855V11.84ZM14.08 8C14.08 8.9032 13.407 9.76773 12.1848 10.4344C10.9013 11.1345 9.18785 11.52 7.36 11.52C5.53215 11.52 3.81867 11.1345 2.5352 10.4344C1.31305 9.76773 0.64 8.9032 0.64 8V5.87855C1.01537 6.35313 1.54992 6.78594 2.22875 7.15621C3.60461 7.90668 5.42691 8.32 7.36 8.32C9.29309 8.32 11.1154 7.90668 12.4912 7.15621C13.1701 6.78594 13.7046 6.35313 14.08 5.87855V8Z"
              fill="black"
            ></path>
          </svg>
          <p class="w-[146px] h-[19px] absolute left-[127px] top-[195px] text-base font-light text-left text-black">
            Data sources
          </p>
        </div>
        <div class="w-[258px] h-6">
          <div class="flex justify-start items-start absolute left-[518px] top-[178px]">
            <div class="flex-grow-0 flex-shrink-0 w-[17.09px] h-[16.85px] relative">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-[17.09px] h-[16.85px]"
                preserveAspectRatio="none"
              >
                <path
                  d="M17.3302 17.8434C16.2027 18.9709 14.7595 19.732 13.183 20.0306C11.6066 20.3291 9.96777 20.1517 8.47377 19.5206C6.97977 18.8896 5.69771 17.8333 4.78971 16.4854C3.88172 15.1375 3.38857 13.5584 3.37262 11.9479C3.35668 10.3374 3.81865 8.76785 4.70013 7.43764C5.58161 6.10743 6.84301 5.07634 8.3248 4.47476C9.80659 3.87319 11.4422 3.72815 13.0249 4.05798C14.6075 4.3878 16.0661 5.17769 17.2162 6.32775L11.5242 12.0197L17.3302 17.8434Z"
                  fill="#1E1B19"
                ></path>
                <path
                  d="M6.43339 17.104C9.30653 19.9771 13.9364 20.0055 16.7745 17.1674C19.6126 14.3293 19.5842 9.69945 16.7111 6.8263C13.8379 3.95316 9.20805 3.92476 6.36995 6.76286C3.53185 9.60097 3.56025 14.2308 6.43339 17.104Z"
                  fill="white"
                ></path>
                <path
                  style={{mixBlendMode:'multiply'}}
                  d="M9.97342 17.4144C12.4469 18.4593 15.2594 17.3176 16.2553 14.8644C17.2511 12.4112 16.0533 9.5754 13.5798 8.53055C11.1063 7.48569 8.29377 8.6274 7.29791 11.0806C6.30204 13.5338 7.49991 16.3696 9.97342 17.4144Z"
                  fill="url(#paint0_radial_593_81361)"
                ></path>
                <path
                  d="M21.0372 9.73341L21.0372 9.73348L21.0438 9.73871C21.6663 10.2307 22.0694 10.9483 22.1647 11.733C22.26 12.5176 22.0399 13.3048 21.554 13.9218C21.068 14.5388 20.3552 14.936 19.5719 15.0257C18.7961 15.1145 18.0138 14.8942 17.3941 14.4122L17.3829 14.401L17.367 14.3851L17.3495 14.3711C16.9798 14.0744 16.509 13.9334 16.0377 13.9793C15.5664 14.0252 15.1325 14.2545 14.8299 14.6184L14.8299 14.6184L14.8254 14.6239C14.2868 15.2952 13.5518 15.7813 12.7217 16.0152C11.8915 16.2491 11.0068 16.2192 10.1896 15.9289C9.37244 15.6387 8.66345 15.1025 8.16073 14.3943C7.65801 13.6862 7.38662 12.8413 7.38354 11.9767C7.38045 11.1121 7.64576 10.2703 8.14237 9.56721C8.63896 8.86414 9.34266 8.334 10.1566 8.05C10.9706 7.76599 11.855 7.74205 12.6878 7.98214C13.5207 8.22225 14.2607 8.71451 14.8053 9.39114L14.8053 9.39118L14.8102 9.39712C15.1141 9.76032 15.5474 9.99148 16.018 10.0406C16.4887 10.0898 16.9596 9.95291 17.3293 9.65827L17.3474 9.64386L17.3638 9.62751L17.3638 9.62746L17.3639 9.62741L17.3639 9.62736L17.364 9.6273L17.364 9.62725L17.3641 9.6272L17.3641 9.62714L17.3642 9.62709L17.3642 9.62703L17.3643 9.62698L17.3643 9.62692L17.3644 9.62687L17.3645 9.62681L17.3645 9.62676L17.3646 9.6267L17.3646 9.62665L17.3647 9.62659L17.3647 9.62654L17.3648 9.62648L17.3648 9.62642L17.3649 9.62637L17.365 9.62631L17.365 9.62625L17.3651 9.62619L17.3651 9.62614L17.3652 9.62608L17.3653 9.62602L17.3653 9.62596L17.3654 9.6259L17.3654 9.62584L17.3655 9.62579L17.3655 9.62573L17.3656 9.62567L17.3657 9.62561L17.3657 9.62555L17.3658 9.62549L17.3658 9.62543L17.3659 9.62537L17.366 9.62531L17.366 9.62525L17.3661 9.62518L17.3661 9.62512L17.3662 9.62506L17.3663 9.625L17.3663 9.62494L17.3664 9.62488L17.3665 9.62481L17.3665 9.62475L17.3666 9.62469L17.3666 9.62463L17.3667 9.62456L17.3668 9.6245L17.3668 9.62444L17.3669 9.62438L17.367 9.62431L17.367 9.62425L17.3671 9.62418L17.3672 9.62412L17.3672 9.62406L17.3673 9.62399L17.3673 9.62393L17.3674 9.62386L17.3675 9.6238L17.3675 9.62373L17.3676 9.62367L17.3677 9.6236L17.3677 9.62354L17.3678 9.62347L17.3679 9.62341L17.3679 9.62334L17.368 9.62327L17.3681 9.62321L17.3681 9.62314L17.3682 9.62307L17.3683 9.62301L17.3683 9.62294L17.3684 9.62287L17.3685 9.62281L17.3685 9.62274L17.3686 9.62267L17.3687 9.62261L17.3687 9.62254L17.3688 9.62247L17.3689 9.6224L17.3689 9.62233L17.369 9.62227L17.3691 9.6222L17.3691 9.62213L17.3692 9.62206L17.3693 9.62199L17.3693 9.62192L17.3694 9.62185L17.3695 9.62179L17.3696 9.62172L17.3696 9.62165L17.3697 9.62158L17.3698 9.62151L17.3698 9.62144L17.3699 9.62137L17.37 9.6213L17.37 9.62123L17.3701 9.62116L17.3702 9.62109L17.3703 9.62102L17.3703 9.62095L17.3704 9.62088L17.3705 9.62081L17.3705 9.62074L17.3706 9.62067L17.3707 9.6206L17.3707 9.62052L17.3708 9.62045L17.3709 9.62038L17.3709 9.62034C17.8994 9.23191 18.5435 9.02986 19.2031 9.04682C19.8722 9.06402 20.5183 9.30565 21.0372 9.73341Z"
                  stroke="#1E1B19"
                  stroke-width="0.820819"
                ></path>
                <path
                  d="M19.0939 14.3893C20.4013 14.4023 21.4506 13.3531 21.4376 12.0457C21.4246 10.7384 20.3542 9.66801 19.0469 9.65501C17.7395 9.64201 16.6902 10.6913 16.7032 11.9986C16.7162 13.306 17.7866 14.3763 19.0939 14.3893Z"
                  fill="white"
                ></path>
                <defs>
                  <radialGradient
                    id="paint0_radial_593_81361"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(-307.538 1452.52) rotate(45) scale(186.354 182.684)"
                  >
                    <stop></stop>
                    <stop offset="1" stop-color="white"></stop>
                  </radialGradient>
                </defs>
              </svg>
              <div class="flex flex-col justify-start items-start absolute left-[12.25px] top-[2.08px] gap-[4.10409688949585px]">
                <svg
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M1.77569 2.76623C1.66482 2.7172 1.56415 2.64718 1.47933 2.56012L1.47943 2.56003C1.34896 2.42754 1.26003 2.26014 1.22382 2.07909C1.18762 1.89805 1.20576 1.71155 1.27581 1.54318C1.34585 1.37482 1.46467 1.23207 1.61722 1.13294C1.76978 1.03381 1.94932 0.982695 2.13318 0.986201C2.31706 0.989708 2.49698 1.04769 2.6501 1.15292C2.80323 1.25815 2.92258 1.40583 2.99304 1.57722C3.0635 1.7486 3.08188 1.9359 3.046 2.11538C3.01013 2.29484 2.92163 2.45847 2.79175 2.58563L2.79159 2.58579C2.70545 2.67104 2.60286 2.73798 2.48975 2.7827C2.37665 2.82742 2.25527 2.84902 2.13268 2.84621C2.01008 2.8434 1.88872 2.81623 1.77569 2.76623ZM3.03559 1.00342C2.85156 0.819398 2.61813 0.692951 2.36474 0.640134C2.11135 0.587315 1.84932 0.610499 1.61182 0.706909C1.37432 0.803323 1.1721 0.968608 1.03079 1.18186C0.889477 1.39511 0.81549 1.64665 0.818055 1.9046C0.82062 2.16254 0.899609 2.41531 1.04492 2.63101C1.19022 2.84671 1.39538 3.01575 1.6345 3.11676C1.87363 3.21777 2.13606 3.24624 2.38864 3.19842C2.64123 3.15059 2.87258 3.02861 3.05335 2.84784C3.29577 2.60543 3.42989 2.27482 3.42646 1.9289C3.42302 1.58303 3.28234 1.25018 3.03559 1.00342Z"
                    fill="#1E1B19"
                    stroke="#1E1B19"
                    stroke-width="0.0820819"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="w-[258px] h-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 absolute left-[518px] top-[178px]"
              preserveAspectRatio="none"
            >
              <path
                d="M17.3302 17.8435C16.2027 18.971 14.7595 19.7322 13.183 20.0307C11.6066 20.3293 9.96777 20.1518 8.47377 19.5208C6.97977 18.8897 5.69771 17.8334 4.78971 16.4855C3.88172 15.1376 3.38857 13.5585 3.37262 11.9481C3.35668 10.3376 3.81865 8.76797 4.70013 7.43776C5.58161 6.10755 6.84301 5.07646 8.3248 4.47489C9.80659 3.87331 11.4422 3.72827 13.0249 4.0581C14.6075 4.38793 16.0661 5.17782 17.2162 6.32788L11.5242 12.0198L17.3302 17.8435Z"
                fill="#1E1B19"
              ></path>
              <path
                d="M6.43339 17.104C9.30653 19.9771 13.9364 20.0055 16.7745 17.1674C19.6126 14.3293 19.5842 9.69945 16.7111 6.8263C13.8379 3.95316 9.20805 3.92476 6.36995 6.76286C3.53185 9.60097 3.56025 14.2308 6.43339 17.104Z"
                fill="#F6F5F2"
              ></path>
              <path
                style={{ mixBlendMode: 'multiply' }}
                d="M9.97342 17.4144C12.4469 18.4593 15.2594 17.3176 16.2553 14.8644C17.2511 12.4112 16.0533 9.5754 13.5798 8.53055C11.1063 7.48569 8.29377 8.6274 7.2979 11.0806C6.30204 13.5338 7.49991 16.3696 9.97342 17.4144Z"
                fill="url(#paint0_radial_578_470000)"
              ></path>
              <path
                d="M21.0372 9.73341L21.0372 9.73348L21.0438 9.73871C21.6663 10.2307 22.0694 10.9483 22.1647 11.733C22.26 12.5176 22.0399 13.3048 21.554 13.9218C21.068 14.5388 20.3552 14.936 19.5719 15.0257C18.7961 15.1145 18.0138 14.8942 17.3941 14.4122L17.3829 14.401L17.367 14.3851L17.3495 14.3711C16.9798 14.0744 16.509 13.9334 16.0377 13.9793C15.5664 14.0252 15.1325 14.2545 14.8299 14.6184L14.8299 14.6184L14.8254 14.6239C14.2868 15.2952 13.5518 15.7813 12.7217 16.0152C11.8915 16.2491 11.0068 16.2192 10.1896 15.9289C9.37244 15.6387 8.66345 15.1025 8.16073 14.3943C7.65801 13.6862 7.38662 12.8413 7.38354 11.9767C7.38045 11.1121 7.64576 10.2703 8.14237 9.56721C8.63896 8.86414 9.34266 8.334 10.1566 8.05C10.9706 7.76599 11.855 7.74205 12.6878 7.98214C13.5207 8.22225 14.2607 8.71451 14.8053 9.39114L14.8053 9.39118L14.8102 9.39712C15.1141 9.76032 15.5474 9.99148 16.018 10.0406C16.4887 10.0898 16.9596 9.95291 17.3293 9.65827L17.3474 9.64386L17.3638 9.62751L17.3638 9.62746L17.3639 9.62741L17.3639 9.62736L17.364 9.6273L17.364 9.62725L17.3641 9.6272L17.3641 9.62714L17.3642 9.62709L17.3642 9.62703L17.3643 9.62698L17.3643 9.62692L17.3644 9.62687L17.3645 9.62681L17.3645 9.62676L17.3646 9.6267L17.3646 9.62665L17.3647 9.62659L17.3647 9.62654L17.3648 9.62648L17.3648 9.62642L17.3649 9.62637L17.365 9.62631L17.365 9.62625L17.3651 9.62619L17.3651 9.62614L17.3652 9.62608L17.3653 9.62602L17.3653 9.62596L17.3654 9.6259L17.3654 9.62584L17.3655 9.62579L17.3655 9.62573L17.3656 9.62567L17.3657 9.62561L17.3657 9.62555L17.3658 9.62549L17.3658 9.62543L17.3659 9.62537L17.366 9.62531L17.366 9.62525L17.3661 9.62518L17.3661 9.62512L17.3662 9.62506L17.3663 9.625L17.3663 9.62494L17.3664 9.62488L17.3665 9.62481L17.3665 9.62475L17.3666 9.62469L17.3666 9.62463L17.3667 9.62456L17.3668 9.6245L17.3668 9.62444L17.3669 9.62438L17.367 9.62431L17.367 9.62425L17.3671 9.62418L17.3672 9.62412L17.3672 9.62406L17.3673 9.62399L17.3673 9.62393L17.3674 9.62386L17.3675 9.6238L17.3675 9.62373L17.3676 9.62367L17.3677 9.6236L17.3677 9.62354L17.3678 9.62347L17.3679 9.62341L17.3679 9.62334L17.368 9.62327L17.3681 9.62321L17.3681 9.62314L17.3682 9.62307L17.3683 9.62301L17.3683 9.62294L17.3684 9.62287L17.3685 9.62281L17.3685 9.62274L17.3686 9.62267L17.3687 9.62261L17.3687 9.62254L17.3688 9.62247L17.3689 9.6224L17.3689 9.62233L17.369 9.62227L17.3691 9.6222L17.3691 9.62213L17.3692 9.62206L17.3693 9.62199L17.3693 9.62192L17.3694 9.62185L17.3695 9.62179L17.3696 9.62172L17.3696 9.62165L17.3697 9.62158L17.3698 9.62151L17.3698 9.62144L17.3699 9.62137L17.37 9.6213L17.37 9.62123L17.3701 9.62116L17.3702 9.62109L17.3703 9.62102L17.3703 9.62095L17.3704 9.62088L17.3705 9.62081L17.3705 9.62074L17.3706 9.62067L17.3707 9.6206L17.3707 9.62052L17.3708 9.62045L17.3709 9.62038L17.3709 9.62034C17.8994 9.23191 18.5435 9.02986 19.2031 9.04682C19.8722 9.06402 20.5183 9.30565 21.0372 9.73341Z"
                stroke="#1E1B19"
                stroke-width="0.820819"
              ></path>
              <path
                d="M19.0944 14.3892C20.4018 14.4022 21.451 13.3529 21.438 12.0456C21.425 10.7382 20.3547 9.66789 19.0473 9.65489C17.74 9.64189 16.6907 10.6912 16.7037 11.9985C16.7167 13.3059 17.7871 14.3762 19.0944 14.3892Z"
                fill="#F6F5F2"
              ></path>
              <path
                d="M18.7762 12.7662C18.6653 12.7172 18.5646 12.6472 18.4798 12.5601L18.4799 12.56C18.3495 12.4275 18.2605 12.2601 18.2243 12.0791C18.1881 11.8981 18.2063 11.7116 18.2763 11.5432C18.3463 11.3748 18.4652 11.2321 18.6177 11.1329C18.7703 11.0338 18.9498 10.9827 19.1337 10.9862C19.3175 10.9897 19.4975 11.0477 19.6506 11.1529C19.8037 11.2581 19.9231 11.4058 19.9935 11.5772C20.064 11.7486 20.0824 11.9359 20.0465 12.1154C20.0106 12.2948 19.9221 12.4585 19.7922 12.5856L19.7921 12.5858C19.7059 12.671 19.6033 12.738 19.4902 12.7827C19.3771 12.8274 19.2558 12.849 19.1332 12.8462C19.0106 12.8434 18.8892 12.8162 18.7762 12.7662ZM20.0361 11.0034C19.852 10.8194 19.6186 10.693 19.3652 10.6401C19.1118 10.5873 18.8498 10.6105 18.6123 10.7069C18.3748 10.8033 18.1726 10.9686 18.0313 11.1819C17.89 11.3951 17.816 11.6466 17.8185 11.9046C17.8211 12.1625 17.9001 12.4153 18.0454 12.631C18.1907 12.8467 18.3959 13.0158 18.635 13.1168C18.8741 13.2178 19.1365 13.2462 19.3891 13.1984C19.6417 13.1506 19.8731 13.0286 20.0538 12.8478C20.2963 12.6054 20.4304 12.2748 20.4269 11.9289C20.4235 11.583 20.2828 11.2502 20.0361 11.0034Z"
                fill="#1E1B19"
                stroke="#1E1B19"
                stroke-width="0.0820819"
              ></path>
              <defs>
                <radialGradient
                  id="paint0_radial_578_470000"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(-307.538 1452.52) rotate(45) scale(186.354 182.684)"
                >
                  <stop></stop>
                  <stop offset="1" stop-color="white"></stop>
                </radialGradient>
              </defs>
            </svg>
            <p class="w-[228px] h-[19px] absolute left-[548px] top-[180px] text-sm font-light text-left text-black">
              Data products
            </p>
          </div>
        </div>
        <div class="w-[248px] h-10">
          <div class="w-[248px] h-10 absolute left-[516.5px] top-[593.5px] bg-white border border-[#edebfe]"></div>
          <p class="absolute left-[567px] top-[608px] text-xs font-light text-left text-black">
            Create new data product
          </p>
          <div class="flex justify-start items-start absolute left-[530px] top-[602px] p-[3px] rounded-[749.25px] border-[0.75px] border-[#1e1b19]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path d="M9 9H4.5H9Z" fill="#1E1B19"></path>
              <path
                d="M9 4.5V9M9 9V13.5M9 9H13.5M9 9H4.5"
                stroke="#1E1B19"
                stroke-width="0.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
        </div>
        <svg
          width="248"
          height="10"
          viewBox="0 0 248 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute left-[272.5px] top-[608.5px]"
          preserveAspectRatio="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M243 10C245.761 10 248 7.76142 248 5C248 2.23858 245.761 0 243 0C240.581 0 238.563 1.71776 238.1 4H0V6H238.1C238.563 8.28224 240.581 10 243 10Z"
            fill="#B1AAA1"
          ></path>
        </svg>
        <div class="w-[248px] h-[16.94px]">
          <svg
            width="248"
            height="10"
            viewBox="0 0 248 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute left-[273.5px] top-[340.5px]"
            preserveAspectRatio="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M243 10C245.761 10 248 7.76142 248 5C248 2.23858 245.761 0 243 0C240.581 0 238.563 1.71776 238.1 4H0V6H238.1C238.563 8.28224 240.581 10 243 10Z"
              fill="#4EBF8D"
            ></path>
          </svg>
          <div class="w-[16.94px] h-[16.94px]">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="absolute left-[380.66px] top-[337.66px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle
                cx="8.46774"
                cy="8.46774"
                r="8.46774"
                fill="#4EBF8D"
              ></circle>
            </svg>
            <div class="flex flex-col justify-center items-center w-[15px] h-[15px] absolute left-[381.91px] top-[338.97px] gap-[2.960381269454956px]">
              <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[2.960381269454956px] px-[1.480190634727478px] py-[2.0722668170928955px]">
                <svg
                  width="13"
                  height="11"
                  viewBox="0 0 13 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M10.4029 7.03731L10.4028 5.01807C10.4038 4.6389 10.3296 4.2633 10.1845 3.91299C10.0393 3.56269 9.8262 3.24464 9.55735 2.97726L7.83029 1.2502H9.51459C9.57347 1.2502 9.62995 1.2268 9.67158 1.18517C9.71322 1.14353 9.73661 1.08705 9.73661 1.02817C9.73661 0.969283 9.71322 0.912809 9.67158 0.87117C9.62995 0.829532 9.57347 0.80614 9.51459 0.80614H7.2943C7.27969 0.806172 7.26512 0.807643 7.2508 0.81053C7.24435 0.811811 7.23841 0.814223 7.23218 0.816046C7.22445 0.817989 7.21683 0.820355 7.20936 0.823133C7.20219 0.826425 7.19521 0.830099 7.18843 0.834137C7.18266 0.837281 7.17667 0.839828 7.17114 0.843521C7.1468 0.859805 7.12589 0.880717 7.10962 0.905066C7.10604 0.91045 7.10357 0.9163 7.10048 0.921917C7.09176 0.935322 7.08558 0.950217 7.08224 0.965858C7.08037 0.972153 7.07796 0.97817 7.07666 0.984681C7.07377 0.998997 7.0723 1.01356 7.07227 1.02817V3.24845C7.07227 3.30734 7.09566 3.36381 7.1373 3.40545C7.17894 3.44709 7.23541 3.47048 7.2943 3.47048C7.35319 3.47048 7.40966 3.44709 7.4513 3.40545C7.49294 3.36381 7.51633 3.30734 7.51633 3.24845V1.56416L9.24339 3.29122C9.47087 3.51748 9.65121 3.78659 9.774 4.08301C9.89678 4.37942 9.95956 4.69724 9.9587 5.01807L9.95881 7.03732C9.51053 7.0938 9.10063 7.319 8.81254 7.66707C8.52446 8.01514 8.37985 8.45991 8.40815 8.91084C8.43645 9.36178 8.63554 9.78498 8.96488 10.0943C9.29422 10.4036 9.72907 10.5758 10.1809 10.5758C10.6327 10.5758 11.0675 10.4036 11.3969 10.0943C11.7262 9.78493 11.9253 9.36173 11.9536 8.91079C11.9819 8.45985 11.8372 8.01509 11.5491 7.66703C11.2611 7.31897 10.8511 7.09378 10.4029 7.03731H10.4029ZM10.1808 10.1313C9.91736 10.1313 9.65979 10.0532 9.44072 9.90683C9.22165 9.76045 9.0509 9.55239 8.95007 9.30897C8.84924 9.06555 8.82286 8.79769 8.87426 8.53927C8.92566 8.28086 9.05254 8.04349 9.23885 7.85718C9.42515 7.67087 9.66252 7.544 9.92094 7.49259C10.1794 7.44119 10.4472 7.46757 10.6906 7.5684C10.9341 7.66923 11.1421 7.83998 11.2885 8.05905C11.4349 8.27813 11.513 8.53569 11.513 8.79917C11.5126 9.15236 11.3721 9.49097 11.1224 9.74071C10.8726 9.99045 10.534 10.1309 10.1808 10.1313ZM5.51823 7.467C5.45935 7.467 5.40288 7.49039 5.36124 7.53203C5.3196 7.57367 5.29621 7.63014 5.29621 7.68903V9.37332L3.56914 7.64626C3.34166 7.42001 3.16132 7.15089 3.03854 6.85448C2.91575 6.55806 2.85298 6.24024 2.85384 5.91941L2.85373 3.90016C3.30201 3.84368 3.71191 3.61848 3.99999 3.27041C4.28808 2.92234 4.43269 2.47757 4.40439 2.02664C4.37609 1.5757 4.177 1.1525 3.84766 0.843184C3.51831 0.533868 3.08347 0.361688 2.63165 0.361694C2.17982 0.361701 1.74499 0.533894 1.41565 0.843221C1.08632 1.15255 0.887244 1.57575 0.858956 2.02669C0.830668 2.47763 0.975292 2.92239 1.26339 3.27045C1.55148 3.61851 1.96139 3.8437 2.40967 3.90017L2.40978 5.91941C2.40876 6.29858 2.48295 6.67419 2.62807 7.02449C2.77318 7.3748 2.98633 7.69284 3.25518 7.96022L4.98224 9.68728H3.29795C3.23906 9.68728 3.18259 9.71068 3.14095 9.75231C3.09931 9.79395 3.07592 9.85043 3.07592 9.90931C3.07592 9.9682 3.09931 10.0247 3.14095 10.0663C3.18259 10.1079 3.23906 10.1313 3.29795 10.1313H5.51823C5.53283 10.1313 5.5474 10.1298 5.56171 10.127C5.56824 10.1257 5.57426 10.1232 5.58054 10.1214C5.5961 10.1181 5.61092 10.1119 5.62426 10.1033C5.62995 10.1001 5.63589 10.0976 5.64136 10.094C5.66572 10.0777 5.68663 10.0568 5.70291 10.0324C5.70649 10.0271 5.70893 10.0212 5.71199 10.0156C5.71615 10.0087 5.71992 10.0016 5.7233 9.99422C5.72602 9.98685 5.72834 9.97934 5.73026 9.97172C5.73213 9.9654 5.73457 9.95934 5.73587 9.9528C5.73877 9.93848 5.74024 9.92392 5.74026 9.90931V7.68903C5.74026 7.63014 5.71687 7.57367 5.67523 7.53203C5.63359 7.49039 5.57712 7.467 5.51823 7.467ZM1.29953 2.13831C1.29953 1.87483 1.37766 1.61727 1.52404 1.3982C1.67042 1.17912 1.87848 1.00837 2.1219 0.907545C2.36532 0.806716 2.63318 0.780335 2.89159 0.831737C3.15001 0.883139 3.38738 1.01002 3.57369 1.19632C3.75999 1.38263 3.88687 1.62 3.93827 1.87842C3.98968 2.13683 3.96329 2.40469 3.86247 2.64811C3.76164 2.89153 3.59089 3.09959 3.37181 3.24597C3.15274 3.39235 2.89518 3.47048 2.6317 3.47048C2.27851 3.47008 1.9399 3.3296 1.69016 3.07985C1.44042 2.83011 1.29993 2.4915 1.29953 2.13831Z"
                    fill="#F6F5F2"
                    stroke="white"
                    stroke-width="0.5"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="w-[248px] h-[16.94px]">
          <svg
            width="248"
            height="10"
            viewBox="0 0 248 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute left-[273.5px] top-[241.5px]"
            preserveAspectRatio="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M243 10C245.761 10 248 7.76142 248 5C248 2.23858 245.761 0 243 0C240.581 0 238.563 1.71776 238.1 4H0V6H238.1C238.563 8.28224 240.581 10 243 10Z"
              fill="#F1615B"
            ></path>
          </svg>
          <div class="w-[16.94px] h-[16.94px]">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="absolute left-[380.66px] top-[238.66px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle
                cx="8.46774"
                cy="8.46774"
                r="8.46774"
                fill="#F1615B"
              ></circle>
            </svg>
            <div class="flex flex-col justify-center items-center w-[15px] h-[15px] absolute left-[381.91px] top-[239.97px] gap-[2.960381269454956px]">
              <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[2.960381269454956px] px-[1.480190634727478px] py-[2.0722668170928955px]">
                <svg
                  width="13"
                  height="11"
                  viewBox="0 0 13 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M10.4029 7.03731L10.4028 5.01807C10.4038 4.6389 10.3296 4.2633 10.1845 3.91299C10.0393 3.56269 9.8262 3.24464 9.55735 2.97726L7.83029 1.2502H9.51459C9.57347 1.2502 9.62995 1.2268 9.67158 1.18517C9.71322 1.14353 9.73661 1.08705 9.73661 1.02817C9.73661 0.969283 9.71322 0.912809 9.67158 0.87117C9.62995 0.829532 9.57347 0.80614 9.51459 0.80614H7.2943C7.27969 0.806172 7.26512 0.807643 7.2508 0.81053C7.24435 0.811811 7.23841 0.814223 7.23218 0.816046C7.22445 0.817989 7.21683 0.820355 7.20936 0.823133C7.20219 0.826425 7.19521 0.830099 7.18843 0.834137C7.18266 0.837281 7.17667 0.839828 7.17114 0.843521C7.1468 0.859805 7.12589 0.880717 7.10962 0.905066C7.10604 0.91045 7.10357 0.9163 7.10048 0.921917C7.09176 0.935322 7.08558 0.950217 7.08224 0.965858C7.08037 0.972153 7.07796 0.97817 7.07666 0.984681C7.07377 0.998997 7.0723 1.01356 7.07227 1.02817V3.24845C7.07227 3.30734 7.09566 3.36381 7.1373 3.40545C7.17894 3.44709 7.23541 3.47048 7.2943 3.47048C7.35319 3.47048 7.40966 3.44709 7.4513 3.40545C7.49294 3.36381 7.51633 3.30734 7.51633 3.24845V1.56416L9.24339 3.29122C9.47087 3.51748 9.65121 3.78659 9.774 4.08301C9.89678 4.37942 9.95956 4.69724 9.9587 5.01807L9.95881 7.03732C9.51053 7.0938 9.10063 7.319 8.81254 7.66707C8.52446 8.01514 8.37985 8.45991 8.40815 8.91084C8.43645 9.36178 8.63554 9.78498 8.96488 10.0943C9.29422 10.4036 9.72907 10.5758 10.1809 10.5758C10.6327 10.5758 11.0675 10.4036 11.3969 10.0943C11.7262 9.78493 11.9253 9.36173 11.9536 8.91079C11.9819 8.45985 11.8372 8.01509 11.5491 7.66703C11.2611 7.31897 10.8511 7.09378 10.4029 7.03731H10.4029ZM10.1808 10.1313C9.91736 10.1313 9.65979 10.0532 9.44072 9.90683C9.22165 9.76045 9.0509 9.55239 8.95007 9.30897C8.84924 9.06555 8.82286 8.79769 8.87426 8.53927C8.92566 8.28086 9.05254 8.04349 9.23885 7.85718C9.42515 7.67087 9.66252 7.544 9.92094 7.49259C10.1794 7.44119 10.4472 7.46757 10.6906 7.5684C10.9341 7.66923 11.1421 7.83998 11.2885 8.05905C11.4349 8.27813 11.513 8.53569 11.513 8.79917C11.5126 9.15236 11.3721 9.49097 11.1224 9.74071C10.8726 9.99045 10.534 10.1309 10.1808 10.1313ZM5.51823 7.467C5.45935 7.467 5.40288 7.49039 5.36124 7.53203C5.3196 7.57367 5.29621 7.63014 5.29621 7.68903V9.37332L3.56914 7.64626C3.34166 7.42001 3.16132 7.15089 3.03854 6.85448C2.91575 6.55806 2.85298 6.24024 2.85384 5.91941L2.85373 3.90016C3.30201 3.84368 3.71191 3.61848 3.99999 3.27041C4.28808 2.92234 4.43269 2.47757 4.40439 2.02664C4.37609 1.5757 4.177 1.1525 3.84766 0.843184C3.51831 0.533868 3.08347 0.361688 2.63165 0.361694C2.17982 0.361701 1.74499 0.533894 1.41565 0.843221C1.08632 1.15255 0.887244 1.57575 0.858956 2.02669C0.830668 2.47763 0.975292 2.92239 1.26339 3.27045C1.55148 3.61851 1.96139 3.8437 2.40967 3.90017L2.40978 5.91941C2.40876 6.29858 2.48295 6.67419 2.62807 7.02449C2.77318 7.3748 2.98633 7.69284 3.25518 7.96022L4.98224 9.68728H3.29795C3.23906 9.68728 3.18259 9.71068 3.14095 9.75231C3.09931 9.79395 3.07592 9.85043 3.07592 9.90931C3.07592 9.9682 3.09931 10.0247 3.14095 10.0663C3.18259 10.1079 3.23906 10.1313 3.29795 10.1313H5.51823C5.53283 10.1313 5.5474 10.1298 5.56171 10.127C5.56824 10.1257 5.57426 10.1232 5.58054 10.1214C5.5961 10.1181 5.61092 10.1119 5.62426 10.1033C5.62995 10.1001 5.63589 10.0976 5.64136 10.094C5.66572 10.0777 5.68663 10.0568 5.70291 10.0324C5.70649 10.0271 5.70893 10.0212 5.71199 10.0156C5.71615 10.0087 5.71992 10.0016 5.7233 9.99422C5.72602 9.98685 5.72834 9.97934 5.73026 9.97172C5.73213 9.9654 5.73457 9.95934 5.73587 9.9528C5.73877 9.93848 5.74024 9.92392 5.74026 9.90931V7.68903C5.74026 7.63014 5.71687 7.57367 5.67523 7.53203C5.63359 7.49039 5.57712 7.467 5.51823 7.467ZM1.29953 2.13831C1.29953 1.87483 1.37766 1.61727 1.52404 1.3982C1.67042 1.17912 1.87848 1.00837 2.1219 0.907545C2.36532 0.806716 2.63318 0.780335 2.89159 0.831737C3.15001 0.883139 3.38738 1.01002 3.57369 1.19632C3.75999 1.38263 3.88687 1.62 3.93827 1.87842C3.98968 2.13683 3.96329 2.40469 3.86247 2.64811C3.76164 2.89153 3.59089 3.09959 3.37181 3.24597C3.15274 3.39235 2.89518 3.47048 2.6317 3.47048C2.27851 3.47008 1.9399 3.3296 1.69016 3.07985C1.44042 2.83011 1.29993 2.4915 1.29953 2.13831Z"
                    fill="#F6F5F2"
                    stroke="white"
                    stroke-width="0.5"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="w-[248px] h-[16.94px]">
          <svg
            width="248"
            height="10"
            viewBox="0 0 248 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute left-[273.5px] top-[447.5px]"
            preserveAspectRatio="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M243 10.0001C245.761 10.0001 248 7.76155 248 5.00012C248 2.2387 245.761 0.00012207 243 0.00012207C240.581 0.00012207 238.563 1.71788 238.1 4.00012H0V6.00012H238.1C238.563 8.28236 240.581 10.0001 243 10.0001Z"
              fill="#4EBF8D"
            ></path>
          </svg>
          <div class="w-[16.94px] h-[16.94px]">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="absolute left-[380.66px] top-[444.66px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle
                cx="8.46774"
                cy="8.46786"
                r="8.46774"
                fill="#4EBF8D"
              ></circle>
            </svg>
            <div class="flex flex-col justify-center items-center w-[15px] h-[15px] absolute left-[381.91px] top-[445.97px] gap-[2.960381269454956px]">
              <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[2.960381269454956px] px-[1.480190634727478px] py-[2.0722668170928955px]">
                <svg
                  width="13"
                  height="11"
                  viewBox="0 0 13 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M10.4029 7.03743L10.4028 5.01819C10.4038 4.63903 10.3296 4.26342 10.1845 3.91312C10.0393 3.56281 9.8262 3.24477 9.55735 2.97739L7.83029 1.25032H9.51459C9.57347 1.25032 9.62995 1.22693 9.67158 1.18529C9.71322 1.14365 9.73661 1.08718 9.73661 1.02829C9.73661 0.969405 9.71322 0.912931 9.67158 0.871292C9.62995 0.829654 9.57347 0.806262 9.51459 0.806262H7.2943C7.27969 0.806294 7.26512 0.807765 7.2508 0.810652C7.24435 0.811933 7.23841 0.814345 7.23218 0.816168C7.22445 0.818111 7.21683 0.820477 7.20936 0.823255C7.20219 0.826547 7.19521 0.830221 7.18843 0.834259C7.18266 0.837403 7.17667 0.839951 7.17114 0.843643C7.1468 0.859927 7.12589 0.880839 7.10962 0.905188C7.10604 0.910572 7.10357 0.916422 7.10048 0.92204C7.09176 0.935444 7.08558 0.950339 7.08224 0.96598C7.08037 0.972275 7.07796 0.978292 7.07666 0.984803C7.07377 0.999119 7.0723 1.01369 7.07227 1.02829V3.24858C7.07227 3.30746 7.09566 3.36394 7.1373 3.40557C7.17894 3.44721 7.23541 3.4706 7.2943 3.4706C7.35319 3.4706 7.40966 3.44721 7.4513 3.40557C7.49294 3.36394 7.51633 3.30746 7.51633 3.24858V1.56428L9.24339 3.29134C9.47087 3.5176 9.65121 3.78672 9.774 4.08313C9.89678 4.37954 9.95956 4.69736 9.9587 5.01819L9.95881 7.03744C9.51053 7.09393 9.10063 7.31912 8.81254 7.66719C8.52446 8.01526 8.37985 8.46003 8.40815 8.91097C8.43645 9.3619 8.63554 9.7851 8.96488 10.0944C9.29422 10.4037 9.72907 10.5759 10.1809 10.5759C10.6327 10.5759 11.0675 10.4037 11.3969 10.0944C11.7262 9.78506 11.9253 9.36185 11.9536 8.91091C11.9819 8.45998 11.8372 8.01521 11.5491 7.66715C11.2611 7.31909 10.8511 7.09391 10.4029 7.03743H10.4029ZM10.1808 10.1315C9.91736 10.1315 9.65979 10.0533 9.44072 9.90695C9.22165 9.76057 9.0509 9.55251 8.95007 9.30909C8.84924 9.06567 8.82286 8.79781 8.87426 8.5394C8.92566 8.28098 9.05254 8.04361 9.23885 7.8573C9.42515 7.671 9.66252 7.54412 9.92094 7.49272C10.1794 7.44131 10.4472 7.4677 10.6906 7.56852C10.9341 7.66935 11.1421 7.8401 11.2885 8.05918C11.4349 8.27825 11.513 8.53581 11.513 8.79929C11.5126 9.15248 11.3721 9.49109 11.1224 9.74083C10.8726 9.99057 10.534 10.1311 10.1808 10.1315ZM5.51823 7.46712C5.45935 7.46712 5.40288 7.49052 5.36124 7.53215C5.3196 7.57379 5.29621 7.63026 5.29621 7.68915V9.37344L3.56914 7.64638C3.34166 7.42013 3.16132 7.15101 3.03854 6.8546C2.91575 6.55819 2.85298 6.24037 2.85384 5.91953L2.85373 3.90029C3.30201 3.8438 3.71191 3.6186 3.99999 3.27053C4.28808 2.92247 4.43269 2.47769 4.40439 2.02676C4.37609 1.57582 4.177 1.15262 3.84766 0.843306C3.51831 0.53399 3.08347 0.36181 2.63165 0.361816C2.17982 0.361823 1.74499 0.534016 1.41565 0.843343C1.08632 1.15267 0.887244 1.57588 0.858956 2.02681C0.830668 2.47775 0.975292 2.92252 1.26339 3.27058C1.55148 3.61863 1.96139 3.84382 2.40967 3.90029L2.40978 5.91953C2.40876 6.2987 2.48295 6.67431 2.62807 7.02461C2.77318 7.37492 2.98633 7.69296 3.25518 7.96034L4.98224 9.6874H3.29795C3.23906 9.6874 3.18259 9.7108 3.14095 9.75244C3.09931 9.79407 3.07592 9.85055 3.07592 9.90943C3.07592 9.96832 3.09931 10.0248 3.14095 10.0664C3.18259 10.1081 3.23906 10.1315 3.29795 10.1315H5.51823C5.53283 10.1314 5.5474 10.13 5.56171 10.1271C5.56824 10.1258 5.57426 10.1233 5.58054 10.1215C5.5961 10.1182 5.61092 10.112 5.62426 10.1034C5.62995 10.1003 5.63589 10.0977 5.64136 10.0941C5.66572 10.0778 5.68663 10.0569 5.70291 10.0325C5.70649 10.0272 5.70893 10.0214 5.71199 10.0158C5.71615 10.0088 5.71992 10.0017 5.7233 9.99434C5.72602 9.98697 5.72834 9.97946 5.73026 9.97184C5.73213 9.96552 5.73457 9.95947 5.73587 9.95292C5.73877 9.9386 5.74024 9.92404 5.74026 9.90943V7.68915C5.74026 7.63026 5.71687 7.57379 5.67523 7.53215C5.63359 7.49052 5.57712 7.46712 5.51823 7.46712ZM1.29953 2.13843C1.29953 1.87495 1.37766 1.61739 1.52404 1.39832C1.67042 1.17924 1.87848 1.0085 2.1219 0.907667C2.36532 0.806838 2.63318 0.780457 2.89159 0.831859C3.15001 0.883261 3.38738 1.01014 3.57369 1.19645C3.75999 1.38275 3.88687 1.62012 3.93827 1.87854C3.98968 2.13696 3.96329 2.40481 3.86247 2.64823C3.76164 2.89166 3.59089 3.09971 3.37181 3.24609C3.15274 3.39247 2.89518 3.4706 2.6317 3.4706C2.27851 3.4702 1.9399 3.32972 1.69016 3.07997C1.44042 2.83023 1.29993 2.49162 1.29953 2.13843Z"
                    fill="#F6F5F2"
                    stroke="white"
                    stroke-width="0.5"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="w-[16.94px] h-[16.94px]">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute left-[380.66px] top-[605.66px]"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle
              cx="8.46774"
              cy="8.46786"
              r="8.46774"
              fill="#B1AAA1"
            ></circle>
          </svg>
          <div class="flex flex-col justify-center items-center w-[15px] h-[15px] absolute left-[381.91px] top-[606.97px] gap-[2.960381269454956px]">
            <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[2.960381269454956px] px-[1.480190634727478px] py-[2.0722668170928955px]">
              <svg
                width="13"
                height="11"
                viewBox="0 0 13 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M10.4029 7.03743L10.4028 5.01819C10.4038 4.63903 10.3296 4.26342 10.1845 3.91312C10.0393 3.56281 9.8262 3.24477 9.55735 2.97739L7.83029 1.25032H9.51459C9.57347 1.25032 9.62995 1.22693 9.67158 1.18529C9.71322 1.14365 9.73661 1.08718 9.73661 1.02829C9.73661 0.969405 9.71322 0.912931 9.67158 0.871292C9.62995 0.829654 9.57347 0.806262 9.51459 0.806262H7.2943C7.27969 0.806294 7.26512 0.807765 7.2508 0.810652C7.24435 0.811933 7.23841 0.814345 7.23218 0.816168C7.22445 0.818111 7.21683 0.820477 7.20936 0.823255C7.20219 0.826547 7.19521 0.830221 7.18843 0.834259C7.18266 0.837403 7.17667 0.839951 7.17114 0.843643C7.1468 0.859927 7.12589 0.880839 7.10962 0.905188C7.10604 0.910572 7.10357 0.916422 7.10048 0.92204C7.09176 0.935444 7.08558 0.950339 7.08224 0.96598C7.08037 0.972275 7.07796 0.978292 7.07666 0.984803C7.07377 0.999119 7.0723 1.01369 7.07227 1.02829V3.24858C7.07227 3.30746 7.09566 3.36394 7.1373 3.40557C7.17894 3.44721 7.23541 3.4706 7.2943 3.4706C7.35319 3.4706 7.40966 3.44721 7.4513 3.40557C7.49294 3.36394 7.51633 3.30746 7.51633 3.24858V1.56428L9.24339 3.29134C9.47087 3.5176 9.65121 3.78672 9.774 4.08313C9.89678 4.37954 9.95956 4.69736 9.9587 5.01819L9.95881 7.03744C9.51053 7.09393 9.10063 7.31912 8.81254 7.66719C8.52446 8.01526 8.37985 8.46003 8.40815 8.91097C8.43645 9.3619 8.63554 9.7851 8.96488 10.0944C9.29422 10.4037 9.72907 10.5759 10.1809 10.5759C10.6327 10.5759 11.0675 10.4037 11.3969 10.0944C11.7262 9.78506 11.9253 9.36185 11.9536 8.91091C11.9819 8.45998 11.8372 8.01521 11.5491 7.66715C11.2611 7.31909 10.8511 7.09391 10.4029 7.03743H10.4029ZM10.1808 10.1315C9.91736 10.1315 9.65979 10.0533 9.44072 9.90695C9.22165 9.76057 9.0509 9.55251 8.95007 9.30909C8.84924 9.06567 8.82286 8.79781 8.87426 8.5394C8.92566 8.28098 9.05254 8.04361 9.23885 7.8573C9.42515 7.671 9.66252 7.54412 9.92094 7.49272C10.1794 7.44131 10.4472 7.4677 10.6906 7.56852C10.9341 7.66935 11.1421 7.8401 11.2885 8.05918C11.4349 8.27825 11.513 8.53581 11.513 8.79929C11.5126 9.15248 11.3721 9.49109 11.1224 9.74083C10.8726 9.99057 10.534 10.1311 10.1808 10.1315ZM5.51823 7.46712C5.45935 7.46712 5.40288 7.49052 5.36124 7.53215C5.3196 7.57379 5.29621 7.63026 5.29621 7.68915V9.37344L3.56914 7.64638C3.34166 7.42013 3.16132 7.15101 3.03854 6.8546C2.91575 6.55819 2.85298 6.24037 2.85384 5.91953L2.85373 3.90029C3.30201 3.8438 3.71191 3.6186 3.99999 3.27053C4.28808 2.92247 4.43269 2.47769 4.40439 2.02676C4.37609 1.57582 4.177 1.15262 3.84766 0.843306C3.51831 0.53399 3.08347 0.36181 2.63165 0.361816C2.17982 0.361823 1.74499 0.534016 1.41565 0.843343C1.08632 1.15267 0.887244 1.57588 0.858956 2.02681C0.830668 2.47775 0.975292 2.92252 1.26339 3.27058C1.55148 3.61863 1.96139 3.84382 2.40967 3.90029L2.40978 5.91953C2.40876 6.2987 2.48295 6.67431 2.62807 7.02461C2.77318 7.37492 2.98633 7.69296 3.25518 7.96034L4.98224 9.6874H3.29795C3.23906 9.6874 3.18259 9.7108 3.14095 9.75244C3.09931 9.79407 3.07592 9.85055 3.07592 9.90943C3.07592 9.96832 3.09931 10.0248 3.14095 10.0664C3.18259 10.1081 3.23906 10.1315 3.29795 10.1315H5.51823C5.53283 10.1314 5.5474 10.13 5.56171 10.1271C5.56824 10.1258 5.57426 10.1233 5.58054 10.1215C5.5961 10.1182 5.61092 10.112 5.62426 10.1034C5.62995 10.1003 5.63589 10.0977 5.64136 10.0941C5.66572 10.0778 5.68663 10.0569 5.70291 10.0325C5.70649 10.0272 5.70893 10.0214 5.71199 10.0158C5.71615 10.0088 5.71992 10.0017 5.7233 9.99434C5.72602 9.98697 5.72834 9.97946 5.73026 9.97184C5.73213 9.96552 5.73457 9.95947 5.73587 9.95292C5.73877 9.9386 5.74024 9.92404 5.74026 9.90943V7.68915C5.74026 7.63026 5.71687 7.57379 5.67523 7.53215C5.63359 7.49052 5.57712 7.46712 5.51823 7.46712ZM1.29953 2.13843C1.29953 1.87495 1.37766 1.61739 1.52404 1.39832C1.67042 1.17924 1.87848 1.0085 2.1219 0.907667C2.36532 0.806838 2.63318 0.780457 2.89159 0.831859C3.15001 0.883261 3.38738 1.01014 3.57369 1.19645C3.75999 1.38275 3.88687 1.62012 3.93827 1.87854C3.98968 2.13696 3.96329 2.40481 3.86247 2.64823C3.76164 2.89166 3.59089 3.09971 3.37181 3.24609C3.15274 3.39247 2.89518 3.4706 2.6317 3.4706C2.27851 3.4702 1.9399 3.32972 1.69016 3.07997C1.44042 2.83023 1.29993 2.49162 1.29953 2.13843Z"
                  fill="#F6F5F2"
                  stroke="white"
                  stroke-width="0.5"
                ></path>
              </svg>
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
                <path d="M12.5 12H6.5H12.5Z" fill="#1E1B19"></path>
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
                d="M40.7699 26.5469C39.3605 27.9563 37.5565 28.9078 35.586 29.281C33.6154 29.6542 31.5669 29.4323 29.6994 28.6435C27.8319 27.8547 26.2293 26.5344 25.0943 24.8495C23.9593 23.1646 23.3429 21.1908 23.323 19.1776C23.303 17.1645 23.8805 15.2026 24.9823 13.5398C26.0842 11.877 27.6609 10.5882 29.5132 9.83619C31.3654 9.08422 33.41 8.90292 35.3883 9.31521C37.3666 9.72749 39.1898 10.7149 40.6274 12.1524L33.5125 19.2674L40.7699 26.5469Z"
                fill="#1E1B19"
              ></path>
              <path
                d="M27.9556 24.8161C31.0959 27.9564 36.1563 27.9874 39.2583 24.8854C42.3603 21.7834 42.3292 16.723 39.1889 13.5827C36.0486 10.4424 30.9883 10.4114 27.8863 13.5134C24.7843 16.6154 24.8153 21.6758 27.9556 24.8161Z"
                fill="white"
              ></path>
              <path
                style={{ mixBlendMode: 'multiply' }}
                d="M31.5738 26.0107C34.6657 27.3168 38.1813 25.8897 39.4262 22.8231C40.671 19.7566 39.1736 16.2119 36.0818 14.9059C32.9899 13.5998 29.4743 15.0269 28.2294 18.0934C26.9846 21.16 28.4819 24.7047 31.5738 26.0107Z"
                fill="url(#paint0_radial_578_469768)"
              ></path>
              <path
                d="M45.094 16.7852L45.1019 16.7917L45.11 16.7981C45.7877 17.3337 46.226 18.1146 46.3296 18.9677C46.4332 19.8204 46.194 20.6746 45.6671 21.3436C45.1402 22.0125 44.3672 22.4436 43.5167 22.5409C42.6838 22.6362 41.8428 22.4037 41.172 21.8914L41.1415 21.8609L41.0988 21.8267C40.538 21.3767 39.8233 21.1624 39.1071 21.2321L39.2041 22.2274L39.1071 21.2321C38.3907 21.3019 37.7306 21.6505 37.2701 22.2043L37.2646 22.211L37.2592 22.2178C36.6495 22.9776 35.8174 23.528 34.8772 23.7929C33.9369 24.0578 32.9341 24.0241 32.0072 23.6949C31.0802 23.3657 30.2757 22.7573 29.7052 21.9537C29.1347 21.1501 28.8271 20.1918 28.8236 19.2118C28.8201 18.2319 29.1208 17.2785 29.6829 16.4826C30.245 15.6868 31.0416 15.0866 31.9634 14.765C32.8852 14.4433 33.8875 14.416 34.832 14.6883C35.7767 14.9606 36.6164 15.5191 37.2345 16.2869L37.2404 16.2943L37.2464 16.3015C37.7072 16.8523 38.3645 17.2032 39.0791 17.2778C39.7939 17.3525 40.5098 17.1446 41.0723 16.6963L41.1164 16.6612L41.1381 16.6395C41.7059 16.2319 42.3937 16.0199 43.0985 16.038C43.8258 16.0567 44.5289 16.3194 45.094 16.7852Z"
                stroke="#1E1B19"
                stroke-width="2"
              ></path>
              <circle cx="43.0566" cy="19.2505" r="1.25" fill="black"></circle>
              <defs>
                <radialGradient
                  id="paint0_radial_578_469768"
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
                d="M5.8335 8H27.1668H5.8335ZM5.8335 16H27.1668H5.8335ZM5.8335 24H27.1668H5.8335Z"
                fill="white"
              ></path>
              <path
                d="M5.8335 24H27.1668M5.8335 8H27.1668H5.8335ZM5.8335 16H27.1668H5.8335Z"
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
                  d="M19.4998 9.75C19.4998 11.5556 19.4998 13.3611 19.4998 15.1667C19.4998 17.3333 20.2221 18.7778 21.6665 19.5H4.33317C5.77761 18.7778 6.49984 17.3333 6.49984 15.1667C6.49984 13.3611 6.49984 11.5556 6.49984 9.75C6.49984 6.16015 9.40999 3.25 12.9998 3.25C16.5897 3.25 19.4998 6.16015 19.4998 9.75Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M10.8332 19.5C10.8332 20.6966 11.8032 21.6667 12.9998 21.6667C14.1965 21.6667 15.1665 20.6966 15.1665 19.5"
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
            d="M66.4253 15.0948L68.1609 13.3958C69.3994 14.8951 70.8254 15.6448 72.4388 15.6448C73.278 15.6448 73.9951 15.4003 74.5899 14.9114C75.1929 14.4144 75.4944 13.7829 75.4944 13.0169C75.4944 12.5118 75.364 12.0677 75.1033 11.6847C74.8425 11.2936 74.4799 10.9676 74.0155 10.7069C73.5592 10.438 73.0866 10.2017 72.5977 9.99799C72.1169 9.79429 71.571 9.56206 70.9599 9.30131C70.3487 9.03242 69.8476 8.7676 69.4565 8.50685C67.9735 7.5209 67.232 6.23754 67.232 4.65677C67.232 3.36118 67.7372 2.26116 68.7476 1.3567C69.7661 0.452232 71.0291 0 72.5366 0C74.264 0 75.8326 0.582605 77.2422 1.74782L75.7633 3.58119C74.8099 2.7745 73.767 2.37116 72.6343 2.37116C71.8521 2.37116 71.1717 2.58302 70.5932 3.00673C70.0228 3.43044 69.7376 4.0049 69.7376 4.7301C69.7376 5.15382 69.868 5.53271 70.1287 5.86679C70.3895 6.20088 70.748 6.49422 71.2043 6.74681C71.6688 6.99941 72.1414 7.22756 72.6221 7.43127C73.111 7.63498 73.6529 7.87128 74.2477 8.14018C74.8425 8.40907 75.3314 8.67389 75.7144 8.93464C77.2381 9.93688 78 11.2732 78 12.9436C78 14.4592 77.4826 15.6855 76.4477 16.6226C75.4129 17.5515 74.1173 18.0159 72.561 18.0159C71.355 18.0159 70.2224 17.7674 69.1631 17.2704C68.112 16.7652 67.1994 16.04 66.4253 15.0948Z"
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
          width="108"
          height="2"
          viewBox="0 0 108 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute left-[978px] top-[63px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <line y1="1" x2="108" y2="1" stroke="black" stroke-width="2"></line>
        </svg>
        <div class="w-[1372px] h-px absolute left-[68px] top-16 overflow-hidden bg-[#e6e2da]"></div>
      </div>
    </div>
  );
};

export default DataLandscape;
