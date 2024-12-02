import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/style.css'
import App from './App.tsx'
import { SidebarProvider } from '@/context'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <SidebarProvider>
    <App />
    </SidebarProvider>
  </StrictMode>
)
