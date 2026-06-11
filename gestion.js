const container1 = document.querySelector("#container1");
const container2 = document.querySelector("#container2");
const container3 = document.querySelector("#container3");


container1.hidden = false; 
container2.hidden = true;  
container3.hidden = true;

const Cdirect = document.querySelector("#Cdirect"); 
const connexion = document.querySelector("#MEconnecter"); 
const SEconnecter = document.querySelector("#SEconnecte"); 


let baseJSON = `[
    {"nom":"Ndeye fatou Ndiour","email":"ndeyefatoundiour530@gmail.com","mdp":"ndiaye"},
    {"nom":"Rougui Sy","email":"rouguisy08@gmail.com","mdp":"sy@8"}
]`;

connexion.addEventListener("click", function() {
    container1.hidden = true;
    container2.hidden = false;
});


Cdirect.addEventListener("click", function() {
    const nom = document.querySelector("#inputNom").value.trim();
    const email = document.querySelector("#inpuEmail1").value.trim();
    const pass = document.querySelector("#inputPass1").value.trim();

    if (nom === "" || email === "" || pass === "") {
        alert("Attention : Tous les champs doivent être remplis !");
        return; 
    }

    let comptesTableau = JSON.parse(baseJSON);

    if (comptesTableau.find(u => u.email === email)) {

        alert("Déjà inscrit !");
        
    } else {
        comptesTableau.push({ nom: nom, email: email, mdp: pass });
        baseJSON = JSON.stringify(comptesTableau);
        alert("Compte enregistré (JSON) !");
        
        container1.hidden = true;
        container3.hidden = false;
    }
});

SEconnecter.addEventListener("click", function() {

    const emailLogin = document.querySelector("#inputMail2").value.trim();
    const passLogin = document.querySelector("#inputMot2").value.trim();

    if (emailLogin === "" || passLogin === "") {
        alert("Veuillez saisir votre email et votre mot de passe.");
        return;
    }

    let comptesTableau = JSON.parse(baseJSON);

    const user = comptesTableau.find(u => u.email === emailLogin && u.mdp === passLogin);

    if (user) {
        alert("Connexion réussie !");
        container2.hidden = true;
        container3.hidden = false;
    } else {
        alert("Email ou mot de passe incorrect");
    }
});
