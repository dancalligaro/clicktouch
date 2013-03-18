function clickTouch(element, handler){
			
	if( typeof element == 'undefined' || !element.addEventListener || typeof handler != 'function') return;

	var startX, 
	    startY, 
	    touchIdentifier,
	    threshold = 0; // Pixels

		element.addEventListener("touchstart", function(e){
			if( e.touches.length == 1 ){
				touchIdentifier = e.touches[0].identifier;
 			startX = e.touches[0].screenX;
 			startY = e.touches[0].screenY;
			}
		}, false);

	element.addEventListener("touchend", function(e){

		if( e.touches.length !== 0 ) return; // Only trigger if there are no other fingers
		
		if( touchIdentifier == e.changedTouches[0].identifier 
		 && Math.abs( e.changedTouches[0].screenX - startX ) <= threshold
		 && Math.abs( e.changedTouches[0].screenY - startY ) <= threshold ){
			handler();
		}
	}, false);

}