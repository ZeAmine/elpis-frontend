import {BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import './styles/index.scss';

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Administrative from "./pages/Administrative";
import Protect from "./pages/Protect";
import Reexamen from "./pages/Reexamen";
import Mineur from "./pages/Mineur";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

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
          <Route path="/aide-administrative" exact element={<Administrative/>}/>
          <Route path="/differents-types-de-protection" exact element={<Protect />}/>
          <Route path="/reexamens-des-demandes-asile" exact element={<Reexamen />}/>
          <Route path="/mineurs-non-accompagnees" exact element={<Mineur />}/>
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
