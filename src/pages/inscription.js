
export default function inscription(){

    document.querySelector("#app").innerHTML = `

<div class="w-full min-h-screen bg-gradient-to-br flex  ">

    <div class="w-[2000px] h-[961px] bg-[url('./image2.png')] bg-cover bg-center  flex overflow-hidden">

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
                <i class="fa-solid fa-users text-white text-8xl opacity-70"></i>
            </div>

        </div>

        <!-- Partie droite -->
        <div class="w-[40%] p-12 bg-white/90 backdrop-blur-md rounded-2xl p-10 m-10">

            <h2 class="text-4xl font-bold text-[#012448] mb-2">
                Créer mon compte
            </h2>

            <p class="text-gray-500 mb-8">
                Remplissez les informations ci-dessous pour commencer.
            </p>

            <div class="space-y-5">

                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">
                        Nom complet
                    </label>

                    <input
                        id="inputNom"
                        type="text"
                        class="w-full h-12 px-4 border border-gray-300 rounded-xl outline-none focus:border-[#012448]"
                    >
                </div>

                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">
                        Email professionnel
                    </label>

                    <input
                        id="inpuEmail1"
                        type="email"
                        class="w-full h-12 px-4 border border-gray-300 rounded-xl outline-none focus:border-[#012448]"
                    >
                </div>

                <div class="grid grid-cols-2 gap-5">

                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-2">
                            Organisation
                        </label>

                        <input
                            id="inputOrganisation"
                            type="text"
                            class="w-full h-12 px-4 border border-gray-300 rounded-xl outline-none focus:border-[#012448]"
                        >
                    </div>

                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-2">
                            Poste
                        </label>

                        <input
                            id="inputPoste"
                            type="text"
                            class="w-full h-12 px-4 border border-gray-300 rounded-xl outline-none focus:border-[#012448]"
                        >
                    </div>

                </div>

                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">
                        Numéro de téléphone
                    </label>

                    <input
                        id="inputNumero"
                        type="number"
                        class="w-full h-12 px-4 border border-gray-300 rounded-xl outline-none focus:border-[#012448]"
                    >
                </div>

                <div class="grid grid-cols-2 gap-5">

                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-2">
                            Mot de passe
                        </label>

                        <input
                            id="inputPass1"
                            type="password"
                            class="w-full h-12 px-4 border border-gray-300 rounded-xl outline-none focus:border-[#012448]"
                        >
                    </div>

                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-2">
                            Confirmer le mot de passe
                        </label>

                        <input
                            id="inputConfirme"
                            type="password"
                            class="w-full h-12 px-4 border border-gray-300 rounded-xl outline-none focus:border-[#012448]"
                        >
                    </div>

                </div>

                <div class="flex items-center gap-2 mt-2">
                    <input type="checkbox">
                    <span class="text-sm text-gray-600">
                        J'accepte les conditions d'utilisation.
                    </span>
                </div>

                <button
                    id="Cdirect"
                    class="w-full h-12 bg-[#012448] text-white font-bold rounded-xl hover:bg-[#0b3d78] transition duration-300">
                    Créer mon compte
                </button>

                <div class="flex items-center gap-4 py-2">
                    <hr class="flex-1">
                    <span class="text-gray-400">OU</span>
                    <hr class="flex-1">
                </div>

                <div class="text-center">

                    <span class="text-gray-600">
                        J'ai déjà un compte ?
                    </span>

                    <span
                        id="MEconnecter"
                        class="text-[#012448] font-bold cursor-pointer ml-2">
                        Me connecter
                    </span>

                </div>

            </div>

        </div>

    </div>

</div>

    `;

}
