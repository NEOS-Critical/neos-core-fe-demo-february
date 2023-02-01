import { Routes, Route } from 'react-router-dom';
import DataLandscape from './pages/DataLandscape';
import Home from './pages/Home';
import ExchangeAll from './pages/ExchangeAll';
import ExchangeOnlyMine from './pages/ExchangeOnlyMine';
import ExchangeSharedWithMe from './pages/ExchangeSharedWithMe';
import ExchangeAvailable from './pages/ExchangeAvailable';
import WorkerProfile from './pages/WorkerProfile';
import WorkerProfileDetails from './pages/WorkerProfileDetails';
import HomeSubscribed from './pages/HomeSubscribed';

function App() {
  return (
    <div className="2xl:container mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-subscribe" element={<HomeSubscribed />} />
        <Route path="/data-landscape" element={<DataLandscape />} />
        <Route path="/exchange-all" element={<ExchangeAll />} />
        <Route path="/exchange-only-mine" element={<ExchangeOnlyMine />} />
        <Route path="/exchange-shared" element={<ExchangeSharedWithMe />} />
        <Route path="/exchange-available" element={<ExchangeAvailable />} />
        <Route path="/worker-profile" element={<WorkerProfile />} />
        <Route path="/worker-profile-details" element={<WorkerProfileDetails />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
