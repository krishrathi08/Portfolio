import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import 'aos/dist/aos.css'

import './styles/globals.scss'
import './styles/header.scss'
import './styles/outer.scss'
import './styles/gooery.scss'
import './styles/works.scss'
import './styles/side-element.scss'
import './styles/myself.scss'
import './styles/graphics.scss'
import './styles/projects.scss'
// Removed maps.scss import
import './styles/views-title.scss'
import './styles/hover-image.scss'
import './styles/window-screen.scss'
import './styles/tech-stacks.scss'
import './styles/top-scrolled-bar.scss'
import './styles/contact.scss'
import './styles/cursor.scss'
import './styles/krish-rathi.scss'
import './styles/pre-loader.scss'
// Removed certifications.scss import
import './styles/achievements.scss'
import './styles/contact-drawer.scss'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
