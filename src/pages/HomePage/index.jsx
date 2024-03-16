import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import style from "./HomePage.module.css";
import api from "../../api";
import DefaultLayout from "../../layouts/DefaultLayout";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await api.get("/products");

      setProducts(response.data);
    };

    getData();
  }, []);

  return (
    <DefaultLayout>
      <main className={style.gridContainer}>
        {products.map((product) => {
          return <ProductCard key={product.id} data={product} />;
        })}
      </main>
    </DefaultLayout>
  );
}

export default HomePage;
