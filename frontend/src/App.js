import './App.css';
import Navbar from './components/navbar';
import Addbook from './pages/addbooks';
import Books from './pages/books';
import Description from './pages/description';
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/register';
import Signin from './pages/signin';
import UserProfile from './pages/userprofile';
import { ToastContainer } from 'react-toastify';
import { authenticatedUser, authenticate } from './pages/signin';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';
import 'react-toastify/dist/ReactToastify.css';
import getuserid from './store/getuserid';
function App() {
  const token = Cookies.get("uuid");
  if (token) {
    try {
      const tokeninfo = jwtDecode(token, { complete: true });
      authenticatedUser.value = tokeninfo.email;
      authenticate.value = true;
      getuserid(authenticatedUser.value);
    } catch (err) { console.log(err) };
  }
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/addbooks" element={<Addbook />} />
          <Route path="/description/:id" element={<Description />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
