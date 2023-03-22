import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import TopPage from "./pages/TopPage/TopPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MyRecord from "./pages/MyRecord/MyRecord";
import Column from "./pages/Column/Column";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<TopPage />}></Route>
        <Route path="/myrecord" element={<MyRecord />}></Route>
        <Route path="/column" element={<Column />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
