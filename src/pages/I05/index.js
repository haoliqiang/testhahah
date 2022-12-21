import React from "react";

import { Stack, Column, Row, Img, Text, Grid, Button } from "components";

const I05Page = () => {
  return (
    <>
      <Stack className="bg-white_A700 font-alibabapuhuiti h-[2422px] mx-[auto] relative w-[100%]">
        <Column className="absolute bottom-[2%] flex flex-col items-center justify-start w-[100%]">
          <header className="w-[100%]">
            <Row className="bg-gray_54 flex flex-row md:flex-wrap sm:flex-wrap items-center p-[3px] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap max-w-[1320px] mb-[1px] md:ml-[39px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%] common-row-list">
                <ul className="flex flex-row items-center">
                  <li className="w-[14%] sm:w-[100%] sm:my-[10px] max-w-[100%]">
                    <Img
                      src="images/img_opensdvlogo.png"
                      className="max-w-[100%]"
                      alt="OPENSDVlogo"
                    />
                  </li>
                  <li className="w-[auto] ml-[482px] sm:ml-[256px] sm:w-[100%] sm:my-[10px] md:ml-[331px] md:my-[23px] my-[34px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-normal text-[18px] text-gray_900 hover:text-teal_400"
                      rel="noreferrer"
                    >
                      首页
                    </a>
                  </li>
                  <li className="w-[auto] ml-[80px] sm:ml-[42px] sm:w-[100%] sm:my-[10px] md:ml-[55px] md:my-[23px] my-[34px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-normal text-[18px] text-gray_900 hover:text-teal_400"
                      rel="noreferrer"
                    >
                      关于我们
                    </a>
                  </li>
                  <li className="w-[auto] ml-[80px] sm:ml-[42px] sm:w-[100%] sm:my-[10px] md:ml-[55px] md:my-[23px] my-[34px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-normal text-[18px] text-teal_400"
                      rel="noreferrer"
                    >
                      联盟会员
                    </a>
                  </li>
                  <li className="w-[auto] ml-[80px] sm:ml-[42px] sm:w-[100%] sm:my-[10px] md:ml-[55px] md:my-[23px] my-[34px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-normal text-[18px] text-gray_900 hover:text-teal_400"
                      rel="noreferrer"
                    >
                      项目与社区
                    </a>
                  </li>
                  <li className="w-[auto] ml-[80px] sm:ml-[42px] sm:w-[100%] sm:my-[10px] md:ml-[55px] md:my-[23px] my-[34px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-normal text-[18px] text-gray_900 hover:text-teal_400"
                      rel="noreferrer"
                    >
                      诚邀参与
                    </a>
                  </li>
                </ul>
              </Row>
            </Row>
          </header>
          <Column className="bg-gray_54 flex flex-col items-center justify-start sm:p-[15px] md:p-[41px] p-[60px] w-[100%]">
            <Column className="flex flex-col items-center justify-start max-w-[1320px] sm:mb-[49px] md:mb-[64px] mb-[93px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between w-[100%]">
                <aside className="md:hidden sm:hidden w-[19%]">
                  <div className="">
                    <Column className="flex flex-col justify-start w-[100%]">
                      <Text
                        className="text-gray_900 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        联盟会员
                      </Text>
                      <Column className="flex flex-col items-center justify-start sm:mt-[34px] md:mt-[44px] mt-[64px] w-[100%]">
                        <Column className="bg-white_A700 flex flex-col items-center justify-start pb-[1px] px-[1px] rounded-radius8 w-[100%]">
                          <Stack className="h-[180px] relative sm:w-[100%] w-[88%]">
                            <Stack className="absolute bg-white_A700 h-[180px] sm:p-[15px] md:p-[26px] p-[39px] right-[0] rounded-radius8 md:w-[123px] w-[180px] sm:w-[95px]">
                              <Img
                                src="images/img_image136_101X91.png"
                                className="absolute h-[101px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius8 sm:w-[100%] w-[51%]"
                                alt="image136"
                              />
                            </Stack>
                            <Column
                              className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[0] sm:mx-[0] p-[4px] top-[1%] sm:w-[100%] w-[43%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group25.svg')",
                              }}
                            >
                              <Text
                                className="text-bluegray_300 w-[auto]"
                                variant="body5"
                              >
                                白金会员
                              </Text>
                            </Column>
                          </Stack>
                          <div className="bg-gray_900 h-[2px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[18%]"></div>
                          <Text
                            className="sm:mb-[15px] md:mb-[19px] mb-[29px] sm:mt-[26px] md:mt-[34px] mt-[50px] not-italic text-gray_900 w-[auto]"
                            variant="body4"
                          >
                            公司名称公司名称
                          </Text>
                        </Column>
                      </Column>
                      <Column className="flex flex-col items-center justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
                        <Column className="bg-white_A700 flex flex-col items-center justify-start pb-[1px] px-[1px] rounded-radius8 w-[100%]">
                          <Stack className="h-[180px] relative sm:w-[100%] w-[88%]">
                            <Stack className="absolute bg-white_A700 h-[180px] sm:p-[15px] md:p-[26px] p-[39px] right-[0] rounded-radius8 md:w-[123px] w-[180px] sm:w-[95px]">
                              <Img
                                src="images/img_image136_101X91.png"
                                className="absolute h-[101px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius8 sm:w-[100%] w-[51%]"
                                alt="image136 One"
                              />
                            </Stack>
                            <Column
                              className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[0] sm:mx-[0] p-[4px] top-[1%] sm:w-[100%] w-[43%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group26.svg')",
                              }}
                            >
                              <Text
                                className="text-indigo_300 w-[auto]"
                                variant="body5"
                              >
                                白银会员
                              </Text>
                            </Column>
                          </Stack>
                          <div className="bg-gray_900 h-[2px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[18%]"></div>
                          <Text
                            className="sm:mb-[15px] md:mb-[19px] mb-[29px] sm:mt-[26px] md:mt-[34px] mt-[50px] not-italic text-gray_900 w-[auto]"
                            variant="body4"
                          >
                            公司名称公司名称
                          </Text>
                        </Column>
                      </Column>
                      <Column className="flex flex-col items-center justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
                        <Column className="bg-white_A700 flex flex-col items-center justify-start pb-[1px] px-[1px] rounded-radius8 w-[100%]">
                          <Stack className="h-[180px] relative sm:w-[100%] w-[88%]">
                            <Stack className="absolute bg-white_A700 h-[180px] sm:p-[15px] md:p-[27px] p-[40px] right-[0] rounded-radius8 md:w-[123px] w-[180px] sm:w-[95px]">
                              <Img
                                src="images/img_image135.png"
                                className="absolute h-[99px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius8 sm:w-[100%] w-[44%]"
                                alt="image135"
                              />
                            </Stack>
                            <Column
                              className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[0] sm:mx-[0] p-[4px] top-[1%] sm:w-[100%] w-[43%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group45.svg')",
                              }}
                            >
                              <Text
                                className="text-yellow_900 w-[auto]"
                                variant="body5"
                              >
                                黄金会员
                              </Text>
                            </Column>
                          </Stack>
                          <div className="bg-gray_900 h-[2px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[18%]"></div>
                          <Text
                            className="sm:mb-[15px] md:mb-[19px] mb-[29px] sm:mt-[26px] md:mt-[34px] mt-[50px] not-italic text-gray_900 w-[auto]"
                            variant="body4"
                          >
                            公司名称公司名称
                          </Text>
                        </Column>
                      </Column>
                      <Column className="flex flex-col items-center justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
                        <Column className="bg-white_A700 flex flex-col items-center justify-start pb-[1px] px-[1px] rounded-radius8 w-[100%]">
                          <Stack className="h-[180px] relative sm:w-[100%] w-[88%]">
                            <Stack className="absolute bg-white_A700 h-[180px] sm:p-[15px] md:p-[26px] p-[39px] right-[0] rounded-radius8 md:w-[123px] w-[180px] sm:w-[95px]">
                              <Img
                                src="images/img_image136_101X91.png"
                                className="absolute h-[101px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius8 sm:w-[100%] w-[51%]"
                                alt="image136 Two"
                              />
                            </Stack>
                            <Column
                              className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[0] sm:mx-[0] p-[4px] top-[1%] sm:w-[100%] w-[43%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group27.svg')",
                              }}
                            >
                              <Text
                                className="text-blue_A200 w-[auto]"
                                variant="body5"
                              >
                                高校会员
                              </Text>
                            </Column>
                          </Stack>
                          <div className="bg-gray_900 h-[2px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[18%]"></div>
                          <Text
                            className="sm:mb-[15px] md:mb-[19px] mb-[29px] sm:mt-[26px] md:mt-[34px] mt-[50px] not-italic text-gray_900 w-[auto]"
                            variant="body4"
                          >
                            公司名称公司名称
                          </Text>
                        </Column>
                      </Column>
                      <Column className="flex flex-col items-center justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
                        <Column className="bg-white_A700 flex flex-col items-center justify-start pb-[1px] px-[1px] rounded-radius8 w-[100%]">
                          <Stack className="h-[180px] relative sm:w-[100%] w-[88%]">
                            <Stack className="absolute bg-white_A700 h-[180px] sm:p-[15px] md:p-[27px] p-[40px] right-[0] rounded-radius8 md:w-[123px] w-[180px] sm:w-[95px]">
                              <Img
                                src="images/img_image135.png"
                                className="absolute h-[99px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius8 sm:w-[100%] w-[44%]"
                                alt="image135 One"
                              />
                            </Stack>
                            <Column
                              className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[0] sm:mx-[0] p-[4px] top-[1%] sm:w-[100%] w-[62%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group46.svg')",
                              }}
                            >
                              <Text
                                className="text-teal_400 w-[auto]"
                                variant="body5"
                              >
                                非营利机构会员
                              </Text>
                            </Column>
                          </Stack>
                          <div className="bg-gray_900 h-[2px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[18%]"></div>
                          <Text
                            className="sm:mb-[15px] md:mb-[19px] mb-[29px] sm:mt-[26px] md:mt-[34px] mt-[50px] not-italic text-gray_900 w-[auto]"
                            variant="body4"
                          >
                            公司名称公司名称
                          </Text>
                        </Column>
                      </Column>
                      <Column className="flex flex-col items-center justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
                        <Column className="bg-white_A700 flex flex-col items-center justify-start pb-[1px] px-[1px] rounded-radius8 w-[100%]">
                          <Stack className="h-[180px] relative sm:w-[100%] w-[88%]">
                            <Stack className="absolute bg-white_A700 h-[180px] sm:p-[15px] md:p-[26px] p-[39px] right-[0] rounded-radius8 md:w-[123px] w-[180px] sm:w-[95px]">
                              <Img
                                src="images/img_image136_101X91.png"
                                className="absolute h-[101px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius8 sm:w-[100%] w-[51%]"
                                alt="image136 Three"
                              />
                            </Stack>
                            <Column
                              className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[0] sm:mx-[0] p-[4px] top-[1%] sm:w-[100%] w-[73%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group28.svg')",
                              }}
                            >
                              <Text
                                className="text-deep_orange_300 w-[auto]"
                                variant="body5"
                              >
                                研究机构/行业组织
                              </Text>
                            </Column>
                          </Stack>
                          <div className="bg-gray_900 h-[2px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[18%]"></div>
                          <Text
                            className="sm:mb-[15px] md:mb-[19px] mb-[29px] sm:mt-[26px] md:mt-[34px] mt-[50px] not-italic text-gray_900 w-[auto]"
                            variant="body4"
                          >
                            公司名称公司名称
                          </Text>
                        </Column>
                      </Column>
                    </Column>
                  </div>
                </aside>
                <Column className="flex flex-col items-center justify-start mt-[116px] sm:mt-[61px] md:mt-[79px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[80%]">
                  <Grid className="sm:gap-[15px] md:gap-[20px] gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 min-h-[auto] w-[100%]">
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="bg-white_A700 flex flex-col items-end justify-start pb-[1px] px-[1px] rounded-radius8 w-[100%]">
                        <Stack className="h-[180px] sm:mr-[15px] md:mr-[19px] mr-[29px] relative sm:w-[100%] w-[88%]">
                          <Stack className="absolute bg-white_A700 h-[180px] sm:p-[15px] md:p-[23px] p-[34px] right-[0] rounded-radius8 md:w-[123px] w-[180px] sm:w-[95px]">
                            <Img
                              src="images/img_image136_95X112.png"
                              className="absolute h-[95px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius8 sm:w-[100%] w-[63%]"
                              alt="image136 Four"
                            />
                          </Stack>
                          <Column
                            className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[0] sm:mx-[0] p-[4px] top-[1%] sm:w-[100%] w-[43%]"
                            style={{
                              backgroundImage: "url('images/img_group25.svg')",
                            }}
                          >
                            <Text
                              className="text-bluegray_300 w-[auto]"
                              variant="body5"
                            >
                              白金会员
                            </Text>
                          </Column>
                        </Stack>
                        <div className="bg-gray_900 h-[2px] sm:mr-[52px] md:mr-[67px] mr-[98px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[18%]"></div>
                        <Text
                          className="leading-[normal] sm:mx-[0] sm:my-[14px] md:my-[19px] my-[28px] not-italic text-center text-gray_900 sm:w-[100%] w-[76%]"
                          variant="body4"
                        >
                          公司名称公司名称公司名称公司名称
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="bg-white_A700 flex flex-col items-end justify-start pb-[1px] px-[1px] rounded-radius8 w-[100%]">
                        <Stack className="h-[180px] sm:mr-[15px] md:mr-[19px] mr-[29px] relative sm:w-[100%] w-[88%]">
                          <Stack className="absolute bg-white_A700 h-[180px] sm:p-[15px] md:p-[25px] p-[37px] right-[0] rounded-radius8 md:w-[123px] w-[180px] sm:w-[95px]">
                            <Img
                              src="images/img_image136_106X93.png"
                              className="absolute h-[106px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius8 sm:w-[100%] w-[52%]"
                              alt="image136 Five"
                            />
                          </Stack>
                          <Column
                            className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[0] sm:mx-[0] p-[4px] top-[1%] sm:w-[100%] w-[43%]"
                            style={{
                              backgroundImage: "url('images/img_group25.svg')",
                            }}
                          >
                            <Text
                              className="text-bluegray_300 w-[auto]"
                              variant="body5"
                            >
                              白金会员
                            </Text>
                          </Column>
                        </Stack>
                        <div className="bg-gray_900 h-[2px] sm:mr-[52px] md:mr-[67px] mr-[98px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[18%]"></div>
                        <Text
                          className="leading-[normal] sm:mb-[12px] md:mb-[16px] mb-[24px] sm:mt-[17px] md:mt-[22px] mt-[33px] sm:mx-[0] not-italic text-center text-gray_900 sm:w-[100%] w-[76%]"
                          variant="body4"
                        >
                          公司名称公司名称公司名称公司名称
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="bg-white_A700 flex flex-col items-center justify-start pb-[1px] px-[1px] rounded-radius8 w-[100%]">
                        <Stack className="h-[180px] relative sm:w-[100%] w-[88%]">
                          <Stack className="absolute bg-white_A700 h-[180px] sm:p-[15px] md:p-[17px] p-[26px] right-[0] rounded-radius8 md:w-[123px] w-[180px] sm:w-[95px]">
                            <Img
                              src="images/img_image136_104X127.png"
                              className="absolute h-[104px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius8 sm:w-[100%] w-[71%]"
                              alt="image136 Six"
                            />
                          </Stack>
                          <Column
                            className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[0] sm:mx-[0] p-[4px] top-[1%] sm:w-[100%] w-[43%]"
                            style={{
                              backgroundImage: "url('images/img_group25.svg')",
                            }}
                          >
                            <Text
                              className="text-bluegray_300 w-[auto]"
                              variant="body5"
                            >
                              白金会员
                            </Text>
                          </Column>
                        </Stack>
                        <div className="bg-gray_900 h-[2px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[18%]"></div>
                        <Text
                          className="sm:mb-[15px] md:mb-[19px] mb-[29px] sm:mt-[26px] md:mt-[34px] mt-[50px] not-italic text-gray_900 w-[auto]"
                          variant="body4"
                        >
                          公司名称公司名称
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="bg-white_A700 flex flex-col items-center justify-start pb-[1px] px-[1px] rounded-radius8 w-[100%]">
                        <Stack className="h-[180px] relative sm:w-[100%] w-[88%]">
                          <Stack className="absolute bg-white_A700 h-[180px] sm:p-[15px] md:p-[19px] p-[29px] right-[0] rounded-radius8 md:w-[123px] w-[180px] sm:w-[95px]">
                            <Img
                              src="images/img_image136_92X122.png"
                              className="absolute h-[92px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius8 sm:w-[100%] w-[68%]"
                              alt="image136 Seven"
                            />
                          </Stack>
                          <Column
                            className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[0] sm:mx-[0] p-[4px] top-[1%] sm:w-[100%] w-[43%]"
                            style={{
                              backgroundImage: "url('images/img_group25.svg')",
                            }}
                          >
                            <Text
                              className="text-bluegray_300 w-[auto]"
                              variant="body5"
                            >
                              白金会员
                            </Text>
                          </Column>
                        </Stack>
                        <div className="bg-gray_900 h-[2px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[18%]"></div>
                        <Text
                          className="sm:mb-[15px] md:mb-[19px] mb-[29px] sm:mt-[26px] md:mt-[34px] mt-[50px] not-italic text-gray_900 w-[auto]"
                          variant="body4"
                        >
                          公司名称公司名称
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="bg-white_A700 flex flex-col items-end justify-start pb-[1px] px-[1px] rounded-radius8 w-[100%]">
                        <Stack className="h-[180px] sm:mr-[15px] md:mr-[19px] mr-[29px] relative sm:w-[100%] w-[88%]">
                          <Stack className="absolute bg-white_A700 h-[180px] sm:p-[15px] md:p-[23px] p-[34px] right-[0] rounded-radius8 md:w-[123px] w-[180px] sm:w-[95px]">
                            <Img
                              src="images/img_image136_95X112.png"
                              className="absolute h-[95px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius8 sm:w-[100%] w-[63%]"
                              alt="image136 Eight"
                            />
                          </Stack>
                          <Column
                            className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[0] sm:mx-[0] p-[4px] top-[1%] sm:w-[100%] w-[43%]"
                            style={{
                              backgroundImage: "url('images/img_group26.svg')",
                            }}
                          >
                            <Text
                              className="text-indigo_300 w-[auto]"
                              variant="body5"
                            >
                              白银会员
                            </Text>
                          </Column>
                        </Stack>
                        <div className="bg-gray_900 h-[2px] sm:mr-[52px] md:mr-[67px] mr-[98px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[18%]"></div>
                        <Text
                          className="leading-[normal] sm:mx-[0] sm:my-[14px] md:my-[19px] my-[28px] not-italic text-center text-gray_900 sm:w-[100%] w-[76%]"
                          variant="body4"
                        >
                          公司名称公司名称公司名称公司名称
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="bg-white_A700 flex flex-col items-end justify-start pb-[1px] px-[1px] rounded-radius8 w-[100%]">
                        <Stack className="h-[180px] sm:mr-[15px] md:mr-[19px] mr-[29px] relative sm:w-[100%] w-[88%]">
                          <Stack className="absolute bg-white_A700 h-[180px] sm:p-[15px] md:p-[25px] p-[37px] right-[0] rounded-radius8 md:w-[123px] w-[180px] sm:w-[95px]">
                            <Img
                              src="images/img_image136_106X93.png"
                              className="absolute h-[106px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius8 sm:w-[100%] w-[52%]"
                              alt="image136 Nine"
                            />
                          </Stack>
                          <Column
                            className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[0] sm:mx-[0] p-[4px] top-[1%] sm:w-[100%] w-[43%]"
                            style={{
                              backgroundImage: "url('images/img_group26.svg')",
                            }}
                          >
                            <Text
                              className="text-indigo_300 w-[auto]"
                              variant="body5"
                            >
                              白银会员
                            </Text>
                          </Column>
                        </Stack>
                        <div className="bg-gray_900 h-[2px] sm:mr-[52px] md:mr-[67px] mr-[98px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[18%]"></div>
                        <Text
                          className="leading-[normal] sm:mb-[12px] md:mb-[16px] mb-[24px] sm:mt-[17px] md:mt-[22px] mt-[33px] sm:mx-[0] not-italic text-center text-gray_900 sm:w-[100%] w-[76%]"
                          variant="body4"
                        >
                          公司名称公司名称公司名称公司名称
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="bg-white_A700 flex flex-col items-center justify-start pb-[1px] px-[1px] rounded-radius8 w-[100%]">
                        <Stack className="h-[180px] relative sm:w-[100%] w-[88%]">
                          <Stack className="absolute bg-white_A700 h-[180px] sm:p-[15px] md:p-[17px] p-[26px] right-[0] rounded-radius8 md:w-[123px] w-[180px] sm:w-[95px]">
                            <Img
                              src="images/img_image136_104X127.png"
                              className="absolute h-[104px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius8 sm:w-[100%] w-[71%]"
                              alt="image136 Ten"
                            />
                          </Stack>
                          <Column
                            className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[0] sm:mx-[0] p-[4px] top-[1%] sm:w-[100%] w-[43%]"
                            style={{
                              backgroundImage: "url('images/img_group26.svg')",
                            }}
                          >
                            <Text
                              className="text-indigo_300 w-[auto]"
                              variant="body5"
                            >
                              白银会员
                            </Text>
                          </Column>
                        </Stack>
                        <div className="bg-gray_900 h-[2px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[18%]"></div>
                        <Text
                          className="sm:mb-[15px] md:mb-[19px] mb-[29px] sm:mt-[26px] md:mt-[34px] mt-[50px] not-italic text-gray_900 w-[auto]"
                          variant="body4"
                        >
                          公司名称公司名称
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="bg-white_A700 flex flex-col items-center justify-start pb-[1px] px-[1px] rounded-radius8 w-[100%]">
                        <Stack className="h-[180px] relative sm:w-[100%] w-[88%]">
                          <Stack className="absolute bg-white_A700 h-[180px] sm:p-[15px] md:p-[19px] p-[29px] right-[0] rounded-radius8 md:w-[123px] w-[180px] sm:w-[95px]">
                            <Img
                              src="images/img_image136_92X122.png"
                              className="absolute h-[92px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius8 sm:w-[100%] w-[68%]"
                              alt="image136 Eleven"
                            />
                          </Stack>
                          <Column
                            className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[0] sm:mx-[0] p-[4px] top-[1%] sm:w-[100%] w-[43%]"
                            style={{
                              backgroundImage: "url('images/img_group26.svg')",
                            }}
                          >
                            <Text
                              className="text-indigo_300 w-[auto]"
                              variant="body5"
                            >
                              白银会员
                            </Text>
                          </Column>
                        </Stack>
                        <div className="bg-gray_900 h-[2px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[18%]"></div>
                        <Text
                          className="sm:mb-[15px] md:mb-[19px] mb-[29px] sm:mt-[26px] md:mt-[34px] mt-[50px] not-italic text-gray_900 w-[auto]"
                          variant="body4"
                        >
                          公司名称公司名称
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="bg-white_A700 flex flex-col items-center justify-start pb-[1px] px-[1px] rounded-radius8 w-[100%]">
                        <Stack className="h-[180px] relative sm:w-[100%] w-[88%]">
                          <Stack className="absolute bg-white_A700 h-[180px] sm:p-[15px] md:p-[26px] p-[39px] right-[0] rounded-radius8 md:w-[123px] w-[180px] sm:w-[95px]">
                            <Img
                              src="images/img_image136_89X101.png"
                              className="absolute h-[89px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius8 sm:w-[100%] w-[57%]"
                              alt="image136 Twelve"
                            />
                          </Stack>
                          <Column
                            className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[0] sm:mx-[0] p-[4px] top-[1%] sm:w-[100%] w-[43%]"
                            style={{
                              backgroundImage: "url('images/img_group45.svg')",
                            }}
                          >
                            <Text
                              className="text-yellow_900 w-[auto]"
                              variant="body5"
                            >
                              黄金会员
                            </Text>
                          </Column>
                        </Stack>
                        <div className="bg-gray_900 h-[2px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[18%]"></div>
                        <Text
                          className="sm:mb-[15px] md:mb-[19px] mb-[29px] sm:mt-[26px] md:mt-[34px] mt-[50px] not-italic text-gray_900 w-[auto]"
                          variant="body4"
                        >
                          公司名称公司名称
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="bg-white_A700 flex flex-col items-center justify-start pb-[1px] px-[1px] rounded-radius8 w-[100%]">
                        <Stack className="h-[180px] relative sm:w-[100%] w-[88%]">
                          <Stack className="absolute bg-white_A700 h-[180px] sm:p-[15px] md:p-[28px] p-[41px] right-[0] rounded-radius8 md:w-[123px] w-[180px] sm:w-[95px]">
                            <Img
                              src="images/img_image135_98X95.png"
                              className="absolute h-[98px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius8 sm:w-[100%] w-[53%]"
                              alt="image135 Two"
                            />
                          </Stack>
                          <Column
                            className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[0] sm:mx-[0] p-[4px] top-[1%] sm:w-[100%] w-[43%]"
                            style={{
                              backgroundImage: "url('images/img_group45.svg')",
                            }}
                          >
                            <Text
                              className="text-yellow_900 w-[auto]"
                              variant="body5"
                            >
                              黄金会员
                            </Text>
                          </Column>
                        </Stack>
                        <div className="bg-gray_900 h-[2px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[18%]"></div>
                        <Text
                          className="sm:mb-[15px] md:mb-[19px] mb-[29px] sm:mt-[26px] md:mt-[34px] mt-[50px] not-italic text-gray_900 w-[auto]"
                          variant="body4"
                        >
                          公司名称公司名称
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="bg-white_A700 flex flex-col items-center justify-start pb-[1px] px-[1px] rounded-radius8 w-[100%]">
                        <Stack className="h-[180px] relative sm:w-[100%] w-[88%]">
                          <Stack className="absolute bg-white_A700 h-[180px] sm:p-[15px] md:p-[29px] p-[43px] right-[0] rounded-radius8 md:w-[123px] w-[180px] sm:w-[95px]">
                            <Img
                              src="images/img_image154.png"
                              className="absolute h-[94px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius8 sm:w-[100%] w-[51%]"
                              alt="image154"
                            />
                          </Stack>
                          <Column
                            className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[0] sm:mx-[0] p-[4px] top-[1%] sm:w-[100%] w-[43%]"
                            style={{
                              backgroundImage: "url('images/img_group45.svg')",
                            }}
                          >
                            <Text
                              className="text-yellow_900 w-[auto]"
                              variant="body5"
                            >
                              黄金会员
                            </Text>
                          </Column>
                        </Stack>
                        <div className="bg-gray_900 h-[2px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[18%]"></div>
                        <Text
                          className="sm:mb-[15px] md:mb-[19px] mb-[29px] sm:mt-[26px] md:mt-[34px] mt-[50px] not-italic text-gray_900 w-[auto]"
                          variant="body4"
                        >
                          公司名称公司名称
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="bg-white_A700 flex flex-col items-center justify-start pb-[1px] px-[1px] rounded-radius8 w-[100%]">
                        <Stack className="h-[180px] relative sm:w-[100%] w-[88%]">
                          <Stack className="absolute bg-white_A700 h-[180px] sm:p-[15px] md:p-[24px] p-[36px] right-[0] rounded-radius8 md:w-[123px] w-[180px] sm:w-[95px]">
                            <Img
                              src="images/img_image155.png"
                              className="absolute h-[77px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius8 sm:w-[100%] w-[60%]"
                              alt="image155"
                            />
                          </Stack>
                          <Column
                            className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[0] sm:mx-[0] p-[4px] top-[1%] sm:w-[100%] w-[43%]"
                            style={{
                              backgroundImage: "url('images/img_group45.svg')",
                            }}
                          >
                            <Text
                              className="text-yellow_900 w-[auto]"
                              variant="body5"
                            >
                              黄金会员
                            </Text>
                          </Column>
                        </Stack>
                        <div className="bg-gray_900 h-[2px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[18%]"></div>
                        <Text
                          className="sm:mb-[15px] md:mb-[19px] mb-[29px] sm:mt-[26px] md:mt-[34px] mt-[50px] not-italic text-gray_900 w-[auto]"
                          variant="body4"
                        >
                          公司名称公司名称
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="bg-white_A700 flex flex-col items-end justify-start pb-[1px] px-[1px] rounded-radius8 w-[100%]">
                        <Stack className="h-[180px] sm:mr-[15px] md:mr-[19px] mr-[29px] relative sm:w-[100%] w-[88%]">
                          <Stack className="absolute bg-white_A700 h-[180px] sm:p-[15px] md:p-[23px] p-[34px] right-[0] rounded-radius8 md:w-[123px] w-[180px] sm:w-[95px]">
                            <Img
                              src="images/img_image136_95X112.png"
                              className="absolute h-[95px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius8 sm:w-[100%] w-[63%]"
                              alt="image136 Thirteen"
                            />
                          </Stack>
                          <Column
                            className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[0] sm:mx-[0] p-[4px] top-[1%] sm:w-[100%] w-[43%]"
                            style={{
                              backgroundImage: "url('images/img_group27.svg')",
                            }}
                          >
                            <Text
                              className="text-blue_A200 w-[auto]"
                              variant="body5"
                            >
                              高校会员
                            </Text>
                          </Column>
                        </Stack>
                        <div className="bg-gray_900 h-[2px] sm:mr-[52px] md:mr-[67px] mr-[98px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[18%]"></div>
                        <Text
                          className="leading-[normal] sm:mx-[0] sm:my-[14px] md:my-[19px] my-[28px] not-italic text-center text-gray_900 sm:w-[100%] w-[76%]"
                          variant="body4"
                        >
                          公司名称公司名称公司名称公司名称
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="bg-white_A700 flex flex-col items-end justify-start pb-[1px] px-[1px] rounded-radius8 w-[100%]">
                        <Stack className="h-[180px] sm:mr-[15px] md:mr-[19px] mr-[29px] relative sm:w-[100%] w-[88%]">
                          <Stack className="absolute bg-white_A700 h-[180px] sm:p-[15px] md:p-[25px] p-[37px] right-[0] rounded-radius8 md:w-[123px] w-[180px] sm:w-[95px]">
                            <Img
                              src="images/img_image136_106X93.png"
                              className="absolute h-[106px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius8 sm:w-[100%] w-[52%]"
                              alt="image136 Fourteen"
                            />
                          </Stack>
                          <Column
                            className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[0] sm:mx-[0] p-[4px] top-[1%] sm:w-[100%] w-[43%]"
                            style={{
                              backgroundImage: "url('images/img_group27.svg')",
                            }}
                          >
                            <Text
                              className="text-blue_A200 w-[auto]"
                              variant="body5"
                            >
                              高校会员
                            </Text>
                          </Column>
                        </Stack>
                        <div className="bg-gray_900 h-[2px] sm:mr-[52px] md:mr-[67px] mr-[98px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[18%]"></div>
                        <Text
                          className="leading-[normal] sm:mb-[12px] md:mb-[16px] mb-[24px] sm:mt-[17px] md:mt-[22px] mt-[33px] sm:mx-[0] not-italic text-center text-gray_900 sm:w-[100%] w-[76%]"
                          variant="body4"
                        >
                          公司名称公司名称公司名称公司名称
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="bg-white_A700 flex flex-col items-center justify-start pb-[1px] px-[1px] rounded-radius8 w-[100%]">
                        <Stack className="h-[180px] relative sm:w-[100%] w-[88%]">
                          <Stack className="absolute bg-white_A700 h-[180px] sm:p-[15px] md:p-[17px] p-[26px] right-[0] rounded-radius8 md:w-[123px] w-[180px] sm:w-[95px]">
                            <Img
                              src="images/img_image136_104X127.png"
                              className="absolute h-[104px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius8 sm:w-[100%] w-[71%]"
                              alt="image136 Fifteen"
                            />
                          </Stack>
                          <Column
                            className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[0] sm:mx-[0] p-[4px] top-[1%] sm:w-[100%] w-[43%]"
                            style={{
                              backgroundImage: "url('images/img_group27.svg')",
                            }}
                          >
                            <Text
                              className="text-blue_A200 w-[auto]"
                              variant="body5"
                            >
                              高校会员
                            </Text>
                          </Column>
                        </Stack>
                        <div className="bg-gray_900 h-[2px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[18%]"></div>
                        <Text
                          className="sm:mb-[15px] md:mb-[19px] mb-[29px] sm:mt-[26px] md:mt-[34px] mt-[50px] not-italic text-gray_900 w-[auto]"
                          variant="body4"
                        >
                          公司名称公司名称
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="bg-white_A700 flex flex-col items-center justify-start pb-[1px] px-[1px] rounded-radius8 w-[100%]">
                        <Stack className="h-[180px] relative sm:w-[100%] w-[88%]">
                          <Stack className="absolute bg-white_A700 h-[180px] sm:p-[15px] md:p-[19px] p-[29px] right-[0] rounded-radius8 md:w-[123px] w-[180px] sm:w-[95px]">
                            <Img
                              src="images/img_image136_92X122.png"
                              className="absolute h-[92px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius8 sm:w-[100%] w-[68%]"
                              alt="image136 Sixteen"
                            />
                          </Stack>
                          <Column
                            className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[0] sm:mx-[0] p-[4px] top-[1%] sm:w-[100%] w-[43%]"
                            style={{
                              backgroundImage: "url('images/img_group27.svg')",
                            }}
                          >
                            <Text
                              className="text-blue_A200 w-[auto]"
                              variant="body5"
                            >
                              高校会员
                            </Text>
                          </Column>
                        </Stack>
                        <div className="bg-gray_900 h-[2px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[18%]"></div>
                        <Text
                          className="sm:mb-[15px] md:mb-[19px] mb-[29px] sm:mt-[26px] md:mt-[34px] mt-[50px] not-italic text-gray_900 w-[auto]"
                          variant="body4"
                        >
                          公司名称公司名称
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="bg-white_A700 flex flex-col items-center justify-start pb-[1px] px-[1px] rounded-radius8 w-[100%]">
                        <Stack className="h-[180px] relative sm:w-[100%] w-[88%]">
                          <Stack className="absolute bg-white_A700 h-[180px] sm:p-[15px] md:p-[26px] p-[39px] right-[0] rounded-radius8 md:w-[123px] w-[180px] sm:w-[95px]">
                            <Img
                              src="images/img_image136_89X101.png"
                              className="absolute h-[89px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius8 sm:w-[100%] w-[57%]"
                              alt="image136 Seventeen"
                            />
                          </Stack>
                          <Column
                            className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[0] sm:mx-[0] p-[4px] top-[1%] sm:w-[100%] w-[62%]"
                            style={{
                              backgroundImage: "url('images/img_group46.svg')",
                            }}
                          >
                            <Text
                              className="text-teal_400 w-[auto]"
                              variant="body5"
                            >
                              非营利机构会员
                            </Text>
                          </Column>
                        </Stack>
                        <div className="bg-gray_900 h-[2px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[18%]"></div>
                        <Text
                          className="sm:mb-[15px] md:mb-[19px] mb-[29px] sm:mt-[26px] md:mt-[34px] mt-[50px] not-italic text-gray_900 w-[auto]"
                          variant="body4"
                        >
                          公司名称公司名称
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="bg-white_A700 flex flex-col items-center justify-start pb-[1px] px-[1px] rounded-radius8 w-[100%]">
                        <Stack className="h-[180px] relative sm:w-[100%] w-[88%]">
                          <Stack className="absolute bg-white_A700 h-[180px] sm:p-[15px] md:p-[28px] p-[41px] right-[0] rounded-radius8 md:w-[123px] w-[180px] sm:w-[95px]">
                            <Img
                              src="images/img_image135_98X95.png"
                              className="absolute h-[98px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius8 sm:w-[100%] w-[53%]"
                              alt="image135 Three"
                            />
                          </Stack>
                          <Column
                            className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[0] sm:mx-[0] p-[4px] top-[1%] sm:w-[100%] w-[62%]"
                            style={{
                              backgroundImage: "url('images/img_group46.svg')",
                            }}
                          >
                            <Text
                              className="text-teal_400 w-[auto]"
                              variant="body5"
                            >
                              非营利机构会员
                            </Text>
                          </Column>
                        </Stack>
                        <div className="bg-gray_900 h-[2px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[18%]"></div>
                        <Text
                          className="sm:mb-[15px] md:mb-[19px] mb-[29px] sm:mt-[26px] md:mt-[34px] mt-[50px] not-italic text-gray_900 w-[auto]"
                          variant="body4"
                        >
                          公司名称公司名称
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="bg-white_A700 flex flex-col items-center justify-start pb-[1px] px-[1px] rounded-radius8 w-[100%]">
                        <Stack className="h-[180px] relative sm:w-[100%] w-[88%]">
                          <Stack className="absolute bg-white_A700 h-[180px] sm:p-[15px] md:p-[29px] p-[43px] right-[0] rounded-radius8 md:w-[123px] w-[180px] sm:w-[95px]">
                            <Img
                              src="images/img_image154.png"
                              className="absolute h-[94px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius8 sm:w-[100%] w-[51%]"
                              alt="image154 One"
                            />
                          </Stack>
                          <Column
                            className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[0] sm:mx-[0] p-[4px] top-[1%] sm:w-[100%] w-[62%]"
                            style={{
                              backgroundImage: "url('images/img_group46.svg')",
                            }}
                          >
                            <Text
                              className="text-teal_400 w-[auto]"
                              variant="body5"
                            >
                              非营利机构会员
                            </Text>
                          </Column>
                        </Stack>
                        <div className="bg-gray_900 h-[2px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[18%]"></div>
                        <Text
                          className="sm:mb-[15px] md:mb-[19px] mb-[29px] sm:mt-[26px] md:mt-[34px] mt-[50px] not-italic text-gray_900 w-[auto]"
                          variant="body4"
                        >
                          公司名称公司名称
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="bg-white_A700 flex flex-col items-center justify-start pb-[1px] px-[1px] rounded-radius8 w-[100%]">
                        <Stack className="h-[180px] relative sm:w-[100%] w-[88%]">
                          <Stack className="absolute bg-white_A700 h-[180px] sm:p-[15px] md:p-[24px] p-[36px] right-[0] rounded-radius8 md:w-[123px] w-[180px] sm:w-[95px]">
                            <Img
                              src="images/img_image155.png"
                              className="absolute h-[77px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius8 sm:w-[100%] w-[60%]"
                              alt="image155 One"
                            />
                          </Stack>
                          <Column
                            className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[0] sm:mx-[0] p-[4px] top-[1%] sm:w-[100%] w-[62%]"
                            style={{
                              backgroundImage: "url('images/img_group46.svg')",
                            }}
                          >
                            <Text
                              className="text-teal_400 w-[auto]"
                              variant="body5"
                            >
                              非营利机构会员
                            </Text>
                          </Column>
                        </Stack>
                        <div className="bg-gray_900 h-[2px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[18%]"></div>
                        <Text
                          className="sm:mb-[15px] md:mb-[19px] mb-[29px] sm:mt-[26px] md:mt-[34px] mt-[50px] not-italic text-gray_900 w-[auto]"
                          variant="body4"
                        >
                          公司名称公司名称
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="bg-white_A700 flex flex-col items-end justify-start pb-[1px] px-[1px] rounded-radius8 w-[100%]">
                        <Stack className="h-[180px] sm:mr-[15px] md:mr-[19px] mr-[29px] relative sm:w-[100%] w-[88%]">
                          <Stack className="absolute bg-white_A700 h-[180px] sm:p-[15px] md:p-[23px] p-[34px] right-[0] rounded-radius8 md:w-[123px] w-[180px] sm:w-[95px]">
                            <Img
                              src="images/img_image136_95X112.png"
                              className="absolute h-[95px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius8 sm:w-[100%] w-[63%]"
                              alt="image136 Eighteen"
                            />
                          </Stack>
                          <Column
                            className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[0] sm:mx-[0] p-[4px] top-[1%] sm:w-[100%] w-[73%]"
                            style={{
                              backgroundImage: "url('images/img_group28.svg')",
                            }}
                          >
                            <Text
                              className="text-deep_orange_300 w-[auto]"
                              variant="body5"
                            >
                              研究机构/行业组织
                            </Text>
                          </Column>
                        </Stack>
                        <div className="bg-gray_900 h-[2px] sm:mr-[52px] md:mr-[67px] mr-[98px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[18%]"></div>
                        <Text
                          className="leading-[normal] sm:mx-[0] sm:my-[14px] md:my-[19px] my-[28px] not-italic text-center text-gray_900 sm:w-[100%] w-[76%]"
                          variant="body4"
                        >
                          公司名称公司名称公司名称公司名称
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="bg-white_A700 flex flex-col items-end justify-start pb-[1px] px-[1px] rounded-radius8 w-[100%]">
                        <Stack className="h-[180px] sm:mr-[15px] md:mr-[19px] mr-[29px] relative sm:w-[100%] w-[88%]">
                          <Stack className="absolute bg-white_A700 h-[180px] sm:p-[15px] md:p-[25px] p-[37px] right-[0] rounded-radius8 md:w-[123px] w-[180px] sm:w-[95px]">
                            <Img
                              src="images/img_image136_106X93.png"
                              className="absolute h-[106px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius8 sm:w-[100%] w-[52%]"
                              alt="image136 Nineteen"
                            />
                          </Stack>
                          <Column
                            className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[0] sm:mx-[0] p-[4px] top-[1%] sm:w-[100%] w-[73%]"
                            style={{
                              backgroundImage: "url('images/img_group28.svg')",
                            }}
                          >
                            <Text
                              className="text-deep_orange_300 w-[auto]"
                              variant="body5"
                            >
                              研究机构/行业组织
                            </Text>
                          </Column>
                        </Stack>
                        <div className="bg-gray_900 h-[2px] sm:mr-[52px] md:mr-[67px] mr-[98px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[18%]"></div>
                        <Text
                          className="leading-[normal] sm:mb-[12px] md:mb-[16px] mb-[24px] sm:mt-[17px] md:mt-[22px] mt-[33px] sm:mx-[0] not-italic text-center text-gray_900 sm:w-[100%] w-[76%]"
                          variant="body4"
                        >
                          公司名称公司名称公司名称公司名称
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="bg-white_A700 flex flex-col items-center justify-start pb-[1px] px-[1px] rounded-radius8 w-[100%]">
                        <Stack className="h-[180px] relative sm:w-[100%] w-[88%]">
                          <Stack className="absolute bg-white_A700 h-[180px] sm:p-[15px] md:p-[17px] p-[26px] right-[0] rounded-radius8 md:w-[123px] w-[180px] sm:w-[95px]">
                            <Img
                              src="images/img_image136_104X127.png"
                              className="absolute h-[104px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius8 sm:w-[100%] w-[71%]"
                              alt="image136 Twenty"
                            />
                          </Stack>
                          <Column
                            className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[0] sm:mx-[0] p-[4px] top-[1%] sm:w-[100%] w-[73%]"
                            style={{
                              backgroundImage: "url('images/img_group28.svg')",
                            }}
                          >
                            <Text
                              className="text-deep_orange_300 w-[auto]"
                              variant="body5"
                            >
                              研究机构/行业组织
                            </Text>
                          </Column>
                        </Stack>
                        <div className="bg-gray_900 h-[2px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[18%]"></div>
                        <Text
                          className="sm:mb-[15px] md:mb-[19px] mb-[29px] sm:mt-[26px] md:mt-[34px] mt-[50px] not-italic text-gray_900 w-[auto]"
                          variant="body4"
                        >
                          公司名称公司名称
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="bg-white_A700 flex flex-col items-center justify-start pb-[1px] px-[1px] rounded-radius8 w-[100%]">
                        <Stack className="h-[180px] relative sm:w-[100%] w-[88%]">
                          <Stack className="absolute bg-white_A700 h-[180px] sm:p-[15px] md:p-[19px] p-[29px] right-[0] rounded-radius8 md:w-[123px] w-[180px] sm:w-[95px]">
                            <Img
                              src="images/img_image136_92X122.png"
                              className="absolute h-[92px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius8 sm:w-[100%] w-[68%]"
                              alt="image136 TwentyOne"
                            />
                          </Stack>
                          <Column
                            className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[0] sm:mx-[0] p-[4px] top-[1%] sm:w-[100%] w-[73%]"
                            style={{
                              backgroundImage: "url('images/img_group28.svg')",
                            }}
                          >
                            <Text
                              className="text-deep_orange_300 w-[auto]"
                              variant="body5"
                            >
                              研究机构/行业组织
                            </Text>
                          </Column>
                        </Stack>
                        <div className="bg-gray_900 h-[2px] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[18%]"></div>
                        <Text
                          className="sm:mb-[15px] md:mb-[19px] mb-[29px] sm:mt-[26px] md:mt-[34px] mt-[50px] not-italic text-gray_900 w-[auto]"
                          variant="body4"
                        >
                          公司名称公司名称
                        </Text>
                      </Column>
                    </Column>
                  </Grid>
                </Column>
              </Row>
            </Column>
          </Column>
        </Column>
        <Button
          className="absolute cursor-pointer font-normal text-[12px] text-center text-white_A700 w-[100%]"
          size="xl"
          variant="FillGray901"
        >
          Copyright © 2022 Howells—Studio All screenshots © of their respective
          owners
        </Button>
      </Stack>
    </>
  );
};

export default I05Page;
