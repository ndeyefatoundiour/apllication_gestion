    const URL = "http://localhost:3001/utilisateur"; 

    export async function getUsers(){

        const reponse = await fetch(URL);

        return await reponse.json();
    }

    export async function addUser(utilisateur){

        const reponse = await fetch(URL,{

            method:"POST",

            headers:{

                "Content-Type":"application/json"
            },
            body:JSON.stringify(utilisateur)
        });
        return await reponse.json();
    }


