import type {ICartItem} from "../types/product";

// Clave carrito en localStorage
const CART_KEY = "cart";

// Obtener carrito desde localstorage
export function getCart(): ICartItem[] {
    const data = localStorage.getItem(CART_KEY);
    if(!data) {
        return [];
    }
    return JSON.parse(data);
    
};

// Guardar carrito en localStorage
export function saveCart(cart: ICartItem[]): void {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// Agregar productos al carrito
export function addToCart(productId: number, nombre: string, precio: number, imagen: string): void {
    // obtenemos el carrito actual
    const cart = getCart();

    // chequeamos si existe ya el item en el carrito
    const existingItem = cart.find( (item) => item.productId === productId);
    // Si existe agregamos 1, sino pusheamos nuevo item
    if(existingItem) {
        existingItem.cantidad += 1;
    } else {
        cart.push({
            productId,
            nombre,
            precio,
            cantidad: 1,
            imagen,
        });
    }
    saveCart(cart);
}

// Actualizar cantidad del item
export function updateQuantity (productId: number, cantidad: number): void {
    // obtenemos el carrito actual
    const cart = getCart();

    const item = cart.find((item) => item.productId === productId);
    // Si no existe el item retornamos, si existe actualizamos cantidad
    if(!item){
        return;
    }
    item.cantidad = cantidad;

    // Si la cantidad es 0 eliminamos item del carrito
    if(item.cantidad <= 0) {
        // creamos un nuevo array con los items que son diferentes al que tiene 0 o menos de cantidad
        const filtered = cart.filter((item) => item.productId !== productId);
        saveCart(filtered);
        return;
    }
    // Si la cantidad no era 0 o menor, guarda el carrito
    saveCart(cart);
}

// Calcular Total del carrito
export function getCartTotal(): number {
    const cart = getCart();
    let total = 0;
    for(const item of cart) {
        total += item.precio * item.cantidad;
    }
    return total;
    
}

