import { Icons } from "./icons";
import CoffeeImg from "../../public/best-coffee-img.png";
import CoffeeImgTwo from "../../public/best-coffee-img-two.png";
import CoffeeImgThree from "../../public/best-coffee-img-three.png";

export const Info = [
    {
        id: 1,
        title: "Our Catering",
        text: "Alowishus Catering, delicious drop off Catering",
        img: <Icons.food />,
        btn: "ORDER CATHERING",
    },
    {
        id: 2,
        title: "The Food",
        text: "Our entire menu is available as dine in or takeaway.",
        img: <Icons.fastFood />,
        btn: "FOOD MENU",
    },
    {
        id: 3,
        title: "The Gelato",
        text: "Life is like GELATO, enjoy it before it melts.",
        img: <Icons.iceCream />,
        btn: "DISCOVER MORE",
    },
];

export const bestCoffee = [
    {
        id: 1,
        img: CoffeeImg,
        rate: "#1 Selling",
        title: "Double Espresso",
        text: "Amet minim mollit non deserunt dolor ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.",
        price: "#59.99",
        btn: "ORDER NOW",
    },
    {
        id: 2,
        img: CoffeeImgTwo,
        rate: "#2    Selling",
        title: "Caramel Frappe",
        text: "Amet minim mollit non deserunt dolor ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.",
        price: "#59.99",
        btn: "ORDER NOW",
    },
    {
        id: 3,
        img: CoffeeImgThree,
        rate: "#3 Selling",
        title: "Iced Coffee",
        text: "Amet minim mollit non deserunt dolor ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.",
        price: "#59.99",
        btn: "ORDER NOW",
    },
];