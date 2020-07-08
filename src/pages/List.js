import React, { Component } from 'react'

export default class List extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
     const { match } = this.props
     console.log('match ===>', match)
     let tempId = match.params.id;
     this.setState({
       id: tempId
     })
  }

  render() {
    const { id } = this.state
    return (
      <div>
        <h2>List</h2>
        <h2>我是List === {id}</h2>
      </div>
    )
  }
}
