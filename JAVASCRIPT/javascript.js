
start()

var titre = document.getElementById("title");
let fname = document.querySelector('#title').value;
console.log(fname);

async function start() {
  const response = await fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit=10")
  const data = await response.json();
  for (let i = 0; i < data.length; i++) {
    createList(data[i]);
  }
}

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
}

// 

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Fermera le menu dropdown si l'utilisateur clic à côté
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//document.querySelector('#publish').onclick = createPost;
document.querySelector('#publish').addEventListener("click",createPost);

function createPost(event) {
  event.preventDefault()
  console.log('verif');
  let fname = document.querySelector('#title').value;
  let lname = document.querySelector('#link').value;
  let email = document.querySelector('#desc').value;

  let container = document.createElement("div");
  container.classList.add("container");
  container.classList.add("card");

  let titre = document.createElement("h3");
  titre.innerText = fname;

  let img = document.createElement("img");
  img.setAttribute("src", lname);

  let cible = document.getElementById("testeur");

  container.appendChild(titre);
  container.appendChild(img);
  cible.appendChild(container);
}



// <--- Stockage commentaires ---> \\



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
