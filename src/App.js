import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Community from './pages/Community';
import Custom from './pages/Custom';
import Design from './pages/Design';
import ETC from './pages/ETC';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SighIn from './pages/SighIn';
import SighUp from './pages/SighUp';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/custom' element={<Custom />} />
          <Route path='/design' element={<Design />} />
          <Route path='/etc' element={<ETC />} />
          <Route path='/community' element={<Community />} />
          <Route path='/sighin' element={<SighIn />} />
          <Route path='/sighup' element={<SighUp />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
