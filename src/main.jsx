import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './style.css'
import Home from "./Home";
import Shop from "./Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

// Odin Cart Structure

// - Basic Home Page

// - Navbar Component
//    - Must have two links
//    - When on shopping page a cart appears with a quantity in the Navbar
//      thats updated whenever an item is added to a cart

// - Shop Container / Shop Page
//    - Will be used to hold all of the content on the shop page
//    - Must have a quantity setState()
//    - Pass quantity into Navbar whenever another button is clicked

// - Product
//    - Fetch images and descriptions from an api
//    - Will contain it's own quantity with increment and decrement buttons
//    - Will have an Add to Cart button which will update the cart accordingly
//      with the correct number of items the user has added
//    - Quantity should b decoupled from the Product API we only want the API
//      to be called once