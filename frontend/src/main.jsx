import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/App.css'
import { Provider } from 'react-redux'
import Store from './store/store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Userlogin from './pages/userLogin.jsx';
import Userprofile from './pages/userProfile.jsx';
import NotFound from './component/pageNotfound.jsx';
import Addbook from './pages/addbooks.jsx';
import Displaybooks from './pages/displayBook.jsx';
import ViewDetails from './pages/viewDetail.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Displaybooks />
  }, {
    path: "/userlogin",
    element: <Userlogin />
  }, {
    path: "/userprofile",
    element: <Userprofile />
  },
  {
    path: "/addbook",
    element: <Addbook />
  }, {
    path: "/detail/:id",
    element: <ViewDetails />
  },
  {
    path: "*",
    element: <NotFound />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
