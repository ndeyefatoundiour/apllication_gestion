import { getUsers, addUser } from "../Service.js";

export function Evenement() {
    
    const btnConnecter = document.querySelector("#SEconnecte");

    if (btnConnecter) {
        btnConnecter.addEventListener("click", async function() {
            const inputMail2 = document.querySelector("#inputMail2");
            const inputMot2 = document.querySelector("#inputMot2");

            const emailSaisi = inputMail2.value.trim();
            const passSaisi = inputMot2.value.trim();

            if (emailSaisi === "" || passSaisi === "") {
                alert("Veuillez remplir tous les champs");
                return;
            }

            const utilisateurs = await getUsers();

            const utilisateurTrouve = utilisateurs.find(user => 
                
                user.email === emailSaisi && user.password === passSaisi
            );

            if (utilisateurTrouve) {

                localStorage.setItem("userConnecter", JSON.stringify(utilisateurTrouve));

                location.hash = "#dashboard"; 

            } else {
                alert("Email ou mot de passe incorrect.");
                inputMail2.style.borderColor = "red";
                inputMot2.style.borderColor = "red";
            }
        });
    }


    const btnInscrire = document.querySelector("#Cdirect");
    if (btnInscrire) { 
        btnInscrire.addEventListener("click", async function() {
            const inpuEmail1 = document.querySelector("#inpuEmail1");
            const inputPass1 = document.querySelector("#inputPass1");
            const inputConfirme = document.querySelector("#inputConfirme");
            const inputNom = document.querySelector("#inputNom");
            const inputOrganisation = document.querySelector("#inputOrganisation");
            const inputPoste = document.querySelector("#inputPoste");
            const inputNumero = document.querySelector("#inputNumero");

            const email = inpuEmail1.value.trim();
            const password = inputPass1.value.trim();
            const confirm = inputConfirme.value.trim();
            const nom = inputNom.value.trim();
            const organisateur = inputOrganisation.value.trim();
            const poste = inputPoste.value.trim();
            const numero = inputNumero.value.trim();

            if (email === "" || password === "" || confirm === "" || nom === "" || organisateur === "" || poste === "") {
                alert("Merci de remplir tous les champs");
                return;
            }

            if (password !== confirm) {
                alert("Les mots de passe ne correspondent pas");
                return;
            }

            const utilisateurs = await getUsers();

            const existeDeja = utilisateurs.find(user => user.email === email || user.nom === nom || user.password === password || user.numero === numero);

            if(existeDeja){
                alert("Cet email est déjà inscrit !");
                return;
            }

           
            await addUser({ nom, email, password, organisateur, poste, numero });

            alert("Inscription réussie !");
            
            location.hash = "#connexion"; 
        });
    }

    const btnAllerInscrire = document.querySelector("#allerInscrire");

    if (btnAllerInscrire) {

        btnAllerInscrire.onclick = () => location.hash = "#inscription";
    }

    const btnMeConnecter = document.querySelector("#MEconnecter");

    if (btnMeConnecter) {

        btnMeConnecter.onclick = () => location.hash = "#connexion";
    }


    const btnLogout = document.querySelector("#logout");
    if (btnLogout) {

        btnLogout.onclick = () => {

            localStorage.removeItem("userConnected"); 

            location.hash = "#connexion";
        };
    }

    const btnSeminaire = document.querySelector("#btnseminaire");
    if (btnSeminaire) {

        btnSeminaire.onclick = () => location.hash = "#seminaire";
    }

    const btnParticipant = document.querySelector("#btnparticipant");
    if (btnParticipant) {

        btnParticipant.onclick = () => location.hash = "#participants";
    }

    const btnBudget = document.querySelector("#btnbudget");
    if (btnBudget) {

        btnBudget.onclick = () => location.hash = "#budget";
    }

    const btnPlanning = document.querySelector("#btnplanning");
    if (btnPlanning) {

        btnPlanning.onclick = () => location.hash = "#planning";
    }

    const btnRestau = document.querySelector("#btnrestauration");
    if (btnRestau) {

        btnRestau.onclick = () => location.hash = "#restaurant";
    }

    const btnDocs = document.querySelector("#btndocuments");
    if (btnDocs) {

        btnDocs.onclick = () => location.hash = "#document";
    }

    const btnSettings = document.querySelector("#btnsettings");
    if (btnSettings) {

        btnSettings.onclick = () => location.hash = "#setting";
    }

    const btnSupport = document.querySelector("#btnsupport");
    if (btnSupport) {

        btnSupport.onclick = () => location.hash = "#support";
    }

    const btnDash = document.querySelector("#btndashboard");
    if (btnDash) {
        btnDash.onclick = () => location.hash = "#dashboard";
    }

}
