import Login from './Auth/login.component';
import Chat from './Chat'
import { Routes ,Route } from 'react-router-dom';
import Home from './Home/home.component';
import Register from './Auth/Register/register.component';

function App() {
  return (
    <Routes>
      <Route path='/register' element={<Register />} />
      
      <Route path='/room/:roomID' element={<Chat />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default App
