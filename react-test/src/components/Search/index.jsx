import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Sheader from '../Sheader'
import Slist from '../Slist'

export default class Search extends Component {
  render() {
    return (
      <div>
        <Sheader></Sheader>
        <Slist></Slist>
      </div>
    )
  }
}

