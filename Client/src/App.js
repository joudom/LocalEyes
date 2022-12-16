import Home from "./Components/Home";
import Register from "./Components/Register";
import PostItem from './Components/PostItem';
import UploadPage from "./Components/UploadPage";
import { Routes, Route, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { L36, L57, L74, L96  } from "react-isloading";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/*
L36 yellowbook
L57 green search - user, folder, glass
L74 red/white magifying glass on file
L96 blue/white/red shopping bag
*/

const App = () => {
  const initialUserData = {
    username: "",
    password: "",
    email: "",
    name: "",
    city: "",
    state: "",
    zip: "",
  };

  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([]);
  const [item, setItem] = useState({});
  const [shouldReload, setShouldReload] = useState(false);
  const [user, setUser] = useState(initialUserData)
  let { id } = useParams();

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])


  useEffect(() => {
    fetch('http://localhost:8000')
      .then(res => {
        if(res.ok) {return res.json()}
        throw res 
      })
      .then(data => { 
          setPosts(data)
          setShouldReload(false) 
        })
}, [shouldReload])

  return (
    <>
      {
        loading ? 
          <L36 style={{ height: "75vh", width: "75vw", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}/>
          :
          <div className="App">
            <Routes>
              <Route path="/"         element={<Home posts={posts} setPosts={setPosts} setItem={setItem}/>}/>
              <Route path="register"  element={<Register user={user} setUser={setUser}/>} />
              <Route path="upload"    element={<UploadPage posts={posts} setPosts={setPosts} />}   />
              <Route path='item/:id'  element={<PostItem item={item} setItem={setItem} setShouldReload={setShouldReload} posts={posts} setPosts={setPosts}/>}/>
            </Routes>
          </div>
      }
      </>
  );
}
export default App;
