import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import MenuComponent from "../components/MenuComponent";
import NavbarComponent from "../components/NavbarComponent";
import banner from "../assets/banner.jpg";
import { getProducts, getProductByCategory } from "../service/Product";
import { Link, useLocation } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function Home() {
  const [product, setProduct] = useState({});
  const [links, setLinks] = useState({});
  const query = useQuery();

  const category = query.get("category");

  useEffect(() => {
    fetchDataProduct();
  }, []);

  const fetchDataProduct = async () => {
    let response = await getProducts();
    if (category) {
      response = await getProductByCategory(category);
    }
    if (response.code === 200) {
      setProduct(response.data);
      setLinks(response.links);
    } else {
      alert("Something error, please reload");
    }
  };

  const populatingItemProduct = () => {
    if (product.length > 0) {
      return product.map((item, index) => (
        // <a href={``}>
        <Card
          id={item.id}
          image={item.image}
          namaProduct={item.title}
          harga={item.price}
        />
        // </a>
      ));
    } else {
      return <span>Tidak Ada Product</span>;
    }
  };

  return (
    <div className="bg-slate-100 h-full">
      <NavbarComponent />
      <div className="justify-center">
        <img className="w-screen mt-1" src={banner} alt="banner" />
      </div>
      <div className="flex justify-center">
        <MenuComponent />
      </div>
      <div className="flex justify-center flex-wrap mx-auto x">
        {populatingItemProduct()}
      </div>

      {/* pagination */}
      <div className="flex justify-center my-9">
        <nav aria-label="Page navigation example">
          <ul className="flex list-style-none">
            <li className="page-item disabled">
              <a
                className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500 pointer-events-none focus:shadow-none"
                href="#!"
                tabiIndex="-1"
                aria-disabled="true"
              >
                Previous
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                href="!#"
              >
                1
              </a>
            </li>
            <li className="page-item active">
              <a
                className="page-link relative block py-1.5 px-3 rounded border-0 bg-blue-600 outline-none transition-all duration-300 rounded text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
                href="!#"
              >
                2 <span className="visually-hidden">(current)</span>
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                href="!#"
              >
                3
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                href="!#"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
