import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout, Button } from "antd";
import MenuTop from "../components/MenuTop";
import MenuSider from "../components/MenuSider";
import { GithubOutlined } from "@ant-design/icons";
import SignIn from "../pages/Admin/signIn";
import logo from '../assets/brand/img/Blue_Elegant_Gaming_Logo__2_-removebg-preview.png'


import "./GeneralLayout.scss";

export default function GeneralLayout(props) {
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer } = Layout;
  const { children } = props;
  const  user  = null;
  /* Si no hay usuario y ya termino de cargar la página, no es un usuario logueado */
  if (!user ) {
    return (
      <>
      <img src={logo}/>
        <SignIn />
        <Routes>
          <Route path="/admin/login" element={<SignIn />} />
        </Routes>
      </>
    );
  }

  /* Si user tiene el contenido del payload y ya termino de cargar la página */
  if (user) {
    return (
      <Layout>
        <MenuSider menuCollapsed={menuCollapsed} />
        <Layout
          className="layout-admin"
          style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
        >
          <Header className="layout-admin__header">
            <MenuTop
              menuCollapsed={menuCollapsed}
              setMenuCollapsed={setMenuCollapsed}
            />
          </Header>
          <Content className="layout-admin__content">{children}</Content>
          <Footer className="layout-admin__footer">
            <Button type="link" onClick={() => console.log("Github")}>
              <GithubOutlined style={{ fontSize: "17px" }} /> Universidad
               de Manizales
            </Button>
          </Footer>
        </Layout>
      </Layout>
    );
  }
  return null;
}