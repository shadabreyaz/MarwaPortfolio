import React from 'react'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Contact from "./Components/Contact"
import Home from './pages/Home'

function App() {

  function MainLayout() {
    return (
      <>
        {/* <ScrollTopRoute /> */}
        <Header />
        <Outlet />
        <Footer />
      </>
    )
  }

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: '/contact',
          element: <Contact /> ,
        },
       ]
      
    }
  ])

  return <RouterProvider router={routes} />
}

export default App