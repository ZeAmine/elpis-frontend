import {BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import './styles/index.scss';

//pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

//components
import Cursor from "./components/Cursor";

//component
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/accueil" exact element={<Home/>}/>
          <Route path="/a-propos" exact element={<About/>}/>
          <Route path="/connection" exact element={<Login/>}/>
          <Route path="/inscription" exact element={<Register/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
