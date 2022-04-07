import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import MenuComponent from "../components/MenuComponent";
import NavbarComponent from "../components/NavbarComponent";
import banner from "../assets/banner.jpg";
import { getProducts } from "../service/Product";
import { Link } from "react-router-dom";
export default function Home() {
  const [product, setProduct] = useState({});
  const [links, setLinks] = useState({});

  useEffect(() => {
    fetchDataProduct();
  }, []);
  const fetchDataProduct = async () => {
    const response = await getProducts();
    if (response.code === 200) {
      setProduct(response.data);
      console.log(product);
      setLinks(response.links);
    } else {
      alert("Something error, please reload");
    }
  };

  const populatingItemProduct = () => {
    if (product.length > 0) {
      return product.map((item, index) => (
        <a href={`/product/${item.id}`}>
          <Card
            id={item.id}
            image={item.image}
            namaProduct={item.title}
            harga={item.price}
          />
        </a>
      ));
    } else {
      return <span>Tidak Ada Product</span>;
    }
  };

  return (
    <div className="bg-slate-100">
      <NavbarComponent label={"home"} />
      <div className="justify-center">
        <img className="w-screen mt-1" src={banner} alt="banner" />
      </div>
      <div className="flex justify-center">
        <MenuComponent />
      </div>
      <div className="flex justify-center m-auto  ">
        {populatingItemProduct()}
      </div>
    </div>
  );
}
