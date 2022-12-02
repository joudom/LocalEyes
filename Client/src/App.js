
import './App.css';
import Navigation from './Components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
     <Navigation/>
     <header className="App-header">
      <p>
        LocalEyes
        <img src={eye2} className="App-logo2" alt="logo"/>
        {/* <img src={eye} className="App-logo" alt="logo"/>
        <img src={eye} className="App-logo" alt="logo"/> */}
      </p>
      </header>
      <img src={map} className="BG-img" alt="bg-img"/>
    </div>
  );
}

export default App;
