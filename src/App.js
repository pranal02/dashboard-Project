import './App.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App"  style={{ 
      backgroundImage: `url("https://img.freepik.com/premium-photo/business-data-financial-figures-visualiser-graphic_31965-19338.jpg?w=1060")`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
      
    }}>
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <RightSide/>
      </div>
    </div>
  );
}

export default App;
