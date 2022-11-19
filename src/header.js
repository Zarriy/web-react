import { useState } from "react";
import logo from "./media/logo.png";
import Button from "./components/button";
import CartDisplay from "./hero-section/cart";

function Header() {
  const [displayCart, setDisplayCart] = useState(false);
  const CartClickBtn = () => {
    setDisplayCart(true);
  };
  const closeCartHanlder = () => {
    setDisplayCart(false);
  };
  const classes = displayCart
    ? "translate-x-0 transition-transform	duration-150	ease-in	absolute top-0 right-0 h-screen w-80 bg-emerald-100 z-20 flex flex-col justify-between"
    : "translate-x-full transition-transform	duration-150	ease-out absolute top-0 right-0 h-screen w-80 bg-emerald-100 z-20 flex flex-col justify-between";
  return (
    <>
      <CartDisplay displayClasses={classes} closeHandler={closeCartHanlder} />
      <header className="flex flex-row justify-between items-center mx-12 my-2 h-20 text-white">
        <div>
          <img src={logo} width="80px" height="80px" alt="Website Logo" />
        </div>
        <div>
          <ul className="nav-elements flex flex-row gap-20 font-medium text-lg">
            <li>About</li>
            <li>Shop</li>
            <li className="text-2xl">
              <Button
                handleButtonClick={CartClickBtn}
                text={<ion-icon name="cart-outline"></ion-icon>}
              />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
