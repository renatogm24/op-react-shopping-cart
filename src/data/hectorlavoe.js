import SKU326_blanco from "../images/salsa/SKU326_blanco.png";
import SKU326_negro from "../images/salsa/SKU326_negro.png";
import SKU142_blanco from "../images/salsa/SKU142_blanco.png";
import SKU145_blanco from "../images/salsa/SKU145_blanco.PNG";
import SKU098_blanco from "../images/salsa/SKU098_blanco.png";
import SKU098_negro from "../images/salsa/SKU098_negro.png";
import SKU394_blanco from "../images/salsa/SKU394_blanco.png";
import SKU394_negro from "../images/salsa/SKU394_negro.png";

const hectorlavoe = [
  {
    category: "Hector Lavoe",
    categoryId: "hectorlavoe",
    id: "lavoeSKU326",
    name: "Lavoe SKU326",
    color: "",
    size: "",
    price: 39.0,
    colors: [
      {
        name: "blanco",
        image: SKU326_blanco,
      },
      {
        name: "negro",
        image: SKU326_negro,
      },
    ],
    image: SKU326_blanco,
    get images() {
      return this.colors.map((color) => color.image);
    },
    previewImage: SKU326_blanco,
  },
  {
    category: "Hector Lavoe",
    categoryId: "hectorlavoe",
    id: "lavoeSKU142",
    name: "Lavoe SKU142",
    color: "",
    size: "",
    price: 39.0,
    colors: [
      {
        name: "blanco",
        image: SKU142_blanco,
      },
    ],
    image: SKU142_blanco,
    get images() {
      return this.colors.map((color) => color.image);
    },
    previewImage: SKU142_blanco,
  },
  {
    category: "Hector Lavoe",
    categoryId: "hectorlavoe",
    id: "lavoeSKU145",
    name: "Lavoe SKU145",
    color: "",
    size: "",
    price: 39.0,
    colors: [
      {
        name: "blanco",
        image: SKU145_blanco,
      },
    ],
    image: SKU145_blanco,
    get images() {
      return this.colors.map((color) => color.image);
    },
    previewImage: SKU145_blanco,
  },
  {
    category: "Hector Lavoe",
    categoryId: "hectorlavoe",
    id: "lavoeSKU098",
    name: "Lavoe SKU098",
    color: "",
    size: "",
    price: 39.0,
    colors: [
      {
        name: "blanco",
        image: SKU098_blanco,
      },
      {
        name: "negro",
        image: SKU098_negro,
      },
    ],
    image: SKU098_blanco,
    get images() {
      return this.colors.map((color) => color.image);
    },
    previewImage: SKU098_blanco,
  },
  {
    category: "Hector Lavoe",
    categoryId: "hectorlavoe",
    id: "lavoeSKU394",
    name: "Lavoe SKU394",
    color: "",
    size: "",
    price: 39.0,
    colors: [
      {
        name: "blanco",
        image: SKU394_blanco,
      },
      {
        name: "negro",
        image: SKU394_negro,
      },
    ],
    image: SKU394_blanco,
    get images() {
      return this.colors.map((color) => color.image);
    },
    previewImage: SKU394_blanco,
  },
];

export default hectorlavoe;
