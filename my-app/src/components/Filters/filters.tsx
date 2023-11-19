import { useEffect, useState } from "react";
import "./filters.css";
import Card from "../Card/card";

interface Product {
  brand: string;
  gender: string;
  image: string;
  name: string;
  price: number;
  products: string;
}

const Filters = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filterItems, setFilteredItems] = useState<Product[]>([]);
  const [isActive, setIsActive] = useState(false);
  const counter = {};

  const brandArr = [
    "LE GRAND BIKES",

    "KROSS",

    "EXPLORER",

    "VISITOR",

    "PONY",

    "FORCE",

    "E-BIKES",

    "IDEAL",
  ];
  const genderArr = ["Male", "Female"];

  useEffect(() => {
    fetch("https://challenges.brainster.tech/ajax_data/data.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  let numberCount: any = [];
  brandArr.map(
    (bike: string) =>
      (numberCount = [
        ...numberCount,
        products.filter((opt: any) => {
          return opt.brand === bike;
        }),
      ])
  );

  let genderCount: any = [];

  genderArr.map(
    (gender: string) =>
      (genderCount = [
        ...genderCount,
        products.filter((opt: any) => {
          return opt.gender === gender.toUpperCase();
        }),
      ])
  );
  const handleSelectProduct = (e: any) => {
   
    const targetText = e.target.firstChild.data.toUpperCase();
    console.log(targetText);
  
    const newItems = products.filter(
      (item) => item.brand === targetText || item.gender === targetText
    );

    setFilteredItems(newItems);
    setIsActive(true);
    console.log(isActive);

    
  };
  const handleShowAll = () => {
    setIsActive(false);
  };
  return (
    <div className="filtersWrapper">
      <div className="filter_types">
        <h4>Filtered by:</h4>
        <div className="showall" onClick={handleShowAll}>
          <span className="show-all">Show all</span>
          <span className="all-products">{products.length}</span>
        </div>
        <hr />

        <div>
          <h4>Gender</h4>

          {genderArr.map((gender: string, index) => {
            return (
              <div
                className="gender"
                key={index}
                onClick={(e) => handleSelectProduct(e)}
              >
                <span className="gender-type">{gender}</span>
                <span className="total-number">{genderCount[index].length}</span>
              </div>
            );
          })}

          <hr />
        </div>

        <div className="brands">
          <h4>Brand</h4>
          <div className="cards-wrapper">
            {brandArr.map((brand: string, index) => {
              return (
                <div
                  key={brand}
                  className="brandWrapper"
                  onClick={(e) => handleSelectProduct(e)}
                >
                  <span className="brand-name">{brand}</span>
                  <span className="total-number">
                    {numberCount[index].length}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bikeCards">
        {isActive
          ? filterItems.map((bike, index) => (
              <div key={index}>
                <Card
                  img={`img/${bike.image}.png`}
                  title={bike.brand}
                  price={bike.price}
                />
              </div>
            ))
          : products.map((bike, index) => (
              <div key={index}>
                <Card
                  img={`img/${bike.image}.png`}
                  title={bike.brand}
                  price={bike.price}
                />
              </div>
            ))}
      </div>
    </div>
  );
};
export default Filters;
