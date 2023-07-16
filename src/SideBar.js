import React, { Component } from 'react'
import './App.css';
import SideBarItem from './SideBarItem';


const sidebarItems={
    item1:{
      name:"Home",
      imageUrl:"/assets/home.png"
    },
    item2:{
      name:"About",
      imageUrl:"/assets/info.png"
    },
    item3:{
      name:"Pages",
      imageUrl:"/assets/page.png"
    },
    item4:{
      name:"Portfolio",
      imageUrl:"/assets/briefcase.png"
    },
    item5:{
      name:"FAQ",
      imageUrl:"/assets/faq.png"
    },
    item6:{
      name:"Contact",
      imageUrl:"/assets/contact.png"
    }

}

export default class Sidebar extends Component {
  render() {
    return (
      <div className='sideBarDiv'>
        <section className='sideBarUp'>
          <p>Bootstrap Sidebar</p>
        </section>

        <section className='sideBarDown'>
          <p style={{margin:10,padding:10}}>Dummy Heading</p>
          
          <SideBarItem itemName={sidebarItems.item1.name} imageUrl={sidebarItems.item1.imageUrl} ></SideBarItem>
          <SideBarItem itemName={sidebarItems.item2.name} imageUrl={sidebarItems.item2.imageUrl} ></SideBarItem>
          <SideBarItem itemName={sidebarItems.item3.name} imageUrl={sidebarItems.item3.imageUrl} ></SideBarItem>
          <SideBarItem itemName={sidebarItems.item4.name} imageUrl={sidebarItems.item4.imageUrl} ></SideBarItem>
          <SideBarItem itemName={sidebarItems.item5.name} imageUrl={sidebarItems.item5.imageUrl} ></SideBarItem>
          <SideBarItem itemName={sidebarItems.item6.name} imageUrl={sidebarItems.item6.imageUrl} ></SideBarItem>
          
        </section>
      </div>
    )
  }
}
