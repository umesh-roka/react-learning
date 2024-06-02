import React from 'react'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import RouteLayout from './ui/RouteLayout'
import Home from './feature/Home'
import Api from './feature/Api'
const router =createBrowserRouter([{
  path:'/',
  element:<RouteLayout/>,
  children:[
    {path:'/home',element:<Home/>},
    {path:'/api',element:<Api/>},
  ]
}])
const App = () => {

  return <RouterProvider router={router}/>
}
export default App
