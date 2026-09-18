import type {IProduct} from "../types/product";
import type { ICategoria } from "../types/categoria";

// Importamos las img
import pizzaMuzza from "../assets/img/pizza_muzzarella.png";
import hamburguesaTriple from "../assets/img/hamburguesa_triple.png";
import cocaCola from "../assets/img/coca-cola_600ml.png";
import papasCheddar from "../assets/img/papas_fritas_cheddar.png";
import pizzaEspecial from "../assets/img/pizza-especial.png";
import pizzaMediterranea from "../assets/img/pizza-mediterranea.png";
import pizzaPeperoni from "../assets/img/pizza-peperoni.png";
import pizzaTropical from "../assets/img/pizza-tropical.png";
import hamburguesaBacon from "../assets/img/hamburguesa-bacon.png";
import hamburguesaSimple from "../assets/img/hamburguesa-simple.png";
import papasClasicas from "../assets/img/papas-clasicas.png";
import papasRusticas from "../assets/img/papas-rusticas.png";
import fanta from "../assets/img/fanta-600ml.png";
import sprite from "../assets/img/sprite-600ml.png";

 

// productos
export const PRODUCTS: IProduct[] = [
    {
        id: 1,
        nombre: "Pizza Muzzarella",
        precio: 12000,
        categoria: 1,
        descripcion: "Pizza clasica de muzarrella",
        imagen: pizzaMuzza
    },
    {
        id: 2,
        nombre: "Pizza Especial",
        precio: 15000,
        categoria: 1,
        descripcion: "Pizza con rucula, hongos, jamon y muzzarella",
        imagen: pizzaEspecial   
    },
    {
        id: 3,
        nombre: "Pizza Mediterranea",
        precio: 15000,
        categoria: 1,
        descripcion: "Pizza con aceitunas, jamon crudo y muzzarella",
        imagen: pizzaMediterranea
    },
    {
        id: 4,
        nombre: "Pizza Pepperoni",
        precio: 15000,
        categoria: 1,
        descripcion: "Pizza con pepperoni italianos",
        imagen: pizzaPeperoni
    },
    {
        id: 5,
        nombre: "Pizza Tropical",
        precio: 15000,
        categoria: 1,
        descripcion: "Pizza con ananas, muzzarella y jamon",
        imagen: pizzaTropical
    },
    {
        id: 6,
        nombre: "Hamburguesa Triple",
        precio: 18000,
        categoria: 2,
        descripcion: "Hamburguesa con tres rodajas de carne, cheddar, lechuga y pepinillos",
        imagen: hamburguesaTriple
    },
    {
        id: 7,
        nombre: "Hamburguesa Bacon",
        precio: 18000,
        categoria: 2,
        descripcion: "Hamburguesa con una rodaja de carne, cheddar, lechuga y crispy bacon",
        imagen: hamburguesaBacon
    },
    {
        id: 8,
        nombre: "Hamburguesa Simple",
        precio: 15000,
        categoria: 2,
        descripcion: "Hamburguesa con una rodaja de carne, cheddar y lechuga",
        imagen: hamburguesaSimple
    },
    {
        id: 9,
        nombre: "Papas Fritas con Cheddar",
        precio: 9000,
        categoria: 3,
        descripcion: "Papas fritas con cheddar derretido",
        imagen: papasCheddar
    },
    {
        id: 10,
        nombre: "Papas Fritas Clasicas",
        precio: 7000,
        categoria: 3,
        descripcion: "Papas fritas clasicas",
        imagen: papasClasicas
    },
    {
        id: 11,
        nombre: "Papas Fritas Rusticas",
        precio: 8000,
        categoria: 3,
        descripcion: "Papas fritas estilo rustico",
        imagen: papasRusticas
    },
    {
        id: 12,
        nombre: "Coca Cola 600ml",
        precio: 3500,
        categoria: 4,
        descripcion: "Coca-Cola 600ml",
        imagen: cocaCola
    },
    {
        id: 13,
        nombre: "Sprite 600ml",
        precio: 3500,
        categoria: 4,
        descripcion: "Sprite 600ml",
        imagen: sprite
    },
    {
        id: 14,
        nombre: "Fanta 600ml",
        precio: 3500,
        categoria: 4,
        descripcion: "Fanta 600ml",
        imagen: fanta
    }    
];

const CATEGORIES: ICategoria[] = [

    {id:1, nombre: "Pizzas"},
    {id:2, nombre: "Hamburguesas"},
    {id:3, nombre: "Papas Fritas"},
    {id:4, nombre: "Bebidas"}

]

export function getCategories(): ICategoria[] {
    return CATEGORIES;
}
