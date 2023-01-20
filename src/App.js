
import './App.css';
import BackToTop from './Components/BackToTop';
import SideMenu from './Components/SideMenu';

function App() {
  return (
    <div className="App">
      <div className="body" >
        <SideMenu />
        <BackToTop />
      </div>
    </div>
  );
}

export default App;
