
export default function connexion(){

    return `
    
        <div class="w-full min-h-screen flex">
        
            <div class="w-[2000px] h-[961px] bg-[url('./image2.png')] bg-cover bg-center flex overflow-hidden">
        
                <!-- Partie gauche -->
                <div class="w-[60%] flex flex-col justify-center items-center">
        
                    <div class="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6">
                        <i class="fa-regular fa-calendar-days text-5xl text-[#012448]"></i>
                    </div>
        
                    <h1 class="text-4xl font-bold text-white mb-4">
                        SÉMINAIRE PRO
                    </h1>
        
                    <p class="text-center text-blue-100 text-lg leading-relaxed">
                        Organisez, planifiez et gérez tous vos séminaires
                        dans une seule plateforme professionnelle.
                    </p>
        
                    <div class="mt-12">
                        <i class="fa-solid fa-user text-white text-8xl opacity-70"></i>
                    </div>
        
                </div>
                <!-- Partie droite -->
                <div class="flex-1 W-[40%] flex flex-col justify-center p-16 m-10 bg-white/90 rounded-2xl"
        
                    <h2 class="text-4xl font-bold text-[#012448] mb-2">
                        Connexion
                    </h2>
        
                    <p class="text-gray-500 mb-10">
                        Connectez-vous à votre espace de gestion.
                    </p>
        
                    <div class="mb-6">
                        <label class="block text-[#012448] font-semibold mb-2">
                            Adresse Email
                        </label>
        
                        <input
                            id="inputMail2"
                            type="email"
                            placeholder="exemple@gmail.com"
                            class="w-full h-12 border border-gray-300 rounded-xl px-4 outline-none focus:border-[#012448]"
                        >
                    </div>
        
                    <div class="mb-4">
                        <label class="block text-[#012448] font-semibold mb-2">
                            Mot de passe
                        </label>
        
                        <input
                            id="inputMot2"
                            type="password"
                            placeholder="********"
                            class="w-full h-12 border border-gray-300 rounded-xl px-4 outline-none focus:border-[#012448]"
                        >
                    </div>
        
                    <div class="flex justify-end mb-8">
                        <a href="#" class="text-[#012448] text-sm font-semibold">
                            Mot de passe oublié ?
                        </a>
                    </div>
        
                    <button
                        id="SEconnecte"
                        class="w-full h-12 bg-[#012448] text-white rounded-xl font-bold hover:bg-[#0b3d78] transition-all duration-300">
                        Se connecter
                    </button>
        
                    <div class="flex items-center my-8">
                        <hr class="flex-1">
                        <span class="px-4 text-gray-400">OU</span>
                        <hr class="flex-1">
                    </div>
        
                    <div class="text-center">
                        <span class="text-gray-600">
                            Vous n'avez pas de compte ?
                        </span>
        
                        <span
                            id="allerInscrire"
                            class="text-[#012448] font-bold cursor-pointer ml-2">
                            Créer un compte
                        </span>
                    </div>
        
                </div>
        
            </div>
        
        </div>
    `;
        
}
        