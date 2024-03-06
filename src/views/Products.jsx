import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader/Loader";
import ProductCard from "../components/ProductCard";
import { getProductCatalog } from "../store/actions/productCatalogActions";
import Pagination from "react-bootstrap/Pagination";

const Products = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  useEffect(() => {
    dispatch(getProductCatalog());
  }, [dispatch]);

  const { products, loading, error } = useSelector(
    (state) => state.productCatalog
  );

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {loading && <Loader />}
      {error && <p>{error}</p>}

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {currentProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination className="d-flex justify-content-center align-items-center my-4">
        {Array.from({
          length: Math.ceil(products.length / productsPerPage),
        }).map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </>
  );
};

export default Products;
