import { Routes, Route } from 'react-router-dom';
import DataLandscape from './pages/DataLandscape';
import Home from './pages/Home';

function App() {
  return (
    <div className="2xl:container mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data-landscape" element={<DataLandscape />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
