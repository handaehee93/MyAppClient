import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Member from './pages/Member'; 

function App() {
  return (
    <div className="App">
          <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/signup" element={<Member />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
