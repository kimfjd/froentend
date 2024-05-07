import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/profile";
import Age from "./pages/Age";
import Articles from "./pages/Articles";
import Articles1 from "./pages/Articles1";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/profiles/:name" element={<Profile />} />
          <Route path="/age/:age" element={<Age />} />
        </Route>
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<Articles1 />} />
      </Routes>
    </Router>
  );
}

export default App;
