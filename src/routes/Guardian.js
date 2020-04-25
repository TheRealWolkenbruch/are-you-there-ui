import React, { useContext } from "react";
import Auth from "./../components/Auth";
import MyWards from "./../components/MyWards";
import BondsTable from "./../components/BondsTable";
import AuthContext from "./../context/auth-context.js";
import { Button } from "antd";
import { HomeOutlined } from "@ant-design/icons";

import { Route, Redirect } from "react-router-dom";

const Guardian = ({ match }) => {
  const auth = useContext(AuthContext);
  return (
    <div>
      {!auth.token && <Auth />}
      {auth.token && (
        <>
          <Redirect exact from={`${match.path}`} to={`${match.path}/mywards`} />
          <Route path={`${match.path}/mywards`} component={MyWards} />
          <Route path={`${match.path}/bondstable`} component={BondsTable} />
        </>
      )}
      {auth.token && (
        <Button
          type="primary"
          icon={<HomeOutlined />}
          size="large"
          className="signout"
          onClick={() => auth.logout()}
          danger
        >
          signout
        </Button>
      )}
    </div>
  );
};
export default Guardian;
