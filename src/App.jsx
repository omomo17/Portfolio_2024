// import React from "react";
import NavBar from './components/NavBar';
import './index.css';

const App = () => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
    {/* <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"> */}
      {/* <h1 className="text-3xl font-bold underline">React App</h1> */}
      <NavBar />
    </div>
  );
}

export default App;