import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Agreement from './pages/Agreement';
import Community from './pages/Community';
import Direct from './pages/Community/Direct';
import Guide from './pages/Community/Guide';
import Notice from './pages/Community/Notice';
import Question from './pages/Community/Question';
import Review from './pages/Community/Review';
import Visit from './pages/Community/Visit';
import Custom from './pages/Custom';
import Design from './pages/Design';
import ETC from './pages/ETC';
import Home from './pages/Home';
import Item from './pages/Item';
import NotFound from './pages/NotFound';
import SighIn from './pages/SighIn';
import SighUp from './pages/SighUp';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/custom' element={<Custom />} />
          <Route path='/design' element={<Design />} />
          <Route path='/etc' element={<ETC />} />
          <Route path='/community/*' element={<Community />}>
            <Route path='direct' element={<Direct />} />
            <Route path='guide' element={<Guide />} />
            <Route path='notice' element={<Notice />} />
            <Route path='question' element={<Question />} />
            <Route path='review' element={<Review />} />
            <Route path='visit' element={<Visit />} />
          </Route>
          <Route path='/agree' element={<Agreement />} />
          <Route path='/sighin' element={<SighIn />} />
          <Route path='/sighup' element={<SighUp />} />

          <Route path='/item/:id' element={<Item />} />

          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
