import React from 'react';
import BondsTable from './../components/BondsTable';

const Ward = ({match}) => {
  const name = match.params.name;
  return(
    <>
    <h1>The bonds for {name} ⏰</h1>
    <BondsTable/>
    </>
)}
export default Ward;
