gsap.to(".animated-text", {
  scrollTrigger: {
    trigger: "section",
    start: "top start",
    end:"bottom center",
    scrub: 1,
    markers: true,
    pin: true,
  },
  y: -100,
  //   textContent: "ABC",
  ease: "none",
  duration: 5,
});

// gsap.to(".left", {
//   scrollTrigger: {
//     trigger: "section",
//     start: "top start",
//     scrub: 1,
//     pin: true,
//   },
//   backgroundColor: "rgb(77, 124, 15)",
//   ease: "none",
//   duration: 5,
// });

// gsap.to(".left", {
//   scrollTrigger: {
//     trigger: "section",
//     start: "top top",
//     end: "bottom top", // Adjust the end position to your liking
//     scrub: 1,
//     markers: true,
//     pin: true,
//   },
//   backgroundColor: "rgb(77, 124, 15)",
//   ease: "none",
//   duration: 5,
// });
