import React, {useContext} from 'react';
import Auth from './../components/Auth';
import Table from './../components/Table';
import AuthContext from './../context/auth-context.js'

const Guardian = () => {
  const auth = useContext(AuthContext)
  return (
    <h1>
      Guardian Route
      {!auth.token && <Auth/>}
      {auth.token && <Table/>}
      {auth.token && <button onClick={()=>auth.logout()} >signout</button>}
    </h1>
)};
export default Guardian;
