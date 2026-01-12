import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global";
import { theme } from "./theme";

import Header from "./components/Header";
import Hero from "./sections/Hero";
import Offer from "./sections/Offer";
import Testimonials from "./sections/Testimonials";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";
import { Container } from "./ui/primitives";
import Achievements from "./sections/Achievements";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Hero />
      <Achievements />
      <Offer />
      <Testimonials />
      <Gallery />
      <Contact />

      <footer style={{ borderTop: "1px solid rgba(0,0,0,.06)" }}>
        <Container
          style={{
            padding: "22px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div style={{ fontSize: 14, opacity: 0.7 }}>
            © {new Date().getFullYear()} PRO-BASKET — Iwo Olender
          </div>
        </Container>
      </footer>
    </ThemeProvider>
  );
}
