import React, {useContext} from 'react';
import Auth from './../components/Auth';
import LoremIpsum from './../components/LoremIpsum';
import AuthContext from './../context/auth-context.js'

const Guardian = () => {
  const auth = useContext(AuthContext)
  return (
    <h1>
      Guardian Route
      {!auth.token && <Auth/>}
      {auth.token && <LoremIpsum/>}
      {auth.token && <button onClick={()=>auth.logout()} >signout</button>}
    </h1>
)};
export default Guardian;
