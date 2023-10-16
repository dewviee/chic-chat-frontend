import { Routes ,Route } from 'react-router-dom';
import Login from './Components/Auth/Login/login.component';
import Register from './Components/Auth/Register/register.component';
import Home from './Components/Home/home.component';
import CreateRoom from './Components/Home/create-room.component';
import Chat from './Components/Chat/chat.component';
import Profile from './Components/Profile/profile.component';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

      <Route path='/' element={<Home />} />
      <Route path='/createroom' element={<CreateRoom />} />
      <Route path='/room/:roomID' element={<Chat />} />

      <Route path='/profile' element={<Profile />} />
    </Routes>
  )
}

export default App
