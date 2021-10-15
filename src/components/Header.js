import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import styles from "../css/Header.module.css";
import { motion } from "framer-motion";

const svgVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

function Header(props) {
  const { openSearch, openCart } = props;
  const [theme, setTheme] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setTheme(
      location.pathname === "/op-react-shopping-cart" ||
        location.pathname === "/op-react-shopping-cart/"
        ? "light"
        : "dark"
    );
  }, [location]);

  return (
    <header className={styles.container}>
      <Link to="/op-react-shopping-cart">
        <motion.svg
          className={styles.svgRumbero}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="80 85 40 40"
          variants={svgVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.path
            stroke={theme === "light" ? "white" : "black"}
            fill={theme === "light" ? "black" : "white"}
            d="M 117.058594 78.089844 C 116.042969 78.730469 115.21875 80.332031 112.605469 87.019531 C 110.339844 92.832031 108.636719 97.949219 107.96875 101.144531 C 107.597656 102.851562 107.144531 104.183594 106.691406 104.796875 C 105.703125 106.261719 103.730469 107.996094 103.199219 107.890625 C 102.210938 107.703125 102.53125 106.238281 104.585938 101.011719 C 106.636719 95.816406 106.957031 94.429688 106.183594 93.789062 C 104.53125 92.429688 100.453125 94.777344 97.949219 98.5625 C 97.546875 99.171875 97.203125 99.679688 97.175781 99.679688 C 97.175781 99.679688 97.148438 99.015625 97.148438 98.1875 C 97.148438 96.933594 97.042969 96.613281 96.507812 96.1875 C 96.160156 95.921875 95.574219 95.683594 95.175781 95.683594 C 94.191406 95.683594 92.242188 97.015625 90.726562 98.695312 C 89.710938 99.8125 89.550781 99.921875 89.925781 99.226562 C 90.457031 98.160156 90.484375 96.773438 89.980469 96.589844 C 89.765625 96.507812 89.046875 96.667969 88.378906 96.988281 C 86.941406 97.628906 86.515625 98.425781 84.488281 104.398438 C 83.183594 108.261719 82.222656 110.15625 80.785156 111.515625 C 78.519531 113.671875 78.679688 110.289062 81.183594 102.824219 C 81.875 100.800781 82.355469 98.988281 82.277344 98.746094 C 82.0625 98.242188 80.945312 98.242188 79.957031 98.746094 C 79.105469 99.199219 78.679688 99.867188 77.824219 102.183594 C 76.867188 104.691406 72.335938 111.914062 71.027344 113.007812 C 70.574219 113.378906 70.550781 113.328125 70.707031 112.074219 C 70.789062 111.328125 71.457031 108.875 72.203125 106.582031 C 72.949219 104.292969 73.5625 102.105469 73.5625 101.730469 C 73.5625 100.878906 72.972656 100.425781 72.042969 100.53125 C 71.054688 100.640625 70.523438 101.679688 68.738281 106.875 C 67.617188 110.179688 67.324219 111.460938 67.21875 113.191406 C 67.164062 114.417969 67.003906 115.40625 66.898438 115.40625 C 66.550781 115.40625 63.433594 113.058594 60.632812 110.660156 C 56.449219 107.089844 56.691406 107.597656 58.660156 106.609375 C 62.847656 104.503906 67.109375 100.746094 68.363281 98.027344 C 68.84375 97.015625 69.03125 96.160156 69.03125 94.988281 C 69.03125 92.855469 68.125 91.523438 65.910156 90.457031 C 64.445312 89.738281 64.179688 89.683594 61.167969 89.710938 C 57.222656 89.765625 54.609375 90.457031 50.320312 92.644531 C 45.257812 95.257812 42.191406 98.160156 41.898438 100.613281 C 41.792969 101.597656 41.871094 101.867188 42.457031 102.453125 C 43.390625 103.386719 44.589844 103.359375 46.160156 102.371094 C 47.308594 101.652344 47.972656 100.667969 47.574219 100.265625 C 47.496094 100.1875 47.175781 100.265625 46.882812 100.453125 C 45.867188 101.066406 46.027344 100.53125 47.253906 99.226562 C 48.507812 97.894531 51.597656 95.894531 54.15625 94.777344 L 55.675781 94.109375 L 55.0625 94.988281 C 54.023438 96.535156 46.375 113.621094 45.28125 116.84375 C 44.988281 117.695312 44.777344 118.898438 44.828125 119.507812 L 44.910156 120.601562 L 46.109375 120.683594 C 48.132812 120.789062 48.402344 120.46875 49.8125 116.605469 C 50.507812 114.683594 51.464844 112.207031 51.945312 111.085938 L 52.824219 109.007812 L 55.785156 111.78125 C 61.671875 117.296875 63.964844 118.871094 66.070312 118.871094 C 66.949219 118.871094 67.324219 118.710938 67.855469 118.148438 C 68.390625 117.589844 68.738281 117.429688 69.429688 117.511719 C 69.910156 117.539062 70.65625 117.402344 71.082031 117.164062 C 72.09375 116.65625 73.855469 114.710938 74.945312 112.980469 L 75.800781 111.59375 L 76.121094 112.980469 C 76.546875 114.953125 77.210938 115.539062 78.996094 115.539062 C 80.117188 115.539062 80.648438 115.378906 81.316406 114.898438 C 81.929688 114.445312 82.488281 114.257812 83.101562 114.285156 C 84.410156 114.390625 85.128906 113.78125 85.820312 112.019531 C 87.3125 108.234375 90.671875 102.53125 92.5625 100.53125 C 94.351562 98.667969 94.242188 99.492188 91.816406 106.371094 C 90.699219 109.488281 89.871094 112.207031 89.925781 112.394531 C 90.03125 112.660156 90.484375 112.738281 91.472656 112.6875 L 92.882812 112.605469 L 94.484375 109.542969 C 95.390625 107.863281 96.667969 105.570312 97.386719 104.476562 C 99.039062 101.890625 102.105469 97.816406 102.398438 97.816406 C 102.53125 97.816406 102.183594 98.667969 101.679688 99.679688 C 100.054688 102.933594 99.066406 106.210938 99.199219 108.050781 C 99.308594 109.410156 99.441406 109.726562 100.160156 110.367188 C 100.90625 111.035156 101.226562 111.140625 102.691406 111.140625 C 104.105469 111.140625 104.585938 111.007812 105.597656 110.367188 C 106.289062 109.914062 107.035156 109.273438 107.304688 108.875 C 107.757812 108.183594 107.757812 108.183594 108.316406 108.6875 C 109.726562 109.996094 110.714844 110.101562 112.632812 109.140625 C 114.339844 108.289062 116.523438 106.15625 117.992188 103.863281 C 123.347656 95.601562 121.855469 89.285156 115.246094 92.191406 C 114.605469 92.484375 114.074219 92.695312 114.074219 92.671875 C 114.074219 92.484375 117.378906 83.929688 118.445312 81.316406 C 119.136719 79.664062 119.644531 78.117188 119.5625 77.933594 C 119.351562 77.398438 118.070312 77.480469 117.058594 78.089844 Z M 64.527344 93.417969 C 66.019531 94.191406 65.324219 96.136719 62.445312 99.171875 C 60.15625 101.597656 56.078125 104.476562 54.929688 104.476562 C 54.796875 104.476562 55.570312 102.503906 56.664062 100.078125 C 57.757812 97.679688 58.636719 95.46875 58.636719 95.175781 C 58.636719 94.882812 58.316406 94.402344 57.941406 94.109375 C 57.117188 93.46875 57.277344 93.363281 59.515625 93.015625 C 61.300781 92.722656 63.539062 92.910156 64.527344 93.417969 Z M 117.5625 95.601562 C 118.390625 97.734375 114.472656 104.769531 111.648438 106.238281 C 110.953125 106.582031 110.847656 106.582031 110.6875 106.210938 C 110.234375 104.957031 112.179688 96.589844 112.898438 96.855469 C 113.085938 96.933594 113.804688 96.613281 114.5 96.160156 C 115.75 95.390625 116.65625 94.9375 117.085938 94.910156 C 117.191406 94.882812 117.402344 95.203125 117.5625 95.601562 Z M 117.5625 95.601562 "
            variants={pathVariants}
          />
          <motion.path
            stroke={theme === "light" ? "white" : "black"}
            fill={theme === "light" ? "black" : "white"}
            d="M 155.464844 84.78125 C 153.039062 85.980469 149.734375 90.324219 148.5625 93.816406 C 147.921875 95.761719 147.894531 99.226562 148.535156 100.398438 C 149.441406 102.105469 151.574219 102.53125 153.757812 101.492188 C 158.34375 99.308594 163.621094 89.230469 162.019531 85.714844 C 161.648438 84.941406 160.449219 84.355469 159.703125 84.59375 C 159.410156 84.703125 159.089844 84.648438 158.980469 84.488281 C 158.6875 84.035156 156.636719 84.195312 155.464844 84.78125 Z M 157.515625 87.421875 C 157.515625 87.554688 157.757812 87.6875 158.023438 87.6875 C 159.113281 87.6875 158.820312 89.417969 157.117188 92.882812 C 155.835938 95.46875 153.972656 97.839844 152.636719 98.507812 C 151.867188 98.90625 151.8125 98.90625 151.4375 98.453125 C 150.375 97.015625 152.613281 91.523438 155.410156 88.726562 C 156.929688 87.207031 157.515625 86.832031 157.515625 87.421875 Z M 157.515625 87.421875 "
            variants={pathVariants}
          />
          <motion.path
            stroke={theme === "light" ? "white" : "black"}
            fill={theme === "light" ? "black" : "white"}
            d="M 146.054688 86.246094 C 144.722656 86.832031 143.496094 87.820312 142.269531 89.367188 C 141.65625 90.136719 141.230469 90.539062 141.339844 90.296875 C 142.351562 87.554688 142.109375 86.699219 140.433594 87.152344 C 139.925781 87.3125 139.207031 87.714844 138.886719 88.058594 C 138.539062 88.40625 137.5 90.777344 136.566406 93.285156 L 134.863281 97.894531 L 132.410156 100.375 C 129.902344 102.933594 128.839844 103.652344 127.160156 103.863281 C 126.4375 103.972656 126.011719 103.863281 125.53125 103.464844 C 124.921875 102.984375 124.921875 102.90625 125.320312 102.292969 C 125.558594 101.945312 126.4375 101.039062 127.265625 100.320312 C 130.808594 97.253906 130.96875 97.066406 130.542969 96.402344 C 130.011719 95.601562 128.996094 95.550781 127.664062 96.214844 C 125.773438 97.175781 125.851562 96.640625 127.90625 94.589844 C 129.742188 92.722656 129.878906 92.644531 130.089844 93.203125 C 130.675781 94.777344 133.636719 92.9375 133.957031 90.804688 C 134.300781 88.621094 132.25 88.246094 128.917969 89.898438 C 124.066406 92.296875 121.640625 96.429688 123.640625 98.90625 C 124.066406 99.441406 124.039062 99.492188 122.972656 100.585938 C 121.640625 101.890625 121.269531 103.199219 121.828125 104.664062 C 122.363281 106.078125 123.375 106.691406 125.292969 106.824219 C 127.558594 106.984375 129.476562 106.503906 131.34375 105.277344 C 132.863281 104.316406 133.023438 104.265625 134.035156 104.53125 C 134.621094 104.691406 135.289062 104.742188 135.472656 104.664062 C 135.6875 104.585938 136.539062 103.226562 137.394531 101.625 C 138.964844 98.640625 142.777344 92.804688 144.214844 91.152344 C 144.695312 90.589844 144.910156 90.457031 144.75 90.804688 C 144.589844 91.125 144.457031 91.925781 144.457031 92.589844 C 144.457031 93.550781 144.589844 93.898438 145.070312 94.191406 C 146.429688 95.097656 147.28125 94.109375 148.746094 89.84375 C 149.441406 87.847656 149.414062 87.046875 148.5625 86.378906 C 147.734375 85.714844 147.308594 85.714844 146.054688 86.246094 Z M 146.054688 86.246094 "
            variants={pathVariants}
          />
        </motion.svg>
      </Link>
      <nav className={styles.nav}>
        <Link
          className={theme === "light" ? styles.shop : styles.shopBlack}
          to="/op-react-shopping-cart/catalog"
        >
          Tienda
        </Link>
        <button
          onClick={openSearch}
          className={theme === "light" ? styles.btn : styles.btnBlack}
        >
          <svg
            className={styles.svgSearch}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
          </svg>
        </button>
        <div className={styles.cartBtnContainer}>
          {props.cartLength > 0 && (
            <div
              className={
                theme === "light" ? styles.cartLength : styles.cartLengthBlack
              }
            >
              {props.cartLength}
              <svg
                className={
                  theme === "light" ? styles.svgArrow : styles.svgArrowBlack
                }
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21 12l-18 12v-24z" />
              </svg>
            </div>
          )}
          <button
            onClick={openCart}
            className={theme === "light" ? styles.btn : styles.btnBlack}
          >
            <svg
              className={styles.svgCart}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M 0.308594 1.542969 C 0.09375 1.6875 0 1.867188 0 2.15625 C 0 2.445312 0.09375 2.625 0.308594 2.769531 C 0.4375 2.855469 0.5625 2.859375 2.390625 2.859375 L 4.335938 2.859375 L 5.59375 8.523438 C 6.28125 11.632812 6.84375 14.199219 6.84375 14.226562 C 6.84375 14.25 6.734375 14.335938 6.605469 14.414062 C 6.289062 14.597656 5.984375 14.949219 5.804688 15.328125 C 5.675781 15.589844 5.652344 15.699219 5.632812 16.105469 C 5.621094 16.476562 5.628906 16.636719 5.695312 16.832031 C 5.910156 17.503906 6.40625 18.007812 7.0625 18.238281 C 7.273438 18.308594 7.460938 18.328125 8.011719 18.332031 L 8.695312 18.332031 L 8.453125 18.421875 C 7.570312 18.734375 7.03125 19.503906 7.03125 20.4375 C 7.03125 21.652344 7.925781 22.546875 9.140625 22.546875 C 10.355469 22.546875 11.25 21.652344 11.25 20.4375 C 11.25 19.503906 10.710938 18.734375 9.828125 18.421875 C 9.589844 18.335938 9.640625 18.332031 14.109375 18.332031 C 18.578125 18.332031 18.628906 18.335938 18.390625 18.421875 C 17.507812 18.734375 16.96875 19.503906 16.96875 20.4375 C 16.96875 21.652344 17.863281 22.546875 19.078125 22.546875 C 20.292969 22.546875 21.1875 21.652344 21.1875 20.4375 C 21.1875 19.5 20.648438 18.734375 19.761719 18.421875 L 19.523438 18.332031 L 20.132812 18.332031 C 20.648438 18.328125 20.761719 18.3125 20.878906 18.238281 C 21.09375 18.09375 21.1875 17.914062 21.1875 17.625 C 21.1875 17.347656 21.097656 17.164062 20.902344 17.023438 C 20.796875 16.949219 20.292969 16.945312 14.179688 16.921875 L 7.570312 16.898438 L 7.40625 16.796875 C 6.960938 16.519531 6.964844 15.867188 7.414062 15.625 C 7.5625 15.542969 7.917969 15.539062 14.160156 15.523438 L 20.757812 15.515625 L 20.949219 15.335938 L 21.140625 15.164062 L 22.570312 10.164062 C 23.535156 6.789062 24 5.085938 24 4.9375 C 24 4.785156 23.96875 4.667969 23.898438 4.5625 C 23.675781 4.242188 24.394531 4.265625 14.816406 4.265625 L 6.140625 4.265625 L 6.117188 4.15625 C 6.101562 4.101562 5.992188 3.589844 5.863281 3.023438 C 5.738281 2.457031 5.609375 1.9375 5.585938 1.871094 C 5.558594 1.800781 5.457031 1.683594 5.359375 1.597656 L 5.179688 1.453125 L 2.8125 1.453125 C 0.570312 1.453125 0.4375 1.457031 0.308594 1.542969 Z M 22.3125 5.726562 C 22.308594 5.761719 21.773438 7.65625 21.121094 9.9375 L 19.9375 14.085938 L 14.128906 14.09375 L 8.320312 14.109375 L 7.390625 9.921875 C 6.882812 7.625 6.46875 5.726562 6.46875 5.703125 C 6.46875 5.6875 10.035156 5.671875 14.390625 5.671875 C 20.699219 5.671875 22.3125 5.6875 22.3125 5.726562 Z M 9.488281 19.871094 C 9.6875 20.007812 9.796875 20.199219 9.796875 20.4375 C 9.796875 20.8125 9.515625 21.09375 9.140625 21.09375 C 8.765625 21.09375 8.484375 20.8125 8.484375 20.4375 C 8.484375 20.0625 8.765625 19.78125 9.140625 19.78125 C 9.265625 19.78125 9.402344 19.820312 9.488281 19.871094 Z M 19.425781 19.871094 C 19.625 20.007812 19.734375 20.199219 19.734375 20.4375 C 19.734375 20.8125 19.453125 21.09375 19.078125 21.09375 C 18.703125 21.09375 18.421875 20.8125 18.421875 20.4375 C 18.421875 20.0625 18.703125 19.78125 19.078125 19.78125 C 19.203125 19.78125 19.339844 19.820312 19.425781 19.871094 Z M 19.425781 19.871094 " />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  openSearch: PropTypes.func.isRequired,
  openCart: PropTypes.func.isRequired,
};

export default Header;
