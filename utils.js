	
const degToRad = (deg) => {
	return deg /180 * Math.PI;
}
const randomRange = (min, max) => {
	return  Math.random()* (max-min) + min ;
}
function getCenter(targetNode){
	bounding_rect=targetNode.getBoundingClientRect();
	let centerX = bounding_rect.left + bounding_rect.width / 2;
	let centerY = bounding_rect.top + bounding_rect.bottom / 2;
	return {x:centerX,y:centerY};
}

function randomcolor(){
	let r,g,b,a;
		r=~~randomRange(16,255);
		g=~~randomRange(16,255);
		b=~~randomRange(16,255);
		a=~~randomRange(16,255);
		r=r.toString(16);
		g=g.toString(16);
		b=b.toString(16);
		a=a.toString(16);
	return "#"+r+g+b+a;
	
}
