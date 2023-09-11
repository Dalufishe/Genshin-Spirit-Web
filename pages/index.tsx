import type { NextPage } from "next";
import Tabbar from "../layouts/Tabbar/Tabbar";
import MainContainer from "../components/MainContainer";
import Navbar from "../layouts/Navbar/Navbar";
import PlayerCard from "../components/HomePage/PlayerCard/PlayerCard";
import ContentContainer from "../components/ContentContainer";

const Home: NextPage = () => {
  return (
    <MainContainer>
      <Navbar />
      <ContentContainer>
        <PlayerCard />
      </ContentContainer>
      <Tabbar />
    </MainContainer>
  );
};

export default Home;
