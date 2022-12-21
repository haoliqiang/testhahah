import React from "react";

import {
  Column,
  Stack,
  Row,
  Img,
  Text,
  Line,
  Button,
  List,
  Grid,
} from "components";

const I02Page = () => {
  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-alibabapuhuiti justify-start mx-[auto] w-[100%]">
        <Column className="flex flex-col items-center w-[100%]">
          <Stack className="h-[734px] relative w-[100%]">
            <Stack className="absolute h-[686px] top-[0] w-[100%]">
              <header className="absolute top-[0] w-[100%]">
                <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:p-[15px] md:p-[25px] p-[37px] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap mb-[1px] md:ml-[471px] ml-[685px] md:mr-[15px] mr-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%] common-row-list">
                    <ul className="flex flex-row items-center justify-between">
                      <li className="w-[auto] sm:w-[100%] sm:my-[10px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal text-[18px] text-gray_900 hover:text-teal_400"
                          rel="noreferrer"
                        >
                          首页
                        </a>
                      </li>
                      <li className="w-[auto] sm:w-[100%] sm:my-[10px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal text-[18px] text-teal_400"
                          rel="noreferrer"
                        >
                          联盟介绍
                        </a>
                      </li>
                      <li className="w-[auto] sm:w-[100%] sm:my-[10px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal text-[18px] text-gray_900 hover:text-teal_400"
                          rel="noreferrer"
                        >
                          联盟会员
                        </a>
                      </li>
                      <li className="w-[auto] sm:w-[100%] sm:my-[10px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal text-[18px] text-gray_900 hover:text-teal_400"
                          rel="noreferrer"
                        >
                          项目与社区
                        </a>
                      </li>
                      <li className="w-[auto] sm:w-[100%] sm:my-[10px]">
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
              <Column className="absolute flex flex-col h-[max-content] inset-[0] justify-center m-[auto] sm:pb-[111px] md:pb-[143px] pb-[209px] sm:px-[0] w-[100%]">
                <Stack className="bg-gray_53 h-[683px] sm:mr-[417px] md:mr-[538px] mr-[783px] sm:pb-[15px] md:pb-[41px] pb-[60px] sm:px-[15px] md:px-[41px] px-[60px] relative sm:w-[100%] w-[46%]">
                  <Img
                    src="images/img_opensdvlogo.png"
                    className="absolute h-[93px] left-[9%] max-w-[100%] w-[28%]"
                    alt="OPENSDVlogo"
                  />
                </Stack>
                <div className="bg-gray_53 sm:h-[177px] md:h-[228px] h-[331px] ml-[1073px] sm:ml-[571px] md:ml-[738px] w-[26%]"></div>
              </Column>
            </Stack>
            <Column className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start sm:px-[0] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end w-[100%]">
                <Img
                  src="images/img_image51.png"
                  className="max-w-[100%] sm:mb-[31px] md:mb-[41px] mb-[60px] w-[36%]"
                  alt="imageFiftyOne"
                />
                <Column className="flex flex-col justify-start sm:mb-[31px] md:mb-[41px] mb-[60px] md:ml-[46px] ml-[68px] mt-[102px] sm:mt-[54px] md:mt-[70px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[37%]">
                  <Text
                    className="ml-[3px] text-gray_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    联盟介绍
                  </Text>
                  <Line className="bg-teal_400 h-[4px] ml-[3px] sm:mt-[17px] md:mt-[22px] mt-[32px] w-[11%]" />
                  <Text
                    className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] mt-[106px] sm:mt-[56px] md:mt-[72px] text-gray_900 w-[100%]"
                    variant="body4"
                  >
                    OpenSDV联盟（筹备中）是在自愿、平等、互利、合作的基础上，由关心、关注汽车产业及开源事业发展的国内外优秀企、事业单位、社团组织、高等院校、科研所及个人等自愿结成的非营利性机构
                  </Text>
                  <Text
                    className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] ml-[3px] sm:mt-[14px] md:mt-[19px] mt-[28px] sm:mx-[0] text-gray_900 sm:w-[100%] w-[99%]"
                    variant="body4"
                  >
                    OpenSDV联盟以垂直性、专业性、开放性为特征，致力于成为“开放中立、创造价值、驱动创新”的国际化开放式汽车软件联盟，旨在通过打造国际领先的汽车软件开源技术公共服务基础设施，建设具有国际影响力的汽车软件专业化开源社区，促进汽车软件开源项目发展、技术孵化创新和生态融合，提升产业效率，推动产业发展
                  </Text>
                </Column>
                <Stack className="h-[534px] sm:ml-[21px] md:ml-[28px] ml-[41px] sm:mt-[39px] md:mt-[50px] mt-[74px] relative w-[21%]">
                  <Img
                    src="images/img_image52.png"
                    className="absolute bottom-[0] h-[506px] max-w-[100%] right-[0] sm:w-[100%] w-[89%]"
                    alt="imageFiftyTwo"
                  />
                  <div className="absolute bg-teal_400 sm:h-[29px] md:h-[37px] h-[53px] left-[0] top-[0] sm:w-[28px] md:w-[36px] w-[53px]"></div>
                </Stack>
              </Row>
            </Column>
          </Stack>
          <Text
            className="md:mt-[115px] mt-[168px] sm:mt-[89px] text-gray_900 w-[auto]"
            as="h2"
            variant="h2"
          >
            联盟架构
          </Text>
          <Column className="flex flex-col items-center justify-start max-w-[998px] ml-[auto] mr-[auto] sm:mt-[34px] md:mt-[44px] mt-[64px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Column className="bg-white_A700 flex flex-col items-center justify-start outline outline-[1px] outline-bluegray_100 md:pb-[11px] sm:pb-[15px] pb-[16px] w-[100%]">
                <Column className="flex flex-col items-center justify-start w-[100%]">
                  <Button
                    className="cursor-pointer font-normal text-[16px] text-center text-white_A700 w-[100%]"
                    variant="FillBluegray400"
                  >
                    OpenSDV联盟理事会
                  </Button>
                  <Column className="bg-indigo_50 flex flex-col items-center justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] p-[13px] sm:p-[6px] md:p-[8px] sm:w-[100%] w-[23%]">
                    <Text
                      className="not-italic text-gray_900 w-[auto]"
                      variant="body4"
                    >
                      OpenSDV联盟理事长
                    </Text>
                  </Column>
                  <Stack className="h-[33px] relative sm:w-[100%] w-[79%]">
                    <Column
                      className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col items-center justify-start pt-[1px] px-[1px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group22.svg')",
                      }}
                    >
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
                        <Line className="bg-bluegray_200 sm:h-[11px] md:h-[14px] h-[20px] w-[1px]" />
                        <Line className="bg-bluegray_200 sm:h-[11px] md:h-[14px] h-[20px] w-[1px]" />
                      </Row>
                    </Column>
                    <Line className="absolute bg-bluegray_200 sm:h-[18px] md:h-[23px] h-[33px] inset-x-[50%] w-[1px]" />
                  </Stack>
                  <List
                    className="md:gap-[10px] gap-[15px] sm:gap-[7px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-5 min-h-[auto] sm:w-[100%] w-[98%]"
                    orientation="horizontal"
                  >
                    <Column className="bg-white_A700 border border-bluegray_201 border-solid flex flex-col items-center justify-start p-[11px] sm:p-[5px] md:p-[7px] w-[100%]">
                      <Text
                        className="mb-[1px] not-italic text-gray_900 w-[auto]"
                        variant="body6"
                      >
                        开源软件基础设施副理事长
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border border-bluegray_201 border-solid flex flex-col items-center justify-start p-[11px] sm:p-[5px] md:p-[7px] w-[100%]">
                      <Text
                        className="mb-[1px] not-italic text-gray_900 w-[auto]"
                        variant="body6"
                      >
                        开源硬件基础设施副理事长
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border border-bluegray_201 border-solid flex flex-col items-center justify-start sm:p-[4px] md:p-[5px] p-[8px] w-[100%]">
                      <Text
                        className="my-[3px] not-italic text-gray_900 w-[auto]"
                        variant="body6"
                      >
                        活动会议、车厂、资源副理事长
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border border-bluegray_201 border-solid flex flex-col items-center justify-start p-[11px] sm:p-[5px] md:p-[7px] w-[100%]">
                      <Text
                        className="mb-[1px] not-italic text-gray_900 w-[auto]"
                        variant="body6"
                      >
                        XXX副理事长
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border border-bluegray_201 border-solid flex flex-col items-center justify-start p-[11px] sm:p-[5px] md:p-[7px] w-[100%]">
                      <Text
                        className="mb-[1px] not-italic text-gray_900 w-[auto]"
                        variant="body6"
                      >
                        XXX副理事长
                      </Text>
                    </Column>
                  </List>
                </Column>
              </Column>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly mt-[4px] w-[100%]">
                <Button
                  className="cursor-pointer font-normal min-w-[20%] text-[16px] text-center text-gray_900 w-[max-content]"
                  size="md"
                  variant="FillIndigo50"
                >
                  秘书处
                </Button>
                <Button
                  className="cursor-pointer font-normal min-w-[20%] text-[16px] text-center text-gray_900 w-[max-content]"
                  size="md"
                  variant="FillIndigo50"
                >
                  技术监督委员会(TOC)
                </Button>
                <Button
                  className="cursor-pointer font-normal min-w-[20%] text-[16px] text-center text-gray_900 w-[max-content]"
                  size="md"
                  variant="FillIndigo50"
                >
                  生态发展委员会
                </Button>
                <Button
                  className="cursor-pointer font-normal min-w-[20%] text-[16px] text-center text-gray_900 w-[max-content]"
                  size="md"
                  variant="FillIndigo50"
                >
                  战略顾问委员会
                </Button>
                <Button
                  className="cursor-pointer font-normal min-w-[20%] text-[16px] text-center text-gray_900 w-[max-content]"
                  size="md"
                  variant="FillIndigo50"
                >
                  区域发展专委会
                </Button>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly mt-[4px] w-[100%]">
                <List
                  className="md:gap-[1px] sm:gap-[1px] gap-[2px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 min-h-[auto] sm:w-[100%] w-[80%]"
                  orientation="horizontal"
                >
                  <Column className="bg-teal_400_14 flex flex-col items-center justify-start sm:p-[4px] md:p-[5px] p-[8px] w-[100%]">
                    <Column className="flex flex-col items-center justify-start sm:mb-[27px] md:mb-[35px] mb-[52px] sm:px-[0] w-[100%]">
                      <Button className="cursor-pointer font-normal not-italic text-[12px] text-black_900 text-center w-[100%]">
                        秘书长
                      </Button>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly mt-[4px] w-[100%]">
                        <Button className="cursor-pointer font-normal min-w-[49%] not-italic text-[12px] text-black_900 text-center w-[max-content]">
                          副秘书长
                        </Button>
                        <Button className="cursor-pointer font-normal min-w-[49%] not-italic text-[12px] text-black_900 text-center w-[max-content]">
                          副秘书长
                        </Button>
                      </Row>
                      <Img
                        src="images/img_union_32X20.png"
                        className="max-w-[100%] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[11%]"
                        alt="Union"
                      />
                      <Button className="cursor-pointer font-normal md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-[12px] text-black_900 text-center w-[100%]">
                        部门1
                      </Button>
                      <Button className="cursor-pointer font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-[12px] text-black_900 text-center w-[100%]">
                        部门2
                      </Button>
                      <Button className="cursor-pointer font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-[12px] text-black_900 text-center w-[100%]">
                        部门3
                      </Button>
                      <Button className="cursor-pointer font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-[12px] text-black_900 text-center w-[100%]">
                        部门4
                      </Button>
                    </Column>
                  </Column>
                  <Column className="bg-light_blue_400_14 flex flex-col items-center justify-start sm:p-[4px] md:p-[5px] p-[8px] w-[100%]">
                    <Column className="flex flex-col items-center justify-start mb-[4px] sm:px-[0] w-[100%]">
                      <Button className="cursor-pointer font-normal not-italic text-[12px] text-black_900 text-center w-[100%]">
                        TOC主席
                      </Button>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly mt-[4px] w-[100%]">
                        <Button className="cursor-pointer font-normal min-w-[49%] not-italic text-[12px] text-black_900 text-center w-[max-content]">
                          TOC副主席
                        </Button>
                        <Button className="cursor-pointer font-normal min-w-[49%] not-italic text-[12px] text-black_900 text-center w-[max-content]">
                          TOC副主席
                        </Button>
                      </Row>
                      <Img
                        src="images/img_union_32X20.png"
                        className="max-w-[100%] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[11%]"
                        alt="Union One"
                      />
                      <Button className="cursor-pointer font-normal md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-[12px] text-black_900 text-center w-[100%]">
                        TOC委员会
                      </Button>
                      <Button className="cursor-pointer font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-[12px] text-black_900 text-center w-[100%]">
                        TOC委员会
                      </Button>
                      <Button className="cursor-pointer font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-[12px] text-black_900 text-center w-[100%]">
                        TOC委员会
                      </Button>
                      <Button className="cursor-pointer font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-[12px] text-black_900 text-center w-[100%]">
                        TOC委员会
                      </Button>
                      <Button className="cursor-pointer font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-[12px] text-black_900 text-center w-[100%]">
                        TOC委员会
                      </Button>
                    </Column>
                  </Column>
                  <Column className="bg-orange_400_14 flex flex-col items-center justify-start sm:p-[4px] md:p-[5px] p-[8px] w-[100%]">
                    <Column className="flex flex-col items-center justify-start mb-[4px] sm:px-[0] w-[100%]">
                      <Button className="cursor-pointer font-normal not-italic text-[12px] text-black_900 text-center w-[100%]">
                        主席
                      </Button>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly mt-[4px] w-[100%]">
                        <Button className="cursor-pointer font-normal min-w-[49%] not-italic text-[12px] text-black_900 text-center w-[max-content]">
                          副主席
                        </Button>
                        <Button className="cursor-pointer font-normal min-w-[49%] not-italic text-[12px] text-black_900 text-center w-[max-content]">
                          副主席
                        </Button>
                      </Row>
                      <Img
                        src="images/img_union_32X20.png"
                        className="max-w-[100%] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[11%]"
                        alt="Union Two"
                      />
                      <Button className="cursor-pointer font-normal md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-[12px] text-black_900 text-center w-[100%]">
                        部门1
                      </Button>
                      <Button className="cursor-pointer font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-[12px] text-black_900 text-center w-[100%]">
                        部门2
                      </Button>
                      <Button className="cursor-pointer font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-[12px] text-black_900 text-center w-[100%]">
                        部门3
                      </Button>
                      <Button className="cursor-pointer font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-[12px] text-black_900 text-center w-[100%]">
                        部门4
                      </Button>
                      <Button className="cursor-pointer font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-[12px] text-black_900 text-center w-[100%]">
                        部门5
                      </Button>
                    </Column>
                  </Column>
                  <Column className="bg-teal_400_14 flex flex-col items-center justify-start sm:p-[4px] md:p-[5px] p-[8px] w-[100%]">
                    <Column className="flex flex-col items-center justify-start mb-[4px] sm:px-[0] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
                        <Column className="bg-white_A700 flex flex-col items-center sm:mx-[0] md:p-[13px] sm:p-[15px] p-[20px] sm:w-[100%] w-[49%]">
                          <Text
                            className="leading-[22.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] not-italic text-black_900 text-center sm:w-[100%] w-[98%]"
                            variant="body6"
                          >
                            产业方向
                            <br />
                            联席主席
                          </Text>
                        </Column>
                        <Column className="bg-white_A700 flex flex-col items-center sm:mx-[0] md:p-[13px] sm:p-[15px] p-[20px] sm:w-[100%] w-[49%]">
                          <Text
                            className="leading-[22.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] not-italic text-black_900 text-center sm:w-[100%] w-[98%]"
                            variant="body6"
                          >
                            技术方向
                            <br />
                            联席主席
                          </Text>
                        </Column>
                      </Row>
                      <Img
                        src="images/img_union_32X20.png"
                        className="max-w-[100%] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[11%]"
                        alt="Union Three"
                      />
                      <Button className="cursor-pointer font-normal md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-[12px] text-black_900 text-center w-[100%]">
                        战略顾问
                      </Button>
                      <Button className="cursor-pointer font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-[12px] text-black_900 text-center w-[100%]">
                        战略顾问
                      </Button>
                      <Button className="cursor-pointer font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-[12px] text-black_900 text-center w-[100%]">
                        战略顾问
                      </Button>
                      <Button className="cursor-pointer font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-[12px] text-black_900 text-center w-[100%]">
                        战略顾问
                      </Button>
                      <Button className="cursor-pointer font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-[12px] text-black_900 text-center w-[100%]">
                        战略顾问
                      </Button>
                    </Column>
                  </Column>
                </List>
                <Row className="bg-light_blue_400_14 flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:p-[4px] md:p-[5px] p-[8px] sm:w-[100%] w-[20%]">
                  <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mb-[159px] md:mb-[206px] mb-[300px] sm:mx-[0] md:p-[13px] sm:p-[15px] p-[20px] sm:w-[100%] w-[49%]">
                    <Text
                      className="leading-[22.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] not-italic text-black_900 text-center sm:w-[100%] w-[98%]"
                      variant="body6"
                    >
                      西南区域
                      <br />
                      总负责
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mb-[159px] md:mb-[206px] mb-[300px] ml-[4px] sm:mx-[0] md:p-[13px] sm:p-[15px] p-[20px] sm:w-[100%] w-[49%]">
                    <Text
                      className="leading-[22.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] not-italic text-black_900 text-center sm:w-[100%] w-[98%]"
                      variant="body6"
                    >
                      其他区域
                      <br />
                      总负责
                    </Text>
                  </Column>
                </Row>
              </Row>
            </Column>
          </Column>
          <List
            className="md:gap-[104px] gap-[152px] sm:gap-[80px] grid min-h-[auto] md:mt-[104px] mt-[152px] sm:mt-[80px] w-[100%]"
            orientation="vertical"
          >
            <Stack className="h-[1450px] max-w-[1380px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] relative w-[100%]">
              <Column className="absolute bg-gray_53 flex flex-col justify-start sm:mx-[0] sm:p-[15px] md:p-[30px] p-[45px] right-[0] top-[0] sm:w-[100%] w-[87%]">
                <Text
                  className="sm:ml-[289px] md:ml-[374px] ml-[544px] sm:mt-[23px] md:mt-[30px] mt-[45px] text-gray_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  战略顾问委员会
                </Text>
                <Line className="bg-teal_400 h-[4px] sm:ml-[289px] md:ml-[374px] ml-[544px] sm:mt-[17px] md:mt-[22px] mt-[32px] w-[5%]" />
                <Text
                  className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] md:ml-[375px] ml-[546px] sm:mt-[34px] md:mt-[44px] mt-[64px] sm:mx-[0] text-black_900 sm:w-[100%] w-[50%]"
                  variant="body4"
                >
                  负责为联盟战略发展提供方向指引，为联盟的对外交流合作提供资源支持及发挥推动作用
                </Text>
                <Text
                  className="sm:ml-[290px] md:ml-[375px] ml-[546px] sm:mt-[18px] md:mt-[23px] mt-[34px] text-gray_900 w-[auto]"
                  variant="body4"
                >
                  下列为战略委员会成员
                </Text>
                <Img
                  src="images/img_union.png"
                  className="max-w-[100%] sm:mb-[133px] md:mb-[172px] mb-[250px] ml-[1024px] sm:ml-[545px] md:ml-[704px] sm:mt-[20px] md:mt-[26px] mt-[38px] w-[8%]"
                  alt="Union Four"
                />
              </Column>
              <Stack
                className="absolute bg-cover bg-no-repeat h-[420px] left-[0] top-[6%] sm:w-[100%] w-[51%]"
                style={{
                  backgroundImage: "url('images/img_maskgroup_420X698.png')",
                }}
              >
                <Img
                  src="images/img_image110.png"
                  className="absolute h-[420px] max-w-[100%] w-[100%]"
                  alt="image110"
                />
              </Stack>
              <Column className="absolute flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                <Grid className="sm:gap-[15px] md:gap-[19px] gap-[29px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 min-h-[auto] w-[100%]">
                  <Column className="bg-white_A700 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[22px] pb-[32px] rounded-radius8 shadow-bs1 w-[100%]">
                    <Column className="flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                      <Img
                        src="images/img_maskgroup_bluegray_101.png"
                        className="max-w-[100%] rounded-radius8 w-[100%]"
                        alt="Maskgroup"
                      />
                      <Column className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                          <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[24%]">
                            <Text
                              className="text-gray_900 w-[auto]"
                              variant="body1"
                            >
                              李建国
                            </Text>
                            <Text
                              className="sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900_90 uppercase w-[auto]"
                              variant="body4"
                            >
                              副理事
                            </Text>
                          </Column>
                          <Img
                            src="images/img_signal.svg"
                            className="max-w-[100%] sm:mt-[3px] md:mt-[4px] mt-[6px] rounded-radius8 w-[12%]"
                            alt="signal"
                          />
                        </Row>
                        <Text
                          className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[15px] md:mt-[20px] mt-[30px] text-gray_900_90 w-[100%]"
                          variant="body4"
                        >
                          详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详...
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[22px] pb-[32px] rounded-radius8 shadow-bs1 w-[100%]">
                    <Column className="flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                      <Img
                        src="images/img_maskgroup_bluegray_101.png"
                        className="max-w-[100%] rounded-radius8 w-[100%]"
                        alt="Maskgroup One"
                      />
                      <Column className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                          <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[24%]">
                            <Text
                              className="text-gray_900 w-[auto]"
                              variant="body1"
                            >
                              李建国
                            </Text>
                            <Text
                              className="sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900_90 uppercase w-[auto]"
                              variant="body4"
                            >
                              副理事
                            </Text>
                          </Column>
                          <Img
                            src="images/img_signal.svg"
                            className="max-w-[100%] sm:mt-[3px] md:mt-[4px] mt-[6px] rounded-radius8 w-[12%]"
                            alt="signal One"
                          />
                        </Row>
                        <Text
                          className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[15px] md:mt-[20px] mt-[30px] text-gray_900_90 w-[100%]"
                          variant="body4"
                        >
                          详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详...
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[22px] pb-[32px] rounded-radius8 shadow-bs1 w-[100%]">
                    <Column className="flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                      <Img
                        src="images/img_maskgroup_bluegray_101.png"
                        className="max-w-[100%] rounded-radius8 w-[100%]"
                        alt="Maskgroup Two"
                      />
                      <Column className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                          <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[24%]">
                            <Text
                              className="text-gray_900 w-[auto]"
                              variant="body1"
                            >
                              李建国
                            </Text>
                            <Text
                              className="sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900_90 uppercase w-[auto]"
                              variant="body4"
                            >
                              副理事
                            </Text>
                          </Column>
                          <Img
                            src="images/img_signal.svg"
                            className="max-w-[100%] sm:mt-[3px] md:mt-[4px] mt-[6px] rounded-radius8 w-[12%]"
                            alt="signal Two"
                          />
                        </Row>
                        <Text
                          className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[15px] md:mt-[20px] mt-[30px] text-gray_900_90 w-[100%]"
                          variant="body4"
                        >
                          详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详...
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[22px] pb-[32px] rounded-radius8 shadow-bs1 w-[100%]">
                    <Column className="flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                      <Img
                        src="images/img_maskgroup_bluegray_101.png"
                        className="max-w-[100%] rounded-radius8 w-[100%]"
                        alt="Maskgroup Three"
                      />
                      <Column className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                          <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[24%]">
                            <Text
                              className="text-gray_900 w-[auto]"
                              variant="body1"
                            >
                              李建国
                            </Text>
                            <Text
                              className="sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900_90 uppercase w-[auto]"
                              variant="body4"
                            >
                              副理事
                            </Text>
                          </Column>
                          <Img
                            src="images/img_signal.svg"
                            className="max-w-[100%] sm:mt-[3px] md:mt-[4px] mt-[6px] rounded-radius8 w-[12%]"
                            alt="signal Three"
                          />
                        </Row>
                        <Text
                          className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[15px] md:mt-[20px] mt-[30px] text-gray_900_90 w-[100%]"
                          variant="body4"
                        >
                          详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详...
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[22px] pb-[32px] rounded-radius8 shadow-bs1 w-[100%]">
                    <Column className="flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                      <Img
                        src="images/img_maskgroup_bluegray_101.png"
                        className="max-w-[100%] rounded-radius8 w-[100%]"
                        alt="Maskgroup Four"
                      />
                      <Column className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                          <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[24%]">
                            <Text
                              className="text-gray_900 w-[auto]"
                              variant="body1"
                            >
                              李建国
                            </Text>
                            <Text
                              className="sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900_90 uppercase w-[auto]"
                              variant="body4"
                            >
                              副理事
                            </Text>
                          </Column>
                          <Img
                            src="images/img_signal.svg"
                            className="max-w-[100%] sm:mt-[3px] md:mt-[4px] mt-[6px] rounded-radius8 w-[12%]"
                            alt="signal Four"
                          />
                        </Row>
                        <Text
                          className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[15px] md:mt-[20px] mt-[30px] text-gray_900_90 w-[100%]"
                          variant="body4"
                        >
                          详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详...
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[22px] pb-[32px] rounded-radius8 shadow-bs1 w-[100%]">
                    <Column className="flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                      <Img
                        src="images/img_maskgroup_bluegray_101.png"
                        className="max-w-[100%] rounded-radius8 w-[100%]"
                        alt="Maskgroup Five"
                      />
                      <Column className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                          <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[24%]">
                            <Text
                              className="text-gray_900 w-[auto]"
                              variant="body1"
                            >
                              李建国
                            </Text>
                            <Text
                              className="sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900_90 uppercase w-[auto]"
                              variant="body4"
                            >
                              副理事
                            </Text>
                          </Column>
                          <Img
                            src="images/img_signal.svg"
                            className="max-w-[100%] sm:mt-[3px] md:mt-[4px] mt-[6px] rounded-radius8 w-[12%]"
                            alt="signal Five"
                          />
                        </Row>
                        <Text
                          className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[15px] md:mt-[20px] mt-[30px] text-gray_900_90 w-[100%]"
                          variant="body4"
                        >
                          详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详...
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[22px] pb-[32px] rounded-radius8 shadow-bs1 w-[100%]">
                    <Column className="flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                      <Img
                        src="images/img_maskgroup_bluegray_101.png"
                        className="max-w-[100%] rounded-radius8 w-[100%]"
                        alt="Maskgroup Six"
                      />
                      <Column className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                          <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[24%]">
                            <Text
                              className="text-gray_900 w-[auto]"
                              variant="body1"
                            >
                              李建国
                            </Text>
                            <Text
                              className="sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900_90 uppercase w-[auto]"
                              variant="body4"
                            >
                              副理事
                            </Text>
                          </Column>
                          <Img
                            src="images/img_signal.svg"
                            className="max-w-[100%] sm:mt-[3px] md:mt-[4px] mt-[6px] rounded-radius8 w-[12%]"
                            alt="signal Six"
                          />
                        </Row>
                        <Text
                          className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[15px] md:mt-[20px] mt-[30px] text-gray_900_90 w-[100%]"
                          variant="body4"
                        >
                          详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详...
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[22px] pb-[32px] rounded-radius8 shadow-bs1 w-[100%]">
                    <Column className="flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                      <Img
                        src="images/img_maskgroup_bluegray_101.png"
                        className="max-w-[100%] rounded-radius8 w-[100%]"
                        alt="Maskgroup Seven"
                      />
                      <Column className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                          <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[24%]">
                            <Text
                              className="text-gray_900 w-[auto]"
                              variant="body1"
                            >
                              李建国
                            </Text>
                            <Text
                              className="sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900_90 uppercase w-[auto]"
                              variant="body4"
                            >
                              副理事
                            </Text>
                          </Column>
                          <Img
                            src="images/img_signal.svg"
                            className="max-w-[100%] sm:mt-[3px] md:mt-[4px] mt-[6px] rounded-radius8 w-[12%]"
                            alt="signal Seven"
                          />
                        </Row>
                        <Text
                          className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[15px] md:mt-[20px] mt-[30px] text-gray_900_90 w-[100%]"
                          variant="body4"
                        >
                          详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详...
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                </Grid>
              </Column>
            </Stack>
            <Stack className="h-[1450px] max-w-[1380px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] relative w-[100%]">
              <Column className="absolute bg-gray_53 flex flex-col justify-center left-[0] sm:mx-[0] sm:p-[15px] md:p-[30px] p-[45px] top-[0] sm:w-[100%] w-[87%]">
                <Column className="flex flex-col justify-start md:ml-[10px] ml-[15px] md:mr-[374px] mr-[544px] sm:mt-[23px] md:mt-[30px] mt-[45px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
                  <Text className="text-gray_900 w-[auto]" as="h2" variant="h2">
                    理事会
                  </Text>
                  <Line className="bg-teal_400 h-[4px] sm:mt-[17px] md:mt-[22px] mt-[32px] w-[10%]" />
                  <Text
                    className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[34px] md:mt-[44px] mt-[64px] text-gray_900 w-[100%]"
                    variant="body4"
                  >
                    联盟的最高决策机构是理事会，主要负责审定、决策联盟的重大事项。理事会由多名理事组成。其中理事长1名，是联盟的法定代表人，从理事中选举产生。
                  </Text>
                  <Text
                    className="ml-[2px] sm:mt-[18px] md:mt-[23px] mt-[34px] text-gray_900 w-[auto]"
                    variant="body4"
                  >
                    下列为理事会成员
                  </Text>
                </Column>
                <Img
                  src="images/img_union.png"
                  className="max-w-[100%] sm:mb-[135px] md:mb-[175px] mb-[255px] mr-[1024px] sm:mr-[545px] md:mr-[704px] sm:mt-[17px] md:mt-[22px] mt-[33px] w-[8%]"
                  alt="Union Five"
                />
              </Column>
              <Img
                src="images/img_image59.png"
                className="absolute h-[420px] max-w-[100%] right-[0] top-[6%] sm:w-[100%] w-[51%]"
                alt="imageFiftyNine"
              />
              <Column className="absolute flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                <Grid className="sm:gap-[15px] md:gap-[19px] gap-[29px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 min-h-[auto] w-[100%]">
                  <Column className="bg-white_A700 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[22px] pb-[32px] rounded-radius8 shadow-bs1 w-[100%]">
                    <Column className="flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                      <Img
                        src="images/img_maskgroup_bluegray_101.png"
                        className="max-w-[100%] rounded-radius8 w-[100%]"
                        alt="Maskgroup One"
                      />
                      <Column className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                          <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[24%]">
                            <Text
                              className="text-gray_900 w-[auto]"
                              variant="body1"
                            >
                              李建国
                            </Text>
                            <Text
                              className="sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900_90 uppercase w-[auto]"
                              variant="body4"
                            >
                              副理事
                            </Text>
                          </Column>
                          <Img
                            src="images/img_signal.svg"
                            className="max-w-[100%] sm:mt-[3px] md:mt-[4px] mt-[6px] rounded-radius8 w-[12%]"
                            alt="signal One"
                          />
                        </Row>
                        <Text
                          className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[15px] md:mt-[20px] mt-[30px] text-gray_900_90 w-[100%]"
                          variant="body4"
                        >
                          详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详...
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[22px] pb-[32px] rounded-radius8 shadow-bs1 w-[100%]">
                    <Column className="flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                      <Img
                        src="images/img_maskgroup_bluegray_101.png"
                        className="max-w-[100%] rounded-radius8 w-[100%]"
                        alt="Maskgroup One One"
                      />
                      <Column className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                          <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[24%]">
                            <Text
                              className="text-gray_900 w-[auto]"
                              variant="body1"
                            >
                              李建国
                            </Text>
                            <Text
                              className="sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900_90 uppercase w-[auto]"
                              variant="body4"
                            >
                              副理事
                            </Text>
                          </Column>
                          <Img
                            src="images/img_signal.svg"
                            className="max-w-[100%] sm:mt-[3px] md:mt-[4px] mt-[6px] rounded-radius8 w-[12%]"
                            alt="signal One One"
                          />
                        </Row>
                        <Text
                          className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[15px] md:mt-[20px] mt-[30px] text-gray_900_90 w-[100%]"
                          variant="body4"
                        >
                          详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详...
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[22px] pb-[32px] rounded-radius8 shadow-bs1 w-[100%]">
                    <Column className="flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                      <Img
                        src="images/img_maskgroup_bluegray_101.png"
                        className="max-w-[100%] rounded-radius8 w-[100%]"
                        alt="Maskgroup Two One"
                      />
                      <Column className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                          <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[24%]">
                            <Text
                              className="text-gray_900 w-[auto]"
                              variant="body1"
                            >
                              李建国
                            </Text>
                            <Text
                              className="sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900_90 uppercase w-[auto]"
                              variant="body4"
                            >
                              副理事
                            </Text>
                          </Column>
                          <Img
                            src="images/img_signal.svg"
                            className="max-w-[100%] sm:mt-[3px] md:mt-[4px] mt-[6px] rounded-radius8 w-[12%]"
                            alt="signal Two One"
                          />
                        </Row>
                        <Text
                          className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[15px] md:mt-[20px] mt-[30px] text-gray_900_90 w-[100%]"
                          variant="body4"
                        >
                          详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详...
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[22px] pb-[32px] rounded-radius8 shadow-bs1 w-[100%]">
                    <Column className="flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                      <Img
                        src="images/img_maskgroup_bluegray_101.png"
                        className="max-w-[100%] rounded-radius8 w-[100%]"
                        alt="Maskgroup Three One"
                      />
                      <Column className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                          <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[24%]">
                            <Text
                              className="text-gray_900 w-[auto]"
                              variant="body1"
                            >
                              李建国
                            </Text>
                            <Text
                              className="sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900_90 uppercase w-[auto]"
                              variant="body4"
                            >
                              副理事
                            </Text>
                          </Column>
                          <Img
                            src="images/img_signal.svg"
                            className="max-w-[100%] sm:mt-[3px] md:mt-[4px] mt-[6px] rounded-radius8 w-[12%]"
                            alt="signal Three One"
                          />
                        </Row>
                        <Text
                          className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[15px] md:mt-[20px] mt-[30px] text-gray_900_90 w-[100%]"
                          variant="body4"
                        >
                          详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详...
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[22px] pb-[32px] rounded-radius8 shadow-bs1 w-[100%]">
                    <Column className="flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                      <Img
                        src="images/img_maskgroup_bluegray_101.png"
                        className="max-w-[100%] rounded-radius8 w-[100%]"
                        alt="Maskgroup Four One"
                      />
                      <Column className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                          <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[24%]">
                            <Text
                              className="text-gray_900 w-[auto]"
                              variant="body1"
                            >
                              李建国
                            </Text>
                            <Text
                              className="sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900_90 uppercase w-[auto]"
                              variant="body4"
                            >
                              副理事
                            </Text>
                          </Column>
                          <Img
                            src="images/img_signal.svg"
                            className="max-w-[100%] sm:mt-[3px] md:mt-[4px] mt-[6px] rounded-radius8 w-[12%]"
                            alt="signal Four One"
                          />
                        </Row>
                        <Text
                          className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[15px] md:mt-[20px] mt-[30px] text-gray_900_90 w-[100%]"
                          variant="body4"
                        >
                          详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详...
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[22px] pb-[32px] rounded-radius8 shadow-bs1 w-[100%]">
                    <Column className="flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                      <Img
                        src="images/img_maskgroup_bluegray_101.png"
                        className="max-w-[100%] rounded-radius8 w-[100%]"
                        alt="Maskgroup Five One"
                      />
                      <Column className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                          <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[24%]">
                            <Text
                              className="text-gray_900 w-[auto]"
                              variant="body1"
                            >
                              李建国
                            </Text>
                            <Text
                              className="sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900_90 uppercase w-[auto]"
                              variant="body4"
                            >
                              副理事
                            </Text>
                          </Column>
                          <Img
                            src="images/img_signal.svg"
                            className="max-w-[100%] sm:mt-[3px] md:mt-[4px] mt-[6px] rounded-radius8 w-[12%]"
                            alt="signal Five One"
                          />
                        </Row>
                        <Text
                          className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[15px] md:mt-[20px] mt-[30px] text-gray_900_90 w-[100%]"
                          variant="body4"
                        >
                          详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详...
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[22px] pb-[32px] rounded-radius8 shadow-bs1 w-[100%]">
                    <Column className="flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                      <Img
                        src="images/img_maskgroup_bluegray_101.png"
                        className="max-w-[100%] rounded-radius8 w-[100%]"
                        alt="Maskgroup Six One"
                      />
                      <Column className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                          <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[24%]">
                            <Text
                              className="text-gray_900 w-[auto]"
                              variant="body1"
                            >
                              李建国
                            </Text>
                            <Text
                              className="sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900_90 uppercase w-[auto]"
                              variant="body4"
                            >
                              副理事
                            </Text>
                          </Column>
                          <Img
                            src="images/img_signal.svg"
                            className="max-w-[100%] sm:mt-[3px] md:mt-[4px] mt-[6px] rounded-radius8 w-[12%]"
                            alt="signal Six One"
                          />
                        </Row>
                        <Text
                          className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[15px] md:mt-[20px] mt-[30px] text-gray_900_90 w-[100%]"
                          variant="body4"
                        >
                          详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详...
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[22px] pb-[32px] rounded-radius8 shadow-bs1 w-[100%]">
                    <Column className="flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                      <Img
                        src="images/img_maskgroup_bluegray_101.png"
                        className="max-w-[100%] rounded-radius8 w-[100%]"
                        alt="Maskgroup Seven One"
                      />
                      <Column className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                          <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[24%]">
                            <Text
                              className="text-gray_900 w-[auto]"
                              variant="body1"
                            >
                              李建国
                            </Text>
                            <Text
                              className="sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900_90 uppercase w-[auto]"
                              variant="body4"
                            >
                              副理事
                            </Text>
                          </Column>
                          <Img
                            src="images/img_signal.svg"
                            className="max-w-[100%] sm:mt-[3px] md:mt-[4px] mt-[6px] rounded-radius8 w-[12%]"
                            alt="signal Seven One"
                          />
                        </Row>
                        <Text
                          className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[15px] md:mt-[20px] mt-[30px] text-gray_900_90 w-[100%]"
                          variant="body4"
                        >
                          详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详...
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                </Grid>
              </Column>
            </Stack>
          </List>
        </Column>
        <Column className="flex flex-col items-end md:mt-[104px] mt-[152px] sm:mt-[80px] sm:pl-[15px] md:pl-[41px] pl-[60px] w-[100%]">
          <Stack className="h-[510px] max-w-[1380px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] relative w-[100%]">
            <Column className="absolute bg-gray_53 flex flex-col justify-start sm:mx-[0] sm:p-[15px] md:p-[41px] p-[60px] right-[0] top-[0] sm:w-[100%] w-[87%]">
              <Text
                className="sm:ml-[281px] md:ml-[364px] ml-[529px] sm:mt-[15px] md:mt-[20px] mt-[30px] text-gray_900 w-[auto]"
                as="h2"
                variant="h2"
              >
                秘书处
              </Text>
              <Line className="bg-teal_400 h-[4px] sm:ml-[281px] md:ml-[364px] ml-[529px] sm:mt-[17px] md:mt-[22px] mt-[32px] w-[5%]" />
              <Text
                className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mb-[3px] md:mb-[4px] mb-[6px] md:ml-[365px] ml-[531px] sm:mt-[34px] md:mt-[44px] mt-[64px] sm:mx-[0] text-black_900 sm:w-[100%] w-[51%]"
                variant="body4"
              >
                理事会的日常办事机构。主要负责协调组织理事会会务工作，执行理事会的决议，按照理事会的规定和要求具体执行联盟管理运营事宜。包括联盟成员管理、资金及项目的引入与管理、联盟的公共关系维护与战略合作推动、面向开源项目的法务咨询、产业生态拓展等资源支持
              </Text>
            </Column>
            <Stack
              className="absolute bg-cover bg-no-repeat bottom-[0] h-[420px] left-[0] sm:w-[100%] w-[51%]"
              style={{ backgroundImage: "url('images/img_maskgroup_5.png')" }}
            >
              <Img
                src="images/img_image64.png"
                className="absolute h-[420px] max-w-[100%] w-[100%]"
                alt="imageSixtyFour"
              />
            </Stack>
            <Img
              src="images/img_union_106X86.png"
              className="absolute bottom-[0] h-[106px] max-w-[100%] right-[3%] w-[7%]"
              alt="Union Six"
            />
          </Stack>
        </Column>
        <Stack className="h-[1450px] max-w-[1380px] ml-[auto] mr-[auto] md:mt-[104px] mt-[152px] sm:mt-[80px] sm:pl-[15px] sm:pr-[15px] relative w-[100%]">
          <Column className="absolute bg-gray_53 flex flex-col justify-center left-[0] sm:mx-[0] sm:p-[15px] md:p-[30px] p-[45px] top-[0] sm:w-[100%] w-[87%]">
            <Column className="flex flex-col justify-start md:ml-[10px] ml-[15px] md:mr-[374px] mr-[544px] sm:mt-[23px] md:mt-[30px] mt-[45px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
              <Text className="text-gray_900 w-[auto]" as="h2" variant="h2">
                技术监督委员会
              </Text>
              <Line className="bg-teal_400 h-[4px] sm:mt-[17px] md:mt-[22px] mt-[32px] w-[10%]" />
              <Text
                className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[34px] md:mt-[44px] mt-[64px] text-black_900 w-[100%]"
                variant="body4"
              >
                作为中立机构，在理事会授权下对联盟开展技术领域评审与决策工作。负责联盟技术愿景的定义与维护，技术趋势的研判与指导，为项目的孵化、毕业制定标准、提供辅导、进行审核评估等工作。
              </Text>
              <Text
                className="ml-[2px] sm:mt-[18px] md:mt-[23px] mt-[34px] text-gray_900 w-[auto]"
                variant="body4"
              >
                下列为技术监督委员会成员
              </Text>
            </Column>
            <Img
              src="images/img_union.png"
              className="max-w-[100%] sm:mb-[133px] md:mb-[172px] mb-[250px] mr-[1024px] sm:mr-[545px] md:mr-[704px] mt-[10px] sm:mt-[5px] md:mt-[6px] w-[8%]"
              alt="Union Seven"
            />
          </Column>
          <Img
            src="images/img_maskgroup_420X698.png"
            className="absolute h-[420px] max-w-[100%] right-[0] top-[6%] sm:w-[100%] w-[51%]"
            alt="image106"
          />
          <Column className="absolute flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
            <Grid className="sm:gap-[15px] md:gap-[19px] gap-[29px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 min-h-[auto] w-[100%]">
              <Column className="bg-white_A700 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[22px] pb-[32px] rounded-radius8 shadow-bs1 w-[100%]">
                <Column className="flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_maskgroup_bluegray_101.png"
                    className="max-w-[100%] rounded-radius8 w-[100%]"
                    alt="Maskgroup Two"
                  />
                  <Column className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                      <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[24%]">
                        <Text
                          className="text-gray_900 w-[auto]"
                          variant="body1"
                        >
                          李建国
                        </Text>
                        <Text
                          className="sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900_90 uppercase w-[auto]"
                          variant="body4"
                        >
                          副理事
                        </Text>
                      </Column>
                      <Img
                        src="images/img_signal.svg"
                        className="max-w-[100%] sm:mt-[3px] md:mt-[4px] mt-[6px] rounded-radius8 w-[12%]"
                        alt="signal Two"
                      />
                    </Row>
                    <Text
                      className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[15px] md:mt-[20px] mt-[30px] text-gray_900_90 w-[100%]"
                      variant="body4"
                    >
                      详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详...
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[22px] pb-[32px] rounded-radius8 shadow-bs1 w-[100%]">
                <Column className="flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_maskgroup_bluegray_101.png"
                    className="max-w-[100%] rounded-radius8 w-[100%]"
                    alt="Maskgroup Three"
                  />
                  <Column className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                      <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[24%]">
                        <Text
                          className="text-gray_900 w-[auto]"
                          variant="body1"
                        >
                          李建国
                        </Text>
                        <Text
                          className="sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900_90 uppercase w-[auto]"
                          variant="body4"
                        >
                          副理事
                        </Text>
                      </Column>
                      <Img
                        src="images/img_signal.svg"
                        className="max-w-[100%] sm:mt-[3px] md:mt-[4px] mt-[6px] rounded-radius8 w-[12%]"
                        alt="signal Three"
                      />
                    </Row>
                    <Text
                      className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[15px] md:mt-[20px] mt-[30px] text-gray_900_90 w-[100%]"
                      variant="body4"
                    >
                      详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详...
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[22px] pb-[32px] rounded-radius8 shadow-bs1 w-[100%]">
                <Column className="flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_maskgroup_bluegray_101.png"
                    className="max-w-[100%] rounded-radius8 w-[100%]"
                    alt="Maskgroup Four"
                  />
                  <Column className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                      <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[24%]">
                        <Text
                          className="text-gray_900 w-[auto]"
                          variant="body1"
                        >
                          李建国
                        </Text>
                        <Text
                          className="sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900_90 uppercase w-[auto]"
                          variant="body4"
                        >
                          副理事
                        </Text>
                      </Column>
                      <Img
                        src="images/img_signal.svg"
                        className="max-w-[100%] sm:mt-[3px] md:mt-[4px] mt-[6px] rounded-radius8 w-[12%]"
                        alt="signal Four"
                      />
                    </Row>
                    <Text
                      className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[15px] md:mt-[20px] mt-[30px] text-gray_900_90 w-[100%]"
                      variant="body4"
                    >
                      详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详...
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[22px] pb-[32px] rounded-radius8 shadow-bs1 w-[100%]">
                <Column className="flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_maskgroup_bluegray_101.png"
                    className="max-w-[100%] rounded-radius8 w-[100%]"
                    alt="Maskgroup Five"
                  />
                  <Column className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                      <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[24%]">
                        <Text
                          className="text-gray_900 w-[auto]"
                          variant="body1"
                        >
                          李建国
                        </Text>
                        <Text
                          className="sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900_90 uppercase w-[auto]"
                          variant="body4"
                        >
                          副理事
                        </Text>
                      </Column>
                      <Img
                        src="images/img_signal.svg"
                        className="max-w-[100%] sm:mt-[3px] md:mt-[4px] mt-[6px] rounded-radius8 w-[12%]"
                        alt="signal Five"
                      />
                    </Row>
                    <Text
                      className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[15px] md:mt-[20px] mt-[30px] text-gray_900_90 w-[100%]"
                      variant="body4"
                    >
                      详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详...
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[22px] pb-[32px] rounded-radius8 shadow-bs1 w-[100%]">
                <Column className="flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_maskgroup_bluegray_101.png"
                    className="max-w-[100%] rounded-radius8 w-[100%]"
                    alt="Maskgroup Six"
                  />
                  <Column className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                      <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[24%]">
                        <Text
                          className="text-gray_900 w-[auto]"
                          variant="body1"
                        >
                          李建国
                        </Text>
                        <Text
                          className="sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900_90 uppercase w-[auto]"
                          variant="body4"
                        >
                          副理事
                        </Text>
                      </Column>
                      <Img
                        src="images/img_signal.svg"
                        className="max-w-[100%] sm:mt-[3px] md:mt-[4px] mt-[6px] rounded-radius8 w-[12%]"
                        alt="signal Six"
                      />
                    </Row>
                    <Text
                      className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[15px] md:mt-[20px] mt-[30px] text-gray_900_90 w-[100%]"
                      variant="body4"
                    >
                      详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详...
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[22px] pb-[32px] rounded-radius8 shadow-bs1 w-[100%]">
                <Column className="flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_maskgroup_bluegray_101.png"
                    className="max-w-[100%] rounded-radius8 w-[100%]"
                    alt="Maskgroup Seven"
                  />
                  <Column className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                      <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[24%]">
                        <Text
                          className="text-gray_900 w-[auto]"
                          variant="body1"
                        >
                          李建国
                        </Text>
                        <Text
                          className="sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900_90 uppercase w-[auto]"
                          variant="body4"
                        >
                          副理事
                        </Text>
                      </Column>
                      <Img
                        src="images/img_signal.svg"
                        className="max-w-[100%] sm:mt-[3px] md:mt-[4px] mt-[6px] rounded-radius8 w-[12%]"
                        alt="signal Seven"
                      />
                    </Row>
                    <Text
                      className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[15px] md:mt-[20px] mt-[30px] text-gray_900_90 w-[100%]"
                      variant="body4"
                    >
                      详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详...
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[22px] pb-[32px] rounded-radius8 shadow-bs1 w-[100%]">
                <Column className="flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_maskgroup_bluegray_101.png"
                    className="max-w-[100%] rounded-radius8 w-[100%]"
                    alt="Maskgroup Eight"
                  />
                  <Column className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                      <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[24%]">
                        <Text
                          className="text-gray_900 w-[auto]"
                          variant="body1"
                        >
                          李建国
                        </Text>
                        <Text
                          className="sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900_90 uppercase w-[auto]"
                          variant="body4"
                        >
                          副理事
                        </Text>
                      </Column>
                      <Img
                        src="images/img_signal.svg"
                        className="max-w-[100%] sm:mt-[3px] md:mt-[4px] mt-[6px] rounded-radius8 w-[12%]"
                        alt="signal Eight"
                      />
                    </Row>
                    <Text
                      className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[15px] md:mt-[20px] mt-[30px] text-gray_900_90 w-[100%]"
                      variant="body4"
                    >
                      详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详...
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[22px] pb-[32px] rounded-radius8 shadow-bs1 w-[100%]">
                <Column className="flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_maskgroup_bluegray_101.png"
                    className="max-w-[100%] rounded-radius8 w-[100%]"
                    alt="Maskgroup Nine"
                  />
                  <Column className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                      <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[24%]">
                        <Text
                          className="text-gray_900 w-[auto]"
                          variant="body1"
                        >
                          李建国
                        </Text>
                        <Text
                          className="sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900_90 uppercase w-[auto]"
                          variant="body4"
                        >
                          副理事
                        </Text>
                      </Column>
                      <Img
                        src="images/img_signal.svg"
                        className="max-w-[100%] sm:mt-[3px] md:mt-[4px] mt-[6px] rounded-radius8 w-[12%]"
                        alt="signal Nine"
                      />
                    </Row>
                    <Text
                      className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[15px] md:mt-[20px] mt-[30px] text-gray_900_90 w-[100%]"
                      variant="body4"
                    >
                      详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详...
                    </Text>
                  </Column>
                </Column>
              </Column>
            </Grid>
          </Column>
        </Stack>
        <Column className="flex flex-col items-center md:mt-[104px] mt-[152px] sm:mt-[80px] w-[100%]">
          <List
            className="md:gap-[104px] gap-[152px] sm:gap-[80px] grid min-h-[auto] w-[100%]"
            orientation="vertical"
          >
            <Stack className="h-[510px] max-w-[1380px] sm:ml-[31px] md:ml-[41px] ml-[auto] mr-[auto] my-[0] sm:pl-[15px] sm:pr-[15px] relative w-[100%]">
              <Column className="absolute bg-gray_53 flex flex-col justify-start sm:mx-[0] sm:p-[15px] md:p-[41px] p-[60px] right-[0] top-[0] sm:w-[100%] w-[87%]">
                <Text
                  className="sm:ml-[281px] md:ml-[364px] ml-[529px] sm:mt-[15px] md:mt-[20px] mt-[30px] text-gray_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  生态发展委员会
                </Text>
                <Line className="bg-teal_400 h-[4px] sm:ml-[281px] md:ml-[364px] ml-[529px] sm:mt-[17px] md:mt-[22px] mt-[32px] w-[5%]" />
                <Text
                  className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] md:ml-[365px] ml-[531px] sm:mx-[0] sm:my-[33px] md:my-[43px] my-[63px] text-black_900 sm:w-[100%] w-[51%]"
                  variant="body4"
                >
                  负责联盟的社区及活动运营、市场及品牌推广、开发者生态拓展与技术平台合作、基础设施建设及运营高效、科研机构及开发者的连接与协同。
                </Text>
              </Column>
              <Stack
                className="absolute bg-cover bg-no-repeat bottom-[0] h-[420px] left-[0] sm:w-[100%] w-[51%]"
                style={{ backgroundImage: "url('images/img_image110.png')" }}
              >
                <Img
                  src="images/img_image111.png"
                  className="absolute h-[420px] max-w-[100%] w-[100%]"
                  alt="image111"
                />
              </Stack>
              <Img
                src="images/img_union_106X86.png"
                className="absolute bottom-[0] h-[106px] max-w-[100%] right-[3%] w-[7%]"
                alt="Union Eight"
              />
            </Stack>
            <Stack className="h-[510px] max-w-[1380px] ml-[auto] sm:mr-[31px] md:mr-[41px] mr-[auto] my-[0] sm:pl-[15px] sm:pr-[15px] relative w-[100%]">
              <Column className="absolute bg-gray_53 flex flex-col justify-start left-[0] sm:mx-[0] sm:p-[15px] md:p-[41px] p-[60px] top-[0] sm:w-[100%] w-[87%]">
                <Text
                  className="sm:mt-[15px] md:mt-[20px] mt-[30px] text-gray_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  区域发展专委会
                </Text>
                <Line className="bg-teal_400 h-[4px] sm:mt-[17px] md:mt-[22px] mt-[32px] w-[5%]" />
                <Text
                  className="sm:mb-[50px] md:mb-[65px] mb-[95px] ml-[2px] sm:mt-[37px] md:mt-[48px] mt-[70px] text-black_900 w-[auto]"
                  variant="body4"
                >
                  负责联盟在具体区域的生态发展、活动的组织与运营等工作。
                </Text>
              </Column>
              <Img
                src="images/img_image112.png"
                className="absolute bottom-[0] h-[420px] max-w-[100%] right-[0] sm:w-[100%] w-[51%]"
                alt="image112"
              />
              <Img
                src="images/img_union_106X86.png"
                className="absolute bottom-[0] h-[106px] left-[2%] max-w-[100%] w-[7%]"
                alt="Union Nine"
              />
            </Stack>
          </List>
          <Button
            className="cursor-pointer font-normal mt-[128px] sm:mt-[68px] md:mt-[88px] text-[12px] text-center text-white_A700 w-[100%]"
            size="xl"
            variant="FillGray901"
          >
            Copyright © 2022 Howells—Studio All screenshots © of their
            respective owners
          </Button>
        </Column>
      </Column>
    </>
  );
};

export default I02Page;
