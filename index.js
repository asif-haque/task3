const st = {
  trigger: "section",
  start: "top start",
  end: "bottom end",
  scrub: 1,
  // markers: true,
  pin: true,
};
const tl = gsap.timeline({
  scrollTrigger: st,
});

tl.to(
  ".left",
  {
    //   scrollTrigger: st,
    backgroundColor: "rgb(22 163 74)",
    ease: "none",
    duration: 5,
  },
  0
);

tl.to(
  ".right",
  {
    //   scrollTrigger: st,
    backgroundColor: "rgb(20 83 45)",
    ease: "none",
    duration: 5,
  },
  0
);

tl.to(
  ".animated-text",
  {
    y: -100,
    //   textContent: "ABC",
    ease: "none",
    duration: 5,
  },
  0
);
// .to(".animated-text", {
//   y: 0,
//   //   textContent: "ABC",
//   ease: "none",
//   duration: 3,
// });

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

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    // margin: 10,
    // nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
