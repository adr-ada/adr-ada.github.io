import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css'
import Header from '@/components/my-header'
import { ThemeProvider } from "@/components/theme-provider"
import Tassy from './components/for-tassy';
import TassysPage from './tassyspage';
import Projects from './Projects';
import MainBody from './mainbody';
function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <MainContent />
        </Router>
      </ThemeProvider>
    </>
  )
}
function MainContent() {

  return (
    <>
      <div className="sticky top-0">
        <Header />
      </div>
      <Routes>
        {<Route path="/website" element={<MainBody />} />}
        {<Route path="/projects" element={<Projects />} />}
      </Routes>
    </>
  );
}
export default App
