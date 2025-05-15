import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Coachs1Page from "./pages/Coachs1";
import Coachs2Page from "./pages/Coachs2";
import Connexion from "./components/connexion/Connexion";
import HomePage from "./pages/Home";
import Produits1Page from "./pages/Produits1";
import Produits2Page from "./pages/Produits2";
import Salles1Page from "./pages/Salles1";
import Salles2Page from "./pages/Salles2";
import Home2Page from "./pages/Home2";
import Registration from './components/Registration/Registration';
import Communaute from "./pages/communaute";
import Communaute2 from "./pages/Communaute2";
import FAQ from "./pages/FAQ";
import Commender from "./pages/Commender";
import Formulaire from "./pages/Formulaire";
import Panier from "./pages/Panier";
import Dashboard from "./pages/Dashboard";
import Proprs from "./pages/Proprs";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import GymDetail from "./pages/GymDetail";
import CoachDetail from "./pages/CoachDetail";

function App() {
  return (
    <Router>
      <div className="bg-background">
        {/* Routes */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/produits1" element={<Produits1Page />} />
          <Route path="/produits2" element={<Produits2Page />} />
          <Route path="/coachs1" element={<Coachs1Page />} />
          <Route path="/coachs2" element={<Coachs2Page />} />
          <Route path="/salles1" element={<Salles1Page />} />
          <Route path="/salles2" element={<Salles2Page />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/crier-mon-compte" element={<Registration/>} />
          <Route path="/gym/:id" element={<GymDetail />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/coach/:id" element={<CoachDetail />} />
          
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/home2" element={<Home2Page />} />
            <Route path="/communaute" element={<Communaute />} />
            <Route path="/communaute2" element={<Communaute2 />} />
            <Route path="/commender" element={<Commender />} />
            <Route path="/formulaire" element={<Formulaire />} />
            <Route path="/panier" element={<Panier />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/proprs" element={<Proprs />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
