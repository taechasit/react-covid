import React from "react";
import styled from "styled-components";

import Navbar from "../Components/Navbar/Navbar";



const Layout = ({children}) => {
  return (
    <React.Fragment>
      <Navbar />
      <LayoutMain>{children}</LayoutMain>
    </React.Fragment>
  );
};

const LayoutMain = styled.main`
  background-color: #ececec;
`;

export default Layout;
