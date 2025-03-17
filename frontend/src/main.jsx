import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App'
import Error from './pages/Error'
import Landing from './pages/Landing'
import Home from './pages/Home'
import NewRating from './pages/NewRating'
import SignUp from './pages/SignUp'
import Login from './pages/Login'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />, 
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/newRating',
        element: <NewRating />
      },
      {
        path: '/sign-up',
        element: <SignUp />
      },
      {
        path: '/login',
        element: <Login />
      },
    ]
  }
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);