
import Navigation from './Components/Navigation';
import PostBox from './Components/Postbox';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import map from './map.webp';
import './App.css';

function App() {
  return (
    <div className="App">
     <Navigation/>
      {/* <img src={map} className="BG-img" alt="bg-img"/> */}
      <PostBox/>
    </div>
  );
}

export default App;
