import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Checkout from "./views/Checkout";
import Home from "./views/Home";
import Products from "./views/Products";
import Login from "./views/Login";
import Register from "./views/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/products"
            element={isLoggedIn ? <Products /> : <Navigate to="/login" />}
          />
          <Route
            path="/checkout"
            element={isLoggedIn ? <Checkout /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
      <ToastContainer />
    </>
  );
};

export default App;
