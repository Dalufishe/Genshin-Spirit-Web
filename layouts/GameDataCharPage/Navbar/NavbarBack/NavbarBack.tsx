import React, { useCallback } from "react";
import Image from "next/image";

import BackIcon from "./icons/BackIcon";
import { css } from "@emotion/css";
import { cn } from "../../../../utils/cn";
import { useRouter } from "next/router";

export default function NavbarBack() {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.push("/data");
  }, [router]);

  return (
    <div className="flex items-center gap-2">
      <div onClick={handleBack}>
        <BackIcon />
      </div>
      <div className={styles.divider} />
    </div>
  );
}

const styles = {
  divider: cn(css`
    width: 2px;
    height: 20px;
    flex-shrink: 0;
    border-radius: 2px;
    opacity: 0.2;
    background: #ece5d8;
  `),
};
