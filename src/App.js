import './App.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App"  style={{ 
      backgroundImage: `url("https://img.freepik.com/free-photo/shopping-cart-with-wooden-elements_23-2148879396.jpg?size=626&ext=jpg&ga=GA1.1.1069466014.1709931439&semt=ais")`,
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
