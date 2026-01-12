import React from "react";
import { Container, Eyebrow } from "../ui/primitives";
import styled from "styled-components";
import { Star, CheckCircle2, Phone } from "lucide-react";
import PortraitIwo from "../assets/iwo_portret_small.jpg";
import { useOnlineStatus } from "../hooks/useOnlineStatus";
import { ping } from "../ui/primitives";
import Photo3 from "../assets/IMG_2260.jpg";

const Wrap = styled.section`
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.uiBlack};
  color: #fff;
  margin-top: 64px; /* żeby header nie nachodził */
`;

const Inner = styled(Container)`
  position: relative;
  z-index: 2; /* ponad gradientem */
  display: grid;
  gap: 20px;
  align-items: center;
  grid-template-columns: 1fr;
  padding: 56px 16px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 92px 16px;
    gap: 24px;
  }
`;

const BgLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: radial-gradient(
    1600px 900px at 80% 35%,
    rgba(229, 57, 53, 0.55) 0%,
    rgba(229, 57, 53, 0) 40%,
    transparent 92%
  );
`;

const HeroImg = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 22px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);

  @media (min-width: 768px) {
    height: 420px;
  }
`;

const ContactCard = styled.div`
  position: absolute;
  left: -16px;
  bottom: -12px;
  background: #fff;
  color: ${({ theme }) => theme.colors.uiBlack};
  border-radius: 20px;
  padding: 14px 16px;
  display: flex;
  gap: 12px;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: ${({ theme }) => theme.shadow.sm};

  @media (max-width: 768px) {
    width: 80vw;
    left: 50%;
    transform: translateX(-50%);
    bottom: -45px;
  }
`;

const DotWrap = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  display: inline-block;
  width: 12px;
  height: 12px;
`;

const Dot = styled.span<{ online: boolean }>`
  position: absolute;
  inset: 0;
  border-radius: 999px;
  background: ${(p) => (p.online ? "#22c55e" : "#9ca3af")};
`;

const DotPing = styled.span`
  position: absolute;
  inset: 0;
  border-radius: 999px;
  animation: ${ping} 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
  background: #22c55e;
  opacity: 0.5;
`;

const ButtonsRow = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 18px;
  flex-wrap: wrap;
`;

const PrimaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.95rem;
  background: #fff;
  color: #000 !important;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.15s ease, opacity 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    opacity: 0.9;
  }
`;

const SecondaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.95rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #fff !important;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.18s ease, border-color 0.18s ease,
    transform 0.18s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: #fff;
    transform: translateY(-1px);
  }
`;

export default function Hero() {
  const online = useOnlineStatus();

  return (
    <Wrap id="kim">
      <BgLayer />

      <Inner>
        <div>
          <Eyebrow>PRO-BASKET CAMP • treningi indywidualne</Eyebrow>

          <h1
            style={{
              margin: "16px 0 0",
              fontSize: "clamp(28px,7vw,56px)",
              lineHeight: 1.05,
              fontWeight: 900,
            }}
          >
            Treningi z Iwo Olender
          </h1>

          <p
            style={{
              marginTop: 14,
              opacity: 0.85,
              maxWidth: 560,
              fontSize: 17,
            }}
          >
            Pomagam zawodnikom grać pewniej i skuteczniej. Pracuję nad techniką
            rzutu, koordynacją, decyzyjnością i przygotowaniem meczowym. Trenuję
            indywidualnie, a w wakacje i ferie prowadzę również intensywne
            PRO-BASKET Camp.
          </p>

          <ButtonsRow>
            <PrimaryLink href="#oferta">Sprawdź ofertę</PrimaryLink>
            <SecondaryLink href="#galeria">Zobacz zdjęcia</SecondaryLink>
          </ButtonsRow>

          <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 16,
              fontSize: 13,
              opacity: 0.85,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Star size={16} fill="currentColor" /> 4.9/5 (opinie rodziców i
              zawodników)
            </span>
            <span
              style={{
                width: 1,
                height: 14,
                background: "rgba(255,255,255,.25)",
              }}
            />
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <CheckCircle2 size={16} /> Bezpieczne, kameralne grupy
            </span>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <HeroImg src={Photo3} alt="Akcja treningowa – PRO-BASKET Camp" />

          <ContactCard>
            <img
              src={PortraitIwo}
              alt="Iwo Olender"
              style={{
                width: 60,
                height: 60,
                objectFit: "cover",
                borderRadius: 16,
              }}
            />
            <div>
              <div style={{ fontWeight: 900 }}>Iwo Olender</div>
              <div style={{ fontSize: 12, opacity: 0.6 }}>
                Trener indywidualny
              </div>
              <div
                style={{
                  marginTop: 8,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontWeight: 700,
                }}
              >
                <Phone size={16} /> <span>+48 531 002 937</span>
              </div>
            </div>

            <DotWrap>
              <Dot online={online} />
              {online && <DotPing />}
            </DotWrap>
          </ContactCard>
        </div>
      </Inner>
    </Wrap>
  );
}
