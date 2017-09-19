var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for(i =1;i<6;i++){
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic'+i+'.jpg');
  thumbBar.appendChild(newImage);
}

var images = document.querySelectorAll('.thumb-bar img'); //get all image elements and ref them by images

for(var i =0; i<images.length; i++){ //iterate through the images as you set an onclik mouse event
	
	var imgSrc = images[i].getAttribute('src');// get the src attribute value of the current image
	
	images[i].onclick=function(e){ //Apply the onclick mouse event to the currently clicked image
		var imgS = e.target.getAttribute('src'); 
		displayedImage.setAttribute('src',imgS); // change the attribute of the 
	}
}


/* Wiring up the Darken/Lighten button */

