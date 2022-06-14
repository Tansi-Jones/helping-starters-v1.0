import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Index from "./pages/Index";
import Liked from "./pages/Liked";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import CreateProject from "./pages/CreateProject";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import ProjectDetails from "./pages/ProjectDetails";

import { Navigation } from "./components/Navbar/Navigation";
import { Footer } from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Toaster />
      <div className="bg-white shadow-sm">
        <Navigation />
      </div>

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Register" element={<Register />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/Liked" element={<Liked />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/details/:id" element={<ProjectDetails />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
