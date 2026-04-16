import React from "react";
import { Section, Container, Eyebrow } from "../ui/primitives";
import styled from "styled-components";

const Lead = styled.p`
  margin: 20px 0 10px 0;
  opacity: 0.85;
  font-size: clamp(16px, 2vw, 20px);
  line-height: 1.6;
  max-width: 720px;
`;

const AgeInfo = styled.div`
  font-size: 16px;
  opacity: 0.8;
  margin-bottom: 32px;
  font-weight: 500;
`;

const Grid = styled.div`
  display: grid;
  gap: 24px;
  margin-top: 40px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const InfoBox = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(229, 57, 53, 0.15);
  border-radius: 12px;
  padding: 24px;
  transition: all 0.2s ease;

  &:hover {
    border-color: rgba(229, 57, 53, 0.3);
    background: rgba(255, 255, 255, 0.06);
  }

  @media (max-width: 640px) {
    padding: 20px;
  }
`;

const BoxTitle = styled.h3`
  margin: 0 0 12px 0;
  font-size: 18px;
  font-weight: 600;
  color: #fff;

  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

const BoxText = styled.p`
  margin: 0;
  opacity: 0.85;
  line-height: 1.6;
  font-size: 15px;
`;

const Highlight = styled.span`
  color: #e5393d;
  font-weight: 600;
`;

const PricingSection = styled.div`
  background: rgba(229, 57, 53, 0.1);
  border: 1px solid rgba(229, 57, 53, 0.25);
  border-radius: 12px;
  padding: 32px;
  margin-top: 40px;

  @media (max-width: 640px) {
    padding: 24px;
  }
`;

const PriceRow = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: auto 1fr;
    align-items: flex-start;
  }
`;

const PriceItem = styled.div`
  @media (min-width: 768px) {
    border-right: 1px solid rgba(229, 57, 53, 0.2);
    padding-right: 32px;
  }
`;

const PriceLabel = styled.div`
  font-size: 13px;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
  font-weight: 600;
`;

const Price = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #fff;

  @media (max-width: 640px) {
    font-size: 28px;
  }
`;

const PriceExtra = styled.div`
  font-size: 13px;
  opacity: 0.75;
  margin-top: 4px;
`;

const ProgramList = styled.ul`
  display: grid;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SectionTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  margin: 0 0 20px 0;
  color: #fff;

  @media (max-width: 640px) {
    font-size: 20px;
  }
`;

const DiscountNote = styled(BoxText)`
  @media (max-width: 767px) {
    display: none;
  }
`;

const ProgramItem = styled.li`
  display: flex;
  gap: 10px;
  opacity: 0.8;
  font-size: 15px;
  line-height: 1.5;

  &::before {
    content: "•";
    color: #e5393d;
    font-weight: bold;
    flex-shrink: 0;
  }
`;

export default function Camp() {
  return (
    <Section
      id="oboz"
      style={{
        padding: "70px 0",
        background:
          "radial-gradient(1600px 900px at 80% 40%, rgba(229,57,53,0.35) 0%, rgba(229,57,53,0.0) 40%, transparent 92%)",
      }}
    >
      <Container>
        <Eyebrow>PRO-BASKET CAMP lato 2026</Eyebrow>

        <Lead>
          Lato to idealny czas, aby pracować nad sobą i doskonalić swoje
          umiejętności. Nasze turnusy łączą intensywny trening z dobrą zabawą i
          zdrową rywalizacją. To nie tylko okazja do rozwoju sportowego, ale
          także do nawiązania nowych przyjaźni i stworzenia niezapomnianych
          wspomnień. Dołącz do nas tego lata i przeżyj niezapomniane chwile na
          boisku!
        </Lead>
        <Lead></Lead>
        <AgeInfo>
          Obozy przewidziane są dla zawodników w wieku{" "}
          <Highlight>8-25 lat</Highlight>
        </AgeInfo>

        <Grid>
          <InfoBox>
            <BoxTitle>Terminy i Długość</BoxTitle>
            <BoxText>
              Turnus to <Highlight>jeden tydzień</Highlight> nauki, treningu i
              zabawy. Turnusy odbywają się{" "}
              <Highlight>przez całe lato</Highlight> (lipiec i sierpień).
            </BoxText>
          </InfoBox>

          <InfoBox>
            <BoxTitle>Poziomy Zaawansowania</BoxTitle>
            <BoxText>
              Treningi dla poziomu{" "}
              <Highlight>amatorskiego i ligowego</Highlight>. Zajęcia
              dopasowywane są do poziomu uczestników.
            </BoxText>
          </InfoBox>
        </Grid>

        <PricingSection>
          <SectionTitle>Program Campu</SectionTitle>
          <ProgramList>
            <ProgramItem>
              Trzy treningi dziennie (w tym przygotowanie motoryczne i silowe)
            </ProgramItem>
            <ProgramItem>
              Warsztaty pierwszej pomocy przy kontuzjach
            </ProgramItem>
            <ProgramItem>Warsztaty zdrowego odżywiania sportowca</ProgramItem>
            <ProgramItem>Nauka rolowania mięśni i rozciągania</ProgramItem>
            <ProgramItem>Codzienna fotorelacja z obozu</ProgramItem>
            <ProgramItem>Turnieje 3+3 i konkursy</ProgramItem>
            <ProgramItem>Warsztaty z profesjonalnymi zawodnikami</ProgramItem>
            <ProgramItem>Rano trenujemy, a po południu gramy Ligę!</ProgramItem>
          </ProgramList>
        </PricingSection>
        <InfoBox style={{ marginTop: "40px" }}>
          <SectionTitle style={{ marginTop: 0, marginBottom: "24px" }}>
            Cena
          </SectionTitle>
          <PriceRow>
            <PriceItem>
              <PriceLabel>Cena za osobę</PriceLabel>
              <Price>1 400 zł</Price>
              <PriceExtra>za tygodniowy turnus</PriceExtra>
            </PriceItem>
            <div
              style={{
                display: "flex",
                gap: "40px",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <div>
                <PriceLabel>W cenie obozu</PriceLabel>
                <BoxText style={{ marginTop: "6px" }}>
                  • Wyżywienie (obiad + deser)
                  <br />
                  • Ubezpieczenie
                  <br />• Campowy upominek
                </BoxText>
              </div>
              <div style={{ marginTop: "20px" }}>
                {/* <PriceLabel>Rabat na więcej turnusów</PriceLabel> */}
                <DiscountNote style={{ marginTop: "6px" }}>
                  Osoby zapisane na większą liczbę turnusów mogą liczyć na
                  atrakcyjne zniżki!
                </DiscountNote>
              </div>
            </div>
          </PriceRow>
        </InfoBox>
      </Container>
    </Section>
  );
}
