import React from "react";
import "./App.css";
import Sidebar from "./components/SideBar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/Widgets/Widget";

function App() {
  return (
    // BEM
    <div className='app'>
      <Sidebar />
      {/* Feeds */}
      <Feed />

      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default App;
