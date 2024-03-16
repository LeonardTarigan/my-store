import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import ProductContext from "../../context/ProductContext";
import DefaultLayout from "../../layouts/DefaultLayout";

function ProductDetailPage() {
  const [product, setProduct] = useState();

  const { setCartProducts } = useContext(ProductContext);

  const params = useParams();

  useEffect(() => {
    const getData = async () => {
      const response = await api.get(`/products/${params.id}`);

      setProduct(response.data);
    };

    getData();
  }, [params.id]);

  return (
    <DefaultLayout>
      <div>
        <h1>{product?.title}</h1>
        <button onClick={() => setCartProducts((prev) => [...prev, product])}>
          Add to Cart
        </button>
      </div>
    </DefaultLayout>
  );
}

export default ProductDetailPage;
