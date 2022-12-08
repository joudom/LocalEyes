
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Upload from "./Components/Upload";
import PostItem from './Components/PostItem';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"         element={<Home/>}     />
        <Route path="register"  element={<Register/>} />
        <Route path="upload"    element={<Upload/>}   />
        <Route path='item'      element={<PostItem/>} />
      </Routes>
    </div>
  );
}

export default App;
