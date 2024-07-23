
import Navbar from './components/Navbar';
import './index.css'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home';


function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
    </Routes>
  </>
  );
}

export default App;
