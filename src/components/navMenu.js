import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Menu, Icon} from 'antd'
class NavMenu extends Component {
  constructor(props) {
    super(props)
    let now = this.getNow(this.props.location)
    this.state = {
      now
    }
  }
  getNow(location) {
    let now = location.pathname.split("/")
    return now[1]
  }
  shouldComponentUpdate(nextProps, nextState) {
    let now = this.getNow(nextProps.location)
    if(now !== this.state.now) {
      this.setState({
        now
      })
      return false
    }
    return true
  }
  render() {
    let {mode, id, location} = this.props
    return (
    <Menu selectedKeys={[this.state.now]} id={id} mode={mode} theme="light" className="nav">
        <Menu.Item key="index">
          <Link to="/"><Icon type="home"></Icon>首页</Link>
        </Menu.Item>
        <Menu.Item key="book">
          <Link to="/book"><Icon type="book"></Icon>教程</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about"><Icon type="info-circle-o"></Icon>关于</Link>
        </Menu.Item>
      </Menu>
    )
  }
}
export default withRouter((props) => {
  let {mode, id, location} = props
  return <NavMenu mode={mode} id={id} location={location}></NavMenu>
})
