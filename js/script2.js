new Glide(".images",{
	type: 'carousel',
	perView: 3,
	gap: 40,
	autoplay: 2500,
	focusAt: 'center',
	breakpoints: {
		1200:{
			perView: 2,
		},
		800:{
			perView: 2,
			gap: 40,
		},
		430:{
			focusAt: 0,
			perView: 1,
			gap: 10,
		}
	}
}).mount();