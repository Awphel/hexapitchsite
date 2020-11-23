//This function toggles the PPE menu
export function togglePPE(show) {
  var ppeNevigation = document.getElementById("ppeOptions");
  if(show == 'PPE'){
      ppeNevigation.style.cssText += "visibility: visible; height: auto;"
    }
}

//Toggles between PPE gategories
export function allProducts_1(wanted) {

global.$productCategory = "";
var div1 = document.getElementById("RandomProducts");
var div2 = document.getElementById("Respirators");
var div3 = document.getElementById("Face");
var div4 = document.getElementById("Hand");
var div5 = document.getElementById("Clothing");
var section = document.getElementById("thehead");
var ppeNevigation = document.getElementById("ppeOptions");


if(wanted == 'Respiratory'){
      var productCategory = wanted;
      section.innerHTML = "<b>Showing:</b> Respirators & Face Masks";
      div1.style.cssText += "visibility: hidden; height: 0;"
      div3.style.cssText += "visibility: hidden; height: 0;"
      div4.style.cssText += "visibility: hidden; height: 0;"
      div5.style.cssText += "visibility: hidden; height: 0;"
      div2.style.cssText += "visibility: visible; height: auto;"
  }
    else if (wanted == 'Face'){
      var productCategory = wanted;
      section.innerHTML = "Visors & Faceshields ";
      div1.style.cssText += "visibility: hidden; height: 0;"
      div3.style.cssText += "visibility: visible; height: auto;"
      div4.style.cssText += "visibility: hidden; height: 0;"
      div5.style.cssText += "visibility: hidden; height: 0;"
      div2.style.cssText += "visibility: hidden; height: 0;"
    }
}

//Toggles between PPE gategories
export function allProducts_2(wanted) {

global.$productCategory = "";
var div1 = document.getElementById("RandomProducts");
var div2 = document.getElementById("Respirators");
var div3 = document.getElementById("Face");
var div4 = document.getElementById("Hand");
var div5 = document.getElementById("Clothing");
var section = document.getElementById("thehead");
var ppeNevigation = document.getElementById("ppeOptions");


if(wanted == 'Clothing'){
      var productCategory = wanted;
      section.innerHTML = "Respirators & Face Masks ";
      div1.style.cssText += "visibility: hidden; height: 0;"
      div3.style.cssText += "visibility: hidden; height: 0;"
      div4.style.cssText += "visibility: hidden; height: 0;"
      div5.style.cssText += "visibility: visible; height: auto;"
      div2.style.cssText += "visibility: hidden; height: 0;"
  }
    else if (wanted == 'Hand'){
      var productCategory = wanted;
      section.innerHTML = "Visors & Faceshields ";
      div1.style.cssText += "visibility: hidden; height: 0;"
      div3.style.cssText += "visibility: hidden; height: 0;"
      div4.style.cssText += "visibility: visible; height: auto;"
      div5.style.cssText += "visibility: hidden; height: 0;"
      div2.style.cssText += "visibility: hidden; height: 0;"
    }
}
