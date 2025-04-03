gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  scrollTrigger: {
    trigger: ".team",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    start: "top 120px",
    end: () => "+=" + document.querySelector(".team").offsetWidth,
  },
});

const timelineHeader = gsap.timeline({
  scrollTrigger: {
    id: "#gallery", // Custom label to the marker
    trigger: "#gallery", // What element triggers the scroll
    scrub: 0.5, // Add a small delay of scrolling and animation. `true` is direct
    start: "top top", // Start at top of Trigger and at the top of the viewport
    end: "bottom bottom", // The element is 500px hight and end 50px from the top of the viewport
    pin: true, // Pin the element true or false
    pinSpacing: false,
  },
});

timelineHeader.to(
  ".gallery__grid",
  {
    scale: 1.2,
  },
  "sameTime"
);
