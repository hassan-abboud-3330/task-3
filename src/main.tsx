import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import { createBrowserRouter } from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Root/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>,
//       }
//     ]
//   }
// ])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
