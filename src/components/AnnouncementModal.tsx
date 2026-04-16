import React, { useState } from "react";
import styled from "styled-components";
import { X } from "lucide-react";

const Overlay = styled.div<{ isOpen: boolean }>`
  display: ${(p) => (p.isOpen ? "flex" : "none")};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  z-index: 9999;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.5s ease-out;
  padding: 16px;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContent = styled.div`
  position: relative;
  background: linear-gradient(135deg, rgba(30, 30, 35, 0.95) 0%, rgba(45, 45, 55, 0.95) 100%);
  border: 1px solid rgba(229, 57, 53, 0.15);
  border radius: 16px;
  padding: 40px;
  max-width: 500px;
  width: 100%;
  color: #fff;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35), 0 0 40px rgba(229, 57, 53, 0.06);
  animation: slideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);

  @keyframes slideIn {
    from {
      transform: translateY(-40px) scale(0.97);
      opacity: 0;
    }
    to {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
  }

  @media (max-width: 640px) {
    padding: 32px 24px;
    border-radius: 16px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  background: rgba(255, 255, 255, 0.06);
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(229, 57, 53, 0.15);
    opacity: 1;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Title = styled.h2`
  margin: 0 0 16px 0;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
  color: #fff;
  letter-spacing: -0.3px;

  @media (max-width: 640px) {
    font-size: 24px;
    margin-bottom: 12px;
  }
`;

const Subtitle = styled.div`
  display: inline-block;
  background: rgba(229, 57, 53, 0.2);
  border-radius: 6px;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 600;
  color: #e5393d;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
`;

const Description = styled.p`
  margin: 0 0 20px 0;
  font-size: 16px;
  line-height: 1.7;
  opacity: 0.85;
  color: rgba(255, 255, 255, 0.9);

  @media (max-width: 640px) {
    font-size: 15px;
    margin-bottom: 16px;
  }
`;

const LocationInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin: 20px 0;
  padding: 16px;
  background: rgba(229, 57, 53, 0.08);
  border-radius: 10px;
  border-left: 3px solid rgba(229, 57, 53, 0.4);
`;

const LocationText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const LocationLabel = styled.span`
  font-size: 11px;
  opacity: 0.6;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  font-weight: 600;
`;

const LocationAddress = styled.span`
  font-size: 15px;
  font-weight: 600;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.95);
`;

const InfoLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #e5393d;
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  transition: all 0.2s ease;
  margin-top: 12px;

  &:hover {
    gap: 10px;
  }
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(229, 57, 53, 0.15);
  margin: 20px 0;
`;

const PhoneCall = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 20px;
  padding: 16px;
  background: rgba(229, 57, 53, 0.08);
  border-radius: 10px;
`;

const PhoneLabel = styled.span`
  font-size: 11px;
  opacity: 0.6;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  font-weight: 600;
`;

const PhoneNumber = styled.a`
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #e5393d;
  }
`;

const PhoneText = styled.span`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export default function AnnouncementModal() {
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window === "undefined") return false;
    const hasClosedModal = sessionStorage.getItem("announcementModalClosed");
    return !hasClosedModal;
  });

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("announcementModalClosed", "true");
  };

  const handleGalleryClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    handleClose();
    const element = document.getElementById("oboz");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Overlay isOpen={isOpen}>
      <ModalContent>
        <CloseButton onClick={handleClose}>
          <X />
        </CloseButton>
        <Title>Zapisy trwają!</Title>
        <Description>
          Zapisy na letnie obozy PRO BASKET CAMP 2026 już wystartowały! 🏀
          Przygotowaliśmy turnusy w lipcu i sierpniu, pełne treningów, pasji i
          świetnej atmosfery.
        </Description>
        <div>
          <LocationText>
            <LocationLabel>📍 Lokalizacja</LocationLabel>
            <LocationAddress>
              Gdynia Dąbrowa
              <br />
              ZSP3, ul. Nagietkowa 73
            </LocationAddress>
          </LocationText>
        </div>
        <InfoLink href="#oboz" onClick={handleGalleryClick}>
          Sprawdź pełne informacje o obozie →{" "}
        </InfoLink>
        <Divider />
        <PhoneCall>
          <span style={{ fontSize: "20px" }}>☎️</span>
          <PhoneText>
            <PhoneLabel>
              {" "}
              zadzwoń i zarezerwuj swoje miejsce już dziś!
            </PhoneLabel>
            <PhoneNumber href="tel:+48531002937">+48 531 002 937</PhoneNumber>
          </PhoneText>
        </PhoneCall>
      </ModalContent>
    </Overlay>
  );
}
