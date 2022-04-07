import React, { useState, useEffect } from "react";
import { getCategories } from "../service/Category";

export default function MenuComponent() {
  const [category, setCategory] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await getCategories();
    if (response.code === 200) {
      setCategory(response.data);
    } else {
      alert("Something error, in category : " + response.error);
    }
  };

  const puplatingCategory = () => {
    if (category.length > 0) {
      return category.map((item, index) => (
        <div key={index} className="basis-1/5 ">
          <a href="/#" className="hover:text-orange-600 active:text-orange-500">
            {item.title}
          </a>
        </div>
      ));
    }
    return (
      <div className="basis-1/5 ">
        <a href="/#" className="hover:text-orange-600 active:text-orange-500">
          Tidak ada Category
        </a>
      </div>
    );
  };

  return (
    <div className="flex">
      <div className=" justify-center">
        <div className="mt-10 text-center">
          <h1 className="text-5xl font-semibold font-sans ">
            Shop By Category
          </h1>
          <p className="m-2">visit our shop to see amazing product</p>

          <div className="bg-neutral-800 w-40 h-1 rounded m-auto"></div>

          <div className="flex flex-row mt-5 justify-center">
            {puplatingCategory()}
          </div>
        </div>
      </div>
    </div>
  );
}
