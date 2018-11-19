import React, { Component } from 'react'
import {Layout, Row, Col, Divider, Menu, Icon, Dropdown, Button} from 'antd'
import {Link} from 'react-router-dom'
import NavMenu from './navMenu.js'
export default class MainHeader extends Component {
  render() {
    return (
      <Layout.Header>
        <Row className="wrap">
          <Col md={6} xs={24}>
            <h1 className="logo">cNode</h1>
          </Col>
          <Col md={18} xs={0}>
            <Divider type="vertical" className="headerDivider"></Divider>
            <NavMenu id="menu1" mode="horizontal"></NavMenu>
          </Col>

          <Col md={0} xs={24} className="xsNav">
            <Dropdown  
              overlay={<NavMenu id="menu2"></NavMenu>}
              trigger={["click", "touchend"]}
            >
              <Button><Icon type="bars"></Icon></Button>
            </Dropdown>
          </Col>

        </Row>
      </Layout.Header>
    )
  }
}
