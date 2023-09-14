import type { NextPage } from "next";
import Tabbar from "../layouts/Tabbar/Tabbar";
import MainContainer from "../components/MainContainer";
import Navbar from "../layouts/Navbar/Navbar";
import PlayerCard from "../components/HomePage/PlayerCard/PlayerCard";
import ContentContainer from "../components/ContentContainer";
import EventCard from "../components/HomePage/EventCard/EventCard";
import MaterialCard from "../components/HomePage/MaterialCard/MaterialCard";

const Home: NextPage = () => {
  return (
    <MainContainer>
      <Navbar />
      <ContentContainer gap={16}>
        <PlayerCard />
        <EventCard />
        <MaterialCard />
      </ContentContainer>
      <Tabbar />
    </MainContainer>
  );
};

export default Home;
