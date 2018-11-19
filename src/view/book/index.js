import React, { Component } from 'react'
import PublicCard from '../../components/public_card'
import Data from './data'
export default class Book extends Component {
  render() {
    console.log(Data);
    
    return (
      <div className="wrap">
        {Data.map((item, index) => {
          return (
              <PublicCard key={index} data={item}></PublicCard>
          )
        })}
      </div>
    )
  }
}
