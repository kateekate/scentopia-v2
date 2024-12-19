import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #232a2a;
  overflow: hidden;
`;

const Navbar = styled.nav`
  width: 100%;
  height: 10vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  position: fixed;
  top: 0;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.3s ease, visibility 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const NavItem = styled.a`
  color: #f0ab9d;
  font-size: 1.2rem;
  text-transform: uppercase;
  text-decoration: none;
  margin: 0 15px;
  cursor: pointer;
  transition: font-size 0.3s ease, visibility 0.3s ease;

  &:hover {
    font-size: 1.4rem;
  }
`;

const Circle = styled.div`
  width: 50%;
  aspect-ratio: 1;
  border-radius: 50%;
  background-image: url("/images/circle.png");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 20px 11px rgba(31, 26, 26, 0.59);
  transition: transform 1s ease, width 1s ease;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgb(0 0 0 / 30%);
    border-radius: 50%;
  }

  &:hover {
    transform: translateX(-30%) scale(0.8);
  }

  @media (min-width: 1430px) {
    width: 40%;
  }
`;

const Header = styled.header`
  position: absolute;
  font-size: 10vw;
  color: #f0ab9d;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  z-index: 2;
  transform: none;
  transition: transform 1s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const SubHeader = styled.div`
  position: absolute;
  font-size: 2vw;
  color: #f0ab9d;
  font-weight: normal;
  text-transform: uppercase;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  z-index: 3;
  margin-top: 25vh;

  opacity: 0;
  transform: translateY(10px);
  animation: fadeInUp 1s ease-out 1s forwards;

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HoverContent = styled.div`
  width: 300px;
  position: absolute;
  left: 150%;
  top: 50%;
  transform: translateY(-50%);
  color: #f0ab9d;
  font-size: 1.5vw;
  text-transform: uppercase;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease, visibility 0s 0.5s;

  ${Circle}:hover & {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.5s ease, visibility 0s;
  }
`;

const Button = styled.button`
  background-color: #f0ab9d;
  color: #232a2a;
  border: none;
  margin-top: 12px;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d48f7a;
  }
`;

const FlowerWrapper = styled.div`
  position: absolute;
  top: 10%;
  right: 10%;
  opacity: ${(props) => (props.showFlower ? 1 : 0)};
  transform: ${(props) =>
    props.showFlower
      ? "scale(5) "
      : "scale(1) translateX(10%) translateY(10%)"};
  transition: opacity 0.5s ease, transform 0.5s ease;
  z-index: -1;
  pointer-events: none;
`;

const FlowerImage = styled.img`
  height: 200px;
  transition: transform 0.5s ease;
`;

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Container>
      <Navbar>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/about">About us</NavItem>
        <NavItem href="/">Contacts</NavItem>
      </Navbar>
      <Circle>
        <Header>Scentopia</Header>
        <SubHeader>Your scent journey starts here</SubHeader>
        <HoverContent>
          <div>Start your scent quiz</div>
          <Button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => alert("Start quiz")}
          >
            Start
          </Button>
          <FlowerWrapper showFlower={isHovered}>
            <FlowerImage src="/images/pink-flower.svg" alt="Blooming Flower" />
          </FlowerWrapper>
        </HoverContent>
      </Circle>
    </Container>
  );
}
