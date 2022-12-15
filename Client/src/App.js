import { useEffect, useState } from 'react';
import { Routes, Route, useParams } from "react-router-dom";
import Home from "./Components/Home";
import Register from "./Components/Register";
import PostItem from './Components/PostItem';
import UploadPage from "./Components/UploadPage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [posts, setPosts] = useState([]);
  const [item, setItem] = useState({});
  const [shouldReload, setShouldReload] = useState(false);
  let { id } = useParams();

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

// console.log('posts:', posts)
console.log('item:', item)

  return (
    <>
    <div className="App">
      <Routes>
        <Route path="/"         element={<Home posts={posts} setPosts={setPosts} setItem={setItem}/>}/>
        <Route path="register"  element={<Register/>} />
        <Route path="upload"    element={<UploadPage posts={posts} setPosts={setPosts} />}   />
        <Route path='item/:id'  element={<PostItem item={item} setItem={setItem} setShouldReload={setShouldReload}/>}/>
      </Routes>

    </div>
     
      </>
  );
}
export default App;
