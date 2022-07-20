import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/product/:id' element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
