export default function dashboard() {

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

        <div id="container3" class="w-full min-h-screen bg-white flex">

            <!-- SIDEBAR -->
            <div class="w-72 bg-[#012448] flex flex-col">
                <div class="h-20 flex items-center justify-center text-white font-bold text-xl border-b border-[#294469]">
                    SÉMINAIRE PRO
                </div>
                <div class="text-gray-300 pl-8 py-4">
                    Manager Panel
                </div>
                <div class="flex flex-col gap-1">
                    <div id="btndashboard" class="h-12 bg-[#294469] text-white flex items-center pl-8 cursor-pointer">
                        <i class="fa-solid fa-chart-bar mr-3"></i>
                        Dashboard
                    </div>
                    <div id="btnseminaire" class="h-12 text-gray-200 flex items-center pl-8 hover:bg-[#294469] cursor-pointer">
                        <i class="fa-regular fa-calendar-days mr-3"></i>
                        Séminaires
                    </div>
                    <div id = "btnparticipant" class="h-12 text-gray-200 flex items-center pl-8 hover:bg-[#294469] cursor-pointer">
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
                    <div  id = "btnrestauration" class="h-12 text-gray-200 flex items-center pl-8 hover:bg-[#294469] cursor-pointer">
                        <i class="fa-solid fa-utensils mr-3"></i>
                        Restauration
                    </div>
                    <div id = "btndocuments" class="h-12 text-gray-200 flex items-center pl-8 hover:bg-[#294469] cursor-pointer">
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

            <!-- CONTENU DASHBOARD -->
            <div class="flex-1 bg-[#f8f9ff] px-5 overflow-auto flex flex-col ">

                <!-- HEADER : Barre de recherche + Profil -->
                <div class="flex justify-between items-center  h-20">

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


            <!-- TITRE ET BOUTON EXPORTER -->
            <div class="flex justify-between items-end mb-8">
                <!-- Partie Gauche : Titre -->
                <div>
                    <h2 class="text-3xl font-black text-[#012448] tracking-tight">Tableau de Bord Principal</h2>
                    <p class="text-gray-400 text-sm mt-1">Bienvenue, voici l'état actuel de vos événements corporatifs.</p>
                </div>

                <!-- Partie Droite : Bouton -->
                <button class="bg-[#012448] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-3 hover:bg-[#0a3661] transition-all shadow-lg shadow-blue-900/20 active:scale-95">
                    <i class="fa-solid fa-plus text-xs"></i>
                    <span>Exporter le rapport</span>
                </button>
            </div>

            <!-- LIGNE DE SÉPARATION (Optionnelle pour le style) -->
            <hr class="border-t border-gray-100 mb-8">

            <!-- SECTION STATISTIQUES (3 CARTES) -->
            <div class="flex gap-6 mb-10">

                <!-- Carte 1 : Séminaires Actifs -->
                <div class="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6">
                    <div class="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-[#012448]">
                        <i class="fa-regular fa-calendar-check text-2xl"></i>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Séminaires actifs</span>
                        <span class="text-3xl font-black text-[#012448]"></span>
                    </div>
                </div>

                <!-- Carte 2 : Total Participants -->
                <div class="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6">
                    <div class="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-[#012448]">
                        <i class="fa-solid fa-users text-2xl"></i>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Total Participants</span>
                        <span class="text-3xl font-black text-[#012448]"></span>
                    </div>
                </div>

                <!-- Carte 3 : Budget Restant -->
                <div class="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6">
                    <div class="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-[#012448]">
                        <i class="fa-solid fa-wallet text-2xl"></i>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Budget Restant</span>
                        <span class="text-3xl font-black text-[#012448]"></span>
                    </div>
                </div>
            </div>

                <!-- SECTION BAS : TABLEAU ET ALERTES CÔTE À CÔTE -->
            <div class="flex flex-row gap-6 items-start w-full">

                <!-- 1. BLOC TABLEAU (Prend les 2/3 de la place) -->
                <div class="flex-[2] bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                    <div class="p-6 border-b border-gray-50 flex justify-between items-center">
                        <h3 class="font-black text-[#012448] text-xs uppercase tracking-widest">Mes Séminaires</h3>
                        <span class="text-blue-600 text-xs font-bold cursor-pointer">Voir tout</span>
                    </div>

                    <!-- Liste flex pour le tableau -->
                    <div class="flex flex-col">
                         <div class="flex px-8 py-4 bg-gray-50/50 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                            <div class="flex-1">NOM</div>
                            <div class="w-32">DATES</div>
                            <div class="w-32">LIEU</div>
                            <div class="w-32">PARTICUPANTS</div>
                            <div class="w-24 text-center">Statut</div>
                        </div>
                        <!-- Ligne exemple -->
                        <div class="flex items-center px-8 py-5 border-b border-gray-50">
                            <div class="flex-1 font-bold text-sm text-gray-700"></div>
                            <div class="w-32 text-xs text-gray-500"></div>
                            <div class="w-32 text-xs text-gray-500"></div>
                            <div class="w-32 text-xs text-gray-500 pl-8"></div>
                            <div class="w-24 flex justify-center">
                                <span class="bg-green-100 text-green-700 text-[9px] font-black px-2 py-1 rounded-full uppercase"></span>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- 2. BLOC ALERTES (Prend 1/3 de la place) -->
                <div class="flex-1 bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col overflow-hidden">
                    <div class="p-6 border-b border-gray-50 flex items-center gap-2">
                        <i class="fa-solid fa-triangle-exclamation text-red-500 text-sm"></i>
                        <h3 class="font-black text-[#012448] text-xs uppercase tracking-widest">Alertes</h3>
                    </div>
                    <div class="p-4 flex flex-col gap-3">
                        <!-- Carte Alerte Rouge -->
                        <div class="bg-red-50 border-l-4 border-red-500 p-3 rounded-r-xl">
                            <p class="text-[11px] font-black text-red-900 uppercase">Budget dépassé</p>
                            <p class="text-[10px] text-red-700"></p>
                        </div>
                        <!-- Carte Alerte Bleue -->
                        <div class="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r-xl">
                            <p class="text-[11px] font-black text-blue-900 uppercase"></p>
                            <p class="text-[10px] text-blue-700">.</p>
                        </div>
                    </div>
                    <button class="w-full py-4 bg-gray-50 text-[10px] font-black text-gray-400 uppercase border-t border-gray-100">
                        Marquer comme lu
                    </button>
                </div>
            </div>
        </div>
        
        </div> 
        
    </div> 

    `;


}