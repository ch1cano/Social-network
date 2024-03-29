import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Sattings from "./components/Sattings/Sattings";
import Frends from "./components/Frends/Frends";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage} />} />
          <Route path="/profile/*" element={<Profile state={props.state.profilePage} />} />
          <Route path="/news/*" element={<News />} />
          <Route path="/music/*" element={<Music />} />
          <Route path="/sattings/*" element={<Sattings />} />
          <Route path="/frends/*" element={<Frends state={props.state.sidebar} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
