new Glide(".images",{
	type: 'carousel',
	perView: 2,
	gap: 40,
	autoplay: 2500,
	focusAt: 'center',
	breakpoints: {
		1200:{
			perView: 2,
			gap: 40,
		},
		800:{
			perView: 2,
			gap: 40,
		},
		560:{
			focusAt: 0,
			perView: 1,
			gap: 10,
		}
	}
}).mount();
//Ventana emergente
const open = document.getElementById('open');
const close = document.getElementById("close");
const container = document.getElementById("conteiner");
console.log("El js funciona")
open.addEventListener('click',() =>{
    console.log("hizo clickk");
    container.classList.add('emergente-active');
});

close.addEventListener('click',() =>{
	console.log("Tambien hizo click")
    container.classList.remove('emergente-active');
});

