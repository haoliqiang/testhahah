import React from "react";

import { Column, Stack, Text, Row, Img, List, Line, Button } from "components";

const I01Page = () => {
  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-alibabapuhuiti items-center justify-end mx-[auto] w-[100%]">
        <Column
          className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
          style={{ backgroundImage: "url('images/img_maskgroup.png')" }}
        >
          <Column
            className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
            style={{ backgroundImage: "url('images/img_group11.png')" }}
          >
            <Stack
              className="bg-cover bg-no-repeat h-[647px] relative w-[100%]"
              style={{ backgroundImage: "url('images/img_group12.png')" }}
            >
              <Column className="absolute bg-bluegray_900_4c bottom-[0] flex flex-col items-center justify-end sm:p-[15px] md:p-[30px] p-[44px] shadow-bs w-[100%]">
                <Column className="flex flex-col items-center justify-start mt-[120px] sm:mt-[63px] md:mt-[82px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                  <Column className="flex flex-col items-center justify-start w-[100%]">
                    <Text
                      className="text-white_A700 w-[auto]"
                      as="h1"
                      variant="h1"
                    >
                      OpenSDV软件定义汽车开源联盟
                    </Text>
                    <Text
                      className="md:mt-[12px] mt-[18px] sm:mt-[9px] text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      垂直、专业、开放
                    </Text>
                  </Column>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:mt-[113px] mt-[165px] sm:mt-[87px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[17%]">
                    <Img
                      src="images/img_frame.svg"
                      className="flex-shrink-0 sm:h-[16px] md:h-[21px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[20px] w-[30px]"
                      alt="Frame"
                    />
                    <Text
                      className="flex-grow md:ml-[11px] ml-[16px] sm:ml-[8px] not-italic text-white_A700"
                      variant="body4"
                    >
                      查看完整视频
                    </Text>
                  </Row>
                </Column>
              </Column>
              <header className="absolute top-[0] w-[100%]">
                <Row className="bg-bluegray_900_4c flex flex-row md:flex-wrap sm:flex-wrap items-center pt-[2px] px-[2px] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap md:ml-[39px] ml-[58px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%] common-row-list">
                    <ul className="flex flex-row items-center">
                      <li className="w-[15%] sm:w-[100%] sm:my-[10px] max-w-[100%]">
                        <Img
                          src="images/img_originimgv2e.png"
                          className="max-w-[100%]"
                          alt="originimgv2e"
                        />
                      </li>
                      <li className="w-[auto] mt-[35px] mb-[38px] ml-[477px] sm:ml-[254px] sm:w-[100%] sm:my-[10px] md:ml-[328px] md:mb-[26px] md:mt-[24px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal text-[18px] text-white_A700"
                          rel="noreferrer"
                        >
                          首页
                        </a>
                      </li>
                      <li className="w-[auto] mt-[35px] mb-[38px] ml-[80px] sm:ml-[42px] sm:w-[100%] sm:my-[10px] md:ml-[55px] md:mb-[26px] md:mt-[24px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[18px] text-white_A700"
                          rel="noreferrer"
                        >
                          联盟介绍
                        </a>
                      </li>
                      <li className="w-[auto] mt-[35px] mb-[38px] ml-[80px] sm:ml-[42px] sm:w-[100%] sm:my-[10px] md:ml-[55px] md:mb-[26px] md:mt-[24px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[18px] text-white_A700"
                          rel="noreferrer"
                        >
                          联盟会员
                        </a>
                      </li>
                      <li className="w-[auto] mt-[35px] mb-[38px] ml-[80px] sm:ml-[42px] sm:w-[100%] sm:my-[10px] md:ml-[55px] md:mb-[26px] md:mt-[24px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[18px] text-white_A700"
                          rel="noreferrer"
                        >
                          项目与社区
                        </a>
                      </li>
                      <li className="w-[auto] mt-[35px] mb-[38px] ml-[80px] sm:ml-[42px] sm:w-[100%] sm:my-[10px] md:ml-[55px] md:mb-[26px] md:mt-[24px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[18px] text-white_A700"
                          rel="noreferrer"
                        >
                          诚邀参与
                        </a>
                      </li>
                    </ul>
                  </Row>
                </Row>
              </header>
            </Stack>
          </Column>
        </Column>
        <Row className="bg-gray_50 flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[3px] p-[2px] w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[1350px] md:ml-[39px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
              <Column className="flex flex-col justify-start w-[100%]">
                <Text className="text-gray_900 w-[auto]" as="h2" variant="h2">
                  联盟会员
                </Text>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[38px] md:mt-[49px] mt-[72px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                  <Text
                    className="not-italic text-gray_900 w-[auto]"
                    variant="body3"
                  >
                    68
                  </Text>
                  <Text
                    className="md:ml-[11px] ml-[16px] sm:ml-[8px] sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-gray_900 w-[auto]"
                    variant="body7"
                  >
                    +
                  </Text>
                </Row>
                <Text
                  className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[17px] md:mt-[22px] mt-[32px] text-gray_900_90 w-[100%]"
                  variant="body4"
                >
                  包括白金会员、黄金会员、白银会员、非盈利机构会员包括白金会员、黄金会员、白银会员、非盈利机构会员
                </Text>
                <Img
                  src="images/img_arrowright.svg"
                  className="max-w-[100%] sm:ml-[265px] md:ml-[342px] ml-[498px] sm:mt-[12px] md:mt-[16px] mt-[24px] w-[6%]"
                  alt="arrowright"
                />
              </Column>
            </Column>
            <List
              className="sm:gap-[10px] md:gap-[13px] gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] sm:w-[100%] w-[57%]"
              orientation="horizontal"
            >
              <Column className="bg-gray_51 flex flex-col items-center justify-start py-[100px] sm:py-[15px] md:py-[68px] w-[100%]">
                <Stack className="bg-gray_51 h-[120px] sm:p-[15px] md:p-[26px] p-[39px] relative w-[100%]">
                  <Img
                    src="images/img_image136.png"
                    className="absolute h-[42px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[68%]"
                    alt="image136"
                  />
                </Stack>
                <Stack className="bg-gray_51 h-[120px] mt-[100px] sm:mt-[53px] md:mt-[68px] sm:p-[15px] md:p-[16px] p-[24px] relative w-[100%]">
                  <Img
                    src="images/img_image137.png"
                    className="absolute h-[72px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[80%]"
                    alt="image137"
                  />
                </Stack>
                <Stack className="bg-gray_51 h-[120px] sm:mb-[42px] md:mb-[55px] mb-[80px] mt-[100px] sm:mt-[53px] md:mt-[68px] md:p-[14px] sm:p-[15px] p-[21px] relative w-[100%]">
                  <Img
                    src="images/img_image138.png"
                    className="absolute h-[78px] inset-[0] justify-center m-[auto] max-w-[100%] w-[29%]"
                    alt="image138"
                  />
                </Stack>
              </Column>
              <Column className="bg-gray_51 flex flex-col items-center justify-end py-[100px] sm:py-[15px] md:py-[68px] w-[100%]">
                <Stack className="bg-gray_51 h-[120px] sm:mt-[42px] md:mt-[55px] mt-[80px] sm:p-[15px] md:p-[28px] p-[41px] relative w-[100%]">
                  <Img
                    src="images/img_image139.png"
                    className="absolute h-[34px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[66%]"
                    alt="image139"
                  />
                </Stack>
                <Stack className="bg-gray_51 h-[120px] mt-[100px] sm:mt-[53px] md:mt-[68px] sm:p-[15px] md:p-[23px] p-[34px] relative w-[100%]">
                  <Img
                    src="images/img_image140.png"
                    className="absolute h-[51px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[44%]"
                    alt="image140"
                  />
                </Stack>
                <Stack className="bg-gray_51 h-[120px] mt-[100px] sm:mt-[53px] md:mt-[68px] sm:p-[15px] md:p-[28px] p-[42px] relative w-[100%]">
                  <Img
                    src="images/img_image141.png"
                    className="absolute h-[35px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[53%]"
                    alt="image141"
                  />
                </Stack>
              </Column>
              <Column className="bg-gray_51 flex flex-col items-center justify-start py-[100px] sm:py-[15px] md:py-[68px] w-[100%]">
                <Stack className="bg-gray_51 h-[120px] sm:p-[15px] md:p-[27px] p-[40px] relative w-[100%]">
                  <Img
                    src="images/img_image142.png"
                    className="absolute h-[39px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[63%]"
                    alt="image142"
                  />
                </Stack>
                <Stack className="bg-gray_51 h-[120px] mt-[100px] sm:mt-[53px] md:mt-[68px] sm:p-[15px] md:p-[26px] p-[39px] relative w-[100%]">
                  <Img
                    src="images/img_image143.png"
                    className="absolute h-[42px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[45%]"
                    alt="image143"
                  />
                </Stack>
                <Stack className="bg-gray_51 h-[120px] sm:mb-[42px] md:mb-[55px] mb-[80px] mt-[100px] sm:mt-[53px] md:mt-[68px] sm:p-[15px] md:p-[23px] p-[34px] relative w-[100%]">
                  <Img
                    src="images/img_image144.png"
                    className="absolute h-[51px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[49%]"
                    alt="image144"
                  />
                </Stack>
              </Column>
            </List>
          </Row>
        </Row>
        <Column className="bg-white_A700 flex flex-col items-end justify-start mt-[3px] sm:p-[15px] md:p-[20px] p-[30px] w-[100%]">
          <Column className="flex flex-col items-center justify-start max-w-[1320px] sm:mb-[114px] md:mb-[147px] mb-[215px] ml-[auto] mr-[auto] mt-[109px] sm:mt-[58px] md:mt-[75px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                <Text className="text-gray_900 w-[auto]" as="h2" variant="h2">
                  项目与社区
                </Text>
                <Text
                  className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[29px] md:mt-[38px] mt-[56px] text-gray_900_90 w-[100%]"
                  variant="body4"
                >
                  项目与社区描述项目与社区描述项目与社区描述项目与社区描述项目与社区描述项目与社区描述项目与社区描述项目与社区描述
                </Text>
                <Img
                  src="images/img_arrowright.svg"
                  className="max-w-[100%] sm:ml-[176px] md:ml-[228px] ml-[332px] sm:mt-[12px] md:mt-[16px] mt-[24px] w-[8%]"
                  alt="arrowright One"
                />
              </Column>
              <List
                className="sm:gap-[31px] md:gap-[41px] gap-[60px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:w-[100%] w-[66%]"
                orientation="horizontal"
              >
                <Column className="bg-white_A700 flex flex-col items-center justify-start w-[100%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Img
                      src="images/img_image28.png"
                      className="max-w-[100%] w-[100%]"
                      alt="imageTwentyEight"
                    />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                      <Line className="bg-teal_400 sm:h-[13px] md:h-[17px] h-[24px] sm:my-[2px] md:my-[3px] my-[5px] w-[2px]" />
                      <Text
                        className="md:ml-[11px] ml-[16px] sm:ml-[8px] text-gray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        OPen Car项目工作组
                      </Text>
                    </Row>
                    <Text
                      className="leading-[24.00px] md:leading-[normal] sm:leading-[normal] md:ml-[12px] ml-[18px] sm:mt-[34px] md:mt-[44px] mt-[64px] sm:mx-[0] text-gray_900_90 sm:w-[100%] w-[96%]"
                      variant="body4"
                    >
                      OPen
                      Safety工作组具体介绍具体介绍工作组具体介绍具体介绍工作组具体介绍具体介绍工作组具体介绍具体介绍工作组具体介绍具体介绍工作组具体介绍具体介...
                    </Text>
                  </Column>
                </Column>
                <Column className="bg-white_A700 flex flex-col items-center justify-start w-[100%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Stack
                      className="bg-cover bg-no-repeat h-[242px] relative w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_image28.png')",
                      }}
                    >
                      <Img
                        src="images/img_image29.png"
                        className="absolute h-[242px] max-w-[100%] w-[100%]"
                        alt="imageTwentyNine"
                      />
                    </Stack>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                      <Line className="bg-teal_400 sm:h-[13px] md:h-[17px] h-[24px] sm:my-[2px] md:my-[3px] my-[5px] w-[2px]" />
                      <Text
                        className="md:ml-[11px] ml-[16px] sm:ml-[8px] text-gray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        OPen Safety 项目工作组
                      </Text>
                    </Row>
                    <Text
                      className="leading-[24.00px] md:leading-[normal] sm:leading-[normal] md:ml-[12px] ml-[18px] sm:mt-[34px] md:mt-[44px] mt-[64px] sm:mx-[0] text-gray_900_90 sm:w-[100%] w-[96%]"
                      variant="body4"
                    >
                      OPen
                      Safety工作组具体介绍具体介绍工作组具体介绍具体介绍工作组具体介绍具体介绍工作组具体介绍具体介绍工作组工作组具体介绍具体介绍工作组具体介绍...
                    </Text>
                  </Column>
                </Column>
              </List>
            </Row>
          </Column>
        </Column>
        <Stack className="h-[720px] max-w-[1410px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] relative w-[100%]">
          <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap font-alibabapuhuiti items-center justify-evenly w-[100%]">
            <Stack className="h-[720px] relative sm:w-[100%] w-[70%]">
              <Column className="absolute bg-teal_400 flex flex-col justify-start left-[0] sm:mx-[0] sm:pr-[15px] md:pr-[16px] pr-[24px] sm:py-[15px] md:py-[16px] py-[24px] sm:w-[100%] w-[60%]">
                <Stack
                  className="bg-cover bg-no-repeat h-[307px] relative sm:w-[100%] w-[94%]"
                  style={{
                    backgroundImage: "url('images/img_maskgroup_307X520.png')",
                  }}
                >
                  <Img
                    src="images/img_image118.png"
                    className="absolute h-[307px] max-w-[100%] w-[100%]"
                    alt="image118"
                  />
                </Stack>
                <Text
                  className="sm:mt-[17px] md:mt-[22px] mt-[32px] text-gray_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  汽车基础软件创新大会
                </Text>
                <Text
                  className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] text-gray_900 sm:w-[100%] w-[94%]"
                  variant="body4"
                >
                  汽车基础软件创新大会具体的介绍汽车基础软件创新大会具体的介绍汽车基础软件创新大会具体的介绍
                </Text>
                <Column className="flex flex-col font-inter justify-start md:mt-[112px] mt-[163px] sm:mt-[86px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                    <Img
                      src="images/img_location.svg"
                      className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mt-[1px] md:w-[11px] w-[16px] sm:w-[8px]"
                      alt="location"
                    />
                    <Text
                      className="flex-grow sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-gray_900"
                      variant="body5"
                    >
                      重庆 · 中国
                    </Text>
                  </Row>
                  <Text
                    className="sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-gray_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    2022/10/20
                  </Text>
                </Column>
              </Column>
              <Column className="absolute bg-gray_52 flex flex-col items-center justify-end sm:mx-[0] sm:pt-[15px] md:pt-[16px] pt-[24px] right-[0] sm:w-[100%] w-[44%]">
                <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[87%]">
                  <Stack
                    className="bg-cover bg-no-repeat h-[240px] relative w-[100%]"
                    style={{
                      backgroundImage:
                        "url('images/img_maskgroup_240X370.png')",
                    }}
                  >
                    <Img
                      src="images/img_image44.png"
                      className="absolute h-[240px] max-w-[100%] w-[100%]"
                      alt="imageFortyFour"
                    />
                  </Stack>
                  <Text
                    className="sm:mt-[17px] md:mt-[22px] mt-[32px] text-gray_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    汽车基础软件创新大会
                  </Text>
                  <Text
                    className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] mt-[14px] sm:mt-[7px] md:mt-[9px] text-gray_900_90 w-[100%]"
                    variant="body4"
                  >
                    汽车基础软件创新大会具体的介绍汽车基础软件创新大会具体的介绍
                  </Text>
                  <Column className="flex flex-col font-inter justify-start md:mt-[121px] mt-[176px] sm:mt-[93px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                      <Img
                        src="images/img_location.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mt-[1px] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="location One"
                      />
                      <Text
                        className="flex-grow sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-gray_900"
                        variant="body5"
                      >
                        重庆 · 中国
                      </Text>
                    </Row>
                    <Text
                      className="sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-gray_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      2022/10/20
                    </Text>
                  </Column>
                </Column>
                <div className="bg-gray_901 sm:h-[35px] md:h-[45px] h-[64px] mt-[14px] sm:mt-[7px] md:mt-[9px] w-[100%]"></div>
              </Column>
            </Stack>
            <Column className="bg-gray_52 flex flex-col items-center sm:mx-[0] sm:pt-[15px] md:pt-[16px] pt-[24px] sm:w-[100%] w-[31%]">
              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[87%]">
                <Stack
                  className="bg-cover bg-no-repeat h-[240px] relative w-[100%]"
                  style={{
                    backgroundImage: "url('images/img_maskgroup_1.png')",
                  }}
                >
                  <Img
                    src="images/img_image45.png"
                    className="absolute h-[240px] max-w-[100%] w-[100%]"
                    alt="imageFortyFive"
                  />
                </Stack>
                <Text
                  className="font-alibabapuhuiti sm:mt-[17px] md:mt-[22px] mt-[32px] text-gray_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  汽车基础软件创新大会
                </Text>
                <Text
                  className="font-alibabapuhuiti leading-[28.00px] md:leading-[normal] sm:leading-[normal] mt-[14px] sm:mt-[7px] md:mt-[9px] text-gray_900_90 w-[100%]"
                  variant="body4"
                >
                  汽车基础软件创新大会具体的介绍汽车基础软件创新大会具体的介绍
                </Text>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-start md:mt-[121px] mt-[176px] sm:mt-[93px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[25%]">
                  <Img
                    src="images/img_location.svg"
                    className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mt-[1px] md:w-[11px] w-[16px] sm:w-[8px]"
                    alt="location Two"
                  />
                  <Text
                    className="flex-grow sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-gray_900"
                    variant="body5"
                  >
                    重庆 · 中国
                  </Text>
                </Row>
                <Text
                  className="font-inter sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-gray_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  2022/10/20
                </Text>
              </Column>
              <div className="bg-gray_901 sm:h-[35px] md:h-[45px] h-[64px] mt-[14px] sm:mt-[7px] md:mt-[9px] w-[100%]"></div>
            </Column>
          </Row>
          <Button
            className="absolute bottom-[0] cursor-pointer font-inter font-normal min-w-[61%] not-italic right-[0] text-[14px] text-center text-white_A700_90 w-[max-content]"
            size="lg"
            variant="FillGray800"
          >
            OpenSDV 社区活动-敬请期待
          </Button>
        </Stack>
        <Column className="bg-white_A700 flex flex-col items-center justify-start pb-[144px] sm:pb-[15px] md:pb-[99px] w-[100%]">
          <Column className="flex flex-col items-center justify-start w-[100%]">
            <Column className="flex flex-col justify-start w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end max-w-[1380px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <Stack className="h-[588px] relative sm:w-[100%] w-[84%]">
                  <Stack className="absolute h-[532px] top-[0] w-[100%]">
                    <Column className="absolute bg-gray_53 flex flex-col justify-start left-[0] sm:mx-[0] sm:p-[15px] md:p-[41px] p-[60px] sm:w-[100%] w-[91%]">
                      <Text
                        className="sm:mt-[49px] md:mt-[63px] mt-[92px] text-gray_900 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        诚邀参与
                      </Text>
                      <Text
                        className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[29px] md:mt-[38px] mt-[56px] sm:mx-[0] text-gray_900_90 sm:w-[100%] w-[63%]"
                        variant="body4"
                      >
                        诚邀参与介绍诚邀参与介绍诚邀参与介绍诚邀参与介绍诚邀参与介绍诚邀参与介绍诚邀参与介绍
                      </Text>
                      <Img
                        src="images/img_arrowright.svg"
                        className="max-w-[100%] mb-[115px] sm:mb-[61px] md:mb-[79px] sm:ml-[289px] md:ml-[373px] ml-[543px] sm:mt-[12px] md:mt-[16px] mt-[24px] w-[4%]"
                        alt="arrowright Two"
                      />
                    </Column>
                    <Stack
                      className="absolute bg-cover bg-no-repeat h-[203px] right-[0] top-[29%] sm:w-[108px] md:w-[139px] w-[203px]"
                      style={{
                        backgroundImage:
                          "url('images/img_maskgroup_203X203.png')",
                      }}
                    >
                      <div className="absolute bg-gray_400 bottom-[27%] md:h-[12px] h-[16px] sm:h-[9px] right-[36%] w-[7%]"></div>
                      <Column className="absolute bg-gradient  flex flex-col sm:h-[109px] md:h-[140px] h-[203px] items-center justify-end sm:px-[15px] md:px-[16px] px-[24px] w-[100%]">
                        <Text
                          className="mt-[110px] sm:mt-[58px] md:mt-[75px] text-white_A700 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          贡献项目
                        </Text>
                      </Column>
                    </Stack>
                  </Stack>
                  <Column
                    className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col sm:h-[109px] md:h-[140px] h-[203px] items-center justify-start right-[20%] sm:w-[108px] md:w-[139px] w-[203px]"
                    style={{
                      backgroundImage: "url('images/img_maskgroup_2.png')",
                    }}
                  >
                    <Column className="bg-gradient  flex flex-col sm:h-[109px] md:h-[140px] h-[203px] items-center justify-end sm:px-[15px] md:px-[16px] px-[24px] w-[100%]">
                      <Text
                        className="mt-[110px] sm:mt-[58px] md:mt-[75px] text-white_A700 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        志愿者
                      </Text>
                    </Column>
                  </Column>
                  <Img
                    src="images/img_union.png"
                    className="absolute h-[66px] max-w-[100%] right-[16%] top-[20%] w-[8%]"
                    alt="Union"
                  />
                  <Column
                    className="absolute bg-cover bg-no-repeat flex flex-col sm:h-[109px] md:h-[140px] h-[203px] items-center justify-start sm:w-[108px] md:w-[139px] w-[203px]"
                    style={{
                      backgroundImage: "url('images/img_maskgroup_3.png')",
                    }}
                  >
                    <Column className="bg-gradient  flex flex-col sm:h-[109px] md:h-[140px] h-[203px] items-center justify-end sm:px-[15px] md:px-[16px] px-[24px] w-[100%]">
                      <Text
                        className="mt-[110px] sm:mt-[58px] md:mt-[75px] text-white_A700 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        合作
                      </Text>
                    </Column>
                  </Column>
                </Stack>
                <Column className="flex flex-col items-center justify-start md:ml-[20px] ml-[30px] md:mt-[104px] mt-[152px] sm:mt-[80px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col sm:h-[109px] md:h-[140px] h-[203px] items-center justify-start w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_maskgroup_4.png')",
                    }}
                  >
                    <Column className="bg-gradient  flex flex-col sm:h-[109px] md:h-[140px] h-[203px] items-center justify-end sm:px-[15px] md:px-[16px] px-[24px] w-[100%]">
                      <Text
                        className="mt-[110px] sm:mt-[58px] md:mt-[75px] text-white_A700 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        入会
                      </Text>
                    </Column>
                  </Column>
                  <Stack className="h-[203px] sm:mt-[15px] md:mt-[20px] mt-[30px] relative sm:w-[108px] md:w-[139px] w-[203px]">
                    <Img
                      src="images/img_image132.png"
                      className="absolute h-[202px] max-w-[100%] top-[0] w-[100%]"
                      alt="image132"
                    />
                    <Column className="absolute bg-gradient  flex flex-col sm:h-[109px] md:h-[140px] h-[203px] items-center justify-end sm:px-[15px] md:px-[16px] px-[24px] w-[100%]">
                      <Text
                        className="mt-[110px] sm:mt-[58px] md:mt-[75px] text-white_A700 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        社区贡献
                      </Text>
                    </Column>
                  </Stack>
                </Column>
              </Row>
              <Button
                className="cursor-pointer font-normal md:mt-[104px] mt-[152px] sm:mt-[80px] text-[12px] text-center text-white_A700 w-[100%]"
                size="xl"
                variant="FillGray901"
              >
                Copyright © 2022 Howells—Studio All screenshots © of their
                respective owners
              </Button>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default I01Page;
