import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css'
import Header from '@/components/my-header'
import { ThemeProvider } from "@/components/theme-provider"
import Tassy from './components/for-tassy';
import TassysPage from './tassyspage';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Projects from './projects';

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
      <div className="sticky top-0">{showHeader && <Header />}</div>
      <Routes>
        <>
          {<Route path="/website" element={<main />} />}
          {<Route path="/projects" element={<Projects />} />}
          {/* <Route path="/tassyspage" element={<TassysPage />} /> */}
        </>
      </Routes>
    </>
  );
}
export default App
