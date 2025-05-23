import React, { useState, useEffect } from "react";
import Product from "../components/common/Product.jsx";
import Loader from "../components/common/Loader.jsx";
import "./Products.css";
import { useParams, useSearchParams } from "react-router-dom";

export default function Products({}) {
  const [products, setProducts] = useState(null);
  var filter = []; //seznam idček, který se mají zobrazit (ve stringu)

  const [searchParams] = useSearchParams();
  const query = searchParams.get("filter") ?? "";
  const [mapped, setMapped] = useState(() => ""); //ukládáme celou db itemů, pro filtrování

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => pullData(json));
  }, []);

  useEffect(() => {
    console.log(mapped);
    if (mapped != "") {
      pullData("");
    }
  }, [query]);

  function pullData(json) {
    if (json != "") {
      const batchId = Math.random();
      var tempMapped = json.map((item, i) => (
        <Product
          key={item.id + batchId}
          id={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
          price={item.price}
        />
      ));
      setMapped(tempMapped);
    }

    let exporting = [];

    filter = query.split(";");
    console.log(mapped);
    //pokud je item ve filteru nebo pokud je filter prázdný zobrazit produkt
    if (mapped == "") {
      tempMapped.forEach((element) => {
        if (
          filter.includes(element.props.id.toString()) ||
          (filter.length === 1 && filter[0] == "")
        ) {
          exporting.push(element);
        }
      });
    } else {
      mapped.forEach((element) => {
        if (
          filter.includes(element.props.id.toString()) ||
          (filter.length === 1 && filter[0] == "")
        ) {
          exporting.push(element);
        }
      });
    }

    setProducts(exporting);
  }

  if (!products) return <Loader />;
  return (
    <>
      <h1>Produkty</h1>
      <div className="products">{products}</div>
    </>
  );
}
