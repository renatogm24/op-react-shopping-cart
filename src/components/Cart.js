import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../css/Cart.module.css";
import SlideUpButton from "./SlideUpButton";
import CartItem from "./CartItem";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const cart = {
  hidden: { x: "100%" },
  visible: { x: "0" },
};

export default function Cart({
  updateQuantity,
  totalPrice,
  cartContent,
  closeCart,
  showCart,
  computeTotalPrice,
}) {
  useEffect(() => {
    computeTotalPrice();
  }, [cartContent, computeTotalPrice]);

  const format = (amount) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "PEN",
    });

    return formatter.format(amount);
  };

  return (
    <AnimatePresence>
      {showCart && (
        <>
          <motion.div
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={closeCart}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className={styles.backdrop}
          />
          <motion.div
            variants={cart}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ ease: "easeOut", duration: 0.5 }}
            className={styles.cart}
          >
            <div className={styles.container}>
              <button onClick={closeCart} className={styles.close}>
                <svg
                  className={styles.svgClose}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
                </svg>
              </button>
              <div className={styles.cartContentWrapper}>
                <h1 className={styles.title}>
                  Tu
                  <br />
                  Carrito
                </h1>
                <div className={styles.cartList}>
                  {cartContent &&
                    cartContent.length > 0 &&
                    cartContent.map((product) => (
                      <CartItem
                        key={product.id + product.color + product.size}
                        updateQuantity={updateQuantity}
                        product={product}
                      />
                    ))}
                  {cartContent && cartContent.length > 0 && (
                    <>
                      <div className={styles.totalPrice}>
                        Subtotal: {format(totalPrice)}
                      </div>
                      <SlideUpButton
                        onClick={closeCart}
                        text="Pagar"
                        path="/shopping-cart"
                        cartContent={cartContent}
                      />
                    </>
                  )}
                  {cartContent && cartContent.length === 0 && (
                    <p className={styles.subtitle}>Tu carrito esta vacio.</p>
                  )}
                </div>
              </div>
              {cartContent && cartContent.length === 0 && (
                <>
                  <svg
                    className={styles.svgCart}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M 0.308594 1.542969 C 0.09375 1.6875 0 1.867188 0 2.15625 C 0 2.445312 0.09375 2.625 0.308594 2.769531 C 0.4375 2.855469 0.5625 2.859375 2.390625 2.859375 L 4.335938 2.859375 L 5.59375 8.523438 C 6.28125 11.632812 6.84375 14.199219 6.84375 14.226562 C 6.84375 14.25 6.734375 14.335938 6.605469 14.414062 C 6.289062 14.597656 5.984375 14.949219 5.804688 15.328125 C 5.675781 15.589844 5.652344 15.699219 5.632812 16.105469 C 5.621094 16.476562 5.628906 16.636719 5.695312 16.832031 C 5.910156 17.503906 6.40625 18.007812 7.0625 18.238281 C 7.273438 18.308594 7.460938 18.328125 8.011719 18.332031 L 8.695312 18.332031 L 8.453125 18.421875 C 7.570312 18.734375 7.03125 19.503906 7.03125 20.4375 C 7.03125 21.652344 7.925781 22.546875 9.140625 22.546875 C 10.355469 22.546875 11.25 21.652344 11.25 20.4375 C 11.25 19.503906 10.710938 18.734375 9.828125 18.421875 C 9.589844 18.335938 9.640625 18.332031 14.109375 18.332031 C 18.578125 18.332031 18.628906 18.335938 18.390625 18.421875 C 17.507812 18.734375 16.96875 19.503906 16.96875 20.4375 C 16.96875 21.652344 17.863281 22.546875 19.078125 22.546875 C 20.292969 22.546875 21.1875 21.652344 21.1875 20.4375 C 21.1875 19.5 20.648438 18.734375 19.761719 18.421875 L 19.523438 18.332031 L 20.132812 18.332031 C 20.648438 18.328125 20.761719 18.3125 20.878906 18.238281 C 21.09375 18.09375 21.1875 17.914062 21.1875 17.625 C 21.1875 17.347656 21.097656 17.164062 20.902344 17.023438 C 20.796875 16.949219 20.292969 16.945312 14.179688 16.921875 L 7.570312 16.898438 L 7.40625 16.796875 C 6.960938 16.519531 6.964844 15.867188 7.414062 15.625 C 7.5625 15.542969 7.917969 15.539062 14.160156 15.523438 L 20.757812 15.515625 L 20.949219 15.335938 L 21.140625 15.164062 L 22.570312 10.164062 C 23.535156 6.789062 24 5.085938 24 4.9375 C 24 4.785156 23.96875 4.667969 23.898438 4.5625 C 23.675781 4.242188 24.394531 4.265625 14.816406 4.265625 L 6.140625 4.265625 L 6.117188 4.15625 C 6.101562 4.101562 5.992188 3.589844 5.863281 3.023438 C 5.738281 2.457031 5.609375 1.9375 5.585938 1.871094 C 5.558594 1.800781 5.457031 1.683594 5.359375 1.597656 L 5.179688 1.453125 L 2.8125 1.453125 C 0.570312 1.453125 0.4375 1.457031 0.308594 1.542969 Z M 22.3125 5.726562 C 22.308594 5.761719 21.773438 7.65625 21.121094 9.9375 L 19.9375 14.085938 L 14.128906 14.09375 L 8.320312 14.109375 L 7.390625 9.921875 C 6.882812 7.625 6.46875 5.726562 6.46875 5.703125 C 6.46875 5.6875 10.035156 5.671875 14.390625 5.671875 C 20.699219 5.671875 22.3125 5.6875 22.3125 5.726562 Z M 9.488281 19.871094 C 9.6875 20.007812 9.796875 20.199219 9.796875 20.4375 C 9.796875 20.8125 9.515625 21.09375 9.140625 21.09375 C 8.765625 21.09375 8.484375 20.8125 8.484375 20.4375 C 8.484375 20.0625 8.765625 19.78125 9.140625 19.78125 C 9.265625 19.78125 9.402344 19.820312 9.488281 19.871094 Z M 19.425781 19.871094 C 19.625 20.007812 19.734375 20.199219 19.734375 20.4375 C 19.734375 20.8125 19.453125 21.09375 19.078125 21.09375 C 18.703125 21.09375 18.421875 20.8125 18.421875 20.4375 C 18.421875 20.0625 18.703125 19.78125 19.078125 19.78125 C 19.203125 19.78125 19.339844 19.820312 19.425781 19.871094 Z M 19.425781 19.871094 " />
                  </svg>
                  <SlideUpButton
                    onClick={closeCart}
                    text="Buscar productos"
                    path="/op-react-shopping-cart/catalog"
                  />
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
