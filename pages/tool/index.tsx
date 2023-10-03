import { NextPage } from "next";
import MainContainer from "../../components/MainContainer";
import Tabbar from "../../layouts/Tabbar/Tabbar";
import TopUserCard from "../../components/ToolPage/TopUserCard/TopUserCard";
import ContentContainer from "../../components/ContentContainer";
import ToolCard from "../../components/ToolPage/ToolCard/ToolCard";

import A from "../../assets/icons/tools/計算器.svg";
import B from "../../assets/icons/tools/每日签到.svg";
import C from "../../assets/icons/tools/地圖.svg";
import D from "../../assets/icons/tools/提醒.svg";
import E from "../../assets/icons/tools/设置.svg";
import F from "../../assets/icons/tools/關於.svg";
import G from "../../assets/icons/tools/分享.svg";
import { cn } from "../../utils/cn";
import { css } from "@emotion/css";

const tools = [
  { title: "計算器", icon: A },
  { title: "每日簽到", icon: B },
  { title: "互动地图", icon: C },
  { title: "提醒", icon: D },
  { title: "设置", icon: E },
  { title: "關於", icon: F },
  { title: "分享", icon: G },
];

const ToolPage: NextPage = () => {
  return (
    <MainContainer>
      <TopUserCard />
      <ContentContainer className={cn(styles.content)}>
        {tools.map((t) => (
          <ToolCard {...t} />
        ))}
      </ContentContainer>
      <Tabbar />
    </MainContainer>
  );
};

const styles = {
  content: cn(
    "p-[10px] pt-[15px] flex-row flex-wrap gap-2",
    css`
      background: linear-gradient(
        180deg,
        #ece5d8 0%,
        rgba(236, 229, 216, 0) 100%
      );
    `
  ),
};

export default ToolPage;
