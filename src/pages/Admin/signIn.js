import { Layout, Tabs } from 'antd';
import React from 'react';
import Login from '../../components/Login';
import Register from '../../components/Register/Register';
function SignIn() {
  const { Content } = Layout;
  const { TabPane } = Tabs;
  return (
    <Layout>
      <Content>
        <Tabs type='card'>
          <TabPane tab={<span>Iniciar sesion</span>} key="1">
            <Login/>
          </TabPane>
          <TabPane tab={<span>Registro</span>} key="2">
            <Register/>
          </TabPane>
        </Tabs>
      </Content>
    </Layout>
  );
};
export default SignIn;