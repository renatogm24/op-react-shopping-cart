import { motion } from "framer-motion";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../css/ProductPage.module.css";
import allProducts from "../data/allProducts";
import hector from "../images/products/lavoe.png";
import frankie from "../images/products/frankie.png";
import ruben from "../images/products/ruben.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.1 },
  },
};

const ProductPage = (props) => {
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const { productId } = useParams();
  const product = allProducts.find((product) => product.id === productId);

  const addToCart = () => {
    product.color = color;
    product.size = size;
    const newProduct = { ...product };
    props.addToCart(newProduct);
  };

  const format = (amount) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "PEN",
    });

    return formatter.format(amount);
  };

  return (
    <motion.div
      className={styles.container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <main className={styles.main}>
        <div className={styles.bgStyle} />

        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={true}
          dynamicHeight={true}
          showStatus={false}
          interval={8000}
        >
          {product.images.map((image) => {
            return (
              <div>
                <img src={image} alt="" />
              </div>
            );
          })}
        </Carousel>
      </main>
      <aside className={styles.side}>
        <h1 className={styles.productName}>{product.name}</h1>
        <div className={styles.youtube}>
          <iframe class="responsive-iframe" src={product.video} allowFullScreen></iframe>
        </div>
        <div className={styles.buyButtons}>
        <Link to="/op-react-shopping-cart/catalog">
        <button
            className={styles.buyNow}
          >
            Volver a saludos
          </button>
            </Link>
          
        </div>
      </aside>
    </motion.div>
  );
};

export default ProductPage;
