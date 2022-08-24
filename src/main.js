import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";

const portfolio = createApp(App);

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import App from "./App.vue";
// import { create } from "core-js/core/object";

/* add icons to the library */
library.add(fas, fab, far);

/* add font awesome icon component */
portfolio.component("font-awesome-icon", FontAwesomeIcon);
portfolio.use(MotionPlugin);
portfolio.mount("#app");
