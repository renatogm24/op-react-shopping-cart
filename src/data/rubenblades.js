import SKU124_blanco from "../images/salsa/SKU124_blanco.png";
import SKU124_negro from "../images/salsa/SKU124_negro.png";
import SKU122_blanco from "../images/salsa/SKU122_blanco.PNG";
import SKU122_negro from "../images/salsa/SKU122_negro.PNG";

const rubenblades = [
  {
    category: "Ruben Blades",
    categoryId: "rubenblades",
    id: "bladesSKU124",
    name: "Blades SKU124",
    color: "",
    size: "",
    price: 39.0,
    colors: [
      {
        name: "blanco",
        image: SKU124_blanco,
      },
      {
        name: "negro",
        image: SKU124_negro,
      },
    ],
    image: SKU124_blanco,
    get images() {
      return this.colors.map((color) => color.image);
    },
    previewImage: SKU124_blanco,
  },
  {
    category: "Ruben Blades",
    categoryId: "rubenblades",
    id: "bladesSKU122",
    name: "Blades SKU122",
    color: "",
    size: "",
    price: 39.0,
    colors: [
      {
        name: "blanco",
        image: SKU122_blanco,
      },
      {
        name: "negro",
        image: SKU122_negro,
      },
    ],
    image: SKU122_blanco,
    get images() {
      return this.colors.map((color) => color.image);
    },
    previewImage: SKU122_blanco,
  },
];

export default rubenblades;
