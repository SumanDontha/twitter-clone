import React from "react";
import "./App.css";
import Sidebar from "./components/SideBar/Sidebar";
import Feed from "./components/Feed/Feed";

function App() {
  return (
    // BEM
    <div className='app'>
      <Sidebar />
      {/* Feeds */}
      <Feed />

      {/* Widgets */}
    </div>
  );
}

export default App;
