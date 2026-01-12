import React from "react";
import {
  Section,
  Container,
  Eyebrow,
  Title,
  Intro,
  Grid3,
  Card,
  Button,
} from "../ui/primitives";
import { CheckCircle2 } from "lucide-react";

export default function Offer() {
  return (
    <Section id="oferta">
      <Container>
        <Eyebrow>Oferta</Eyebrow>
        <Title dark>Treningi indywidualne i PRO-BASKET Camp</Title>
        <Intro className="silver">
          Dopasowane do wieku i poziomu. Technika, kondycja, analiza wideo i gry
          zadaniowe.
        </Intro>

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
              Skupienie na Twoich celach: rzut, kozioł, footwork,
              decision-making.
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
                marginTop: "20px", // pcha przycisk na dół karty
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
              Półkolonie w lato i zimę. Treningi 2x dziennie, codziennie gra,
              zabawy, integracja.
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
                <CheckCircle2 size={16} /> Turnusy lato
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 6,
                }}
              >
                <CheckCircle2 size={16} /> Turnusy zima
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
              Przyjdź na pierwsze zajęcia i zobacz czy Ci się podoba.
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
                marginTop: "5px",
                alignItems: "center",
                gap: 8,
              }}
            >
              <CheckCircle2 size={16} /> wytrenowaliśmy już 67 dzieci!
            </span>
            <Button
              kind="primary"
              href="#kontakt"
              style={{
                marginTop: "20px",
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
