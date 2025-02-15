import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css'
import Header from '@/components/my-header'
import { ThemeProvider } from "@/components/theme-provider"
import Tassy from './components/for-tassy';
import TassysPage from './tassyspage';
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
  const location = useLocation();
  const showHeader = location.pathname !== '/tassyspage';

  return (
    <>
      {showHeader && <Header />}
      <Routes>
        {/* <Route path="/website" element={<Tassy />} /> */}
        <Route path="/tassyspage" element={<TassysPage />} />
      </Routes>
    </>
  );
}
export default App
