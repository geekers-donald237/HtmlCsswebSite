//Recuperationndes vartiables 

var dayDiv = document.querySelector('.days');
var heureDiv = document.querySelector('.hours');
var minuteDiv = document.querySelector('.minute');
var secondDiv = document.querySelector('.second');


var affichageHeure = function(){
    // Déclaration des variables qui seront utilisées : 
    var today,heures, minutes, secondes, deuxChiffres;

    // Récupérer la date actuelle : 
    today = new Date();


    //Afficher les heures, minutes et secondes toujours avec deux chiffres : 
    deuxChiffres = function(element){
        if(element < 10){
            return element = "0" + element;
        } else {
            return element;
        }
    }

    // Récupérer les heures : 
    heures = deuxChiffres(today.getHours());

    // Récupérer les minutes : 
    minutes = deuxChiffres(today.getMinutes());

    // Récupérer les secondes : 
    secondes = deuxChiffres(today.getSeconds());

    jourNUmero = deuxChiffres(today.getDate()); 

    dayDiv.textContent = jourNUmero; 
    heureDiv.textContent = heures;
    minuteDiv.textContent = minutes;
    secondDiv.textContent = secondes;

    //Lancer la fonction affichage heure toutes les 1000 ms, soit toute les secondes : 
    setTimeout(affichageHeure, 1000);

}
//Lancer la fonction une fois au début : 
affichageHeure();


//preloader function 
(function() {
    "use strict";
  
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
     /**
     * Preloader
     */
      let preloader = select('#preloader');
      if (preloader) {
        window.addEventListener('load', () => {
          console.log("hjhkghj")
          preloader.remove()
        });
      }
    
    
  
  })()

