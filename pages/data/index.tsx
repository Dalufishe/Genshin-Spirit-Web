import { NextPage } from "next";
import MainContainer from "../../components/MainContainer";
import Tabbar from "../../layouts/Tabbar/Tabbar";
import Navbar from "../../layouts/GameDataPage/Navbar/Navbar";

const DataPage: NextPage = () => {
  return (
    <MainContainer>
      <Navbar />
      <Tabbar />
    </MainContainer>
  );
};
export default DataPage;
