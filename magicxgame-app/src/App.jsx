import ReactDom from "react-dom/client";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Scenes/Login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import GudGudiGame from "./Scenes/GudGudiGame";
import "./App.css";
import Layout from "./Scenes/Layout";
import GameMenu from "./Scenes/GameMenu";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" />
          <Route index path="/login" element={<Login />} />
          <Route path="/gudigudi" element={<GudGudiGame />} />
          <Route path="/game-menu" element={<GameMenu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
