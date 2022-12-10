
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Register from "./Components/Register";
import PostItem from './Components/PostItem';
import UploadPage from "./Components/UploadPage";


function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path="/"         element={<Home/>}     />
        <Route path="register"  element={<Register/>} />
        <Route path="upload"    element={<UploadPage/>}   />
        <Route path='item'      element={<PostItem/>} />
      </Routes>

    </div>
     
      </>
  );
}
export default App;
