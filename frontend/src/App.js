import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Addbook from './pages/addbooks';
import Books from './pages/books';
import Description from './pages/description';
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/addbooks" element={<Addbook />} />
          <Route path="/description/:id" element={<Description />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
