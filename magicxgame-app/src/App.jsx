import ReactDom from "react-dom/client";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Scenes/Login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import GudGudiGame from "./Scenes/GudGudiGame";
import FighterWheel from "./Scenes/FighterWheel";
import FighterWheel95 from "./Scenes/FighterWheel95";
import LuckyCard from "./Scenes/LuckyCard";
import "./App.css";
import Layout from "./Scenes/Layout";
import GameMenu from "./Scenes/GameMenu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/login" element={<Login />} />
        <Route path="*" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/gudigudi" element={<GudGudiGame />} />
          <Route path="/fighterwheel" element={<FighterWheel />} />
          <Route path="/fighterwheel95" element={<FighterWheel95 />} />
          <Route path="/luckycard" element={<LuckyCard />} />
          <Route path="/game-menu" element={<GameMenu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
