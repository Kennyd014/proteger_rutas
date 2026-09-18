import { checkAuhtUser, logout } from "../../../utils/auth";
import { PRODUCTS, getCategories } from "../../../data/data";
import { addToCart } from "../../../utils/cart";


// Seleccionamos elementos en el DOM
const productList = document.querySelector<HTMLDListElement>('#product-list')!;
const categoriasList = document.querySelector<HTMLDListElement>('#categorias-list')!;
const buscador = document.querySelector<HTMLInputElement>('#buscador')!;

// Variable que cambiara con la lista de productos segun filtra, etc
let filteredProducts = PRODUCTS;

// Renderizar productos
function renderProducts(products = filteredProducts): void {
  // VAciamos la lista
  productList.innerHTML = "";
  // Si no hay productos disponibles mostramos mensaje
  if(products.length === 0){
       productList.innerHTML = "<p>No hay productos disponibles</p>";
  };

  products.forEach((product) => {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
      <img src= "${product.imagen}" alt= "${product.nombre}">
      <h3>${product.nombre}</h3>
      <p>${product.descripcion}</p>
      <p><srong>$${product.precio}</srong></p>
      <buttom class= "add-btn" data-id="${product.id}">Agregar</buttom>
    `;
    productList.appendChild(card);
  });

  // Evento para agregar productos al carrito
  const addBtn = document.querySelectorAll<HTMLButtonElement>(".add-btn");
  addBtn.forEach(btn =>{
    btn.addEventListener('click', () => {
      //tomamos el id del btn y lo convertimos a number
      const id = Number(btn.dataset.id);
      // gurdamos el producto que corresponde al id del boton
      const product = PRODUCTS.find( (p) => p.id === id);
      // Si existe el producto lo agrega al carrito
      if(product) {
        addToCart(product.id, product.nombre, product.precio, product.imagen);
        alert('Producto agregado al carrito');
      }

    });
  });
}
  // Renderizar categorias
  function renderCategorias(): void {
    // Obtenemos las categorias
    const categorias = getCategories();
    // Creamos btn para ver todos los productos no filtrados por categoria
    categoriasList.innerHTML = `
      <button class= "cat-btn"  data-cat= "all">Todos los productos</button>
    `;
    // Recorremos todas las categorias y creamos un boton por cada una
    categorias.forEach((cat) => {
      const btn = document.createElement('button');
      btn.className = "cat-btn";
      btn.dataset.cat = String(cat.id);
      btn.textContent = cat.nombre;
      categoriasList.appendChild(btn);
    })

    // Seleccionamos todos los cat-btn
    const categoriaBtn = document.querySelectorAll<HTMLButtonElement>('.cat-btn');

    categoriaBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        // Obtenemos el id de cada btn
        const catId = btn.dataset.cat;
        // si el id es all no filtramos productos, sino filtramos por id categoria
        if(catId === 'all') {
          filteredProducts = PRODUCTS;
        } else {
          filteredProducts = PRODUCTS.filter((p) => p.categoria === Number(catId));
        }

        // Mostramos productos
        renderProducts();
      });
    });

    
  }
  
  // Busqueda por nombre
  buscador.addEventListener("input", () => {
    // convertimos input a minuscula
    const texto = buscador.value.toLowerCase();
    // filtra por los productos que contengan ese texto
    filteredProducts = PRODUCTS.filter((p) => p.nombre.toLowerCase().includes(texto));
    renderProducts();
  });



//inicializacion
renderCategorias();
renderProducts();
/*
const buttonLogout = document.getElementById(
  "logoutButton"
) as HTMLButtonElement;
buttonLogout?.addEventListener("click", () => {
  logout();
});


const initPage = () => {
  console.log("inicio de pagina");
  checkAuhtUser(
    "/src/pages/auth/login/login.html",
    "/src/pages/admin/home/home.html",
    "client"
  );
};
initPage();
*/  
