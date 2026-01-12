import React from "react";
import styled from "styled-components";
import { Container } from "../ui/primitives";
import { Phone } from "lucide-react";
import Logo from "../assets/pro-basket-logo.png";

/* Sticky → Fixed + blur + gradientowa linia */
const Wrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  color: #fff;

  /* półprzezroczyste tło, żeby zadziałał blur za headerem */
  background: rgba(10, 15, 20, 0.65);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  /* pseudo-element jako gradientowa linia pod spodem */
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      rgba(192, 192, 192, 0.15) 0%,
      rgba(192, 192, 192, 0.55) 50%,
      rgba(192, 192, 192, 0.15) 100%
    );
    pointer-events: none;
  }
`;
// todo usunac ten border
// todo popraw przyciski w ofercie
// todo galeria większa
// mobile
const Inner = styled(Container)`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
`;

const LogoImg = styled.img`
  height: 60px;
  width: 50px;
  @media (max-width: 480px) {
    height: 34px;
  }
`;

const Nav = styled.nav`
  display: none;
  gap: 24px;
  font-size: 14px;
  color: #fff;

  @media (min-width: 768px) {
    display: flex;
  }

  a {
    color: #fff;
    opacity: 0.9;
    transition: opacity 0.15s ease, color 0.15s ease;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.silver};
    opacity: 1;
  }
`;

const CallBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme }) => theme.colors.red};
  color: #fff;
  border-radius: 16px;
  padding: 8px 16px;
  font-weight: 800;
  font-size: 14px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.25);

  &:hover {
    filter: brightness(1.05);
    transform: translateY(-1px);
    transition: transform 0.15s ease, filter 0.15s ease;
  }
`;

export default function Header() {
  return (
    <Wrap>
      <Inner>
        <Brand>
          <LogoImg id="site-logo" src={Logo} alt="PRO-BASKET" />
          <div>
            <div style={{ fontWeight: 900, letterSpacing: ".02em" }}>
              PRO-BASKET
            </div>
            <div style={{ fontSize: 12, opacity: 0.7 }}>
              Camp & Treningi indywidualne
            </div>
          </div>
        </Brand>

        <Nav>
          <a href="#kim">Kim jest Iwo?</a>
          <a href="#osiagniecia">Osiągnięcia</a>
          <a href="#oferta">Oferta</a>
          <a href="#galeria">Galeria</a>
          <a href="#kontakt">Kontakt</a>
        </Nav>

        <CallBtn href="#kontakt">
          <Phone size={16} /> Kontakt
        </CallBtn>
      </Inner>
    </Wrap>
  );
}
