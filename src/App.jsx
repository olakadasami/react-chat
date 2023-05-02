import "./App.css";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";
import ChatBox from "./components/ChatBox";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <Navbar />
      {!user ? <Welcome /> : <ChatBox />}
    </div>
  );
}

export default App;
