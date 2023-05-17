import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Routers from './Components/Routers';
import Home from "./Pages/Home"
import ProfileDetail from './Pages/ProfileDetail';
import UserProfile from './Pages/UserProfile';

function App() {
  return (
    <div>
    <Navbar/>
{/* <ProfileDetail/> */}
{/* <Routers/> */}
    {/* <Home/> */}
    <UserProfile/>
    <Footer/>
    
    </div>
  );
}

export default App;
