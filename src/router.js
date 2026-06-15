import inscription from "./pages/inscription.js";
import connexion from "./pages/connexion.js";
import dashboard from "./pages/dashboard.js";
import seminaire from "./pages/seminaire.js";
import participants from "./pages/participants.js";
import budget from "./pages/budget.js";
import planning from "./pages/planning.js";
import documents from "./pages/documents.js";
import restaurant from "./pages/restaurant.js";
import setting from "./pages/setting.js";
import support from "./pages/support.js";

import { Evenement } from "./pages/index.js";


export function router(){

    const route = location.hash;
    
    window.scrollTo(0, 0);

    switch(route){
        case "#connexion":
            connexion();
            break;

        case "#dashboard":
            dashboard();
            break;

        case "#seminaire":
            seminaire();
            break;

        case "#participants":
            participants();
            break;

        case "#budget":
            budget();
            break;
        
        case "#planning":
            planning();
            break;

        case "#restaurant":
            restaurant();
            break;

        case "#document":
            documents();
            break;

        case "#setting":
            setting();
            break;

        case "#support":
            support();
            break;

        default:
            inscription();
    }

    Evenement();
}
