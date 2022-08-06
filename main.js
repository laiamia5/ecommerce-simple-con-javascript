
//productos----------------------------------------------------------------
/*
const stock = [
	{id:1,  nombre:"lavarropa longvie", precio:63000,  cantidad:1, img:"img producto/lavarropa longvie.jpg"},
	{id:2,  nombre:"secarropa codini",  precio:24000,  cantidad:1, img:"img producto/secarropa codini.jpg"},
	{id:3,  nombre:"secarropa kohinoor",precio:4600,   cantidad:1, img:"img producto/secarropa kohinoor.jpg"},
	{id:4,  nombre:"secadora de pelo",  precio:120000, cantidad:1, img:"img producto/secador philips.webp"},
	{id:5,  nombre:"lavarropa drean",   precio:67000,  cantidad:1, img:"img producto/drean.jpg"},
	{id:6,  nombre:"lavarropa warnes",  precio:74899,  cantidad:1, img:"img producto/lavarropa warnes.jpg"},
	{id:7,  nombre:"lavarropa wash",    precio:4999,   cantidad:1, img:"img producto/lavarropa wash.jpg"},
	{id:8,  nombre:"lavarropa longvie", precio:4999,   cantidad:1, img:"img producto/lavarropa longvie.jpg"},
	{id:9,  nombre:"heladera electrolux",precio:4999,   cantidad:1, img:"img producto/heladera electrolux.jpg"},
	{id:10, nombre:"heladera peabody",  	precio:4999,   cantidad:1, img:"img producto/heladera peabody.jpg"},
	{id:11, nombre:"heladera consul",   	  precio:4999,   cantidad:1, img:"img producto/heladera consul.png"},           
	{id:12, nombre:"televisor smart prodotti",precio:4999,   cantidad:1, img:"img producto/smart prodotti.jpg"},
	{id:13, nombre:"televisor smart samsung", precio:4999,   cantidad:1, img:"img producto/smart samsung.jpg"},
	{id:14, nombre:"televisor skyworth",     precio:4999,   cantidad:1, img:"img producto/tele skyworth.webp"},
	{id:15, nombre:"cocina punktal",    	precio:4999,   cantidad:1, img:"img producto/cocina punktal.jpg"},
	{id:16, nombre:"cocina enxuta",     	precio:4999,   cantidad:1, img:"img producto/cocina enxuta.jpeg"},
	{id:17, nombre:"microondas moretti", precio:4999,   cantidad:1, img:"img producto/microondas moretti.jpeg"},
	{id:18, nombre:"licuadora fravega",  precio:4999,   cantidad:1, img:"img producto/licuadora fravega.jpg"},
	{id:19, nombre:"licuadora oryx",      precio:4999,   cantidad:1, img:"img producto/licuadora oryx.jpg"},
	{id:20, nombre:"licuadora smartlife",  precio:4999,   cantidad:1, img:"img producto/licuadora smartlife.jpg"},
	{id:21, nombre:"aire airway",       precio:4999,   cantidad:1, img:"img producto/aire airway.jpg"},
	{id:22, nombre:"ventilador brown",   precio:4999,   cantidad:1, img:"img producto/ventilador brown.jpg"},
	{id:23, nombre:"aire split",       precio:4999,   cantidad:1, img:"img producto/aire split.jpg"},
	{id:24, nombre:"aire undai",      precio:4999,   cantidad:1, img:"img producto/aire undai.jpg"},
	{id:25, nombre:"estufa",          precio:4999,   cantidad:1, img:"img producto/estufa TC.jpg"}
	
];*/

	let carritoTotal     = []
	let carritoProductos = []


//cards--------------------------------------------------------------------

fetch('data.json')
	.then( (res) => res.json() )
	.then( (data) => { 

		let pagecontent = document.getElementsByClassName("page-content")[0]

		data.forEach( (element) => {

			let contenedor = document.createElement("div");

		 	contenedor.className = "product-conteiner"
			
			contenedor.innerHTML = `
					<div class="contenedor_img">
						<img src='${element.img}'class"img_card">
					</div>
					<h3>${element.nombre}</h3>
					<h3 class="h3-precio">${element.precio}</h3>
					<button id="${element.id}" class="botones">comprar</button>
			`
			pagecontent.appendChild(contenedor)
		})
	}) 
//boton------------------------------------------------------------------

fetch('data.json')
	.then( (res) => res.json() )
	.then( (data) => { 

	for(const elemento of data){

		const boton = document.getElementById(`${elemento.id}`);

		boton.addEventListener("click", () => {
				agregarcarrito(elemento.id)
				swal({
					text: 'su producto se a agregado al carrito con exito',
					icon: 'success',
					timer: '3000',
					buttons: false
				});
		});

		const agregarcarrito = (prodId) => {

		const item = data.find((prod)=> prod.id === prodId)

		carritoTotal.push(item)

		//precio final de la compra
		const preciofinal = carritoTotal.reduce( (acc,elemento) => acc + elemento.precio, 0 );
		console.log("su compra final es de "+ preciofinal);

		//estructura para mostrar elementos del carrito  
		verCarrito();
		//estructura para mostrar precio total
		 precioFCarrito();

	 	} 	
	}	


})

//buscador-------------------------------------------------------------------------

let buscador = document.getElementById("buscador");

document.addEventListener( "keyup", (event) => {

	if(event.target.matches("#buscador")){

		document.querySelectorAll(".product-conteiner").forEach( articulo => {

			 articulo.textContent.toLowerCase().includes(event.target.value.toLowerCase())

			   ? articulo.classList.remove("filtro")
			   : articulo.classList.add("filtro")
		})
		
		
	}

	//console.log(buscador.value)

})

//carrito------------------------------------------------------------------------

const carritoBoton = document.getElementById('carrito_boton');
const carritoaside = document.getElementById('carrito')
const salir = document.getElementById('salir');


//boton abrir
carritoBoton.addEventListener('click', (event) => {

	const carritoNone = document.getElementById('carrito');
	
	carritoNone.classList.remove('carrito_none');
	salir.classList.remove('carrito_none');

	
}) 

//boton salir
	salir.addEventListener('click', (event) => {

		const carritoNone = document.getElementById('carrito');
		
		carritoNone.classList.add('carrito_none');
		salir.classList.add('carrito_none');

	},5000) 

//productos agregados al carrito

const obtener = document.getElementById('carrito_elementos')

const verCarrito = () => {

	let nombreCarr = carritoTotal[carritoTotal.length-1].nombre
	let precioCarr = carritoTotal[carritoTotal.length-1].precio
	let imgCarr = carritoTotal[carritoTotal.length-1].img

	let nose = document.createElement("div");

	 	nose.className = "elementosCarr"

		nose.innerHTML = `
						<td class='cajacarr'>${nombreCarr}</td>
						<td class='cajacarr'>${precioCarr}</td>
						<img src="${imgCarr}" class="imgCarr">		
		`
		obtener.appendChild(nose);


}
//ver precio final en el carrito

const precioFCarrito = () => {
		
	const divprecioCarr = document.getElementsByClassName('precioFCarrito')[0];

	divprecioCarr.innerText = 'su compra final es de '+carritoTotal.reduce( (acc,elemento) => acc + elemento.precio, 0 );
	
}


