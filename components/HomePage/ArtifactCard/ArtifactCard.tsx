import React from "react";
import CardBase from "../../../ui/CardBase/CardBase";
import { cn } from "../../../utils/cn";
import { css } from "@emotion/css";

import Book1Icon from "./images/book1.png";
import Image from "next/image";

export default function ArtifactCard() {
  return (
    <CardBase>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="flex">
            {/* artifact icon */}
            <div>
              <Image src={Book1Icon} width={72} height={72} alt="" />
            </div>
            <div className="flex flex-col">
              {/* title */}
              <span>「自由」的教导</span>
              {/* description */}
              <span>忘却之峡</span>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </CardBase>
  );
}

const stlyes = {};
