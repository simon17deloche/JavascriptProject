//var errormsg = "alert error";

//var callBackGetSuccess = function(data) {
//    console.log("age donné :", data)
//    var element = document.getElementById("zone_test2");
//    element.innerHTML = "l'histoire est : " + data.metadata.description
//    var element = document.getElementById("zone_test");
//    element.innerHTML = "numéro de l'histoire : " + data.metadata.identifier
//}

//function buttonClickGET(){
//    var url = "	https://archive.org/metadata/TheAdventuresOfTomSawyer_201303"
//
//    $.get(url, callBackGetSuccess).done(function() {
//        
//    })
//    .fail(function() {
//        alert(errormsg);
//    })
//    .always(function() {
//        //alert (errormsg);
//    });
//}

//fetch("https://archive.org/metadata/TheAdventuresOfTomSawyer_201303").then(function(response) {
//    return response.json()
//}).then(function(data) {
//    console.log(data)
//})

async function start() {
    const response = await fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit=10")
    const data = await response.json();
    for (let i = 0; i < data.length; i++) {
        createList(data[i]);
    }
  
}

start()

function createList(list) {
    let container = document.createElement("div");
    container.classList.add("container");
    container.classList.add("card");

    let titre = document.createElement("h3");
    titre.innerText = list.title;

    let img = document.createElement("img");
    img.setAttribute("src", list.imageUrl);
    
    let cible = document.getElementById("testeur");

    container.appendChild(titre);
    container.appendChild(img);
    cible.appendChild(container); 
    return 
}

//         document.getElementById("testeur").innerHTML = `
//     <div>
//         ${Object.keys(list).map(function (breed) {
//             console.log(Object.keys)
//         return `<div class="card"><h2>${list.title}</h2>
//         <img src="${list.imageUrl}" alt="photo chien"></div>`
//     }).join('')}
        
//     `
// }

// loadByBreed()

// async function loadByBreed(breed) {
//     const response = await fetch(`https://dog.ceo/api/breed/${breed}/image/random`)
//     const data = await response.json()
//     console.log(data)
//     createSlide(data.message)
// }

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 