import { gsap } from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(TextPlugin, ScrollToPlugin);

function hoverElement(e) {
  e.play();
}

function leaveElement(e) {
  e.restart(false, true);
  e.pause();
}

export { gsap, hoverElement, leaveElement };
export { TextPlugin, ScrollToPlugin };