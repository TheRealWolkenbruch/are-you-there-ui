import React, { useContext } from "react";
import Auth from "./../components/Auth";
import MyWards from "./../components/MyWards";
import BondsTable from "./../components/BondsTable";
import AuthContext from "./../context/auth-context.js";

import { Route, Redirect } from "react-router-dom";

const Guardian = ({ match }) => {
  const auth = useContext(AuthContext);
  return (
    <h1>
      Guardian Route
      {!auth.token && <Auth />}
      {auth.token && (
        <>
          <Redirect exact from={`${match.path}`} to={`${match.path}/mywards`} />
          <Route path={`${match.path}/mywards`} component={MyWards} />
          <Route path={`${match.path}/bondstable`} component={BondsTable} />
        </>
      )}
      {auth.token && <button onClick={() => auth.logout()}>signout</button>}
    </h1>
  );
};
export default Guardian;
