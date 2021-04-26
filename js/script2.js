new Glide(".images",{
	type: 'carousel',
	perView: 3,
	gap: 40,
	autoplay: 2500,
	breakpoints: {
		800:{
			perView: 2,
			gap: 40,
		},
		430:{
			perView: 1,
			gap: 10,
		}
	}
}).mount();