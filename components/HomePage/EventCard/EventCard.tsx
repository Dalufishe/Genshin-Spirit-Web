import React from "react";
import CardBase from "../../../ui/CardBase/CardBase";
import { cn } from "../../../utils/cn";

import CuteImage from "./images/cute.png";
import EventCardLeft from "./EventCardLeft/EventCardLeft";
import EventCardItem from "./EventCardItem/EventCardItem";
import CardBaseDivider from "../../../ui/CardBase/CardBaseDivider/CardBaseDivider";
import { css } from "@emotion/css";

export default function EventCard() {
  return (
    <CardBase
      className={cn(css`
        background: linear-gradient(
          180deg,
          #ece5d8 0%,
          rgba(236, 229, 216, 0.8) 100%
        );
      `)}
    >
      <div className="flex">
        {/* left */}
        <EventCardLeft />
        <CardBaseDivider width={104} type="dash" direction="vertical" />
        {/* Right (List) */}
        <div
          className={cn(
            "flex flex-col flex-grow",
            "gap-[12px]",
            "ml-[13px] mt-[2px] mr-[7px]"
          )}
        >
          <EventCardItem title="风沙轰鸣" value="4" />
          <EventCardItem title="「翩舞歈莲」祈愿" value="6" />
          <EventCardItem title="风沙轰鸣" value="6" />
          <EventCardItem title="「翩舞歈莲」祈愿" value="6" />
        </div>
      </div>
    </CardBase>
  );
}
