import { NextPage } from "next";
import MainContainer from "../../components/MainContainer";
import Tabbar from "../../layouts/Tabbar/Tabbar";
import Navbar from "../../layouts/GameDataPage/Navbar/Navbar";
import CharScreen from "../../screens/CharScreen/CharScreen";

const DataPage: NextPage = () => {
  return (
    <MainContainer>
      <Navbar />
      {/* Character */}
      <CharScreen />
      <Tabbar />
    </MainContainer>
  );
};
export default DataPage;
