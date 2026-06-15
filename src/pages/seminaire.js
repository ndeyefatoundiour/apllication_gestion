export default function seminaire(){

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
                        <div id="btndashboard"class="h-12 text-gray-200 flex items-center pl-8 hover:bg-[#294469] cursor-pointer">
                            <i class="fa-solid fa-chart-bar mr-3"></i>
                            Dashboard
                        </div>
                        <div id="btnseminaire" class="h-12 bg-[#294469] text-white flex items-center pl-8 cursor-pointer">
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
                        Support
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
            <div class="pb-5"> <hr class="border-t border-gray-300"></div>
            <!-- STEPPER (Barre de progression) -->
            <div class="flex justify-between items-center  max-w-4xl mx-auto w-full relative">
                <div class="absolute top-5 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>
                <div class="flex flex-col items-center gap-2 bg-[#f8f9ff] px-2">
                    <div class="w-10 h-10 rounded-full bg-[#012448] text-white flex items-center justify-center shadow-lg shadow-blue-900/20">
                        <i class="fa-solid fa-info"></i>
                    </div>
                    <span class="text-[10px] font-bold text-[#012448] uppercase">Infos générales</span>
                </div>
                <div class="flex flex-col items-center gap-2 bg-[#f8f9ff] px-2 opacity-40">
                    <div class="w-10 h-10 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center text-gray-400">
                        <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <span class="text-[10px] font-bold text-gray-400 uppercase">Lieu</span>
                </div>
                <div class="flex flex-col items-center gap-2 bg-[#f8f9ff] px-2 opacity-40">
                    <div class="w-10 h-10 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center text-gray-400">
                        <i class="fa-solid fa-users"></i>
                    </div>
                    <span class="text-[10px] font-bold text-gray-400 uppercase">Participants</span>
                </div>
                <div class="flex flex-col items-center gap-2 bg-[#f8f9ff] px-2 opacity-40">
                    <div class="w-10 h-10 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center text-gray-400">
                        <i class="fa-solid fa-check"></i>
                    </div>
                    <span class="text-[10px] font-bold text-gray-400 uppercase">Confirmation</span>
                </div>
            </div>
            <!-- FORMULAIRE (CARTE BLANCHE) -->
            <div class="bg-white rounded-3xl shadow-sm border border-gray-100 p-12 max-w-5xl mx-auto w-full mb-10">
                <h2 class="text-3xl font-black text-[#012448] tracking-tight mb-2">Étape 1 : Informations générales</h2>
                <p class="text-gray-400 mb-10">Définissez les bases logistiques de votre événement professionnel.</p>

                <div class="grid grid-cols-2 gap-8 mb-8">
                    <div class="flex flex-col gap-2">
                        <label class="text-[11px] font-black text-gray-400 uppercase tracking-widest">Intitulé du séminaire</label>
                        <input type="text" class="h-14 border border-gray-200 rounded-xl px-4 outline-none focus:border-[#012448] bg-gray-50/50">
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="text-[11px] font-black text-gray-400 uppercase tracking-widest">Thématique</label>
                        <select class="h-14 border border-gray-200 rounded-xl px-4 outline-none bg-gray-50/50 appearance-none">
                            <option>Sélectionnez une thématique</option>
                        </select>
                    </div>
                </div>

                <div class="bg-blue-50/50 rounded-2xl p-8 flex gap-8 mb-8">
                    <div class="flex-1 flex flex-col gap-2">
                        <label class="text-[11px] font-black text-[#012448] uppercase tracking-widest">Date de début</label>
                        <div class="relative">
                            <input type="date" class="w-full h-14 bg-white border border-blue-100 rounded-xl px-4 outline-none">
                        </div>
                    </div>
                    <div class="flex-1 flex flex-col gap-2">
                        <label class="text-[11px] font-black text-[#012448] uppercase tracking-widest">Date de fin</label>
                        <input type="date" class="w-full h-14 bg-white border border-blue-100 rounded-xl px-4 outline-none">
                    </div>
                    <div class="w-48 flex flex-col gap-2">
                        <label class="text-[11px] font-black text-[#012448] uppercase tracking-widest">Durée (jours)</label>
                        <input type="number" value="0" class="w-full h-14 bg-white border border-blue-100 rounded-xl px-4 outline-none">
                    </div>
                </div>

                <div class="grid grid-cols-3 gap-8 mb-10">
                    <div class="flex flex-col gap-2">
                        <label class="text-[11px] font-black text-gray-400 uppercase tracking-widest">Participants prévus</label>
                        <input type="number" class="h-14 border border-gray-200 rounded-xl px-4 outline-none bg-gray-50/50">
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="text-[11px] font-black text-gray-400 uppercase tracking-widest">Capacité maximale</label>
                        <input type="number" class="h-14 border border-gray-200 rounded-xl px-4 outline-none bg-gray-50/50">
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="text-[11px] font-black text-gray-400 uppercase tracking-widest">Langue principale</label>
                        <select class="h-14 border border-gray-200 rounded-xl px-4 bg-gray-50/50 appearance-none">
                            <option>Français</option>
                        </select>
                    </div>
                </div>

                <div class="mb-10">
                    <label class="text-[11px] font-black text-gray-400 uppercase tracking-widest block mb-4">Type de séminaire</label>
                    <div class="flex gap-8">
                        <label class="flex items-center gap-3 cursor-pointer">
                            <input type="radio" name="type" class="w-5 h-5 accent-[#012448]" checked>
                            <span class="text-sm font-bold text-gray-700">Interne</span>
                        </label>
                        <label class="flex items-center gap-3 cursor-pointer">
                            <input type="radio" name="type" class="w-5 h-5 accent-[#012448]">
                            <span class="text-sm font-bold text-gray-700">Externe</span>
                        </label>
                        <label class="flex items-center gap-3 cursor-pointer">
                            <input type="radio" name="type" class="w-5 h-5 accent-[#012448]">
                            <span class="text-sm font-bold text-gray-700">Mixte</span>
                        </label>
                    </div>
                </div>

                <hr class="border-gray-100 mb-8">

                <div class="flex justify-between">
            </div>
        </div>

    `;
}