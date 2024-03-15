import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Project from './pages/Project';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default App
