import "../css/reset.css";
import "../css/style.css";

import { iniciarRouter } from "./modules/router.js";
import { iniciarEventos } from "./modules/events.js";

iniciarEventos();
iniciarRouter();