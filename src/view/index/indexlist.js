import React, { Component } from 'react'
import {List, Avatar} from 'antd'
import {Link} from 'react-router-dom'
import data from './data'
import TextTag from '../../components/textTag'
export default class IndexList extends Component {
  render() {
    console.log(data.data);
    
    return (
      <List 
        loading={false} 
        dataSource={data.data} 
        renderItem={item => 
          <List.Item
            actions={[`回复:${item.reply_count}`,`访问:${item.visit_count}`]}>
            <List.Item.Meta 
              avatar={<Avatar src={item.author.avatar_url}/> }
              title={<div><TextTag data={item}></TextTag><Link to={`/details/${item.id}`}>{item.title}</Link></div>}
              description={<p><Link to={`/user/${item.id}`}>{item.author.loginname}
              </Link>发表于:{item.create_at.split("T")[0]}</p>}
            />
            
          </List.Item>
        }
      >

      </List>
    )
  }
}
