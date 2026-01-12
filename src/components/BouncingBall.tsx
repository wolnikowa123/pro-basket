import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BallPNG from "../assets/ball.png";

/** Rozmiar piłki na starcie */
const SIZE = 120; // „duża”
const END_SCALE = 0.6; // lekko mniejsza przy logo

const Shell = styled.div`
  position: fixed;
  inset: 0 auto auto 0;
  z-index: 90;
  pointer-events: none;
`;

const Img = styled.img`
  width: ${SIZE}px;
  height: ${SIZE}px;
  filter: drop-shadow(0 14px 22px rgba(0, 0, 0, 0.28));
  will-change: transform, opacity;
`;

/**
 * Animacja: z góry -> dół (odbicie 1) -> dół (odbicie 2) -> lot do logo -> zniknięcie
 * Trajektoria liczona na podstawie aktualnej pozycji elementu #site-logo
 */
export default function BouncingBall() {
  const ref = useRef<HTMLImageElement>(null);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // punkt docelowy: środek logo
    const logo = document.getElementById("site-logo");
    const rect = logo?.getBoundingClientRect();
    const targetX = rect
      ? rect.left + rect.width * 0.5 - (SIZE * END_SCALE) / 2
      : 16;
    const targetY = rect
      ? rect.top + rect.height * 0.5 - (SIZE * END_SCALE) / 2
      : 8;

    // punkty pośrednie
    const startX = window.innerWidth * 0.5 - SIZE / 2;
    const floorY = window.innerHeight - SIZE - 24; // „podłoga” z marginesem
    const bounce1Y = floorY - 180; // wysokość pierwszego odbicia
    const bounce2Y = floorY - 90; // drugie niższe

    // Web Animations API – bardziej elastyczny niż CSS keyframes dla dynamicznych współrzędnych
    const anim = el.animate(
      [
        {
          transform: `translate(${startX}px, -${SIZE + 20}px) scale(1)`,
          opacity: 1,
        },
        {
          transform: `translate(${startX}px, ${floorY}px) scale(1)`,
          opacity: 1,
          offset: 0.42,
        },
        {
          transform: `translate(${startX}px, ${bounce1Y}px) scale(0.98)`,
          offset: 0.6,
        },
        {
          transform: `translate(${startX}px, ${floorY}px) scale(1)`,
          offset: 0.78,
        },
        {
          transform: `translate(${startX}px, ${bounce2Y}px) scale(0.99)`,
          offset: 0.88,
        },
        {
          transform: `translate(${targetX}px, ${targetY}px) scale(${END_SCALE})`,
          opacity: 1,
          offset: 1,
        },
      ],
      {
        duration: 3600, // 🐢 wolniej i przyjemniej
        easing: "cubic-bezier(.18,.65,.23,.98)",
        fill: "forwards",
        delay: 120,
      }
    );

    anim.finished.finally(() => setMounted(false));
  }, []);

  if (!mounted) return null;
  return (
    <Shell aria-hidden>
      {/* PNG z transparencją – bez tła */}
      <Img ref={ref} src={BallPNG} alt="" />
    </Shell>
  );
}
