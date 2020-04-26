import React, { useState, useContext } from "react";
import AuthContext from "./../context/auth-context.js";
import { Form, Input, Button, Checkbox } from "antd";

const Auth = () => {
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = async () => {
    // POST API/SIGNUP
    auth.login(email, password);
  };

  return (
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
        <Input.Password onChange={(event) => setPassword(event.target.value)} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Auth;
