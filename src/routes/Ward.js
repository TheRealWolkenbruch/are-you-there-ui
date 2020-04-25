import React from "react";
import BondsTable from "./../components/BondsTable";
import styled from "styled-components";

const Header1 = styled.h1`
  font-size: 45px;
  padding-left: 10px;
  font-weight: 800;
  margin-bottom: 50px;
`;

const Ward = ({ match }) => {
  const name = match.params.name;
  return (
    <>
      <Header1>The bonds for {name} ⏰</Header1>
      <BondsTable />
    </>
  );
};
export default Ward;
