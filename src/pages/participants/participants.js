export default function seminaire() {

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
                    <div id="btndashboard"class="h-12 text-gray-200 flex items-center pl-8 hover:bg-[#294469] cursor-pointer">
                        <i class="fa-solid fa-chart-bar mr-3"></i>
                        Dashboard
                    </div>
                    <div id="btnseminaire" class="h-12 text-gray-200 flex items-center pl-8 hover:bg-[#294469] cursor-pointer">
                        <i class="fa-regular fa-calendar-days mr-3"></i>
                        Séminaires
                    </div>
                    <div id = "btnparticipant" class="h-12 bg-[#294469] text-white flex items-center pl-8 cursor-pointer">
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
            <!-- CONTENU PRINCIPAL -->       
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
                                <span class="text-[10px] text-gray-400 font-black uppercase tracking-widest mt-1"> ${role}</span>
                            </div>
                            <!-- Avatar -->
                            <div class="w-12 h-12 rounded-2xl bg-[#012448] flex items-center justify-center text-white font-bold shadow-lg shadow-blue-900/20 transform hover:rotate-3 transition-transform cursor-pointer">
                                ${initiales}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pb-5"> <hr class="border-t border-gray-300"> </div>
                <!-- CONTENEUR PRINCIPAL PARTICIPANTS -->
                <div class="flex flex-col gap-8 mt-6 pb-12 animate-fade-in">
                    <!-- 1. HEADER : TITRE ET BOUTONS ACTIONS -->
                    <div class="flex justify-between py-5 items-start">
                        <div>
                            <p class="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">Séminaires > Séminaire de Direction 2024</p>
                            <h2 class="text-3xl font-black text-[#012448] tracking-tight ">Participants — Séminaire de Direction 2024</h2>
                        </div>
                        <div class="flex gap-4">
                            <button class="bg-white border-2 border-gray-100 text-[#012448] px-6 py-3 rounded-xl font-bold flex items-center gap-3 hover:bg-gray-50 transition-all shadow-sm">
                                <i class="fa-solid fa-file-export text-xs"></i>
                                <span>Export Excel/PDF</span>
                            </button>
                            <button class="bg-[#012448] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-3 hover:scale-105 transition-all shadow-lg shadow-blue-900/20">
                                <i class="fa-solid fa-user-plus text-xs"></i>
                                <span>Ajouter manuellement</span>
                            </button>
                        </div>
                    </div>
                    <!-- 2. CARTES DE STATISTIQUES RAPIDES -->
                    <div class="grid grid-cols-4 gap-6">
                        <div class="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex items-center gap-5">
                            <div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center"><i class="fa-solid fa-users-viewfinder"></i></div>
                            <div>
                                <p class="text-[9px] font-black text-gray-400 uppercase tracking-widest">Total Réservés</p>
                                <p class="text-2xl font-black text-[#012448]">   <span class="text-xs text-gray-300">   </span></p>
                            </div>
                        </div>
                        <div class="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex items-center gap-5">
                            <div class="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center"><i class="fa-solid fa-circle-check"></i></div>
                            <div>
                                <p class="text-[9px] font-black text-gray-400 uppercase tracking-widest">Confirmés</p>
                                <p class="text-2xl font-black text-green-600"></p>
                            </div>
                        </div>
                        <div class="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex items-center gap-5">
                            <div class="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center"><i class="fa-solid fa-clock-rotate-left"></i></div>
                            <div>
                                <p class="text-[9px] font-black text-gray-400 uppercase tracking-widest">En attente</p>
                                <p class="text-2xl font-black text-orange-600">    </p>
                            </div>
                        </div>
                        <div class="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex items-center gap-5">
                            <div class="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center"><i class="fa-solid fa-circle-xmark"></i></div>
                            <div>
                                <p class="text-[9px] font-black text-gray-400 uppercase tracking-widest">Annulés</p>
                                <p class="text-2xl font-black text-red-600">   </p>
                            </div>
                        </div>
                    </div>
                    <!-- 3. TABLEAU DES PARTICIPANTS -->
                    <div class="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col overflow-hidden">
                        <!-- Barre de filtres -->
                        <div class="p-8 border-b border-gray-50 flex justify-between items-center bg-gray-50/30">
                            <div class="flex gap-4">
                                <select class="bg-white border border-gray-200 rounded-xl px-4 py-2 text-xs font-bold text-gray-500 outline-none focus:border-[#012448]">
                                    <option>Tous les statuts</option>
                                </select>
                                <select class="bg-white border border-gray-200 rounded-xl px-4 py-2 text-xs font-bold text-gray-500 outline-none focus:border-[#012448]">
                                    <option>Toutes les organisations</option>
                                </select>
                            </div>
                            <div class="text-xs font-bold text-gray-400">
                                Afficher <span class="text-[#012448] bg-white px-3 py-1 rounded-lg border border-gray-200 mx-1">25</span> résultats
                            </div>
                        </div>
                        <!-- Table -->
                        <table class="w-full text-left">
                            <thead>
                                <tr class="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em] border-b border-gray-50">
                                    <th class="px-10 py-5">Nom & Prénom</th>
                                    <th class="py-5">Organisation</th>
                                    <th class="py-5">Email</th>
                                    <th class="py-5 text-center">Transport</th>
                                    <th class="py-5 text-center">Héberg.</th>
                                    <th class="py-5">Régime</th>
                                    <th class="py-5 text-center">Statut</th>
                                    <th class="py-5 text-center px-10">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-50">
                                <!-- Ligne 1 -->
                                <tr class="hover:bg-gray-50/50 transition-colors group">
                                    <td class="px-10 py-5">
                                        <div class="flex items-center gap-4">
                                            <img " class="w-10 h-10 rounded-full object-cover shadow-sm">
                                            <span class="text-sm font-black text-gray-700 group-hover:text-[#012448]"></span>
                                        </div>
                                    </td>
                                    <td class="text-xs font-bold text-gray-400"></td>
                                    <td class="text-xs font-medium text-gray-500"></td>
                                    <td class="text-center text-gray-400"></td>
                                    <td class="text-center"><span class="text-[10px] font-black text-green-600 uppercase"></span></td>
                                    <td class="text-xs font-bold text-gray-500"></td>
                                    <td class="text-center">
                                        <span class="bg-green-100 text-green-700 text-[9px] font-black px-3 py-1 rounded-full uppercase "></span>
                                    </td>
                                    <td class="text-center px-10 text-gray-300 hover:text-[#012448] cursor-pointer"><i class="fa-solid fa-ellipsis"></i></td>
                                </tr>
                            </tbody>
                        </table>
                        <!-- Pagination -->
                        <div class="p-8 flex justify-between items-center bg-gray-50/20 border-t border-gray-50 text-[11px] font-bold text-gray-400">
                            <div></div>
                            <div class="flex gap-2">
                                <button class="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-100 hover:bg-white"><i class="fa-solid fa-chevron-left"></i></button>
                                <button class="w-8 h-8 flex items-center justify-center rounded-lg bg-[#012448] text-white">1</button>
                                <button class="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-100 hover:bg-white">2</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </dv>
    `
}