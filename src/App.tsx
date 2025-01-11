import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Header from '@/components/my-header'
import { ThemeProvider } from "@/components/theme-provider"
import ThemeSwitcher from './components/theme-switcher'

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {<Header />}
      </ThemeProvider>
    </>
  )
}

export default App
