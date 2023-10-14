import { Routes ,Route } from 'react-router-dom';
import Login from './Components/Auth/Login/login.component';
import Register from './Components/Auth/Register/register.component';
import Home from './Components/Home/home.component';
import Chat from './Components/Chat/chat.component';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

      <Route path='/' element={<Home />} />
      <Route path='/room/:roomID' element={<Chat />} />
    </Routes>
  )
}

export default App
