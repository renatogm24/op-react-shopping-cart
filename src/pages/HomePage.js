import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "../css/HomePage.module.css";
import hector from "../images/products/lavoe.png";
import frankie from "../images/products/frankie.png";
import image1 from "../images/products/1.jpeg";
import image2 from "../images/products/2.jpeg";
import image3 from "../images/products/3.jpeg";
import image4 from "../images/products/4.jpeg";
import image5 from "../images/products/5.jpeg";
import image6 from "../images/products/6.jpeg";
import image7 from "../images/products/7.jpeg";
import image8 from "../images/products/8.jpeg";
import image9 from "../images/products/9.jpeg";
import image10 from "../images/products/10.jpeg";
import image11 from "../images/products/11.jpeg";
import image12 from "../images/products/12.jpeg";
import image13 from "../images/products/13.jpeg";
import image14 from "../images/products/14.jpeg";
import image15 from "../images/products/15.jpeg";
import image16 from "../images/products/16.jpeg";
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
            <h1 className={styles.s1Title}>¡Que tengas un buen viaje!</h1>
            <p className={styles.s1Subtitle}>Hola Andreita, en nombre de toda la familia, muchas felicitaciones por este gran logro que has obtenido gracias a todo el esfuerzo y pasión que has demostrado por tu carrera. En este pequeño espacio encontrarás nuestros mejores deseos en esta nueva etapa que estás por comenzar, tu viaje a Chicago, y hemos subido también algunas fotitos de momentos que guardamos con mucha alegría y cariño.
Te amamos mucho! Recuerda que siempre estaremos para ti, un fuerte abrazo a la distancia 🤗.
            </p>
            <Link to="/op-react-shopping-cart/catalog">
              <motion.button
                className={styles.s1Link}
                whileHover={{ scale: 1.2, originX: 0 }}
                transition={{ type: "spring", stiffness: 1000 }}
              >
                Ir a saludos
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
                <img className={styles.s2Image} src={image1} alt="" />
              </div>
              <div>
                <img className={styles.s2Image} src={image2} alt="" />
              </div>
              <div>
                <img className={styles.s2Image} src={image4} alt="" />
              </div>
              <div>
                <img className={styles.s2Image} src={image6} alt="" />
              </div>
              <div>
                <img className={styles.s2Image} src={image7} alt="" />
              </div>
              <div>
                <img className={styles.s2Image} src={image8} alt="" />
              </div>
              <div>
                <img className={styles.s2Image} src={image9} alt="" />
              </div>
              <div>
                <img className={styles.s2Image} src={image10} alt="" />
              </div>
              <div>
                <img className={styles.s2Image} src={image11} alt="" />
              </div>
              <div>
                <img className={styles.s2Image} src={image12} alt="" />
              </div>
              <div>
                <img className={styles.s2Image} src={image13} alt="" />
              </div>
              <div>
                <img className={styles.s2Image} src={image14} alt="" />
              </div>
            </Carousel>
          </div>
        </section>
      </main>
    </motion.div>
  );
};

export default HomePage;
