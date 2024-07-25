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
    backgroundColor: "rgb(22 163 74)",
    ease: "none",
    duration: 5,
  },
  5
).to(
  ".left",
  {
    backgroundColor: "rgb(23 37 84)",
    ease: "none",
    duration: 5,
  },
  15
);

tl.to(
  ".right",
  {
    backgroundColor: "rgb(20 83 45)",
    ease: "none",
    duration: 5,
  },
  5
).to(
  ".right",
  {
    backgroundColor: "rgb(30 58 138)",
    ease: "none",
    duration: 5,
  },
  15
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
)
  .to(
    ".animated-text-2",
    {
      y: -100,
      duration: 5,
    },
    5
  )
  .to(
    ".animated-text-2",
    {
      y: -200,
      duration: 5,
    },
    10
  )
  .to(
    ".animated-text-3",
    {
      y: -200,
      duration: 5,
    },
    15
  );

tl.to(
  ".image-1",
  {
    y: 450,
    duration: 5,
  },
  0
)
  .to(
    ".image-1r",
    {
      y: -410,
      duration: 5,
    },
    0
  )
  .to(
    ".image-2",
    {
      y: -450,
      duration: 5,
    },
    5
  )
  .to(
    ".image-2r",
    {
      y: -410,
      duration: 5,
    },
    5
  )
  .to(
    ".image-2",
    {
      y: 450,
      duration: 5,
    },
    10
  )
  .to(
    ".image-2r",
    {
      y: -820,
      duration: 5,
    },
    10
  )
  .to(
    ".image-3",
    {
      y: -1000,
      duration: 5,
    },
    15
  )
  .to(
    ".image-3r",
    {
      y: -820,
      duration: 5,
    },
    15
  );

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
