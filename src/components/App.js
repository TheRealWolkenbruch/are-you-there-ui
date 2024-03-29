import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import "./../css/App.css";
import Guardian from "./../routes/Guardian";
import Ward from "./../routes/Ward";
import GuardiansNav from "./GuardiansNav";
// https://medium.com/@danfyfe/using-react-context-with-functional-components-153cbd9ba214
import { AuthContextProvider } from "./../context/auth-context.js";
import Logo from "../assets/images/logo.svg";
import { Layout } from "antd";

const { Header, Content, Sider } = Layout;

const App = () => {
  let cookie_array = document.cookie.split(";");
  let cookie = null;
  if (
    cookie_array.length > 0 &&
    cookie_array.filter((e) => e.includes("token=")).length > 0
  ) {
    cookie = cookie_array.filter((e) => e.includes("token="));
    cookie = cookie.pop().toString().replace("token=", "");
  }
  const [token, setToken] = useState(cookie);
  const [email, setEmail] = useState(null);

  const login = (token, email) => {
    setToken(token);
    setEmail(email);
  };
  const logout = () => {
    document.cookie = "token=; expires=Thu, 01-Jan-70 00:00:01 GMT;";
    setToken(null);
    setEmail(null);
  };

  const context = {
    token: token,
    email: email,
    login: login,
    logout: logout,
  };

  return (
    <Router>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <div className="container">
            <div className="logo_wrapper">
              <img src={Logo} alt="Logo" />
              <div className="logo">AreYouThere</div>
            </div>
            {token && <GuardiansNav />}
          </div>
        </Sider>
        <Layout>
          <Header className="header">
            <div className="logo" />
          </Header>
          <Layout
            className="site-layout-sub-header-background"
            style={{ padding: "0 24px 24px" }}
          >
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <div className="content_wrapper">
                <Switch>
                  <Redirect exact from="/" to="/guardian" />
                  <Route exact path="/ward/:name" component={Ward} />
                  <AuthContextProvider value={context}>
                    <Route path="/guardian" component={Guardian} />
                  </AuthContextProvider>
                </Switch>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
