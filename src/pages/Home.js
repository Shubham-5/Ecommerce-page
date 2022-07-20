import { useState, useEffect } from "react";
import Products from "../components/Products";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      try {
        const result = await fetch("https://fakestoreapi.com/products");
        const data = await result.json();
        setProducts(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    return () => {
      getProducts();
    };
  }, []);
  return (
    <div className='content'>
      {products.length ? (
        <Products products={products} />
      ) : (
        <div className='text-center '>Loading ..</div>
      )}
    </div>
  );
};

export default Home;
