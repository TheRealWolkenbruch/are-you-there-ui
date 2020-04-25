import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./../css/App.css";
import Guardian from "./../routes/Guardian";
import Ward from "./../routes/Ward";
// https://medium.com/@danfyfe/using-react-context-with-functional-components-153cbd9ba214
import { AuthContextProvider } from "./../context/auth-context.js";
import Logo from "../assets/images/logo.svg";
import { Layout } from "antd";

const { Header, Content, Sider } = Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: baseline;
  align-items: center;
  background-color: #ffd8be;
  padding: 1em;
  width: 100%;
  border-radius: 0 0 7px 7px;
`;

const Header1 = styled.h1`
  font-size: 16px;
  padding-left: 10px;
  font-weight: 700;
`;

const StyledButton = styled.div`
  margin-top: 50px;
  background: #ffd8be;
  border-radius: 7px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 25px;
  padding-right: 25px;
  font-weight: 600;
  color: #002639;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ContentWrapper = styled.div`
  background-color: white;
  padding: 24;
  height: 85vh;
  padding: 100px;
  margin: 40px 30px 40px 30px;
  overflow: initial;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 11px;
`;

const App = () => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  const login = (token, userid) => {
    setToken(token);
    setEmail(userid);
  };
  const logout = () => {
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
        <Sider
          style={{
            backgroundColor: "#002639",
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
        >
          <Container>
            <LogoWrapper>
              <img src={Logo} alt="Logo" />
              <Header1>AreYouThere</Header1>
            </LogoWrapper>
            <StyledButton>Your wards</StyledButton>
          </Container>
        </Sider>
        <Layout
          theme="light"
          className="site-layout"
          style={{ marginLeft: 200 }}
        >
          <Header style={{ backgroundColor: "white" }}></Header>
          <ContentWrapper>
            <main>
              <AuthContextProvider value={context}>
                <Route exact path="/guardian" component={Guardian} />
              </AuthContextProvider>
              <Route path="/ward/:name" component={Ward} />
            </main>
          </ContentWrapper>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
