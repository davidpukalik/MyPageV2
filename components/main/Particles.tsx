import React from "react";
import Particles from "react-tsparticles";
import { loadColorUpdater } from "tsparticles-updater-color";
import { loadCircleShape } from "tsparticles-shape-circle";
import { loadBaseMover } from "tsparticles-move-base";
import { loadSizeUpdater } from "tsparticles-updater-size";
import { loadOpacityUpdater } from "tsparticles-updater-opacity";
import { loadOutModesUpdater } from "tsparticles-updater-out-modes";

const MainParticles = () => {
  async function particlesInit(engine: any) {
    await loadColorUpdater(engine);
    await loadCircleShape(engine);
    await loadBaseMover(engine);
    await loadSizeUpdater(engine);
    await loadOpacityUpdater(engine);
    await loadOutModesUpdater(engine);
  }

  return (
    <Particles
      init={particlesInit}
      options={{
        style: { position: "absolute" },
        fpsLimit: 120,
        background: {
          color: "transparent",
        },
        particles: {
          color: { value: "#ffffff" },
          move: {
            direction: "none",
            enable: true,
            outModes: "out",
            random: false,
            speed: 2,
            straight: false,
          },
          number: { density: { enable: true, area: 800 }, value: 80 },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
      }}
    />
  );
};

export default MainParticles;
