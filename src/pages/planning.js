export default function budget(){

    document.querySelector("#app").innerHTML = `

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
                    <div id ="btnparticipant" class="h-12 text-gray-200 flex items-center pl-8 hover:bg-[#294469] cursor-pointer">
                         <i class="fa-solid fa-users mr-3"></i>
                         Participants
                    </div>
                     <div  id = "btnbudget" class="h-12 text-gray-200 flex items-center pl-8 hover:bg-[#294469] cursor-pointer">
                        <i class="fa-solid fa-coins mr-3"></i>
                        Budget
                    </div>
                    <div id = "btnplanning" class="h-12 bg-[#294469] text-white flex items-center pl-8 cursor-pointer">
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
                    Support
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
                            <span class="font-bold text-[#012448] text-sm leading-none">Ndeye Fatou Ndiour</span>
                            <span class="text-[10px] text-gray-400 font-black uppercase tracking-widest mt-1">Organisateur</span>
                        </div>

                        <!-- Avatar -->
                        <div class="w-12 h-12 rounded-2xl bg-[#012448] flex items-center justify-center text-white font-bold shadow-lg shadow-blue-900/20 transform hover:rotate-3 transition-transform cursor-pointer">
                            NF
                        </div>
                    </div>
                </div>
            </div>
            <div class="pb-5"> <hr class="border-t border-gray-300"> </div>
            <!-- CONTENEUR PRINCIPAL DE LA CÉRÉMONIE -->
            <div class="flex flex-col gap-8 mt-6 pb-12 animate-fade-in">
                <!-- 1. BARRE DE TITRE & ACTIONS -->
                <div class="flex justify-between items-center">
                    <div class="flex flex-col gap-1">
                        <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Séminaires / Cérémonie de Clôture</span>
                        <h1 class="text-3xl font-black text-[#012448] tracking-tight">Gestion de la Cérémonie Officielle</h1>
                    </div>
                    <div class="flex gap-4">
                        <button class="flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 rounded-xl font-bold text-[#012448] shadow-sm hover:bg-gray-50 transition-all">
                            <i class="fa-solid fa-print text-sm"></i>
                            <span class="text-xs uppercase">Preview print</span>
                        </button>
                        <button class="flex items-center gap-3 px-6 py-3 bg-[#012448] border border-[#012448] rounded-xl font-bold text-white shadow-lg shadow-blue-900/20 hover:scale-105 transition-all">
                            <i class="fa-solid fa-floppy-disk text-sm"></i>
                            <span class="text-xs uppercase">Enregistrer la cérémonie</span>
                        </button>
                    </div>
                </div>
                <!-- 2. SECTION CENTRALE (INFOS + AGENDA) -->
                <div class="flex gap-8 items-start">
                    <!-- COLONNE GAUCHE (Informations Clés) -->
                    <div class="w-80 flex flex-col gap-6">
                        <!-- Carte Infos -->
                        <div class="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col gap-6">
                            <div class="flex items-center gap-3 border-b border-gray-50 pb-4">
                                <i class="fa-solid fa-info-circle text-[#012448]"></i>
                                <h3 class="font-black text-[#012448] text-xs uppercase tracking-widest">Informations Clés</h3>
                            </div>
                            <div class="flex flex-col gap-4">
                                <div class="flex flex-col gap-1.5">
                                    <label class="text-[9px] font-black text-gray-400 uppercase">Date de l'événement</label>
                                    <div class="h-12 bg-gray-50 border border-gray-100 rounded-xl flex items-center px-4 gap-3 text-xs font-bold text-gray-700">
                                        <i class="fa-regular fa-calendar text-[#012448]"></i> 24 Octobre 2024
                                    </div>
                                </div>
                                <div class="flex flex-col gap-1.5">
                                    <label class="text-[9px] font-black text-gray-400 uppercase">Heure de début</label>
                                    <div class="h-12 bg-gray-50 border border-gray-100 rounded-xl flex items-center px-4 gap-3 text-xs font-bold text-gray-700">
                                        <i class="fa-regular fa-clock text-[#012448]"></i> 17:30
                                    </div>
                                </div>
                                <div class="flex flex-col gap-1.5">
                                    <label class="text-[9px] font-black text-gray-400 uppercase">Salle de réception</label>
                                    <div class="h-12 bg-gray-50 border border-gray-100 rounded-xl flex items-center px-4 gap-3 text-xs font-bold text-gray-700">
                                        <i class="fa-solid fa-door-open text-[#012448]"></i> Auditorium Grand Large
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Carte Cocktail (Bleu Foncé) -->
                        <div class="bg-[#012448] p-8 rounded-[2.5rem] shadow-xl text-white flex flex-col gap-6 relative overflow-hidden">
                            <div class="flex justify-between items-start relative z-10">
                                <div class="flex flex-col gap-1">
                                    <i class="fa-solid fa-martini-glass-citrus text-xl text-blue-300"></i>
                                    <h3 class="font-black text-sm uppercase tracking-widest mt-2">Cocktail Dinatoire</h3>
                                </div>
                                <!-- Toggle Switch -->
                                <div class="w-10 h-6 bg-blue-400/30 rounded-full relative p-1 cursor-pointer">
                                    <div class="w-4 h-4 bg-white rounded-full shadow-md ml-auto"></div>
                                </div>
                            </div>
                            <p class="text-[10px] text-blue-100/60 leading-relaxed relative z-10">Services traiteur et boissons confirmés pour la fin de séance.</p>
                            <div class="flex gap-4 relative z-10">
                                <div class="flex-1 bg-white/5 rounded-2xl p-3 border border-white/10 text-center">
                                    <span class="block text-[8px] font-black uppercase text-blue-300/50">Convives</span>
                                    <span class="text-sm font-black">150</span>
                                </div>
                                <div class="flex-1 bg-white/5 rounded-2xl p-3 border border-white/10 text-center">
                                    <span class="block text-[8px] font-black uppercase text-blue-300/50">Heure</span>
                                    <span class="text-sm font-black">19:00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- COLONNE DROITE (Agenda de la Cérémonie) -->
                    <div class="flex-1 bg-white rounded-[3rem] shadow-sm border border-gray-100 flex flex-col overflow-hidden self-stretch">
                        <div class="p-8 border-b border-gray-50 flex justify-between items-center">
                            <div class="flex items-center gap-3">
                                <i class="fa-solid fa-list-ul text-[#012448]"></i>
                                <h3 class="font-black text-[#012448] text-xs uppercase tracking-widest">Agenda de la Cérémonie</h3>
                            </div>
                            <button class="text-[10px] font-black text-blue-600 hover:underline uppercase">+ Ajouter une étape</button>
                        </div>
                        <div class="flex flex-col">
                            <!-- En-tête Tableau -->
                            <div class="flex px-10 py-4 bg-gray-50/50 text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] border-b border-gray-100">
                                <div class="w-24">Horaire</div>
                                <div class="flex-1">Activité</div>
                                <div class="w-48">Intervenant</div>
                            </div>
                            <!-- Lignes de l'agenda -->
                            <div class="flex items-center px-10 py-6 border-b border-gray-50 group hover:bg-gray-50/50 transition-all cursor-move">
                                <div class="w-24 flex items-center gap-3">
                                    <i class="fa-solid fa-grip-vertical text-gray-200 text-xs"></i>
                                    <span class="text-xs font-black text-gray-800 tracking-tighter">17:30 - 17:45</span>
                                </div>
                                <div class="flex-1 flex items-center gap-4">
                                    <div class="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-[#012448]"><i class="fa-solid fa-microphone-lines"></i></div>
                                    <div>
                                        <p class="text-sm font-black text-gray-700">Introduction & Discours</p>
                                        <p class="text-[10px] text-gray-400 font-bold uppercase">Ouverture officielle</p>
                                    </div>
                                </div>
                                <div class="w-48 text-xs font-bold text-gray-500 italic">M. le Directeur Général</div>
                            </div>
                            <div class="flex items-center px-10 py-6 border-b border-gray-50 group hover:bg-gray-50/50 transition-all cursor-move">
                                <div class="w-24 flex items-center gap-3">
                                    <i class="fa-solid fa-grip-vertical text-gray-200 text-xs"></i>
                                    <span class="text-xs font-black text-gray-800 tracking-tighter">17:45 - 18:15</span>
                                </div>
                                <div class="flex-1 flex items-center gap-4">
                                    <div class="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600"><i class="fa-solid fa-chart-line"></i></div>
                                    <div>
                                        <p class="text-sm font-black text-gray-700">Synthèse des Ateliers</p>
                                        <p class="text-[10px] text-gray-400 font-bold uppercase">Résultats Q3</p>
                                    </div>
                                </div>
                                <div class="w-48 text-xs font-bold text-gray-500 italic">Directrice RH</div>
                            </div>
                            <!-- Ligne de clôture (Grise) -->
                            <div class="flex items-center px-10 py-8 bg-gray-50/30">
                                <div class="w-24 flex items-center gap-3">
                                    <i class="fa-solid fa-grip-vertical text-gray-200 text-xs"></i>
                                    <span class="text-xs font-black text-gray-400 tracking-tighter">18:45 - 19:00</span>
                                </div>
                                <div class="flex-1 flex items-center gap-4 opacity-50">
                                    <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-400"><i class="fa-solid fa-flag-checkered"></i></div>
                                    <p class="text-sm font-black text-gray-400">Clôture & Remerciements</p>
                                </div>
                                <div class="w-48 text-[10px] font-black text-gray-300 uppercase tracking-widest">Comité d'Organisation</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 3. SECTION BAS (INTERVENANTS + RÉCOMPENSES) -->
                <div class="flex gap-8">
                    <!-- INTERVENANTS À L'HONNEUR -->
                    <div class="flex-1 flex flex-col gap-6">
                        <div class="flex items-center gap-3 px-4">
                            <i class="fa-solid fa-users-viewfinder text-[#012448]"></i>
                            <h3 class="font-black text-[#012448] text-xs uppercase tracking-widest">Intervenants à l'honneur</h3>
                        </div>
                        <div class="grid grid-cols-2 gap-4"></div>
                    </div>
                </div> 
            </div> 
        </div> 
    `;

}