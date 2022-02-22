import React from 'react';
import ReactDOM from "react-dom";
import './App.css';

import Gallery from './components/Gallery';
import UseHorizontalScroll from './components/useSideScroll';

function App() {

  const scrollRef = UseHorizontalScroll();
  return (
    <div className="App" ref={scrollRef} style={{ overflow: "auto" }}>
      <div style={{ whiteSpace: "nowrap" }}>
        <h1>Marvins Gallery</h1>
        <Gallery />
      </div>
    </div>
  );
}

export default App;
