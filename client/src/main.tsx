import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ContactPage from './pages/contact'
import HomePage from './pages/home'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import AboutPage from './pages/about'
import ProductPage from './pages/product'

const router = createBrowserRouter([
  {path:"/", element:<HomePage/>},
  {path:"/contact", element:<ContactPage/>},
  {path:"/login", element:<LoginPage/>},
  {path:"/register", element:<RegisterPage/>},
  {path:"/about", element: <AboutPage/>},
  {path:"/products", element: <ProductPage/>}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
