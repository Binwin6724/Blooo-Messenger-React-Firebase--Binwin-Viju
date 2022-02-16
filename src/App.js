import './App.css';

import { useAuthState } from 'react-firebase-hooks/auth'
import  {auth}  from './firebase-config'
import Chat from './components/Chat'
import Home from './components/Home';

function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="App">
        {user ? <Chat /> : <Home />}
    </div>
  );
}

export default App;
