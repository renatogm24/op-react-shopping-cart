import SKU552_blanco from "../images/salsa/SKU552_blanco.png";
import SKU842_blanco from "../images/salsa/SKU842_blanco.png";
import SKU085_blanco from "../images/salsa/SKU085_blanco.png";
import SKU085_negro from "../images/salsa/SKU085_negro.png";
import SKU029_blanco from "../images/salsa/SKU029_blanco.png";
import SKU029_negro from "../images/salsa/SKU029_negro.png";

const varios = [
  {
    category: "Varios",
    categoryId: "varios",
    id: "variosSKU085",
    name: "Varios SKU085",
    color: "",
    size: "",
    price: 39.0,
    colors: [
      {
        name: "blanco",
        image: SKU085_blanco,
      },
      {
        name: "negro",
        image: SKU085_negro,
      },
    ],
    image: SKU085_blanco,
    get images() {
      return this.colors.map((color) => color.image);
    },
    previewImage: SKU085_blanco,
  },
  {
    category: "Varios",
    categoryId: "varios",
    id: "variosSKU552",
    name: "Varios SKU552",
    color: "",
    size: "",
    price: 39.0,
    colors: [
      {
        name: "blanco",
        image: SKU552_blanco,
      },
    ],
    image: SKU552_blanco,
    get images() {
      return this.colors.map((color) => color.image);
    },
    previewImage: SKU552_blanco,
  },
  {
    category: "Varios",
    categoryId: "varios",
    id: "variosSKU029",
    name: "Varios SKU029",
    color: "",
    size: "",
    price: 39.0,
    colors: [
      {
        name: "blanco",
        image: SKU029_blanco,
      },
      {
        name: "negro",
        image: SKU029_negro,
      },
    ],
    image: SKU029_blanco,
    get images() {
      return this.colors.map((color) => color.image);
    },
    previewImage: SKU029_blanco,
  },
  {
    category: "Varios",
    categoryId: "varios",
    id: "variosSKU842",
    name: "Varios SKU842",
    color: "",
    size: "",
    price: 39.0,
    colors: [
      {
        name: "blanco",
        image: SKU842_blanco,
      },
    ],
    image: SKU842_blanco,
    get images() {
      return this.colors.map((color) => color.image);
    },
    previewImage: SKU842_blanco,
  },
];

export default varios;
