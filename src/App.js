import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import URLDetection from "./pages/URLDetection";
import IPAnalysis from "./pages/IPAnalysis";
import PCAPAnalysis from "./pages/PCAPAnalysis";
import Reports from "./pages/Reports";

function App() {
  return (
    <Router>
      <Routes>

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <>
                <Navbar />
                <div className="p-6">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/url-detection" element={<URLDetection />} />
                    <Route path="/ip-analysis" element={<IPAnalysis />} />
                    <Route path="/pcap-analysis" element={<PCAPAnalysis />} />
                    <Route path="/reports" element={<Reports />} />
                  </Routes>
                </div>
              </>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
