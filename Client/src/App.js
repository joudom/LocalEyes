
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import Register from "./Components/Register";
import PostItem from './Components/PostItem';
import UploadPage from "./Components/UploadPage";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { L36, L57, L74, L96  } from "react-isloading";

/*
L36 yellowbook
L57 green search - user, folder, glass
L74 red/white magifying glass on file
L96 blue/white/red shopping bag
*/

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <>
      {
        loading ? 
          <L36 style={{ height: "75vh", width: "75vw", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}/>
          :
          <div className="App">
            <Routes>
              <Route path="/"         element={<Home/>}     />
              <Route path="register"  element={<Register/>} />
              <Route path="upload"    element={<UploadPage/>}   />
              <Route path='item'      element={<PostItem/>} />
            </Routes>
          </div>
      }
      </>
  );
}
export default App;
