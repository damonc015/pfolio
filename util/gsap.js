import { gsap } from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(TextPlugin, ScrollToPlugin, ScrollTrigger);

function hoverElement(e) {
  e.play();
}

function leaveElement(e) {
  e.restart(false, true);
  e.pause();
}

export { gsap, hoverElement, leaveElement };
export { TextPlugin, ScrollToPlugin, ScrollTrigger };
