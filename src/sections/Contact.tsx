// src/sections/Contact.tsx
import React from "react";
import {
  Section,
  Container,
  Eyebrow,
  Title,
  Intro,
  Card,
} from "../ui/primitives";
import PortraitIwo from "../assets/portret-iwo.jpg";
import { useOnlineStatus } from "../hooks/useOnlineStatus";
import { Phone, Mail, Instagram } from "lucide-react";
import styled from "styled-components";
import { ping } from "../ui/primitives";

const Row = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;
  margin-top: 24px;

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
    align-items: flex-start;
  }
`;

const DotWrap = styled.span`
  position: relative;
  width: 12px;
  top: -5px;
  right: -10px;
  height: 12px;
  display: inline-block;
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

/* ikony kontaktowe – stały rozmiar */
const IconBox = styled.span`
  width: 36px;
  height: 36px;
  flex: 0 0 36px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconLink = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

/* wrapper zdjęcia + tekstu – kolumna na mobile, rząd na desktopie */
const PersonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  position: relative;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
  }
`;

/* responsywne zdjęcie */
const Portrait = styled.img`
  width: 100%;
  max-width: 260px;
  height: auto;
  border-radius: 16px;
  align-self: center;
  object-fit: cover;

  @media (min-width: 640px) {
    width: 260px;
    height: 340px;
  }

  @media (min-width: 1024px) {
    width: 300px;
    height: 400px;
  }
`;

/* mała informacja o skopiowaniu */
const CopyNote = styled.div`
  margin-top: 6px;
  font-size: 11px;
  opacity: 0.8;
  color: #fff;
`;

export default function Contact() {
  const online = useOnlineStatus();
  const email = "iwoolender12345@gmail.com";
  const phone = "+48 531 002 937";
  const phoneHref = "+48531002937";

  const [copied, setCopied] = React.useState<null | "email" | "phone">(null);

  const isMobile = () => {
    if (typeof navigator === "undefined") return false;
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  };

  const showCopied = (field: "email" | "phone") => {
    setCopied(field);
    window.setTimeout(() => setCopied(null), 1600);
  };

  const handleEmailClick = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email);
      showCopied("email");
    } else {
      // fallback – stare przeglądarki
      const textarea = document.createElement("textarea");
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      showCopied("email");
    }
  };

  const handlePhoneClick = () => {
    if (isMobile()) {
      window.location.href = `tel:${phoneHref}`;
    } else {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(phone);
        showCopied("phone");
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = phone;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        showCopied("phone");
      }
    }
  };

  return (
    <Section
      id="kontakt"
      style={{
        padding: "70px 0",
        background:
          "radial-gradient(1600px 900px at 20% 60%, rgba(229,57,53,0.55) 0%, rgba(229,57,53,0.0) 40%, transparent 92%)",
      }}
    >
      <Container>
        <Eyebrow>Kontakt</Eyebrow>
        <Title dark>Złapmy kontakt</Title>
        <Intro className="silver">
          Napisz lub zadzwoń — odpowiadam szybko. Zielona kropka oznacza, że
          jestem dostępny (8–20).
        </Intro>

        <Row>
          {/* KARTA Z IWO */}
          <Card
            dark
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <PersonWrap>
              <Portrait src={PortraitIwo} alt="Iwo Olender" />
              <div>
                <div style={{ color: "#fff", fontWeight: 900 }}>
                  Iwo Olender
                  <DotWrap>
                    <Dot online={online} />
                    {online && <DotPing />}
                  </DotWrap>
                </div>
                <div style={{ color: "rgba(255,255,255,.7)", fontSize: 12 }}>
                  Trener PRO-BASKET
                </div>
                <div
                  style={{
                    marginTop: 12,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    color: "#fff",
                  }}
                >
                  {/* numer – klik = call (mobile) / kopiuj (desktop) */}
                  <button
                    type="button"
                    onClick={handlePhoneClick}
                    style={{
                      ...link,
                      cursor: "pointer",
                      border: "none",
                      background: "transparent",
                      padding: 0,
                      color: "white",
                    }}
                  >
                    <IconBox>
                      <Phone size={18} />
                    </IconBox>
                    {phone}
                  </button>

                  {/* mail – klik = kopiuj */}
                  <button
                    type="button"
                    onClick={handleEmailClick}
                    style={{
                      ...link,
                      cursor: "pointer",
                      border: "none",
                      background: "transparent",
                      padding: 0,
                      color: "white",
                      wordBreak: "break-all",
                    }}
                  >
                    <IconBox>
                      <Mail size={18} />
                    </IconBox>
                    {email}
                  </button>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <IconLink
                      href="https://www.instagram.com/probasketcamp/"
                      target="_blank"
                      rel="noreferrer"
                      title="Instagram PRO-BASKET Camp"
                    >
                      <Instagram size={18} />
                    </IconLink>
                    @probasketcamp
                  </div>
                </div>

                {copied && (
                  <CopyNote>
                    {copied === "email"
                      ? "Skopiowano adres e-mail do schowka."
                      : "Skopiowano numer telefonu do schowka."}
                  </CopyNote>
                )}
              </div>
            </PersonWrap>

            {/* Zadzwoń teraz – ta sama logika co numer */}
            <button type="button" onClick={handlePhoneClick} style={callNow}>
              Zadzwoń teraz
            </button>
          </Card>
        </Row>
      </Container>
    </Section>
  );
}

/* style obiektowe tylko dla prostych inputów/przycisku */
// const input: React.CSSProperties = {
//   borderRadius: 12,
//   padding: "12px 14px",
//   background: "rgba(255,255,255,.08)",
//   color: "#fff",
//   border: "1px solid rgba(255,255,255,.15)",
//   width: "100%",
// };

// const send: React.CSSProperties = {
//   marginTop: 14,
//   width: "100%",
//   borderRadius: 14,
//   background: "#fff",
//   color: "#0B0F14",
//   padding: "12px 16px",
//   fontWeight: 800,
// };

const link: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 10,
};

const callNow: React.CSSProperties = {
  marginTop: 14,
  display: "inline-flex",
  justifyContent: "center",
  width: "100%",
  borderRadius: 14,
  background: "#90023F",
  color: "#fff",
  padding: "12px 16px",
  fontWeight: 800,
  border: "none",
  cursor: "pointer",
};
