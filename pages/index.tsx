import type { NextPage } from "next";
import Tabbar from "../layouts/Tabbar/Tabbar";
import MainContainer from "../components/MainContainer";

const Home: NextPage = () => {
  return (
    <MainContainer>
      <Tabbar />
    </MainContainer>
  );
};

export default Home;
