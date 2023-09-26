import React from "react";

type Props = {
  type: "A" | "B";
};

export default function ArtifactIcon(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="28"
      viewBox="0 0 21 28"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.15 0C9.91257 0.4168 9.29526 1.3933 8.72544 1.96491C8.15561 2.53652 7.18216 3.27485 6.76667 3.57257L8.72544 5.18022C7.77573 5.35885 5.56749 5.98088 3.93238 7.49495C2.40675 8.90764 2.08401 10.5856 1.87598 11.6672C1.79061 12.1111 1.72456 12.4545 1.60263 12.638C1.31288 13.0739 0.924114 13.3397 0.602051 13.5598C0.264359 13.7906 0 13.9713 0 14.2456C0 14.5643 0.656111 14.5737 1.23668 14.582C1.43704 14.5849 1.62841 14.5876 1.7807 14.6029C1.7807 15.496 1.99834 17.1037 3.38333 18.89C4.76832 20.6762 7.71637 21.5694 8.72544 21.748L6.76667 22.2839C7.18216 22.5816 8.15561 23.4271 8.72544 24.4274C9.04286 24.9847 9.26892 25.7547 9.46929 26.4373C9.71855 27.2864 9.92805 28 10.2242 28C10.5263 28 10.7619 27.2575 11.0385 26.3861C11.251 25.7165 11.4876 24.9708 11.7971 24.4274C12.367 23.4271 13.3404 22.5816 13.7559 22.2839L11.7971 21.748C12.8062 21.5694 15.314 20.6762 16.7386 18.89C18.0616 17.2311 18.5193 15.496 18.5193 14.6029C18.6716 14.5876 18.863 14.5849 19.0633 14.582C19.6439 14.5737 20.3 14.5643 20.3 14.2456C20.3 13.9865 19.967 13.8109 19.5626 13.5977C19.1306 13.37 18.6171 13.0993 18.3412 12.638C18.2288 12.4501 18.1963 12.1131 18.1545 11.6798C18.0518 10.6147 17.8929 8.96774 16.3528 7.52472C14.7266 6.00104 12.7469 5.35885 11.7971 5.18022L13.7559 3.57257C13.3404 3.27485 12.367 2.53652 11.7971 1.96491C11.2273 1.3933 10.3874 0.4168 10.15 0ZM10.1555 7.69997C10.0316 8.45552 9.4124 10.3066 7.92626 11.6666C6.44013 13.0266 4.94307 13.7444 4.2 13.9333C5.12883 13.9963 6.88597 14.7644 7.92626 15.8222C8.96656 16.88 9.84585 18.6555 10.1555 19.6C10.1881 19.4839 10.2211 19.3538 10.257 19.2126C10.4934 18.2823 10.8518 16.8718 12.0131 15.8222C13.3507 14.6133 15.4808 13.9333 16.1 13.9333C15.4189 13.7444 13.202 13.0266 12.0131 11.6666C11.1007 10.6229 10.677 9.28983 10.3893 8.38478C10.3021 8.11057 10.2275 7.87565 10.1555 7.69997Z"
        fill={props.type === "A" ? "#4D5668" : "#ECE5D8"}
      />
    </svg>
  );
}
