import { useNavigate } from 'react-router-dom';

const WorkerProfileDetails = () => {
  const navigate = useNavigate();

  return (
    <div class="w-[1440px] h-[1477px] relative overflow-hidden bg-[#f6f5f2]">
      <div class="w-[1372px] h-11">
        <div class="w-[1372px] h-11 absolute left-[67.5px] top-[63.5px] bg-white"></div>
        <div class="w-[1292px] h-[26px]">
          <div class="w-16 h-6">
            <p class="w-[33.48px] absolute left-[1366.52px] top-[73px] text-sm text-center text-black">
              close
            </p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-[23.63px] h-6 absolute left-[1336px] top-[73px]"
              preserveAspectRatio="none"
            >
              <path
                d="M11.8149 22C6.37687 22 1.96875 17.523 1.96875 12C1.96875 6.477 6.37687 2 11.8149 2C17.2529 2 21.6611 6.477 21.6611 12C21.6611 17.523 17.2529 22 11.8149 22ZM11.8149 10.586L9.03041 7.757L7.63718 9.172L10.4227 12L7.63718 14.828L9.03041 16.243L11.8149 13.414L14.5994 16.243L15.9926 14.828L13.2071 12L15.9926 9.172L14.5994 7.757L11.8149 10.586Z"
                fill="#1E1B19"
              ></path>
            </svg>
          </div>
          <p class="w-[248px] absolute left-[108px] top-[75px] text-sm text-left text-black">
            Worker Profile
          </p>
        </div>
      </div>
      <div class="flex flex-col justify-start items-start w-[1372px] absolute left-[68px] top-[220px] gap-6 py-2">
        <svg
          width="1372"
          height="2"
          viewBox="0 0 1372 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="self-stretch flex-grow-0 flex-shrink-0 h-px relative"
          preserveAspectRatio="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1377.74 1.00418H0V0H1377.74V1.00418Z"
            fill="#CCC6BB"
          ></path>
        </svg>
        <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[1290px] gap-[759px] px-10">
          <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-4">
            <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[69px]">
              <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-black">
                Data source
              </p>
              <p class="flex-grow-0 flex-shrink-0 text-base font-light text-left text-black">
                <span class="flex-grow-0 flex-shrink-0 text-base font-light text-left text-black">
                  Talent Academy CSV{' '}
                </span>
                <br />
                <span class="flex-grow-0 flex-shrink-0 text-base font-light text-left text-black">
                  Data source 2
                </span>
              </p>
            </div>
            <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[339px] relative gap-[97px]">
              <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-black">
                Pipeline
              </p>
              <p class="flex-grow-0 flex-shrink-0 text-base font-light text-left text-black">
                CSV Connector 4
              </p>
            </div>
          </div>
          <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-[154.4px] h-[50.23px]"></div>
        </div>
        <svg
          width="1372"
          height="2"
          viewBox="0 0 1372 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="self-stretch flex-grow-0 flex-shrink-0 h-px relative"
          preserveAspectRatio="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1377.74 1.00418H0V0H1377.74V1.00418Z"
            fill="#CCC6BB"
          ></path>
        </svg>
      </div>
      <div class="flex flex-col justify-start items-start w-[1372px] absolute left-[68px] top-[124px] gap-6 py-2">
        <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[1290px] gap-[759px] px-10">
          <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-4">
            <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[108px]">
              <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-black">
                Name
              </p>
              <p class="flex-grow-0 flex-shrink-0 text-base font-light text-left text-black">
                Worker profile
              </p>
            </div>
            <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[339px] relative gap-[73px]">
              <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-black">
                Description
              </p>
              <p class="flex-grow-0 flex-shrink-0 text-base font-light text-left text-[#1e1b19]">
                This data product provides all the worker details including
                their IDs, personal information, country ..
              </p>
            </div>
          </div>
          <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-[154.4px] h-[50.23px]"></div>
        </div>
      </div>
      <div class="w-[1280px] h-[370px]">
        <div class="w-[1280px] h-[318px]">
          <div
            class="w-[1280px] h-[318px] absolute left-[107.5px] top-[441.5px] bg-white"
            style={{ boxShadow: '0px 1px 3px 0 rgba(0,0,0,0.1), 0px 1px 2px 0 rgba(0,0,0,0.06)' }}
          ></div>
          <div class="flex flex-col justify-start items-start h-[200.64px] absolute left-[132px] top-[454.11px] gap-2">
            <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[1230px] relative bg-white">
              <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-11">
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[200px] h-[39px] relative gap-3 p-4">
                  <p class="flex-grow-0 flex-shrink-0 w-32 text-sm text-left text-[#1e1b19]">
                    Column
                  </p>
                </div>
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[100px] h-[39px] relative gap-3 py-4">
                  <p class="flex-grow w-[100px] text-sm text-left text-[#1e1b19]">
                    Type
                  </p>
                </div>
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[270px] h-[39px] relative gap-3 py-4">
                  <p class="flex-grow w-[270px] text-sm text-left text-[#1e1b19]">
                    Descriptions
                  </p>
                </div>
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 h-[39px] relative gap-3 py-4">
                  <p class="flex-grow-0 flex-shrink-0 w-32 text-sm text-left text-[#1e1b19]">
                    PII
                  </p>
                </div>
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 h-[39px] relative gap-3 py-4">
                  <p class="flex-grow-0 flex-shrink-0 w-32 text-sm text-left text-[#1e1b19]">
                    Tags
                  </p>
                </div>
              </div>
              <div class="self-stretch flex-grow-0 flex-shrink-0 w-[1230px] h-px relative overflow-hidden bg-[#13100f]/[0.15]"></div>
              <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-11">
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[200px] h-9 relative gap-[5px] p-4">
                  <p class="flex-grow-0 flex-shrink-0 w-[73px] text-base font-light text-left text-[#1e1b19]">
                    Worker ID
                  </p>
                </div>
                <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[100px] relative gap-2.5 px-2 py-0.5 rounded bg-[#f8eecc]">
                  <p class="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#040505]">
                    Integer (32)
                  </p>
                </div>
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[270px] h-9 relative gap-[5px] py-4">
                  <p class="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#1e1b19]">
                    Internal sector worker Id
                  </p>
                </div>
                <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[123px] gap-2.5">
                  <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <div class="flex-grow-0 flex-shrink-0 w-12 h-6">
                      <div class="flex justify-start items-start w-12 absolute left-0 top-0 gap-2.5 px-2 py-0.5 rounded bg-[#f2f1ec]">
                        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1e1b19]">
                          PII
                        </p>
                      </div>
                      <div class="w-4 h-4 absolute left-7 top-1 overflow-hidden"></div>
                    </div>
                  </div>
                </div>
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[270px] h-9 gap-[5px] py-4">
                  <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative px-2.5 py-0.5 rounded-[3px] bg-[#e6e2da]">
                    <p class="flex-grow-0 flex-shrink-0 text-xs text-center text-[#1e1b19]">
                      Employee ID
                    </p>
                  </div>
                </div>
              </div>
              <div class="self-stretch flex-grow-0 flex-shrink-0 w-[1230px] h-px relative overflow-hidden bg-[#13100f]/[0.15]"></div>
              <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-11">
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[200px] h-9 relative gap-[5px] p-4">
                  <p class="flex-grow-0 flex-shrink-0 w-28 text-base font-light text-left text-[#1e1b19]">
                    Worker No.
                  </p>
                </div>
                <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[100px] relative gap-2.5 px-2 py-0.5 rounded bg-[#f8eecc]">
                  <p class="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#040505]">
                    String (45)
                  </p>
                </div>
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[270px] h-9 relative gap-[5px] py-4">
                  <p class="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#1e1b19]">
                    NEOM ID/lqama no
                  </p>
                </div>
                <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[123px] gap-2.5"></div>
                <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative px-2.5 py-0.5 rounded-[3px] bg-[#e6e2da]">
                  <p class="flex-grow-0 flex-shrink-0 text-xs text-center text-[#1e1b19]">
                    NEOM ID
                  </p>
                </div>
                <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 px-1"></div>
              </div>
              <div class="self-stretch flex-grow-0 flex-shrink-0 w-[1230px] h-px relative overflow-hidden bg-[#13100f]/[0.15]"></div>
              <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-11">
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[200px] h-9 relative gap-[5px] p-4">
                  <p class="flex-grow-0 flex-shrink-0 w-28 text-base font-light text-left text-[#1e1b19]">
                    Worker DOB
                  </p>
                </div>
                <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[100px] relative gap-2.5 px-2 py-0.5 rounded bg-[#f8eecc]">
                  <p class="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#040505]">
                    String (32)
                  </p>
                </div>
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[270px] h-9 relative gap-[5px] py-4">
                  <p class="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#1e1b19]">
                    Worker’s date of birth
                  </p>
                </div>
                <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[123px] gap-2.5">
                  <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <div class="flex-grow-0 flex-shrink-0 w-12 h-6">
                      <div class="flex justify-start items-start w-12 absolute left-0 top-0 gap-2.5 px-2 py-0.5 rounded bg-[#f2f1ec]">
                        <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1e1b19]">
                          PII
                        </p>
                      </div>
                      <div class="w-4 h-4 absolute left-7 top-1 overflow-hidden"></div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 px-1"></div>
              </div>
              <div class="self-stretch flex-grow-0 flex-shrink-0 w-[1230px] h-px relative overflow-hidden bg-[#13100f]/[0.15]"></div>
              <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-11">
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[200px] h-9 relative gap-[5px] p-4">
                  <p class="flex-grow-0 flex-shrink-0 w-[162px] text-base font-light text-left text-[#1e1b19]">
                    Worker Country
                  </p>
                </div>
                <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[100px] relative gap-2.5 px-2 py-0.5 rounded bg-[#f8eecc]">
                  <p class="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#040505]">
                    String (54)
                  </p>
                </div>
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[270px] h-9 relative gap-[5px] py-4">
                  <p class="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#1e1b19]">
                    Text field describing the country of origin
                  </p>
                </div>
              </div>
              <div class="self-stretch flex-grow-0 flex-shrink-0 w-[1230px] h-px relative overflow-hidden bg-[#13100f]/[0.15]"></div>
              <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-11">
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[200px] h-9 relative gap-[5px] p-4">
                  <p class="flex-grow-0 flex-shrink-0 w-28 text-base font-light text-left text-[#1e1b19]">
                    Worker Gender
                  </p>
                </div>
                <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[100px] relative gap-2.5 px-2 py-0.5 rounded bg-[#f8eecc]">
                  <p class="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#040505]">
                    String (54)
                  </p>
                </div>
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[270px] h-9 relative gap-[5px] py-4">
                  <p class="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#1e1b19]">
                    Male, Female, Prefer not to say
                  </p>
                </div>
              </div>
              <div class="self-stretch flex-grow-0 flex-shrink-0 w-[1230px] h-px relative overflow-hidden bg-[#13100f]/[0.15]"></div>
              <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-11">
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[200px] h-9 relative gap-[5px] p-4">
                  <p class="flex-grow-0 flex-shrink-0 w-[184px] text-base font-light text-left text-[#1e1b19]">
                    Worker Occupation
                  </p>
                </div>
                <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[100px] relative gap-2.5 px-2 py-0.5 rounded bg-[#f8eecc]">
                  <p class="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#040505]">
                    Integer (10)
                  </p>
                </div>
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[270px] h-9 relative gap-[5px] py-4">
                  <p class="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#1e1b19]">
                    Occupation of the worker
                  </p>
                </div>
              </div>
              <div class="self-stretch flex-grow-0 flex-shrink-0 w-[1230px] h-px relative overflow-hidden bg-[#13100f]/[0.15]"></div>
            </div>
          </div>
          <div class="w-1 h-[37.86px] absolute left-[1375.5px] top-[492.99px] rounded-[100px] bg-[#c6c6c6]"></div>
        </div>
        <div class="flex flex-col justify-start items-start absolute left-[108px] top-[414px] gap-2">
          <p class="flex-grow-0 flex-shrink-0 w-[920px] text-sm font-light text-left text-black">
            Add descriptions to fields, mark Personally Identifieadble
            Information (PII) and add tags
          </p>
        </div>
        <p class="w-[331.26px] absolute left-[108px] top-[390px] text-base text-left text-black">
          Data schema
        </p>
      </div>
      <div class="w-[1280px] h-[404px]">
        <div class="w-[1280px] h-[372px]">
          <div
            class="w-[1280px] h-[372px] absolute left-[107.5px] top-[903.5px] bg-white"
            style={{ boxShadow: '0px 1px 3px 0 rgba(0,0,0,0.1), 0px 1px 2px 0 rgba(0,0,0,0.06)' }}
          ></div>
          <div class="flex flex-col justify-start items-start w-[1280px] absolute left-[108px] top-[920px] gap-2">
            <div class="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2 pl-6 pr-2">
              <div class="flex flex-col justify-start items-start flex-grow relative pr-6">
                <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-11">
                  <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[200px] h-[39px] relative gap-3 p-4">
                    <p class="flex-grow w-[168px] text-sm text-left text-[#1e1b19]">
                      Rule
                    </p>
                  </div>
                  <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[270px] h-[39px] relative gap-3 py-4">
                    <p class="flex-grow w-[270px] text-sm text-left text-[#1e1b19]">
                      Allowed
                    </p>
                  </div>
                </div>
                <div class="self-stretch flex-grow-0 flex-shrink-0 w-[1224px] h-px relative overflow-hidden bg-[#13100f]/[0.15]"></div>
                <div class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-11 py-2">
                  <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[200px] h-9 relative gap-[5px] p-4">
                    <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1e1b19]">
                      Discoverability in Exchange
                    </p>
                  </div>
                  <div class="flex justify-start items-center flex-grow h-9 relative gap-[5px] py-4">
                    <p class="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#1e1b19]">
                      Public - Everyone in NEOM can see schema, metadata, data
                      quality and data preview
                    </p>
                  </div>
                </div>
                <div class="self-stretch flex-grow-0 flex-shrink-0 w-[1224px] h-px relative overflow-hidden bg-[#13100f]/[0.15]"></div>
                <div class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-11 py-2">
                  <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[200px] h-9 relative gap-[5px] p-4">
                    <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1e1b19]">
                      Access rules
                    </p>
                  </div>
                  <div class="flex justify-start items-center flex-grow h-9 relative gap-[5px] py-4">
                    <p class="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#1e1b19]">
                      Data product can be subscribed by requesting access.
                    </p>
                  </div>
                </div>
                <div class="self-stretch flex-grow-0 flex-shrink-0 w-[1224px] h-px relative overflow-hidden bg-[#13100f]/[0.15]"></div>
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[586px] gap-11">
                  <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[200px] h-9 relative gap-[5px] p-4">
                    <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1e1b19]">
                      Usage of PII
                    </p>
                  </div>
                  <div class="flex justify-start items-center flex-grow h-9 relative gap-[5px] py-4">
                    <p class="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#1e1b19]">
                      PII use allowed
                    </p>
                  </div>
                </div>
                <div class="self-stretch flex-grow-0 flex-shrink-0 w-[1224px] h-px relative overflow-hidden bg-[#13100f]/[0.15]"></div>
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[586px] gap-11 py-2">
                  <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[200px] h-9 relative gap-[5px] p-4">
                    <p class="flex-grow-0 flex-shrink-0 text-left text-[#1e1b19]">
                      <span class="flex-grow-0 flex-shrink-0 text-base text-left text-[#1e1b19]">
                        Retention{' '}
                      </span>
                      <span class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1e1b19]">
                        rights
                      </span>
                    </p>
                  </div>
                  <div class="flex justify-start items-center flex-grow h-9 relative gap-[5px] py-4">
                    <p class="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#1e1b19]">
                      <span class="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#1e1b19]">
                        No retention rights. Data must be destroyed{' '}
                      </span>
                      <br />
                      <span class="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#1e1b19]">
                        when subscription ends.
                      </span>
                    </p>
                  </div>
                </div>
                <div class="self-stretch flex-grow-0 flex-shrink-0 w-[1224px] h-px relative overflow-hidden bg-[#13100f]/[0.15]"></div>
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[586px] gap-11">
                  <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[200px] h-9 relative gap-[5px] p-4">
                    <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1e1b19]">
                      Commercial usage
                    </p>
                  </div>
                  <div class="flex justify-start items-center flex-grow h-9 relative gap-[5px] py-4">
                    <p class="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#1e1b19]">
                      Not allowed
                    </p>
                  </div>
                </div>
                <div class="self-stretch flex-grow-0 flex-shrink-0 w-[1224px] h-px relative overflow-hidden bg-[#13100f]/[0.15]"></div>
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[586px] gap-11 py-4">
                  <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[200px] h-9 relative gap-[5px] p-4">
                    <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#1e1b19]">
                      Re-distribution rights
                    </p>
                  </div>
                  <div class="flex justify-start items-center flex-grow h-9 relative gap-[5px] py-4">
                    <p class="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#1e1b19]">
                      <span class="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#1e1b19]">
                        Partial re-distribution rights.{' '}
                      </span>
                      <br />
                      <span class="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#1e1b19]">
                        Subscribers can use my data product to build new data
                        products.{' '}
                      </span>
                      <br />
                      <span class="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#1e1b19]">
                        Ownership of my data stays with me
                      </span>
                    </p>
                  </div>
                </div>
                <div class="self-stretch flex-grow-0 flex-shrink-0 w-[1224px] h-px relative overflow-hidden bg-[#13100f]/[0.15]"></div>
              </div>
            </div>
          </div>
          <div class="w-1 h-[50px] absolute left-[1375.5px] top-[965.5px] rounded-[100px] bg-[#c6c6c6]"></div>
        </div>
        <p class="w-[331.26px] absolute left-[108px] top-[872px] text-base text-left text-[#1e1b19]">
          Governance rules for publishing
        </p>
      </div>
      <div class="w-[1280px] h-[72px]">
        <div
          class="w-[1280px] h-[72px] absolute left-[107.5px] top-[775.5px] bg-white"
          style={{ boxShadow: '0px 1px 3px 0 rgba(0,0,0,0.1), 0px 1px 2px 0 rgba(0,0,0,0.06)' }}
        ></div>
        <p class="w-[270px] absolute left-[124px] top-[800px] text-base text-left text-black">
          <span class="w-[270px] text-base text-left text-black">
            Data quality:
          </span>
          <span class="w-[270px] text-base font-light text-left text-black">
            {' '}
            3/5
          </span>
        </p>
        <div class="w-[186.62px] h-[27.42px]">
          <div class="w-[155.05px] h-6">
            <p class="w-[115.65px] absolute left-[856.57px] top-[800px] text-base text-left text-black">
              Completeness:
            </p>
            <p class="w-[32.01px] absolute left-[979.61px] top-[800px] text-base font-light text-left text-black">
              22%
            </p>
          </div>
          <div class="flex justify-center items-center absolute left-[825px] top-[798px] gap-[5.773195743560791px]">
            <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[5.773195743560791px] p-[2.8865978717803955px]">
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M16.7876 8.81445C16.8268 8.85558 16.8576 8.90404 16.8782 8.95707C16.8987 9.01009 16.9086 9.06664 16.9072 9.12349C16.9059 9.18034 16.8934 9.23637 16.8704 9.28838C16.8474 9.34039 16.8144 9.38737 16.7733 9.42662L10.4229 15.4885C10.3423 15.5654 10.2353 15.6082 10.1239 15.6082C10.0126 15.6082 9.9055 15.5654 9.82496 15.4885L6.64963 12.4575C6.56708 12.3781 6.51935 12.2693 6.51691 12.1547C6.51446 12.0402 6.55749 11.9294 6.63658 11.8465C6.71566 11.7637 6.82436 11.7155 6.93887 11.7126C7.05337 11.7097 7.16436 11.7523 7.24753 11.8311L10.1239 14.5767L16.1754 8.80018C16.2165 8.76091 16.265 8.73013 16.318 8.7096C16.371 8.68907 16.4276 8.67918 16.4844 8.6805C16.5413 8.68183 16.5973 8.69434 16.6493 8.71732C16.7013 8.74031 16.7483 8.77331 16.7876 8.81445V8.81445ZM22.5362 11.7113C22.5362 13.8523 21.9013 15.9451 20.7119 17.7252C19.5225 19.5054 17.8319 20.8928 15.8539 21.7121C13.876 22.5314 11.6995 22.7458 9.59966 22.3281C7.49987 21.9104 5.57108 20.8795 4.05722 19.3656C2.54335 17.8517 1.51239 15.9229 1.09472 13.8231C0.677043 11.7233 0.891409 9.54685 1.71071 7.56889C2.53001 5.59093 3.91744 3.90033 5.69756 2.71089C7.47768 1.52146 9.57053 0.886597 11.7115 0.886597C14.5814 0.889834 17.3328 2.03133 19.3621 4.06067C21.3915 6.09 22.533 8.84143 22.5362 11.7113V11.7113ZM21.6702 11.7113C21.6702 9.74168 21.0862 7.81626 19.9919 6.17855C18.8976 4.54084 17.3422 3.2644 15.5225 2.51064C13.7028 1.75689 11.7004 1.55967 9.76861 1.94393C7.8368 2.32819 6.06231 3.27667 4.66956 4.66943C3.2768 6.06219 2.32832 7.83667 1.94406 9.76848C1.5598 11.7003 1.75701 13.7027 2.51077 15.5224C3.26452 17.3421 4.54096 18.8975 6.17867 19.9917C7.81638 21.086 9.74181 21.6701 11.7115 21.6701C14.3518 21.6671 16.8831 20.6169 18.7501 18.7499C20.617 16.883 21.6672 14.3516 21.6702 11.7113V11.7113Z"
                  fill="black"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="w-[172px] h-7">
          <div class="w-[140px] h-6">
            <p class="w-[98px] absolute left-[661px] top-[800px] text-base text-left text-black">
              Consistency:
            </p>
            <p class="w-[34.08px] absolute left-[766.92px] top-[800px] text-base font-light text-left text-black">
              99%
            </p>
          </div>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-7 h-7 absolute left-[629px] top-[798px]"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M24.8998 11.116C24.8937 11.127 24.8889 11.1384 24.8819 11.149C24.8498 11.197 24.8086 11.2382 24.7606 11.2703C24.7498 11.2775 24.7381 11.2824 24.7269 11.2886C24.7006 11.3057 24.6714 11.3178 24.6408 11.3243C24.6283 11.3279 24.6165 11.3327 24.6037 11.3353C24.5754 11.341 24.5467 11.3439 24.518 11.3439H19.268C19.1519 11.3439 19.0407 11.2978 18.9586 11.2158C18.8766 11.1337 18.8305 11.0225 18.8305 10.9064C18.8305 10.7904 18.8766 10.6791 18.9586 10.5971C19.0407 10.515 19.1519 10.4689 19.268 10.4689H23.4618L20.4963 7.5034C18.772 5.78294 16.4356 4.81672 13.9997 4.81672C11.5639 4.81672 9.22746 5.78294 7.50311 7.5034C7.42107 7.58544 7.3098 7.63153 7.19378 7.63153C7.07776 7.63153 6.9665 7.58544 6.88446 7.5034C6.80242 7.42136 6.75633 7.3101 6.75633 7.19408C6.75633 7.07806 6.80242 6.96679 6.88446 6.88475C7.81884 5.95036 8.92812 5.20916 10.149 4.70347C11.3698 4.19778 12.6783 3.9375 13.9997 3.9375C15.3211 3.9375 16.6296 4.19778 17.8505 4.70347C19.0713 5.20916 20.1806 5.95036 21.115 6.88475L24.0805 9.85027V5.65642C24.0805 5.54039 24.1266 5.42911 24.2086 5.34706C24.2907 5.26501 24.4019 5.21892 24.518 5.21892C24.634 5.21892 24.7453 5.26501 24.8273 5.34706C24.9094 5.42911 24.9555 5.54039 24.9555 5.65642V10.9064C24.9554 10.9352 24.9525 10.9639 24.9468 10.9921C24.9443 11.005 24.9395 11.0169 24.9358 11.0294C24.9292 11.0602 24.917 11.0896 24.8998 11.116ZM20.4963 20.4966C18.772 22.2171 16.4356 23.1833 13.9997 23.1833C11.5639 23.1833 9.22746 22.2171 7.50311 20.4966L4.53759 17.5311H8.73144C8.84747 17.5311 8.95875 17.485 9.0408 17.4029C9.12285 17.3209 9.16894 17.2096 9.16894 17.0936C9.16894 16.9775 9.12285 16.8663 9.0408 16.7842C8.95875 16.7022 8.84747 16.6561 8.73144 16.6561H3.48144C3.45265 16.6561 3.42394 16.659 3.39572 16.6647C3.38303 16.6673 3.37129 16.672 3.35902 16.6756C3.32835 16.6821 3.29914 16.6942 3.27285 16.7113C3.26148 16.7174 3.24968 16.7225 3.23879 16.7297C3.19081 16.7618 3.14962 16.803 3.11756 16.851C3.11046 16.8616 3.1056 16.8731 3.09954 16.8842C3.08234 16.9106 3.07015 16.94 3.06357 16.9708C3.05993 16.9832 3.05514 16.9951 3.05259 17.0079C3.04691 17.0361 3.04401 17.0648 3.04395 17.0936V22.3436C3.04395 22.4596 3.09004 22.5709 3.17209 22.6529C3.25413 22.735 3.36541 22.7811 3.48145 22.7811C3.59748 22.7811 3.70876 22.735 3.7908 22.6529C3.87285 22.5709 3.91895 22.4596 3.91895 22.3436V18.1497L6.88446 21.1152C7.81885 22.0496 8.92812 22.7908 10.149 23.2965C11.3698 23.8022 12.6783 24.0625 13.9997 24.0625C15.3211 24.0625 16.6296 23.8022 17.8505 23.2965C19.0713 22.7908 20.1806 22.0496 21.115 21.1152C21.197 21.0332 21.2431 20.9219 21.2431 20.8059C21.2431 20.6899 21.197 20.5786 21.115 20.4966C21.0329 20.4146 20.9217 20.3685 20.8056 20.3685C20.6896 20.3685 20.5783 20.4146 20.4963 20.4966Z"
              fill="black"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.7031 17.4317C15.2101 17.4317 16.4317 16.2101 16.4317 14.7031C16.4317 13.1962 15.2101 11.9745 13.7031 11.9745C12.1962 11.9745 10.9745 13.1962 10.9745 14.7031C10.9745 16.2101 12.1962 17.4317 13.7031 17.4317ZM13.7031 18.4063C15.7483 18.4063 17.4063 16.7483 17.4063 14.7031C17.4063 12.6579 15.7483 11 13.7031 11C11.6579 11 10 12.6579 10 14.7031C10 16.7483 11.6579 18.4063 13.7031 18.4063Z"
              fill="black"
            ></path>
          </svg>
        </div>
        <div class="w-[151.08px] h-7">
          <div class="w-[119.08px] h-6">
            <p class="w-[77.45px] absolute left-[486px] top-[800px] text-base text-left text-black">
              Accuracy:
            </p>
            <p class="w-[34.08px] absolute left-[571px] top-[800px] text-base font-light text-left text-black">
              88%
            </p>
          </div>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-7 h-7 absolute left-[454px] top-[798px]"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M14 3.5C11.9233 3.5 9.89323 4.11581 8.16652 5.26957C6.4398 6.42332 5.09399 8.0632 4.29927 9.98182C3.50455 11.9004 3.29661 14.0116 3.70176 16.0484C4.1069 18.0852 5.10693 19.9562 6.57538 21.4246C8.04383 22.8931 9.91476 23.8931 11.9516 24.2982C13.9884 24.7034 16.0996 24.4955 18.0182 23.7007C19.9368 22.906 21.5767 21.5602 22.7304 19.8335C23.8842 18.1068 24.5 16.0767 24.5 14C24.4969 11.2162 23.3896 8.54731 21.4211 6.57886C19.4527 4.61041 16.7838 3.50315 14 3.5V3.5ZM14.4375 23.6146V19.6875C14.4375 19.5715 14.3914 19.4602 14.3094 19.3781C14.2273 19.2961 14.116 19.25 14 19.25C13.884 19.25 13.7727 19.2961 13.6906 19.3781C13.6086 19.4602 13.5625 19.5715 13.5625 19.6875V23.6146C11.1647 23.5026 8.895 22.4997 7.19764 20.8024C5.50027 19.105 4.49743 16.8353 4.38537 14.4375H8.31251C8.42854 14.4375 8.53982 14.3914 8.62186 14.3094C8.70391 14.2273 8.75001 14.116 8.75001 14C8.75001 13.884 8.70391 13.7727 8.62186 13.6906C8.53982 13.6086 8.42854 13.5625 8.31251 13.5625H4.38537C4.49743 11.1647 5.50027 8.89499 7.19764 7.19763C8.895 5.50027 11.1647 4.49742 13.5625 4.38536V8.3125C13.5625 8.42853 13.6086 8.53981 13.6906 8.62186C13.7727 8.70391 13.884 8.75 14 8.75C14.116 8.75 14.2273 8.70391 14.3094 8.62186C14.3914 8.53981 14.4375 8.42853 14.4375 8.3125V4.38536C16.8353 4.49742 19.105 5.50027 20.8024 7.19763C22.4997 8.89499 23.5026 11.1647 23.6146 13.5625H19.6875C19.5715 13.5625 19.4602 13.6086 19.3781 13.6906C19.2961 13.7727 19.25 13.884 19.25 14C19.25 14.116 19.2961 14.2273 19.3781 14.3094C19.4602 14.3914 19.5715 14.4375 19.6875 14.4375H23.6146C23.5026 16.8353 22.4997 19.105 20.8024 20.8024C19.105 22.4997 16.8353 23.5026 14.4375 23.6146Z"
              fill="black"
            ></path>
          </svg>
        </div>
        <div class="w-[164px] h-[27.67px]">
          <p class="absolute left-[1067px] top-[800px] text-base text-left text-black">
            Uniqueness:
          </p>
          <p class="absolute left-[1168px] top-[800px] text-base font-light text-left text-black">
            72%
          </p>
          <div class="flex flex-col justify-center items-center absolute left-[1035px] top-[798px] gap-[5.773195743560791px] py-[1.1546391248703003px]">
            <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[5.773195743560791px] px-[4.041236877441406px] py-[2.3092782497406006px]">
              <svg
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path
                  d="M18.6596 0.463867H1.33998C0.995595 0.464252 0.665421 0.601231 0.4219 0.844752C0.178379 1.08827 0.0414004 1.41845 0.0410156 1.76284V8.11334C0.0410156 17.4989 8.00185 20.6137 9.59766 21.1428C9.85844 21.2313 10.1411 21.2313 10.4019 21.1428C11.9977 20.6137 19.9585 17.4989 19.9585 8.11334V1.76284C19.9582 1.41845 19.8212 1.08827 19.5777 0.844752C19.3341 0.601231 19.004 0.464252 18.6596 0.463867V0.463867ZM19.0926 8.11334C19.0926 16.9038 11.6261 19.8246 10.1294 20.3208C10.0456 20.3509 9.95395 20.3509 9.87018 20.3208C8.37342 19.8246 0.906995 16.9038 0.906995 8.11334V1.76284C0.907117 1.64804 0.952775 1.53798 1.03395 1.4568C1.11512 1.37563 1.22519 1.32997 1.33998 1.32985H18.6596C18.7744 1.32997 18.8844 1.37563 18.9656 1.4568C19.0468 1.53798 19.0924 1.64804 19.0926 1.76284V8.11334ZM15.0759 6.65976C15.1152 6.70089 15.1459 6.74935 15.1665 6.80238C15.187 6.8554 15.1969 6.91196 15.1956 6.9688C15.1942 7.02565 15.1817 7.08168 15.1587 7.13369C15.1358 7.1857 15.1028 7.23268 15.0616 7.27193L8.71106 13.3338C8.63052 13.4107 8.52346 13.4536 8.41211 13.4536C8.30077 13.4536 8.19371 13.4107 8.11316 13.3338L4.93794 10.3029C4.85539 10.2235 4.80767 10.1146 4.80522 10.0001C4.80277 9.88553 4.8458 9.77471 4.92489 9.69185C5.00397 9.60899 5.11267 9.56084 5.22718 9.55795C5.34168 9.55506 5.45267 9.59766 5.53584 9.67642L8.41211 12.422L14.4637 6.64549C14.5048 6.60623 14.5533 6.57546 14.6063 6.55493C14.6594 6.5344 14.7159 6.52451 14.7728 6.52584C14.8296 6.52716 14.8856 6.53967 14.9376 6.56265C14.9897 6.58563 15.0366 6.61863 15.0759 6.65976V6.65976Z"
                  fill="black"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="w-[138px] h-7">
          <p class="absolute left-[1255px] top-[800px] text-base text-left text-black">
            Validity:
          </p>
          <p class="absolute left-[1330px] top-[800px] text-base font-light text-left text-black">
            72%
          </p>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-7 h-7 absolute left-[1223px] top-[798px]"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M22.75 3.9375H19.6875V2.625C19.6875 2.50897 19.6414 2.39769 19.5594 2.31564C19.4773 2.23359 19.366 2.1875 19.25 2.1875C19.134 2.1875 19.0227 2.23359 18.9406 2.31564C18.8586 2.39769 18.8125 2.50897 18.8125 2.625V3.9375H9.1875V2.625C9.1875 2.50897 9.14141 2.39769 9.05936 2.31564C8.97731 2.23359 8.86603 2.1875 8.75 2.1875C8.63397 2.1875 8.52269 2.23359 8.44064 2.31564C8.35859 2.39769 8.3125 2.50897 8.3125 2.625V3.9375H5.25C4.90202 3.93789 4.56841 4.07629 4.32235 4.32235C4.07629 4.56841 3.93789 4.90202 3.9375 5.25V22.75C3.93789 23.098 4.07629 23.4316 4.32235 23.6776C4.56841 23.9237 4.90202 24.0621 5.25 24.0625H22.75C23.098 24.0621 23.4316 23.9237 23.6776 23.6776C23.9237 23.4316 24.0621 23.098 24.0625 22.75V5.25C24.0621 4.90202 23.9237 4.56841 23.6776 4.32235C23.4316 4.07629 23.098 3.93789 22.75 3.9375ZM5.25 4.8125H8.3125V6.125C8.3125 6.24103 8.35859 6.35231 8.44064 6.43436C8.52269 6.51641 8.63397 6.5625 8.75 6.5625C8.86603 6.5625 8.97731 6.51641 9.05936 6.43436C9.14141 6.35231 9.1875 6.24103 9.1875 6.125V4.8125H18.8125V6.125C18.8125 6.24103 18.8586 6.35231 18.9406 6.43436C19.0227 6.51641 19.134 6.5625 19.25 6.5625C19.366 6.5625 19.4773 6.51641 19.5594 6.43436C19.6414 6.35231 19.6875 6.24103 19.6875 6.125V4.8125H22.75C22.866 4.81262 22.9772 4.85876 23.0592 4.94078C23.1412 5.0228 23.1874 5.13401 23.1875 5.25V9.1875H4.8125V5.25C4.81262 5.13401 4.85876 5.0228 4.94078 4.94078C5.0228 4.85876 5.13401 4.81262 5.25 4.8125ZM22.75 23.1875H5.25C5.13401 23.1874 5.0228 23.1412 4.94078 23.0592C4.85876 22.9772 4.81262 22.866 4.8125 22.75V10.0625H23.1875V22.75C23.1874 22.866 23.1412 22.9772 23.0592 23.0592C22.9772 23.1412 22.866 23.1874 22.75 23.1875ZM18.2553 13.6993C18.3349 13.7838 18.3776 13.8963 18.3742 14.0123C18.3708 14.1283 18.3215 14.2382 18.2371 14.3178L13.1328 19.1303C13.0515 19.207 12.944 19.2496 12.8322 19.2495C12.7205 19.2493 12.613 19.2064 12.5319 19.1295L9.76102 16.5045C9.71932 16.465 9.68581 16.4177 9.66241 16.3652C9.639 16.3127 9.62616 16.2562 9.62461 16.1987C9.62306 16.1413 9.63284 16.0842 9.65339 16.0305C9.67394 15.9769 9.70485 15.9278 9.74436 15.8861C9.78388 15.8444 9.83122 15.8109 9.88368 15.7875C9.93614 15.7641 9.99271 15.7512 10.0501 15.7497C10.1076 15.7481 10.1647 15.7579 10.2184 15.7784C10.272 15.799 10.3211 15.8299 10.3628 15.8694L12.8335 18.21L17.6368 13.6812C17.7212 13.6016 17.8338 13.5588 17.9498 13.5622C18.0658 13.5656 18.1756 13.6149 18.2553 13.6993Z"
              fill="black"
            ></path>
          </svg>
        </div>
      </div>
      <div class="w-[68px] h-[1430px] absolute left-0 top-0">
        <div class="w-[67px] h-[1430px] absolute left-0 top-0 bg-white">
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
                d="M40.7694 26.5469C39.3601 27.9563 37.556 28.9078 35.5855 29.281C33.6149 29.6542 31.5664 29.4323 29.6989 28.6435C27.8314 27.8547 26.2288 26.5344 25.0938 24.8495C23.9588 23.1646 23.3424 21.1908 23.3225 19.1776C23.3025 17.1645 23.88 15.2026 24.9819 13.5398C26.0837 11.877 27.6604 10.5882 29.5127 9.83619C31.3649 9.08422 33.4095 8.90292 35.3878 9.31521C37.3661 9.72749 39.1893 10.7149 40.6269 12.1524L33.512 19.2674L40.7694 26.5469Z"
                fill="#1E1B19"
              ></path>
              <path
                d="M27.9556 24.8161C31.0959 27.9564 36.1563 27.9874 39.2583 24.8854C42.3603 21.7834 42.3292 16.723 39.1889 13.5827C36.0486 10.4424 30.9883 10.4114 27.8863 13.5134C24.7843 16.6154 24.8153 21.6758 27.9556 24.8161Z"
                fill="white"
              ></path>
              <path
                style={{ mixBlendMode: 'multiply' }}
                d="M31.5738 26.0107C34.6657 27.3168 38.1813 25.8897 39.4262 22.8231C40.671 19.7566 39.1736 16.2119 36.0818 14.9059C32.9899 13.5998 29.4743 15.0269 28.2294 18.0934C26.9846 21.16 28.4819 24.7047 31.5738 26.0107Z"
                fill="url(#paint0_radial_588_472215)"
              ></path>
              <path
                d="M45.7295 16.0135L45.1095 16.7981C45.7872 17.3337 46.2255 18.1146 46.3291 18.9677C46.4327 19.8204 46.1935 20.6746 45.6666 21.3436C45.1397 22.0125 44.3667 22.4436 43.5162 22.5409C42.6833 22.6362 41.8423 22.4037 41.1715 21.8914L41.141 21.8609L41.0983 21.8267C40.5375 21.3767 39.8228 21.1624 39.1066 21.2321C38.3902 21.3019 37.7301 21.6505 37.2696 22.2043L37.2641 22.211L37.2587 22.2178C36.649 22.9776 35.8169 23.528 34.8768 23.7929C33.9364 24.0578 32.9336 24.0241 32.0067 23.6949C31.0797 23.3657 30.2752 22.7573 29.7047 21.9537C29.1342 21.1501 28.8266 20.1918 28.8231 19.2118C28.8196 18.2319 29.1203 17.2785 29.6824 16.4826C30.2445 15.6868 31.0411 15.0866 31.9629 14.765C32.8847 14.4433 33.887 14.416 34.8316 14.6883C35.7762 14.9606 36.6159 15.5191 37.234 16.2869L37.2399 16.2943L37.246 16.3015C37.7067 16.8523 38.3641 17.2032 39.0786 17.2778C39.7935 17.3525 40.5093 17.1446 41.0718 16.6963L41.1159 16.6612L41.1376 16.6395C41.7054 16.2319 42.3932 16.0199 43.098 16.038C43.8253 16.0567 44.5284 16.3194 45.0935 16.7852L45.7295 16.0135Z"
                stroke="#1E1B19"
                stroke-width="2"
              ></path>
              <circle cx="43.0566" cy="19.2505" r="1.25" fill="black"></circle>
              <defs>
                <radialGradient
                  id="paint0_radial_588_472215"
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
          height="21"
          viewBox="0 0 19 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[15.59px] h-[17.12px]"
          preserveAspectRatio="none"
        >
          <path
            d="M7 14.1572C10.3137 14.1572 13 11.3846 13 7.96436C13 4.54413 10.3137 1.77148 7 1.77148C3.68629 1.77148 1 4.54413 1 7.96436C1 11.3846 3.68629 14.1572 7 14.1572Z"
            stroke="#1E1B19"
            stroke-width="2"
            stroke-linecap="square"
          ></path>
          <path
            d="M11 13.1251L16.5879 18.8926"
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
      <div class="w-[1440px] h-[152px]">
        <div class="flex flex-col justify-start items-start absolute left-0 top-[1325px] gap-2.5 pl-[108px] pr-10 py-4 bg-white">
          <div class="flex-grow-0 flex-shrink-0 w-[1292px] h-[120px]">
            <div class="flex flex-col justify-start items-start absolute left-[1222px] top-10">
              <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
                <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 gap-2.5 py-2">
                  <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 h-10 relative gap-1 px-12 py-3 rounded-[3px] bg-[#23211e] cursor-pointer" onClick={() => navigate('/home-subscribe')}>
                    <p class="flex-grow-0 flex-shrink-0 text-sm text-center uppercase text-white">
                      SUBSCRIBE
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-start items-start w-[969px] absolute left-[108px] top-4 gap-[148px]">
              <p class="flex-grow-0 flex-shrink-0 text-base text-left text-black">
                Subscribe
              </p>
            </div>
            <p class="w-[1100px] absolute left-[108px] top-12 text-sm font-light text-left">
              <span class="w-[1100px] text-sm font-light text-left text-black">
                By subscribing to this product, you agree that your use of this
                product is subject to the provider's offer terms including
                pricing information and{' '}
              </span>
              <span class="w-[1100px] text-sm font-light text-left text-[#937206]">
                Data Subscription Agreement
              </span>
              <span class="w-[1100px] text-sm font-light text-left text-black">
                . Your use of NEOS services remains subject to the{' '}
              </span>
              <span class="w-[1100px] text-sm font-light text-left text-[#937206]">
                NEOS Customer Agreement
              </span>
              <span class="w-[1100px] text-sm font-light text-left text-black">
                or other agreement with NEOS governing your use of such
                services.
              </span>
            </p>
            <div class="flex flex-col justify-center items-start w-[800px] absolute left-[108px] top-28">
              <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
                <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[347px] relative gap-3">
                  <div class="self-stretch flex-grow rounded bg-white border border-[#bab8b2]"></div>
                  <p class="flex-grow-0 flex-shrink-0 w-[311px] text-sm font-light text-left text-[#23211e]">
                    I Agree to this terms of usage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg
          width="1440"
          height="1"
          viewBox="0 0 1440 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute left-[-0.5px] top-[1324.5px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <line y1="0.5" x2="1440" y2="0.5" stroke="#CCC6BB"></line>
        </svg>
      </div>
    </div>
  );
};

export default WorkerProfileDetails;
