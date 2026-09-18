export interface IProduct {
    id: number;
    nombre: string;
    precio: number;
    descripcion: string;
    categoria: number;
    imagen: string;
}

export interface ICartItem {
    productId: number;
    nombre: string;
    precio: number;
    cantidad: number;
    imagen: string;

}