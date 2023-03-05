import React from "react";
import styled from "styled-components";
import Header from "./pages/Header";
import Introduce from "./pages/Introduction";
import Activity from "./pages/Activity";
import Curriculum from "./pages/Curriculum";
import Prize from "./pages/Prize";
import Histroy from "./pages/History";
import List from "./pages/List";
import Footer from "./pages/Footer";
import GlobalStyles from "./globalStyles";
// import Work from "./pages/Work"
const Container = styled.div`
  min-width: 1920px;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Container />
      <Header />
      <Introduce />
      <Activity />
      <Curriculum />
      <Prize />
      {/* <Work /> */}
      <Histroy />
      <List />
      <Footer />
    </>
  );
};

export default App;
