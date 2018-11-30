import React, { Component } from 'react'
import {Menu} from 'antd'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
const tabs = [
  {
    txt: '全部',
    key: 'all',
    isChecked: false
  },
  {
    txt: '精华',
    key: 'good',
    isChecked: false
  },
  {
    txt: '问答',
    key: 'ask',
    isChecked: false
  },
  {
    txt: '分享',
    key: 'share',
    isChecked: false
  },
  {
    txt: '招聘',
    key: 'job',
    isChecked: false
  }

]
class IndexMenu extends Component {
  constructor(arg){
    super(arg)
    // let now = this.getNow(this.props.location)
    // this.state = {
    //   now
    // }
  }
  getNow() {
    let now = this.props.location.pathname.split('/')[2]
    return now
  }
  // shouldComponentUpdate(nextProps){
  //   let now = this.getNow(nextProps.location)
  //   if(now !== this.state.now) {
  //     this.setState({
  //       now
  //     })
  //     return false
  //   }
  //   return true
  // }
  
  render() {
    let {id, mode} = this.props
    let now = this.getNow()
    return (
      <div>
        <Menu selectedKeys={[now]} className="leftMenu" mode={mode} id={id}>
          {tabs.map((item) => {
            return <Menu.Item key={item.key}><Link to={`/index/${item.key}`}>{item.txt}</Link></Menu.Item>
          })}
        </Menu>
      </div>
    )
  }
}
export default withRouter(IndexMenu)
