import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home/Home';
import AnimeDetail from './pages/Anime/AnimeDetail';
import CollectionListPage from './pages/Collection/CollectionListPage';
import CollectionDetailPage from './pages/Collection/CollectionDetailPage';

function App() {
  return (
    <>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/anime/:id" element={<AnimeDetail />} />
            <Route path="/collections" element={<CollectionListPage />} />
            <Route path="/collections/:id" element={<CollectionDetailPage />} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
}

export default App;
