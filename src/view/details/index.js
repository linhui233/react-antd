import React, { Component } from 'react'
import {Card, Avatar} from 'antd'
import {Link} from 'react-router-dom'
import TxtTag from '../../components/textTag'
import data from './data'
import ReplyList from './replyList'
export default class Details extends Component {
  render() {
    console.log(data.data);
    
    const title = (
      <div>
        <h1>{data.data.title}</h1>
        <div>
          <TxtTag data={data.data}></TxtTag>
          <Avatar src={data.data.author.avatar_url}></Avatar>
          <Link to={`/user/${data.data.author_loginname}`}>
            {data.data.author.loginname}
            发表于{data.data.create_at.split("T")[0]}
          </Link>
        </div>
      </div>
    )
    return (
      <div className="wrap">
        <Card title={title}>
          <div dangerouslySetInnerHTML={{__html: data.data.content}}>
          </div>
        </Card>
        <ReplyList replies={data.data.replies} replyCount={data.data.reply_count}></ReplyList>
      </div>
    )
  }
}
