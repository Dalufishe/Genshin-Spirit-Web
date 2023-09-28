import { css } from "@emotion/css";
import { cn } from "../../../utils/cn";

export default {
  // 風
  anemo: {
    charCard: cn(css`
      border: 0px solid rgba(0, 63, 47, 0.1);
      background: linear-gradient(
        180deg,
        #cafff2 0%,
        #fcfffe 99.99%,
        #fff 100%
      );
      box-shadow: 0px 4.225px 52.8125px 0px rgba(0, 0, 0, 0.1);
    `),
  },
  // 火
  pyro: {
    charCard: cn(css`
      border: 0px solid rgba(96, 26, 27, 0.1);
      background: linear-gradient(
        180deg,
        #ffdfe0 0%,
        #fcfffe 99.99%,
        #fee 100%
      );
      box-shadow: 0px 4.225px 52.8125px 0px rgba(0, 0, 0, 0.1);
    `),
  },
  // 冰
  cryo: {
    charCard: cn(css`
      border: 0px solid rgba(135, 231, 235, 0.1);
      background: linear-gradient(
        180deg,
        #c9fafc 0%,
        #fcfffe 99.99%,
        #fff 100%
      );
      box-shadow: 0px 4.2px 52.5px 0px rgba(0, 0, 0, 0.1);
    `),
  },
  // 草
  dendro: {
    charCard: cn(css`
      border: 0px solid rgba(96, 26, 27, 0.1);
      background: linear-gradient(
        180deg,
        #e5ffca 0%,
        #fcfffe 99.99%,
        #f9fff3 100%
      );

      /* drop shadow */
      box-shadow: 0px 20px 250px 0px rgba(0, 0, 0, 0.1);
    `),
  },
  // 水
  hydro: {
    charCard: cn(css`
      border: 0px solid rgba(96, 26, 27, 0.1);
      background: linear-gradient(
        180deg,
        #bce6ff 0%,
        #fcfffe 99.99%,
        #f7fcff 100%
      );
      box-shadow: 0px 4.2px 52.5px 0px rgba(0, 0, 0, 0.1);
    `),
  },
  // 電
  electro: {
    charCard: cn(css`
      border: 0px solid rgba(96, 26, 27, 0.1);
      background: linear-gradient(
        180deg,
        #e0c7f1 0%,
        #fcfffe 99.99%,
        #f8efff 100%
      );

      /* drop shadow */
      box-shadow: 0px 20px 250px 0px rgba(0, 0, 0, 0.1);
    `),
  },
  geo: {
    charCard: cn(css`
      border: 0px solid rgba(96, 26, 27, 0.1);
      background: linear-gradient(
        180deg,
        #ffe7a9 0%,
        #fcfffe 99.99%,
        #fffaec 100%
      );

      /* drop shadow */
      box-shadow: 0px 20px 250px 0px rgba(0, 0, 0, 0.1);
    `),
  },
};
