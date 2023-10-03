import React from "react";
import { cn } from "../../../../utils/cn";
import { css } from "@emotion/css";

export default function CloseBtn() {
  return (
    <div
      className={cn(
        "w-[40px] h-[40px]",
        "rounded-full",
        "flex items-center justify-center",
        css`
          background: #ece5d8;
          border: 2px solid #d3bc8e;
          box-shadow: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.25));
        `
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L4.5836 5.99781L0.292893 10.2885C-0.0976311 10.679 -0.0976311 11.3122 0.292893 11.7027C0.683418 12.0932 1.31658 12.0932 1.70711 11.7027L5.99781 7.41202L10.2881 11.7023C10.6786 12.0928 11.3118 12.0928 11.7023 11.7023C12.0928 11.3118 12.0928 10.6786 11.7023 10.2881L7.41202 5.99781L11.7023 1.70751C12.0928 1.31698 12.0928 0.683818 11.7023 0.293294C11.3118 -0.0972294 10.6786 -0.0972294 10.2881 0.293295L5.99781 4.5836L1.70711 0.292893Z"
          fill="#4D5668"
        />
      </svg>
    </div>
  );
}
