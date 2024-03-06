import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/shoppingCartActions";
import { FaHeart } from "react-icons/fa";
import { addToFav } from "../store/actions/favCartAction";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="col ">
      <div className="card h-100 relative">
        <span className="btn-fav" onClick={() => dispatch(addToFav(product))}>
          <FaHeart />
        </span>
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.short.slice(0, 20)}</p>
          <div className="d-flex justify-content-between align-items-center">
            <button
              className="btn btn-info"
              onClick={() => dispatch(addToCart(product))}
            >
              Add To Cart
            </button>
            <p className="text-danger h5">{product.price} :-</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
