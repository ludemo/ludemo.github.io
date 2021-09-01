new Glide(".images",{
	type: 'carousel',
	perView: 2,
	gap: 40,
	autoplay: 2500,
	focusAt: 'center',
	breakpoints: {
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
open.addEventListener('click',() =>{
    container.classList.add('ventana--activa');
});

close.addEventListener('click',() =>{
    container.classList.remove('ventana--activa');
});

