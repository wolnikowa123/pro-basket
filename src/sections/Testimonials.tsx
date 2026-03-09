import React from "react";
import { Section, Container, Eyebrow, Grid3, Card } from "../ui/primitives";
import { Star } from "lucide-react";
import styled from "styled-components";

const Box = styled(Card)`
  background: #fff;
  border: 2px solid rgba(229, 57, 53, 0.35);
  border-radius: 18px;
  padding: 18px 16px;
  color: #000;
  transition: transform 0.2s ease;

  display: flex; /* ⭐ układ kolumnowy */
  flex-direction: column; /* ⭐ dzięki temu autor może zejść na dół */

  &:hover {
    transform: translateY(-3px);
  }

  /* 📱 Na mobilce pokazuj tylko pierwsze 3 opinie */
  @media (max-width: 768px) {
    &:nth-child(n + 4) {
      display: none;
    }
  }
`;

const Name = styled.div`
  margin-top: auto; /* ⭐ zawsze przykleja autora do dołu karty */
  font-size: 14px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.85);
`;

const Text = styled.div`
  margin-top: 10px;
  font-size: 14px;
  opacity: 0.9;
  line-height: 1.35;
  color: #000;
  margin-bottom: 5px;
`;

const Stars = styled.div`
  display: flex;
  gap: 2px;
  margin-bottom: 0px;
`;

const Lead = styled.p`
  margin: 0 0 26px;
  opacity: 0.9;
  font-size: clamp(16px, 2.2vw, 20px);
  margin-top: 12px;
`;

export default function Testimonials() {
  const testimonials = [
    {
      text: "Chciałem podciągnąć swoje umiejętności podczas wakacji żeby lepiej wypaść w klubie - widzę mega progres! Będę jeździć na kolejne obozy.",
      name: "Zawodnik",
    },
    {
      text: "Treningi są dobrze prowadzone, a atmosfera jest świetna. Wszystko jest na wysokim poziomie.",
      name: "Rodzic",
    },
    {
      text: "Treningi są super zawsze coś innego i fajnego. Czasem też są gierki lub ćwiczenia motoryczne - to jest ciekawe urozmaicenie.",
      name: "Zawodnik",
    },
    {
      text: "Świetne treningi, gierki i trener. Polecam!",
      name: "Zawodnik",
    },

    {
      text: "Bardzo lubię treningi z trenerem Iwo, a szczególnie gry 1 na 1.",
      name: "Zawodnik",
    },
    {
      text: "Organizacyjnie i sportowo zajęcia na wysokim poziomie.",
      name: "Rodzic",
    },
    {
      text: "Treningi są bardzo dokładne, nie są nudne. Czas wykorzystany w STU procentach, trener bardzo kompetentny.",
      name: "Zawodnik",
    },
    {
      text: "Podoba mi się, że dzieci korzystają z różnorodnych technik koszykarskich.",
      name: "Rodzic",
    },

    {
      text: "Trener Iwo jest po prostu SUPER!",
      name: "Zawodnik",
    },
  ];
  // todo update tekstow
  // todo update zdjec
  // todo ta wtyczka do kontaktu

  return (
    <Section id="opinie">
      <Container>
        <Eyebrow>Opinie</Eyebrow>
        <Lead>
          Kilka słów od zawodników, z którymi pracuję i zadowolonych rodziców:
        </Lead>

        <Grid3>
          {testimonials.map((t, i) => (
            <Box key={i}>
              <Stars>
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={16} fill={"#fabb18"} color={"#fabb18"} />
                ))}
              </Stars>

              <Text>&ldquo;{t.text}&rdquo;</Text>
              <Name>
                — {t.name} {t.name === "Zawodnik" ? "🥇" : t.name === "Rodzic" ? "👨‍👩‍👧‍👦" : ""}
              </Name>
            </Box>
          ))}
        </Grid3>
      </Container>
    </Section>
  );
}
