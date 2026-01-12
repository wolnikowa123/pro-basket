import React from "react";
import { Section, Container, Eyebrow, Title, Intro } from "../ui/primitives";
import styled from "styled-components";

import Photo1 from "../assets/IMG_2234.jpg";
import Photo2 from "../assets/IMG_2235.jpg";
import Photo3 from "../assets/IMG_2260.jpg";
import Photo4 from "../assets/IMG_2268.jpg";
import Photo5 from "../assets/IMG_2265.jpg";
import Photo6 from "../assets/IMG_2273.jpg";

import { GalleryThumbnails, X, ChevronLeft, ChevronRight } from "lucide-react";
import { theme } from "../theme";

const Grid = styled.div`
  margin-top: 16px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
  }
`;

// ⬇️ button zamiast <a>, żeby otwierać modal
const Item = styled.button`
  all: unset;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  border: 2px solid rgba(229, 57, 53, 0.35);
  display: block;
  cursor: pointer;

  img {
    width: 100%;
    height: 155px;
    object-fit: cover;
    transition: transform 0.25s ease;
    display: block;
  }

  &:hover img {
    transform: scale(1.05);
  }

  /* 📱 Na mobilce pokazuj tylko pierwsze 4 zdjęcia */
  @media (max-width: 767px) {
    &:nth-child(n + 5) {
      display: none;
    }
  }
`;

const More = styled.div`
  height: 155px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 6px;
  font-size: 14px;
  font-weight: 700;
  border: 2px dashed rgba(229, 57, 53, 0.35);
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(229, 57, 53, 0.08);
  }
`;

/* MODAL z miniaturkami */
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(6px);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 60px 20px;
  overflow-y: auto;
`;

const ModalBox = styled.div`
  max-width: 1100px;
  width: 100%;
  background: #fff;
  border-radius: 22px;
  padding: 24px 24px 26px;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.45);
`;

const ModalTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.accent};
`;

// tylko miniaturki w modalu
const ModalGrid = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));

  @media (min-width: 768px) {
    gap: 12px;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

const ThumbBtn = styled.button<{ active: boolean }>`
  all: unset;
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid
    ${({ active, theme }) =>
      active ? theme.colors.accent : "rgba(0, 0, 0, 0.08)"};
  box-shadow: ${({ active }) =>
    active ? "0 0 0 1px rgba(229,57,53,0.35)" : "none"};
  transition: transform 0.15s ease, border-color 0.15s ease,
    box-shadow 0.15s ease;

  img {
    width: 100%;
    height: 110px;
    object-fit: cover;
    display: block;
  }

  &:hover {
    transform: translateY(-1px);
  }
`;

const CloseBtn = styled.button`
  all: unset;
  position: fixed;
  top: 22px;
  right: 22px;
  cursor: pointer;
  padding: 8px;
  border-radius: 14px;
  background: rgba(0, 0, 0, 0.1);

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;

/* FULLSCREEN viewer jak w telefonie */
const FullscreenOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FullscreenImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FullscreenImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
`;

const FullscreenClose = styled.button`
  all: unset;
  position: absolute;
  top: 18px;
  right: 18px;
  cursor: pointer;
  padding: 8px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }
`;

const ArrowButton = styled.button`
  all: unset;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 12px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

const ArrowLeft = styled(ArrowButton)`
  left: 16px;
`;

const ArrowRight = styled(ArrowButton)`
  right: 16px;
`;

const Counter = styled.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 14px;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.5);
`;

const images = [
  Photo1,
  Photo2,
  Photo3,
  Photo4,
  Photo5,
  Photo6,
  Photo1,
  Photo2,
  Photo1,
  Photo2,
  Photo3,
  Photo4,
  Photo5,
  Photo6,
  Photo1,
  Photo2,
  Photo1,
  Photo2,
  Photo3,
  Photo4,
  Photo5,
  Photo6,
  Photo1,
  Photo2,
];

export default function Gallery() {
  const [open, setOpen] = React.useState(false); // modal z miniaturkami
  const [fullscreenIndex, setFullscreenIndex] = React.useState<number | null>(
    null
  ); // full screen viewer

  // ESC: najpierw zamknij fullscreen, potem cały modal
  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (fullscreenIndex !== null) {
          setFullscreenIndex(null);
        } else {
          setOpen(false);
        }
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [fullscreenIndex]);

  // blokujemy scroll tła gdy modal otwarty
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const openModal = () => {
    setOpen(true);
  };

  const openFullscreen = (index: number) => {
    setFullscreenIndex(index);
  };

  const closeFullscreen = () => {
    setFullscreenIndex(null);
  };

  const goPrev = () => {
    setFullscreenIndex((prev) =>
      prev === null ? 0 : (prev - 1 + images.length) % images.length
    );
  };

  const goNext = () => {
    setFullscreenIndex((prev) =>
      prev === null ? 0 : (prev + 1) % images.length
    );
  };

  const visibleImages = images.slice(0, 8); // max 8 na głównej siatce

  return (
    <Section id="galeria">
      <Container>
        <Eyebrow>Galeria</Eyebrow>
        <Title dark>Treningi i campy</Title>
        <Intro className="silver">
          Udostępniamy zajęcia w social media – znajdź nas na IG:
          @probasket-camp!
        </Intro>

        <Grid>
          {visibleImages.map((src, i) => (
            <Item key={i} onClick={() => openFullscreen(i)}>
              <img src={src} alt="" />
            </Item>
          ))}

          <More onClick={openModal}>
            <GalleryThumbnails size={28} color={theme.colors.accent} />
            więcej zdjęć
          </More>
        </Grid>

        {/* MODAL z miniaturkami */}
        {open && (
          <ModalOverlay onClick={() => setOpen(false)}>
            <ModalBox onClick={(e) => e.stopPropagation()}>
              <ModalTitle>Galeria zdjęć</ModalTitle>

              <ModalGrid>
                {images.map((src, i) => (
                  <ThumbBtn
                    key={i}
                    active={i === fullscreenIndex}
                    onClick={() => openFullscreen(i)}
                  >
                    <img src={src} alt="" />
                  </ThumbBtn>
                ))}
              </ModalGrid>
            </ModalBox>

            <CloseBtn onClick={() => setOpen(false)}>
              <X size={26} />
            </CloseBtn>
          </ModalOverlay>
        )}

        {/* FULLSCREEN viewer jak w galerii w telefonie */}
        {fullscreenIndex !== null && (
          <FullscreenOverlay onClick={closeFullscreen}>
            <FullscreenImageBox onClick={(e) => e.stopPropagation()}>
              <FullscreenImage src={images[fullscreenIndex]} alt="" />

              <FullscreenClose onClick={closeFullscreen}>
                <X size={26} />
              </FullscreenClose>

              {images.length > 1 && (
                <>
                  <ArrowLeft onClick={goPrev}>
                    <ChevronLeft size={28} />
                  </ArrowLeft>
                  <ArrowRight onClick={goNext}>
                    <ChevronRight size={28} />
                  </ArrowRight>
                </>
              )}

              <Counter>
                {fullscreenIndex + 1} / {images.length}
              </Counter>
            </FullscreenImageBox>
          </FullscreenOverlay>
        )}
      </Container>
    </Section>
  );
}
