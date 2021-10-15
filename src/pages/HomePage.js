import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "../css/HomePage.module.css";
import hector from "../images/products/lavoe.png";
import frankie from "../images/products/frankie.png";
import ruben from "../images/products/ruben.png";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    y: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const HomePage = (props) => {
  const history = useHistory();

  const handleClick = (index) => {
    switch (index) {
      case 0:
        history.push("/op-react-shopping-cart/products/lavoeSKU326");
        break;
      case 1:
        history.push("/op-react-shopping-cart/products/frankieSKU336");
        break;
      case 2:
        history.push("/op-react-shopping-cart/products/bladesSKU124");
        break;
      default:
        history.push("/op-react-shopping-cart/catalog");
        break;
    }
  };

  return (
    <motion.div
      className={styles.container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <main>
        <section className={styles.section}>
          <div className={styles.s1}>
            <h1 className={styles.s1Title}>Ropa Salsera del Perú</h1>
            <p className={styles.s1Subtitle}>Envios gratis desde S/99</p>
            <Link to="/op-react-shopping-cart/catalog">
              <motion.button
                className={styles.s1Link}
                whileHover={{ scale: 1.2, originX: 0 }}
                transition={{ type: "spring", stiffness: 1000 }}
              >
                Compra ahora
              </motion.button>
            </Link>
          </div>
          <div className={styles.s2}>
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              showThumbs={false}
              dynamicHeight={false}
              showStatus={false}
              onClickItem={handleClick}
            >
              <div>
                <img className={styles.s2Image} src={hector} alt="" />
              </div>
              <div>
                <img className={styles.s2Image} src={frankie} alt="" />
              </div>
              <div>
                <img className={styles.s2Image} src={ruben} alt="" />
              </div>
            </Carousel>
          </div>
        </section>
      </main>
    </motion.div>
  );
};

export default HomePage;
