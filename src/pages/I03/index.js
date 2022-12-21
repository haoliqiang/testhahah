import React from "react";

import { Column, Row, Img, Line, Text, Stack, Button } from "components";

const I03Page = () => {
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
                    联盟介绍
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
                    className="cursor-pointer font-normal text-[18px] text-teal_400"
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
        <Column className="flex flex-col justify-start sm:mt-[45px] md:mt-[59px] mt-[86px] w-[100%]">
          <Line className="bg-teal_400 h-[4px] max-w-[53px] sm:ml-[31px] md:ml-[41px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]" />
          <Text
            className="sm:ml-[31px] md:ml-[41px] ml-[60px] sm:mt-[17px] md:mt-[22px] mt-[32px] text-gray_900 w-[auto]"
            as="h2"
            variant="h2"
          >
            项目/工作组
          </Text>
          <Column className="flex flex-col items-center justify-start max-w-[1380px] ml-[auto] mr-[auto] sm:mt-[47px] md:mt-[61px] mt-[90px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
              <Stack className="h-[516px] relative sm:w-[100%] w-[57%]">
                <div className="absolute bg-gray_53 bottom-[0] sm:h-[118px] md:h-[152px] h-[220px] w-[100%]"></div>
                <Img
                  src="images/img_image28.png"
                  className="absolute h-[400px] inset-x-[0] max-w-[100%] mx-[auto] top-[0] sm:w-[100%] w-[85%]"
                  alt="imageTwentyEight"
                />
              </Stack>
              <Column className="flex flex-col justify-start sm:mt-[4px] md:mt-[6px] mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
                <Text className="text-gray_900 w-[auto]" as="h3" variant="h3">
                  OPenCar
                </Text>
                <Text
                  className="sm:mt-[11px] md:mt-[14px] mt-[21px] not-italic text-gray_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  下一代智能汽车软件工作组
                </Text>
                <Text
                  className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] mt-[128px] sm:mt-[68px] md:mt-[88px] text-gray_900_90 w-[100%]"
                  variant="body4"
                >
                  目标是设计一套源自中国供应链体系、自主可控、自主演进的汽车软件标准及框架，打造完整国产汽车软件实现，并与国产硬件广泛兼容适配，支持汽车软件的可持续迭代、高性能、高安全、高可靠性发展。其中，主要的底座是自主开源操作系统，主要包括OSEK标准的底层系统，虚拟化Hypervisor以及实时优化的Linux操作系统。
                </Text>
              </Column>
            </Row>
          </Column>
          <Column className="flex flex-col items-center justify-start max-w-[1380px] md:ml-[41px] ml-[auto] mr-[auto] mt-[139px] sm:mt-[74px] md:mt-[95px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
              <Column className="flex flex-col justify-start mt-[12px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
                <Text className="text-gray_900 w-[auto]" as="h3" variant="h3">
                  OPenSafety
                </Text>
                <Text
                  className="mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-gray_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  可信赖安全验证工作组
                </Text>
                <Text
                  className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] mt-[128px] sm:mt-[68px] md:mt-[88px] text-gray_900_90 w-[100%]"
                  variant="body4"
                >
                  目前自动驾驶，智能辅助驾驶从研发、测试到落地，需要进行可靠数据的训练，算法的鲁棒、对抗、蜕变等测试以及可追溯的风险检测和评估等一系列工作，OpenSafty工作组将在可信赖人工智能测试验证平台的基础上，构建更开放的测试平台，通过社区共建的开放场景库不断优化算法，推进人工智能、自动驾驶在产业的可信落地
                </Text>
              </Column>
              <Stack className="h-[516px] relative sm:w-[100%] w-[57%]">
                <div className="absolute bg-gray_53 bottom-[0] sm:h-[118px] md:h-[152px] h-[220px] w-[100%]"></div>
                <Img
                  src="images/img_image29.png"
                  className="absolute h-[400px] inset-x-[0] max-w-[100%] mx-[auto] top-[0] sm:w-[100%] w-[85%]"
                  alt="imageTwentyNine"
                />
              </Stack>
            </Row>
          </Column>
          <Line className="bg-teal_400 h-[4px] max-w-[53px] sm:ml-[31px] md:ml-[41px] ml-[auto] mr-[auto] mt-[139px] sm:mt-[74px] md:mt-[95px] sm:pl-[15px] sm:pr-[15px] w-[100%]" />
          <Text
            className="sm:ml-[31px] md:ml-[41px] ml-[60px] sm:mt-[17px] md:mt-[22px] mt-[32px] text-gray_900 w-[auto]"
            as="h2"
            variant="h2"
          >
            社区活动
          </Text>
          <Column className="flex flex-col items-center justify-start max-w-[1380px] ml-[auto] mr-[auto] sm:mt-[47px] md:mt-[61px] mt-[90px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
              <Stack
                className="bg-cover bg-no-repeat h-[620px] relative w-[37%]"
                style={{
                  backgroundImage: "url('images/img_maskgroup_620X510.png')",
                }}
              >
                <Img
                  src="images/img_image118_620X510.png"
                  className="absolute h-[620px] max-w-[100%] w-[100%]"
                  alt="image118"
                />
              </Stack>
              <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[62%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Stack className="h-[291px] sm:mt-[3px] md:mt-[4px] mt-[7px] relative w-[36%]">
                    <Img
                      src="images/img_image44.png"
                      className="absolute h-[291px] max-w-[100%] w-[100%]"
                      alt="image116"
                    />
                  </Stack>
                  <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
                    <Text
                      className="text-gray_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      汽车基础软件创新大会
                    </Text>
                    <Text
                      className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[22px] md:mt-[28px] mt-[42px] text-bluegray_900_90 w-[100%]"
                      variant="body4"
                    >
                      在乘用车领域，毫末智行在短短2年多的时间内，从无到有推出了三代乘用车辅助驾驶产品HPilot，两年6次OTA升级，实现搭载超过十款乘用车型量产落地，同时并行30个项目异步开发。
                    </Text>
                  </Column>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-end sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                  <Img
                    src="images/img_image117.png"
                    className="sm:h-[159px] md:h-[206px] h-[298px] max-w-[100%] sm:w-[158px] md:w-[205px] w-[298px]"
                    alt="image117"
                  />
                  <Column className="flex flex-col justify-start md:ml-[41px] ml-[60px] sm:mt-[124px] md:mt-[161px] mt-[234px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
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
                </Row>
              </Column>
            </Row>
          </Column>
          <Column className="flex flex-col items-center justify-start max-w-[1380px] md:ml-[41px] ml-[auto] mr-[auto] md:mt-[101px] mt-[148px] sm:mt-[78px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
              <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[62%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
                    <Text
                      className="text-gray_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      汽车基础软件创新大会
                    </Text>
                    <Text
                      className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[22px] md:mt-[28px] mt-[42px] text-bluegray_900_90 w-[100%]"
                      variant="body4"
                    >
                      包括魏牌摩卡、魏牌拿铁、魏牌玛奇朵、坦克300、坦克500、哈弗神兽、拿铁DHT-PHEV等在内的上市车型，均已完成上车搭载。此外摩卡DHT-PHEV激光雷达版、欧拉闪电猫、欧拉芭蕾猫、全新一代长城炮等则正在陆续交付。
                    </Text>
                  </Column>
                  <Stack className="h-[298px] relative sm:w-[158px] md:w-[205px] w-[298px]">
                    <Img
                      src="images/img_image44.png"
                      className="absolute h-[291px] max-w-[100%] top-[2%] w-[100%]"
                      alt="image116 One"
                    />
                    <Img
                      src="images/img_image45_298X298.png"
                      className="absolute h-[298px] max-w-[100%] sm:w-[158px] md:w-[205px] w-[298px]"
                      alt="imageFortyFive"
                    />
                  </Stack>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-end justify-between sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]">
                  <Column className="flex flex-col justify-start sm:mt-[124px] md:mt-[161px] mt-[234px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[21%]">
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
                  <Stack
                    className="bg-cover bg-no-repeat h-[298px] relative sm:w-[158px] md:w-[205px] w-[298px]"
                    style={{
                      backgroundImage: "url('images/img_image117.png')",
                    }}
                  >
                    <Img
                      src="images/img_image120.png"
                      className="absolute h-[298px] max-w-[100%] sm:w-[158px] md:w-[205px] w-[298px]"
                      alt="image120"
                    />
                  </Stack>
                </Row>
              </Column>
              <Img
                src="images/img_image43.png"
                className="max-w-[100%] w-[37%]"
                alt="imageFortyThree"
              />
            </Row>
          </Column>
          <Column className="flex flex-col items-center justify-start max-w-[1380px] ml-[auto] mr-[auto] md:mt-[101px] mt-[148px] sm:mt-[78px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
              <Column
                className="bg-cover bg-no-repeat flex flex-col items-center sm:mx-[0] sm:w-[100%] w-[37%]"
                style={{ backgroundImage: "url('images/img_maskgroup_6.png')" }}
              >
                <Column
                  className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
                  style={{ backgroundImage: "url('images/img_group61.png')" }}
                >
                  <Stack
                    className="bg-cover bg-no-repeat h-[620px] relative w-[100%]"
                    style={{ backgroundImage: "url('images/img_group62.png')" }}
                  >
                    <Img
                      src="images/img_image123.png"
                      className="absolute h-[620px] max-w-[100%] w-[100%]"
                      alt="image123"
                    />
                  </Stack>
                </Column>
              </Column>
              <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[62%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Stack className="h-[298px] relative sm:w-[158px] md:w-[205px] w-[298px]">
                    <Img
                      src="images/img_image44.png"
                      className="absolute h-[291px] max-w-[100%] top-[2%] w-[100%]"
                      alt="image116 Two"
                    />
                    <Img
                      src="images/img_image122.png"
                      className="absolute h-[298px] max-w-[100%] sm:w-[158px] md:w-[205px] w-[298px]"
                      alt="image122"
                    />
                  </Stack>
                  <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
                    <Text
                      className="text-gray_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      汽车基础软件创新大会
                    </Text>
                    <Text
                      className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[22px] md:mt-[28px] mt-[42px] text-bluegray_900_90 w-[100%]"
                      variant="body4"
                    >
                      “自动驾驶是未来5年，AI领域最具挑战和最复杂的任务，也是推动全球汽车工业变革最重要的技术力量。尽管自动驾驶已经取得突破性进展，但目前还有不少挑战，特别是感知的鲁棒性和可泛化性、驾驶行为决策的准确度和整体系统的安全性。”9月13日，在第六届HAOMO
                      AI
                      DAY上，中国工程院院士、清华大学教授、清华智能产业研究院院长张亚勤，分享了对自动驾驶的思考。
                    </Text>
                  </Column>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-end sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                  <Stack
                    className="bg-cover bg-no-repeat h-[298px] relative sm:w-[158px] md:w-[205px] w-[298px]"
                    style={{
                      backgroundImage: "url('images/img_image117.png')",
                    }}
                  >
                    <Img
                      src="images/img_image124.png"
                      className="absolute h-[298px] max-w-[100%] sm:w-[158px] md:w-[205px] w-[298px]"
                      alt="image124"
                    />
                  </Stack>
                  <Column className="flex flex-col justify-start md:ml-[41px] ml-[60px] sm:mt-[124px] md:mt-[161px] mt-[234px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
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
                      className="sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-gray_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      2022/10/20
                    </Text>
                  </Column>
                </Row>
              </Column>
            </Row>
          </Column>
          <Button
            className="cursor-pointer font-normal md:mt-[108px] mt-[158px] sm:mt-[84px] text-[12px] text-center text-white_A700 w-[100%]"
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

export default I03Page;
