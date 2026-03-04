import React from "react";
import {
  Section,
  Container,
  Eyebrow,
  Title,
  Grid3,
  Card,
  Button,
} from "../ui/primitives";
import { CheckCircle2 } from "lucide-react";
import styled from "styled-components";
const Lead = styled.p`
  margin: 0 0 26px;
  opacity: 0.9;
  font-size: clamp(16px, 2.2vw, 20px);
  margin-top: 12px;
`;

export default function Offer() {
  return (
    <Section id="oferta">
      <Container>
        <Eyebrow>Oferta</Eyebrow>
        <Title dark>Treningi indywidualne i PRO-BASKET Camp</Title>
        <Lead className="silver">
          Dopasowane do poziomu zawodnika, bez presji, z konkretnym planem
          rozwoju. Technika, kondycja, analiza wideo i gry zadaniowe.
        </Lead>

        <Grid3>
          {/* KARTA 1 */}
          <Card
            dark
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ fontWeight: 900, color: "#fff", fontSize: 20 }}>
              Trening indywidualny
            </div>
            <div
              style={{
                marginTop: 8,
                opacity: 0.9,
                fontSize: 14,
                color: "#fff",
              }}
            >
              Postaw na trening nastawiony na Twoje cele: rzut, kozioł,
              footwork, decision-making.
            </div>
            <div
              style={{
                marginTop: 14,
                background: "rgba(255,255,255,.08)",
                borderRadius: 16,
                padding: 12,
                color: "#fff",
              }}
            >
              <div style={{ opacity: 0.85, fontSize: 14 }}>Cena</div>
              <div style={{ fontWeight: 900, fontSize: 26 }}>80 zł / godz.</div>
            </div>
            <Button
              kind="ghost"
              href="#kontakt"
              style={{
                marginTop: "auto", // pcha przycisk na dół karty
                alignSelf: "center", // wyśrodkowanie poziome
                backgroundColor: "transparent",
                color: "white",
                width: "100%",
                border: "2px solid #90023F",
              }}
            >
              Umów termin
            </Button>
          </Card>

          {/* KARTA 2 */}
          <Card
            dark
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ fontWeight: 900, color: "#fff", fontSize: 20 }}>
              PRO-BASKET Camp
            </div>
            <div
              style={{
                marginTop: 8,
                opacity: 0.9,
                fontSize: 14,
                color: "#fff",
              }}
            >
              Nie rób sobie wakacji od treningu, zrób trening na wakacjach!
              <br />
              Treningi 2x dziennie, gry, zabawy, integracja.
            </div>
            <ul
              style={{
                marginTop: 10,
                color: "#fff",
                opacity: 0.95,
                fontSize: 14,
                listStyle: "none",
                padding: 0,
              }}
            >
              <li style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <CheckCircle2 size={16} /> PRO-BASKET Camp w lecie ☀️
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 6,
                }}
              >
                <CheckCircle2 size={16} /> PRO-BASKET Camp w zimę ❄️
              </li>
            </ul>
            <Button
              href="#kontakt"
              style={{
                marginTop: "auto",
                alignSelf: "center",
                width: "100%",
                backgroundColor: "transparent",
                border: "2px solid #90023F",
              }}
            >
              Zapisz się na listę
            </Button>
          </Card>

          {/* KARTA 3 */}
          <Card
            dark
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ fontWeight: 900, color: "#fff", fontSize: 20 }}>
              Pierwszy trening za Free
            </div>
            <div
              style={{
                marginTop: 8,
                opacity: 0.9,
                fontSize: 14,
                color: "#fff",
              }}
            >
              Przyjdź na 1 darmowy trening i oceń, jak podoba Ci się praca ze
              mną.
            </div>
            <div
              style={{
                marginTop: 14,
                background: "rgba(255,255,255,.08)",
                borderRadius: 16,
                padding: 12,
                color: "#fff",
              }}
            >
              <div style={{ opacity: 0.85, fontSize: 14 }}>Cena</div>
              <div style={{ fontWeight: 900, fontSize: 26 }}>Free</div>
            </div>
            <span
              style={{
                display: "flex",
                color: "#8d8d8d",
                margin: "5px 0",
                alignItems: "center",
                gap: 8,
                height: "50px",
              }}
            >
              <CheckCircle2 size={16} />
              Wytrenowaliśmy w Sharks już 220 młodych zawodników!
            </span>
            <Button
              kind="primary"
              href="#kontakt"
              style={{
                marginTop: "auto",
                alignSelf: "center",
                width: "100%",
                color: "#fff",
                backgroundColor: "#90023F",
              }}
            >
              Zadzwoń do mnie
            </Button>
          </Card>
        </Grid3>
      </Container>
    </Section>
  );
}
