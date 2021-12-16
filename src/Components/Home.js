import React, { useEffect, useState } from "react";
import "./Home.css";
import randId from "../utils";
import Product from "./Product";
import { useStateValue } from "../StateProvider";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  getDoc,
  query,
  onSnapshot,
} from "firebase/firestore";
const Home = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    const productsRef = collection(db, "products");
    const q = query(productsRef);
    onSnapshot(q, (snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="home banner"
        />

        <div className="home__row">
          {products?.slice(0, 3).map((prod) => (
            <Product
              key={prod.id}
              title={prod.data.title}
              price={prod.data.price}
              rating={prod.data.rating}
              image={prod.data.image}
              id={prod.id}
            />
          ))}
        </div>

        <div className="home__row">
          {products?.slice(3, 5).map((prod) => (
            <Product key={prod.id} {...prod.data} />
          ))}
        </div>

        <div className="home__row">
          {products?.slice(5).map((prod) => (
            <Product key={prod.id} {...prod.data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
