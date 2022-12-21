import React from "react";

import { Column, Row, Img, List, Stack, Text, Line, Button } from "components";

const I04Page = () => {
  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-alibabapuhuiti items-center justify-start mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center p-[3px] w-[100%]">
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
                    className="cursor-pointer font-normal text-[18px] text-gray_900 hover:text-teal_400"
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
                    className="cursor-pointer font-normal text-[18px] text-teal_400"
                    rel="noreferrer"
                  >
                    诚邀参与
                  </a>
                </li>
              </ul>
            </Row>
          </Row>
        </header>
        <Column className="flex flex-col justify-start sm:mt-[22px] md:mt-[28px] mt-[42px] w-[100%]">
          <List
            className="md:gap-[104px] gap-[152px] sm:gap-[80px] grid min-h-[auto] w-[100%]"
            orientation="vertical"
          >
            <Stack className="h-[509px] max-w-[1380px] ml-[auto] sm:mr-[31px] md:mr-[41px] mr-[auto] my-[0] sm:pl-[15px] sm:pr-[15px] relative w-[100%]">
              <Column className="absolute bg-gray_53 bottom-[0] flex flex-col justify-start sm:p-[15px] md:p-[27px] p-[40px] w-[100%]">
                <Column className="flex flex-col items-center justify-start md:ml-[13px] ml-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                  <Text
                    className="not-italic text-black_900 w-[auto]"
                    variant="body1"
                  >
                    捐赠联络：####@opensdv.org
                  </Text>
                </Column>
              </Column>
              <Img
                src="images/img_maskgroup_203X203.png"
                className="absolute h-[464px] max-w-[100%] right-[0] top-[0] sm:w-[100%] w-[50%]"
                alt="image127"
              />
              <Column className="absolute flex flex-col justify-start left-[4%] sm:mx-[0] sm:px-[0] top-[0] sm:w-[100%] w-[42%]">
                <Line className="bg-teal_400 h-[4px] w-[10%]" />
                <Text
                  className="sm:mt-[17px] md:mt-[22px] mt-[32px] text-gray_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  贡献项目
                </Text>
                <Text
                  className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[24px] md:mt-[31px] mt-[46px] text-gray_900 w-[100%]"
                  variant="body4"
                >
                  <span className="text-gray_900 text-[16px] font-alibabapuhuiti font-normal">
                    贡献项目代码:
                  </span>
                  <span className="text-gray_900 text-[16px] font-alibabapuhuiti font-normal">
                    {" "}
                  </span>
                  <span className="text-gray_900 text-[16px] font-alibabapuhuiti font-normal">
                    向联盟钻增汽车相关领域开源项目，使项目在联盟的中立平台上为大众共享，获得更多的开发者参与、可持续发展能力及生态拓展空间
                  </span>
                </Text>
              </Column>
            </Stack>
            <Stack className="h-[509px] max-w-[1380px] sm:ml-[31px] md:ml-[41px] ml-[auto] mr-[auto] my-[0] sm:pl-[15px] sm:pr-[15px] relative w-[100%]">
              <Column className="absolute bg-gray_53 bottom-[0] flex flex-col items-end justify-start sm:p-[15px] md:p-[27px] p-[40px] w-[100%]">
                <Column className="flex flex-col items-center justify-start md:mr-[195px] mr-[284px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                  <Text
                    className="not-italic text-black_900 w-[auto]"
                    variant="body1"
                  >
                    捐赠联络：####@opensdv.org
                  </Text>
                </Column>
              </Column>
              <Stack
                className="absolute bg-cover bg-no-repeat h-[464px] left-[0] top-[0] sm:w-[100%] w-[50%]"
                style={{
                  backgroundImage: "url('images/img_maskgroup_203X203.png')",
                }}
              >
                <Img
                  src="images/img_image131.png"
                  className="absolute h-[464px] max-w-[100%] w-[100%]"
                  alt="image131"
                />
              </Stack>
              <Column className="absolute flex flex-col justify-start sm:mx-[0] sm:px-[0] right-[4%] top-[0] sm:w-[100%] w-[42%]">
                <Line className="bg-teal_400 h-[4px] w-[10%]" />
                <Text
                  className="sm:mt-[17px] md:mt-[22px] mt-[32px] text-gray_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  入会
                </Text>
                <Text
                  className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[24px] md:mt-[31px] mt-[46px] text-gray_900 w-[100%]"
                  variant="body4"
                >
                  成为联盟会员，参与联盟建设，享受联盟服务，实现共享共赢，联盟会员包括白金会员单位、黄金会员单位、白银会员单位、非盈利会员单位.
                </Text>
              </Column>
            </Stack>
          </List>
          <Column className="flex flex-col items-center justify-start max-w-[1318px] md:ml-[41px] ml-[auto] mr-[auto] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
                <Text
                  className="bg-bluegray_50 sm:p-[15px] md:pl-[13px] pl-[20px] md:pr-[24px] pr-[35px] md:py-[16px] py-[24px] text-gray_900 w-[634px]"
                  variant="body4"
                >
                  权益
                </Text>
                <Button
                  className="cursor-pointer font-normal min-w-[13%] text-[16px] text-bluegray_300 text-center w-[max-content]"
                  size="lg"
                  variant="FillBluegray51"
                >
                  白银会员单位
                </Button>
                <Button
                  className="cursor-pointer font-normal min-w-[13%] text-[16px] text-center text-yellow_900 w-[max-content]"
                  size="lg"
                  variant="FillOrange50"
                >
                  黄金会员单位
                </Button>
                <Button
                  className="cursor-pointer font-normal min-w-[13%] text-[16px] text-center text-indigo_300 w-[max-content]"
                  size="lg"
                  variant="FillIndigo51"
                >
                  白金会员单位
                </Button>
                <Button
                  className="cursor-pointer font-normal min-w-[13%] text-[16px] text-center text-teal_400 w-[max-content]"
                  size="lg"
                  variant="FillTeal50"
                >
                  非营利会员单位
                </Button>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly mt-[2px] w-[100%]">
                <List
                  className="md:gap-[1px] sm:gap-[1px] gap-[2px] grid min-h-[auto] sm:w-[100%] w-[88%]"
                  orientation="vertical"
                >
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly my-[0] w-[100%]">
                    <Text
                      className="bg-bluegray_50 not-italic sm:p-[15px] md:pl-[13px] pl-[20px] md:pr-[24px] pr-[35px] md:py-[18px] py-[27px] text-gray_900 w-[634px]"
                      variant="body4"
                    >
                      可以会员身份在联盟的官网、公众号等官方渠道进行品牌露出
                    </Text>
                    <Stack className="bg-bluegray_51 h-[71px] sm:p-[15px] md:p-[17px] p-[25px] relative w-[15%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="absolute h-[20px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="checkmark"
                      />
                    </Stack>
                    <Stack className="bg-orange_50 h-[71px] sm:p-[15px] md:p-[17px] p-[25px] relative w-[15%]">
                      <Img
                        src="images/img_checkmark_20X20.svg"
                        className="absolute h-[20px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="checkmark One"
                      />
                    </Stack>
                    <Stack className="bg-indigo_51 h-[71px] sm:p-[15px] md:p-[17px] p-[25px] relative w-[15%]">
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="absolute h-[20px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="checkmark Two"
                      />
                    </Stack>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly my-[0] w-[100%]">
                    <Text
                      className="bg-bluegray_50 not-italic sm:p-[15px] md:pl-[13px] pl-[20px] md:pr-[24px] pr-[35px] md:py-[18px] py-[27px] text-gray_900 w-[634px]"
                      variant="body4"
                    >
                      可以免费获得联盟面向全体会员统一发布的资讯信息
                    </Text>
                    <Stack className="bg-bluegray_51 h-[71px] sm:p-[15px] md:p-[17px] p-[25px] relative w-[15%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="absolute h-[20px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="checkmark One"
                      />
                    </Stack>
                    <Stack className="bg-orange_50 h-[71px] sm:p-[15px] md:p-[17px] p-[25px] relative w-[15%]">
                      <Img
                        src="images/img_checkmark_20X20.svg"
                        className="absolute h-[20px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="checkmark One One"
                      />
                    </Stack>
                    <Stack className="bg-indigo_51 h-[71px] sm:p-[15px] md:p-[17px] p-[25px] relative w-[15%]">
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="absolute h-[20px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="checkmark Two One"
                      />
                    </Stack>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly my-[0] w-[100%]">
                    <Stack className="bg-bluegray_50 h-[71px] relative sm:w-[100%] w-[56%]">
                      <Text
                        className="absolute h-[max-content] inset-y-[0] left-[3%] my-[auto] not-italic text-gray_900 w-[auto]"
                        variant="body4"
                      >
                        可以优先或以优惠价格参加联盟组织的各项会议、活动
                      </Text>
                      <Text
                        className="absolute bg-bluegray_50 not-italic sm:p-[15px] md:pl-[13px] pl-[20px] md:pr-[24px] pr-[35px] md:py-[18px] py-[27px] text-gray_900 w-[634px]"
                        variant="body4"
                      >
                        可以优先或以优惠价格参加联盟组织的各项会议、活动
                      </Text>
                    </Stack>
                    <Stack className="bg-bluegray_51 h-[71px] sm:p-[15px] md:p-[17px] p-[25px] relative w-[15%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="absolute h-[20px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="checkmark Two"
                      />
                    </Stack>
                    <Stack className="bg-orange_50 h-[71px] sm:p-[15px] md:p-[17px] p-[25px] relative w-[15%]">
                      <Img
                        src="images/img_checkmark_20X20.svg"
                        className="absolute h-[20px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="checkmark One Two"
                      />
                    </Stack>
                    <Stack className="bg-indigo_51 h-[71px] sm:p-[15px] md:p-[17px] p-[25px] relative w-[15%]">
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="absolute h-[20px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="checkmark Two Two"
                      />
                    </Stack>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly my-[0] w-[100%]">
                    <Text
                      className="bg-bluegray_50 not-italic sm:p-[15px] md:pl-[13px] pl-[20px] md:pr-[24px] pr-[35px] md:py-[18px] py-[27px] text-gray_900 w-[634px]"
                      variant="body4"
                    >
                      可以优先获得联盟提供的免费服务
                    </Text>
                    <Stack className="bg-bluegray_51 h-[71px] sm:p-[15px] md:p-[17px] p-[25px] relative w-[15%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="absolute h-[20px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="checkmark Three"
                      />
                    </Stack>
                    <Stack className="bg-orange_50 h-[71px] sm:p-[15px] md:p-[17px] p-[25px] relative w-[15%]">
                      <Img
                        src="images/img_checkmark_20X20.svg"
                        className="absolute h-[20px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="checkmark One Three"
                      />
                    </Stack>
                    <Stack className="bg-indigo_51 h-[71px] sm:p-[15px] md:p-[17px] p-[25px] relative w-[15%]">
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="absolute h-[20px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="checkmark Two Three"
                      />
                    </Stack>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly my-[0] w-[100%]">
                    <Text
                      className="bg-bluegray_50 not-italic sm:p-[15px] md:pl-[13px] pl-[20px] md:pr-[24px] pr-[35px] md:py-[18px] py-[27px] text-gray_900 w-[634px]"
                      variant="body4"
                    >
                      可以优惠价格获得联盟提供的有偿服务
                    </Text>
                    <Stack className="bg-bluegray_51 h-[71px] sm:p-[15px] md:p-[17px] p-[25px] relative w-[15%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="absolute h-[20px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="checkmark Four"
                      />
                    </Stack>
                    <Stack className="bg-orange_50 h-[71px] sm:p-[15px] md:p-[17px] p-[25px] relative w-[15%]">
                      <Img
                        src="images/img_checkmark_20X20.svg"
                        className="absolute h-[20px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="checkmark One Four"
                      />
                    </Stack>
                    <Stack className="bg-indigo_51 h-[71px] sm:p-[15px] md:p-[17px] p-[25px] relative w-[15%]">
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="absolute h-[20px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="checkmark Two Four"
                      />
                    </Stack>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly my-[0] w-[100%]">
                    <Text
                      className="bg-bluegray_50 not-italic sm:p-[15px] md:pl-[13px] pl-[20px] md:pr-[24px] pr-[35px] md:py-[18px] py-[27px] text-gray_900 w-[634px]"
                      variant="body4"
                    >
                      可以提名TOC顾问
                    </Text>
                    <Stack className="bg-bluegray_51 h-[71px] sm:p-[15px] md:p-[17px] p-[25px] relative w-[15%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="absolute h-[20px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="checkmark Five"
                      />
                    </Stack>
                    <Stack className="bg-orange_50 h-[71px] sm:p-[15px] md:p-[17px] p-[25px] relative w-[15%]">
                      <Img
                        src="images/img_checkmark_20X20.svg"
                        className="absolute h-[20px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="checkmark One Five"
                      />
                    </Stack>
                    <Stack className="bg-indigo_51 h-[71px] sm:p-[15px] md:p-[17px] p-[25px] relative w-[15%]">
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="absolute h-[20px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="checkmark Two Five"
                      />
                    </Stack>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly my-[0] w-[100%]">
                    <Text
                      className="bg-bluegray_50 not-italic sm:p-[15px] md:pl-[13px] pl-[20px] md:pr-[24px] pr-[35px] md:py-[18px] py-[27px] text-gray_900 w-[634px]"
                      variant="body4"
                    >
                      可有机会提名理事，进入理事会参与联盟决策
                    </Text>
                    <Column className="bg-bluegray_51 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[23px] p-[34px] sm:w-[100%] w-[15%]">
                      <div className="bg-bluegray_300 sm:h-[2px] h-[3px] w-[18%]"></div>
                    </Column>
                    <Stack className="bg-orange_50 h-[71px] sm:p-[15px] md:p-[17px] p-[25px] relative w-[15%]">
                      <Img
                        src="images/img_checkmark_20X20.svg"
                        className="absolute h-[20px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="checkmark Six"
                      />
                    </Stack>
                    <Stack className="bg-indigo_51 h-[71px] sm:p-[15px] md:p-[17px] p-[25px] relative w-[15%]">
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="absolute h-[20px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="checkmark One Six"
                      />
                    </Stack>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly my-[0] w-[100%]">
                    <Text
                      className="bg-bluegray_50 not-italic sm:p-[15px] md:pl-[13px] pl-[20px] md:pr-[24px] pr-[35px] md:py-[18px] py-[27px] text-gray_900 w-[634px]"
                      variant="body4"
                    >
                      可有资格创建工作组
                    </Text>
                    <Column className="bg-bluegray_51 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[23px] p-[34px] sm:w-[100%] w-[15%]">
                      <div className="bg-bluegray_300 sm:h-[2px] h-[3px] w-[18%]"></div>
                    </Column>
                    <Stack className="bg-orange_50 h-[71px] sm:p-[15px] md:p-[17px] p-[25px] relative w-[15%]">
                      <Img
                        src="images/img_checkmark_20X20.svg"
                        className="absolute h-[20px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="checkmark Seven"
                      />
                    </Stack>
                    <Stack className="bg-indigo_51 h-[71px] sm:p-[15px] md:p-[17px] p-[25px] relative w-[15%]">
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="absolute h-[20px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="checkmark One Seven"
                      />
                    </Stack>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly my-[0] w-[100%]">
                    <Text
                      className="bg-bluegray_50 not-italic sm:p-[15px] md:pl-[13px] pl-[20px] md:pr-[24px] pr-[35px] md:py-[18px] py-[27px] text-gray_900 w-[634px]"
                      variant="body4"
                    >
                      可推荐联盟工作组的负责人
                    </Text>
                    <Column className="bg-bluegray_51 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[23px] p-[34px] sm:w-[100%] w-[15%]">
                      <div className="bg-bluegray_300 sm:h-[2px] h-[3px] w-[18%]"></div>
                    </Column>
                    <Stack className="bg-orange_50 h-[71px] sm:p-[15px] md:p-[17px] p-[25px] relative w-[15%]">
                      <Img
                        src="images/img_checkmark_20X20.svg"
                        className="absolute h-[20px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="checkmark Eight"
                      />
                    </Stack>
                    <Stack className="bg-indigo_51 h-[71px] sm:p-[15px] md:p-[17px] p-[25px] relative w-[15%]">
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="absolute h-[20px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="checkmark One Eight"
                      />
                    </Stack>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly my-[0] w-[100%]">
                    <Text
                      className="bg-bluegray_50 not-italic sm:p-[15px] md:pl-[13px] pl-[20px] md:pr-[24px] pr-[35px] md:py-[18px] py-[27px] text-gray_900 w-[634px]"
                      variant="body4"
                    >
                      可有更多机会提名理事
                    </Text>
                    <Column className="bg-bluegray_51 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[23px] p-[34px] sm:w-[100%] w-[15%]">
                      <div className="bg-bluegray_300 sm:h-[2px] h-[3px] w-[18%]"></div>
                    </Column>
                    <Column className="bg-orange_50 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[23px] p-[34px] sm:w-[100%] w-[15%]">
                      <div className="bg-yellow_900 sm:h-[2px] h-[3px] w-[18%]"></div>
                    </Column>
                    <Stack className="bg-indigo_51 h-[71px] sm:p-[15px] md:p-[17px] p-[25px] relative w-[15%]">
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="absolute h-[20px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="checkmark Nine"
                      />
                    </Stack>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly my-[0] w-[100%]">
                    <Text
                      className="bg-bluegray_50 not-italic sm:p-[15px] md:pl-[13px] pl-[20px] md:pr-[24px] pr-[35px] md:py-[18px] py-[27px] text-gray_900 w-[634px]"
                      variant="body4"
                    >
                      可优先推荐联盟工作组的负责人
                    </Text>
                    <Column className="bg-bluegray_51 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[23px] p-[34px] sm:w-[100%] w-[15%]">
                      <div className="bg-bluegray_300 sm:h-[2px] h-[3px] w-[18%]"></div>
                    </Column>
                    <Column className="bg-orange_50 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[23px] p-[34px] sm:w-[100%] w-[15%]">
                      <div className="bg-yellow_900 sm:h-[2px] h-[3px] w-[18%]"></div>
                    </Column>
                    <Stack className="bg-indigo_51 h-[71px] sm:p-[15px] md:p-[17px] p-[25px] relative w-[15%]">
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="absolute h-[20px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="checkmark Ten"
                      />
                    </Stack>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly my-[0] w-[100%]">
                    <Text
                      className="bg-bluegray_50 not-italic sm:p-[15px] md:pl-[13px] pl-[20px] md:pr-[24px] pr-[35px] md:py-[18px] py-[27px] text-gray_900 w-[634px]"
                      variant="body4"
                    >
                      可优先在联盟开展的各项活动中享有宣传展示机会
                    </Text>
                    <Column className="bg-bluegray_51 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[23px] p-[34px] sm:w-[100%] w-[15%]">
                      <div className="bg-bluegray_300 sm:h-[2px] h-[3px] w-[18%]"></div>
                    </Column>
                    <Column className="bg-orange_50 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[23px] p-[34px] sm:w-[100%] w-[15%]">
                      <div className="bg-yellow_900 sm:h-[2px] h-[3px] w-[18%]"></div>
                    </Column>
                    <Stack className="bg-indigo_51 h-[71px] sm:p-[15px] md:p-[17px] p-[25px] relative w-[15%]">
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="absolute h-[20px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="checkmark Eleven"
                      />
                    </Stack>
                  </Row>
                </List>
                <Column className="bg-teal_50 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[17px] p-[25px] sm:w-[100%] w-[13%]">
                  <Text
                    className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mb-[379px] md:mb-[489px] mb-[712px] sm:mx-[0] not-italic text-teal_400 sm:w-[100%] w-[94%]"
                    variant="body4"
                  >
                    所享权益根据对联盟贡献程度对标白银/黄金/白金会员单位
                  </Text>
                </Column>
              </Row>
            </Column>
          </Column>
          <List
            className="md:gap-[104px] gap-[152px] sm:gap-[80px] grid max-w-[1380px] min-h-[auto] ml-[auto] mr-[auto] md:mt-[104px] mt-[152px] sm:mt-[80px] sm:pl-[15px] sm:pr-[15px] w-[100%]"
            orientation="vertical"
          >
            <Stack className="h-[509px] relative w-[100%]">
              <Column className="absolute bg-gray_53 bottom-[0] flex flex-col justify-start sm:p-[15px] md:p-[27px] p-[40px] w-[100%]">
                <Column className="flex flex-col items-center justify-start md:ml-[13px] ml-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                  <Text
                    className="not-italic text-black_900 w-[auto]"
                    variant="body1"
                  >
                    捐赠联络：####@opensdv.org
                  </Text>
                </Column>
              </Column>
              <Stack
                className="absolute bg-cover bg-no-repeat h-[464px] right-[0] top-[0] sm:w-[100%] w-[50%]"
                style={{
                  backgroundImage: "url('images/img_maskgroup_203X203.png')",
                }}
              >
                <Img
                  src="images/img_maskgroup_3.png"
                  className="absolute h-[464px] max-w-[100%] w-[100%]"
                  alt="image130"
                />
              </Stack>
              <Column className="absolute flex flex-col justify-start left-[4%] sm:mx-[0] sm:px-[0] top-[0] sm:w-[100%] w-[26%]">
                <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                  <Line className="bg-teal_400 h-[4px] sm:w-[100%] w-[64%]" />
                  <Text
                    className="sm:mt-[17px] md:mt-[22px] mt-[32px] text-gray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    合作
                  </Text>
                </Column>
                <Column className="flex flex-col items-center justify-start sm:mt-[27px] md:mt-[35px] mt-[52px] w-[100%]">
                  <Text className="text-gray_900 w-[auto]" variant="body4">
                    针对联盟的特定项目、活动、计划与联盟开展合作。
                  </Text>
                </Column>
              </Column>
            </Stack>
            <Stack className="h-[509px] relative w-[100%]">
              <Column className="absolute bg-gray_53 bottom-[0] flex flex-col items-end justify-start sm:p-[15px] md:p-[27px] p-[40px] w-[100%]">
                <Column className="flex flex-col items-center justify-start md:mr-[154px] mr-[224px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                  <Text
                    className="not-italic text-black_900 w-[auto]"
                    variant="body1"
                  >
                    捐赠联络：####@opensdv.org
                  </Text>
                </Column>
              </Column>
              <Column
                className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[4%] sm:mx-[0] top-[0] sm:w-[100%] w-[50%]"
                style={{
                  backgroundImage: "url('images/img_maskgroup_203X203.png')",
                }}
              >
                <Stack
                  className="bg-cover bg-no-repeat h-[464px] relative w-[100%]"
                  style={{ backgroundImage: "url('images/img_group60.png')" }}
                >
                  <Img
                    src="images/img_image132_464X686.png"
                    className="absolute h-[464px] max-w-[100%] w-[100%]"
                    alt="image132"
                  />
                </Stack>
              </Column>
              <Column className="absolute flex flex-col justify-start sm:mx-[0] sm:px-[0] right-[16%] top-[0] sm:w-[100%] w-[26%]">
                <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                  <Line className="bg-teal_400 h-[4px] w-[32%]" />
                  <Text
                    className="sm:mt-[17px] md:mt-[22px] mt-[32px] text-gray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    社区贡献
                  </Text>
                </Column>
                <Column className="flex flex-col items-center justify-start sm:mt-[27px] md:mt-[35px] mt-[52px] w-[100%]">
                  <Text className="text-gray_900 w-[auto]" variant="body4">
                    开发者参与开源社区代码贡献或其他开源社区建设
                  </Text>
                </Column>
              </Column>
            </Stack>
            <Stack className="h-[509px] relative w-[100%]">
              <Column className="absolute bg-gray_53 bottom-[0] flex flex-col justify-start sm:p-[15px] md:p-[27px] p-[40px] w-[100%]">
                <Column className="flex flex-col items-center justify-start md:ml-[13px] ml-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                  <Text
                    className="not-italic text-black_900 w-[auto]"
                    variant="body1"
                  >
                    捐赠联络：####@opensdv.org
                  </Text>
                </Column>
              </Column>
              <Img
                src="images/img_maskgroup_2.png"
                className="absolute h-[464px] max-w-[100%] right-[0] top-[0] sm:w-[100%] w-[50%]"
                alt="image134"
              />
              <Column className="absolute flex flex-col justify-start left-[4%] sm:mx-[0] sm:px-[0] top-[0] sm:w-[100%] w-[27%]">
                <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                  <Line className="bg-teal_400 h-[4px] sm:w-[100%] w-[43%]" />
                  <Text
                    className="sm:mt-[17px] md:mt-[22px] mt-[32px] text-gray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    志愿者
                  </Text>
                </Column>
                <Column className="flex flex-col items-center justify-start sm:mt-[27px] md:mt-[35px] mt-[52px] w-[100%]">
                  <Text className="text-gray_900 w-[auto]" variant="body4">
                    以志愿者身份参与联盟活动或工作组、项目社区活动。
                  </Text>
                </Column>
              </Column>
            </Stack>
          </List>
          <Button
            className="cursor-pointer font-normal sm:mt-[13px] md:mt-[17px] mt-[25px] text-[12px] text-center text-white_A700 w-[100%]"
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

export default I04Page;
