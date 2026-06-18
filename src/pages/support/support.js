export default function support(){

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
                <div id  = "btnsupport" class="h-12 bg-[#294469] text-white flex items-center pl-8 cursor-pointer">
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
                <!-- CONTENEUR PRINCIPAL DOCUMENTS -->
                <div class="flex gap-8 mt-6 pb-12 items-start animate-fade-in">
                    <!-- COLONNE GAUCHE : ÉDITION (Prend 2/3) -->
                    <div class="flex-[2] flex flex-col gap-6">
                        <!-- 1. INFORMATIONS GÉNÉRALES -->
                        <div class="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
                            <h3 class="font-black text-[#012448] text-sm uppercase tracking-widest mb-6">Informations Générales</h3>
                            <div class="flex gap-6">
                                <div class="flex-1 flex flex-col gap-2">
                                    <label class="text-[9px] font-black text-gray-400 uppercase ml-2">Date du compte rendu</label>
                                    <input type="text" value="05/15/2024" class="h-12 bg-gray-50 border border-gray-100 rounded-xl px-4 text-xs font-bold text-gray-600 outline-none focus:border-[#012448]">
                                </div>
                                <div class="flex-1 flex flex-col gap-2">
                                    <label class="text-[9px] font-black text-gray-400 uppercase ml-2">Rédacteur</label>
                                    <input type="text" value="Jean Dupont" class="h-12 bg-gray-50 border border-gray-100 rounded-xl px-4 text-xs font-bold text-gray-600 outline-none focus:border-[#012448]">
                                </div>
                            </div>
                        </div>
                        <!-- 2. SYNTHÈSE EXÉCUTIVE -->
                        <div class="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
                            <div class="flex justify-between items-center mb-6">
                                <h3 class="font-black text-[#012448] text-sm uppercase tracking-widest">Synthèse Exécutive</h3>
                                <i class="fa-solid fa-circle-info text-gray-300"></i>
                            </div>
                            <div class="bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
                                <p class="text-xs leading-relaxed text-gray-500 font-medium italic">
                                    Le séminaire stratégique du troisième trimestre a réuni l'ensemble du comité de direction pour valider les orientations 2025. Les objectifs de croissance ont été revus à la hausse suite aux résultats exceptionnels du premier semestre.
                                </p>
                            </div>
                        </div>
                        <!-- 3. POINTS CLÉS -->
                        <div class="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
                            <div class="flex justify-between items-center mb-6">
                                <h3 class="font-black text-[#012448] text-sm uppercase tracking-widest">Points Clés</h3>
                                <button class="text-[10px] font-black text-blue-600 flex items-center gap-2 hover:underline uppercase">
                                    <i class="fa-solid fa-circle-plus"></i> Ajouter
                                </button>
                            </div>
                            <div class="flex flex-col gap-3">
                                <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 group">
                                    <i class="fa-solid fa-grip-vertical text-gray-300 group-hover:text-gray-400 cursor-move"></i>
                                    <span class="text-xs font-bold text-gray-600">Validation de l'expansion sur le marché APAC</span>
                                </div>
                                <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 group">
                                    <i class="fa-solid fa-grip-vertical text-gray-300 group-hover:text-gray-400 cursor-move"></i>
                                    <span class="text-xs font-bold text-gray-600">Augmentation du budget marketing de 15%</span>
                                </div>
                            </div>
                        </div>
                        <!-- 4. PLAN D'ACTION -->
                        <div class="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 overflow-hidden">
                            <h3 class="font-black text-[#012448] text-sm uppercase tracking-widest mb-6 italic">Plan d'Action</h3>
                            <table class="w-full text-left">
                                <thead class="bg-gray-50/50 text-[9px] font-black text-gray-400 uppercase tracking-widest">
                                    <tr>
                                        <th class="px-6 py-4">Action</th>
                                        <th class="py-4">Responsable</th>
                                        <th class="py-4">Échéance</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-50 text-xs">
                                    <tr>
                                        <td class="px-6 py-5 font-bold text-gray-600">Recrutement équipe Singapour</td>
                                        <td class="py-5"><span class="bg-blue-50 text-[#012448] px-3 py-1 rounded-lg font-black uppercase text-[9px]">Sarah M.</span></td>
                                        <td class="py-5 font-bold text-gray-400">09/01/2024</td>
                                    </tr>
                                    <tr>
                                        <td class="px-6 py-5 font-bold text-gray-600">Finalisation audit IT</td>
                                        <td class="py-5"><span class="bg-blue-50 text-[#012448] px-3 py-1 rounded-lg font-black uppercase text-[9px]">Marc L.</span></td>
                                        <td class="py-5 font-bold text-gray-400">07/15/2024</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- 5. HISTORIQUE DES VERSIONS -->
                        <div class="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
                            <div class="flex items-center gap-3 mb-8">
                                <i class="fa-solid fa-clock-rotate-left text-[#012448]"></i>
                                <h3 class="font-black text-[#012448] text-sm uppercase tracking-widest">Historique des versions</h3>
                            </div>
                            <div class="flex flex-col gap-6 ml-4 border-l-2 border-gray-100 pl-8">
                                <div class="relative">
                                    <div class="absolute -left-[37px] top-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-sm"></div>
                                    <p class="text-[10px] font-black text-[#012448] uppercase mb-1">v2.4.0 <span class="text-gray-300 ml-2">Aujourd'hui, 14:32 • Jean Dupont</span></p>
                                    <p class="text-xs font-bold text-gray-500">Mise à jour finale (Actions corrigées)</p>
                                </div>
                                <div class="relative">
                                    <div class="absolute -left-[37px] top-1 w-3 h-3 bg-gray-200 rounded-full border-2 border-white shadow-sm"></div>
                                    <p class="text-[10px] font-black text-gray-400 uppercase mb-1">v2.3.9 <span class="text-gray-300 ml-2">Hier, 10:15 • Sophie R.</span></p>
                                    <p class="text-xs font-bold text-gray-400">Ajout des points clés de la session 2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- COLONNE DROITE : PREVIEW (Prend 1/3) -->
                    <div class="w-96 flex flex-col gap-6 sticky top-6">
                        <!-- HEADER ACTIONS PREVIEW -->
                        <div class="flex justify-end gap-3">
                            <button class="bg-white border border-gray-100 p-3 rounded-xl shadow-sm text-gray-400 hover:text-[#012448] transition-all"><i class="fa-solid fa-print"></i></button>
                            <button class="bg-[#012448] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-3 shadow-lg shadow-blue-900/20 active:scale-95 transition-all">
                               <i class="fa-solid fa-floppy-disk text-xs"></i>
                               <span class="text-xs uppercase font-black">Enregistrer</span>
                            </button>
                        </div>
                        <!-- DOCUMENT PREVIEW CARD -->
                        <div class="bg-blue-50 rounded-[3rem] p-10 flex flex-col items-center">
                            <div class="bg-white w-full aspect-[1/1.4] rounded-xl shadow-2xl p-10 flex flex-col gap-6 relative overflow-hidden">
                                <!-- Header Doc -->
                                <div class="flex justify-between items-start border-b border-gray-100 pb-6">
                                    <div class="w-10 h-10 bg-[#012448] rounded-lg flex items-center justify-center text-white text-lg"><i class="fa-regular fa-file-lines"></i></div>
                                    <div class="text-right">
                                        <p class="text-[8px] font-black text-[#012448] uppercase tracking-tighter">SÉMINAIRE PRO</p>
                                        <p class="text-[6px] text-gray-300 font-bold uppercase">Compte rendu officiel</p>
                                    </div>
                                </div>
                                <!-- Title Doc -->
                                <div class="mt-4">
                                    <h4 class="text-xl font-black text-[#012448] leading-tight">Séminaire Stratégique<br>Q3</h4>
                                    <p class="text-[8px] text-gray-300 font-bold mt-2">Publié le 15 Mai 2024</p>
                                </div>
                                <!-- Fake Lines -->
                                <div class="flex flex-col gap-2 mt-4">
                                    <div class="w-full h-1 bg-gray-50 rounded-full"></div>
                                    <div class="w-full h-1 bg-gray-50 rounded-full"></div>
                                    <div class="w-2/3 h-1 bg-gray-50 rounded-full"></div>
                                </div>
                            </div>
                            <!-- Floating Preview Buttons -->
                            <div class="flex gap-4 bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-xl -mt-6 relative z-10 border border-white/50">
                                <button class="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-[#012448] transition-colors"><i class="fa-solid fa-magnifying-glass"></i></button>
                                <button class="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-[#012448] transition-colors"><i class="fa-solid fa-print"></i></button>
                                <button class="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-[#012448] transition-colors"><i class="fa-solid fa-share-nodes"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

}