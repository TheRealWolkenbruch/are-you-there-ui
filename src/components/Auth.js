import React, { useState, useContext } from "react";
import AuthContext from "./../context/auth-context.js";
import { Form, Input, Button, Tabs } from "antd";
const { TabPane } = Tabs;

const Auth = () => {
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = async () => {
    const result = await fetch(
      `${process.env.REACT_APP_BACKEND_API_URL}/login`,
      {
        credentials: "include", // It's okay to set cookie in client
        method: "post",
        body: JSON.stringify({
          login: email,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const status = await result.status;
    const token = await result.headers.get("Authorization");
    if (status === 200 && token) {
      document.cookie = `token=${token}`;
      auth.login(token, email);
    } else {
      alert("something went wrong");
      setEmail("");
      setPassword("");
    }
  };

  const signup = async () => {
    const result = await fetch(
      `${process.env.REACT_APP_BACKEND_API_URL}/create-account`,
      {
        credentials: "include", // It's okay to set cookie in client
        method: "post",
        body: JSON.stringify({
          login: email,
          password: password,
          "password-confirm": password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const status = await result.status;
    if (status === 200) {
      alert("Signup worked");
    } else {
      alert("something went wrong");
      setEmail("");
      setPassword("");
    }
  };
  return (
    <Tabs type="card">
      <TabPane tab="signin " key="1">
        <h1>signin</h1>
        <h1>Nice to have you back 🤗</h1>
        <Form name="basic" initialValues={{ remember: true }} onFinish={signin}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input onChange={(event) => setEmail(event.target.value)} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </TabPane>
      <TabPane tab="signup" key="2">
        <h1>signup</h1>
        <h1>Keep on track with your beloved ones 👈</h1>
        <Form name="basic" initialValues={{ remember: true }} onFinish={signup}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input onChange={(event) => setEmail(event.target.value)} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Repeat Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              register
            </Button>
          </Form.Item>
        </Form>
      </TabPane>
    </Tabs>
  );
};

export default Auth;
