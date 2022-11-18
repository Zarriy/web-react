import logo from "./media/logo.png";

function Header() {
  return (
    <>
      <header className="flex flex-row justify-between items-center mx-12 my-2 h-20 text-white">
        <div>
          <img src={logo} width="80px" height="80px" alt="Website Logo" />
        </div>
        <div>
          <ul className="nav-elements flex flex-row gap-20 font-medium text-lg">
            <li>About</li>
            <li>Shop</li>
            <li className="text-2xl">
              <ion-icon name="cart-outline"></ion-icon>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
