import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { appRoutes } from './routes/appRoutes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRoutes} />
  </StrictMode>,
)
