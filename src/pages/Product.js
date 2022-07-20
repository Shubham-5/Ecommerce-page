import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function getProduct() {
      try {
        const result = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await result.json();
        setProduct(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }

    getProduct();
  }, []);

  return (
    <>
      <nav className='breadcrumb' aria-label='breadcrumb'>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item'>
            <a href='' onClick={() => navigate("/")}>
              Home
            </a>
          </li>
          <li className='breadcrumb-item active' aria-current='page'>
            Product
          </li>
        </ol>
      </nav>
      <div className='row'>
        <aside className='col-lg-6'>
          <article className='gallery-wrap'>
            <div className='img-big-wrap img-thumbnail'>
              <a
                data-fslightbox='mygalley'
                data-type='image'
                href={product.image}>
                <img
                  height='560'
                  className='mx-auto d-block'
                  src={product.image}
                />
              </a>
            </div>
          </article>
        </aside>
        <main className='col-lg-6'>
          <article className='ps-lg-3'>
            <h4 className='title text-dark'>
              Quality Men's Hoodie for Winter, Men's Fashion <br /> Casual
              Hoodie{" "}
            </h4>
            <div className='rating-wrap my-3'>
              <span className='label-rating text-success'>rate : </span>
              <b className='label-rating text-warning'>
                {product?.rating?.rate}/5
              </b>{" "}
              <span className='label-rating text-success'>count : </span>
              <b className='label-rating text-warning'>
                {" "}
                {product?.rating?.count}
              </b>{" "}
            </div>

            <div className='mb-3'>
              <var className='price h5'>${product.price}</var>
              <span className='text-muted'>/per item</span>
            </div>

            <p>
              Modern look and quality demo item is a streetwear-inspired
              collection that continues to break away from the conventions of
              mainstream fashion. Made in Italy, these black and brown clothing
              low-top shirts for men.
            </p>

            <dl className='row'>
              <dt className='col-3'>Category:</dt>
              <dd className='col-9'>{product.category}</dd>
            </dl>
          </article>
        </main>
      </div>
    </>
  );
};

export default Product;
