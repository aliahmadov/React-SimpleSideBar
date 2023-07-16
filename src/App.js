import "./App.css";
import NavBar from "./NavBar";

import SideBar from "./SideBar.js";
function App() {
  return (
    <div className="container">
      <section className="left">
        <SideBar></SideBar>
      </section>

      <section className="right">
        <NavBar></NavBar>

        <section style={{display:"flex",fontWeight:"bold",padding:50,border:"1px solid black"}}>
          <img className="iconImg" src="/assets/react.png" alt="react"></img>
          <p className="name">reactstrap</p>
        </section>

        <p style={{padding:40,fontSize:40,fontWeight:"bold",fontStyle:"italic"}}>Responsive SideBar Template</p>
      </section>
    </div>
  );
}

export default App;
