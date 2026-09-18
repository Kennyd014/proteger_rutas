import { getCart, saveCart } from "../../../utils/cart";

// Seleccionamos elementos del DOM
const cartList = document.querySelector<HTMLDivElement>('#cart-list')!;
const cartTotal = document.querySelector<HTMLHeadingElement>('#cart-total')!;
const emptyCart = document.querySelector<HTMLDivElement>('#empty-cart')!;

function renderCart(): void{

    const cart = getCart();

    cartList.innerHTML = "";

    if(cart.length === 0){
        // quitamos la clase hidden para mostrar el carro vacio
        emptyCart.classList.remove('hidden');
        cartTotal.textContent = "Total: $0";

        document.querySelector('#resumen-subtotal')!.textContent = "0";
        document.querySelector('#resumen-total')!.textContent = "0";
        return;
    }

    emptyCart.classList.add("hidden");

    cart.forEach((item)=> {
        const fila = document.createElement('div');
        fila.className = "cart-item";

        fila.innerHTML = `
           <img src="${item.imagen}" alt="${item.nombre}" class="cart-thumb">

            <div class="cart-info">
                <h4>${item.nombre}</h4>
                <p class="cart-price">$${item.precio}</p>

                <div class="cantidad-controls">
                    <button class="btn-restar" data-id="${item.productId}">-</button>
                    <span>${item.cantidad}</span>
                    <button class="btn-sumar" data-id="${item.productId}">+</button>
            </div>

            <button class="btn-eliminar" data-id="${item.productId}">Eliminar</button>
        </div>
        `;
        cartList.appendChild(fila);
    
    });

    // Sumar item al carrito
    document.querySelectorAll<HTMLButtonElement>('.btn-sumar').forEach(btn => {
        btn.addEventListener("click", () =>{
            const id = Number(btn.dataset.id);
            const cart = getCart();

            const item = cart.find((p) => p.productId === id);
            if(item){
                item.cantidad += 1;
                saveCart(cart);
                renderCart();
            }
        })
    });

    // Restar item al carrito
    document.querySelectorAll<HTMLButtonElement>('.btn-restar').forEach(btn => {
        btn.addEventListener("click", () =>{
            const id = Number(btn.dataset.id);
            const cart = getCart();

            const item = cart.find((p) => p.productId === id);
            if(item && item.cantidad > 1){
                item.cantidad -= 1;
            }else {
                const index = cart.findIndex(p => p.productId === id);
                cart.splice(index, 1);
            }
            saveCart(cart);
            renderCart();
        })
    });

    // Eliminar item
     document.querySelectorAll<HTMLButtonElement>('.btn-eliminar').forEach(btn => {
        btn.addEventListener("click", () =>{
            const id = Number(btn.dataset.id);
            const cart = getCart();

            // Elimina el item del array con el id que coincide
            const index = cart.findIndex(p => p.productId === id);
            cart.splice(index, 1);
            
            saveCart(cart);
            renderCart();
        })
    });

    // Total
    const total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    cartTotal.textContent = `Total: $${total}`;

    // Actualizar resumen
    const resumenSubtotal = document.querySelector<HTMLSpanElement>('#resumen-subtotal')!;
    const resumenTotal = document.querySelector<HTMLSpanElement>('#resumen-total')!;

    resumenSubtotal.textContent = total.toString();
    resumenTotal.textContent = total.toString();

}
// btn vaciar carrito
document.querySelector<HTMLButtonElement>('#btn-vaciar')!.addEventListener('click', () => {
    saveCart([]);
    renderCart();
});
// btn confirmar venta
document.querySelector<HTMLButtonElement>('#btn-confirmar')!.addEventListener('click', () =>{
    alert('Confirmacion no disponible');
    
});

// Inizializamos
renderCart();