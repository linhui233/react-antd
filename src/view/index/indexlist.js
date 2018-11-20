import React, { Component } from 'react'
import {List, Avatar} from 'antd'
import {Link} from 'react-router-dom'
import TextTag from '../../components/textTag'
import {connect} from 'react-redux'
import axios from 'axios'
class IndexList extends Component {
  constructor(props) {
    console.log(props);
    super(props)
    this.state = {
      tab: props.tab
    }
  }
  componentDidMount() {
    console.log("componentDidMount");
    
    this.getData(this.props.tab)
  }
  componentWillReceiveProps(props) {
    console.log("componentWillReceiveProps");
    if(this.props.tab !== props.tab){
      this.getData(props.tab)
    }
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    
    if(nextProps === this.props.tab) {
      return false
    }
    return true
  }
  
  getData(tab) {
    this.props.dispatch(dispatch => {
      axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=1&limit=15`)
      .then(res => {
        console.log(res);
        dispatch({
          type: 'LIST_UPDATE',
          data: res.data
        })
      }).catch(error => {
        
      })
    })
  }
  render() {
    console.log(2);
    console.log(this.props);
    
    return (
      <List 
        loading={!this.props.success} 
        dataSource={this.props.data} 
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
const mapStateToProps = state => state.list
export default connect(mapStateToProps)(IndexList)