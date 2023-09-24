import { NextPage } from "next";
import { useEffect } from "react";
import Image from "next/image";
import { css } from "@emotion/css";
import { useRouter } from "next/router";
import useRandomScenery from "../hooks/WelcomePage/useRandomScenery";
import { cn } from "../utils/cn";
import Block from "../components/Block";

const WelcomePage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/home");
    }, 1500);
  }, []);

  const random_scenery = useRandomScenery();
  const random_scenery_id = random_scenery?.img_name;
  const random_scenery_title = random_scenery?.title_zh;
  const random_scenery_author = random_scenery?.author;

  return (
    <div className={cn("z-50", "w-screen h-screen", "bg-black", "relative")}>
      {/* Background */}
      {random_scenery_id && (
        <Image
          priority
          className={cn("z-50", "w-screen h-screen", "absolute top-0 bottom-0")}
          src={`/random-scenery/${random_scenery_id}_crop.webp`}
          width={607}
          height={1080}
          alt=""
        />
      )}
      {/* Welcome */}
      <div
        className={cn(
          "z-50",
          "w-full h-[250px]",
          "absolute bottom-0",
          "flex flex-col items-center",
          css`
            background: linear-gradient(
              360deg,
              #fff 0%,
              rgba(255, 255, 255, 0.6) 70.83%,
              rgba(255, 255, 255, 0) 100%
            );
          `
        )}
      >
        <Block value={31} />
        <Image src={"/favicon.ico"} width={48} height={48} alt="" />
        <Block value={18} />
        <p className="text-[20px] text-[#667289]">{random_scenery_title}</p>
        <Block value={12} />
        <p className="text-[16px] text-[#8599A8]">{random_scenery_author}</p>
        <Block value={29} />
        <p className="text-[20px] text-[#495366]">原神小助手</p>
        <p className="text-[12px] text-[#667289]">By {random_scenery_author}</p>
      </div>
    </div>
  );
};

export default WelcomePage;
