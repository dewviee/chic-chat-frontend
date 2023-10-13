import { Routes ,Route } from 'react-router-dom';
import Register from './Components/Auth/Register/register.component';
import Login from './Components/Auth/Login/login.component';
import Chat from './Components/Chat/chat.component';

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
