import React, { Component } from 'react'
import {Row, Col, Pagination} from 'antd'
import IndexMenu from '../../components/indexMenu'
import IndexList from './indexlist'
export default class Index extends Component {
    
    render() {
        
        return (
        <Row className="wrap">
            <Col md={6} xs={0} className="leftNav leftNav-pc">
            <IndexMenu id="indexMenu-pc"></IndexMenu>
            </Col>

            <Col md={0} xs={24} className="leftNav leftNav-phone">
                <IndexMenu id="indexMenu-mobile" mode="horizontal"></IndexMenu>
            </Col>
            <Col md={18} xs={24} className="indexList">
                <IndexList tab={this.props.match.params.id}></IndexList>
            </Col>
        </Row>
        )
  }
}
