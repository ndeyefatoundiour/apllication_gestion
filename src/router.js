import { Evenement } from '../src/pages/index.js';

const routes = {
    '/': 'inscription',
    '/connexion': 'connexion',
    '/dashboard': 'dashboard',
    '/seminaire': 'seminaire',
    '/participants': 'participants',
    '/budget': 'budget',
    '/planning': 'planning',
    '/restaurant': 'restaurant',
    '/documents': 'documents', 
    '/setting': 'setting',
    '/support': 'support'
};

const render = async (path) => {

    const app = document.getElementById('app');
    if (!app) return;

    const pageName = routes[path];
    
    let pageModule;

    try {
        if (!pageName) {
            
            pageModule = await import('./pages/inscription/inscription.js');
        } else {
            
            pageModule = await import(`./pages/${pageName}/${pageName}.js`);
        }

        const pageComponent = pageModule.default;

        

        app.innerHTML = pageComponent();

        Evenement();
    }
    catch (error) {
        console.error("ERREUR :", error);
        throw error;
    }
};

const navigate = (path) => {
    window.location.hash = path;
    console.log(hash);
};

const handleHashChange = async () => {
    
    const path = '/' + (window.location.hash.replace('#', '') || '');
    await render(path);
   
};

const initRouter = () => {
    window.addEventListener('hashchange', handleHashChange);
    
    handleHashChange();
};

export { initRouter, navigate };
