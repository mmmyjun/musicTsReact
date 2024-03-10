import React, { useState } from 'react';
import {
  Route,
  Link,
  Routes,
  Outlet
} from "react-router-dom";
import './App.css';
import MusicPage from './compoents/music/MusicPage';
import TvPage from './compoents/tv/TvPage';
import TvDetail from './compoents/tv/TvDetail';

function Dashboard() {
  return (
    <div className="Dashboard">
      <Outlet />
    </div>
  );
}
function App() {
  return (
    <div className="App">
      {/* <Link to="/music">音乐播放器</Link>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route
            path="music"
            element={<MusicPage />}
          />
        </Route>
      </Routes> */}

      <Routes>
        <Route path="/" element={<TvPage />}></Route>
        <Route path="/tvDetail/:id"
          element={<TvDetail />}></Route>
        <Route path="/music" element={<MusicPage />}></Route>
      </Routes>


    </div>
  );
}

export default App;
