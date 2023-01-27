const DcCsvOne = (props) => {
  return (
    <div
      className="flex flex-col justify-start items-start w-[342px] gap-2 px-4 pt-5 pb-2 bg-white absolute z-50"
      style={{ boxShadow: '0px 4px 10px 0 rgba(0,0,0,0.1)' }}
    >
      <div className="self-stretch flex-grow-0 flex-shrink-0 h-0 relative">
        <div className="flex justify-start items-start w-[340px] absolute left-[-16px] top-[-36px] gap-2.5 px-3 py-1.5 bg-[#34302c]">
          <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-white">
            Data product status
          </p>
        </div>
      </div>
      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[310px] text-left text-[#1e1b19]">
        <span className="self-stretch flex-grow-0 flex-shrink-0 w-[310px] text-xs text-left text-[#1e1b19]">
          Data Product:
        </span>
        <span className="self-stretch flex-grow-0 flex-shrink-0 w-[310px] text-sm text-left text-[#1e1b19]"></span>
        <span className="self-stretch flex-grow-0 flex-shrink-0 w-[310px] text-xs font-light text-left text-[#1e1b19]">
          TA - D&#x26;C - Individual learner records
        </span>
      </p>
      <div className="flex justify-end items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[63px]">
        <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#645d57]">
          Owner:
        </p>
        <p className="flex-grow w-[205px] text-xs font-light text-left text-[#645d57]">
          Talent Academy
        </p>
      </div>
      <div className="flex justify-end items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-16">
        <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#645d57]">
          Status:
        </p>
        <p className="flex-grow w-[205px] text-xs font-light text-left text-[#645d57]">
          Published to subscribers
        </p>
      </div>
      <div className="self-stretch flex-grow-0 flex-shrink-0 w-[310px] h-px relative overflow-hidden bg-[#13100f]/[0.15]"></div>
      <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-9">
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-[23.13px] relative gap-2 pr-1 py-0.5 rounded-[2.89px]">
          <p className="flex-grow-0 flex-shrink-0 text-xs font-light text-center text-[#1e1b19]">
            Show details
          </p>
          <div className="flex-grow-0 flex-shrink-0 w-[6.5px] h-[6.5px] relative">
            <div className="flex justify-center items-center w-[6.5px] h-[6.5px] absolute left-0 top-0 gap-[2.773437261581421px]">
              <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[2.773437261581421px] px-[1.941406011581421px] py-[2.773437261581421px]">
                <svg
                  width="11"
                  height="9"
                  viewBox="0 0 11 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="self-stretch flex-grow"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M9.97324 4.71101L6.2291 8.45515C6.19009 8.49416 6.13719 8.51607 6.08203 8.51607C6.02687 8.51607 5.97397 8.49416 5.93496 8.45515C5.89596 8.41615 5.87405 8.36324 5.87405 8.30808C5.87405 8.25292 5.89596 8.20002 5.93496 8.16101L9.324 4.77195H0.673828C0.618661 4.77195 0.565753 4.75003 0.526744 4.71103C0.487735 4.67202 0.46582 4.61911 0.46582 4.56394C0.46582 4.50877 0.487735 4.45587 0.526744 4.41686C0.565753 4.37785 0.618661 4.35593 0.673828 4.35593H9.324L5.93496 0.96687C5.89596 0.927865 5.87405 0.874963 5.87405 0.819802C5.87405 0.764641 5.89596 0.711739 5.93496 0.672734C5.97397 0.633729 6.02687 0.611816 6.08203 0.611816C6.13719 0.611816 6.19009 0.633729 6.2291 0.672734L9.97324 4.41687C9.99256 4.43618 10.0079 4.45911 10.0183 4.48435C10.0288 4.50958 10.0342 4.53663 10.0342 4.56394C10.0342 4.59126 10.0288 4.6183 10.0183 4.64354C10.0079 4.66877 9.99256 4.6917 9.97324 4.71101V4.71101Z"
                    fill="#1E1B19"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DcCsvOne;
