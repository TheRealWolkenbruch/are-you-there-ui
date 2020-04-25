import React from 'react';

const Ward = ({match}) => {
  const name = match.params.name;
  return(
    <>
    <h1>This is a matchroute: {name}</h1>
    </>
)}
export default Ward;
