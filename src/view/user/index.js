import React, { Component } from 'react'
import {Avatar, Card, List, Row, Col} from 'antd'
import {Link} from 'react-router-dom'
import data from './data'
export default class User extends Component {
  render() {
    const user = data.data
    console.log(user);
    
    return (
      <div className="wrap">
        <div className="userinfo">
          <Avatar src={user.avatar_url}></Avatar>
          <Row className="user-wrap">
            <Col md={8}>用户名称: {user.loginname}</Col>
            <Col md={8}>github: {user.githubUsername}</Col>
            <Col md={8}>注册时间: {user.create_at.split("T")[0]}</Col>
          </Row>

        </div>
        <div>
          <Card title="回帖记录">
            <List dataSource={user.recent_replies} renderItem={item => {
              return (
                <List.Item className="reply-list">
                  <Avatar src={item.author.avatar_url}></Avatar>
                  <span>{item.author.loginname}</span>
                  <Link to={`/details/${item.id}`}>{item.title}</Link>
                  <p className="reply-time">最后回帖时间: {item.last_reply_at.split("T")[0]}</p>
                </List.Item>
              )
            }}></List>
          </Card>

          <Card title="发帖历史" type="inner" className="self-topic">
            <List itemLayout="vertical" dataSource={user.recent_topics} renderItem={item => {
              return (
                <List.Item  extra={item.last_reply_at.split("T")[0]}>
                  <Link to={`/details/${item.id}`}>{item.title}</Link>
                </List.Item>
              )
            }}></List>
          </Card>
        </div>
      </div>
    )
  }
}
