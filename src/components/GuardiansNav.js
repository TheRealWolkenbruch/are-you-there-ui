import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const GuardiansNav = () => (
  <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
    <Menu.Item key="1">
      <Link to="/guardian/mywards">
        <span className="nav-text">My Wards</span>
      </Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link to="/guardian/bondstable">
        <span className="nav-text">My Bonds</span>
      </Link>
    </Menu.Item>
  </Menu>
);
export default GuardiansNav;
