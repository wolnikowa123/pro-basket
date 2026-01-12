import React from "react";
import styled from "styled-components";
import {
  Section,
  Container,
  Eyebrow,
  Title,
  Intro,
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
  transition: border-color 0.15s ease, transform 0.15s ease;

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

const data = [
  {
    img: mistrz,
    title: "Dwukrotny mistrz Polski — 2019/20",
    text: "Złote medale w młodzieżowych mistrzostwach Polski. Doświadczenie gry na najwyższym poziomie rywalizacji i pracy w silnym sztabie szkoleniowym.",
  },
  {
    img: ekstraklasa,
    title: "Zawodnik Ekstraklasy — Arka Gdynia",
    text: "Sezon w najwyższej klasie rozgrywkowej. Trening pod presją, profesjonalne przygotowanie motoryczne i taktyczne oraz regularne występy na krajowej scenie.",
  },
  {
    img: trening,
    title: "Trener z wieloletnim doświadczeniem",
    text: "Praca indywidualna i z grupami od poziomu podstawowego po zawodników ligowych. Rozwój techniki, pewności siebie i skutecznej gry w meczach.",
  },
];

export default function Achievements() {
  return (
    <Section id="osiagniecia">
      <Container>
        <Eyebrow>Dlaczego warto</Eyebrow>
        <Title dark>Osiągnięcia i doświadczenie</Title>
        <Intro className="silver">
          Realne kompetencje, potwierdzone wynikami sportowymi i praktyką w
          szkoleniu.
        </Intro>

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
