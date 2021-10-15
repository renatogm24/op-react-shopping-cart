import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/SlideUpButton.module.css";
import { motion } from "framer-motion";

function SlideUpButton(props) {
  const { text, onClick, path, cartContent } = props;
  if (path === "/shopping-cart") {
    let order = "";
    let subtotal = 0;
    for (let index = 0; index < cartContent.length; index++) {
      const element = cartContent[index];
      order += `- (${element.name} - ${element.color} - ${element.size}) (${element.quantity}xS/${element.price}) %0D%0A`;
      subtotal += element.price * element.quantity;
    }
    order += `Subtotal: S/${subtotal}`;
    return (
      <Link
        onClick={onClick}
        className={styles.link}
        to={{
          pathname: `https://wa.me/+51922774566/?text=Hola Rumbero!%0D%0AMi pedido es el siguiente:%0D%0A ${order}`,
        }}
        target="_blank"
      >
        <motion.div className={styles.linkText}>{text}</motion.div>
      </Link>
    );
  } else {
    return (
      <Link onClick={onClick} className={styles.link} to={path}>
        <motion.div className={styles.linkText}>{text}</motion.div>
      </Link>
    );
  }
}

SlideUpButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};

export default SlideUpButton;
