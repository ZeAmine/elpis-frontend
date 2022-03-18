import {BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import './styles/index.scss';

//component
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/"  element={<Home/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
