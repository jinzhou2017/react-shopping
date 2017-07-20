import React from 'react';
import { Menu, Icon, Row, Col } from 'antd';
import {Link} from 'react-router';
import '../css/shopping.css';
const SubMenu = Menu.SubMenu;
export default class App extends React.Component{
  state = {
    current: '1',
    openKeys: [],
  }
  handleClick = (e) => {
    this.setState({ current: e.key });
  }
  onOpenChange = (openKeys) => {
    const state = this.state;
    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    this.setState({ openKeys: nextOpenKeys });
  }
  getAncestorKeys = (key) => {
    const map = {
      sub3: ['sub2'],
    };
    return map[key] || [];
  }


  render(){
    return(
      <Row>
        <Col span={1}/>
        <Col span={3}>
          <Menu
            mode="inline"
            openKeys={this.state.openKeys}
            selectedKeys={[this.state.current]}
            style={{ width: '100%'}}
            onOpenChange={this.onOpenChange}
            onClick={this.handleClick}
          >
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>操作</span></span>}>
              <Menu.Item key="1"> <Link to="/">主页</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/jiesuan/:num/:index">购物车</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/jilu/:index/:num">购买记录</Link></Menu.Item>


            </SubMenu>


          </Menu>

        </Col>
        <Col span={19}>
          {this.props.children}
        </Col>
        <Col span={1}/>




      </Row>

    )
  }




}
