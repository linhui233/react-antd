import React, { Component } from 'react'
import {Card} from 'antd'

export default class PublicCard extends Component {
  render() {
    let data = this.props.data
    return (
      <Card title={data.title} loading={false} type="inner">
        <div dangerouslySetInnerHTML={{
          __html: data.content
        }}/>
      </Card>
    )
  }
}
