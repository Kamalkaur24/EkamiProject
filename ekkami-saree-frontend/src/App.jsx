import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

// Components
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RefreshHandler from "./components/RefreshHandler";

// Pages
import Signup from "./components/Signup";
import Login from "./components/Login";
import Saree from "./pages/Saree";
import FestiveSaree from "./pages/FestiveSaree";
import FormalSaree from "./pages/FormalSaree";
import AboutUs from "./pages/AboutUs";
import SizeChart from "./pages/SizeChart";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

// ✅ Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// ✅ Layout Wrapper
function Layout({ children }) {
  const location = useLocation();
  const hideLayout = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideLayout && <Navbar />}
      <main style={{ marginTop: hideLayout ? "0" : "80px", minHeight: "80vh", backgroundColor: "#fff" }}>
        {children}
      </main>
      {!hideLayout && <Footer />}
    </>
  );
}

// ✅ App Component
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // ✅ PrivateRoute wrapper
  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          {/* Main Pages */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          {/* Wishlist & Cart (Private) */}
          <Route
            path="/wishlist"
            element={
              <PrivateRoute>
                <Wishlist />
              </PrivateRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />


          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />


          {/* Category Pages */}
          <Route path="/Saree" element={<Saree />} />
          <Route path="/FestiveSaree" element={<FestiveSaree />} />
          <Route path="/FormalSaree" element={<FormalSaree />} />

          {/* Info Pages */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/size-chart" element={<SizeChart />} />

          {/* 404 */}
          <Route
            path="*"
            element={
              <div style={{ textAlign: "center", padding: "100px", fontSize: "1.2rem" }}>
                <h2>404 — Page Not Found</h2>
                <p>Oops! The page you’re looking for doesn’t exist.</p>
              </div>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
