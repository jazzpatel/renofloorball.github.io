window.jQuery = window.$ = require('jquery/dist/jquery.min')

import React from 'react'
import NavBar from './NavBar'
import Carousel from './Carousel'

export default class Main extends React.Component {
  render() {
    return (
        <div>
          <NavBar />
          <Carousel />
        </div>
       
    )
  }
}