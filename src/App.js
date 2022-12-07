import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Agreement from './pages/Agreement';
import { Community, Direct, Guide, Notice, Question, Review, Visit } from './pages/Community';
import Custom from './pages/Custom';
import Design from './pages/Design';
import ETC from './pages/ETC';
import Home from './pages/Home';
import Item from './pages/Item';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import SighIn from './pages/SighIn';
import SighUp from './pages/SighUp';
import Test from './pages/Test';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* 메인 페이지 */}
          <Route index element={<Home />} />

          {/* 상품 페이지들 */}
          <Route path='/custom' element={<Custom />} />
          <Route path='/design' element={<Design />} />
          <Route path='/etc' element={<ETC />} />

          {/* 커뮤니티 */}
          <Route path='/community/*' element={<Community />}>
            <Route path='notice' element={<Notice />} />
            <Route path='guide' element={<Guide />} />
            <Route path='visit' element={<Visit />} />
            <Route path='question' element={<Question />} />
            <Route path='review' element={<Review />} />
            <Route path='direct' element={<Direct />} />
          </Route>

          {/* 이용약관, 개인정보 처리방침 */}
          <Route path='/agree' element={<Agreement />} />

          {/* 로그인, 회원가입 */}
          <Route path='/sighin' element={<SighIn />} />
          <Route path='/sighup' element={<SighUp />} />

          {/* 상품 상세 페이지 */}
          <Route path='/item/:id' element={<Item />} />

          {/* 검색 페이지 */}
          <Route path='/search' element={<Search />} />

          {/* 그 외의 모든 주소는 없는 페이지로 구현 */}
          <Route path='/*' element={<NotFound />} />

          {/* styled-components를 위한 테스트 페이지 */}
          <Route path='/test' element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
