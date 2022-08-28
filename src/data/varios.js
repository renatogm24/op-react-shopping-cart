import SKU552_blanco from "../images/salsa/SKU552_blanco.png";
import SKU842_blanco from "../images/salsa/SKU842_blanco.png";
import SKU085_blanco from "../images/salsa/SKU085_blanco.png";
import SKU085_negro from "../images/salsa/SKU085_negro.png";
import SKU029_blanco from "../images/salsa/SKU029_blanco.png";
import SKU029_negro from "../images/salsa/SKU029_negro.png";
import pikachu from "../images/salsa/pikachu.jpg";
import asustado from "../images/salsa/asustado.gif";
import vane1 from "../images/salsa/vane1.gif";
import papa from "../images/salsa/papa.gif";
import mama2 from "../images/salsa/mama2.jpeg";

const varios = [
  {
    category: "Varios",
    categoryId: "varios",
    id: "papa",
    name: "El que más va a extrañar a la misha",
    color: "",
    size: "",
    price: 39.0,
    colors: [
      {
        name: "blanco",
        image: papa,
      },
      {
        name: "negro",
        image: SKU085_negro,
      },
    ],
    image: papa,
    get images() {
      return this.colors.map((color) => color.image);
    },
    previewImage: papa,
    video: "https://youtube.com/embed/ie3Lf9Beii4"
  },
  {
    category: "Varios",
    categoryId: "varios",
    id: "mama",
    name: "El terror de la misha",
    color: "",
    size: "",
    price: 39.0,
    colors: [
      {
        name: "mama2",
        image: mama2,
      },
      {
        name: "blanco",
        image: asustado,
      }     
    ],
    image: asustado,
    get images() {
      return this.colors.map((color) => color.image);
    },
    previewImage: asustado,
    video: "https://youtube.com/embed/EqCZrYTP6XI"
  },
  {
    category: "Varios",
    categoryId: "varios",
    id: "masha",
    name: "La masha y los pollitos insolentes",
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
    video: "https://youtube.com/embed/9DRREHVD4jk"
  },
  {
    category: "Varios",
    categoryId: "varios",
    id: "sabrosito",
    name: "Sabrositoo!",
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
    video: "https://youtube.com/embed/kFl5DC1TC7E"
  },
  {
    category: "Varios",
    categoryId: "varios",
    id: "sebas",
    name: "¿Qué hiciste Sebas? ¿qué hiciste?",
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
    video: "https://youtube.com/embed/grYJIqoBwDA"
  },
  {
    category: "Varios",
    categoryId: "varios",
    id: "sodimac",
    name: "La que casi te vuelve dueña de Sodimac",
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
    video: "https://youtube.com/embed/ZJF997e4ax4"
  },
  {
    category: "Varios",
    categoryId: "varios",
    id: "vista",
    name: "El de la mejor vista y candidata a la más explotada del año",
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
    video: "https://youtube.com/embed/hvvNC56aT-0"
  },
  {
    category: "Varios",
    categoryId: "varios",
    id: "vane",
    name: "Uci ¿ya renuncias?",
    color: "",
    size: "",
    price: 39.0,
    colors: [
      {
        name: "blanco",
        image: vane1,
      },
    ],
    image: vane1,
    get images() {
      return this.colors.map((color) => color.image);
    },
    previewImage: vane1,
  },
  {
    category: "Varios",
    categoryId: "varios",
    id: "renato",
    name: "El nuevo paseador de la misha",
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
    video: "https://youtube.com/embed/NFoZ4TPlU_w"
  },
  {
    category: "Varios",
    categoryId: "varios",
    id: "familia",
    name: "Los Barandiaran Ayquipa",
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
    video: "https://youtube.com/embed/a8osxKMrwLU"
  },
  {
    category: "Varios",
    categoryId: "varios",
    id: "pikachu",
    name: "¿Cómo que no eras un pikachu?",
    color: "",
    size: "",
    price: 39.0,
    colors: [
      {
        name: "blanco",
        image: pikachu,
      },
    ],
    image: pikachu,
    get images() {
      return this.colors.map((color) => color.image);
    },
    previewImage: pikachu,
    video: "https://youtube.com/embed/X0H_b_yVjZ8"
  },
  {
    category: "Varios",
    categoryId: "varios",
    id: "tobi",
    name: "¿Y ya viste mi video? (Papá de Tobi)",
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
    video: "https://youtube.com/embed/k2EhaRe7mqE"
  },
  {
    category: "Varios",
    categoryId: "varios",
    id: "vino",
    name: "¿Qué no te gusta el vino? Yo me sacrifico",
    color: "",
    size: "",
    price: 39.0,
    colors: [
      {
        name: "blanco2",
        image: SKU842_blanco,
      },
    ],
    image: SKU842_blanco,
    get images() {
      return this.colors.map((color) => color.image);
    },
    previewImage: SKU842_blanco,
    video: "https://youtube.com/embed/Tad8g-Rf9V8"
  }
];

export default varios;
