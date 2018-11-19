import React, { Component } from 'react'
import {Card, Avatar, List} from 'antd'
import {Link} from 'react-router-dom'
export default class ReplyList extends Component {
  render() {
    let {replyCount, replies, loading} = this.props
    return (
    <Card loading={loading} title={replyCount + "条回复"} type="inner">
        <List itemLayout="vertical" dataSource={replies} renderItem={item => {
            return (
                <List.Item key={item.id} extra={item.ups.length > 0 ? `${item.ups.length}人觉得很赞` : ''}>
                    <List.Item.Meta 
                        avatar={<Avatar src={item.author.avatar_url}></Avatar>}
                        description={<div><Link to={"/user/"+item.author.loginname}>{item.author.loginname}</Link><span>发表于{item.create_at.split("T")[0]}</span></div>}
                        >
                    </List.Item.Meta>
                    <div dangerouslySetInnerHTML={{__html: item.content}}>
                    </div>
                </List.Item>
            )
        }}>

        </List>
    </Card>
    )
  }
}
