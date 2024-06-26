import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

const App = () => {
  return (
     <>
      <Home/>
      <ProductList/>
      <Product/> 
      <Register/>
      <Login/>
      <Cart/>
   </>
  );
};

export default App;