import React, { useEffect, useState } from "react";
import styles from "../css/ShopPage.module.css";
import categories from "../data/categories";
import allProducts from "../data/allProducts";
import { Link, Route, Switch, useParams } from "react-router-dom";
import { motion } from "framer-motion";

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

const ShopPage = (props) => {
  const { categoryId } = useParams();
  const category = categories.find((category) => category.id === categoryId);
  const [productsByCategory, setProductsByCategory] = useState([]);

  useEffect(() => {
    if (category) {
      const productsByCategory = allProducts.filter(
        (product) => product.categoryId === category.id
      );

      setProductsByCategory(productsByCategory);
    }
  }, [categoryId, category]);

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
      <div className={styles.wrapper}>
        <aside className={styles.side}>
          <div className={styles.sideTitleContainer}>
            <div className={styles.sideTitleShop}>Tienda /</div>
            <h1 className={styles.sideTitle}>
              <Switch>
                <Route exact path="/op-react-shopping-cart/catalog">
                  <span>Todos los</span>
                  Productos
                </Route>
                <Route exact path="/op-react-shopping-cart/catalog/:categoryId">
                  {category && category.name}
                </Route>
              </Switch>
            </h1>
          </div>
          <ul className={styles.categories}>
            {categories.map((category) => (
              <Link
                to={`/op-react-shopping-cart/catalog/${category.id}`}
                className={styles.categoryLink}
                key={category.id}
              >
                <motion.li
                  className={styles.category}
                  whileHover={{ scale: 1.3, originX: 0, color: "#7D140F" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {category.name}
                </motion.li>
              </Link>
            ))}
          </ul>
        </aside>
        <main className={styles.main}>
          <ul className={styles.productList}>
            <Switch>
              <Route exact path="/op-react-shopping-cart/catalog">
                {allProducts &&
                  allProducts.map((product) => (
                    <li key={product.id} className={styles.product}>
                      <Link
                        to={`/op-react-shopping-cart/products/${product.id}`}
                        className={styles.productLink}
                      >
                        <div className={styles.productImage}>
                          <img
                            className={styles.frontImage}
                            src={product.image}
                            alt={product.name}
                          />
                          <img
                            className={styles.backImage}
                            src={product.previewImage}
                            alt={product.name}
                          />
                        </div>
                        <div className={styles.productName}>{product.name}</div>
                        <div className={styles.productPrice}>
                          {format(product.price)}
                        </div>
                      </Link>
                    </li>
                  ))}
              </Route>
              <Route exact path="/op-react-shopping-cart/catalog/:categoryId">
                {productsByCategory &&
                  productsByCategory.map((product) => (
                    <li key={product.id} className={styles.product}>
                      <Link
                        to={`/op-react-shopping-cart/products/${product.id}`}
                        className={styles.productLink}
                      >
                        <div className={styles.productImage}>
                          <img
                            className={styles.frontImage}
                            src={product.image}
                            alt={product.name}
                          />
                          <img
                            className={styles.backImage}
                            src={product.previewImage}
                            alt={product.name}
                          />
                        </div>
                        <div className={styles.productName}>{product.name}</div>
                        <div className={styles.productPrice}>
                          {format(product.price)}
                        </div>
                      </Link>
                    </li>
                  ))}
              </Route>
            </Switch>
          </ul>
        </main>
      </div>
    </motion.div>
  );
};

export default ShopPage;
