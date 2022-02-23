import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Product from "./Page/Product";
import { Provider } from "react-redux";
import store from "./redux/store";
import Cart from "./components/CartContent";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
                       
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
