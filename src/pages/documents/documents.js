export default function documents(){

    const user = JSON.parse(sessionStorage.getItem("userConnecter"));
    
    const nomComplet = user ? user.nom : "Utilisateur";
    const role = user ? user.organisateur : "Organisateur";
    const initiales = nomComplet
        .split(" ")
        .map(n => n[0])
        .join("")
        .toUpperCase()
        .substring(0, 2);

    return `

<div id="container3" class="w-full h-screen bg-white flex overflow-hidden">

                                        <!-- SIDEBAR -->
                                        <div class="w-72 bg-[#012448] flex flex-col">

                                            <div class="h-20 flex items-center justify-center text-white font-bold text-xl border-b border-[#294469]">
                                                SÉMINAIRE PRO
                                            </div>

                                            <div class="text-gray-300 pl-8 py-4">
                                                Manager Panel
                                            </div>

                                            <div class="flex flex-col gap-1">

                                                <div id="btndashboard" class="h-12 text-gray-200 flex items-center pl-8 hover:bg-[#294469] cursor-pointer">
                                                    <i class="fa-solid fa-chart-bar mr-3"></i>
                                                    Dashboard
                                                </div>

                                                <div  id="btnseminaire" class="h-12 text-gray-200 flex items-center pl-8 hover:bg-[#294469] cursor-pointer">
                                                   <i class="fa-regular fa-calendar-days mr-3"></i>
                                                   Séminaires
                                                </div>

                                                 <div  id="btnparticipant" class="h-12 text-gray-200 flex items-center pl-8 hover:bg-[#294469] cursor-pointer">   
                                                     <i class="fa-solid fa-users mr-3"></i>
                                                     Participants
                                                </div>

                                                <div id = "btnbudget" class="h-12 text-gray-200 flex items-center pl-8 hover:bg-[#294469] cursor-pointer">
                                                    <i class="fa-solid fa-coins mr-3"></i>
                                                    Budget
                                                </div>

                                                <div id = "btnplanning" class="h-12 text-gray-200 flex items-center pl-8 hover:bg-[#294469] cursor-pointer">
                                                    <i class="fa-regular fa-calendar-plus mr-3"></i>
                                                    Planning
                                                </div>

                                                <div id = "btnrestauration" class="h-12 text-gray-200 flex items-center pl-8 hover:bg-[#294469] cursor-pointer">
                                                    <i class="fa-solid fa-utensils mr-3"></i>
                                                    Restauration
                                                </div>

                                                <div id = "btndocuments" class="h-12 bg-[#294469] text-white flex items-center pl-8 cursor-pointer">
                                                    <i class="fa-regular fa-file mr-3"></i>
                                                    Documents
                                                </div>

                                            </div>

                                            <div class="flex-1"></div>

                                            <div class="border-t border-[#294469]"></div>

                                            <div id = "btnsettings" class="h-12 text-gray-200 flex items-center pl-8 hover:bg-[#294469] cursor-pointer">
                                                <i class="fa-solid fa-gear mr-3"></i>
                                                Settings
                                            </div>

                                            <div id  = "btnsupport" class="h-12 text-gray-200 flex items-center pl-8 hover:bg-[#294469] cursor-pointer">
                                                <i class="fa-regular fa-circle-question mr-3"></i>
                                                Rapport
                                            </div>

                                            <div id="logout"
                                            class="h-12 text-red-300 flex items-center pl-8 hover:bg-red-500 hover:text-white cursor-pointer">
                                                <i class="fa-solid fa-right-from-bracket mr-3"></i>
                                                Déconnexion
                                            </div>

                                        </div>

                                        <div class="flex-1 bg-[#f8f9ff] px-5 overflow-auto flex flex-col ">

                <!-- HEADER : Barre de recherche + Profil -->
                <div class="flex justify-between items-center py-5 h-20">

                <!-- BARRE DE RECHERCHE -->
                <div class="flex items-center bg-white border border-gray-500 px-5 py-3 rounded-2xl w-96 shadow-sm group focus-within:ring-2 focus-within:ring-[#012448]/10 transition-all">
                    <i class="fa-solid fa-magnifying-glass text-gray-300 mr-3 group-focus-within:text-[#012448]"></i>
                    <input 
                        type="text" 
                        placeholder="Rechercher un séminaire..." 
                        class="bg-transparent outline-none text-sm w-full text-gray-600 placeholder:text-gray-300"
                    >
                </div>

                <!-- PROFIL ET NOTIFICATIONS -->
                <div class="flex items-center gap-8">

                    <!-- Cloche de notification -->
                    <div class="relative cursor-pointer group">
                        <i class="fa-regular fa-bell text-2xl text-gray-400 group-hover:text-[#012448] transition-colors"></i>
                        <span class="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#f8f9ff]"></span>
                    </div>

                    <!-- Infos Utilisateur -->
                    <div class="flex items-center gap-4 border-l pl-8 border-gray-200">
                        <div class="flex flex-col text-right">
                            <span class="font-bold text-[#012448] text-sm leading-none">${nomComplet}</span>
                            <span class="text-[10px] text-gray-400 font-black uppercase tracking-widest mt-1">${role}</span>
                        </div>

                        <!-- Avatar -->
                        <div class="w-12 h-12 rounded-2xl bg-[#012448] flex items-center justify-center text-white font-bold shadow-lg shadow-blue-900/20 transform hover:rotate-3 transition-transform cursor-pointer">
                            ${initiales}
                        </div>
                    </div>
                </div>
            </div>

            <div class="pb-5"> <hr class="border-t border-gray-300"> </div>


            
            <!-- CONTENEUR DU FORMULAIRE D'INSCRIPTION -->
<div class="flex flex-col gap-6 mt-8 max-w-4xl mx-auto w-full pb-20">

    <!-- 1. BANNIÈRE TITRE -->
    <div class="bg-[#012448] rounded-3xl p-10 text-white relative overflow-hidden shadow-xl">
        <div class="relative z-10">
            <span class="bg-white/20 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-white/30">
                Inscription ouverte
            </span>
            <h1 class="text-4xl font-black mt-4 tracking-tight">Innovation Digitale 2024</h1>
            <p class="text-blue-100/70 mt-2 font-medium flex items-center gap-2">
                <i class="fa-regular fa-calendar"></i> 15 - 17 Juillet 2024
            </p>
        </div>
        <!-- Icône de fond décorative -->
        <i class="fa-regular fa-calendar-days absolute right-10 top-1/2 -translate-y-1/2 text-8xl text-white/5"></i>
    </div>

    <!-- 2. SECTION 1 : VOS INFORMATIONS -->
    <div class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
        <div class="flex items-center gap-4 mb-8">
            <span class="w-8 h-8 bg-[#012448] text-white rounded-full flex items-center justify-center text-xs font-black">1</span>
            <h3 class="font-black text-[#012448] uppercase text-sm tracking-widest">Vos informations</h3>
        </div>
        <div class="grid grid-cols-2 gap-6 mb-6">
            <div class="flex flex-col gap-2">
                <label class="text-[10px] font-black text-gray-400 uppercase">Nom</label>
                <input type="text" placeholder="Ex: MARTIN" class="h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 outline-none focus:border-[#012448]">
            </div>
            <div class="flex flex-col gap-2">
                <label class="text-[10px] font-black text-gray-400 uppercase">Prénom</label>
                <input type="text" placeholder="Ex: Thomas" class="h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 outline-none focus:border-[#012448]">
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <label class="text-[10px] font-black text-gray-400 uppercase">Email professionnel</label>
            <input type="email" placeholder="t.martin@entreprise.com" class="h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 outline-none focus:border-[#012448]">
        </div>
    </div>

    <!-- 3. SECTION 2 : VOTRE DÉPLACEMENT -->
    <div class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
        <div class="flex items-center gap-4 mb-4">
            <span class="w-8 h-8 bg-[#012448] text-white rounded-full flex items-center justify-center text-xs font-black">2</span>
            <h3 class="font-black text-[#012448] uppercase text-sm tracking-widest">Votre déplacement</h3>
        </div>
        <p class="text-xs text-gray-400 mb-6 italic">Quel moyen de transport utiliserez-vous pour rejoindre le séminaire ?</p>
        <div class="flex gap-4">
            <!-- Bouton Transport (Répétable) -->
            <div class="flex-1 border-2 border-gray-100 rounded-2xl p-4 flex flex-col items-center gap-2 hover:border-[#012448] hover:bg-blue-50/50 cursor-pointer transition-all group">
                <i class="fa-solid fa-train text-gray-400 group-hover:text-[#012448]"></i>
                <span class="text-[10px] font-black uppercase text-gray-400 group-hover:text-[#012448]">Train</span>
            </div>
            <div class="flex-1 border-2 border-gray-100 rounded-2xl p-4 flex flex-col items-center gap-2 hover:border-[#012448] hover:bg-blue-50/50 cursor-pointer transition-all group">
                <i class="fa-solid fa-plane text-gray-400 group-hover:text-[#012448]"></i>
                <span class="text-[10px] font-black uppercase text-gray-400 group-hover:text-[#012448]">Avion</span>
            </div>
            <div class="flex-1 border-2 border-[#012448] bg-blue-50/50 rounded-2xl p-4 flex flex-col items-center gap-2 cursor-pointer transition-all">
                <i class="fa-solid fa-car text-[#012448]"></i>
                <span class="text-[10px] font-black uppercase text-[#012448]">Voiture</span>
            </div>
            <div class="flex-1 border-2 border-gray-100 rounded-2xl p-4 flex flex-col items-center gap-2 hover:border-[#012448] hover:bg-blue-50/50 cursor-pointer transition-all group">
                <i class="fa-solid fa-ellipsis text-gray-400 group-hover:text-[#012448]"></i>
                <span class="text-[10px] font-black uppercase text-gray-400 group-hover:text-[#012448]">Autre</span>
            </div>
        </div>
    </div>

    <!-- 4. SECTION 3 : HÉBERGEMENT (Radio design) -->
    <div class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
        <div class="flex justify-between items-center">
            <div class="flex items-center gap-4">
                <span class="w-8 h-8 bg-[#012448] text-white rounded-full flex items-center justify-center text-xs font-black">3</span>
                <h3 class="font-black text-[#012448] uppercase text-sm tracking-widest">Hébergement</h3>
            </div>
            <div class="flex bg-gray-100 rounded-xl p-1 gap-1">
                <button class="px-6 py-2 rounded-lg text-[10px] font-black uppercase transition-all bg-white shadow-sm text-[#012448]">Oui</button>
                <button class="px-6 py-2 rounded-lg text-[10px] font-black uppercase transition-all text-gray-400 hover:bg-white/50">Non</button>
            </div>
        </div>
    </div>

    <!-- 5. SECTION 4 : RESTAURATION -->
    <div class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
        <div class="flex items-center gap-4 mb-6">
            <span class="w-8 h-8 bg-[#012448] text-white rounded-full flex items-center justify-center text-xs font-black">4</span>
            <h3 class="font-black text-[#012448] uppercase text-sm tracking-widest">Restauration</h3>
        </div>
        <div class="grid grid-cols-2 gap-4">
            <label class="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-transparent hover:border-gray-200 cursor-pointer transition-all">
                <input type="checkbox" class="w-4 h-4 accent-[#012448]">
                <span class="text-xs font-bold text-gray-600">Végétarien</span>
            </label>
            <label class="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-transparent hover:border-gray-200 cursor-pointer transition-all">
                <input type="checkbox" class="w-4 h-4 accent-[#012448]">
                <span class="text-xs font-bold text-gray-600">Sans Gluten</span>
            </label>
            <label class="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-transparent hover:border-gray-200 cursor-pointer transition-all">
                <input type="checkbox" class="w-4 h-4 accent-[#012448]">
                <span class="text-xs font-bold text-gray-600">Sans Lactose</span>
            </label>
            <label class="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-transparent hover:border-gray-200 cursor-pointer transition-all">
                <input type="checkbox" class="w-4 h-4 accent-[#012448]">
                <span class="text-xs font-bold text-gray-600">Halal / Casher</span>
            </label>
        </div>
    </div>

    <!-- 6. SECTION 5 : REMARQUES -->
    <div class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
        <div class="flex items-center gap-4 mb-6">
            <span class="w-8 h-8 bg-[#012448] text-white rounded-full flex items-center justify-center text-xs font-black">5</span>
            <h3 class="font-black text-[#012448] uppercase text-sm tracking-widest">Remarques</h3>
        </div>
        <textarea placeholder="Indiquez ici toute information complémentaire utile à l'organisation..." class="w-full h-32 bg-gray-50 border border-gray-200 rounded-2xl p-4 outline-none focus:border-[#012448] resize-none text-sm"></textarea>
    </div>

    <!-- BOUTON VALIDER -->
    <button class="bg-green-600 text-white w-full py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-green-900/20 hover:bg-green-700 hover:scale-[1.01] active:scale-[0.99] transition-all">
        <i class="fa-solid fa-check-circle mr-2"></i> Valider mon inscription
    </button>
</div>



                                    </div>

    `;

}