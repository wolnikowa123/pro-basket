import React from "react";
import styled from "styled-components";
import {
  Section,
  Container,
  Eyebrow,
  Title,
  Grid3,
  Card,
} from "../ui/primitives";
import { theme } from "../theme";

import mistrz from "./../assets/mistrz.jpg";
import ekstraklasa from "./../assets/ekstra.jpg";
import trening from "./../assets/trening.jpg";

const StyledCard = styled(Card)`
  display: grid;
  gap: 10px;
  padding: 14px;
  border: 2px solid ${theme.colors.accent};
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.04);
  color: #fff;
  transition:
    border-color 0.15s ease,
    transform 0.15s ease;

  &:hover {
    border-color: #ff6a64;
    transform: translateY(-2px);
  }
`;

const Thumb = styled.img`
  width: 100%;
  aspect-ratio: 16 / 13;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: #0b0f14;
`;

const ItemTitle = styled.div`
  font-weight: 900;
  font-size: 17px;
  line-height: 1.25;
  color: #fff;
`;

const ItemText = styled.div`
  font-size: 14px;
  opacity: 0.9;
  line-height: 1.4;
`;
const Lead = styled.p`
  margin: 0 0 26px;
  opacity: 0.9;
  font-size: clamp(16px, 2.2vw, 20px);
  margin-top: 12px;
`;

const data = [
  {
    img: mistrz,
    title: "Dwukrotny mistrz Polski — 2019/20",
    text: "Mam na koncie 2 złote medale w młodzieżowych mistrzostwach Polski. Doświadczyłem gry na najwyższym poziomie rywalizacji i pracy w silnym sztabie szkoleniowym.",
  },
  {
    img: ekstraklasa,
    title: "Zawodnik Ekstraklasy — Arka Gdynia",
    text: "Grałem w najwyższej klasie rozgrywkowej, gdzie liczy się każdy detal, dobre przygotowanie i mental. Doświadczenie z regularnych występów na krajowej scenie dziś przekładam na treningi z zawodnikami.",
  },
  {
    img: trening,
    title: "Trener z wieloletnim doświadczeniem",
    text: "Pracuję z młodymi graczami, którzy dopiero uczą się podstaw oraz z zawodnikami ligowymi, którzy chcą podnieść poziom. Pomagam w rozwoju techniki, pewności siebie i skutecznej gry.",
  },
];

export default function Achievements() {
  return (
    <Section id="osiagniecia">
      <Container>
        <Eyebrow>Dlaczego warto</Eyebrow>
        <Title dark>Osiągnięcia i doświadczenie</Title>
        <Lead className="silver">
          Wiem, jak wygląda droga od szatni do finału. Moje umiejętności to nie
          teoria, ale lata spędzone na boiskach - od mojego szkolenia, przez
          występy w ekstraklasie, aż do szkolenia innych zawodników.
        </Lead>

        <Grid3>
          {data.map((a, i) => (
            <StyledCard key={i}>
              <Thumb src={a.img} alt="" />
              <ItemTitle>{a.title}</ItemTitle>
              <ItemText>{a.text}</ItemText>
            </StyledCard>
          ))}
        </Grid3>
      </Container>
    </Section>
  );
}
