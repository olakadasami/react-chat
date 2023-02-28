import './App.css'
import Welcome from './components/Welcome'
import Navbar from './components/Navbar'
import Chatbox from './components/Chatbox'
import { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

function App() {
  const [user] = useAuthState(auth)

  return (
    <div className="App">
      <Navbar />
      {!user ? (
        <Welcome />
      ) : (
        <Chatbox />
      )}
    </div>
  )
}

export default App
