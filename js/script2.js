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