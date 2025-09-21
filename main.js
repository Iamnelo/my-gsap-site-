// Animate title on page load
gsap.from(".title", {
  duration: 1.5,
  y: -100,
  opacity: 0,
  ease: "bounce"
});

// Animate button when clicked
document.getElementById("animateBtn").addEventListener("click", () => {
  gsap.to(".title", {
    duration: 1,
    rotation: 360,
    scale: 1.5,
    ease: "elastic"
  });
});
