import Landing from './pages/landingPage/landing'
import Articles from './pages/articles/articles';
import NotFound from './pages/404/404';
import WebIntro from './pages/article/webDesignIntro';
import WebBusiness from './pages/article/web for business';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="article/web design for business" element={<WebBusiness />} />
        <Route path="article/intro to web design" element={<WebIntro/>} />
        {/* Fallback route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
