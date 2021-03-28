(function() {
	let bola1 = document.getElementById('bol1');
    let bola2 = document.getElementById('bol2');
	let bola3 = document.getElementById('bol3');
    let bola4 = document.getElementById('bol4');
	let bola5 = document.getElementById('bol5');
	"use strict";
	/*[pan and well CSS scrolls]*/
	var pnls = document.querySelectorAll('.panel').length,
		scdir, hold = false;

	function _scrollY(obj) {
		var slength, plength, pan, step = 100,
			vh = window.innerHeight / 100,
			vmin = Math.min(window.innerHeight, window.innerWidth) / 100;
		if ((this !== undefined && this.id === 'well') || (obj !== undefined && obj.id === 'well')) {
			pan = this || obj;
			plength = parseInt(pan.offsetHeight / vh);
		}
		if (pan === undefined) {
			return;
		}
		plength = plength || parseInt(pan.offsetHeight / vmin);
		slength = parseInt(pan.style.transform.replace('translateY(', ''));
		if (scdir === 'up' && Math.abs(slength) < (plength - plength / pnls)) {
			slength = slength - step;
		} else if (scdir === 'down' && slength < 0) {
			slength = slength + step;
		} else if (scdir === 'top') {
			slength = 0;
		}
		if (hold === false) {
			hold = true;
			pan.style.transform = 'translateY(' + slength + 'vh)';
			setTimeout(function() {
				hold = false;
			}, 1000);
		}
		console.log(scdir + ':' + slength + ':' + plength + ':' + (plength - plength / pnls));

	/* wenas aqui la animacion de las bolitas*/
		if(slength == 0){
			crecer(bola1);
			decrecer(bola2);
			console.log('entro al if del script de angel xd');
		}
		if(slength == -100){
			crecer(bola2);
			decrecer(bola1);
			decrecer(bola3);
			console.log('entro al if del script de angel xd');
		}
		if(slength == -200){
			crecer(bola3);
			decrecer(bola2);
			decrecer(bola4);
			console.log('entro al if del script de angel xd');
		}
		if(slength == -300){
			crecer(bola4);
			decrecer(bola3);
			decrecer(bola5);
			console.log('entro al if del script de angel xd');
		}
		if(slength == -400){
			crecer(bola5);
			decrecer(bola4);
			console.log('entro al if del script de angel xd');
		}
	}

	function crecer(obj){
		obj.style.width = '18px';
		obj.style.height = '18px';
		obj.style.backgroundColor = 'white';
	}
	function decrecer(obj){
		obj.style.width = '8px';
		obj.style.height = '8px';
		obj.style.backgroundColor = 'rgba(208, 208, 208, 1)';
	}
	/* termina animación de las bolitas 
	psdt: SÉ QUE ESTÁ DEL ASCO, PERO YA MEJORARÉ EL CODE ASI QUE NO TOQUE*/ 
	
	/*[swipe detection on touchscreen devices]*/
	function _swipe(obj) {
		var swdir,
			sX,
			sY,
			dX,
			dY,
			threshold = 100,
			/*[min distance traveled to be considered swipe]*/
			slack = 50,
			/*[max distance allowed at the same time in perpendicular direction]*/
			alT = 500,
			/*[max time allowed to travel that distance]*/
			elT, /*[elapsed time]*/
			stT; /*[start time]*/
		obj.addEventListener('touchstart', function(e) {
			var tchs = e.changedTouches[0];
			swdir = 'none';
			sX = tchs.pageX;
			sY = tchs.pageY;
			stT = new Date().getTime();
			//e.preventDefault();
		}, false);

		obj.addEventListener('touchmove', function(e) {
			e.preventDefault(); /*[prevent scrolling when inside DIV]*/
		}, false);

		obj.addEventListener('touchend', function(e) {
			var tchs = e.changedTouches[0];
			dX = tchs.pageX - sX;
			dY = tchs.pageY - sY;
			elT = new Date().getTime() - stT;
			if (elT <= alT) {
				if (Math.abs(dX) >= threshold && Math.abs(dY) <= slack) {
					swdir = (dX < 0) ? 'left' : 'right';
				} else if (Math.abs(dY) >= threshold && Math.abs(dX) <= slack) {
					swdir = (dY < 0) ? 'up' : 'down';
				}
				if (obj.id === 'well') {
					if (swdir === 'up') {
						scdir = swdir;
						_scrollY(obj);
					} else if (swdir === 'down' && obj.style.transform !== 'translateY(0)') {
						scdir = swdir;
						_scrollY(obj);

					}
					e.stopPropagation();
				}
			}
		}, false);
	}
	/*[assignments]*/
	var well = document.getElementById('well');
	well.style.transform = 'translateY(0)';
	well.addEventListener('wheel', function(e) {
		if (e.deltaY < 0) {
			scdir = 'down';
		}
		if (e.deltaY > 0) {
			scdir = 'up';
		}
		e.stopPropagation();
	});
	well.addEventListener('wheel', _scrollY);
	_swipe(well);
	var tops = document.querySelectorAll('.top');
	for (var i = 0; i < tops.length; i++) {
		tops[i].addEventListener('click', function() {
			scdir = 'top';
			_scrollY(well);
		});
	}
})();