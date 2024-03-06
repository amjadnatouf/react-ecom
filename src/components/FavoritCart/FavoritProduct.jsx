import { useDispatch } from "react-redux";
import { removeFavProduct } from "../../store/actions/favCartAction";
import Button from "react-bootstrap/Button";
import { addToCart } from "../../store/actions/shoppingCartActions";

const FavoritProduct = ({ item }) => {
  const dispatch = useDispatch();

  const add = (e) => {
    e.stopPropagation();
    dispatch(addToCart(item));
  };

  const remove = (e) => {
    e.stopPropagation();
    dispatch(removeFavProduct(item._id));
  };

  return (
    <div className="d-flex justify-content-between align-items-center p-2">
      <div className="d-flex align-items-center">
        <img
          src={item.image}
          className="img-fluid cart-image"
          alt={item.name}
        />
        <div>
          <div>
            <strong>{item.name}</strong>
          </div>
          <small>
            {item.quantity} x {item.price}
          </small>
        </div>
      </div>
      <div>
        <div className="btn-group me-1">
          <Button onClick={add} className="btn btn-dark btn-sm">
            Buy
          </Button>
        </div>
        <button className="btn btn-danger btn-sm px-2" onClick={remove}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default FavoritProduct;
