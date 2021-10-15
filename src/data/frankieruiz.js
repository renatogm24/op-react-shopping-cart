import SKU335_blanco from "../images/salsa/SKU335_blanco.png";
import SKU335_negro from "../images/salsa/SKU335_negro.png";
import SKU336_blanco from "../images/salsa/SKU336_blanco.png";
import SKU336_negro from "../images/salsa/SKU336_negro.png";

const frankieruiz = [
  {
    category: "Frankie Ruiz",
    categoryId: "frankieruiz",
    id: "frankieSKU335",
    name: "Frankie SKU335",
    color: "",
    size: "",
    price: 39.0,
    colors: [
      {
        name: "blanco",
        image: SKU335_blanco,
      },
      {
        name: "negro",
        image: SKU335_negro,
      },
    ],
    image: SKU335_blanco,
    get images() {
      return this.colors.map((color) => color.image);
    },
    previewImage: SKU335_blanco,
  },
  {
    category: "Frankie Ruiz",
    categoryId: "frankieruiz",
    id: "frankieSKU336",
    name: "Frankie SKU336",
    color: "",
    size: "",
    price: 39.0,
    colors: [
      {
        name: "blanco",
        image: SKU336_blanco,
      },
      {
        name: "negro",
        image: SKU336_negro,
      },
    ],
    image: SKU336_blanco,
    get images() {
      return this.colors.map((color) => color.image);
    },
    previewImage: SKU336_blanco,
  },
];

export default frankieruiz;
