const Product = ({ product }) => {
  return (
    <figure className='card card-product-grid p-2 '>
      <div className='img-wrap'>
        <img
          src={product.image}
          style={{ width: "100%" }}
          alt={product.image}
        />
      </div>
      <figcaption className='info-wrap border-top p-2'>
        <div className='price-wrap'>
          <strong class='price'>$99.00</strong>
        </div>
        <p className='title mb-2'>
          T-shirts with multiple colors, for men and lady
        </p>
      </figcaption>
    </figure>
  );
};

export default Product;
