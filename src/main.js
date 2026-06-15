import { router } from "./router.js";

router();

window.addEventListener("hashchange", router);

window.addEventListener("load", router);
