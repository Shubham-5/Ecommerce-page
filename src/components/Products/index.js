import { Link } from "react-router-dom";
import Product from "./Product";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Index = ({ products }) => {
  const [mens, setMens] = useState(false);
  const [womens, setWomens] = useState(false);
  const filterProducts = products.filter(
    ({ category }) =>
      (mens && category === "men's clothing") ||
      (womens && category === "women's clothing")
  );
  console.log(filterProducts);
  return (
    <>
      <div className='row'>
        <Sidebar
          mens={mens}
          womens={womens}
          setMens={setMens}
          setWomens={setWomens}
        />
        <main className='col-lg-9'>
          <div className='row'>
            {filterProducts.length === 0
              ? products.map((product) => (
                  <Link
                    to={`/product/${product.id}`}
                    className='d-block col-lg-4 col-md-6 col-sm-6 '
                    style={{
                      color: "inherit",
                      textDecoration: "inherit",
                    }}>
                    <Product key={product.id} product={product} />
                  </Link>
                ))
              : filterProducts.map((product) => (
                  <Link
                    to={`/product/${product.id}`}
                    className='d-block col-lg-4 col-md-6 col-sm-6 '
                    style={{
                      color: "inherit",
                      textDecoration: "inherit",
                    }}>
                    <Product key={product.id} product={product} />
                  </Link>
                ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Index;
