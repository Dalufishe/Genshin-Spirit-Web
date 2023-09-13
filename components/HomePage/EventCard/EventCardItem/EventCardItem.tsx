import React from "react";
import { cn } from "../../../../utils/cn";
import { css } from "@emotion/css";

type Props = {
  title: string;
  value: string;
};

export default function EventCardItem(props: Props) {
  return (
    <div className={styles.eventCardItem}>
      <span>{props.title}</span>
      <div className="flex gap-[9px]">
        <span>{props.value}</span>
        <span>天</span>
      </div>
    </div>
  );
}

const styles = {
  eventCardItem: cn(
    "flex justify-between",
    css`
      color: #4d5668;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    `
  ),
};
