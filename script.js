// console.log("working boy");

const stickyEl = document.querySelector(".intersector");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.querySelector(".sticky-div").classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.querySelector(".sticky-div").classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
  }
);
obs.observe(stickyEl);
