// alert("Chargement");
function addNewWEField() {
    //   console.log("Ajout champs");
  
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Ecrire ici");
  
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
  
    weOb.insertBefore(newNode, weAddButtonOb);
  }
  
  function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Ecrire ici");
  
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
  
    aqOb.insertBefore(newNode, aqAddButtonOb);
  }
  
  //generation cv
  function genererCV() {
    // console.log("generer CV");
  
    let nameField = document.getElementById("nameField").value;
  
    let nameT1 = document.getElementById("nameT1");
  
    nameT1.innerHTML = nameField;
  
    //direct
  
    document.getElementById("nameT2").innerHTML = nameField;
  
    //contact
    document.getElementById("contactT").innerHTML = document.getElementById(
      "contactField"
    ).value;
  
    //addresse
    document.getElementById("addressT").innerHTML = document.getElementById(
      "addressField"
    ).value;
    document.getElementById("fbT").innerHTML = document.getElementById(
      "fbField"
    ).value;
    document.getElementById("instaT").innerHTML = document.getElementById(
      "instaField"
    ).value;
    document.getElementById("linkedT").innerHTML = document.getElementById(
      "linkedField"
    ).value;
  
    // Objectif
  
    document.getElementById("objectiveT").innerHTML = document.getElementById(
      "objectiveField"
    ).value;
  
    
  
    let wes = document.getElementsByClassName("weField");
  
    let str = "";
  
    for (let e of wes) {
      str = str + `<li> ${e.value} </li>`;
    }
  
    document.getElementById("weT").innerHTML = str;
  
    
  
    let aqs = document.getElementsByClassName("eqField");
  
    let str1 = "";
  
    for (let e of aqs) {
      str1 += `<li> ${e.value} </li>`;
    }
  
    document.getElementById("aqT").innerHTML = str1;
  
    //Definition de l'image
  
    let file = document.getElementById("imgField").files[0];
  
    console.log(file);
  
    let reader = new FileReader();
  
    reader.readAsDataURL(file);
  
    console.log(reader.result);
  
    // Modele d'image
  
    reader.onloadend = function () {
      document.getElementById("imgModele").src = reader.result;
    };
  
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-modele").style.display = "block";
  }
  
  //Affichage
  function afficerCV() {
    window.afficher();
  }