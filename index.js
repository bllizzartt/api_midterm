const button = document.getElementById("GetUsers");
button.addEventListener("click", getUserData);
function getUserData() {
  let url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (resp) {
        const sec = document.getElementById('results') ;
        for(let a of resp.results){
            console.log(a.name, a.url);
            const an = document.createElement('p');
            an.innerHTML = "<a href='" + a.url + "'>" + a.name + "</a>";
            sec.appendChild(an);
        }
    //   document.getElementById("Output").innerHTML = JSON.stringify(resp);
    })
    .catch(function (resp) {
      document.getElementById("Output").innerHTML = "There was an error";
    });
}





const button2 = document.getElementById("results");
button2.addEventListener("click", getSpriteData);
function getSpriteData(ev) {
    ev.preventDefault();
    console.log(ev.target.attributes[0].value);
  let url = ev.target.attributes[0].value;
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (resp) {
        for(let a of resp){
            console.log(a);
        }
    })
    .catch(function (resp) {
      document.getElementById("Output").innerHTML = "There was an error" + resp;
    });
}









// function pokemonList(pokemon_name) {
//   const obj = {
//     pokemon_name:
//     rarity
//   }
  

// }

// const form = document.getElementById('createUser')
// form.addEventListener("submit", saveUserData);
// function saveUserData(e) {
//   e.preventDefault();
//   const url = "https://pokeapi.co/api/v2/pokemon/ditto";
//   const FD  = new FormData(form);
//   FD.append("name",form.first_name.value + ' ' + 
// form.last_name.value);
//   let jsonObject = {};
//   for (let pair  of FD.entries()) {
//       jsonObject[pair[0]] = pair[1];
//   }
//   console.log(jsonObject);
//   fetch(url, {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify(jsonObject)
//   })
//     .then(function(response) {
//         console.log(response.json());
//         return response.json();
//     })
//     .then(function(data) {
//         console.log('raw data',data);
//         document.getElementById("Output").innerHTML = 
// "Successfully created id: "+data.id;
//     })
//     .catch(function(error) {
//         document.getElementById("Output").innerHTML = "Th1ere was an error "+error;
//     });
// }