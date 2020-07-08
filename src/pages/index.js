import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      list: [
        { id: 123 , name: '我是123' },
        { id: 456 , name: '我是456' },
        { id: 789 , name: '我是789' },
      ]
    }
    // this.props.history.push('/home/')
  }

  render() {
    const { list } = this.state
    return (
      <div>
        <h2>xiaoreya</h2>
        <ul>
          {
            list.map((item, index) => {
              return <li key={item.id}><Link to={`/list/${item.id}`}>{item.name}</Link></li>
            })
          }
        </ul>
      </div>
    )
  }
}
