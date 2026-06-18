export default function restaurant(){

    const user = JSON.parse(sessionStorage.getItem("userConnecter"));
    
    const nomComplet = user ? user.nom : "Utilisateur";
    const role = user ? user.organisateur : "Organisateur";
    const initiales = nomComplet
        .split(" ")
        .map(n => n[0])
        .join("")
        .toUpperCase()
        .substring(0, 2);

    return`

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
                    <div id = "btnplanning" class="h-12 text-gray-200 flex items-center pl-8 hover:bg-[#294469] cursor-pointer">
                        <i class="fa-regular fa-calendar-plus mr-3"></i>
                        Planning
                    </div>
                    <div id = "btnrestauration"  class="h-12 bg-[#294469] text-white flex items-center pl-8 cursor-pointer">
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

            <!-- CONTENEUR RESTAURATION -->
            <div class="flex flex-col gap-8 mt-6 pb-12 animate-fade-in">

                <!-- 1. HEADER RESTAURATION -->
                <div class="flex justify-between items-end">
                    <div>
                        <p class="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">Séminaires > Stratégie 2024 - Paris</p>
                        <h2 class="text-3xl font-black text-[#012448] tracking-tight italic">Gestion de la Restauration</h2>
                    </div>
                    <button class="bg-[#012448] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-blue-900/20">
                        <i class="fa-solid fa-plus text-xs"></i> Ajouter un repas ou une pause
                    </button>
                </div>
                <!-- 2. ONGLETS (TABS) -->
                <div class="flex gap-10 border-b border-gray-200 px-4">
                    <button class="pb-4 text-sm font-black text-[#012448] border-b-4 border-[#012448] uppercase tracking-widest">Pauses café</button>
                    <button class="pb-4 text-sm font-bold text-gray-400 hover:text-[#012448] uppercase tracking-widest transition-colors">Déjeuners</button>
                    <button class="pb-4 text-sm font-bold text-gray-400 hover:text-[#012448] uppercase tracking-widest transition-colors">Collations</button>
                    <button class="pb-4 text-sm font-bold text-gray-400 hover:text-[#012448] uppercase tracking-widest transition-colors">Dîners</button>
                </div>
                <!-- 3. GRILLE DE CONTENU -->
                <div class="flex gap-8 items-start">
                    <!-- COLONNE GAUCHE : LES PAUSES -->
                    <div class="flex-1 flex flex-col gap-6">
                        <!-- CARTE PAUSE 1 -->
                        <div class="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-2 flex gap-6 overflow-hidden">
                            <div class="w-48 h-48 rounded-[2rem] bg-gray-200 overflow-hidden shrink-0">
                                <img src="https://unsplash.com" class="w-full h-full object-cover" alt="Café">
                            </div>
                            <div class="flex-1 py-4 pr-6 flex flex-col justify-between">
                                <div class="flex justify-between items-start">
                                    <div>
                                        <span class="bg-orange-100 text-orange-700 text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">Matinée</span>
                                        <h3 class="text-xl font-black text-[#012448] mt-2 tracking-tight">Pause Gourmande Matinale</h3>
                                    </div>
                                    <div class="text-right">
                                        <p class="text-2xl font-black text-[#012448]">450,00 </p>
                                        <p class="text-[10px] text-gray-400 font-bold uppercase">50 personnes</p>
                                    </div>
                                </div>
                                <div class="flex gap-6 mt-4">
                                    <div class="flex items-center gap-2 text-[11px] text-gray-500 font-bold italic">
                                        <i class="fa-regular fa-clock text-[#012448]"></i> 10:30 — 11:00 (30 min)
                                    </div>
                                    <div class="flex items-center gap-2 text-[11px] text-gray-500 font-bold italic">
                                        <i class="fa-solid fa-location-dot text-[#012448]"></i> Foyer Amphithéâtre A
                                    </div>
                                </div>
                                <div class="flex gap-2 mt-4">
                                    <span class="bg-blue-50 text-blue-700 text-[9px] font-black px-3 py-1 rounded-lg flex items-center gap-1 uppercase italic">
                                        <i class="fa-solid fa-mug-hot text-[8px]"></i> Café Arabica
                                    </span>
                                    <span class="bg-blue-50 text-blue-700 text-[9px] font-black px-3 py-1 rounded-lg flex items-center gap-1 uppercase italic">
                                        <i class="fa-solid fa-croissant text-[8px]"></i> Viennoiseries
                                    </span>
                                </div>
                            </div>
                        </div>
                        <!-- CARTE PAUSE 2 -->
                        <div class="flex gap-6">
                            <!-- Pause Rafraîchissante -->
                            <div class="flex-1 bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8 flex flex-col justify-between relative overflow-hidden">
                                <div class="flex justify-between items-start">
                                    <div class="w-10 h-10 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center italic font-black">R</div>
                                    <p class="text-xl font-black text-[#012448]">380,00 </p>
                                </div>
                                <div class="mt-4">
                                    <h4 class="font-black text-[#012448] text-lg tracking-tight">Pause Rafraîchissante</h4>
                                    <p class="text-[11px] text-gray-400 font-medium italic">Smoothies, cookies bio et eaux détox.</p>
                                </div>
                                <div class="flex flex-col gap-2 mt-4">
                                    <div class="flex items-center gap-2 text-[10px] text-gray-400 font-bold">
                                        <i class="fa-regular fa-clock"></i> 16:00 — 16:20
                                    </div>
                                    <div class="flex items-center gap-2 text-[10px] text-gray-400 font-bold">
                                        <i class="fa-solid fa-location-dot"></i> Terrasse Sud
                                    </div>
                                </div>
                            </div>
                            <!-- Localisation (Map Placeholder) -->
                            <div class="flex-1 bg-gray-200 rounded-[2.5rem] relative overflow-hidden group">
                                <img src="https://unsplash.com" class="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" alt="Map">
                                <div class="absolute inset-0 flex items-center justify-center p-6 text-center">
                                    <div class="bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl">
                                        <p class="text-[9px] font-black text-gray-400 uppercase tracking-widest">Localisation Restauration</p>
                                        <p class="text-xs font-bold text-[#012448] mt-1 italic">Campus Innova — Paris</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- COLONNE DROITE : RÉSUMÉ & AJOUT -->
                    <div class="w-80 flex flex-col gap-6">
                        <!-- CARTE TOTAL -->
                        <div class="bg-[#012448] rounded-[2.5rem] p-8 text-white flex flex-col gap-8 shadow-2xl shadow-blue-900/40">
                            <h3 class="font-black text-sm uppercase tracking-widest opacity-80">Total Pauses Café</h3>
                            <div class="flex flex-col gap-4">
                                <div class="flex justify-between items-center border-b border-white/10 pb-2">
                                    <span class="text-[10px] font-bold opacity-60">Matin (Jour 1)</span>
                                    <span class="text-xs font-black italic">450,00 </span>
                                </div>
                                <div class="flex justify-between items-center border-b border-white/10 pb-2">
                                    <span class="text-[10px] font-bold opacity-60">Après-midi (Jour 1)</span>
                                    <span class="text-xs font-black italic">380,00 </span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span class="text-[10px] font-bold opacity-60">Matin (Jour 2)</span>
                                    <span class="text-xs font-black italic">450,00 </span>
                                </div>
                            </div>
                            <div class="mt-4 pt-4 border-t border-white/20">
                                <p class="text-[9px] font-black uppercase tracking-[0.3em] opacity-40">Budget Total</p>
                                <p class="text-3xl font-black mt-1 tracking-tighter">300000f</p>
                            </div>
                        </div>
                        <!-- BOUTON PROGRAMMER -->
                        <div class="bg-white rounded-[2.5rem] border-4 border-dashed border-gray-100 p-8 flex flex-col items-center justify-center gap-4 text-center cursor-pointer hover:border-blue-200 hover:bg-blue-50/20 transition-all">
                            <div class="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-300">
                                <i class="fa-solid fa-circle-plus text-2xl"></i>
                            </div>
                            <p class="text-xs font-black text-gray-400 uppercase tracking-tighter leading-tight italic">Programmer une autre pause</p>
                        </div>
                    </div>
                </div>
                <!-- 4. FOOTER STATISTIQUES -->
                <div class="flex justify-between items-center bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 mt-4">
                    <div class="flex gap-12">
                        <div>
                            <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Prestations Restauration</p>
                            <p class="text-2xl font-black text-[#012448]">04 Événements</p>
                        </div>
                        <div>
                            <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Statut Paiement</p>
                            <span class="bg-blue-100 text-[#012448] text-[9px] font-black px-4 py-1 rounded-full uppercase mt-2 inline-block">Acompte versé</span>
                        </div>
                    </div>
                    <div class="text-right">
                        <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Total Restauration H.T.</p>
                        <p class="text-4xl font-black text-[#012448] tracking-tighter">4 850,00 </p>
                    </div>
                </div>
            </div>
        </div>
    `;
}