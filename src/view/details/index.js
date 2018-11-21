import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Card, Avatar} from 'antd'
import TxtTag from '../../components/textTag'
import ReplyList from './replyList'
import axios from 'axios'
class Details extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
    this.getData()
  }
  componentWillUnmount() {
    this.props.dispatch({
      type: "DETAILS_INIT"
    })
  }
  getData() {
    let id = this.props.match.params.id
    this.props.dispatch(dispatch => {
      dispatch({
        type: "DETAILS_UPDATE"
      })
      axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
      .then(res => {
        
        dispatch({
          type: "DETAILS_UPDATE_SUCCESS",
          data: res.data
        })
      })
      .catch(error => {
        dispatch({
          type: "DETAILS_UPDATE_ERROR"
        })
      })
    })
  }
  render() {
    const props = this.props
    
    const title = (
      <div>
        <h1>{props.data.title}</h1>
        <div>
          <TxtTag data={props.data}></TxtTag>
          <Avatar src={props.data.author.avatar_url}></Avatar>
          <Link to={`/user/${props.data.author_loginname}`}>
            {props.data.author.loginname}
            发表于{props.data.create_at.split("T")[0]}
          </Link>
        </div>
      </div>
    )
    return (
      <div className="wrap">
        <Card title={title} loading={props.loading}>
          <div dangerouslySetInnerHTML={{__html: props.data.content}}>
          </div>
        </Card>
        <ReplyList loading={props.loading} replies={props.data.replies} replyCount={props.data.replies.length}></ReplyList>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return state.details
}
export default connect(mapStateToProps)(Details)