import { Link} from "react-router-dom";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import { useSelector } from "react-redux";
import Account from "./Account";
import { FaLock, FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import FavoritCart from "./FavoritCart/FavoritCart";

const Navbar = () => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const totalQuantity = useSelector(
    (state) => state.shoppingCart.totalQuantity
  );
  const favQuantity = useSelector((state) => state.favoritCart.favQuantity);

  const style = () => {
    if (!isLoggedIn) {
      return { display: "none" };
    }
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Link className="navbar-brand" to="/">
            LOGO
          </Link>

          {/* <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className="nav-link">
                Products
              </NavLink>
            </li>
          </ul> */}
        </div>

        <div className="d-flex align-items-center">
          <div className="dropdown text-light">
            <span
              className="text-reset me-3 dropdown-toggle hidden-arrow"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <FaHeart />
              {favQuantity > 0 && (
                <span className="badge rounded-pill badge-notification bg-danger">
                  {favQuantity}
                </span>
              )}
            </span>
            <ul
              className="dropdown-menu dropdown-menu-end shopping-cart"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <FavoritCart />
            </ul>
          </div>
          <div className="dropdown text-light">
            <span
              className="text-reset me-3 dropdown-toggle hidden-arrow"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-shopping-cart"></i>
              {totalQuantity > 0 && (
                <span className="badge rounded-pill badge-notification bg-danger">
                  {totalQuantity}
                </span>
              )}
            </span>
            <ul
              className="dropdown-menu dropdown-menu-end shopping-cart"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <ShoppingCart />
            </ul>
          </div>
          <div className="dropdown text-light">
            <span
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              {isLoggedIn ? <FaUser /> : <FaLock />}
            </span>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
              style={style()}
            >
              <Account user={user} />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
