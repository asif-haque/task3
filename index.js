gsap.to(".animated-text", {
  scrollTrigger: {
    trigger: "section",
    start: "top start",
    scrub: 1,
    markers: true,
    pin: true,
  },
  y: -1000,
  ease: "none",
  duration: 5,
});
