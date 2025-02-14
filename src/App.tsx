import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Header from '@/components/my-header'
import { ThemeProvider } from "@/components/theme-provider"
import ThemeSwitcher from './components/theme-switcher'
import Tassy from './components/for-tassy';
import TassysPage from './tassyspage';
function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        {/* {<Routes>
          <Route path="/" element={<Tassy />} />
          <Route path="/tassyspage" element={<TassysPage />} />
        </Routes>} */}
        <Tassy />
      </ThemeProvider>
    </>
  )
}

export default App
