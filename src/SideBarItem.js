import React, { Component } from 'react'
import "./SideBar.css"
export default class SideBarItem extends Component {

  render() {
    return (
      <div className='flex'>
        <img style={{width:25,height:25,marginTop:27, marginRight:10}} src={this.props.imageUrl} alt='sidebaritem'></img>
        <p>{this.props.itemName}</p>
      </div>
    )
  }
}
