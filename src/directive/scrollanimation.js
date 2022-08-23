const animationScrollObserver = new IntersectionObserver(
  (entries, animationScrollObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("intersecting");
        entry.target.classList.add("enter");
        animationScrollObserver.unobserve(entry.target);
      } else {
        console.log("not intersecting");
      }
    });
  }
);

export default {
  bind(el) {
    el.classList.add("before_enter");
    animationScrollObserver.observe(el);
  },
};
