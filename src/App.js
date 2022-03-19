import {BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import './styles/index.scss';

//component
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/login"  element={<Login/>}/>
          <Route path="/register"  element={<Register/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
