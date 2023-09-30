import { css } from "@emotion/css";
import { cn } from "../../../utils/cn";
import NavbarBack from "./NavbarBack/NavbarBack";
import NavbarTabs from "./NavbrTabs/NavbarTabs";

export default function Navbar() {
  return (
    <div className={cn(styles.navbar, "h-[105px]")}>
      <div className="translate-y-[-7px]">
        <NavbarBack />
      </div>
      <div className="translate-y-[-7px]">
        <NavbarTabs />
      </div>
    </div>
  );
}
const styles = {
  navbar: cn(
    "z-50",
    "fixed",
    "w-full",
    "px-[17px]",
    "flex justify-between items-end",
    css`
      background: linear-gradient(
        180deg,
        #4d5668 21.88%,
        rgba(77, 86, 104, 0.81) 100%
      );
      box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
    `
  ),
};
