import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { getUser } from "./utilities/users-service";
import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import ShoppingCart from "./pages/ShoppingCart";
import SingleItem from "./pages/SingleItem";
import About from "./pages/About";
import DisplayCart from "./components/DisplayCart";
import AuthPage from "./pages/AuthPage";
import AddForm from "./components/AddForm";
import UsedItems from "./pages/UsedItems";

function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(getUser());
  return (
    <div className="App">
      {user ? (
        <Router>
          <div className="header">
            <NavBar />
            <DisplayCart cart={cart} />
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/used" element={<UsedItems />} />
            <Route path="/add" element={<AddForm />} />
            <Route
              path="/shoppingCart"
              element={<ShoppingCart cart={cart} setCart={setCart} />}
            />
            <Route
              path="/:id"
              element={<SingleItem cart={cart} setCart={setCart} />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </div>
  );
}

export default App;
