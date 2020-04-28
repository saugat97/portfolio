var particles = Particles.init({
    selector: ".background",
    color: ["skyblue", "#e4e4e4"],
    responsive: [
      {
        breakpoint: 800,
        options: {
          color: "#00C9B1",
          maxParticles: 80,
        },
      },
    ],
  });