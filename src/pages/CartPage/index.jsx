import { useContext } from "react";
import ProductContext from "../../context/ProductContext";
import DefaultLayout from "../../layouts/DefaultLayout";

function CartPage() {
  const { cartProducts } = useContext(ProductContext);

  return (
    <DefaultLayout>
      <div>
        {cartProducts.map((product) => {
          return <div key={product.id}>{product.title}</div>;
        })}
      </div>
    </DefaultLayout>
  );
}

export default CartPage;
