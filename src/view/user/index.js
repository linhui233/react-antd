import React, { Component } from 'react'
import {Avatar, Card, List, Row, Col} from 'antd'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'

class User extends Component {
  componentDidMount() {
    this.getData(this.props.match.params.id)
  }
  shouldComponentUpdate(nextProps, nextState) {
    let name = this.props.match.params.id
    let nextName = nextProps.match.params.id
    console.log(name === nextName);
    
    if(name !== nextName) {
      this.getData(nextName)
      return false
    }
    return true
  }
  
  getData(name) {
    
    this.props.dispatch(dispatch => {
      dispatch({
        type: "USER_UPDATE"
      })
      axios.get(` https://cnodejs.org/api/v1/user/${name}`)
      .then(res => {
        dispatch({
          type: "USER_UPDATE_SUCCESS",
          data: res.data
        })
      })
      .catch(error => {
        dispatch({
          type: 'USER_UPDATE_ERROR'
        })
      })
    })
  }
  render() {
    
    let {avatar_url, loginname, create_at, githubUsername, recent_replies ,recent_topics} = this.props.data

    let renderReply = (recent_replies) => {
      return (
        <Card title="回帖记录">
          <List dataSource={recent_replies} renderItem={item => {
            return (
              <List.Item className="reply-list">
                <Avatar src={item.author.avatar_url}></Avatar>
                <Link to={`/user/${item.author.loginname}`}>{item.author.loginname}</Link>
                <Link to={`/details/${item.id}`}>{item.title}</Link>
                <p className="reply-time">最后回帖时间: {item.last_reply_at.split("T")[0]}</p>
              </List.Item>
            )
          }}></List>
        </Card>
      )
    }

    let renderTopics = (recent_topics) => {
      return (
        <Card title="发帖历史" type="inner" className="self-topic">
          <List itemLayout="vertical" dataSource={recent_topics} renderItem={item => {
            return (
              <List.Item  extra={item.last_reply_at.split("T")[0]}>
                <Link to={`/details/${item.id}`}>{item.title}</Link>
              </List.Item>
            )
          }}></List>
        </Card>
      )
    }

    return (
      <div className="wrap">
        <div className="userinfo">
          <Avatar src={avatar_url}></Avatar>
          <Row className="user-wrap">
            <Col md={8}>用户名称: {loginname}</Col>
            <Col md={8}>github: {githubUsername}</Col>
            <Col md={8}>注册时间: {create_at.split("T")[0]}</Col>
          </Row>

        </div>
        <div>
          {renderReply(recent_replies)}
          {renderTopics(recent_topics)}
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => state.user
export default connect(mapStateToProps)(User)
