import { Link } from "react-router-dom";
import EmptyCart from "../assets/empty_cart.svg";

const Cart = ({ cart, changeQuantity, removeFromCart }) => {
  const taxRate = 0.1; // 10%

  const calculateTotal = (quantity, price) => {
    return quantity * price;
  };

  const calculateSubtotal = (arr) => {
    let subtotal = 0;

    arr.forEach(
      (item) =>
        (subtotal += calculateTotal(
          item.quantity,
          item.salePrice || item.originalPrice,
        )),
    );

    return subtotal;
  };

  const displayPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  const displayTotal = (item) => {
    const total = calculateTotal(
      item.quantity,
      item.salePrice || item.originalPrice,
    );
    return displayPrice(total);
  };

  const displaySubtotal = (arr) => {
    const subtotal = calculateSubtotal(arr);
    return displayPrice(subtotal);
  };

  const displayTax = (arr) => {
    const subtotal = calculateSubtotal(arr);
    const taxAmount = subtotal * taxRate;
    return displayPrice(taxAmount);
  };

  const displayGrandTotal = (arr) => {
    const subtotal = calculateSubtotal(arr);
    const taxAmount = subtotal * taxRate;
    return displayPrice(subtotal + taxAmount);
  };

  const displayItems = (arr) => {
    return arr.map((item, index) => {
      return (
        <div className="cart__item" key={index}>
          <div className="cart__book">
            <img src={item.url} alt="" className="cart__book--img" />

            <div className="cart__book--info">
              <span className="cart__book--title">{item.title}</span>
              <span className="cart__book--price">
                {displayPrice(item.salePrice || item.originalPrice)}
              </span>

              <button
                className="cart__book--remove"
                onClick={() => removeFromCart(item)}
              >
                Remove
              </button>
            </div>
          </div>

          <div className="cart__quantity">
            <input
              type="number"
              min={0}
              max={99}
              className="cart__input"
              value={item.quantity}
              onChange={(event) => changeQuantity(item, event.target.value)}
            />
          </div>

          <div className="cart__total">{displayTotal(item)}</div>
        </div>
      );
    });
  };

  return (
    <div id="books__body">
      <main className="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>

            <div className="cart">
              <div className="cart__header">
                <div className="cart__book">Book</div>
                <div className="cart__quantity">Quantity</div>
                <div className="cart__total">Price</div>
              </div>

              <div className="cart__body">{displayItems(cart)}</div>
            </div>

            {cart.length === 0 ? (
              <div className="cart__empty">
                <img src={EmptyCart} alt="" className="cart__empty--img" />
                <h2>You don't have any books in your cart!</h2>
                <Link to="/books">
                  <button className="btn">Browse Books</button>
                </Link>
              </div>
            ) : (
              <div className="total">
                <div className="total__item total__sub-total">
                  <span>Subtotal</span>
                  <span>{displaySubtotal(cart)}</span>
                </div>

                <div className="total__item total__tax">
                  <span>Tax</span>
                  <span>{displayTax(cart)}</span>
                </div>

                <div className="total__item total__price">
                  <span>Total</span>
                  <span>{displayGrandTotal(cart)}</span>
                </div>

                <button className="btn btn__checkout no-cursor">
                  Proceed to checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
