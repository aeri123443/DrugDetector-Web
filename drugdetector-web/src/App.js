import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogsAndAlerts from './pages/logsandalerts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LogsAndAlerts />} />
            <Route path="/LogsAndAlerts/*" element={<LogsAndAlerts />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
