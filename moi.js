// const container1 = document.querySelector("#container1")
// container1.hidden = false;

// const container2 = document.querySelector("#container2")
// container2.hidden = true;

// const container3 = document.querySelector("#container3")
// container3.hidden = true;

const connexion = document.querySelector("#MEconnecter")

const SEconnecter = document.querySelector("#SEconnecte")

connexion.addEventListener("click" , function(){
    container1.hidden = true;
    container2.hidden = false

})
SEconnecter.addEventListener("click",function(){
    container2.hidden = true
    container3.hidden = false
})

/// On sélectionne nos 3 containers
// const c1 = document.querySelector("#container1");
// const c2 = document.querySelector("#container2");
// const c3 = document.querySelector("#container3");

// /**
//  * Fonction pour changer d'écran
//  * @param {HTMLElement} ecranCible - Le container à afficher
//  */
// function afficherEcran(ecranCible) {
//     // 1. On cache TOUT en utilisant le style direct (plus fort que Tailwind)
//     [c1, c2, c3].forEach(container => {
//         if (container) {
//             container.style.setProperty('display', 'none', 'important');
//         }
//     });

//     // 2. On affiche l'écran voulu en mode flex
//     if (ecranCible) {
//         ecranCible.style.setProperty('display', 'flex', 'important');
//     }
// }

// // AU DÉMARRAGE : On n'affiche que l'inscription
// afficherEcran(c1);
// const btnMeConnecter = document.querySelector("#MEconnecter");

// btnMeConnecter.addEventListener("click", () => {
//     console.log("Clic détecté ! Passage à la connexion.");
//     afficherEcran(c2);
// });

const c1 = document.querySelector("#container1");
const c2 = document.querySelector("#container2");
const c3 = document.querySelector("#container3");

// Initialisation
c1.hidden = false; // On voit l'inscription
c2.hidden = true;  // On cache le reste
c3.hidden = true;

// // Quand on clique sur "Me connecter"
// document.querySelector("#MEconnecter").onclick = () => {
//     c1.hidden = true;
//     c2.hidden = false;
// };

