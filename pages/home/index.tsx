import type { NextPage } from "next";
import MainContainer from "../../components/MainContainer";
import ContentContainer from "../../components/ContentContainer";
import PlayerCard from "../../components/HomePage/PlayerCard/PlayerCard";
import EventCard from "../../components/HomePage/EventCard/EventCard";
import MaterialCard from "../../components/HomePage/MaterialCard/MaterialCard";
import Tabbar from "../../layouts/Tabbar/Tabbar";
import Navbar from "../../layouts/HomePage/Navbar/Navbar";

const HomePage: NextPage = () => {
  return (
    <MainContainer>
      <Navbar />
      <ContentContainer gap={16} className="pt-[121px] pb-[72px]">
        <PlayerCard />
        <EventCard />
        <MaterialCard />
        <MaterialCard />
        <MaterialCard />
      </ContentContainer>
      <Tabbar />
    </MainContainer>
  );
};

export default HomePage;
