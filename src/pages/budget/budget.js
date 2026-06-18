export default function budget(){

   const user = JSON.parse(sessionStorage.getItem("userConnecter"));
    
    const nomComplet = user ? user.nom : "Utilisateur";
    const role = user ? user.organisateur : "Organisateur";
    const initiales = nomComplet
        .split(" ")
        .map(n => n[0])
        .join("")
        .toUpperCase()
        .substring(0, 2); 

    return ` <div id="container3" class="w-full h-screen bg-white flex overflow-hidden">

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

                                                <div id ="btnparticipant" class="h-12 text-gray-200 flex items-center pl-8 hover:bg-[#294469] cursor-pointer">
                                                     <i class="fa-solid fa-users mr-3"></i>
                                                     Participants
                                                </div>
                                                 <div  id = "btnbudget" class="h-12 bg-[#294469] text-white flex items-center pl-8 cursor-pointer">
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
                            <span class="text-[10px] text-gray-400 font-black uppercase tracking-widest mt-1">${role}}</span>
                        </div>

                        <!-- Avatar -->
                        <div class="w-12 h-12 rounded-2xl bg-[#012448] flex items-center justify-center text-white font-bold shadow-lg shadow-blue-900/20 transform hover:rotate-3 transition-transform cursor-pointer">
                            ${initiales}
                        </div>
                    </div>
                </div>
            </div>

            <div class="pb-5"> <hr class="border-t border-gray-300"> </div>


            <!-- CONTENEUR BUDGET -->
<div class="flex flex-col gap-8 mt-8 w-full pb-20">

    <!-- 1. HEADER BUDGET -->
    <div class="flex justify-between items-end">
        <div>
            <h1 class="text-3xl font-black text-[#012448] tracking-tight">Suivi Budgétaire</h1>
            <p class="text-gray-400 text-sm mt-1 font-medium">Séminaire Excellence 2024 • Lyon, France</p>
        </div>
        <button class="bg-[#012448] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-3 shadow-lg shadow-blue-900/20 hover:scale-105 transition-all">
            <i class="fa-solid fa-plus text-xs"></i>
            <span>Ajouter une dépense</span>
        </button>
    </div>

    <!-- 2. CARTES RÉCAPITULATIVES -->
    <div class="flex gap-6">
        <!-- Budget Total -->
        <div class="flex-1 bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col gap-4">
            <div class="flex justify-between items-start">
                <div class="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-[#012448] shadow-inner">
                    <i class="fa-solid fa-wallet"></i>
                </div>
                <span class="text-[10px] font-black text-gray-300 uppercase tracking-widest">Global</span>
            </div>
            <div>
                <p class="text-[11px] font-black text-gray-400 uppercase mb-1">Budget Total</p>
                <p class="text-3xl font-black text-[#012448]">125 000 F</p>
            </div>
            <div class="w-full bg-gray-100 h-2 rounded-full mt-2 overflow-hidden">
                <div class="bg-blue-500 h-full w-[72%]"></div>
            </div>
            <p class="text-right text-[10px] font-bold text-gray-400 uppercase">72% consommé</p>
        </div>

        <!-- Dépenses Engagées -->
        <div class="flex-1 bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col gap-4">
            <div class="flex justify-between items-start">
                <div class="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-blue-600 shadow-inner">
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
                <span class="text-[10px] font-black text-gray-300 uppercase tracking-widest">Réel</span>
            </div>
            <div>
                <p class="text-[11px] font-black text-gray-400 uppercase mb-1">Dépenses engagées</p>
                <p class="text-3xl font-black text-[#012448]">90 450 F</p>
            </div>
            <p class="text-gray-400 text-[11px] flex items-center gap-2 mt-2 font-medium">
                <i class="fa-solid fa-circle-check text-green-500"></i> 12 factures en attente de validation
            </p>
        </div>

        <!-- Solde Restant -->
        <div class="flex-1 bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col gap-4 border-b-4 border-b-green-500">
            <div class="flex justify-between items-start">
                <div class="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-green-600 shadow-inner">
                    <i class="fa-solid fa-bank"></i>
                </div>
                <span class="text-[10px] font-black text-gray-300 uppercase tracking-widest">Disponible</span>
            </div>
            <div>
                <p class="text-[11px] font-black text-gray-400 uppercase mb-1">Solde restant</p>
                <p class="text-3xl font-black text-green-600 tracking-tighter">34 550 F</p>
            </div>
            <div class="flex items-center gap-2 mt-2">
                <span class="bg-green-50 text-green-600 text-[9px] font-black px-2 py-1 rounded-lg">+4.2%</span>
                <span class="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">vs prévisionnel</span>
            </div>
        </div>
    </div>

    <!-- 3. TABLEAU LIGNES BUDGÉTAIRES -->
    <div class="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden flex flex-col">
        <div class="p-8 border-b border-gray-50 flex justify-between items-center bg-white sticky top-0">
            <h3 class="font-black text-[#012448] text-sm uppercase tracking-widest">Lignes budgétaires</h3>
            <div class="flex gap-2 bg-gray-50 p-1.5 rounded-xl border border-gray-100">
                <button class="px-4 py-1.5 bg-white shadow-sm rounded-lg text-[10px] font-black text-[#012448] uppercase tracking-tighter">Tous</button>
                <button class="px-4 py-1.5 text-[10px] font-black text-gray-400 uppercase tracking-tighter hover:text-[#012448]">Logistique</button>
                <button class="px-4 py-1.5 text-[10px] font-black text-gray-400 uppercase tracking-tighter hover:text-[#012448]">Traiteur</button>
            </div>
        </div>

        <div class="flex flex-col">
            <!-- Header Table Flex -->
            <div class="flex px-10 py-5 bg-gray-50/30 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50">
                <div class="flex-1">Catégorie</div>
                <div class="w-32 text-right">Prévu (F)</div>
                <div class="w-32 text-right">Réel (F)</div>
                <div class="w-32 text-right">Différence</div>
                <div class="w-32 text-center">Statut</div>
                <div class="w-20 text-center px-4">Actions</div>
            </div>

            <!-- Liste des lignes (Exemple) -->
            <div class="flex items-center px-10 py-6 border-b border-gray-50 hover:bg-gray-50/50 transition-all cursor-pointer group">
                <div class="flex-1">
                    <p class="text-sm font-black text-[#012448]">Location de la Salle</p>
                </div>
                <div class="w-32 text-right text-sm font-bold text-gray-400">15 000</div>
                <div class="w-32 text-right text-sm font-black text-[#012448]">14 200</div>
                <div class="w-32 text-right text-sm font-black text-green-500">+800,00</div>
                <div class="w-32 flex justify-center">
                    <span class="bg-green-100 text-green-700 text-[9px] font-black px-3 py-1 rounded-full uppercase">Clôturé</span>
                </div>
                <div class="w-20 flex justify-center gap-3 text-gray-300">
                    <i class="fa-solid fa-pen-to-square hover:text-[#012448]"></i>
                    <i class="fa-solid fa-trash-can hover:text-red-500"></i>
                </div>
            </div>
            
            <!-- Ligne 2 : Alerte -->
            <div class="flex items-center px-10 py-6 border-b border-gray-50 hover:bg-gray-50/50 transition-all">
                <div class="flex-1 font-black text-[#012448] text-sm">Hébergement (Hôtel Centre)</div>
                <div class="w-32 text-right text-sm font-bold text-gray-400">45 000</div>
                <div class="w-32 text-right text-sm font-black text-[#012448]">47 500</div>
                <div class="w-32 text-right text-sm font-black text-red-500">-2 500,00</div>
                <div class="w-32 flex justify-center">
                    <span class="bg-red-100 text-red-600 text-[9px] font-black px-3 py-1 rounded-full uppercase">Alerte</span>
                </div>
                <div class="w-20 flex justify-center text-gray-300 gap-3">
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash-can"></i>
                </div>
            </div>
        </div>
    </div>

    <!-- 4. SECTION BAS : ANALYSE + SAISIE -->
    <div class="flex gap-8 items-stretch">
        
        <!-- Analyse par Pôle (Graphique factice) -->
        <div class="flex-1 bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 flex flex-col gap-6">
            <h3 class="font-black text-[#012448] text-sm uppercase tracking-widest">Analyse par Pôle</h3>
            <div class="flex flex-1 items-end justify-between px-4 pb-4 h-64 gap-6">
                <div class="w-full bg-[#012448] rounded-t-xl h-[90%] relative group">
                    <span class="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Logistique</span>
                </div>
                <div class="w-full bg-[#012448] rounded-t-xl h-[60%]"></div>
                <div class="w-full bg-blue-300 rounded-t-xl h-[75%]"></div>
                <div class="w-full bg-gray-200 rounded-t-xl h-[40%]"></div>
            </div>
            <div class="flex justify-between text-[10px] font-black text-gray-400 uppercase px-2">
                <span>Logistique</span>
                <span>Hébergement</span>
                <span>Traiteur</span>
                <span>Audio</span>
            </div>
        </div>

        <!-- Formulaire Saisie Manuelle -->
        <div class="w-[450px] bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 flex flex-col gap-6">
            <h3 class="font-black text-[#012448] text-sm uppercase tracking-widest">Saisie Manuelle</h3>
            <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-1.5">
                    <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Libellé de la dépense</label>
                    <input type="text" placeholder="ex: Location micros HF" class="h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 outline-none focus:border-[#012448]">
                </div>
                <div class="flex gap-4">
                    <div class="flex-1 flex flex-col gap-1.5">
                        <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Montant (F)</label>
                        <input type="number" value="0.00" class="h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 outline-none font-black text-[#012448]">
                    </div>
                    <div class="flex-1 flex flex-col gap-1.5">


                                    </div>



    `;

}