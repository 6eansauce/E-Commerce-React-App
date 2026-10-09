import { books } from "./data";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const changeQuantity = (book, quantity) => {
    setCart(
      cart.map((item) => {
        if (+item.id === +book.id) return { ...item, quantity: +quantity };
        return item;
      }),
    );
  };

  const addToCart = (book) => {
    const dupeItem = cart.find((item) => +item.id === +book.id);

    if (dupeItem) {
      setCart(
        cart.map((item) => {
          if (+item.id === +dupeItem.id)
            return { ...item, quantity: ++item.quantity };
          return item;
        }),
      );
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  };

  const removeFromCart = (book) => {
    setCart(cart.filter((item) => item.id !== book.id));
  };

  const countCartItems = () => {
    let count = 0;
    cart.forEach((item) => (count += item.quantity));
    return count;
  };

  return (
    <Router>
      <div className="App">
        <Nav countCartItems={countCartItems()} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books booksData={books} />} />
          <Route
            path="/books/:id"
            element={
              <BookInfo booksData={books} cart={cart} addToCart={addToCart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                booksData={books}
                cart={cart}
                changeQuantity={changeQuantity}
                removeFromCart={removeFromCart}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
