import Register from './Register.js';
import Login from './Login.js';
import User from './user-home.js';
import Admin from './admin-home.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <main className='App'>
      <Router>
                <Routes>
                  <Route exact path="/" element={<User/>}></Route>
                  <Route path="/register" element={<Register/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/admin" element={<Admin/>}/>
                </Routes>
            </Router>
    </main>
  );
}

export default App;