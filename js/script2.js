new Glide(".images",{
	type: 'carousel',
	perView: 3,
	gap: 40,
	autoplay: 2500,
	focusAt: 'center',
	breakpoints: {
		1200:{
			perView: 3
		},
		430:{
			focusAt: 0,
			perView: 1,
		}
	}
}).mount();