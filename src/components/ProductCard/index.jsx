import { Link } from "react-router-dom";
import style from "./ProductCard.module.css";

function ProductCard(props) {
  const { title, price, image, id } = props.data;

  return (
    <Link to={`/product/${id}`} className={style.card}>
      <div>
        <img src={image} className={style.image} />
      </div>

      <h2 className={style.title}>{title}</h2>
      <p className={style.price}>${price}</p>
    </Link>
  );
}

export default ProductCard;
