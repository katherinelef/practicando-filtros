var imagesContainer = document.getElementById('images-container');
/*var image = document.createElement("img");
image.setAttribute("src","assets/images/perros/dog1.jpg");
image.setAttribute("alt","dog");
imagesContainer.appendChild(image);*/

//array de los animales//
var Totalperros = ['dog1','dog2','dog3','dog4','dog5','dog6'];
var Totalconejos = ['rabit1','rabit2','rabit3','rabit4','rabit5','rabit6'];

/*crea imagen de alumnas*/
function createImages (name,promo) {
  var image = document.createElement("img");
  image.classList.add ("sizeImages");
  image.setAttribute("src","assets/images/"+ promo +"/"+name+".jpg");
  image.setAttribute("alt",name);
  imagesContainer.appendChild(image);
}

function addImages(tipoAnimal,arrayAnimales) {
  for(i=0; i<arrayAnimales.length; i++) {
    createImages(arrayAnimales[i],tipoAnimal);
  }
}
addImages("conejos",Totalconejos);
