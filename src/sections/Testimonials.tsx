import React from "react";
import {
  Section,
  Container,
  Eyebrow,
  Title,
  Grid3,
  Card,
} from "../ui/primitives";
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
  font-size: 12px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.85);
`;

const Text = styled.div`
  margin-top: 10px;
  font-size: 14px;
  opacity: 0.9;
  line-height: 1.35;
  color: #000;
`;

const Stars = styled.div`
  display: flex;
  gap: 2px;
  margin-bottom: 6px;
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
      name: "Rodzic: Marta P.",
      text: "Syn wraca z treningów zmęczony, ale szczęśliwy. Widać poprawę rzutu i większą pewność siebie.",
    },
    {
      name: "Zawodnik: Bartek (14)",
      text: "Na indywidualnych rozkładamy mój rzut na części pierwsze. Na meczach dużo łatwiej mi podejmować decyzje.",
    },
    {
      name: "Rodzic: Tomasz L.",
      text: "Fajne podejście do młodzieży – wymagająco, ale bez krzyku. Córka nie boi się popełniać błędów.",
    },
    {
      name: "Uczestnik campu: Michał",
      text: "Na PRO-BASKET Camp codziennie gramy, trenujemy i oglądamy wideo. Atmosfera jak w drużynie ligowej.",
    },
    {
      name: "Rodzic: Joanna K.",
      text: "Doceniam kontakt z trenerem – po każdym cyklu wiem nad czym pracowali i co warto wzmacniać.",
    },
    {
      name: "Zawodniczka: Ola (13)",
      text: "Na treningach czuję, że ktoś patrzy tylko na mój rozwój. Dużo gier 1x1 i ćwiczeń pod moją pozycję.",
    },
    {
      name: "Rodzic: Paweł R.",
      text: "Po kilku tygodniach widać różnicę w kondycji i nastawieniu. Syn zaczął wierzyć, że może więcej.",
    },
    {
      name: "Uczestniczka campu: Zuzia",
      text: "Najlepsze półkolonie jakie miałam – treningi, ekipa, konkursy rzutowe. Chcę wracać co roku.",
    },
    {
      name: "Zawodnik: Kacper (17)",
      text: "Treningi są konkretne, bez tracenia czasu. Pracujemy nad rzeczami, które od razu wykorzystuję w lidze.",
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
              <Name>{t.name}</Name>
            </Box>
          ))}
        </Grid3>
      </Container>
    </Section>
  );
}
