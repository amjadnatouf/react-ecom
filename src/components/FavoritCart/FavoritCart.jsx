import { useDispatch, useSelector } from "react-redux";
import FavoritProduct from "./FavoritProduct";
import Button from "react-bootstrap/Button";
import { clearFav } from "../../store/actions/favCartAction";

const FavoritCart = () => {
  const dispatch = useDispatch();
  const emptyCart = (
    <div className="p-2 text-center">Your Favorit is empty</div>
  );

  const { fav } = useSelector((state) => state.favoritCart);

  const clear = (e) => {
    e.stopPropagation();
    dispatch(clearFav());
  };
  return (
    <div>
      {fav?.map((product) => (
        <FavoritProduct key={product._id} item={product} />
      ))}

      {!fav.length && emptyCart}
      <div className="dropdown-divider"></div>

      <div className="d-flex justify-content-center align-items-center p-2">
        <div>
          <Button onClick={clear} className="btn btn-info">
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FavoritCart;
