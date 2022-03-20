import {BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import './styles/index.scss';

//pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

//component
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/connection"  element={<Login/>}/>
          <Route path="/inscription"  element={<Register/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
