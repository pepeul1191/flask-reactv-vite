import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../stylesheets/styles.css'
import Web from '../components/layouts/Web.jsx'

createRoot(document.getElementById('root')).render(
  <Web />,
)
