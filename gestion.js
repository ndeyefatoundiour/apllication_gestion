const container1 = document.querySelector("#container1");
const container2 = document.querySelector("#container2");
const container3 = document.querySelector("#container3");

container1.hidden = false; 
container2.hidden = true;  
container3.hidden = true;

const Cdirect = document.querySelector("#Cdirect")

const connexion = document.querySelector("#MEconnecter")

const SEconnecter = document.querySelector("#SEconnecte")

connexion.addEventListener("click" , function(){
    container1.hidden = true;
    container2.hidden = false
})

// Ta "base de données" est une chaîne de caractères au format JSON
let baseJSON = "[]"; 


Cdirect.addEventListener("click", function() {
    const nom = document.querySelector("#inputNom").value;
    const email = document.querySelector("#inpuEmail1").value;
    const pass = document.querySelector("#inputPass1").value;

    // 1. On "parse" (traduit) notre chaîne JSON pour pouvoir travailler avec
    let comptesTableau = JSON.parse(baseJSON);

    // 2. On vérifie si l'email existe
    if (comptesTableau.find(u => u.email === email)) {
        alert("Déjà inscrit !");
    } else {
        // 3. On ajoute le nouvel objet
        comptesTableau.push({ nom: nom, email: email, mdp: pass });

        // 4. On re-transforme le tableau en TEXTE JSON (on écrase l'ancienne baseJSON)
        baseJSON = JSON.stringify(comptesTableau);

        alert("Compte enregistré en format JSON !");
        container1.hidden = true;
        container3.hidden = false;
    }
});


SEconnecter.addEventListener("click", function() {
    const emailLogin = document.querySelector("#inputMail2").value;
    const passLogin = document.querySelector("#inputMot2").value;

    // On traduit la chaîne baseJSON en tableau pour faire la recherche
    let comptesTableau = JSON.parse(baseJSON);

    const user = comptesTableau.find(u => u.email === emailLogin && u.mdp === passLogin);

    if (user) {
        alert("Connexion réussie via JSON !");
        container2.hidden = true;
        container3.hidden = false;
    } else {
        alert("Email ou mot de passe incorrect");
    }
});





















// SEconnecter.addEventListener("click", function() {

//     const emailLogin = document.querySelector("#inputMail2").value.trim();
//     const passLogin = document.querySelector("#inputMot2").value;

//     if (emailLogin === "" || passLogin === "") {
//         alert("Veuillez remplir tous les champs !");
//         return;
//     }

//     const comptes = JSON.parse(localStorage.getItem("utilisateurs")) || [];

//     const utilisateurValide = comptes.find(user => user.email === emailLogin && user.mdp === passLogin);

//     if (utilisateurValide) {

//         alert("Connexion réussie ! Bienvenue " + utilisateurValide.nom);
        
//         container2.hidden = true;
//         container3.hidden = false;
//     } else {

//         alert("Compte inexistant ou mot de passe incorrect. Veuillez vérifier vos informations.");
//     }
// });


// Cdirect.addEventListener("click", function() {

//     const nom = document.querySelector("#inputNom").value.trim();
//     const email = document.querySelector("#inpuEmail1").value.trim();
//     const password = document.querySelector("#inputPass1").value;

//     if (nom === "" || email === "" || password === "") {
//         alert("Veuillez remplir tous les champs !");
//         return;
//     }

//     let comptes = JSON.parse(localStorage.getItem("utilisateurs")) || [];

//     const existeDeja = comptes.find(user => user.email === email);

//     if (existeDeja) {

//         alert("Cet email est déjà inscrit ! Connectez-vous.");

//     } else {

//         const nouvelUtilisateur = {
//             nom: nom,
//             email: email,
//             mdp: password
//         };

//         comptes.push(nouvelUtilisateur);

//         localStorage.setItem("utilisateurs", JSON.stringify(comptes));

//         alert("Inscription réussie !");
        
//         container1.hidden = true;
//         container3.hidden = false;
//     }
// });


