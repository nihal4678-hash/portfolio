import { useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },
      background: {
        color: {
          value: "transparent",
        },
      },
      particles: {
        number: {
          value: 60,
        },
        color: {
          value: "#22d3ee",
        },
        links: {
          enable: true,
          color: "#22d3ee",
          distance: 150,
          opacity: 0.3,
        },
        move: {
          enable: true,
          speed: 1.5,
        },
        size: {
          value: 2.5,
        },
        opacity: {
          value: 0.5,
        },
      },
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="absolute inset-0 -z-10"
    />
  );
}

export default ParticlesBackground;