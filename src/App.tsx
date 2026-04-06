import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from '@/components/my-header'
import { ThemeProvider } from "@/components/theme-provider"
import Newpage from './newpage';
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
        {<Route path="/" element={<><MainBody /></>} />}
        {<Route path="/projects" element={<Projects />} />}
        {<Route path="/newpage" element={<Newpage />} />}
      </Routes>
    </>
  );
}
export default App
