import { Product } from "../types";

const ProductItem = ({
  category,
  description,
  id,
  image,
  price,
  rating,
  title,
}: Product) => {
  return (
    <li className="products-item">
      <p className="products-item_category">{category}</p>
      <p className="products-item_title">{title}</p>
      {/* <p className="products-item_description">{description}</p> */}
      <img src={image} className="products-item_image" />
      <span className="products-item_price">${price}</span>
      <span className="products-item_rating">
        {rating.count}/{rating.rate}
      </span>
    </li>
  );
};

export default ProductItem;