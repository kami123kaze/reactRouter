import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/about/About'
import Contact from './components/Contact/Contact'
import './index.css';
import User from './components/user/User'
import Github, {gitHubInfoLoader} from './components/gitHub/Github'



const router = createBrowserRouter([
  {
  path: '/',
  element: <Layout/>,
  children: [
    {
      path:"",
      element: <Home/> 
    },
    {
      path: "About",
      element: <About/>
    },
    {
      path:"Contact-Us",
      element: <Contact/>
    },
    {
      path: 'user/:userid', 
      element: <User/>
    },
    {
      loader : gitHubInfoLoader ,
      path: 'Github',
      element: <Github/>
    }
  ]
 }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
